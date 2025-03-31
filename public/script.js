// グローバル変数
let currentProject = 1;
let currentQuestion = 1;
let selectedApp;
let selectedExam;
let questionData; // 問題データを格納する配列（初期化はloadQuestions関数内で行う）

// タイマー関連の変数
let timeLeft;
let timerInterval;

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    // 問題データを読み込む
    loadQuestions();
    
    // 選択された値を取得
    selectedApp = parseInt(localStorage.getItem('selectedApp')) || 1;
    selectedExam = parseInt(localStorage.getItem('selectedExam')) || 1;

    // 問題表示画面の場合のみ初期化
    if (document.getElementById('questionText')) {
        restoreState();
        initializeTimer();
        initializeQuestionNav();
        updateQuestionDisplay();
    }
    
    // レビューページの場合
    if (window.location.pathname.endsWith('review.html')) {
        initializeReviewPage();
    }
});

// 状態の保存と復元
function saveState() {
    const state = {
        currentProject,
        currentQuestion,
        questions: {}
    };
    
    // 利用可能なプロジェクト数を取得
    const maxProjects = getAvailableProjects();
    
    // 各プロジェクトの状態を保存
    for (let p = 1; p <= maxProjects; p++) {
        state.questions[`project${p}`] = [];
        const questionCount = getQuestionsPerProject(p);
        
        for (let q = 1; q <= questionCount; q++) {
            state.questions[`project${p}`].push({
                id: q,
                needsReview: localStorage.getItem(`review_p${p}_q${q}`) === 'true',
                isCompleted: localStorage.getItem(`completed_p${p}_q${q}`) === 'true'
            });
        }
    }
    
    localStorage.setItem('mosExamState', JSON.stringify(state));
}

function restoreState() {
    const savedState = localStorage.getItem('mosExamState');
    if (savedState) {
        try {
            const state = JSON.parse(savedState);
            const maxProjects = getAvailableProjects();
            
            // 保存されたプロジェクト番号が有効な範囲内かチェック
            if (state.currentProject > maxProjects) {
                state.currentProject = 1;
            }
            
            currentProject = state.currentProject;
            currentQuestion = state.currentQuestion;
            
            // UI更新
            updateUIState();
        } catch (e) {
            console.error('状態の復元に失敗しました:', e);
            currentProject = 1;
            currentQuestion = 1;
        }
    }
}

function updateQuestionStatus() {
    const needsReview = localStorage.getItem(`review_p${currentProject}_q${currentQuestion}`) === 'true';
    const isCompleted = localStorage.getItem(`completed_p${currentProject}_q${currentQuestion}`) === 'true';
    
    const statusHtml = `
        <div class="question-status">
            <button class="status-btn review-btn ${needsReview ? 'active' : ''}" 
                    onclick="toggleReviewStatus(${currentProject}, ${currentQuestion})">
                あとで見直す <span class="check-mark">${needsReview ? '✓' : ' '}</span>
            </button>
            <button class="status-btn answered-btn ${isCompleted ? 'active' : ''}" 
                    onclick="toggleAnsweredStatus(${currentProject}, ${currentQuestion})">
                回答済み <span class="check-mark">${isCompleted ? '✓' : ' '}</span>
            </button>
        </div>
    `;
    
    const statusElement = document.getElementById('questionStatus');
    if (statusElement) {
        statusElement.innerHTML = statusHtml;
    }
}

function moveToPreviousProject() {
    const maxProjects = getAvailableProjects();
    if (currentProject > 1) {
        currentProject--;
    } else {
        currentProject = maxProjects; // 最後のプロジェクトに戻る
    }
    currentQuestion = getFirstQuestionId(currentProject);
    updateUIState();
    initializeQuestionNav(); // 問題番号のタブを更新
    saveState();
}
// 指定されたプロジェクトの先頭の問題番号を取得する関数
function getFirstQuestionId(projectNumber) {
    const appData = questionData[selectedApp];
    if (!appData) return 1;
    
    const projectKey = `project${projectNumber}`;
    const projectData = appData[projectKey];
    if (!projectData || !projectData[0]) return 1;
    
    return projectData[0].questionId;
}
function moveToNextProject() {
    const maxProjects = getAvailableProjects();
    
    if (currentProject < maxProjects) {
        // 通常の次のプロジェクトへの移動
        currentProject++;
        currentQuestion = getFirstQuestionId(currentProject);
        updateUIState();
        initializeQuestionNav(); // 問題番号のタブを更新
        saveState();
    } else {
        // 最後のプロジェクトの場合はレビューページへ
        window.location.href = 'review.html';
    }
}

function updateUIState() {
    const projectNumberElement = document.getElementById('projectNumber');
    if (projectNumberElement) {
        const maxProjects = getAvailableProjects();
        const appData = questionData[selectedApp];
        const projectKey = `project${currentProject}`;
        const projectName = appData.projectNames[projectKey];
        projectNumberElement.textContent = projectName;
        updateQuestionDisplay();
        updateQuestionStatus();
        updateQuestionButtons();
        updateProjectTabs();
    }
}

