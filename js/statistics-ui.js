/**
 * Statistics UI Manager for Runeterra Champions
 * Quản lý giao diện hiển thị thống kê và phân tích
 */
class StatisticsUI {
  constructor(statsManager) {
    this.stats = statsManager;
    this.currentTab = "regions";
    this.animationDuration = 300;
  }

  /**
   * Khởi tạo UI thống kê
   */
  init() {
    this.setupTabNavigation();
    this.renderOverviewStats();
    this.renderRegionStats();
    this.setupEventListeners();
  }

  /**
   * Setup navigation tabs
   */
  setupTabNavigation() {
    const tabs = document.querySelectorAll(".stats-tab-btn");
    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        const tabId = e.target.id;
        this.switchTab(tabId);
      });
    });
  }

  /**
   * Chuyển đổi tab thống kê
   */
  switchTab(tabId) {
    // Update active tab
    document.querySelectorAll(".stats-tab-btn").forEach((btn) => {
      btn.classList.remove("bg-cyan-600", "text-white");
      btn.classList.add("bg-slate-600", "text-slate-300");
    });

    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.remove("bg-slate-600", "text-slate-300");
      activeTab.classList.add("bg-cyan-600", "text-white");
    }

    // Hide all sections
    document.querySelectorAll(".stats-section").forEach((section) => {
      section.classList.add("hidden");
    });

    // Show corresponding section
    const tabMap = {
      regionStatsTab: "regionStatsSection",
      roleStatsTab: "roleStatsSection",
      weaponStatsTab: "weaponStatsSection",
      genderStatsTab: "genderStatsSection",
      speciesStatsTab: "speciesStatsSection",
      releaseYearStatsTab: "releaseYearStatsSection",
    };

    const sectionId = tabMap[tabId];
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.classList.remove("hidden");
        this.currentTab = sectionId.replace("StatsSection", "");
        this.renderTabContent(this.currentTab);
      }
    }
  }

  /**
   * Render nội dung tab tương ứng
   */
  renderTabContent(tabType) {
    switch (tabType) {
      case "region":
        this.renderRegionStats();
        break;
      case "role":
        this.renderRoleStats();
        break;
      case "weapon":
        this.renderWeaponStats();
        break;
      case "gender":
        this.renderGenderStats();
        break;
      case "species":
        this.renderSpeciesStats();
        break;
      case "releaseYear":
        this.renderReleaseYearStats();
        break;
    }
  }

  /**
   * Display thống kê tổng quan - method được gọi từ app.js
   */
  displayOverviewStats() {
    const overview = this.stats.getOverviewStats();

    // Update overview cards
    this.updateElement("totalChampions", overview.totalChampions);
    this.updateElement("totalRegions", overview.totalRegions);
    this.updateElement("totalWeapons", overview.totalWeapons);
    this.updateElement("popularRole", overview.mostPopularRole);

    // Render completion rates với progress bars
    this.renderCompletionRates(overview);
  }

  /**
   * Display region stats - method được gọi từ app.js
   */
  displayRegionStats() {
    this.renderRegionStats();
  }

  /**
   * Display role stats - method được gọi từ app.js
   */
  displayRoleStats() {
    this.renderRoleStats();
  }

  /**
   * Display weapon stats - method được gọi từ app.js
   */
  displayWeaponStats() {
    this.renderWeaponStats();
  }

  /**
   * Display gender stats - method được gọi từ app.js
   */
  displayGenderStats() {
    this.renderGenderStats();
  }

  /**
   * Display species stats - method được gọi từ app.js
   */
  displaySpeciesStats() {
    this.renderSpeciesStats();
  }

  /**
   * Display release year stats - method được gọi từ app.js
   */
  displayReleaseYearStats() {
    this.renderReleaseYearStats();
  }

  /**
   * Render methods for missing statistics
   */
  renderGenderStats() {
    const genderStats = this.stats.getGenderDistribution();
    const container = document.getElementById("genderStatsContainer");
    if (!container) return;

    const genderData = Array.from(genderStats.entries()).sort(
      (a, b) => b[1] - a[1]
    );
    const total = genderData.reduce((sum, [, count]) => sum + count, 0);
    const allChampions = this.stats.getAllChampions();

    container.innerHTML = genderData
      .map(
        ([gender, count]) => `
          <div class="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600 transition-colors cursor-pointer" 
               data-gender="${gender}">
            <div class="text-3xl mb-2">${this.getGenderIcon(gender)}</div>
            <div class="text-2xl font-bold text-cyan-400">${count}</div>
            <div class="text-sm text-slate-400">${gender}</div>
            <div class="mt-2">
              <div class="w-full bg-slate-600 rounded-full h-2">
                <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                     style="width: ${((count / total) * 100).toFixed(
                       1
                     )}%"></div>
              </div>
              <div class="text-xs text-slate-500 mt-1">${(
                (count / total) *
                100
              ).toFixed(1)}%</div>
            </div>
            <div class="text-xs text-cyan-300 mt-2">👆 Click để xem chi tiết</div>
          </div>
        `
      )
      .join("");

    // Add click handlers
    container.querySelectorAll("[data-gender]").forEach((card) => {
      card.addEventListener("click", () => {
        const gender = card.dataset.gender;
        const championsOfGender = allChampions.filter(
          (c) => c.gender === gender
        );
        this.showChampionsList(
          `Tướng ${gender}`,
          championsOfGender,
          `Giới tính: ${gender}`
        );
      });
    });
  }

  renderSpeciesStats() {
    const speciesStats = this.stats.getSpeciesDistribution();
    const container = document.getElementById("speciesStatsContainer");
    if (!container) return;

    const speciesData = Array.from(speciesStats.entries()).sort(
      (a, b) => b[1] - a[1]
    );
    const total = speciesData.reduce((sum, [, count]) => sum + count, 0);

    container.innerHTML = speciesData
      .map(
        ([species, count]) => `
          <div class="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600 transition-colors">
            <div class="text-3xl mb-2">${this.getSpeciesIcon(species)}</div>
            <div class="text-2xl font-bold text-cyan-400">${count}</div>
            <div class="text-sm text-slate-400">${species}</div>
            <div class="mt-2">
              <div class="w-full bg-slate-600 rounded-full h-2">
                <div class="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full" 
                     style="width: ${((count / total) * 100).toFixed(
                       1
                     )}%"></div>
              </div>
              <div class="text-xs text-slate-500 mt-1">${(
                (count / total) *
                100
              ).toFixed(1)}%</div>
            </div>
          </div>
        `
      )
      .join("");
  }

  renderReleaseYearStats() {
    const yearStats = this.stats.getReleaseYearDistribution();
    const container = document.getElementById("releaseYearStatsContainer");
    if (!container) return;

    const yearData = Array.from(yearStats.entries()).sort(
      (a, b) => b[1] - a[1]
    );
    const total = yearData.reduce((sum, [, count]) => sum + count, 0);

    container.innerHTML = yearData
      .map(
        ([year, count]) => `
          <div class="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600 transition-colors">
            <div class="text-3xl mb-2">📅</div>
            <div class="text-2xl font-bold text-cyan-400">${count}</div>
            <div class="text-sm text-slate-400">${year || "Không rõ"}</div>
            <div class="mt-2">
              <div class="w-full bg-slate-600 rounded-full h-2">
                <div class="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" 
                     style="width: ${((count / total) * 100).toFixed(
                       1
                     )}%"></div>
              </div>
              <div class="text-xs text-slate-500 mt-1">${(
                (count / total) *
                100
              ).toFixed(1)}%</div>
            </div>
          </div>
        `
      )
      .join("");
  }

  renderRoleStats() {
    const roleStats = this.stats.getRoleDistribution();
    const container = document.getElementById("roleStatsContainer");
    if (!container) return;

    const roleData = Array.from(roleStats.entries()).sort(
      (a, b) => b[1] - a[1]
    );
    const total = roleData.reduce((sum, [, count]) => sum + count, 0);
    const allChampions = this.stats.getAllChampions();

    container.innerHTML = roleData
      .map(
        ([role, count]) => `
          <div class="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600 transition-colors cursor-pointer" 
               data-role="${role}">
            <div class="text-3xl mb-2">${this.getRoleIcon(role)}</div>
            <div class="text-2xl font-bold text-cyan-400">${count}</div>
            <div class="text-sm text-slate-400">${role}</div>
            <div class="mt-2">
              <div class="w-full bg-slate-600 rounded-full h-2">
                <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                     style="width: ${((count / total) * 100).toFixed(
                       1
                     )}%"></div>
              </div>
              <div class="text-xs text-slate-500 mt-1">${(
                (count / total) *
                100
              ).toFixed(1)}%</div>
            </div>
            <div class="text-xs text-cyan-300 mt-2">👆 Click để xem chi tiết</div>
          </div>
        `
      )
      .join("");

    // Add click handlers
    container.querySelectorAll("[data-role]").forEach((card) => {
      card.addEventListener("click", () => {
        const role = card.dataset.role;
        const championsOfRole = allChampions.filter(
          (c) => c.role && c.role.includes(role)
        );
        this.showChampionsList(
          `Tướng ${role}`,
          championsOfRole,
          `Vai trò: ${role}`
        );
      });
    });
  }

  renderWeaponStats() {
    const weaponStats = this.stats.getWeaponDistribution();
    const container = document.getElementById("weaponStatsContainer");
    if (!container) return;

    const weaponData = Array.from(weaponStats.entries()).sort(
      (a, b) => b[1] - a[1]
    );
    const total = weaponData.reduce((sum, [, count]) => sum + count, 0);

    container.innerHTML = weaponData
      .map(
        ([weapon, count]) => `
          <div class="bg-slate-700 p-4 rounded-lg text-center hover:bg-slate-600 transition-colors">
            <div class="text-3xl mb-2">${this.getWeaponIcon(weapon)}</div>
            <div class="text-2xl font-bold text-cyan-400">${count}</div>
            <div class="text-sm text-slate-400">${weapon}</div>
            <div class="mt-2">
              <div class="w-full bg-slate-600 rounded-full h-2">
                <div class="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" 
                     style="width: ${((count / total) * 100).toFixed(
                       1
                     )}%"></div>
              </div>
              <div class="text-xs text-slate-500 mt-1">${(
                (count / total) *
                100
              ).toFixed(1)}%</div>
            </div>
          </div>
        `
      )
      .join("");
  }

  /**
   * Helper methods for icons
   */
  getGenderIcon(gender) {
    const icons = {
      Nam: "👨",
      Nữ: "👩",
      "Không xác định": "⚧️",
      Khác: "🔄",
    };
    return icons[gender] || "❓";
  }

  getSpeciesIcon(species) {
    const icons = {
      "Con người": "👤",
      Yordle: "🧚",
      "Hồn ma": "👻",
      "Linh thú": "🐺",
      "Sinh vật huyền bí": "🔮",
      "Thần thoại": "⚡",
      Rồng: "🐉",
      "Ma quỷ": "😈",
    };
    return icons[species] || "🧬";
  }

  getRoleIcon(role) {
    const icons = {
      "Đấu Sĩ": "⚔️",
      "Xạ Thủ": "🏹",
      "Pháp Sư": "🔮",
      "Sát Thủ": "🗡️",
      "Hỗ Trợ": "🛡️",
      "Đỡ Đòn": "🛡️",
    };
    return icons[role] || "🎭";
  }

  getWeaponIcon(weapon) {
    const icons = {
      Kiếm: "⚔️",
      "Ma thuật": "🔮",
      Súng: "🔫",
      Cung: "🏹",
      Dao: "🗡️",
      Búa: "🔨",
      "Tay không": "👊",
    };
    return icons[weapon] || "⚔️";
  }

  /**
   * Render thống kê tổng quan
   */
  renderOverviewStats() {
    this.displayOverviewStats();
  }

  /**
   * Render completion rates với thanh tiến trình
   */
  renderCompletionRates(overview) {
    const completionData = [
      {
        label: "Kỹ Năng",
        rate: overview.skillsCompletionRate,
        color: "bg-green-500",
      },
      {
        label: "Hình Ảnh",
        rate: overview.imagesCompletionRate,
        color: "bg-blue-500",
      },
      {
        label: "Cốt Truyện",
        rate: overview.fullLoreCompletionRate,
        color: "bg-purple-500",
      },
      {
        label: "Ngày Phát Hành",
        rate: overview.releaseDateCompletionRate,
        color: "bg-orange-500",
      },
    ];

    // Tạo completion rates section nếu chưa có
    let completionSection = document.getElementById("completionRatesSection");
    if (!completionSection) {
      completionSection = document.createElement("div");
      completionSection.id = "completionRatesSection";
      completionSection.className = "mb-8";

      const statsOverview = document.querySelector(
        ".grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4.gap-4.mb-8"
      );
      if (statsOverview) {
        statsOverview.insertAdjacentElement("afterend", completionSection);
      }
    }

    completionSection.innerHTML = `
      <h3 class="text-xl font-semibold text-cyan-300 mb-4">📊 Tỷ Lệ Hoàn Thiện</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        ${completionData
          .map(
            (item) => `
          <div class="bg-slate-700 p-4 rounded-lg">
            <div class="flex justify-between items-center mb-2">
              <span class="text-slate-300 text-sm">${item.label}</span>
              <span class="text-cyan-400 font-bold">${item.rate}%</span>
            </div>
            <div class="w-full bg-slate-600 rounded-full h-2">
              <div class="${item.color} h-2 rounded-full transition-all duration-500" 
                   style="width: ${item.rate}%"></div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  /**
   * Render thống kê vùng đất
   */
  renderRegionStats() {
    const regions = this.stats.getRegionStats();
    const container = document.getElementById("regionStatsContainer");

    if (!container) return;

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${regions.map((region) => this.createRegionCard(region)).join("")}
      </div>
    `;

    // Add click handlers for region details
    this.setupRegionDetailHandlers();
  }

  /**
   * Tạo card cho từng vùng đất
   */
  createRegionCard(region) {
    const totalChampions = region.totalCount;
    const officialChampions = region.officialCount;
    const creativeChampions = region.creativeCount;

    return `
      <div class="region-card bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-slate-600 transition-all duration-300 stats-card" 
           data-region="${region.id}">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center space-x-3">
            <span class="text-2xl region-icon">${region.icon}</span>
            <h4 class="font-semibold text-cyan-300">${region.name}</h4>
          </div>
          <span class="bg-cyan-600 text-white text-xs px-2 py-1 rounded-full">${totalChampions}</span>
        </div>
        
        <div class="space-y-2 mb-3">
          <div class="flex justify-between text-sm">
            <span class="text-slate-400">🏆 Chính thức:</span>
            <span class="text-green-400 font-semibold">${officialChampions}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-slate-400">✨ Sáng tạo:</span>
            <span class="text-purple-400 font-semibold">${creativeChampions}</span>
          </div>
        </div>

        ${this.createCompletionBadges(region.completionStats, totalChampions)}

        <div class="mt-3 pt-3 border-t border-slate-600">
          <div class="flex justify-between items-center">
            <span class="text-slate-400 text-xs">Tỷ lệ:</span>
            <span class="text-cyan-400 text-sm font-bold">${
              region.percentage
            }%</span>
          </div>
          <div class="w-full bg-slate-600 rounded-full h-1 mt-1">
            <div class="bg-gradient-to-r from-cyan-500 to-blue-500 h-1 rounded-full transition-all duration-500" 
                 style="width: ${region.percentage}%"></div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Tạo completion badges cho region card
   */
  createCompletionBadges(completionStats, total) {
    if (total === 0) return "";

    const badges = [
      { label: "🎯", count: completionStats.withSkills, color: "bg-green-600" },
      { label: "🖼️", count: completionStats.withImages, color: "bg-blue-600" },
      {
        label: "📖",
        count: completionStats.withFullLore,
        color: "bg-purple-600",
      },
      {
        label: "📅",
        count: completionStats.withReleaseDate,
        color: "bg-orange-600",
      },
    ];

    return `
      <div class="flex flex-wrap gap-1">
        ${badges
          .map((badge) => {
            const percentage = Math.round((badge.count / total) * 100);
            return `
            <span class="${badge.color} text-white text-xs px-2 py-1 rounded-full" 
                  title="${badge.count}/${total} (${percentage}%)">
              ${badge.label} ${badge.count}
            </span>
          `;
          })
          .join("")}
      </div>
    `;
  }

  /**
   * Setup event handlers cho region details
   */
  setupRegionDetailHandlers() {
    document.querySelectorAll(".region-card").forEach((card) => {
      card.addEventListener("click", () => {
        const regionId = card.dataset.region;
        this.showRegionDetails(regionId);
      });
    });
  }

  /**
   * Hiển thị modal chi tiết vùng đất
   */
  showRegionDetails(regionId) {
    const regions = this.stats.getRegionStats();
    const region = regions.find((r) => r.id === regionId);

    if (!region) return;

    // Create modal
    const modal = document.createElement("div");
    modal.className =
      "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50";
    modal.innerHTML = `
      <div class="bg-slate-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-cyan-300">
            ${region.icon} ${region.name} - Chi Tiết
          </h2>
          <button class="text-slate-400 hover:text-white text-2xl close-modal">&times;</button>
        </div>
        
        ${this.createRegionOverview(region)}
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          ${this.createRoleDistribution(region.rolesDistribution)}
          ${this.createWeaponDistribution(region.weaponsDistribution)}
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          ${this.createSpeciesDistribution(region.speciesDistribution)}
          <div class="bg-slate-700 p-4 rounded-lg">
            <h4 class="font-semibold text-cyan-300 mb-3">📊 Thống Kê Khác</h4>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-slate-400">Trung bình kỹ năng:</span>
                <span class="text-cyan-400">${region.averageSkillsCount.toFixed(
                  1
                )}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">Tỷ lệ có hình ảnh:</span>
                <span class="text-green-400">${Math.round(
                  (region.completionStats.withImages / region.totalCount) * 100
                )}%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">Tỷ lệ có cốt truyện:</span>
                <span class="text-purple-400">${Math.round(
                  (region.completionStats.withFullLore / region.totalCount) *
                    100
                )}%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6">
          <h4 class="font-semibold text-cyan-300 mb-3">👥 Danh Sách Champions (${
            region.totalCount
          })</h4>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-60 overflow-y-auto">
            ${region.champions
              .map(
                (champion) => `
              <div class="bg-slate-600 p-2 rounded text-sm">
                <div class="font-semibold text-slate-100">${champion.name}</div>
                <div class="text-slate-400 text-xs">${
                  champion.role || "Unknown"
                }</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Add close handler
    modal.querySelector(".close-modal").addEventListener("click", () => {
      document.body.removeChild(modal);
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });
  }

  /**
   * Tạo region overview cho modal
   */
  createRegionOverview(region) {
    return `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-slate-700 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-cyan-400">${region.totalCount}</div>
          <div class="text-sm text-slate-400">Tổng Champions</div>
        </div>
        <div class="bg-slate-700 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-green-400">${region.officialCount}</div>
          <div class="text-sm text-slate-400">Chính Thức</div>
        </div>
        <div class="bg-slate-700 p-4 rounded-lg text-center">
          <div class="text-2xl font-bold text-purple-400">${region.creativeCount}</div>
          <div class="text-sm text-slate-400">Sáng Tạo</div>
        </div>
      </div>
    `;
  }

  /**
   * Tạo role distribution chart
   */
  createRoleDistribution(rolesDistribution) {
    const roles = Array.from(rolesDistribution.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);

    return `
      <div class="bg-slate-700 p-4 rounded-lg">
        <h4 class="font-semibold text-cyan-300 mb-3">🎭 Phân Bố Vai Trò</h4>
        <div class="space-y-2">
          ${roles
            .map(
              ([role, count]) => `
            <div class="flex items-center justify-between">
              <span class="text-slate-300 text-sm">${role}</span>
              <div class="flex items-center space-x-2">
                <div class="w-20 bg-slate-600 rounded-full h-2">
                  <div class="bg-gradient-to-r from-green-500 to-cyan-500 h-2 rounded-full" 
                       style="width: ${
                         (count / Math.max(...roles.map((r) => r[1]))) * 100
                       }%"></div>
                </div>
                <span class="text-cyan-400 text-sm font-semibold w-6">${count}</span>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  /**
   * Tạo weapon distribution chart
   */
  createWeaponDistribution(weaponsDistribution) {
    const weapons = Array.from(weaponsDistribution.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);

    return `
      <div class="bg-slate-700 p-4 rounded-lg">
        <h4 class="font-semibold text-cyan-300 mb-3">⚔️ Phân Bố Vũ Khí</h4>
        <div class="space-y-2">
          ${weapons
            .map(
              ([weapon, count]) => `
            <div class="flex items-center justify-between">
              <span class="text-slate-300 text-sm">${weapon}</span>
              <div class="flex items-center space-x-2">
                <div class="w-20 bg-slate-600 rounded-full h-2">
                  <div class="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" 
                       style="width: ${
                         (count / Math.max(...weapons.map((w) => w[1]))) * 100
                       }%"></div>
                </div>
                <span class="text-orange-400 text-sm font-semibold w-6">${count}</span>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  /**
   * Tạo species distribution chart
   */
  createSpeciesDistribution(speciesDistribution) {
    const species = Array.from(speciesDistribution.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);

    return `
      <div class="bg-slate-700 p-4 rounded-lg">
        <h4 class="font-semibold text-cyan-300 mb-3">🧬 Phân Bố Loài</h4>
        <div class="space-y-2">
          ${species
            .map(
              ([specie, count]) => `
            <div class="flex items-center justify-between">
              <span class="text-slate-300 text-sm">${specie}</span>
              <div class="flex items-center space-x-2">
                <div class="w-20 bg-slate-600 rounded-full h-2">
                  <div class="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full" 
                       style="width: ${
                         (count / Math.max(...species.map((s) => s[1]))) * 100
                       }%"></div>
                </div>
                <span class="text-green-400 text-sm font-semibold w-6">${count}</span>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Export stats button
    const exportBtn = document.getElementById("exportStatsBtn");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => this.exportStats());
    }
  }

  /**
   * Refresh tất cả statistics
   */
  refreshAllStats() {
    this.stats.clearCache();
    this.renderOverviewStats();
    this.renderTabContent(this.currentTab);
  }

  /**
   * Update element với value mới
   */
  updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  }

  /**
   * Show champions list modal
   */
  showChampionsList(title, champions, category = "") {
    const modal = document.createElement("div");
    modal.className =
      "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50";
    modal.innerHTML = `
      <div class="bg-slate-800 p-6 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold text-cyan-400">${title}</h3>
          <button class="close-modal text-slate-400 hover:text-white text-2xl">&times;</button>
        </div>
        
        <div class="mb-4 text-slate-300">
          <span class="text-lg font-semibold">Tổng số: ${
            champions.length
          } tướng</span>
          ${
            category
              ? `<span class="ml-4 text-cyan-400">${category}</span>`
              : ""
          }
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${champions
            .map(
              (champion) => `
            <div class="bg-slate-700 p-4 rounded-lg hover:bg-slate-600 transition-colors">
              <div class="flex items-center space-x-3 mb-2">
                <span class="text-2xl">${champion.icon || "🎭"}</span>
                <div>
                  <div class="font-semibold text-white">${champion.name}</div>
                  <div class="text-sm text-slate-400">${
                    champion.regionName || champion.region || "Không rõ"
                  }</div>
                </div>
              </div>
              
              <div class="space-y-1 text-sm">
                ${
                  champion.role
                    ? `<div><span class="text-cyan-400">Vai trò:</span> ${champion.role}</div>`
                    : ""
                }
                ${
                  champion.weapon
                    ? `<div><span class="text-orange-400">Vũ khí:</span> ${champion.weapon}</div>`
                    : ""
                }
                ${
                  champion.gender
                    ? `<div><span class="text-purple-400">Giới tính:</span> ${champion.gender}</div>`
                    : ""
                }
                ${
                  champion.species
                    ? `<div><span class="text-green-400">Loài:</span> ${champion.species}</div>`
                    : ""
                }
                ${
                  champion.releaseDate
                    ? `<div><span class="text-yellow-400">Phát hành:</span> ${champion.releaseDate}</div>`
                    : ""
                }
              </div>

              ${
                champion.lore
                  ? `
                <div class="mt-3 text-xs text-slate-300 line-clamp-3">
                  ${champion.lore.substring(0, 100)}${
                      champion.lore.length > 100 ? "..." : ""
                    }
                </div>
              `
                  : ""
              }

              <div class="mt-3 flex flex-wrap gap-1">
                ${
                  champion.skills && champion.skills.length > 0
                    ? '<span class="px-2 py-1 bg-blue-600 text-xs rounded">Có Skills</span>'
                    : ""
                }
                ${
                  champion.image
                    ? '<span class="px-2 py-1 bg-green-600 text-xs rounded">Có Hình</span>'
                    : ""
                }
                ${
                  champion.fullLore
                    ? '<span class="px-2 py-1 bg-purple-600 text-xs rounded">Có Lore</span>'
                    : ""
                }
                ${
                  champion.isOfficial
                    ? '<span class="px-2 py-1 bg-yellow-600 text-xs rounded">Chính Thức</span>'
                    : '<span class="px-2 py-1 bg-gray-600 text-xs rounded">Sáng Tạo</span>'
                }
              </div>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="mt-6 text-center">
          <button class="close-modal px-6 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors">
            Đóng
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Add close handlers
    modal.querySelectorAll(".close-modal").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.body.removeChild(modal);
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });
  }

  /**
   * Export statistics data
   */
  exportStats() {
    const allStats = this.stats.getAllStats();
    const blob = new Blob([JSON.stringify(allStats, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `runeterra_statistics_${new Date()
      .toISOString()
      .slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
}

// Export for use in other files
if (typeof window !== "undefined") {
  window.StatisticsUI = StatisticsUI;
}
