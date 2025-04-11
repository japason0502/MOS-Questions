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
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=1s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742135"
            },
            {
                questionId: 2,
                questionText: "ワークシート｢検索｣から｢★｣を含むセルを検索し､フォントの色を標準の色｢オレンジ｣に設定してください｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=40s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742142"
            },
            {
                questionId: 3,
                questionText: "名前｢装飾して欲しい箇所｣を選択し､標準の色｢赤｣の塗りつぶしの色を適用します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=83s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742145"
            },
            {
                questionId: 4,
                questionText: "｢問題1を選択する｣のセルに名前｢問題1｣へのハイパーリンクを設定します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=111s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742127"
            },
            {
                questionId: 5,
                questionText: "｢MOSの学校のホームページへ｣のセルに「https://mos.japason.co.jp/」へのハイパーリンクを設定します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=137s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742132"
            },
            {
                questionId: 6,
                questionText: "｢リンク｣のセルのハイパーリンクを削除します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=169s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742118"
            },
            {
                questionId: 7,
                questionText: "印刷の向きを横向きにし､サイズをA3にします｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=182s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742105"
            },
            {
                questionId: 8,
                questionText: "余白を｢広い｣に変更します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=198s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742131"
            },
            {
                questionId: 9,
                questionText: "C列の幅を自動調整します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=210s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742139"
            },
            {
                questionId: 10,
                questionText: "12行目の行の高さを正確に｢20｣に設定します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=217s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742128"
            },
            {
                questionId: 11,
                questionText: "ヘッダーの中央にシート名を表示します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=241s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742104"
            },
            {
                questionId: 12,
                questionText: "クイックアクセスツールバーに｢自動保存｣を追加します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=279s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742133"
            },
            {
                questionId: 13,
                questionText: "シート｢検索｣を改ページプレビューで表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=323s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742121"
            },
            {
                questionId: 14,
                questionText: "(シート｢【1-X演習問題】｣について)スクロールしても1~5行目までが常に表示されるようにします｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=342s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742115"
            },
            {
                questionId: 15,
                questionText: "｢社員別売上一覧｣シートのウィンドウを上下に2分割してください｡上側のウィンドウは4行分表示します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=381s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742138"
            },
            {
                questionId: 16,
                questionText: "ブックのプロパティのサブタイトルを｢1章演習問題｣にします｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=417s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742146"
            },
            {
                questionId: 17,
                questionText: "(シート｢【1-X演習問題】｣について)用紙1ページにおさまるように印刷の設定をします｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=463s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742134"
            },
            {
                questionId: 18,
                questionText: "(シート｢【1-X演習問題】｣について)セル範囲A2:B10だけが印刷されるよう､印刷範囲の設定をします｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=499s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742108"
            },
            {
                questionId: 19,
                questionText: "(シート｢【1-X演習問題】｣について)名前を｢1章演習問題のPDF版｣にして､PDF形式でデスクトップに保存します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=538s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742151"
            },
            {
                questionId: 20,
                questionText: "ドキュメント検査を行い､プロパティと個人情報を削除してください。",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=604s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742143"
            },
            {
                questionId: 21,
                questionText: "ブックのアクセシビリティをチェックし、グラフ1のエラーを修正してください。代替テキストは「右肩上がりのグラフ」と設定します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=671s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742120"
            },
            {
                questionId: 22,
                questionText: "ブックの互換性をチェックし､結果を新しいワークシートに表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=725s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742114"
            },
            {
                questionId: 23,
                questionText: "このセルのコメントに｢確認します｣と返信します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=750s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742149"
            },
            {
                questionId: 24,
                questionText: "このセルにメモを追加し｢常に表示するにはメモが便利｣と記入します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=808s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742112"
            },
            {
                questionId: 25,
                questionText: "このセルのコメントを削除します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=870s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742147"
            },
            {
                questionId: 26,
                questionText: "このセルのコメントを解決します｡",
                videoUrl: "https://www.youtube.com/watch?v=TBtVFtIvAbU&t=882s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742125"
            }
        ],
        
        // 2章-セル
        project2: [
            {
                questionId: 27,
                questionText: "C2セルをコピーし､D2セルに値だけを貼り付けます｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=1s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742116"
            },
            {
                questionId: 28,
                questionText: "オートフィル機能を使用して、「スイム記録-2月」の表の日付列を入力します。",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=32s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742152"
            },
            {
                questionId: 29,
                questionText: "「ラン記録」の表の1行目が1月，2月，3月，･･･8月とになるように入力してください。",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=53s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742140"
            },
            {
                questionId: 30,
                questionText: "F列の2行目から23行目が1，2，3，…と連番になるように入力してください。",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=94s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742122"
            },
            {
                questionId: 31,
                questionText: "｢スイム記録-2月｣と｢スイム記録-3月｣の行の上に､行を追加します｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=120s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742129"
            },
            {
                questionId: 32,
                questionText: "「スイム記録-3月」の表の空白セルを削除して、表を整えてください。",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=140s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742148"
            },
            {
                questionId: 33,
                questionText: "セル範囲C8:D8を結合します｡その際､文字の配置は変更しません｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=173s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742130"
            },
            {
                questionId: 34,
                questionText: "C9の文字列を｢右揃え｣｢縦書き｣で表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=223s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742113"
            },
            {
                questionId: 35,
                questionText: "セルC10の文字列の左インデントを2文字に設定してください｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=257s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742106"
            },
            {
                questionId: 36,
                questionText: "C2セルの書式を､セルA1に適用します｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=304s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742150"
            },
            {
                questionId: 37,
                questionText: "C12セルの文字列を折り返して表示します｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=340s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742119"
            },
            {
                questionId: 38,
                questionText: "C13セルを小数点以下第3位まで表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=358s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742111"
            },
            {
                questionId: 39,
                questionText: "C14セルに､通貨の表示形式を設定してください｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=382s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742153"
            },
            {
                questionId: 40,
                questionText: "表｢スイム記録-2月｣の日付を｢3月14日｣の形式で表示します｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=398s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742136"
            },
            {
                questionId: 41,
                questionText: "セルC16に｢見出し1｣のスタイルを適用してください｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=442s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742110"
            },
            {
                questionId: 42,
                questionText: "C13の書式設定をクリアしてください",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=467s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742107"
            },
            {
                questionId: 43,
                questionText: "シート｢田中さんの成績｣とシート｢佐藤さんの成績｣をグループにしてください｡次に､セル範囲A1:B1に､スタイル｢集計｣を適用してください｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=498s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742117"
            },
            {
                questionId: 44,
                questionText: "セルA2:B8に､名前｢演習前半｣を定義してください｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=615s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742126"
            },
            {
                questionId: 45,
                questionText: "表｢ラン記録｣の数値を元に､｢推移｣の列に縦棒スパークラインを挿入し､頂点(山)を表示してください。",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=696s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742124"
            },
            {
                questionId: 46,
                questionText: "表｢ラン記録｣の8月の列について､50より小さいセルに｢濃い赤の文字､明るい赤の背景｣の書式を設定してください｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=788s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742137"
            },
            {
                questionId: 47,
                questionText: "表｢ラン記録｣の1月の列に緑のグラデーションのデータバーを表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=848s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742141"
            },
            {
                questionId: 48,
                questionText: "表｢ラン記録｣の3月の列に設定されている条件付き書式を解除してください｡",
                videoUrl: "https://www.youtube.com/watch?v=elpcAtkj_SI&t=944s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742109"
            }
        ],
        // 3章-テーブル
        project3: [
            {
                questionId: 49,
                questionText: "A1:E5の表をテーブルに変更してください｡先頭行はタイトルとして使用します｡",
                videoUrl: "https://www.youtube.com/watch?v=8gPwycoRg6c&t=1s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742123"
            },
            {
                questionId: 50,
                questionText: "A1:E5のテーブルにスタイル｢ゴールド,テーブルスタイル(中間5)｣を適用します｡",
                videoUrl: "https://www.youtube.com/watch?v=8gPwycoRg6c&t=35s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742144"
            },
            {
                questionId: 51,
                questionText: "献立表のテーブルを解除します｡",
                videoUrl: "https://www.youtube.com/watch?v=8gPwycoRg6c&t=58s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742191"
            },
            {
                questionId: 52,
                questionText: "A1:E5のテーブルに列｢天気｣を､距離(m)の左に追加します｡テーブル以外には影響がないようにします｡",
                videoUrl: "https://www.youtube.com/watch?v=8gPwycoRg6c&t=89s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742169"
            },
            {
                questionId: 53,
                questionText: "生徒リストのテーブルに｢生徒リスト｣と名前をつけてください",
                videoUrl: "https://www.youtube.com/watch?v=8gPwycoRg6c&t=126s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742198"
            },
            {
                questionId: 54,
                questionText: "A1:E5のテーブルの縞模様を解除し､最後の列を強調してください｡",
                videoUrl: "https://www.youtube.com/watch?v=8gPwycoRg6c&t=151s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742182"
            },
            {
                questionId: 55,
                questionText: "A1:E5のテーブルに集計行を表示してください｡距離(m)と時間(分)に合計､疲労度に平均を表示します｡感想は非表示にします｡",
                videoUrl: "https://www.youtube.com/watch?v=8gPwycoRg6c&t=177s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742204"
            },
            {
                questionId: 56,
                questionText: "生徒リストのテーブルから､名前が｢タ｣で始まるレコードだけを表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=8gPwycoRg6c&t=229s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742187"
            },
            {
                questionId: 57,
                questionText: "A1:E5のテーブルを､2月1日の日にちのレコードだけ表示してください｡データを削除してはいけません｡",
                videoUrl: "https://www.youtube.com/watch?v=8gPwycoRg6c&t=303s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742163"
            },
            {
                questionId: 58,
                questionText: "A1:E5のテーブルを､時間(分)の多い順に並び替えてください｡時間が同じ場合､疲労度の低い順にします｡",
                videoUrl: "https://www.youtube.com/watch?v=8gPwycoRg6c&t=330s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742202"
            }
        ],
        // 4章-数式･関数
        project4: [
            {
                questionId: 59,
                questionText: "合計金額の列に､数量と単価を掛けた金額を求める数式を入力します｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=1s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742185"
            },
            {
                questionId: 60,
                questionText: "値引きの列に､値引き金額を求める数式を入力してください｡値引き金額は､合計金額にセルB1の値引き率を掛けて計算します｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=131s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742188"
            },
            {
                questionId: 61,
                questionText: "お会計の列に､合計金額から値引きを引いた金額を求める数式を入力します｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=287s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742193"
            },
            {
                questionId: 62,
                questionText: "関数を使って､C8に得点の最高点を表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=389s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742176"
            },
            {
                questionId: 63,
                questionText: "関数を使って､B8に時間の最高記録を表示してください｡最高記録はもっとも速いタイムを求めます｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=453s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742162"
            },
            {
                questionId: 64,
                questionText: "関数を使って､B9セルに時間の平均を表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=493s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742157"
            },
            {
                questionId: 65,
                questionText: "関数を使って､B11に初参加者数を表示してください｡初参加に数値が入力されているセルを数えます｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=595s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742170"
            },
            {
                questionId: 66,
                questionText: "関数を使って､B12に途中棄権数を表示してください｡時間が空白のセルの数を求めます｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=633s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742180"
            },
            {
                questionId: 67,
                questionText: "関数を使って､B13に参加数を表示してください｡名前のセルを数えます｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=708s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742159"
            },
            {
                questionId: 68,
                questionText: "関数を使って､備考の列に､初参加が｢1｣の場合には｢初心者｣と表示し､そうでない場合は｢経験者｣と表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=799s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742173"
            },
            {
                questionId: 69,
                questionText: "関数を使って､評価の列に､得点が50点未満の人には｢失格｣と表示し､そうでなければ何も表示しないようにしてください｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=925s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742158"
            },
            {
                questionId: 70,
                questionText: "関数を使って､表を得点の多い順に並べ替えたものを､H2を基点に表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=1098s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742177"
            },
            {
                questionId: 71,
                questionText: "関数を使って､表｢練習会参加記録｣の｢名前｣列から重複をなくして一意にしたデータを､D31セルを基点に表示してください",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=1239s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742171"
            },
            {
                questionId: 72,
                questionText: "関数を使って､名前の先頭1文字を､イニシャルの列に表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=1337s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742197"
            },
            {
                questionId: 73,
                questionText: "関数を使って､｢前回参加月｣の列に､｢前回参加年月日｣の列の5文字目から2文字を表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=1482s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742183"
            },
            {
                questionId: 74,
                questionText: "関数を使って､｢大文字｣の列に､B列の名前を大文字に変換して表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=1536s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742156"
            },
            {
                questionId: 75,
                questionText: "関数を使って､｢文字数｣の列に､名前の文字数を表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=1569s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742184"
            },
            {
                questionId: 76,
                questionText: "関数を使って､｢ゼッケン印字｣の列に､№と名前の列を結合して表示してください｡№と名前は｢-｣でつなぎます｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=1605s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742201"
            },
            {
                questionId: 77,
                questionText: "関数を使って､セルB22に､1から5の範囲内でランダムな値を表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=1742s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742186"
            },
            {
                questionId: 78,
                questionText: "関数を使って､セルA25を基点とする3行2列に､4から始まり､6ずつ増加する数値データを表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=1802s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742165"
            },
            {
                questionId: 79,
                questionText: "関数を使って､表｢ランイベント参加日と参加者｣の｢名前｣列から重複をなくして一意にしたデータを､B16セルを基点に表示してください｡数式では､定義された名前を使用します｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=1907s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742192"
            },
            {
                questionId: 80,
                questionText: "当シートの数式を表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=CvBQ_-emnkc&t=2002s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742203"
            }
        ],
        // 5章-グラフ
        project5: [
            {
                questionId: 81,
                questionText: "日別売上の表を使って､集合縦棒グラフを作成してください｡",
                videoUrl: "https://www.youtube.com/watch?v=zy8U2Y2bOqk&t=1s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742200"
            },
            {
                questionId: 82,
                questionText: "テスト結果の表を使って､名前ごとの合計を表す集合横棒グラフを作成します｡作成したグラフはセル範囲【H7:M13】に配置します｡",
                videoUrl: "https://www.youtube.com/watch?v=zy8U2Y2bOqk&t=89s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742190"
            },
            {
                questionId: 83,
                questionText: "折れ線グラフをグラフシートに移動します｡グラフシート名は｢売上推移分析グラフ｣とします｡",
                videoUrl: "https://www.youtube.com/watch?v=zy8U2Y2bOqk&t=244s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742164"
            },
            {
                questionId: 84,
                questionText: "集合縦棒グラフに､物理のデータ系列を追加します｡",
                videoUrl: "https://www.youtube.com/watch?v=zy8U2Y2bOqk&t=339s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742179"
            },
            {
                questionId: 85,
                questionText: "集合縦棒グラフの横軸と凡例を入れ替えて､横軸に科目､凡例に名前を表示します｡",
                videoUrl: "https://www.youtube.com/watch?v=zy8U2Y2bOqk&t=375s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742178"
            },
            {
                questionId: 86,
                questionText: "集合縦棒グラフの､第1横軸（値軸）にラベル「科目」を表示してください。",
                videoUrl: "https://www.youtube.com/watch?v=zy8U2Y2bOqk&t=418s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742161"
            },
            {
                questionId: 87,
                questionText: "円グラフに吹き出しのデータラベルを設定してください｡データラベルには分類名だけを表示します｡",
                videoUrl: "https://www.youtube.com/watch?v=zy8U2Y2bOqk&t=478s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742168"
            },
            {
                questionId: 88,
                questionText: "円グラフのグラフタイトルを｢日ごとの売上額の割合｣に変更します｡",
                videoUrl: "https://www.youtube.com/watch?v=zy8U2Y2bOqk&t=549s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742160"
            },
            {
                questionId: 89,
                questionText: "円グラフに｢レイアウト1｣を適用します｡",
                videoUrl: "https://www.youtube.com/watch?v=zy8U2Y2bOqk&t=588s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742189"
            },
            {
                questionId: 90,
                questionText: "集合縦棒グラフにスタイル｢スタイル6｣､色｢モノクロ パレット1｣を適用してください｡",
                videoUrl: "https://www.youtube.com/watch?v=zy8U2Y2bOqk&t=649s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742167"
            },
            {
                questionId: 91,
                questionText: "集合縦棒グラフに代替テキスト｢生徒別得点グラフ｣を設定してください｡",
                videoUrl: "https://www.youtube.com/watch?v=zy8U2Y2bOqk&t=707s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742174"
            }
        ],
        // 応用問題
        project6: [
            {
                questionId: 92,
                questionText: "タブ区切りのテキストファイル「1-X(演習用)MOS365試験範囲」を、セル｢E1｣を基点とする位置に、インポートします。先頭行をテーブルの見出しとして使用します。",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5241s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742166"
            },
            {
                questionId: 93,
                questionText: "C4にハイパーリンクを挿入してください。リンク先は「https://pub.jmam.co.jp/book/b646577.html」とします。ハイパーリンクをポイントすると「本の紹介ページへ」と表示されるようにします。",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5307s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742196"
            },
            {
                questionId: 94,
                questionText: "クイックアクセスツールバーに、コマンド「自動保存のオン/オフ切り替え」を登録してください。作業中のブックだけに適用します。",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5350s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742195"
            },
            {
                questionId: 95,
                questionText: "｢1章応用｣の名前でPDFファイルとしてデスクトップに保存してください｡保存後､PDFファイルは開かないようにします｡",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5390s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742181"
            },
            {
                questionId: 96,
                questionText: "ブックのプロパティのタグに｢MOS365Excel｣と｢応用｣を設定してください｡",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5416s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742194"
            },
            {
                questionId: 97,
                questionText: "6行目以降が2ページ目に印刷されるよう､改ページを挿入してください｡",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5478s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742199"
            },
            {
                questionId: 98,
                questionText: "2行目が繰り返し印刷されるよう設定してください｡",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5513s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742175"
            },
            {
                questionId: 99,
                questionText: "A6からA20まで､1,2,3,…と連番になるように入力してください｡書式は変更しません｡",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5552s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742172"
            },
            {
                questionId: 100,
                questionText: "セルA1に入力されている文字列をセル範囲A1:D1の中央に配置してください。セルは結合されないようにします。",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5582s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742173"
            },
            {
                questionId: 101,
                questionText: "A8:F11の表の1月から4月の数値について､50以上のセルのフォントを太字にしてください｡",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5617s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742190"
            },
            {
                questionId: 102,
                questionText: "推移の列のスパークラインについて､最小を0に､最大を｢すべてのスパークラインで同じ値｣に設定します｡",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5666s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742188"
            },
            {
                questionId: 103,
                questionText: "表A14:E17の5月から9月の数値に､赤､白､青のカラースケールを設定してください｡最小値を｢最小値｣､中間値を百分位｢40｣､最大値を百分位｢60｣に設定します｡",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5708s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742189"
            },
            {
                questionId: 104,
                questionText: "5月の列に4つの評価のアイコンを表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5774s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742191"
            },
            {
                questionId: 105,
                questionText: "テーブルをシングル→ダブルの順にしてください｡",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5799s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742192"
            },
            {
                questionId: 106,
                questionText: "テーブルから､｢葛飾区｣または｢足立区｣を含むデータだけを表示します｡",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5815s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742193"
            },
            {
                questionId: 107,
                questionText: "表｢種目･月別の練習量(km)｣から､集合縦棒グラフを作成してください｡凡例に月が表示されるようにします｡",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5869s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742194"
            },
            {
                questionId: 108,
                questionText: "表｢トライアスロンの各種目の距離｣から､各種目の割合を示す3-D円グラフを作成します｡",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5905s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742195"
            },
            {
                questionId: 109,
                questionText: "集合横棒グラフに軸ラベル｢距離｣を追加し､横軸の右下に配置します｡",
                videoUrl: "https://www.youtube.com/watch?v=yRXS_EvCBrg&t=5953s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mos-mos-exce365-91-94/lectures/60742196"
            }
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
        projectNames: {
            project1: "1章-プレゼンテーションの管理",
            project2: "2章-スライドの管理",
            project3: "3章-テキスト、図形、画像の挿入と書式設定",
            project4: "4章-表、グラフ、SmartArt、3Dモデル、メディアの挿入",
            project5: "5章-画面切り替えやアニメーションの適用",
            project6: "6章-Wordで学習済みの内容",
            project7: "7章-Excelで学習済みの内容",
            project8: "応用問題"
        },
        // 1章-プレゼンテーションの管理
        project1: [
            {
                questionId: 1,
                questionText: "スライドのサイズを幅[30cm]､高さ[20cm]に変更してください｡コンテンツのサイズはスライドに収まるように調整します｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=1s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60296442"
            },
            {
                questionId: 2,
                questionText: "スライドをグレースケールで表示してください｡次に､スライド4の画像を[明るいグレースケール]に変更します｡作業後は表示をカラーに戻します｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=83s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60296441"
            },
            {
                questionId: 3,
                questionText: "スライド一覧に切り替えて､セクション[学習環境の整備]の3枚のスライドが､[学習環境の整備][充実した学習環境を整える][学習スペースの整備]の順になるように移動します｡設定後､表示を標準に戻します｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=129s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60296440"
            },
            {
                questionId: 4,
                questionText: "セクション[プレゼンテーションの概要]のスライドだけが印刷されるように設定してください｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=321s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60296449"
            },
            {
                questionId: 5,
                questionText: "１ページに3スライドを表示した配付資料が､10部印刷されるように設定してください｡1ページ目を10部印刷したあと､2ページ目が印刷されるようにします",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=381s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60296446"
            },
            {
                questionId: 6,
                questionText: "スライド1枚目2枚目を､グレースケールで印刷されるように設定します｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=499s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60296451"
            },
            {
                questionId: 7,
                questionText: "ノートとして3部印刷されるように設定してください｡印刷の向きは縦方向にします｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=614s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60296444"
            },
            {
                questionId: 8,
                questionText: "すべてのスライドを配布資料として印刷してください。1ページに9スライドずつ、縦方向に並ぶように設定します｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=652s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60296447"
            },
            {
                questionId: 9,
                questionText: "[時短版]という名前の目的別スライドショーを作成してください｡スライド6,9,12を選択します｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=696s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60296450"
            },
            {
                questionId: 10,
                questionText: "スライドショーの種類を[発表者として使用する]に設定し､レーザーポインターの色が青になるよう設定にします。",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=834s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60296443"
            },
            {
                questionId: 11,
                questionText: "スライドショーのリハーサルを行い、タイミングを記録します。",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=925s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60296448"
            },
            {
                questionId: 12,
                questionText: "スライドマスターに､背景のスタイル3を適用します｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=999s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60296445"
            },
            {
                questionId: 13,
                questionText: "スライドマスターのタイトルのフォントを[メイリオ]､フォントの色を[濃い青緑 アクセント1]に変更してください｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=1078s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60472399"
            },
            {
                questionId: 14,
                questionText: "スライドマスターの日付を削除してください｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=1132s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60472390"
            },
            {
                questionId: 15,
                questionText: "スライドマスターで[白紙]レイアウトを複製し、[補足]という名前のレイアウトを作成して中央に表のプレースホルダを配置します｡プレースホルダーのサイズや位置は問いません｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=1530s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60472387"
            },
            {
                questionId: 16,
                questionText: "スライドマスターの[タイトルとコンテンツ]レイアウトについて､背景の色を[薄い灰色､テキスト2](あるいは､[薄い灰色､背景2])に変更",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=1649s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60472394"
            },
            {
                questionId: 17,
                questionText: "配布資料マスターの日付を非表示にし、左のフッターに[講師用]と入力します。",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=1736s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60472386"
            },
            {
                questionId: 18,
                questionText: "プレゼンテーションを常に読み取り専用で開くように設定してください｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=1815s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60472389"
            },
            {
                questionId: 19,
                questionText: "スライドマスターのタイトルスライドのレイアウトに､背景のスタイル4を適用します｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=1916s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60472393"
            },
            {
                questionId: 20,
                questionText: "スライドマスターのタイトルスライドのレイアウトに､背景のスタイル4を適用します｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=2043s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60472391"
            },
            {
                questionId: 21,
                questionText: "ファイルにフォントを埋め込む設定にします。使用されている文字だけを埋め込みます｡",
                videoUrl: "https://www.youtube.com/watch?v=aQdrf6ZtM28&t=2116s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60472398"
            }
        ],
        // 2章-スライドの管理
        project2: [
            {
                questionId: 22,
                questionText: "スライドの最後に[タイトルのみ]のスライドを追加します｡",
                videoUrl: "https://www.youtube.com/watch?v=jqUT66jMVFs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=3&t=29s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642980"
            },
            {
                questionId: 23,
                questionText: "スライド｢結論｣を複製してください｡複製したスライドは｢結論｣スライドの下に配置し､スライドのタイトルは[プレゼント]に変更します｡",
                videoUrl: "https://www.youtube.com/watch?v=jqUT66jMVFs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=3&t=382s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642971"
            },
            {
                questionId: 24,
                questionText: "スライド[マラソンの歴史]の前に､サマリーズームのスライドを挿入してください｡スライド3,6,9へのリンクを作成します｡",
                videoUrl: "https://www.youtube.com/watch?v=jqUT66jMVFs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=3&t=461s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642972"
            },
            {
                questionId: 25,
                questionText: "スライド[栄養と休息]の後ろに[2章-追加用]のプレゼンテーション[プロテインパウダー][サプリメントの効果とリスク]のスライドを挿入してください｡スライドは元の書式を使用せずに順番通りに挿入します｡",
                videoUrl: "https://www.youtube.com/watch?v=jqUT66jMVFs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=3&t=718s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642970"
            },
            {
                questionId: 26,
                questionText: "スライド[ニューヨークシティマラソン]の後ろに､文書[2章-追加用アウトライン]のアウトラインを使用して､スライドを挿入してください",
                videoUrl: "https://www.youtube.com/watch?v=jqUT66jMVFs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=3&t=914s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642976"
            },
            {
                questionId: 27,
                questionText: "スライド[古代から現代へ]と[マラソンの重要性]を非表示にします｡",
                videoUrl: "https://www.youtube.com/watch?v=jqUT66jMVFs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=3&t=1002s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642981"
            },
            {
                questionId: 28,
                questionText: "スライド2の背景に､テクスチャ[新聞紙]を設定します｡",
                videoUrl: "https://www.youtube.com/watch?v=jqUT66jMVFs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=3&t=1075s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642977"
            },
            {
                questionId: 29,
                questionText: "スライド2にフッター[概要]を表示してください｡",
                videoUrl: "https://www.youtube.com/watch?v=jqUT66jMVFs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=3&t=1141s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642975"
            },
            {
                questionId: 30,
                questionText: "スライド[ボストンマラソン]とスライド[ニューヨークシティマラソン]を入れ替えてください｡",
                videoUrl: "https://www.youtube.com/watch?v=jqUT66jMVFs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=3&t=1255s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642974"
            },
            {
                questionId: 31,
                questionText: "セクション[トレーニングと準備]を1つ上のセクションに移動してください｡",
                videoUrl: "https://www.youtube.com/watch?v=jqUT66jMVFs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=3&t=1335s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642978"
            },
            {
                questionId: 32,
                questionText: "スライド[プロテインパウダー]の前に､セクション[プロテイン]を追加してください｡",
                videoUrl: "https://www.youtube.com/watch?v=jqUT66jMVFs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=3&t=1380s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642979"
            },
            {
                questionId: 33,
                questionText: "セクション[規定のセクション]のセクション名を[はじめに]に変更してください｡",
                videoUrl: "https://www.youtube.com/watch?v=jqUT66jMVFs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=3&t=1418s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642973"
            }
        ],
        // 3章-テキスト、図形、画像の挿入と書式設定
        project3: [
            {
                questionId: 34,
                questionText: "[目次]のスライドに､セクションズームを挿入し､セクション[散歩の利点]と[散歩のテクニック]にリンクを作成してください｡サムネイルは各テキストの下に配置します｡",
                videoUrl: "https://www.youtube.com/watch?v=AkCr-s-n2xE&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=4",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642992"
            },
            {
                questionId: 35,
                questionText: "スライド[目次]にあるテキストボックス[散歩のテクニック]の下に､[蛍光ペン:黄､6mm]で線を描画してください",
                videoUrl: "https://www.youtube.com/watch?v=AkCr-s-n2xE&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=4&t=96s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642988"
            },
            {
                questionId: 36,
                questionText: "スライド3の紫色の四角形の図形を､最背面に移動してください｡",
                videoUrl: "https://www.youtube.com/watch?v=AkCr-s-n2xE&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=4&t=157s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642993"
            },
            {
                questionId: 37,
                questionText: "スライド4の3つのハートマークの図形について､右端をすべて揃え､上下に整列させてください｡",
                videoUrl: "https://www.youtube.com/watch?v=AkCr-s-n2xE&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=4&t=306s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642989"
            },
            {
                questionId: 38,
                questionText: "スライド4の3つのハートマークの図形をグループ化します｡",
                videoUrl: "https://www.youtube.com/watch?v=AkCr-s-n2xE&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=4&t=543s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642991"
            },
            {
                questionId: 39,
                questionText: "スライドにガイドを表示し､垂直方向のガイドを中心から左に[5.20]､移動します｡",
                videoUrl: "https://www.youtube.com/watch?v=AkCr-s-n2xE&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=4&t=754s",
                videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60642987"
            }
        ],
        // 4章-表、グラフ、SmartArt、3Dモデル、メディアの挿入
        project4: [
            {
                questionId: 40,
                questionText: "スライド[アンケート結果]のコンテンツのプレースホルダーに､表のデータをもとに[集合縦棒]グラフを挿入し､グラフタイトルと凡例を非表示にしてください｡グラフのデータは､表のデータを利用しても､直接セルに入力してもかまいません｡"
            },
            {
                questionId: 41,
                questionText: "スライド2のSmartArtグラフィックを､箇条書きに変換してください｡"
            },
            {
                questionId: 42,
                questionText: "スライド4の個条書きをSmartArtグラフィック[横方向個条書きリスト]に変換してください｡"
            },
            {
                questionId: 43,
                questionText: "タイトルスライドに､オーディオ[決定ボタンを押す1.mp3]を挿入してください｡自動で再生されるようにします｡"
            },
            {
                questionId: 44,
                questionText: "スライド9のオーディオのフェードインを[05:00]に設定します｡スライド切り替え後も再生するようにしてください｡"
            },
            {
                questionId: 45,
                questionText: "スライド[競争と市場の変化]のビデオを5秒で開始し、10秒で終了するようにトリミングしてください｡停止するまで繰り返すようにします｡"
            }
        ],
        // 5章-画面切り替えやアニメーションの適用
        project5: [
            {
                questionId: 46,
                questionText: "スライド1に､画面切り替え[フェード]を設定してください"
            },
            {
                questionId: 47,
                questionText: "スライド1の画面切り替えの効果のオプションを[黒いスクリーンから]に変更してください｡"
            },
            {
                questionId: 48,
                questionText: "すべてのスライドの画面切り替えの継続時間を､1秒に設定します｡"
            },
            {
                questionId: 49,
                questionText: "スライド2と4のスライドの画面切り替えが5秒後に自動的に切り替わるようにします｡"
            },
            {
                questionId: 50,
                questionText: "スライド2の画像に､強調のアニメーション[パルス]を設定してください"
            },
            {
                questionId: 51,
                questionText: "スライド3の3Dモデルに､下に回転する[スイング]のアニメーションを設定します｡"
            },
            {
                questionId: 52,
                questionText: "スライド[ジャンルと人気]のグラフに、[フェード]のアニメーションを設定します。アニメーションは系列別に再生されるようにしてください。"
            },
            {
                questionId: 53,
                questionText: "スライド[社会への影響]の矢印のアイコンに[ターン]のアニメーションを設定し、タイミングを[直前の動作と同時]にしてください。"
            },
            {
                questionId: 54,
                questionText: "スライドの[アニメと文化の交流]の画像に､アニメーションの軌跡[アーチ]を設定してください｡"
            },
            {
                questionId: 55,
                questionText: "スライド[社会への影響]に設定されているアニメーションが､上の図から表示されるように変更します｡"
            }
        ],
        // 6章-Wordで学習済みの内容
        project6: [
            {
                questionId: 56,
                questionText: "スライド[1]のタイトルに､太字､文字の影､フォントの色[青-アクセント1､黒+基本色25%]を設定します｡"
            },
            {
                questionId: 57,
                questionText: "スライド2の箇条書きを2段組に設定します｡段の幅は[1cm]にしてください｡"
            },
            {
                questionId: 58,
                questionText: "スライド6のテキストボックスに箇条書きを設定してください。行頭文字は[塗りつぶし四角の行頭文字]にしてください。"
            },
            {
                questionId: 59,
                questionText: "スライド24に､画像[japason.png]を挿入し､タイトルの下に配置してください｡"
            },
            {
                questionId: 60,
                questionText: "スライド24の画像の高さを10cmに設定してください｡"
            },
            {
                questionId: 61,
                questionText: "スライド21の下の画像を､上の画像に合わせて右側をトリミングしてください｡"
            },
            {
                questionId: 62,
                questionText: "スライド2の画像に､アート効果[ペイント:描線]､ぼかし[2.5ポイント]を適用してください｡"
            },
            {
                questionId: 63,
                questionText: "スライド5の画像に､図のスタイル[シンプルな枠､黒]を適用します｡"
            },
            {
                questionId: 64,
                questionText: "スライド12の雲の図形を､太陽の図形に変更してください｡"
            },
            {
                questionId: 65,
                questionText: "スライド8のタイトル下に横書きテキストボックスを挿入し､[たくさんのスタイルがあります]と入力してください｡"
            },
            {
                questionId: 66,
                questionText: "スライド8のテキストボックスの幅を､10cmに変更します｡"
            },
            {
                questionId: 67,
                questionText: "スライド8のテキストボックスのフォントサイズを[20]､フォントの色を[赤､アクセント4]に変更してください｡"
            },
            {
                questionId: 68,
                questionText: "スライド11のベルのアイコンに､スタイル[塗りつぶし-アクセント4､枠線なし]を適用してください｡"
            },
            {
                questionId: 69,
                questionText: "スライド11のベルのアイコンについて､枠線の太さを3ptに変更します｡"
            },
            {
                questionId: 70,
                questionText: "スライド18のプレースホルダーに2列3行の表を挿入し､1行目の1列目に[花火]､1行目の2列目に[屋台]と入力します｡"
            },
            {
                questionId: 71,
                questionText: "スライド17にある表の[その他]の行を削除してください"
            },
            {
                questionId: 72,
                questionText: "スライド17の表に[スタイル(中間)2]の表のスタイルを適用します｡続いて､1行おきに色が変わるオプションを有効にしてください。"
            },
            {
                questionId: 73,
                questionText: "スライド[盆踊りの歴史と起源]にSmartArtグラフィック[カード型リスト]を挿入し､テキストウィンドウの上から[歴史][起源]と入力してください｡不要な図形は削除します｡"
            },
            {
                questionId: 74,
                questionText: "スライド7のSmartArtグラフィックの[スタイル]と[衣装]のあいだに 図形を追加し､[音楽]と入力してください｡"
            },
            {
                questionId: 75,
                questionText: "スライド7のSmartArtグラフィックの[音楽]の図形を､スタイルよりも前に移動してください｡"
            },
            {
                questionId: 76,
                questionText: "スライド24に､3Dモデル[turtle.obj]を挿入し､幅を3cmに設定してください｡3Dモデルはタイトルの右側に配置します｡"
            },
            {
                questionId: 77,
                questionText: "スライド[結論]の3Dモデルのビューを[右上全面]に変更してください｡"
            }
        ],
        // 7章-Excelで学習済みの内容
        project7: [
            {
                questionId: 78,
                questionText: "プレゼンテーションのプロパティの会社に[株式会社じゃぱそん]を設定してください｡"
            },
            {
                questionId: 79,
                questionText: "ドキュメント検査を実行し､プレゼンテーションノートだけを削除してください｡"
            },
            {
                questionId: 80,
                questionText: "アクセシビリティチェックを実行し､エラーを修正します｡代替テキストなしの1つめに､[歴史と起源]を設定します｡"
            },
            {
                questionId: 81,
                questionText: "スライド22にコメント[ファクトチェックお願いします]を挿入してください｡"
            },
            {
                questionId: 82,
                questionText: "スライド1のコメントを削除してください｡"
            },
            {
                questionId: 83,
                questionText: "プレゼンテーションをPDFとして[PDF版]の名前でデスクトップに保存します｡発行後にファイルは開かないようにしてください｡"
            },
            {
                questionId: 84,
                questionText: "スライド1の文字列[日本の伝統文化について詳しく見る]に､Webページ[https://mos.japason.co.jp/]を表示するハイパーリンクを挿入してください｡"
            },
            {
                questionId: 85,
                questionText: "スライド[14]の画像に､代替テキスト[踊っている女性の影]を設定"
            },
            {
                questionId: 86,
                questionText: "スライド5のグラフにグラフスタイル[スタイル2]を適用してください｡"
            },
            {
                questionId: 87,
                questionText: "スライド19のグラフを[集合縦棒]に変更してください｡その他の項目は変更しません｡"
            }
        ],
        // 応用問題
        project8: [
            {
                questionId: 88,
                questionText: "スライド[プレゼンテーションの概要]と[結論]を除いた[サマライズ版]という目的別スライドショーを作成してください。"
            },
            {
                questionId: 89,
                questionText: "タイトルスライド以外のすべてのスライドに､スライド番号を挿入してください｡"
            },
            {
                questionId: 90,
                questionText: "スライドマスターに[タイトルのみ-日付強調]という名前のレイアウトを作成｡[タイトルのみ]と同じレイアウトにし､フッターの日付のプレースホルダーを太字に変更します｡"
            },
            {
                questionId: 91,
                questionText: "スライド[教育とキャリアの関係]のテキストボックスの2段組を解除してください｡"
            },
            {
                questionId: 92,
                questionText: "アクセシビリティチェックを実行し､代替テキストが設定されていない1枚目のスライドの画像を装飾用に設定してください｡"
            },
            {
                questionId: 93,
                questionText: "ドキュメント検査を実行し､スライド外のコンテンツだけを削除してください｡"
            },
            {
                questionId: 94,
                questionText: "[タイトルとコンテンツ]レイアウトの背景のグラフィックを非表示にしてください｡"
            },
            {
                questionId: 95,
                questionText: "グリッドを表示します。グリッドの間隔は[2cm]に設定してください。"
            },
            {
                questionId: 96,
                questionText: "スライド[社会的信頼の構築]の個条書きのテキストボックスに下線の色[青､アクセント4]の[一重線]を設定し､文字の間隔を広げて､幅[1.2pt]に設定してください｡"
            },
            {
                questionId: 97,
                questionText: "スライド[資格がキャリアに与える影響]内の画像の高さ･幅を､18%に変更してください｡"
            }
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