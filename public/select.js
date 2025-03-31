document.addEventListener('DOMContentLoaded', () => {
    const appSelect = document.getElementById('appSelect');
    const startButton = document.getElementById('startButton');
    const noTimer = document.getElementById('noTimer');

    // 開始ボタンクリック時
    startButton.addEventListener('click', () => {
        // 選択された値をローカルストレージに保存
        localStorage.setItem('selectedApp', appSelect.value);
        localStorage.setItem('noTimer', noTimer.checked);
        
        // メイン画面へ遷移
        window.location.href = 'select.html';
    });
}); 