import json
import csv

def update_video_urls(csv_file_path, js_file_path):
    # CSVファイルを読み込む
    with open(csv_file_path, 'r', encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        url_mapping = {}
        for row in csv_reader:
            app_id = row['appId']
            project_id = row['projectId']
            question_id = row['questionId']
            if app_id not in url_mapping:
                url_mapping[app_id] = {}
            if project_id not in url_mapping[app_id]:
                url_mapping[app_id][project_id] = {}
            url_mapping[app_id][project_id][question_id] = {
                'videoUrl': row['videoUrl'],
                'videoUrlNoCm': row['videoUrlNoCm']
            }

    # questions.jsを読み込む
    with open(js_file_path, 'r', encoding='utf-8') as js_file:
        js_content = js_file.read()

    # 初期データの部分を抽出
    start_index = js_content.find('const initialQuestionData = {')
    end_index = js_content.find('};', start_index) + 2
    data_str = js_content[start_index:end_index]

    # データをJSONとして解析
    data = json.loads(data_str.replace('const initialQuestionData = ', ''))

    # 各アプリケーションの各プロジェクトの各問題を更新
    for app_id, app_data in data.items():
        if app_id in url_mapping:
            for project_key, project_data in app_data.items():
                if project_key.startswith('project') and isinstance(project_data, list):
                    project_id = project_key.replace('project', '')
                    if project_id in url_mapping[app_id]:
                        for question in project_data:
                            if 'questionId' in question:
                                question_id = str(question['questionId'])
                                if question_id in url_mapping[app_id][project_id]:
                                    question['videoUrl'] = url_mapping[app_id][project_id][question_id]['videoUrl']
                                    question['videoUrlNoCm'] = url_mapping[app_id][project_id][question_id]['videoUrlNoCm']

    # 更新されたデータを文字列に変換
    updated_data_str = json.dumps(data, ensure_ascii=False, indent=4)
    updated_js_content = js_content[:start_index] + 'const initialQuestionData = ' + updated_data_str + js_content[end_index:]

    # ファイルに書き戻す
    with open(js_file_path, 'w', encoding='utf-8') as js_file:
        js_file.write(updated_js_content)

if __name__ == '__main__':
    csv_file_path = 'public/URLs-PowerPoint.csv'  # CSVファイルのパス
    js_file_path = 'public/questions.js'  # questions.jsのパス
    update_video_urls(csv_file_path, js_file_path) 