function updateQuestionButtons() {
    // 問題ボタンの状態を更新
    const questionButtons = document.querySelectorAll('.question-btn');
    questionButtons.forEach((button, index) => {
        // 現在の問題のボタンをアクティブに
        button.classList.toggle('active', index + 1 === currentQuestion);
        
        // 完了済みの問題にはクラスを追加
        const isCompleted = localStorage.getItem(`completed_p${currentProject}_q${index + 1}`) === 'true';
        button.classList.toggle('completed', isCompleted);
        
        // レビュー対象の問題にはクラスを追加
        const needsReview = localStorage.getItem(`review_p${currentProject}_q${index + 1}`) === 'true';
        button.classList.toggle('needs-review', needsReview);
    });
}

function restoreCheckboxStates() {
    const needsReview = localStorage.getItem(`review_p${currentProject}_q${currentQuestion}`) === 'true';
    const isCompleted = localStorage.getItem(`completed_p${currentProject}_q${currentQuestion}`) === 'true';
    
    if (document.getElementById('needsReview')) {
        document.getElementById('needsReview').checked = needsReview;
        document.getElementById('isCompleted').checked = isCompleted;
    }
}

function initializeTimer() {
    const noTimer = localStorage.getItem('noTimer') === 'true';
    const timerElement = document.getElementById('timer');
    
    if (noTimer) {
        // タイマーなしの場合
        if (timerElement) {
            timerElement.style.display = 'none';
        }
        return;
    }

    // 以下、既存のタイマー処理
    timeLeft = parseInt(localStorage.getItem('timeLeft')) || 3000;
    updateTimerDisplay();
    
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timerInterval = setInterval(() => {
        timeLeft--;
        localStorage.setItem('timeLeft', timeLeft);
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('時間切れです');
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.textContent = `残り時間: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function initializeQuestionNav() {
    const questionNav = document.querySelector('.question-nav');
    if (!questionNav) return;

    questionNav.innerHTML = ''; // 既存のボタンをクリア

    // 現在のプロジェクトの問題を取得
    const appData = questionData[selectedApp];
    if (!appData) return;

    const projectKey = `project${currentProject}`;
    const projectQuestions = appData[projectKey];
    if (!projectQuestions) return;

    // 各問題のボタンを生成
    projectQuestions.forEach(question => {
        const button = document.createElement('button');
        button.className = 'question-btn';
        button.textContent = question.questionId;
        
        // 問題の状態に応じてクラスを追加
        const isCompleted = localStorage.getItem(`completed_p${currentProject}_q${question.questionId}`) === 'true';
        const needsReview = localStorage.getItem(`review_p${currentProject}_q${question.questionId}`) === 'true';
        
        if (isCompleted) button.classList.add('completed');
        if (needsReview) button.classList.add('needs-review');
        if (question.questionId === currentQuestion) button.classList.add('active');
        
        button.onclick = () => {
            currentQuestion = question.questionId;
            updateUIState();
            saveState();
        };
        
        questionNav.appendChild(button);
    });
}

function initializeReviewPage() {
    const tableBody = document.getElementById('reviewTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    const maxProjects = getAvailableProjects();
    const appData = questionData[selectedApp];
    if (!appData) return;
    
    for (let p = 1; p <= maxProjects; p++) {
        const projectKey = `project${p}`;
        const projectData = appData[projectKey];
        if (!projectData || !projectData[0]) continue;

        // プロジェクトヘッダー
        const projectRow = document.createElement('tr');
        projectRow.innerHTML = `
            <td colspan="3" class="project-header">
                ${appData.projectNames[projectKey]}
            </td>
        `;
        tableBody.appendChild(projectRow);
        
        // 問題を表示
        projectData.forEach(question => {
            const needsReview = localStorage.getItem(`review_p${p}_q${question.questionId}`) === 'true';
            const isCompleted = localStorage.getItem(`completed_p${p}_q${question.questionId}`) === 'true';
            
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td class="question-cell">
                    <a href="#" class="question-link" onclick="goToQuestion(${p}, ${question.questionId})">
                        問題 ${question.questionId}
                    </a>
                </td>
                <td class="status-cell">
                    ${needsReview ? '<span class="status-label review">要レビュー</span>' : ''}
                </td>
                <td class="status-cell">
                    ${isCompleted ? '<span class="status-label completed">回答済み</span>' : ''}
                </td>
            `;
            
            tableBody.appendChild(row);
        });
    }

    // タイマー表示を更新
    const noTimer = localStorage.getItem('noTimer') === 'true';
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        if (noTimer) {
            timerElement.style.display = 'none';
        } else {
            timeLeft = parseInt(localStorage.getItem('timeLeft')) || 3000;
            updateTimerDisplay();
        }
    }
}

