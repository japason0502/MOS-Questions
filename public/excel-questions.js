// Excelの問題データ
const excelData = {
    projectNames: {
        project1: "1章-シート・ブック",
        project2: "2章-セル",
        project3: "3章-テーブル",
        project4: "4章-数式･関数",
        project5: "5章-グラフ",
        project6: "応用問題"
    },
    // 1章-シート・ブック
    project1: [
        {
            questionId: 1,
            questionText: "タブ区切りのテキストファイル「1-X(演習用)MOS365試験範囲」を、セル｢E1｣を基点とする位置に、インポートします。",
            videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=1s",
            videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742135"
        },
        {
            questionId: 2,
            questionText: "ワークシート｢検索｣から｢★｣を含むセルを検索し､フォントの色を標準の色｢オレンジ｣に設定してください｡",
            videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=40s",
            videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742142"
        }
        // ... 既存のproject1の問題データ ...
    ],
    // 2章-セル
    project2: [
        {
            questionId: 27,
            questionText: "C2セルをコピーし､D2セルに値だけを貼り付けます｡",
            videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=1s",
            videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742116"
        },
        // ... 既存のproject2の問題データ ...
    ],
    // 3章-テーブル
    project3: [
        {
            questionId: 49,
            questionText: "A1:E5の表をテーブルに変更してください｡先頭行はタイトルとして使用します｡",
            videoUrl: "https://www.youtube.com/watch?v=8gPwycoRg6c&t=1s",
            videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742123"
        },
        // ... 既存のproject3の問題データ ...
    ],
    // 4章-数式･関数
    project4: [
        {
            questionId: 59,
            questionText: "合計金額の列に､数量と単価を掛けた金額を求める数式を入力します｡",
            videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=1s",
            videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742185"
        },
        // ... 既存のproject4の問題データ ...
    ],
    // 5章-グラフ
    project5: [
        {
            questionId: 81,
            questionText: "日別売上の表を使って､集合縦棒グラフを作成してください｡",
            videoUrl: "https://www.youtube.com/watch?v=zy8U2Y2bOqk&t=1s",
            videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742200"
        },
        // ... 既存のproject5の問題データ ...
    ],
    // 応用問題
    project6: [
        {
            questionId: 92,
            questionText: "タブ区切りのテキストファイル「1-X(演習用)MOS365試験範囲」を、セル｢E1｣を基点とする位置に、インポートします。先頭行をテーブルの見出しとして使用します。",
            videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5241s",
            videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742166"
        },
        // ... 既存のproject6の問題データ ...
    ]
};

// LocalStorageからデータを読み込む関数
function loadExcelQuestionData() {
    const savedData = localStorage.getItem('excelQuestionData');
    if (savedData) {
        try {
            return JSON.parse(savedData);
        } catch (e) {
            console.error('データの読み込みに失敗しました:', e);
            return excelData;
        }
    }
    return excelData;
}

// データを保存する関数
function saveExcelQuestionData(data) {
    try {
        localStorage.setItem('excelQuestionData', JSON.stringify(data));
    } catch (e) {
        console.error('データの保存に失敗しました:', e);
    }
}

// 利用可能なプロジェクト数を取得する関数
function getAvailableExcelProjects() {
    const appData = loadExcelQuestionData();
    return Object.keys(appData).filter(key => key.startsWith('project')).length;
}

// 各プロジェクトの問題数を取得する関数
function getExcelQuestionsPerProject(projectId) {
    const appData = loadExcelQuestionData();
    const projectKey = `project${projectId}`;
    return appData[projectKey] ? appData[projectKey].length : 0;
}

// 問題テキストを取得する関数
function getExcelQuestionText(projectId, questionId) {
    const appData = loadExcelQuestionData();
    const projectKey = `project${projectId}`;
    const projectQuestions = appData[projectKey] || [];
    const question = projectQuestions.find(q => q.questionId === questionId);
    return question ? question.questionText : '';
} 