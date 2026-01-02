// ページ読み込み時に共通パーツを描画
document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderNav();
});

// ヘッダーの描画
function renderHeader() {
    const headerHTML = `
        <header>
            <img src="NNN_logo.jpg" alt="Logo" class="header-logo">
            <h1>NIKKEI Nihonshu Night Vol.2</h1>
        </header>
    `;
    // bodyの先頭に挿入
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// ナビゲーションの描画
function renderNav() {
    // 現在のファイル名を取得（例: "index.html"）
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html"; // ファイル名がない場合はindexとみなす

    // アクティブクラスの判定用ヘルパー
    const isActive = (target) => (page === target) ? 'active' : '';

    // ナビゲーションのHTML（★ここで並び順を一括管理できます！）
    const navHTML = `
        <nav class="tab-nav">
            <a href="info.html" class="tab-link ${isActive('info.html')}">
                <span class="tab-icon">ℹ️</span>イベント情報
            </a>
            <a href="index.html" class="tab-link ${isActive('index.html')}">
                <span class="tab-icon">🍶</span>おすすめ診断
            </a>
            <a href="list.html" class="tab-link ${isActive('list.html')}">
                <span class="tab-icon">📜</span>全ラインナップ
            </a>
        </nav>
    `;

    // headerの直後に挿入
    const header = document.querySelector('header');
    if (header) {
        header.insertAdjacentHTML('afterend', navHTML);
    }
}