function goToQuestion(project, question) {
    currentProject = project;
    currentQuestion = question;
    saveState();
    window.location.href = 'select.html';
}

function updateReviewStatus(project, question, status) {
    localStorage.setItem(`review_p${project}_q${question}`, status);
    saveState();
}

function updateCompletedStatus(project, question, status) {
    localStorage.setItem(`completed_p${project}_q${question}`, status);
    saveState();
}

function updateQuestionDisplay() {
    const questionText = document.getElementById('questionText');
    if (!questionText) return;

    // 選択されたアプリケーションのデータを取得
    const appData = questionData[selectedApp];
    if (!appData) {
        questionText.textContent = 'アプリケーションのデータが見つかりません';
        return;
    }

    // プロジェクトのデータを取得
    const projectKey = `project${currentProject}`;
    const projectData = appData[projectKey];
    if (!projectData) {
        questionText.textContent = 'プロジェクトのデータが見つかりません';
        return;
    }

    // 現在の問題を取得
    const currentQuestionData = projectData.find(q => q.questionId === currentQuestion);
    if (currentQuestionData) {
        questionText.textContent = currentQuestionData.questionText;
    } else {
        questionText.textContent = '問題が見つかりません';
    }
}

// 問題データを読み込む関数
function loadQuestions() {
    // questions.jsで定義した関数を使用
    questionData = loadQuestionData();
}

// ステータス切り替え関数を修正
function toggleReviewStatus(project, question) {
    const currentStatus = localStorage.getItem(`review_p${project}_q${question}`) === 'true';
    localStorage.setItem(`review_p${project}_q${question}`, !currentStatus);
    updateQuestionStatus();
    updateQuestionButtons();
}

function toggleAnsweredStatus(project, question) {
    const currentStatus = localStorage.getItem(`completed_p${project}_q${question}`) === 'true';
    localStorage.setItem(`completed_p${project}_q${question}`, !currentStatus);
    updateQuestionStatus();
    updateQuestionButtons();
}

// ページを閉じる時の処理
window.addEventListener('beforeunload', () => {
    // タイマーが動いている場合は現在の時間を保存
    if (timeLeft > 0) {
        localStorage.setItem('timeLeft', timeLeft);
    }
});

function finishExam() {
    if (confirm('試験を終了しますか？\n\n※ 終了後は問題の回答状況は保持されます。')) {
        // タイマーを停止
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        
        // 試験終了ボタンを非表示にし、最初の画面に戻るボタンを表示
        const finishArea = document.querySelector('.finish-area');
        if (finishArea) {
            finishArea.innerHTML = `
                <button onclick="window.location.href='index.html'" class="finish-button">
                    最初の画面に戻る
                </button>
            `;
        }
    }
}

// 利用可能なプロジェクト数を取得する関数
function getAvailableProjects() {
    const appData = questionData[selectedApp] || {};
    return Object.keys(appData).filter(key => key.startsWith('project') && Array.isArray(appData[key])).length;
}

function updateProjectTabs() {
    const projectTabs = document.getElementById('projectTabs');
    if (!projectTabs) return;

    projectTabs.innerHTML = '';
    const maxProjects = getAvailableProjects();
    const appData = questionData[selectedApp];

    for (let i = 1; i <= maxProjects; i++) {
        const projectKey = `project${i}`;
        const projectName = appData.projectNames[projectKey];
        const tab = document.createElement('button');
        tab.className = `project-tab ${i === currentProject ? 'active' : ''}`;
        tab.textContent = `${i}章-${projectName}`;
        tab.onclick = () => {
            currentProject = i;
            currentQuestion = 1;
            updateUIState();
            saveState();
        };
        projectTabs.appendChild(tab);
    }
}

function displayReviewPage() {
    const appData = questionData[selectedApp];
    if (!appData) return;

    const reviewQuestions = [];
    for (let projectId = 1; projectId <= getAvailableProjects(); projectId++) {
        const projectKey = `project${projectId}`;
        const projectData = appData[projectKey];
        const projectName = projectData.name;
        const questions = projectData.questions;

        questions.forEach(question => {
            const questionId = question.questionId;
            if (needsReviewSet.has(questionId)) {
                reviewQuestions.push({
                    projectId: projectId,
                    projectName: projectName,
                    questionId: questionId,
                    questionText: question.questionText
                });
            }
        });
    }

    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '';

    if (reviewQuestions.length === 0) {
        reviewList.innerHTML = '<p>復習が必要な問題はありません。</p>';
        return;
    }

    reviewQuestions.forEach(question => {
        const listItem = document.createElement('div');
        listItem.className = 'review-item';
        listItem.innerHTML = `
            <div class="review-header">${question.projectName}</div>
            <div class="review-content">
                <div class="question-number">問題 ${question.questionId}</div>
                <div class="question-text">${question.questionText}</div>
            </div>
        `;
        reviewList.appendChild(listItem);
    });
} 