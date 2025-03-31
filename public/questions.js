// 問題データの配列（初期データ）
const initialQuestionData = {
    // Excel
    1: {
        // シート・ブック
        project1: [
            {questionId: 1, questionText: "タブ区切りのテキストファイル「1-X(演習用)MOS365試験範囲」を、セル｢E1｣を基点とする位置に、インポートします。"},
            {questionId: 2, questionText: "ワークシート｢検索｣から｢★｣を含むセルを検索し､フォントの色を標準の色｢オレンジ｣に設定してください｡"},
            {questionId: 3, questionText: "名前｢装飾して欲しい箇所｣を選択し､標準の色｢赤｣の塗りつぶしの色を適用します｡"}
        ],
        // セル
        project2: [
            {questionId: 1, questionText: "C2セルをコピーし､D2セルに値だけを貼り付けます｡"},
            {questionId: 2, questionText: "オートフィル機能を使用して、「スイム記録-2月」の表の日付列を入力します。"},
            {questionId: 3, questionText: "「ラン記録」の表の1行目が1月，2月，3月，･･･8月とになるように入力してください。"}
        ],
        // テーブル
        project3: [
            {questionId: 1, questionText: "A1:E5の表をテーブルに変更してください｡先頭行はタイトルとして使用します｡"},
            {questionId: 2, questionText: "A1:E5のテーブルにスタイル｢ゴールド,テーブルスタイル(中間5)｣を適用します｡"},
            {questionId: 3, questionText: "献立表のテーブルを解除します｡"}
        ],
        // 数式・関数
        project4: [
            {questionId: 1, questionText: "合計金額の列に､数量と単価を掛けた金額を求める数式を入力します｡"},
            {questionId: 2, questionText: "値引きの列に､値引き金額を求める数式を入力してください｡値引き金額は､合計金額にセルB1の値引き率を掛けて計算します｡"},
            {questionId: 3, questionText: "お会計の列に､合計金額から値引きを引いた金額を求める数式を入力します｡"}
        ],
        // グラフ
        project5: [
            {questionId: 1, questionText: "日別売上の表を使って､集合縦棒グラフを作成してください｡"},
            {questionId: 2, questionText: "テスト結果の表を使って､名前ごとの合計を表す集合横棒グラフを作成します｡作成したグラフはセル範囲【H7:M13】に配置します｡"},
            {questionId: 3, questionText: "折れ線グラフをグラフシートに移動します｡グラフシート名は｢売上推移分析グラフ｣とします｡"}
        ],
        // 応用問題
        project6: [
            {questionId: 1, questionText: "タブ区切りのテキストファイル「1-X(演習用)MOS365試験範囲」を、セル｢E1｣を基点とする位置に、インポートします。先頭行をテーブルの見出しとして使用します。"},
            {questionId: 2, questionText: "C4にハイパーリンクを挿入してください。リンク先は「https://pub.jmam.co.jp/book/b646577.html」とします。ハイパーリンクをポイントすると「本の紹介ページへ」と表示されるようにします。"},
            {questionId: 3, questionText: "クイックアクセスツールバーに、コマンド「自動保存のオン/オフ切り替え」を登録してください。作業中のブックだけに適用します。"}
        ]
    },
    // Word
    2: {
        project1: [
            {questionId: 1, questionText: "文書のタイトルを「報告書」に設定してください。"},
            {questionId: 2, questionText: "見出しスタイルを適用してください。"},
            {questionId: 3, questionText: "ページ番号を追加してください。"}
        ]
    },
    // PowerPoint
    3: {
        project1: [
            {questionId: 1, questionText: "タイトルスライドを作成してください。"},
            {questionId: 2, questionText: "スライドマスターを編集してください。"},
            {questionId: 3, questionText: "アニメーションを追加してください。"}
        ]
    },
    // Excel Expert
    4: {
        project1: [
            {questionId: 1, questionText: "ピボットテーブルを作成してください。"},
            {questionId: 2, questionText: "スライサーを追加してください。"},
            {questionId: 3, questionText: "条件付き書式を設定してください。"}
        ]
    },
    // Word Expert
    5: {
        project1: [
            {questionId: 1, questionText: "目次を作成してください。"},
            {questionId: 2, questionText: "変更履歴を有効にしてください。"},
            {questionId: 3, questionText: "マクロを記録してください。"}
        ]
    }
};

// LocalStorageからデータを読み込む関数
function loadQuestionData() {
    return JSON.parse(localStorage.getItem('questionData')) || initialQuestionData;
}

// データを保存する関数
function saveQuestionData(data) {
    localStorage.setItem('questionData', JSON.stringify(data));
}

// 利用可能なプロジェクト数を取得する関数
function getAvailableProjects() {
    const selectedApp = parseInt(localStorage.getItem('selectedApp')) || 1;
    const appData = loadQuestionData()[selectedApp] || {};
    return Object.keys(appData).filter(key => key.startsWith('project')).length;
}

// 各プロジェクトの問題数を取得する関数
function getQuestionsPerProject(projectId) {
    const selectedApp = parseInt(localStorage.getItem('selectedApp')) || 1;
    const appData = loadQuestionData()[selectedApp] || {};
    const projectKey = `project${projectId}`;
    return appData[projectKey] ? appData[projectKey].length : 0;
}

// 問題テキストを取得する関数
function getQuestionText(projectId, questionId) {
    const selectedApp = parseInt(localStorage.getItem('selectedApp')) || 1;
    const appData = loadQuestionData()[selectedApp] || {};
    const projectKey = `project${projectId}`;
    const projectQuestions = appData[projectKey] || [];
    const question = projectQuestions.find(q => q.questionId === questionId);
    return question ? question.questionText : '';
} 