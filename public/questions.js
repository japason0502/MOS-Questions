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
          project1: "1章-文書の管理",
          project2: "2章-文字、段落、セクションの挿入と書式設定",
          project3: "3章-表やリストの管理",
          project4: "4章-参考資料の作成と管理",
          project5: "5章-グラフィック要素の挿入と書式設定",
          project6: "6章-文書の共同作業の管理",
          project7: "応用問題"
        },
      
      
        // Word 1章
project1: [
    {
      questionId: 1,
      questionText: "文書内の｢ハイキング｣を検索し､太字を設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=1s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306642"
    },
    {
      questionId: 2,
      questionText: "文書内の｢任意｣を検索して､検索した文字列を含む段落に下線を設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=250s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306650"
    },
    {
      questionId: 3,
      questionText: "ブックマーク｢持ち物リスト｣にジャンプし、その語句を｢黄色｣の蛍光ペンで強調してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=303s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306675"
    },
    {
      questionId: 4,
      questionText: "見出し｢安全管理と緊急時対応｣の行全体に､ブックマーク｢安全と緊急｣を挿入してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=335s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306657"
    },
    {
      questionId: 5,
      questionText: "文字列｢集合時間｣に見出し｢スケジュール概要:｣へのハイパーリンクを設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=377s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306672"
    },
    {
      questionId: 6,
      questionText: "ジャンプを使ってブックマーク｢強調すべき注意点｣に移動し､移動先にスタイル｢強調斜体2｣を設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=427s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306653"
    },
    {
      questionId: 7,
      questionText: "3つ目の見出しに移動し､先頭に文字列｢★｣を追加してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=457s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306641"
    },
    {
      questionId: 8,
      questionText: "文字列｢*補足｣を含む行を隠し文字に設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=481s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306659"
    },
    {
      questionId: 9,
      questionText: "編集記号を表示し､｢(昨年...｣から始まる隠し文字を解除してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=567s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306649"
    },
    {
      questionId: 10,
      questionText: "文章の余白を｢狭い｣に設定してください｡(Excel)",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=625s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306660"
    },
    {
      questionId: 11,
      questionText: "文章の上下の余白を｢10mm｣に設定してください｡(Excel)",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=653s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306673"
    },
    {
      questionId: 12,
      questionText: "用紙サイズを｢A3｣に設定してください｡(Excel)",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=688s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306654"
    },
    {
      questionId: 13,
      questionText: "文書にスタイルセット｢ミニマリスト｣を設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=697s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306655"
    },
    {
      questionId: 14,
      questionText: "ページの下部にページ番号｢チルダ｣を挿入してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=771s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306658"
    },
    {
      questionId: 15,
      questionText: "ヘッダーに｢(遠足詳細)｣を挿入してください｡ヘッダーは右寄せします｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=794s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306662"
    },
    {
      questionId: 16,
      questionText: "先頭ページにはヘッダーが挿入されないよう､別指定にしてください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=837s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306676"
    },
    {
      questionId: 17,
      questionText: "文書に「白、背景１、黒+基本色50%」「0.5pt」「囲む」のページ罫線を設定してください。",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=874s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306644"
    },
    {
      questionId: 18,
      questionText: "ページの色を｢青､アクセント1､白 + 基本色80%｣に設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=942s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306677"
    },
    {
      questionId: 19,
      questionText: "文書全体に透かし｢下書き1｣を挿入してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=963s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306648"
    },
    {
      questionId: 20,
      questionText: "文書に｢1章｣と名前を付けてデスクトップにPDF形式で保存してください｡保存後、自動的にファイルを開かない設定にします。",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=999s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306663"
    },
    {
      questionId: 21,
      questionText: "タイトルに｢3年遠足企画書｣を設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=1060s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306647"
    },
    {
      questionId: 22,
      questionText: "プロパティのキーワードに｢年間行事｣を設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=1084s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306656"
    },
    {
      questionId: 23,
      questionText: "ドキュメント検査を行い､隠し文字を削除してください｡その他の項目は削除しないこと。",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=1165s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306661"
    },
    {
      questionId: 24,
      questionText: "アクセシビリティチェックを行い、代替テキストのエラーを修正してください｡おすすめのアクションの上側の項目を選択し、図表の代替テキストは「ピクニックの写真」とします。",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=1202s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306651"
    },
    {
      questionId: 25,
      questionText: "互換モードを解除してください｡メッセージが表示された場合はOKをクリックします｡",
      videoUrl: "https://www.youtube.com/watch?v=cr--hIcsszw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=2&t=1315s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306665"
    }
  ],
  
// Word 2章
project2: [
    {
      questionId: 26,
      questionText: "見出し｢可燃ゴミの収集日｣内の｢朝7時｣の後ろに､時計の記号を挿入してください｡フォント｢Segoe UI Symbol｣の文字コード｢1F556｣(Clock Face Seven Oclock)を指定します｡",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=1s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306706"
    },
    {
      questionId: 27,
      questionText: "文書内の文字列｢割れた食器｣の後ろに､4分の1スペースを挿入してください｡",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=75s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306716"
    },
    {
      questionId: 28,
      questionText: "文書内の文字列「致します」をすべて「いたします」に置換してください｡",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=103s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306714"
    },
    {
      questionId: 29,
      questionText: "文書内の半角スペースをすべて削除してください｡",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=131s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306702"
    },
    {
      questionId: 30,
      questionText: "見出し「ゴミの分類」の上の段落に文字の効果「塗りつぶし:黒、文字色１;影」を設定してください。",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=162s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306719"
    },
    {
      questionId: 31,
      questionText: "タイトル｢ゴミ捨てのルールについて｣の文字の輪郭を｢濃い青｣にし､影の効果｢オフセット:右上｣を設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=201s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306720"
    },
    {
      questionId: 32,
      questionText: "「本書は」から始まる段落の行間を固定値｢18pt｣に設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=263s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306707"
    },
    {
      questionId: 33,
      questionText: "見出し｢注意事項｣の下3段落の行間を｢1.8行｣に設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=296s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306703"
    },
    {
      questionId: 34,
      questionText: "見出し｢資源ゴミの収集日｣の下にある2つの段落の｢段落後の間隔｣を｢1行｣に設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=332s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306711"
    },
    {
      questionId: 35,
      questionText: "｢資源ゴミ｣の見出しの下にある3つの段落の左インデントを解除してください｡",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=359s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306704"
    },
    {
      questionId: 36,
      questionText: "「本書は」から「ご協力をお願いいたします｡｣までの段落の字下げインデントを｢1字｣に設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=385s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306708"
    },
    {
      questionId: 37,
      questionText: "見出し「可燃ゴミ」の書式を、見出し「不燃ゴミ」と「資源ゴミ」にコピーしてください。",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=421s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306718"
    },
    {
      questionId: 38,
      questionText: "注意事項の見出し内の｢ゴミ出しの時間｣から始まる段落に､スタイル｢強調斜体2｣を設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=461s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306717"
    },
    {
      questionId: 39,
      questionText: "文書内の文字列｢汚れたもの｣の書式をクリアしてください｡",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=492s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306710"
    },
    {
      questionId: 40,
      questionText: "見出し｢ゴミの分類｣の先頭に改ページを挿入してください｡",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=514s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306705"
    },
    {
      questionId: 41,
      questionText: "見出し｢可燃ゴミ｣から｢資源ゴミ｣の｢…ペットボトル｣までの段落を､境界線のある2段組に設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=538s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306721"
    },
    {
      questionId: 42,
      questionText: "見出し「招集日と方法」が3ページ目の先頭に表示されるようにセクション区切りを挿入してください。",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=636s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306709"
    },
    {
      questionId: 43,
      questionText: "３ページ目の印刷の向きを横に変更してください。",
      videoUrl: "https://www.youtube.com/watch?v=w_BUdTm-6Hc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=3&t=679s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306713"
    }
  ],
  // Word 3章（Q44〜63）
