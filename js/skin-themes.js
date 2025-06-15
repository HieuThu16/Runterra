class SkinThemesManager {
  constructor() {
    this.currentTheme = null;
    this.displayMode = "grid"; // grid hoặc list
  }
  async initializeThemes() {
    console.log("=== INITIALIZING SKIN THEMES ===");

    // Kiểm tra xem skinService có tồn tại không
    if (!skinService) {
      console.error("SkinService not found!");
      return;
    }

    try {
      await skinService.loadSkinsData();
      console.log("Skin data loaded successfully");

      // Debug skin service
      skinService.debugSkinLoading();

      this.renderThemesOverview();
      this.setupEventListeners();

      console.log("Skin themes initialized successfully");
    } catch (error) {
      console.error("Error initializing skin themes:", error);
      this.renderErrorState();
    }
  }
  renderErrorState() {
    const container = document.getElementById("skinThemesGrid");
    if (!container) return;

    container.innerHTML = `
      <div class="error-state bg-red-900/30 p-8 rounded-lg border border-red-600/50 text-center">
        <h2 class="text-2xl font-bold text-red-300 mb-4">⚠️ Lỗi Tải Dữ Liệu Skin</h2>
        <p class="text-red-100 mb-4">Không thể tải dữ liệu skin. Hãy kiểm tra console để xem chi tiết lỗi.</p>
        <button onclick="skinThemesManager.initializeThemes()" 
                class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
          Thử Lại
        </button>
      </div>
    `;
  }
  renderThemesOverview() {
    const container = document.getElementById("skinThemesGrid");
    if (!container) {
      console.error("Container #skinThemesGrid not found!");
      return;
    }

    console.log("Rendering themes overview...");

    const themes = skinService.getAllThemes();
    console.log("Available themes:", themes);

    if (!themes || themes.length === 0) {
      container.innerHTML = `
        <div class="no-data-state bg-yellow-900/30 p-8 rounded-lg border border-yellow-600/50 text-center">
          <h2 class="text-2xl font-bold text-yellow-300 mb-4">📦 Chưa Có Dữ Liệu Skin</h2>
          <p class="text-yellow-100 mb-4">Hệ thống chưa tải được dữ liệu skin. Hãy thử tải lại.</p>
          <button onclick="skinService.loadSkinsData().then(() => skinThemesManager.renderThemesOverview())" 
                  class="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors">
            Tải Dữ Liệu Skin
          </button>
        </div>
      `;
      return;
    }

    const themesStats = skinService.getSkinsStats().byTheme;

    let html = `
            <div class="skin-themes-header">
                <h2>Tổng Hợp Chủ Đề Skin</h2>
                <div class="themes-controls">
                    <div class="search-box">
                        <input type="text" id="theme-search" placeholder="Tìm kiếm chủ đề...">
                    </div>
                    <div class="display-controls">
                        <button class="display-btn ${
                          this.displayMode === "grid" ? "active" : ""
                        }" 
                                data-mode="grid">Lưới</button>
                        <button class="display-btn ${
                          this.displayMode === "list" ? "active" : ""
                        }" 
                                data-mode="list">Danh sách</button>
                    </div>
                </div>
            </div>
            <div class="themes-container ${this.displayMode}">
        `;

    themes.forEach((theme) => {
      const skins = skinService.getSkinsByTheme(theme);
      const previewSkins = skins.slice(0, 4); // Hiển thị 4 skin đầu tiên làm preview

      html += `
                <div class="theme-card" data-theme="${theme}">
                    <div class="theme-header">
                        <h3>${theme}</h3>
                        <span class="skin-count">${skins.length} skins</span>
                    </div>
                    <div class="theme-preview">
                        ${previewSkins
                          .map(
                            (
                              skin
                            ) => `                            <div class="preview-skin" title="${skin.name}">                                <img src="${skin.splashArt}" alt="${skin.name}" 
                                     onerror="console.warn('🚫 Image failed for ${skin.name}:', this.src); this.src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg'"
                                     onload="console.log('✅ Image loaded for ${skin.name}')">
                                <div class="skin-info">
                                    <span class="champion-name">${skin.champion}</span>
                                    <span class="skin-price">${skin.price} RP</span>
                                </div>
                            </div>
                        `
                          )
                          .join("")}
                        ${
                          skins.length > 4
                            ? `<div class="more-skins">+${
                                skins.length - 4
                              } khác</div>`
                            : ""
                        }
                    </div>
                    <div class="theme-stats">
                        <div class="stat">
                            <span class="stat-label">Tổng giá trị:</span>
                            <span class="stat-value">${skins
                              .reduce((sum, skin) => sum + skin.price, 0)
                              .toLocaleString()} RP</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Giá trung bình:</span>
                            <span class="stat-value">${Math.round(
                              skins.reduce((sum, skin) => sum + skin.price, 0) /
                                skins.length
                            ).toLocaleString()} RP</span>
                        </div>
                    </div>                    <button class="view-theme-btn" data-theme="${theme}">
                        Xem Chi Tiết
                    </button>
                </div>
            `;
    });

    html += "</div>";
    container.innerHTML = html;
    console.log(
      "Themes overview rendered successfully. Themes count:",
      themes.length
    );
  }

  renderThemeDetail(themeName) {
    const container = document.getElementById("skinThemesGrid");
    if (!container) return;

    const skins = skinService.getSkinsByTheme(themeName);

    let html = `
            <div class="theme-detail-header">
                <button class="back-btn" onclick="skinThemesManager.renderThemesOverview()">
                    ← Quay lại
                </button>
                <h2>Chủ Đề: ${themeName}</h2>
                <div class="theme-summary">
                    <span>${skins.length} skins</span>
                    <span>Tổng giá trị: ${skins
                      .reduce((sum, skin) => sum + skin.price, 0)
                      .toLocaleString()} RP</span>
                </div>
            </div>
            <div class="skins-grid">
        `;

    skins.forEach((skin) => {
      html += `
                <div class="skin-card detailed" data-skin-id="${skin.id}">
                    <div class="skin-image">                        <img src="${
                      skin.splashArt
                    }" alt="${skin.name}"
                             onerror="console.warn('🚫 Detailed skin image failed for ${
                               skin.name
                             }'); this.src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg'"
                             onload="console.log('✅ Detailed skin image loaded for ${
                               skin.name
                             }')">
                        <div class="skin-overlay">
                            <button class="preview-btn" onclick="this.showSkinPreview(${
                              skin.id
                            })">
                                Xem trước
                            </button>
                        </div>
                    </div>
                    <div class="skin-info">
                        <h4>${skin.name}</h4>
                        <div class="skin-details">
                            <span class="champion">${skin.champion}</span>
                            <span class="rarity ${skin.rarity.toLowerCase()}">${
        skin.rarity
      }</span>
                        </div>
                        <div class="skin-price">
                            <span class="price">${skin.price.toLocaleString()} RP</span>
                            <span class="release-date">${new Date(
                              skin.releaseDate
                            ).toLocaleDateString("vi-VN")}</span>
                        </div>
                        <p class="skin-description">${skin.description}</p>
                        <div class="skin-effects">
                            <strong>Hiệu ứng:</strong>
                            <ul>
                                ${skin.effects
                                  .map((effect) => `<li>${effect}</li>`)
                                  .join("")}
                            </ul>
                        </div>
                        <div class="skin-actions">
                            <button class="champion-info-btn" onclick="this.showChampionInfo('${
                              skin.champion
                            }')">
                                Thông tin tướng
                            </button>
                            <button class="favorite-btn" onclick="this.toggleFavorite(${
                              skin.id
                            })">
                                ♡ Yêu thích
                            </button>
                        </div>
                    </div>
                </div>
            `;
    });

    html += "</div>";
    container.innerHTML = html;
  }

  setupEventListeners() {
    // Event delegation cho các button
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("view-theme-btn")) {
        const theme = e.target.dataset.theme;
        this.renderThemeDetail(theme);
      }

      if (e.target.classList.contains("display-btn")) {
        this.displayMode = e.target.dataset.mode;
        document
          .querySelectorAll(".display-btn")
          .forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");
        this.renderThemesOverview();
      }
    });

    // Tìm kiếm theme
    document.addEventListener("input", (e) => {
      if (e.target.id === "theme-search") {
        this.filterThemes(e.target.value);
      }
    });
  }

  filterThemes(query) {
    const themeCards = document.querySelectorAll(".theme-card");
    const lowercaseQuery = query.toLowerCase();

    themeCards.forEach((card) => {
      const themeName = card.dataset.theme.toLowerCase();
      const visible = themeName.includes(lowercaseQuery);
      card.style.display = visible ? "block" : "none";
    });
  }

  showSkinPreview(skinId) {
    const skin = skinService.getSkinById(skinId);
    if (!skin) return;

    // Tạo modal preview
    const modal = document.createElement("div");
    modal.className = "skin-preview-modal";
    modal.innerHTML = `
            <div class="preview-content">
                <button class="close-btn" onclick="this.parentElement.parentElement.remove()">×</button>
                <div class="preview-images">                    <img src="${
                  skin.splashArt
                }" alt="${skin.name} Splash Art" class="splash-art"
    onerror="console.warn('🚫 Preview splash art failed for ${
      skin.name
    }'); this.src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg'"
    onload="console.log('✅ Preview splash art loaded for ${skin.name}')">
                    <img src="${skin.loadingScreen}" alt="${
      skin.name
    } Loading Screen" class="loading-screen"
    onerror="console.warn('🚫 Preview loading screen failed for ${
      skin.name
    }'); this.src='https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg'"
    onload="console.log('✅ Preview loading screen loaded for ${skin.name}')">
                </div>
                <div class="preview-info">
                    <h3>${skin.name}</h3>
                    <p>${skin.description}</p>
                    <div class="preview-stats">
                        <span>Champion: ${skin.champion}</span>
                        <span>Rarity: ${skin.rarity}</span>
                        <span>Price: ${skin.price.toLocaleString()} RP</span>
                    </div>
                </div>
            </div>
        `;

    document.body.appendChild(modal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  showChampionInfo(championName) {
    // Chuyển đến tab champion info và hiển thị thông tin tướng
    console.log("Hiển thị thông tin champion:", championName);
    // Sẽ integrate với champion info system
  }

  toggleFavorite(skinId) {
    // Toggle favorite skin
    console.log("Toggle favorite skin:", skinId);
    // Implement favorite system
  }
}

// Khởi tạo manager
const skinThemesManager = new SkinThemesManager();

// CSS cho skin themes
const skinThemesCSS = `
.skin-themes-header {
    margin-bottom: 20px;
    padding: 20px;
    background: linear-gradient(135deg, #1e2328 0%, #3c3c41 100%);
    border-radius: 10px;
    border: 1px solid #463714;
}

.skin-themes-header h2 {
    color: #f0e6d2;
    margin: 0 0 15px 0;
    font-size: 1.8em;
}

.themes-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

.search-box input {
    padding: 10px 15px;
    border: 1px solid #463714;
    border-radius: 5px;
    background: #1e2328;
    color: #f0e6d2;
    width: 250px;
}

.display-controls {
    display: flex;
    gap: 10px;
}

.display-btn {
    padding: 8px 15px;
    border: 1px solid #463714;
    border-radius: 5px;
    background: #3c3c41;
    color: #f0e6d2;
    cursor: pointer;
    transition: all 0.3s ease;
}

.display-btn.active,
.display-btn:hover {
    background: #c8aa6e;
    color: #1e2328;
}

.themes-container.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;
}

.themes-container.list .theme-card {
    margin-bottom: 15px;
}

.theme-card {
    background: linear-gradient(135deg, #1e2328 0%, #3c3c41 100%);
    border: 1px solid #463714;
    border-radius: 10px;
    padding: 20px;
    transition: all 0.3s ease;
}

.theme-card:hover {
    border-color: #c8aa6e;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(200, 170, 110, 0.2);
}

.theme-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.theme-header h3 {
    color: #f0e6d2;
    margin: 0;
    font-size: 1.3em;
}

.skin-count {
    background: #c8aa6e;
    color: #1e2328;
    padding: 4px 8px;
    border-radius: 15px;
    font-size: 0.9em;
    font-weight: bold;
}

.theme-preview {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 15px;
}

.preview-skin {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    aspect-ratio: 16/9;
}

.preview-skin img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.skin-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    padding: 5px;
    color: white;
    font-size: 0.8em;
}

.more-skins {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3c3c41;
    color: #f0e6d2;
    border-radius: 5px;
    font-weight: bold;
}

.theme-stats {
    margin-bottom: 15px;
}

.stat {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    color: #a09b8c;
    font-size: 0.9em;
}

.stat-value {
    color: #f0e6d2;
    font-weight: bold;
}

.view-theme-btn {
    width: 100%;
    padding: 12px;
    background: #c8aa6e;
    color: #1e2328;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.view-theme-btn:hover {
    background: #f0e6d2;
    transform: translateY(-2px);
}

.theme-detail-header {
    margin-bottom: 20px;
    padding: 20px;
    background: linear-gradient(135deg, #1e2328 0%, #3c3c41 100%);
    border-radius: 10px;
    border: 1px solid #463714;
}

.back-btn {
    background: #3c3c41;
    color: #f0e6d2;
    border: 1px solid #463714;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 15px;
}

.back-btn:hover {
    background: #c8aa6e;
    color: #1e2328;
}

.theme-summary {
    display: flex;
    gap: 20px;
    color: #a09b8c;
}

.skins-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 20px;
}

.skin-card.detailed {
    background: linear-gradient(135deg, #1e2328 0%, #3c3c41 100%);
    border: 1px solid #463714;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.skin-card.detailed:hover {
    border-color: #c8aa6e;
    transform: translateY(-5px);
}

.skin-image {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
}

.skin-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.skin-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.skin-card.detailed:hover .skin-overlay {
    opacity: 1;
}

.preview-btn {
    padding: 10px 20px;
    background: #c8aa6e;
    color: #1e2328;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

.skin-card.detailed .skin-info {
    padding: 15px;
    position: static;
    background: none;
}

.skin-card.detailed .skin-info h4 {
    color: #f0e6d2;
    margin: 0 0 10px 0;
    font-size: 1.2em;
}

.skin-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.champion {
    color: #c8aa6e;
    font-weight: bold;
}

.rarity {
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 0.8em;
    font-weight: bold;
}

.rarity.epic { background: #8B4CB8; color: white; }
.rarity.legendary { background: #FF8C00; color: white; }
.rarity.ultimate { background: #FF6B6B; color: white; }

.skin-price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.price {
    color: #c8aa6e;
    font-weight: bold;
}

.release-date {
    color: #a09b8c;
    font-size: 0.9em;
}

.skin-description {
    color: #a09b8c;
    font-size: 0.9em;
    margin-bottom: 10px;
    line-height: 1.4;
}

.skin-effects {
    margin-bottom: 15px;
}

.skin-effects strong {
    color: #f0e6d2;
}

.skin-effects ul {
    margin: 5px 0 0 20px;
    padding: 0;
}

.skin-effects li {
    color: #a09b8c;
    font-size: 0.9em;
    margin-bottom: 3px;
}

.skin-actions {
    display: flex;
    gap: 10px;
}

.champion-info-btn,
.favorite-btn {
    flex: 1;
    padding: 8px;
    border: 1px solid #463714;
    border-radius: 5px;
    background: #3c3c41;
    color: #f0e6d2;
    cursor: pointer;
    font-size: 0.9em;
    transition: all 0.3s ease;
}

.champion-info-btn:hover,
.favorite-btn:hover {
    background: #c8aa6e;
    color: #1e2328;
}

.skin-preview-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.preview-content {
    background: #1e2328;
    border: 1px solid #463714;
    border-radius: 10px;
    padding: 20px;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    color: #f0e6d2;
    font-size: 24px;
    cursor: pointer;
}

.preview-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 15px;
}

.preview-images img {
    width: 100%;
    border-radius: 5px;
}

.preview-info h3 {
    color: #f0e6d2;
    margin-bottom: 10px;
}

.preview-info p {
    color: #a09b8c;
    margin-bottom: 15px;
    line-height: 1.4;
}

.preview-stats {
    display: flex;
    gap: 20px;
    color: #a09b8c;
}
`;

// Thêm CSS vào document
const styleSheet = document.createElement("style");
styleSheet.textContent = skinThemesCSS;
document.head.appendChild(styleSheet);
