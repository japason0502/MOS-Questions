// 問題データの配列（初期データ）
const initialQuestionData = {
    // Excel
    1: {
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
                videoUrl: "https://example.com/video1",
                videoUrlNoCm: "https://example.com/video1-nocm"
            },
            {
                questionId: 2,
                questionText: "ワークシート｢検索｣から｢★｣を含むセルを検索し､フォントの色を標準の色｢オレンジ｣に設定してください｡",
                videoUrl: "https://example.com/video2",
                videoUrlNoCm: "https://example.com/video2-nocm"
            },
            {questionId: 3, questionText: "名前｢装飾して欲しい箇所｣を選択し､標準の色｢赤｣の塗りつぶしの色を適用します｡"},
            {questionId: 4, questionText: "｢問題1を選択する｣のセルに名前｢問題1｣へのハイパーリンクを設定します｡"},
            {questionId: 5, questionText: "｢MOSの学校のホームページへ｣のセルに「https://mos.japason.co.jp/」へのハイパーリンクを設定します｡"},
            {questionId: 6, questionText: "｢リンク｣のセルのハイパーリンクを削除します｡"},
            {questionId: 7, questionText: "印刷の向きを横向きにし､サイズをA3にします｡"},
            {questionId: 8, questionText: "余白を｢広い｣に変更します｡"},
            {questionId: 9, questionText: "C列の幅を自動調整します｡"},
            {questionId: 10, questionText: "12行目の行の高さを正確に｢20｣に設定します｡"},
            {questionId: 11, questionText: "ヘッダーの中央にシート名を表示します｡"},
            {questionId: 12, questionText: "クイックアクセスツールバーに｢自動保存｣を追加します｡"},
            {questionId: 13, questionText: "シート｢検索｣を改ページプレビューで表示してください｡"},
            {questionId: 14, questionText: "(シート｢【1-X演習問題】｣について)スクロールしても1~5行目までが常に表示されるようにします｡"},
            {questionId: 15, questionText: "｢社員別売上一覧｣シートのウィンドウを上下に2分割してください｡上側のウィンドウは4行分表示します｡"},
            {questionId: 16, questionText: "ブックのプロパティのサブタイトルを｢1章演習問題｣にします｡"},
            {questionId: 17, questionText: "(シート｢【1-X演習問題】｣について)用紙1ページにおさまるように印刷の設定をします｡"},
            {questionId: 18, questionText: "(シート｢【1-X演習問題】｣について)セル範囲A2:B10だけが印刷されるよう､印刷範囲の設定をします｡"},
            {questionId: 19, questionText: "(シート｢【1-X演習問題】｣について)名前を｢1章演習問題のPDF版｣にして､PDF形式でデスクトップに保存します｡"},
            {questionId: 20, questionText: "ドキュメント検査を行い､プロパティと個人情報を削除してください。"},
            {questionId: 21, questionText: "ブックのアクセシビリティをチェックし、グラフ1のエラーを修正してください。代替テキストは「右肩上がりのグラフ」と設定します｡"},
            {questionId: 22, questionText: "ブックの互換性をチェックし､結果を新しいワークシートに表示してください｡"},
            {questionId: 23, questionText: "このセルのコメントに｢確認します｣と返信します｡"},
            {questionId: 24, questionText: "このセルにメモを追加し｢常に表示するにはメモが便利｣と記入します｡"},
            {questionId: 25, questionText: "このセルのコメントを削除します｡"},
            {questionId: 26, questionText: "このセルのコメントを解決します｡"}
        ],
        
        // 2章-セル
        project2: [
            {
                questionId: 27,
                questionText: "C2セルをコピーし､D2セルに値だけを貼り付けます｡",
                videoUrl: "https://example.com/video27"
            },
            {questionId: 28, questionText: "オートフィル機能を使用して、「スイム記録-2月」の表の日付列を入力します。"},
            {questionId: 29, questionText: "「ラン記録」の表の1行目が1月，2月，3月，･･･8月とになるように入力してください。"},
            {questionId: 30, questionText: "F列の2行目から23行目が1，2，3，…と連番になるように入力してください。"},
            {questionId: 31, questionText: "｢スイム記録-2月｣と｢スイム記録-3月｣の行の上に､行を追加します｡"},
            {questionId: 32, questionText: "「スイム記録-3月」の表の空白セルを削除して、表を整えてください。"},
            {questionId: 33, questionText: "セル範囲C8:D8を結合します｡その際､文字の配置は変更しません｡"},
            {questionId: 34, questionText: "C9の文字列を｢右揃え｣｢縦書き｣で表示してください｡"},
            {questionId: 35, questionText: "セルC10の文字列の左インデントを2文字に設定してください｡"},
            {questionId: 36, questionText: "C2セルの書式を､セルA1に適用します｡"},
            {questionId: 37, questionText: "C12セルの文字列を折り返して表示します｡"},
            {questionId: 38, questionText: "C13セルを小数点以下第3位まで表示してください｡"},
            {questionId: 39, questionText: "C14セルに､通貨の表示形式を設定してください｡"},
            {questionId: 40, questionText: "表｢スイム記録-2月｣の日付を｢3月14日｣の形式で表示します｡"},
            {questionId: 41, questionText: "セルC16に｢見出し1｣のスタイルを適用してください｡"},
            {questionId: 42, questionText: "C13の書式設定をクリアしてください"},
            {questionId: 43, questionText: "シート｢田中さんの成績｣とシート｢佐藤さんの成績｣をグループにしてください｡次に､セル範囲A1:B1に､スタイル｢集計｣を適用してください｡"},
            {questionId: 44, questionText: "セルA2:B8に､名前｢演習前半｣を定義してください｡"},
            {questionId: 45, questionText: "表｢ラン記録｣の数値を元に､｢推移｣の列に縦棒スパークラインを挿入し､頂点(山)を表示してください。"},
            {questionId: 46, questionText: "表｢ラン記録｣の8月の列について､50より小さいセルに｢濃い赤の文字､明るい赤の背景｣の書式を設定してください｡"},
            {questionId: 47, questionText: "表｢ラン記録｣の1月の列に緑のグラデーションのデータバーを表示してください｡"},
            {questionId: 48, questionText: "表｢ラン記録｣の3月の列に設定されている条件付き書式を解除してください｡"}
        ],
        // 3章-テーブル
        project3: [
            {questionId: 49, questionText: "A1:E5の表をテーブルに変更してください｡先頭行はタイトルとして使用します｡"},
            {questionId: 50, questionText: "A1:E5のテーブルにスタイル｢ゴールド,テーブルスタイル(中間5)｣を適用します｡"},
            {questionId: 51, questionText: "献立表のテーブルを解除します｡"},
            {questionId: 52, questionText: "A1:E5のテーブルに列｢天気｣を､距離(m)の左に追加します｡テーブル以外には影響がないようにします｡"},
            {questionId: 53, questionText: "生徒リストのテーブルに｢生徒リスト｣と名前をつけてください"},
            {questionId: 54, questionText: "A1:E5のテーブルの縞模様を解除し､最後の列を強調してください｡"},
            {questionId: 55, questionText: "A1:E5のテーブルに集計行を表示してください｡距離(m)と時間(分)に合計､疲労度に平均を表示します｡感想は非表示にします｡"},
            {questionId: 56, questionText: "生徒リストのテーブルから､名前が｢タ｣で始まるレコードだけを表示してください｡"},
            {questionId: 57, questionText: "A1:E5のテーブルを､2月1日の日にちのレコードだけ表示してください｡データを削除してはいけません｡"},
            {questionId: 58, questionText: "A1:E5のテーブルを､時間(分)の多い順に並び替えてください｡時間が同じ場合､疲労度の低い順にします｡"}
        ],
        // 4章-数式･関数
        project4: [
            {questionId: 59, questionText: "合計金額の列に､数量と単価を掛けた金額を求める数式を入力します｡"},
            {questionId: 60, questionText: "値引きの列に､値引き金額を求める数式を入力してください｡値引き金額は､合計金額にセルB1の値引き率を掛けて計算します｡"},
            {questionId: 61, questionText: "お会計の列に､合計金額から値引きを引いた金額を求める数式を入力します｡"},
            {questionId: 62, questionText: "関数を使って､C8に得点の最高点を表示してください｡"},
            {questionId: 63, questionText: "関数を使って､B8に時間の最高記録を表示してください｡最高記録はもっとも速いタイムを求めます｡"},
            {questionId: 64, questionText: "関数を使って､B9セルに時間の平均を表示してください｡"},
            {questionId: 65, questionText: "関数を使って､B11に初参加者数を表示してください｡初参加に数値が入力されているセルを数えます｡"},
            {questionId: 66, questionText: "関数を使って､B12に途中棄権数を表示してください｡時間が空白のセルの数を求めます｡"},
            {questionId: 67, questionText: "関数を使って､B13に参加数を表示してください｡名前のセルを数えます｡"},
            {questionId: 68, questionText: "関数を使って､備考の列に､初参加が｢1｣の場合には｢初心者｣と表示し､そうでない場合は｢経験者｣と表示してください｡"},
            {questionId: 69, questionText: "関数を使って､評価の列に､得点が50点未満の人には｢失格｣と表示し､そうでなければ何も表示しないようにしてください｡"},
            {questionId: 70, questionText: "関数を使って､表を得点の多い順に並べ替えたものを､H2を基点に表示してください｡"},
            {questionId: 71, questionText: "関数を使って､表｢練習会参加記録｣の｢名前｣列から重複をなくして一意にしたデータを､D31セルを基点に表示してください"},
            {questionId: 72, questionText: "関数を使って､名前の先頭1文字を､イニシャルの列に表示してください｡"},
            {questionId: 73, questionText: "関数を使って､｢前回参加月｣の列に､｢前回参加年月日｣の列の5文字目から2文字を表示してください｡"},
            {questionId: 74, questionText: "関数を使って､｢大文字｣の列に､B列の名前を大文字に変換して表示してください｡"},
            {questionId: 75, questionText: "関数を使って､｢文字数｣の列に､名前の文字数を表示してください｡"},
            {questionId: 76, questionText: "関数を使って､｢ゼッケン印字｣の列に､№と名前の列を結合して表示してください｡№と名前は｢-｣でつなぎます｡"},
            {questionId: 77, questionText: "関数を使って､セルB22に､1から5の範囲内でランダムな値を表示してください｡"},
            {questionId: 78, questionText: "関数を使って､セルA25を基点とする3行2列に､4から始まり､6ずつ増加する数値データを表示してください｡"},
            {questionId: 79, questionText: "関数を使って､表｢ランイベント参加日と参加者｣の｢名前｣列から重複をなくして一意にしたデータを､B16セルを基点に表示してください｡数式では､定義された名前を使用します｡"},
            {questionId: 80, questionText: "当シートの数式を表示してください｡"}
        ],
        // 5章-グラフ
        project5: [
            {questionId: 81, questionText: "日別売上の表を使って､集合縦棒グラフを作成してください｡"},
            {questionId: 82, questionText: "テスト結果の表を使って､名前ごとの合計を表す集合横棒グラフを作成します｡作成したグラフはセル範囲【H7:M13】に配置します｡"},
            {questionId: 83, questionText: "折れ線グラフをグラフシートに移動します｡グラフシート名は｢売上推移分析グラフ｣とします｡"},
            {questionId: 84, questionText: "集合縦棒グラフに､物理のデータ系列を追加します｡"},
            {questionId: 85, questionText: "集合縦棒グラフの横軸と凡例を入れ替えて､横軸に科目､凡例に名前を表示します｡"},
            {questionId: 86, questionText: "集合縦棒グラフの､第1横軸（値軸）にラベル「科目」を表示してください。"},
            {questionId: 87, questionText: "円グラフに吹き出しのデータラベルを設定してください｡データラベルには分類名だけを表示します｡"},
            {questionId: 88, questionText: "円グラフのグラフタイトルを｢日ごとの売上額の割合｣に変更します｡"},
            {questionId: 89, questionText: "円グラフに｢レイアウト1｣を適用します｡"},
            {questionId: 90, questionText: "集合縦棒グラフにスタイル｢スタイル6｣､色｢モノクロ パレット1｣を適用してください｡"},
            {questionId: 91, questionText: "集合縦棒グラフに代替テキスト｢生徒別得点グラフ｣を設定してください｡"}
        ],
        // 応用問題
        project6: [
            {questionId: 92, questionText: "タブ区切りのテキストファイル「1-X(演習用)MOS365試験範囲」を、セル｢E1｣を基点とする位置に、インポートします。先頭行をテーブルの見出しとして使用します。"},
            {questionId: 93, questionText: "C4にハイパーリンクを挿入してください。リンク先は「https://pub.jmam.co.jp/book/b646577.html」とします。ハイパーリンクをポイントすると「本の紹介ページへ」と表示されるようにします。"},
            {questionId: 94, questionText: "クイックアクセスツールバーに、コマンド「自動保存のオン/オフ切り替え」を登録してください。作業中のブックだけに適用します。"},
            {questionId: 95, questionText: "｢1章応用｣の名前でPDFファイルとしてデスクトップに保存してください｡保存後､PDFファイルは開かないようにします｡"},
            {questionId: 96, questionText: "ブックのプロパティのタグに｢MOS365Excel｣と｢応用｣を設定してください｡"},
            {questionId: 97, questionText: "6行目以降が2ページ目に印刷されるよう､改ページを挿入してください｡"},
            {questionId: 98, questionText: "2行目が繰り返し印刷されるよう設定してください｡"},
            {questionId: 99, questionText: "A6からA20まで､1,2,3,…と連番になるように入力してください｡書式は変更しません｡"},
            {questionId: 100, questionText: "セルA1に入力されている文字列をセル範囲A1:D1の中央に配置してください。セルは結合されないようにします。"},
            {questionId: 101, questionText: "A8:F11の表の1月から4月の数値について､50以上のセルのフォントを太字にしてください｡"},
            {questionId: 102, questionText: "推移の列のスパークラインについて､最小を0に､最大を｢すべてのスパークラインで同じ値｣に設定します｡"},
            {questionId: 103, questionText: "表A14:E17の5月から9月の数値に､赤､白､青のカラースケールを設定してください｡最小値を｢最小値｣､中間値を百分位｢40｣､最大値を百分位｢60｣に設定します｡"},
            {questionId: 104, questionText: "5月の列に4つの評価のアイコンを表示してください｡"},
            {questionId: 105, questionText: "テーブルをシングル→ダブルの順にしてください｡"},
            {questionId: 106, questionText: "テーブルから､｢葛飾区｣または｢足立区｣を含むデータだけを表示します｡"},
            {questionId: 107, questionText: "表｢種目･月別の練習量(km)｣から､集合縦棒グラフを作成してください｡凡例に月が表示されるようにします｡"},
            {questionId: 108, questionText: "表｢トライアスロンの各種目の距離｣から､各種目の割合を示す3-D円グラフを作成します｡"},
            {questionId: 109, questionText: "集合横棒グラフに軸ラベル｢距離｣を追加し､横軸の右下に配置します｡"}
        ]
    },
    // Word
    2: {
        projectNames: {
            project1: "1章-文書の作成",
            project2: "2章-文書の編集"
        },
        project1: [
            {questionId: 1, questionText: "文書のタイトルを「報告書」に設定してください。"},
            {questionId: 2, questionText: "見出しスタイルを適用してください。"},
            {questionId: 3, questionText: "ページ番号を追加してください。"}
        ],
        project2: [
            {questionId: 1, questionText: "テスト"}
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
    const savedData = localStorage.getItem('questionData');
    if (savedData) {
        try {
            return JSON.parse(savedData);
        } catch (e) {
            console.error('データの読み込みに失敗しました:', e);
            return initialQuestionData;
        }
    }
    return initialQuestionData;
}

// データを保存する関数
function saveQuestionData(data) {
    try {
        localStorage.setItem('questionData', JSON.stringify(data));
    } catch (e) {
        console.error('データの保存に失敗しました:', e);
    }
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