project3: [
    { questionId: 44, questionText: "見出し｢トレーニングスケジュール｣の下5つの段落を文字列の幅に合わせて表にしてください｡(その他は規定の設定のままとします)", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=1s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306770" },
    { questionId: 45, questionText: "見出し｢マラソン後のリカバリープラン内の表を､文字列に変換してください｡文字列はコンマで区切ります｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=53s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306774" },
    { questionId: 46, questionText: "文書の最後に5行3列の行を作成し､1行目に左から｢日程｣｢大会名｣｢距離｣と入力してください｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=124s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306756" },
    { questionId: 47, questionText: "見出し｢マラソン前日の準備｣の下にある表を､重要度の高い順に並び替えてください｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=204s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306769" },
    { questionId: 48, questionText: "見出し｢練習の記録｣の下の表のセルの余白を上下｢0.6mm｣､間隔を｢0.2mm｣に設定してください｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=241s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306753" },
    { questionId: 49, questionText: "見出し｢週別トレーニング進捗チェックリスト｣の下にある表の､タイトル行を除くセルの上下の余白を「0.5ｍｍ」に設定してください。", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=280s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306771" },
    { questionId: 50, questionText: "見出し｢参加予定の大会と同伴者｣内の表の｢埼玉マラソン｣とその下のセルを結合してください｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=337s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306761" },
    { questionId: 51, questionText: "見出し｢参加予定の大会と同伴者｣内の表の｢沖縄マラソン｣のセルを2行に分割し､下側のセルに｢横浜マラソン｣と入力してください｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=366s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306750" },
    { questionId: 52, questionText: "見出し｢栄養摂取ログ｣内の表の1列目の列幅を「25ｍｍ」2列目の列幅を｢60%｣に設定してください。", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=411s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306775" },
    { questionId: 53, questionText: "見出し｢レース戦略プラン｣内にある表の全体の行の高さを「10ｍｍ」に設定してください。", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=459s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306764" },
    { questionId: 54, questionText: "見出し｢マラソン前日の準備｣内の表の行の高さを揃えてください｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=500s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306772" },
    { questionId: 55, questionText: "見出し｢レース戦略プラン｣の見出し内の表について､(ハーフマラソンの場合)以降の3行を別の表に分割してください｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=524s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306757" },
    { questionId: 56, questionText: "見出し｢参加予定の大会と同伴者｣内の表のタイトル行が次のページにも表示されるように設定してください。", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=608s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306752" },
    { questionId: 57, questionText: "見出し｢自然科学｣の下の｢地域の…｣｢水質…｣｢家庭で…｣｢天体…｣の段落に｢ア｣｢イ｣｢ウ｣の段落番号を設定してください｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=676s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306776" },
    { questionId: 58, questionText: "見出し｢報告書の構成｣の下の5つの段落に箇条書きを設定してください｡行頭文字は､フォント｢Segoe UI Symbol｣の文字コード｢2705｣(White Heavy Check Mark)にします｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=712s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306758" },
    { questionId: 59, questionText: "見出し｢報告書の作成ヒント｣の下の3つの段落について､箇条書きの行頭文字を｢◆｣に変更してください｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=773s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306755" },
    { questionId: 60, questionText: "見出し｢データ収集と方法｣内の｢データ収集方法｣から｢…結論の導き方｣までの段落について､｢その1｣｢その2｣｢その3｣の段落番号を新しく定義し､設定してください｡数字は半角にします｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=804s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306763" },
    { questionId: 61, questionText: "｢興味のある分野を…｣から｢…テーマを決定｣までの段落のリストのレベルを｢レベル2｣に変更してください｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=873s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306766" },
    { questionId: 62, questionText: "見出し｢技術･工作｣の下4つの段落について､開始番号を｢ア｣から順になるように振り直してください｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=906s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306765" },
    { questionId: 63, questionText: "見出し｢プレゼンテーションの準備｣の下の箇条書きが｢4｣から始まるように変更してください｡", videoUrl: "https://www.youtube.com/watch?v=26fX62oDKAc&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=4&t=951s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306768" }
  ],
  // Word 5章（Q71〜93）
project5: [
    { questionId: 71, questionText: "見出し｢給食の目的｣の下の空の段落に､画像｢ご飯.jpg｣を挿入し､幅を｢100mm｣に設定してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=1s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306812" },
    { questionId: 72, questionText: "見出し｢はじめに｣の下にある図形スマイルの右側に､図形｢ハート｣を挿入してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=42s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306813" },
    { questionId: 73, questionText: "見出し｢季節に合わせたメニュー｣の前の段落に､SmartArtグラフィック｢円形循環｣を挿入してください｡テキストウィンドウの上から｢春｣｢夏｣｢秋｣と入力し､続けて｢冬｣を追加してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=100s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306817" },
    { questionId: 74, questionText: "文字列｢地域の食材に対する理解と関心を深めます｣と見出し｢保護者の皆様へ｣の間に､横書きテキストボックスを挿入し､文字列｢庭で育てた野菜も使用します!｣を入力してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=153s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306796" },
    { questionId: 75, questionText: "タイトル｢学校給食のご案内｣の下の写真にアート効果｢ペイント:ブラシ｣を適用してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=194s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306798" },
    { questionId: 76, questionText: "見出し｢給食メニューの特長｣内の写真に効果｢光彩:5pt;灰色､アクセントカラー3｣を適用してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=233s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306814" },
    { questionId: 77, questionText: "見出し｢栄養バランスの考慮｣内の写真にスタイル｢楕円､ぼかし｣を適用してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=270s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306808" },
    { questionId: 78, questionText: "見出し｢はじめに｣の下のスマイルの図形に､スタイル｢パステル-ゴールド､アクセント4｣を適用してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=293s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306801" },
    { questionId: 79, questionText: "見出し｢保護者の皆様へ｣の下の写真の明るさを｢+20%｣コントラストを｢+20%｣に設定してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=327s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306809" },
    { questionId: 80, questionText: "見出し｢特別な給食イベント｣内の画像の背景を削除します｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=363s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306816" },
    { questionId: 81, questionText: "見出し｢季節に合わせたメニュー｣の右にある太陽の図形の枠線の色を｢黄｣､太さを｢3pt｣に設定してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=384s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306794" },
    { questionId: 82, questionText: "見出し「保護者の皆様へ」内のSmartArtグラフィックにスタイル｢光沢｣を適用してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=413s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306797" },
    { questionId: 83, questionText: "見出し「保護者の皆様へ」内のSmartArtグラフィックの色を｢カラフル-アクセント5から6｣に変更してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=438s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306810" },
    { questionId: 84, questionText: "見出し「保護者の皆様へ」内のSmartArtグラフィックに図形の効果「面取り」の「丸」を設定してください。（SmartArtグラフィック全体を選択します。）", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=469s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306804" },
    { questionId: 85, questionText: "見出し｢まとめ｣内にある3Dモデルのビューを｢下｣に変更してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=583s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306793" },
    { questionId: 86, questionText: "見出し｢展示会概要｣内のテキストボックスの最後に文字列｢100円お得!｣を追加してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=605s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306795" },
    { questionId: 87, questionText: "見出し｢宇宙飛行士の体験｣内の吹き出しの図形に､文字列｢VRゴーグルの販売もあります｣を追加してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=621s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306807" },
    { questionId: 88, questionText: "見出し｢展示会概要｣の下のSmartArtグラフィックの図形が､左から｢会場に行く｣｢入場券購入｣｢展示会へ!｣となるように､順序を入れ替えてください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=639s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306806" },
    { questionId: 89, questionText: "見出し｢ご来場の皆様へ｣の上にあるSmartArtの左右を入れ替えてください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=688s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306811" },
    { questionId: 90, questionText: "文書内のハートの図形を､段を基準にして中央揃え､余白を基準にして下方向の距離｢150mm｣に配置してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=712s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306818" },
    { questionId: 91, questionText: "文章の先頭の｢月｣の図形の位置を｢右上に配置し､四角の枠に沿って文字列を折り返す｣に設定してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=748s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306803" },
    { questionId: 92, questionText: "見出し｢ご来場の皆様へ｣内の写真について､文字列の折り返しを四角形に設定してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=793s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306819" },
    { questionId: 93, questionText: "見出し｢展示会概要｣の下のSmartArtに､代替テキスト｢入場までの流れ1.会場に行く2.入場券購入3.展示会へ｣を設定してください｡", videoUrl: "https://www.youtube.com/watch?v=kzL8hB1zYLw&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=6&t=814s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306802" }
  ],
  // Word 6章（Q94〜103）
project6: [
    { questionId: 94,  questionText: "見出し｢目標｣にコメントを挿入してください｡コメントには｢具体的な数値目標が欲しいです｣と記述します｡", videoUrl: "https://www.youtube.com/watch?v=Kbk7iiB3SvY&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=7&t=1s",   videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306841" },
    { questionId: 95,  questionText: "見出し｢1.概要｣のコメントに｢承知しました｡｣と返信してください｡", videoUrl: "https://www.youtube.com/watch?v=Kbk7iiB3SvY&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=7&t=25s",  videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306842" },
    { questionId: 96,  questionText: "見出し｢3.提案サービス｣に挿入されているコメントを解決してください｡", videoUrl: "https://www.youtube.com/watch?v=Kbk7iiB3SvY&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=7&t=44s",  videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306838" },
    { questionId: 97,  questionText: "文字列｢365日｣のコメントを削除してください｡", videoUrl: "https://www.youtube.com/watch?v=Kbk7iiB3SvY&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=7&t=58s",  videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306847" },
    { questionId: 98,  questionText: "見出し｢6.結論｣内の｢サービス提案｣を｢プロジェクト｣に修正してください｡変更内容は記録します｡ただし､記録は終了して終わること｡", videoUrl: "https://www.youtube.com/watch?v=Kbk7iiB3SvY&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=7&t=78s",  videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306836" },
    { questionId: 99,  questionText: "削除された箇所が二重取り消し線で表示されるよう変更履歴を設定し､｢AIによる問い合わせ対応、｣を削除してください｡変更した内容は記録します｡その後､変更履歴の記録を終了してください｡", videoUrl: "https://www.youtube.com/watch?v=Kbk7iiB3SvY&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=7&t=162s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306839" },
    { questionId: 100, questionText: "変更内容の表示を｢すべての変更履歴/コメント｣にしてください｡次に､書式設定の変更履歴だけを表示し､表示したすべての変更を拒否してください｡", videoUrl: "https://www.youtube.com/watch?v=Kbk7iiB3SvY&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=7&t=228s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306843" },
    { questionId: 101, questionText: "文章中の1つ目の変更履歴を承諾し､2つ目の変更履歴を元に戻してください｡", videoUrl: "https://www.youtube.com/watch?v=Kbk7iiB3SvY&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=7&t=274s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306846" },
    { questionId: 102, questionText: "変更履歴をすべて承諾してください｡", videoUrl: "https://www.youtube.com/watch?v=Kbk7iiB3SvY&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=7&t=375s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306845" },
    { questionId: 103, questionText: "変更履歴の記録をロックしてください｡パスワードは｢123｣に設定します｡", videoUrl: "https://www.youtube.com/watch?v=Kbk7iiB3SvY&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=7&t=397s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306840" }
  ],
  // Word 応用（Q104〜119）
project7: [
    { questionId: 104, questionText: "文字列｢まずは計画が重要です｣のハイパーリンクを削除してください｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=1s",  videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306864" },
    { questionId: 105, questionText: "フッダーを削除してください｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=21s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306851" },
    { questionId: 106, questionText: "透かしを削除してください｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=34s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306863" },
    { questionId: 107, questionText: "｢色彩豊かな花々...｣から始まる段落の段落前の間隔を削除してください｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=44s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306852" },
    { questionId: 108, questionText: "文書に｢ファセット(偶数ページ)｣のヘッダーを挿入してください｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=77s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306861" },
    { questionId: 109, questionText: "｢開催概要｣の見出しの下にある空の段落に4行3列の表を追加してください｡1列目に上から｢回｣｢日時｣｢場所｣｢参加費｣と入力します｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=115s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306853" },
    { questionId: 110, questionText: "文書内のSmartArtグラフィック内にある｢宇宙｣の図形のスタイルを｢パステル-青､アクセント1｣に変更してください｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=163s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306862" },
    { questionId: 111, questionText: "｢注意事項｣の見出し内の太陽の図形について､文字列の折り返しを四角形にし､右下に配置してください｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=200s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306855" },
    { questionId: 112, questionText: "挿入された箇所がピンクの色のみで表示されるように変更履歴を設定し、｢開催概要｣の見出しの後ろに「(日程追加の予定あり)」を挿入してください。変更した内容は記録し､変更後に記録は終了してください｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=225s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306865" },
    { questionId: 113, questionText: "文書の上下の余白を｢30mm｣に､行数を｢40｣に設定してください｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=301s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306860" },
    { questionId: 114, questionText: "見出し「持ち物リスト」から見出し「観測会の流れ」の「閉会の挨拶」までの段落を境界線のある2段組みに設定してください｡段の間隔は「2字」に設定してください｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=395s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306859" },
    { questionId: 115, questionText: "文書に「応用」という透かし文字を挿入してください。色を「赤」にします。", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=451s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306854" },
    { questionId: 116, questionText: "見出し｢お問い合わせ｣内にあるSmartArtグラフィックの､｢地球｣の図形について､レベルを1つ下げてください｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=493s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306856" },
    { questionId: 117, questionText: "ファイルを｢機密文書｣という名前でデスクトップに保存してください｡保存の際に､読み取りパスワード｢123｣を設定してください｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=521s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306857" },
    { questionId: 118, questionText: "文書内の月の図形を､代替テキストの読み上げ対象外にしてください｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=544s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306858" },
    { questionId: 119, questionText: "文書内にある太字が設定されている文字列のフォントの色を｢赤｣にすべて置換してください｡", videoUrl: "https://www.youtube.com/watch?v=UX_xmLngqg0&list=PLOrJMC_Nq6xpv-GhkjJjCQzP87lZy4X8n&index=8&t=606s", videoUrlNoCm: "https://school.japason.co.jp/courses/mos365word/lectures/62306850" }
  ],
  

        
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
        // 4章-グラフ・メディアの挿入と設定
        project4: [
    {
      questionId: 40,
      questionText: "スライド[アンケート結果]のコンテンツのプレースホルダーに､表のデータをもとに[集合縦棒]グラフを挿入し､グラフタイトルと凡例を非表示にしてください｡グラフのデータは､表のデータを利用しても､直接セルに入力してもかまいません｡",
      videoUrl: "https://www.youtube.com/watch?v=yHsomxOLHRs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=5",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643002"
    },
    {
      questionId: 41,
      questionText: "スライド2のSmartArtグラフィックを､箇条書きに変換してください｡",
      videoUrl: "https://www.youtube.com/watch?v=yHsomxOLHRs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=5&t=197s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643003"
    },
    {
      questionId: 42,
      questionText: "スライド4の個条書きをSmartArtグラフィック[縦方向個条書きリスト]に変換してください｡",
      videoUrl: "https://www.youtube.com/watch?v=yHsomxOLHRs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=5&t=284s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643006"
    },
    {
      questionId: 43,
      questionText: "タイトルスライドに､オーディオ[決定ボタンを押す1.mp3]を挿入してください｡自動で再生されるようにします｡",
      videoUrl: "https://www.youtube.com/watch?v=yHsomxOLHRs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=5&t=416s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643005"
    },
    {
      questionId: 44,
      questionText: "スライド9のオーディオのフェードインを[05:00]に設定します｡スライド切り替え後も再生するようにしてください｡",
      videoUrl: "https://www.youtube.com/watch?v=yHsomxOLHRs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=5&t=477s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643007"
    },
    {
      questionId: 45,
      questionText: "スライド[競争と市場の変化]のビデオを5秒で開始し、10秒で終了するようにトリミングしてください｡停止するまで繰り返すようにします｡",
      videoUrl: "https://www.youtube.com/watch?v=yHsomxOLHRs&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=5&t=578s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643004"
    }
  ],
  
        // 5章-画面切り替えやアニメーションの適用
        // 5章-画面切り替え・アニメーション
project5: [
    {
      questionId: 46,
      questionText: "スライド1に､画面切り替え[フェード]を設定してください",
      videoUrl: "https://www.youtube.com/watch?v=YY2aAKEwcM4&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=6",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/61118688"
    },
    {
      questionId: 47,
      questionText: "スライド1の画面切り替えの効果のオプションを[黒いスクリーンから]に変更してください｡",
      videoUrl: "https://www.youtube.com/watch?v=YY2aAKEwcM4&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=6&t=14s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643025"
    },
    {
      questionId: 48,
      questionText: "すべてのスライドの画面切り替えの継続時間を､1秒に設定します｡",
      videoUrl: "https://www.youtube.com/watch?v=YY2aAKEwcM4&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=6&t=31s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643018"
    },
    {
      questionId: 49,
      questionText: "スライド2と4のスライドの画面切り替えが5秒後に自動的に切り替わるようにします｡",
      videoUrl: "https://www.youtube.com/watch?v=YY2aAKEwcM4&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=6&t=144s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643022"
    },
    {
      questionId: 50,
      questionText: "スライド2の画像に､強調のアニメーション[パルス]を設定してください",
      videoUrl: "https://www.youtube.com/watch?v=YY2aAKEwcM4&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=6&t=286s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643021"
    },
    {
      questionId: 51,
      questionText: "スライド3の3Dモデルに､下に回転する[スイング]のアニメーションを設定します｡",
      videoUrl: "https://www.youtube.com/watch?v=YY2aAKEwcM4&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=6&t=316s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643020"
    },
    {
      questionId: 52,
      questionText: "スライド[ジャンルと人気]のグラフに、[フェード]のアニメーションを設定します。アニメーションは系列別に再生されるようにしてください。",
      videoUrl: "https://www.youtube.com/watch?v=YY2aAKEwcM4&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=6&t=350s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643023"
    },
    {
      questionId: 53,
      questionText: "スライド[社会への影響]の矢印のアイコンに[ターン]のアニメーションを設定し、タイミングを[直前の動作と同時]にしてください。",
      videoUrl: "https://www.youtube.com/watch?v=YY2aAKEwcM4&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=6&t=401s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643017"
    },
    {
      questionId: 54,
      questionText: "スライドの[アニメと文化の交流]の画像に､アニメーションの軌跡[アーチ]を設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=YY2aAKEwcM4&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=6&t=451s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643019"
    },
    {
      questionId: 55,
      questionText: "スライド[社会への影響]に設定されているアニメーションが､上の図から表示されるように変更します｡",
      videoUrl: "https://www.youtube.com/watch?v=YY2aAKEwcM4&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=6&t=547s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643024"
    }
  ],
  
// 6章-文字・図形・表などの書式設定
project6: [
    {
      questionId: 56,
      questionText: "スライド[1]のタイトルに､太字､文字の影､フォントの色[青-アクセント1､黒+基本色25%]を設定します｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=21s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60660474"
    },
    {
      questionId: 57,
      questionText: "スライド2の箇条書きを2段組に設定します｡段の幅は[1cm]にしてください｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=76s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643042"
    },
    {
      questionId: 58,
      questionText: "スライド6のテキストボックスに箇条書きを設定してください。行頭文字は[塗りつぶし四角の行頭文字]にしてください。",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=146s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643049"
    },
    {
      questionId: 59,
      questionText: "スライド24に､画像[japason.png]を挿入し､タイトルの下に配置してください｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=253s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643038"
    },
    {
      questionId: 60,
      questionText: "スライド24の画像の高さを10cmに設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=316s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643035"
    },
    {
      questionId: 61,
      questionText: "スライド21の下の画像を､上の画像に合わせて右側をトリミングしてください｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=343s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643033"
    },
    {
      questionId: 62,
      questionText: "スライド2の画像に､アート効果[ペイント:描線]､ぼかし[2.5ポイント]を適用してください｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=448s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643036"
    },
    {
      questionId: 63,
      questionText: "スライド5の画像に､図のスタイル[シンプルな枠､黒]を適用します｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=577s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643037"
    },
    {
      questionId: 64,
      questionText: "スライド12の雲の図形を､太陽の図形に変更してください｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=688s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60660693"
    },
    {
      questionId: 65,
      questionText: "スライド8のタイトル下に横書きテキストボックスを挿入し､[たくさんのスタイルがあります]と入力してください｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=714s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643051"
    },
    {
      questionId: 66,
      questionText: "スライド8のテキストボックスの幅を､10cmに変更します｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=757s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643043"
    },
    {
      questionId: 67,
      questionText: "スライド8のテキストボックスのフォントサイズを[20]､フォントの色を[赤､アクセント4]に変更してください｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=774s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643039"
    },
    {
      questionId: 68,
      questionText: "スライド11のベルのアイコンに､スタイル[塗りつぶし-アクセント4､枠線なし]を適用してください｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=810s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643032"
    },
    {
      questionId: 69,
      questionText: "スライド11のベルのアイコンについて､枠線の太さを3ptに変更します｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=848s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643040"
    },
    {
      questionId: 70,
      questionText: "スライド18のプレースホルダーに2列3行の表を挿入し､1行目の1列目に[花火]､1行目の2列目に[屋台]と入力します｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=869s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643048"
    },
    {
      questionId: 71,
      questionText: "スライド17にある表の[その他]の行を削除してください",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=976s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643034"
    },
    {
      questionId: 72,
      questionText: "スライド17の表に[スタイル(中間)2]の表のスタイルを適用します｡続いて､1行おきに色が変わるオプションを有効にしてください。",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=999s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643047"
    },
    {
      questionId: 73,
      questionText: "スライド[盆踊りの歴史と起源]にSmartArtグラフィック[カード型リスト]を挿入し､テキストウィンドウの上から[歴史][起源]と入力してください｡不要な図形は削除します｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=1084s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643050"
    },
    {
      questionId: 74,
      questionText: "スライド7のSmartArtグラフィックの[スタイル]と[衣装]のあいだに 図形を追加し､[音楽]と入力してください｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=1181s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643031"
    },
    {
      questionId: 75,
      questionText: "スライド7のSmartArtグラフィックの[音楽]の図形を､スタイルよりも前に移動してください｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=1288s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643046"
    },
    {
      questionId: 76,
      questionText: "スライド24に､3Dモデル[turtle.obj]を挿入し､幅を3cmに設定してくだい｡3Dモデルはタイトルの右側に配置します｡",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=1323s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643045"
    },
    {
      questionId: 77,
      questionText: "スライド[結論]の3Dモデルのビューを[右上全面]に変更してください",
      videoUrl: "https://www.youtube.com/watch?v=xsbQhiOdh7g&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=7&t=1379s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643044"
    }
  ],
  
        // 7章-プロパティ・コメント・PDFなど
project7: [
    {
      questionId: 78,
      questionText: "プレゼンテーションのプロパティの会社に[株式会社じゃぱそん]を設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=ig3-IIrGjKQ&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=8&t=1s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643068"
    },
    {
      questionId: 79,
      questionText: "ドキュメント検査を実行し､プレゼンテーションノートだけを削除してください｡",
      videoUrl: "https://www.youtube.com/watch?v=ig3-IIrGjKQ&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=8&t=44s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643071"
    },
    {
      questionId: 80,
      questionText: "アクセシビリティチェックを実行し､エラーを修正します｡代替テキストなしの1つめに､[歴史と起源]を設定します｡",
      videoUrl: "https://www.youtube.com/watch?v=ig3-IIrGjKQ&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=8&t=76s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643073"
    },
    {
      questionId: 81,
      questionText: "スライド22にコメント[ファクトチェックお願いします]を挿入してください｡",
      videoUrl: "https://www.youtube.com/watch?v=ig3-IIrGjKQ&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=8&t=115s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643074"
    },
    {
      questionId: 82,
      questionText: "スライド1のコメントを削除してください｡",
      videoUrl: "https://www.youtube.com/watch?v=ig3-IIrGjKQ&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=8&t=150s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643067"
    },
    {
      questionId: 83,
      questionText: "プレゼンテーションをPDFとして[PDF版]の名前でデスクトップに保存します｡発行後にファイルは開かないようにしてください｡",
      videoUrl: "https://www.youtube.com/watch?v=ig3-IIrGjKQ&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=8&t=244s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643072"
    },
    {
      questionId: 84,
      questionText: "スライド1の文字列[日本の伝統文化について詳しく見る]に､Webページ[https://mos.japason.co.jp/]を表示するハイパーリンクを挿入してください｡",
      videoUrl: "https://www.youtube.com/watch?v=ig3-IIrGjKQ&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=8&t=297s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643075"
    },
    {
      questionId: 85,
      questionText: "スライド[14]の画像に､代替テキスト[踊っている女性の影]を設定",
      videoUrl: "https://www.youtube.com/watch?v=ig3-IIrGjKQ&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=8&t=364s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643069"
    },
    {
      questionId: 86,
      questionText: "スライド5のグラフにグラフスタイル[スタイル2]を適用してください｡",
      videoUrl: "https://www.youtube.com/watch?v=ig3-IIrGjKQ&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=8&t=411s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643070"
    },
    {
      questionId: 87,
      questionText: "スライド19のグラフを[集合縦棒]に変更してください｡その他の項目は変更しません｡",
      videoUrl: "https://www.youtube.com/watch?v=ig3-IIrGjKQ&list=PLOrJMC_Nq6xoh5IcRPIJsZQn7xHFO_yq0&index=8&t=468s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60643066"
    }
  ],
  
        // 8章-応用・スライドショー・設定
project8: [
    {
      questionId: 88,
      questionText: "スライド[プレゼンテーションの概要]と[結論]を除いた[サマライズ版]という目的別スライドショーを作成してください。",
      videoUrl: "https://www.youtube.com/watch?v=FtHfHb_IsN8&t=14s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60660686"
    },
    {
      questionId: 89,
      questionText: "タイトルスライド以外のすべてのスライドに､スライド番号を挿入してください｡",
      videoUrl: "https://www.youtube.com/watch?v=FtHfHb_IsN8&t=61s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60660690"
    },
    {
      questionId: 90,
      questionText: "スライドマスターに[タイトルのみ-日付強調]という名前のレイアウトを作成｡[タイトルのみ]と同じレイアウトにし､フッターの日付のプレースホルダーを太字に変更します｡",
      videoUrl: "https://www.youtube.com/watch?v=FtHfHb_IsN8&t=109s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60660682"
    },
    {
      questionId: 91,
      questionText: "スライド[教育とキャリアの関係]のテキストボックスの2段組を解除してください｡",
      videoUrl: "https://www.youtube.com/watch?v=FtHfHb_IsN8&t=184s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60660684"
    },
    {
      questionId: 92,
      questionText: "アクセシビリティチェックを実行し､代替テキストが設定されていない1枚目のスライドの画像を装飾用に設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=FtHfHb_IsN8&t=216s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60660691"
    },
    {
      questionId: 93,
      questionText: "ドキュメント検査を実行し､スライド外のコンテンツだけを削除してください｡",
      videoUrl: "https://www.youtube.com/watch?v=FtHfHb_IsN8&t=255s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60660685"
    },
    {
      questionId: 94,
      questionText: "[タイトルとコンテンツ]レイアウトの背景のグラフィックを非表示にしてください｡",
      videoUrl: "https://www.youtube.com/watch?v=FtHfHb_IsN8&t=298s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60660688"
    },
    {
      questionId: 95,
      questionText: "グリッドを表示します。グリッドの間隔は[2cm]に設定してください。",
      videoUrl: "https://www.youtube.com/watch?v=FtHfHb_IsN8&t=327s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60660687"
    },
    {
      questionId: 96,
      questionText: "スライド[社会的信頼の構築]の個条書きのテキストボックスに下線の色[青､アクセント4]の[一重線]を設定し､文字の間隔を広げて､幅[1.2pt]に設定してください｡",
      videoUrl: "https://www.youtube.com/watch?v=FtHfHb_IsN8&t=368s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60660683"
    },
    {
      questionId: 97,
      questionText: "スライド[資格がキャリアに与える影響]内の画像の高さ･幅を､18%に変更してください｡",
      videoUrl: "https://www.youtube.com/watch?v=FtHfHb_IsN8&t=474s",
      videoUrlNoCm: "https://school.japason.co.jp/courses/mospowerpoint/lectures/60660689"
    }
  ],
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
        projectNames: {
            project1: "1章-文書のオプションと設定の管理",
            project2: "2章-高度な編集機能や書式設定機能の利用",
            project3: "3章-ユーザー設定のドキュメント要素の作成",
            project4: "4章-高度なWord機能の利用",
            project5: "他科目で学習済みの内容",
            project6: "応用問題"
          },
          
      
        project1: [
          { questionId: 1, questionText: "文書の最後に、文書「おまけ:通勤ランニングにオススメのリュック」の内容を挿入してください。文書「おまけ:通勤ランニングにオススメのリュック」を修正すると、修正内容がこの文書にも反映されるようにします。", videoUrl: "https://www.youtube.com/watch?v=WsgEDexmd6w&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=1&t=1s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039259" },
          { questionId: 2, questionText: "文書の既定のフォントをこの文書だけ変更してください。日本語用のフォントを「Meiryo UI」に設定します。", videoUrl: "https://www.youtube.com/watch?v=WsgEDexmd6w&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=1&t=228s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039272" },
          { questionId: 3, questionText: "現在開いている文書に、文書「1章-組み込み用資料」を組み込んでください。元の文書に現在開いている文書、変更された文書に｢1章-組み込み用資料」を指定し、変更内容は現在の文書に表示します。", videoUrl: "https://www.youtube.com/watch?v=WsgEDexmd6w&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=1&t=315s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039274" },
          { questionId: 4, questionText: "現在の文書を規定の場所にテンプレートとして保存してください｡名前は｢MOS原本｣とします｡", videoUrl: "https://www.youtube.com/watch?v=WsgEDexmd6w&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=1&t=465s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039256" },
          { questionId: 5, questionText: "書式の制限を設定して、利用できるスタイルを「見出し2」と「見出し3」だけにしてください。許可されていない書式やスタイルをクリアするかどうかのメッセージが表示された場合は「いいえ」をクリックし、文書は保護しないでください。", videoUrl: "https://www.youtube.com/watch?v=WsgEDexmd6w&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=1&t=609s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039264" },
          { questionId: 6, questionText: "編集の制限を設定して、コメントだけを許可してください。文書は保護しないでください｡", videoUrl: "https://www.youtube.com/watch?v=WsgEDexmd6w&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=1&t=705s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039265" },
          { questionId: 7, questionText: "見出し「通勤ランニングを始めるための準備とTips」内の「Tips」の校正言語を「英語(米国)」に設定してください。メッセージバーが表示された場合は、表示されたままにします。", videoUrl: "https://www.youtube.com/watch?v=WsgEDexmd6w&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=1&t=807s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039261" },
          { questionId: 8, questionText: "見出し｢まとめ｣内の「田中慎也」に、ルビ「たなかしんや」を表示してください。", videoUrl: "https://www.youtube.com/watch?v=WsgEDexmd6w&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=1&t=884s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039269" }
        ],
      
        project2: [
          { questionId: 9, questionText: "文書内のすべてのタブ文字を、1/4スペースに置換してください。", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=1s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039303" },
          { questionId: 10, questionText: "置換を使って、【】で囲まれた文字列に太字、フォントサイズ「14」を設定してください。【】も含めて置換します。", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=59s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039288" },
          { questionId: 11, questionText: "文書内にあるフォントサイズ「28」のすべての文字列を、フォントサイズ「32」、フォントの色は標準の色の「青」に変更してください。", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=223s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039291" },
          { questionId: 12, questionText: "スタイル「斜体」が適用されている箇所に、スタイル「強調斜体」が適用されるように変更してください。", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=351s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039302" },
          { questionId: 13, questionText: "文書の最後にあるテキストボックスの「メールアドレス:xxx@japason.co.jp」という文字列をコピーして、「※お問い合わせはこちらへ→」の後ろに、貼り付け先の書式に合わせて貼り付けてください。", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=436s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039317" },
          { questionId: 14, questionText: "ハイフンが自動で挿入されるように、ハイフネーションを設定してください。", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=515s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039292" },
          { questionId: 15, questionText: "ページごとに行番号が表示されるように変更してください。", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=525s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039305" },
          { questionId: 16, questionText: "見出し「心の安らぎ」の段落の前で自動的に改ページされるように設定してください。", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=619s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039296" },
          { questionId: 17, questionText: "見出し「音楽やポッドキャスト」の下にある｢お気に入りの音楽やポッドキャストを聴きながら…｣で始まる段落に､改ページ位置の自動修正を設定して､段落内のすべての行が同じページに表示されるようにしてください｡見出しも同じページに表示します｡", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=670s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039289" },
          { questionId: 18, questionText: "文字スタイル「補足」を作成してください。フォントサイズ「8」を設定し、この文書のみに適用します。", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=763s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039297" },
          { questionId: 19, questionText: "段落スタイル「英訳」を作成し､下線､斜体を設定してください｡基準にするスタイルと次の段落のスタイルは｢標準｣とし､スタイルはこの文書のみに適用します｡次に､作成したスタイルを｢A morning walk is…｣から始まる段落に適用してください｡", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=889s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039290" },
          { questionId: 20, questionText: "スタイル｢標準の表 1｣を基準に､表のスタイル｢表強調｣を作成してください｡タイトル行のフォントの色を｢白､背景1｣塗りつぶしの色を標準の色の｢青｣とします｡スタイルはこの文書のみに適用します｡次に､作成したスタイルを見出し｢まとめ｣の下にある2つの表に適用してください｡", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=1052s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039315" },
          { questionId: 21, questionText: "スタイル｢Memo｣の左インデントを1字､段落前の間隔を｢0.5行｣に変更し､この文章のみに適用してください｡", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=1241s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039300" },
          { questionId: 22, questionText: "スタイル｢見出し2｣の文字の効果を変更してください｡文字の塗りつぶしの既定のグラデーションを「中問グラデーション一アクセント2」に変更し、この文書のみに適用します。", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=1288s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039314" },
          { questionId: 23, questionText: "表のスタイル｢ユーザー設定の表スタイル1｣を変更し､最初の列に塗りつぶしの色｢水色､アクセント4｣を追加してください｡スタイルはこの文書のみに適用します｡", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=1357s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039311" },
          { questionId: 24, questionText: "テンプレート「kindle原稿(WordExpert用).dotx」から、スタイル「【問題】」をコピーしてください。テンプレートは添付しないでください。", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=1453s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039307" },
          { questionId: 25, questionText: "文書「マクロコピー用文書」から、マクロをコピーしてください。", videoUrl: "https://www.youtube.com/watch?v=GbeGbwUVCl4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=2&t=1608s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039308" }
        ],
      
        project3: [
          { questionId: 26, questionText: "文末のテキストボックスをクイックパーツとして保存してください。名前「著者情報(会社)」、説明「会社名と問い合わせ先」、分類「著者情報」、保存先「Building Blocks」とします。分類は新しく作成してください。", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=1s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039330" },
          { questionId: 27, questionText: "クイックパーツ｢著者情報(会社)｣の名前を｢著者情報(株式会社じゃぱそん)｣に変更してください｡内容が段落のまま挿入されるようにします｡", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=119s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039320" },
          { questionId: 28, questionText: "クイックパーツ「著者情報(株式会社じゃぱそん)」を削除してください。", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=211s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039336" },
          { questionId: 29, questionText: "現在の配色を変更して、「Word用配色」という名前の配色バターンを作成してください。アクセント1を赤｢40｣緑｢100｣青｢200｣にします｡", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=236s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039323" },
          { questionId: 30, questionText: "現在のフォントセットを変更して､｢マニュアル用フォント｣という名前のフォントセットを作成してください。日本語用の見出しのフォントを「Meiryo UI」に設定します｡", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=366s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039322" },
          { questionId: 31, questionText: "現在の文書に適用されている書式を「Word関連資料テーマ」という名前で、既定の場所にテーマとして保存してください。", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=410s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039338" },
          { questionId: 32, questionText: "現在の文書に適用されている書式を、｢Office関連資料スタイルセット｣という名前で既定の場所にスタイルセットとして保存してください。", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=457s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039334" },
          { questionId: 33, questionText: "見出し｢ショートカットキーを覚える｣内の｢Ctrl+C｣を索引登録してください｡", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=713s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039333" },
          { questionId: 34, questionText: "見出し｢索引｣の下の段落に､索引を挿入してください。書式は「クラシック」とし、1段組みで表示します。", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=785s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039332" },
          { questionId: 35, questionText: "見出し「基本操作を習得する」の表の上に、図表番号「表1Wordの基本操作一覧」を挿入してください。図表番号は表の上に挿入します｡", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=820s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039327" },
          { questionId: 36, questionText: "文書内の表に設定されている図表番号「表1 ･･･」を、「表A ･･･」に変更してください。", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=887s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039331" },
          { questionId: 37, questionText: "見出し「表一覧」の次の行に、表の図表目次を挿入してください。書式は「エレガント」、タブリーダーは｢-------｣とします。", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=932s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039340" },
          { questionId: 38, questionText: "新しい資料文献として､文献の種類「書籍」、著者「じゃぱそん」、タイトル｢MOS Word 365厳選問題集｣、年「2024」、発行元「株式会社じゃぱそん」を追加してください｡", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=965s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039321" },
          { questionId: 39, questionText: "見出し｢学習する｣内の本文「じゃぱそんの本」の後ろに引用文献として｢MOS Word 365厳選問題集｣を挿入してください。", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=1013s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039337" },
          { questionId: 40, questionText: "見出し｢その他｣の次の段落に､組み込みの文献目録を挿入してください｡", videoUrl: "https://www.youtube.com/watch?v=3mWyrqicAUo&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=3&t=1042s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039329" }
        ],
      
        project4: [
          { questionId: 41, questionText: "フッターに文書のタイトルを表示する「Title」フィールドを挿入してください。", videoUrl: "https://www.youtube.com/watch?v=GtZQh2Q4gi4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=4&t=1s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039363" },
          { questionId: 42, questionText: "文書の最後にある「や消費の見直しといった･･･」の前に、ブックマーク「固定費」を参照する「Ref」フィールドを挿入してください。", videoUrl: "https://www.youtube.com/watch?v=GtZQh2Q4gi4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=4&t=158s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039353" },
          { questionId: 43, questionText: "先頭ページの文字列｢更新日:｣の後ろに､SaveDateフィールドを追加します｡書式は初期値から変更しません｡", videoUrl: "https://www.youtube.com/watch?v=GtZQh2Q4gi4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=4&t=198s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039354" },
          { questionId: 44, questionText: "先頭ページの文字列｢更新日:｣の後ろのSaveDateフィールドの書式を､｢yyyy/M/d｣に変更してください｡", videoUrl: "https://www.youtube.com/watch?v=GtZQh2Q4gi4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=4&t=224s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039345" },
          { questionId: 45, questionText: "ヘッダーのフィールド[FileName]について､ファイル名の前にパスを表示するよう変更してください｡", videoUrl: "https://www.youtube.com/watch?v=GtZQh2Q4gi4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=4&t=257s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039350" },
          { questionId: 46, questionText: "見出し｢出費改善の重要性を理解するためのチェックリスト｣内の｢Q:出費改善が収入増加よりも･･･｣の前に､チェックボックスコンテンツコントロールを挿入します｡", videoUrl: "https://www.youtube.com/watch?v=GtZQh2Q4gi4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=4&t=285s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039359" },
          { questionId: 47, questionText: "｢Q:あなたの今の課題は何ですか?｣の次の段落に､ドロップダウンリストコンテンツコントロールを挿入してください｡タイトルは｢課題｣とし､リストに｢現状の把握｣｢出費の削減｣｢計画｣の3つが表示されるように設定します｡", videoUrl: "https://www.youtube.com/watch?v=GtZQh2Q4gi4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=4&t=366s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039346" },
          { questionId: 48, questionText: "｢私は･･･を行います｡｣内のコンテンツコントロール内で､改行ができないように設定してください｡", videoUrl: "https://www.youtube.com/watch?v=GtZQh2Q4gi4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=4&t=428s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039355" },
          { questionId: 49, questionText: "現在の文書に差し込み印刷の設定を行ってください。リストはブック「会員名簿」を使用します。", videoUrl: "https://www.youtube.com/watch?v=GtZQh2Q4gi4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=4&t=469s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039348" },
          { questionId: 50, questionText: "現在の文書に設定されている差し込み印刷のリストを編集し、「田中美咲」を印刷対象から除外してください。", videoUrl: "https://www.youtube.com/watch?v=GtZQh2Q4gi4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=4&t=504s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039352" },
          { questionId: 51, questionText: "この文書に設定されている差し込み印刷のリストの会員番号「1001」の「佐藤 太朗」の氏名を「佐藤 二朗」に変更して、変更内容を保存してください。", videoUrl: "https://www.youtube.com/watch?v=GtZQh2Q4gi4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=4&t=522s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039356" },
          { questionId: 52, questionText: "文書の先頭「会員番号:」の後ろに差し込みフィールド｢会員番号｣を挿入してください。", videoUrl: "https://www.youtube.com/watch?v=GtZQh2Q4gi4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=4&t=556s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039362" },
          { questionId: 53, questionText: "差し込み印刷の結果として、最後のレコードをプレビューしてください。", videoUrl: "https://www.youtube.com/watch?v=GtZQh2Q4gi4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=4&t=580s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039361" },
          { questionId: 54, questionText: "現在の文書に差し込み印刷の設定を行ってください。リストはデスクトップに「会員名簿」という名前で新しく作成し、 1件目のデータとして姓「田中」、名「慎也」と入力します。その他のフィールドは削除したり変更したりしないようにします。", videoUrl: "https://www.youtube.com/watch?v=GtZQh2Q4gi4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=4&t=597s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039357" }
        ],
      
        project5: [
          { questionId: 55, questionText: "クイックアクセスツールバーに､上書き保存を追加してください｡", videoUrl: "https://www.youtube.com/watch?v=-KbAf5WNtW4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=5&t=1s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039367" },
          { questionId: 56, questionText: "自動回復用データを保存する問隔を「3」分に設定してください。", videoUrl: "https://www.youtube.com/watch?v=-KbAf5WNtW4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=5&t=16s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039366" },
          { questionId: 57, questionText: "文字列｢能力の証明｣を元に､選択中の文字列に太字と下線を設定するマクロ｢太字と下線｣を､現在開いている文章に作成してください｡", videoUrl: "https://www.youtube.com/watch?v=-KbAf5WNtW4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=5&t=34s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039370" },
          { questionId: 58, questionText: "現在の文書にあるマクロ｢スタイル設定｣のマクロ名を｢見出し２を設定｣に変更してください｡", videoUrl: "https://www.youtube.com/watch?v=-KbAf5WNtW4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=5&t=50s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039371" },
          { questionId: 59, questionText: "マクロ｢フォントサイズ変更｣を編集し､フォントサイズ｢16｣を｢20｣に変更してください｡", videoUrl: "https://www.youtube.com/watch?v=-KbAf5WNtW4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=5&t=96s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039369" },
          { questionId: 60, questionText: "デジタル署名されたマクロだけが有効になるように設定してください。", videoUrl: "https://www.youtube.com/watch?v=-KbAf5WNtW4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=5&t=131s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039368" },
          { questionId: 61, questionText: "文書を最終版にしてください。", videoUrl: "https://www.youtube.com/watch?v=-KbAf5WNtW4&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=5&t=158s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039365" }
        ],
      
        project6: [
          { questionId: 62, questionText: "テキストボックス内の｢Japason.inc｣を､小型英大文字に設定してください｡", videoUrl: "https://www.youtube.com/watch?v=ViwJ5a_KeTE&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=6&t=1s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039375" },
          { questionId: 63, questionText: "スタイル｢見出し1｣を変更してください｡太字と､色が｢黒､テキスト1｣で太さが｢3pt｣の下罫線を設定します｡", videoUrl: "https://www.youtube.com/watch?v=ViwJ5a_KeTE&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=6&t=38s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039377" },
          { questionId: 64, questionText: "見出し｢はじめに｣内の個条書き「紙媒体の魅力」と「読書文化の未来」を、｢1.読書の変化｣から始まる番号付きリストの最後に移動してください｡書式は移動先に合わせ、行頭文字が残った場合は削除します。", videoUrl: "https://www.youtube.com/watch?v=ViwJ5a_KeTE&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=6&t=156s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039376" },
          { questionId: 65, questionText: "見出し｢はじめに｣内に設定された「タブレット」の索引項目を削除してください。次に、編集記号を非表示にした状態で、文書の最終ページにある索引を更新してください。", videoUrl: "https://www.youtube.com/watch?v=ViwJ5a_KeTE&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=6&t=246s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039379" },
          { questionId: 66, questionText: "見出し｢読書の変化｣内にある｢電子書籍｣｢オーディオブック｣の2つを､｢読書の変化｣のサブ項目として索引に登録してください｡複数ある場合は､先頭の1件だけを登録します｡", videoUrl: "https://www.youtube.com/watch?v=ViwJ5a_KeTE&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=6&t=427s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039372" },
          { questionId: 67, questionText: "編集の制限を設定して、文書の変更ができないようにしてください。ただし、見出し「はじめに」内の4つの段落番号はすべてのユーザーが変更できるようにします。編集の制限を解除するためのバスワードは「japa」とします。", videoUrl: "https://www.youtube.com/watch?v=ViwJ5a_KeTE&list=PLOrJMC_Nq6xredH8tO37p_1nOcW-pOfF_&index=6&t=559s", videoUrlNoCm: "https://school.japason.co.jp/courses/2808265/lectures/62039381" }
        ]
      }
      
};

// LocalStorageからデータを読み込む関数
function loadQuestionData() {
    const savedData = sessionStorage.getItem('questionData');
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
        //セッションへの保存に変更
        //localStorage.setItem('questionData', JSON.stringify(data));
        SessionStorage.setItem('questionData', JSON.stringify(data));
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