// Application Logic
class RuneterraApp {
  constructor() {
    // Khởi tạo database trước để có thể load từ localStorage
    this.db = new ChampionsDB();

    // Ưu tiên localStorage nhưng merge với data gốc để không mất tướng đã cào
    const savedData = localStorage.getItem("runeterra_champions_db");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);

        // Merge localStorage data với original data để không mất tướng đã cào
        const mergedData = this.mergeChampionData(
          championsDatabase,
          parsedData
        );

        // Sử dụng merged data
        window.championsDatabase = mergedData;
        this.db.data = mergedData;
        console.log(
          "✅ Merged localStorage with original data (preserving all champions)"
        );
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        // Fallback to original data
        window.championsDatabase = JSON.parse(
          JSON.stringify(championsDatabase)
        );
        this.db.data = championsDatabase;
        console.log("⚠️ Fallback to original championsDatabase");
      }
    } else {
      // Lần đầu load, sử dụng data gốc
      window.championsDatabase = JSON.parse(JSON.stringify(championsDatabase));
      this.db.data = championsDatabase;
      // Lưu vào localStorage để lần sau sử dụng
      this.db.saveToStorage();
      console.log("📁 First time load - saved original data to localStorage");
    }

    this.currentGame = "lol";
    this.currentRegion = "all";
    this.currentChampionType = "official";
    this.currentStatisticsTab = "region";

    // Initialize language manager
    this.languageManager = new LanguageManager();

    this.initializeEventListeners();
    this.loadChampions();
  }

  // Merge localStorage data với original data để không mất champions
  mergeChampionData(originalData, savedData) {
    const merged = JSON.parse(JSON.stringify(originalData)); // Deep copy original

    // Merge từng region
    savedData.regions.forEach((savedRegion) => {
      const originalRegion = merged.regions.find(
        (r) => r.id === savedRegion.id
      );
      if (originalRegion) {
        // Merge existingChampions - ưu tiên saved data cho champions đã edit
        if (savedRegion.existingChampions) {
          savedRegion.existingChampions.forEach((savedChampion) => {
            const existingIndex = originalRegion.existingChampions.findIndex(
              (c) => c.name === savedChampion.name
            );
            if (existingIndex !== -1) {
              // Update existing champion với saved data
              originalRegion.existingChampions[existingIndex] = savedChampion;
            } else {
              // Thêm champion mới từ saved data (có thể là champion đã cào)
              originalRegion.existingChampions.push(savedChampion);
            }
          });
        }

        // Merge newChampions
        if (savedRegion.newChampions) {
          originalRegion.newChampions = savedRegion.newChampions;
        }
      }
    });

    console.log(
      "🔄 Merged data - Original champions:",
      originalData.regions.reduce(
        (total, r) => total + r.existingChampions.length,
        0
      )
    );
    console.log(
      "🔄 Merged data - Final champions:",
      merged.regions.reduce((total, r) => total + r.existingChampions.length, 0)
    );

    return merged;
  }

  initializeEventListeners() {
    // Game tabs
    document
      .getElementById("lolGameTab")
      ?.addEventListener("click", () => this.switchGame("lol"));
    document
      .getElementById("cardGameTab")
      ?.addEventListener("click", () => this.switchGame("card")); // Region filter
    document.getElementById("regionFilter")?.addEventListener("change", (e) => {
      this.currentRegion = e.target.value;
      // Nếu chọn Demacia thì hiển thị lore info box
      if (this.currentRegion === "demacia") {
        const demaciaRegion = (
          window.championsDatabase || championsDatabase
        ).regions.find((r) => r.id === "demacia");
        if (demaciaRegion && demaciaRegion.lore) {
          document.getElementById("regionLoreBoxTitle").textContent =
            "📜 " + demaciaRegion.name + " - Lore";
          document.getElementById("regionLoreBoxContent").textContent =
            demaciaRegion.lore;
          document.getElementById("regionLoreBox").classList.remove("hidden");
        }
      } else {
        // Ẩn lore box khi chọn vùng khác
        document.getElementById("regionLoreBox").classList.add("hidden");
      }
      // Luôn luôn load champions
      this.loadChampions();
    }); // Đóng region lore info box
    document
      .getElementById("regionLoreBoxClose")
      ?.addEventListener("click", () => {
        document.getElementById("regionLoreBox").classList.add("hidden");
      }); // Champion type tabs
    document
      .getElementById("officialChampionsTab")
      ?.addEventListener("click", () => this.switchChampionType("official"));
    document
      .getElementById("creativeChampionsTab")
      ?.addEventListener("click", () => this.switchChampionType("creative"));
    document
      .getElementById("statisticsTab")
      ?.addEventListener("click", () => this.switchChampionType("statistics"));

    // Import data button
    document
      .getElementById("importDataBtn")
      ?.addEventListener("click", () => this.openImportDataModal());

    // Statistics navigation tabs
    document
      .getElementById("regionStatsTab")
      ?.addEventListener("click", () => this.switchStatisticsTab("region"));
    document
      .getElementById("roleStatsTab")
      ?.addEventListener("click", () => this.switchStatisticsTab("role"));
    document
      .getElementById("weaponStatsTab")
      ?.addEventListener("click", () => this.switchStatisticsTab("weapon"));
    document
      .getElementById("genderStatsTab")
      ?.addEventListener("click", () => this.switchStatisticsTab("gender"));
    document
      .getElementById("speciesStatsTab")
      ?.addEventListener("click", () => this.switchStatisticsTab("species"));
    document
      .getElementById("releaseYearStatsTab")
      ?.addEventListener("click", () =>
        this.switchStatisticsTab("releaseYear")
      );

    // Add champion button
    document
      .getElementById("addChampionBtn")
      ?.addEventListener("click", () => this.openAddChampionModal());

    // Modal close events
    document
      .getElementById("modalCloseButton")
      ?.addEventListener("click", () => this.closeModal());
    document.getElementById("championModal")?.addEventListener("click", (e) => {
      if (e.target.id === "championModal") this.closeModal();
    });

    // Add champion modal events
    document
      .getElementById("addModalCloseButton")
      ?.addEventListener("click", () => this.closeAddChampionModal());
    document
      .getElementById("addChampionModal")
      ?.addEventListener("click", (e) => {
        if (e.target.id === "addChampionModal") this.closeAddChampionModal();
      });
    document
      .getElementById("cancelAddBtn")
      ?.addEventListener("click", () => this.closeAddChampionModal());

    // Edit champion modal events
    document
      .getElementById("editModalCloseButton")
      ?.addEventListener("click", () => this.closeEditModal());
    document
      .getElementById("editChampionModal")
      ?.addEventListener("click", (e) => {
        if (e.target.id === "editChampionModal") this.closeEditModal();
      });
    document
      .getElementById("editChampionForm")
      ?.addEventListener("submit", (e) => this.handleEditChampion(e)); // Form events
    document
      .getElementById("addChampionForm")
      ?.addEventListener("submit", (e) => this.handleAddChampionExtended(e));
    document
      .getElementById("addSkillBtn")
      ?.addEventListener("click", () => this.addSkillField());
    document
      .getElementById("addFeatureBtn")
      ?.addEventListener("click", () => this.addFeatureField());

    // Database management events
    document
      .getElementById("downloadDbBtn")
      ?.addEventListener("click", () => this.downloadDatabase());
    document
      .getElementById("uploadDbBtn")
      ?.addEventListener("click", () => this.uploadDatabase());
    document
      .getElementById("uploadDbInput")
      ?.addEventListener("change", (e) => this.handleFileUpload(e));
    document
      .getElementById("resetDbBtn")
      ?.addEventListener("click", () => this.resetDatabase());
    document
      .getElementById("statsBtn")
      ?.addEventListener("click", () => this.showStats());
    document
      .getElementById("clearTranslationCacheBtn")
      ?.addEventListener("click", () => this.clearTranslationCache());

    // Import data modal events
    document
      .getElementById("importModalCloseButton")
      ?.addEventListener("click", () => this.closeImportDataModal());
    document
      .getElementById("importDataModal")
      ?.addEventListener("click", (e) => {
        if (e.target.id === "importDataModal") this.closeImportDataModal();
      });
    document
      .getElementById("cancelImportBtn")
      ?.addEventListener("click", () => this.closeImportDataModal());
    document
      .getElementById("startImportBtn")
      ?.addEventListener("click", () => this.startImportProcess()); // Code modal events
    document
      .getElementById("codeModalCloseButton")
      ?.addEventListener("click", () => this.closeCodeModal());
    document.getElementById("codeModal")?.addEventListener("click", (e) => {
      if (e.target.id === "codeModal") this.closeCodeModal();
    });
    document
      .getElementById("copyCodeBtn")
      ?.addEventListener("click", () => this.copyCode());

    // Language selector events
    document
      .getElementById("languageSelector")
      ?.addEventListener("click", () => this.toggleLanguageMenu()); // Language option events
    document.querySelectorAll(".language-option").forEach((option) => {
      option.addEventListener("click", async (e) => {
        const lang = e.currentTarget.getAttribute("data-lang");
        console.log("Changing language to:", lang);

        try {
          await this.languageManager.changeLanguage(lang);
          this.closeLanguageMenu();
          console.log("Language changed successfully");
        } catch (error) {
          console.error("Error changing language:", error);
          alert("Lỗi khi chuyển ngôn ngữ: " + error.message);
        }
      });
    });

    // Close language menu when clicking outside
    document.addEventListener("click", (e) => {
      const languageMenu = document.getElementById("languageMenu");
      const languageSelector = document.getElementById("languageSelector");

      if (
        languageMenu &&
        !languageSelector.contains(e.target) &&
        !languageMenu.contains(e.target)
      ) {
        this.closeLanguageMenu();
      }
    });
  }

  switchGame(game) {
    this.currentGame = game;

    // Update tab styles
    document
      .querySelectorAll(".game-tab")
      .forEach((tab) => tab.classList.remove("active"));
    document
      .getElementById(game === "lol" ? "lolGameTab" : "cardGameTab")
      ?.classList.add("active");

    // Show/hide content
    document.querySelectorAll(".game-content").forEach((content) => {
      content.classList.add("hidden");
    });
    document
      .getElementById(`${game === "lol" ? "lolGame" : "cardGame"}Content`)
      ?.classList.remove("hidden");

    if (game === "lol") {
      this.loadChampions();
    }
  }

  // Toggle language menu visibility
  toggleLanguageMenu() {
    const languageMenu = document.getElementById("languageMenu");
    if (languageMenu) {
      const isHidden = languageMenu.classList.contains("hidden");
      if (isHidden) {
        languageMenu.classList.remove("hidden");
      } else {
        languageMenu.classList.add("hidden");
      }
    }
  }

  // Close language menu
  closeLanguageMenu() {
    const languageMenu = document.getElementById("languageMenu");
    if (languageMenu) {
      languageMenu.classList.add("hidden");
    }
  }

  switchChampionType(type) {
    this.currentChampionType = type;

    // Update tab styles
    document
      .querySelectorAll(".champion-type-tab")
      .forEach((tab) => tab.classList.remove("active"));

    if (type === "statistics") {
      document.getElementById("statisticsTab")?.classList.add("active");
      // Hide champions grid and show statistics
      document.getElementById("championsGrid").classList.add("hidden");
      document.getElementById("statisticsSection").classList.remove("hidden");
      this.loadStatistics();
    } else {
      document
        .getElementById(
          type === "official" ? "officialChampionsTab" : "creativeChampionsTab"
        )
        ?.classList.add("active");
      // Show champions grid and hide statistics
      document.getElementById("championsGrid").classList.remove("hidden");
      document.getElementById("statisticsSection").classList.add("hidden");
      this.loadChampions();
    }
  }
  switchStatisticsTab(tabType) {
    this.currentStatisticsTab = tabType;

    // Update tab styles
    document.querySelectorAll(".stats-tab-btn").forEach((btn) => {
      btn.classList.remove("bg-cyan-600", "text-white");
      btn.classList.add("bg-slate-600", "text-slate-300");
    });

    // Activate current tab
    const activeTab = document.getElementById(`${tabType}StatsTab`);
    if (activeTab) {
      activeTab.classList.remove("bg-slate-600", "text-slate-300");
      activeTab.classList.add("bg-cyan-600", "text-white");
    }

    // Hide all statistics sections
    document.querySelectorAll(".stats-section").forEach((section) => {
      section.classList.add("hidden");
    });

    // Show current statistics section
    const currentSection = document.getElementById(`${tabType}StatsSection`);
    if (currentSection) {
      currentSection.classList.remove("hidden");
    }

    // Load appropriate statistics
    this.loadStatisticsForTab(tabType);
  }
  loadStatisticsForTab(tabType) {
    switch (tabType) {
      case "region":
        this.updateRegionStatistics();
        break;
      case "role":
        this.updateRoleStatistics();
        break;
      case "weapon":
        this.updateWeaponStatistics();
        break;
      case "gender":
        this.updateGenderStatistics();
        break;
      case "species":
        this.updateSpeciesStatistics();
        break;
      case "releaseYear":
        this.updateReleaseYearStatistics();
        break;
    }
  }

  // Load statistics for the current tab
  loadStatistics() {
    // Load the default statistics tab (region)
    this.loadStatisticsForTab(this.currentStatisticsTab || "region");
  }

  loadChampions() {
    const grid = document.getElementById("championsGrid");
    if (!grid) return;

    grid.innerHTML = "";

    try {
      const champions = this.db.getChampions(
        this.currentRegion,
        this.currentChampionType
      );

      // Debug: Check if we can find Thresh directly in raw data
      if (
        this.currentRegion === "all" ||
        this.currentRegion === "shadowisles"
      ) {
        console.log(
          "Raw data check - Shadow Isles region:",
          championsDatabase.regions.find((r) => r.id === "shadowisles")
        );
        const threshRaw = championsDatabase.regions
          .find((r) => r.id === "shadowisles")
          ?.existingChampions.find((c) => c.name === "Thresh");
        console.log("Raw Thresh data:", threshRaw);
      }

      console.log("Loaded champions:", champions);

      if (champions.length === 0) {
        grid.innerHTML =
          '<div class="col-span-full text-center text-slate-400 py-8">Không có tướng nào trong khu vực này</div>';
        return;
      }

      champions.forEach((champion, index) => {
        const card = this.createChampionCard(champion, index + 1);
        grid.appendChild(card);
      });
    } catch (error) {
      console.error("Lỗi khi tải champions:", error);
      grid.innerHTML =
        '<div class="col-span-full text-center text-red-400 py-8">Lỗi khi tải dữ liệu tướng</div>';
    }
  }
  createChampionCard(champion, serialNumber) {
    const card = document.createElement("div");
    card.className =
      "bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 cursor-pointer relative";
    card.innerHTML = `
      <div class="absolute top-2 left-2 bg-slate-700 text-slate-300 text-xs font-bold px-2 py-1 rounded-full">#${serialNumber}</div>
      <div class="mb-2 text-center">
        <img src="${
          champion.image ||
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg"
        }" 
             alt="${champion.name}" 
             class="w-20 h-20 object-cover rounded-lg mx-auto shadow-lg"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <div class="text-4xl hidden">🎭</div>
      </div>
      <h3 class="text-xl font-semibold text-cyan-300 mb-2 text-center">${
        champion.name || "Unknown"
      }</h3>
      <p class="text-sm text-slate-400 mb-2 text-center">${
        champion.role || "Unknown Role"
      }</p>
      <p class="text-xs text-slate-500 text-center">${
        champion.regionName || "Unknown Region"
      }</p>
      ${
        champion.releaseDate
          ? `<p class="text-xs text-blue-400 text-center mt-1">📅 ${champion.releaseDate}</p>`
          : ""
      }      ${
      champion.weaponSummary
        ? `<p class="text-xs text-orange-400 text-center mt-1">⚔️ ${champion.weaponSummary}</p>`
        : ""
    }      ${
      champion.gender
        ? `<p class="text-xs text-pink-400 text-center mt-1">👤 ${this.simplifyGender(
            champion.gender
          )}</p>`
        : ""
    }
      ${
        champion.species
          ? `<p class="text-xs text-green-400 text-center mt-1">🧬 ${champion.species}</p>`
          : ""
      }
      ${
        champion.special
          ? '<div class="mt-2 text-center"><span class="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full">Đặc Biệt</span></div>'
          : ""
      }
    `;

    card.addEventListener("click", () => this.openModal(champion));
    return card;
  }

  // Simplify gender display
  simplifyGender(gender) {
    if (!gender) return "";

    // Convert Vietnamese gender terms to simplified versions
    switch (gender.toLowerCase()) {
      case "nam":
        return "Nam";
      case "nữ":
        return "Nữ";
      case "male":
        return "Nam";
      case "female":
        return "Nữ";
      case "khác":
      case "other":
        return "Khác";
      default:
        return gender;
    }
  }

  // Update gender statistics
  updateGenderStatistics() {
    const allChampions = this.getAllChampions();
    const genderStats = {};

    allChampions.forEach((champion) => {
      if (champion.gender) {
        const gender = this.simplifyGender(champion.gender);
        genderStats[gender] = (genderStats[gender] || 0) + 1;
      }
    });

    const container = document.getElementById("genderStatsSection");
    if (!container) return;

    const total = Object.values(genderStats).reduce(
      (sum, count) => sum + count,
      0
    );

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        ${Object.entries(genderStats)
          .sort(([, a], [, b]) => b - a)
          .map(([gender, count]) => {
            const percentage =
              total > 0 ? ((count / total) * 100).toFixed(1) : 0;
            return `
              <div class="bg-slate-800 p-4 rounded-lg">
                <h3 class="text-lg font-semibold text-cyan-300 mb-2">${gender}</h3>
                <p class="text-2xl font-bold text-white">${count}</p>
                <p class="text-sm text-slate-400">${percentage}% tổng số</p>
              </div>
            `;
          })
          .join("")}
      </div>
      <div class="text-center text-slate-400">
        <p>Tổng cộng: ${total} tướng có thông tin giới tính</p>
      </div>
    `;
  }

  // Update region statistics
  updateRegionStatistics() {
    const allChampions = this.getAllChampions();
    const regionStats = {};

    allChampions.forEach((champion) => {
      if (champion.region || champion.regionName) {
        const region = champion.regionName || champion.region;
        regionStats[region] = (regionStats[region] || 0) + 1;
      }
    });

    const container = document.getElementById("regionStatsSection");
    if (!container) return;

    const total = Object.values(regionStats).reduce(
      (sum, count) => sum + count,
      0
    );

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        ${Object.entries(regionStats)
          .sort(([, a], [, b]) => b - a)
          .map(([region, count]) => {
            const percentage =
              total > 0 ? ((count / total) * 100).toFixed(1) : 0;
            return `
              <div class="bg-slate-800 p-4 rounded-lg">
                <h3 class="text-lg font-semibold text-cyan-300 mb-2">${region}</h3>
                <p class="text-2xl font-bold text-white">${count}</p>
                <p class="text-sm text-slate-400">${percentage}% tổng số</p>
              </div>
            `;
          })
          .join("")}
      </div>
      <div class="text-center text-slate-400">
        <p>Tổng cộng: ${total} tướng</p>
      </div>
    `;
  }

  // Update role statistics
  updateRoleStatistics() {
    const allChampions = this.getAllChampions();
    const roleStats = {};

    allChampions.forEach((champion) => {
      if (champion.role) {
        roleStats[champion.role] = (roleStats[champion.role] || 0) + 1;
      }
    });

    const container = document.getElementById("roleStatsSection");
    if (!container) return;

    const total = Object.values(roleStats).reduce(
      (sum, count) => sum + count,
      0
    );

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        ${Object.entries(roleStats)
          .sort(([, a], [, b]) => b - a)
          .map(([role, count]) => {
            const percentage =
              total > 0 ? ((count / total) * 100).toFixed(1) : 0;
            return `
              <div class="bg-slate-800 p-4 rounded-lg">
                <h3 class="text-lg font-semibold text-cyan-300 mb-2">${role}</h3>
                <p class="text-2xl font-bold text-white">${count}</p>
                <p class="text-sm text-slate-400">${percentage}% tổng số</p>
              </div>
            `;
          })
          .join("")}
      </div>
      <div class="text-center text-slate-400">
        <p>Tổng cộng: ${total} tướng có vai trò</p>
      </div>
    `;
  }

  // Update weapon statistics
  updateWeaponStatistics() {
    const allChampions = this.getAllChampions();
    const weaponStats = {};

    allChampions.forEach((champion) => {
      if (champion.weaponSummary || champion.weapon) {
        const weapon = champion.weaponSummary || champion.weapon;
        weaponStats[weapon] = (weaponStats[weapon] || 0) + 1;
      }
    });

    const container = document.getElementById("weaponStatsSection");
    if (!container) return;

    const total = Object.values(weaponStats).reduce(
      (sum, count) => sum + count,
      0
    );

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        ${Object.entries(weaponStats)
          .sort(([, a], [, b]) => b - a)
          .map(([weapon, count]) => {
            const percentage =
              total > 0 ? ((count / total) * 100).toFixed(1) : 0;
            return `
              <div class="bg-slate-800 p-4 rounded-lg">
                <h3 class="text-lg font-semibold text-cyan-300 mb-2">${weapon}</h3>
                <p class="text-2xl font-bold text-white">${count}</p>
                <p class="text-sm text-slate-400">${percentage}% tổng số</p>
              </div>
            `;
          })
          .join("")}
      </div>
      <div class="text-center text-slate-400">
        <p>Tổng cộng: ${total} tướng có thông tin vũ khí</p>
      </div>
    `;
  }

  // Update species statistics
  updateSpeciesStatistics() {
    const allChampions = this.getAllChampions();
    const speciesStats = {};

    allChampions.forEach((champion) => {
      if (champion.species) {
        speciesStats[champion.species] =
          (speciesStats[champion.species] || 0) + 1;
      }
    });

    const container = document.getElementById("speciesStatsSection");
    if (!container) return;

    const total = Object.values(speciesStats).reduce(
      (sum, count) => sum + count,
      0
    );

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        ${Object.entries(speciesStats)
          .sort(([, a], [, b]) => b - a)
          .map(([species, count]) => {
            const percentage =
              total > 0 ? ((count / total) * 100).toFixed(1) : 0;
            return `
              <div class="bg-slate-800 p-4 rounded-lg">
                <h3 class="text-lg font-semibold text-cyan-300 mb-2">${species}</h3>
                <p class="text-2xl font-bold text-white">${count}</p>
                <p class="text-sm text-slate-400">${percentage}% tổng số</p>
              </div>
            `;
          })
          .join("")}
      </div>
      <div class="text-center text-slate-400">
        <p>Tổng cộng: ${total} tướng có thông tin loài</p>
      </div>
    `;
  }

  // Update release year statistics
  updateReleaseYearStatistics() {
    const allChampions = this.getAllChampions();
    const yearStats = {};

    allChampions.forEach((champion) => {
      if (champion.releaseDate) {
        // Extract year from release date (format: dd/mm/yyyy)
        const year = champion.releaseDate.split("/")[2];
        if (year) {
          yearStats[year] = (yearStats[year] || 0) + 1;
        }
      }
    });

    const container = document.getElementById("releaseYearStatsSection");
    if (!container) return;

    const total = Object.values(yearStats).reduce(
      (sum, count) => sum + count,
      0
    );

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        ${Object.entries(yearStats)
          .sort(([a], [b]) => parseInt(b) - parseInt(a)) // Sort by year descending
          .map(([year, count]) => {
            const percentage =
              total > 0 ? ((count / total) * 100).toFixed(1) : 0;
            return `
              <div class="bg-slate-800 p-4 rounded-lg">
                <h3 class="text-lg font-semibold text-cyan-300 mb-2">${year}</h3>
                <p class="text-2xl font-bold text-white">${count}</p>
                <p class="text-sm text-slate-400">${percentage}% tổng số</p>
              </div>
            `;
          })
          .join("")}
      </div>
      <div class="text-center text-slate-400">
        <p>Tổng cộng: ${total} tướng có ngày phát hành</p>
      </div>
    `;
  }

  // Get all champions from all regions and types
  getAllChampions() {
    const allChampions = [];

    if (this.db && this.db.getChampions) {
      // Get champions from all regions
      const regions = [
        "all",
        "demacia",
        "noxus",
        "ionia",
        "piltover",
        "shadowisles",
        "void",
      ];
      const types = ["old", "new"];

      regions.forEach((region) => {
        types.forEach((type) => {
          try {
            const champions = this.db.getChampions(region, type);
            champions.forEach((champion) => {
              // Avoid duplicates by checking if champion already exists
              const exists = allChampions.find(
                (c) => c.name === champion.name && c.region === champion.region
              );
              if (!exists) {
                allChampions.push(champion);
              }
            });
          } catch (error) {
            console.warn(
              `Error getting champions for region ${region} and type ${type}:`,
              error
            );
          }
        });
      });
    }

    return allChampions;
  }

  // Force reload từ localStorage (ưu tiên localStorage hơn file .js)
  forceReloadFromStorage() {
    try {
      // Sử dụng cùng key với Database class
      const storedData = localStorage.getItem("runeterra_champions_db");
      if (storedData) {
        this.db.data = JSON.parse(storedData);
        // Cập nhật window.championsDatabase để đồng bộ
        window.championsDatabase = JSON.parse(JSON.stringify(this.db.data));
        console.log("✅ Forced reload from localStorage successful");
        return true;
      } else {
        console.warn("No data in localStorage to reload from");
        return false;
      }
    } catch (error) {
      console.error("Error forcing reload from storage:", error);
      return false;
    }
  }

  openModal(champion) {
    console.log("=== CHAMPION MODAL DEBUG ===");
    console.log("Opening modal for champion:", champion);
    console.log("Champion name:", champion.name);
    console.log("Champion lore:", champion.lore);
    console.log("Champion skills:", champion.skills);
    console.log("Champion specialFeatures:", champion.specialFeatures);
    console.log("Champion fullLore:", champion.fullLore);
    console.log("Champion fullName:", champion.fullName);
    console.log("Current language:", this.languageManager.getCurrentLanguage());

    // Additional debug: Check if this champion exists in window.championsDatabase
    if (window.championsDatabase) {
      const windowChampion = window.championsDatabase.regions
        .find((r) => r.id === "shadowisles")
        ?.existingChampions?.find((c) => c.name === champion.name);
      console.log("Same champion in window.championsDatabase:", windowChampion);
      if (windowChampion && champion.name === "Thresh") {
        console.log("Window Thresh lore:", windowChampion.lore);
        console.log("Modal Thresh lore:", champion.lore);
        console.log("Are they the same object?", windowChampion === champion);
      }
    }
    console.log("=== END DEBUG ===");

    const modal = document.getElementById("championModal");
    const modalBody = document.getElementById("modalBody");

    if (!modal || !modalBody) {
      console.error("Modal elements not found!");
      return;
    }

    // Enhanced skills display for detailed champion data
    let skillsHtml = "";
    if (champion.skills && champion.skills.length > 0) {
      // Check if skills are objects with detailed info (new format with 'key' or old format with 'type')
      if (
        typeof champion.skills[0] === "object" &&
        (champion.skills[0].key || champion.skills[0].type)
      ) {
        skillsHtml = `
          <div class="mt-6">
            <h4 class="text-lg font-semibold text-cyan-300 mb-3">🎯 Kỹ Năng Chi Tiết:</h4>
            <div class="space-y-3">
              ${champion.skills
                .map(
                  (skill) => `
                <div class="bg-slate-700 p-4 rounded-lg border-l-4 border-cyan-500">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="bg-cyan-600 text-white px-2 py-1 rounded text-xs font-bold">${
                      skill.key || skill.type
                    }</span>
                    <h5 class="text-cyan-300 font-semibold">${skill.name}</h5>
                    ${
                      skill.image
                        ? `<img src="${skill.image}" alt="${skill.name}" class="w-8 h-8 rounded border border-cyan-500">`
                        : ""
                    }
                  </div>
                  <p class="text-sm text-slate-300 leading-relaxed mb-2">${
                    skill.description
                  }</p>
                  ${
                    skill.cooldown || skill.cost || skill.range
                      ? `
                    <div class="flex gap-4 text-xs text-slate-400">
                      ${
                        skill.cooldown
                          ? `<span>⏱️ CD: ${skill.cooldown}</span>`
                          : ""
                      }
                      ${skill.cost ? `<span>💧 Cost: ${skill.cost}</span>` : ""}
                      ${
                        skill.range
                          ? `<span>📏 Range: ${skill.range}</span>`
                          : ""
                      }
                    </div>
                  `
                      : ""
                  }
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `;
      } else {
        // Simple skills display for basic champion data
        skillsHtml = `
          <div class="mt-6">
            <h4 class="text-lg font-semibold text-cyan-300 mb-3">🎯 Kỹ Năng:</h4>
            <div class="space-y-2">
              ${champion.skills
                .map(
                  (skill) => `
                <div class="bg-slate-700 p-3 rounded-md">
                  <p class="text-sm text-slate-300">${skill}</p>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `;
      }
    }

    // Special features display
    let specialFeaturesHtml = "";
    if (champion.specialFeatures && champion.specialFeatures.length > 0) {
      specialFeaturesHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-yellow-300 mb-3">${this.languageManager.getTranslation(
            "specialFeatures"
          )}:</h4>
          <div class="space-y-2">
            ${champion.specialFeatures
              .map(
                (feature) => `
              <div class="bg-yellow-900/30 p-3 rounded-md border border-yellow-600/50">
                <p class="text-sm text-yellow-100">• ${feature}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    } // Additional info section - Enhanced with more attributes
    let additionalInfoHtml = "";
    const additionalFields = [];
    if (champion.fullName)
      additionalFields.push({
        label: this.languageManager.getTranslation("fullName"),
        value: champion.fullName,
      });
    if (champion.releaseDate)
      additionalFields.push({
        label: "Ngày Phát Hành",
        value: champion.releaseDate,
      });
    // Weapon field will be handled separately
    if (champion.loreConnections && champion.loreConnections.length > 0)
      additionalFields.push({
        label: "Liên Kết Cốt Truyện",
        value: champion.loreConnections.join(", "),
      });
    if (champion.species)
      additionalFields.push({
        label: this.languageManager.getTranslation("species"),
        value: champion.species,
      });
    if (champion.gender)
      additionalFields.push({
        label: "Giới Tính",
        value: this.simplifyGender(champion.gender),
      });
    if (champion.age)
      additionalFields.push({
        label: this.languageManager.getTranslation("age"),
        value: champion.age,
      });
    if (champion.weapon)
      additionalFields.push({
        label: this.languageManager.getTranslation("weapon"),
        value: champion.weapon,
      });
    if (champion.affiliation)
      additionalFields.push({
        label: this.languageManager.getTranslation("affiliation"),
        value: champion.affiliation,
      });
    if (champion.status)
      additionalFields.push({
        label: this.languageManager.getTranslation("status"),
        value: champion.status,
      });
    if (champion.title)
      additionalFields.push({
        label: this.languageManager.getTranslation("title"),
        value: champion.title,
      });
    if (additionalFields.length > 0) {
      additionalInfoHtml = `
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          ${additionalFields
            .map(
              (field) => `
            <div class="bg-slate-700/50 p-3 rounded-lg">
              <h5 class="text-cyan-300 font-semibold text-sm mb-1">${field.label}:</h5>
              <p class="text-slate-300 text-sm">${field.value}</p>
            </div>
          `
            )
            .join("")}
          ${
            champion.weaponSummary
              ? `
            <div class="bg-slate-700/50 p-3 rounded-lg relative">
              <h5 class="text-cyan-300 font-semibold text-sm mb-1">Vũ Khí:</h5>
              <div class="flex items-center justify-between">
                <p class="text-slate-300 text-sm">${champion.weaponSummary}</p>
                ${
                  champion.weapon
                    ? `
                  <button 
                    onclick="showWeaponDetail('${champion.weapon.replace(
                      /'/g,
                      "\\'"
                    )}', this)" 
                    class="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors"
                  >
                    Chi tiết
                  </button>
                `
                    : ""
                }
              </div>
            </div>
          `
              : ""
          }
        </div>
      `;
    }

    // Gameplay section
    let gameplayHtml = "";
    if (champion.gameplay) {
      gameplayHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-green-300 mb-3">${this.languageManager.getTranslation(
            "gameplay"
          )}:</h4>
          <div class="bg-green-900/30 p-4 rounded-lg border border-green-600/50">
            <p class="text-sm text-green-100 leading-relaxed">${
              champion.gameplay
            }</p>
          </div>
        </div>
      `;
    }

    // Stats section if available
    let statsHtml = "";
    if (champion.stats) {
      statsHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-orange-300 mb-3">${this.languageManager.getTranslation(
            "statsTitle"
          )}:</h4>
          <div class="bg-orange-900/30 p-4 rounded-lg border border-orange-600/50">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              ${Object.entries(champion.stats)
                .map(
                  ([key, value]) => `
                <div class="text-orange-100">
                  <span class="text-orange-300 font-medium">${key}:</span> ${value}
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
    }

    // Relationships section if available
    let relationshipsHtml = "";
    if (champion.relationships && champion.relationships.length > 0) {
      relationshipsHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-pink-300 mb-3">${this.languageManager.getTranslation(
            "relationships"
          )}:</h4>
          <div class="space-y-2">
            ${champion.relationships
              .map(
                (rel) => `
              <div class="bg-pink-900/30 p-3 rounded-md border border-pink-600/50">
                <p class="text-sm text-pink-100"><strong>${rel.type}:</strong> ${rel.description}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    // Abilities/Powers section if different from skills
    let abilitiesHtml = "";
    if (champion.abilities && champion.abilities.length > 0) {
      abilitiesHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-indigo-300 mb-3">${this.languageManager.getTranslation(
            "abilities"
          )}:</h4>
          <div class="space-y-2">
            ${champion.abilities
              .map(
                (ability) => `
              <div class="bg-indigo-900/30 p-3 rounded-md border border-indigo-600/50">
                <p class="text-sm text-indigo-100">• ${ability}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    // Full lore section
    let fullLoreHtml = "";
    if (champion.fullLore && champion.fullLore !== champion.lore) {
      fullLoreHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-purple-300 mb-3">${this.languageManager.getTranslation(
            "fullStory"
          )}:</h4>
          <div class="bg-purple-900/30 p-4 rounded-lg border border-purple-600/50 max-h-64 overflow-y-auto">
            <p class="text-sm text-purple-100 leading-relaxed whitespace-pre-line">${
              champion.fullLore
            }</p>
          </div>
        </div>
      `;
    }

    // Additional notes or trivia
    let notesHtml = "";
    if (champion.notes || champion.trivia) {
      const content = champion.notes || champion.trivia;
      notesHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-gray-300 mb-3">${this.languageManager.getTranslation(
            "notes"
          )}:</h4>
          <div class="bg-gray-900/30 p-4 rounded-lg border border-gray-600/50">
            <p class="text-sm text-gray-100 leading-relaxed">${content}</p>
          </div>
        </div>
      `;
    } // Lore connections panel
    let loreConnectionsPanel = "";
    if (champion.loreConnections && champion.loreConnections.length > 0) {
      loreConnectionsPanel = `
        <div class="bg-slate-700/50 p-4 rounded-lg">
          <h3 class="text-lg font-semibold text-purple-300 mb-4">🔗 Liên Kết Cốt Truyện</h3>
          <div class="space-y-3">
            ${champion.loreConnections
              .map(
                (connectionName) => `
              <div class="bg-slate-600/50 p-3 rounded-md border border-purple-500/30">
                <h4 class="text-cyan-300 font-medium mb-2">${connectionName}</h4>
                <p class="text-sm text-slate-300">hello</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }
    modalBody.innerHTML = `
      <div class="champion-detail-container">        <!-- Header Section -->
        <div class="mb-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <!-- Champion Image -->
            <div class="text-center lg:text-left">
              <img src="${
                champion.image ||
                "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg"
              }" 
                   alt="${champion.name}" 
                   class="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-xl mx-auto lg:mx-0 shadow-2xl border-4 border-cyan-500/30"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
              <div class="text-8xl hidden">🎭</div>
            </div>
            
            <!-- Champion Details -->
            <div class="space-y-4">
              <div class="text-center lg:text-left">
                <h2 class="text-4xl lg:text-5xl font-bold text-cyan-300 mb-2">${
                  champion.name || "Unknown"
                }</h2>
                <p class="text-xl text-slate-400 mb-3">${
                  champion.role || "Unknown Role"
                } - ${champion.regionName || "Unknown Region"}</p>
                ${
                  champion.title
                    ? `<p class="text-lg text-cyan-400 italic mb-4">"${champion.title}"</p>`
                    : ""
                }
              </div>
              
              <!-- Detailed Info Grid -->
              <div class="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
                <h3 class="text-xl font-bold text-cyan-300 mb-4 flex items-center">
                  <i class="fas fa-info-circle mr-2"></i>
                  Thông Tin Chi Tiết
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  ${
                    champion.fullName
                      ? `
                    <div class="info-item">
                      <span class="info-label">📛 Tên Đầy Đủ:</span>
                      <span class="info-value">${champion.fullName}</span>
                    </div>
                  `
                      : ""
                  }
                  ${
                    champion.releaseDate
                      ? `
                    <div class="info-item">
                      <span class="info-label">📅 Ngày Phát Hành:</span>
                      <span class="info-value">${champion.releaseDate}</span>
                    </div>
                  `
                      : ""
                  }
                  ${
                    champion.loreConnections &&
                    champion.loreConnections.length > 0
                      ? `
                    <div class="info-item col-span-1 sm:col-span-2">
                      <span class="info-label">🔗 Liên Kết Cốt Truyện:</span>
                      <span class="info-value">${champion.loreConnections.join(
                        ", "
                      )}</span>
                    </div>
                  `
                      : ""
                  }
                  ${
                    champion.species
                      ? `
                    <div class="info-item">
                      <span class="info-label">🧬 Loài:</span>
                      <span class="info-value">${champion.species}</span>
                    </div>
                  `
                      : ""
                  }
                  ${
                    champion.gender
                      ? `
                    <div class="info-item">
                      <span class="info-label">⚧ Giới Tính:</span>
                      <span class="info-value">${this.simplifyGender(
                        champion.gender
                      )}</span>
                    </div>
                  `
                      : ""
                  }
                  ${
                    champion.age
                      ? `
                    <div class="info-item">
                      <span class="info-label">📅 Tuổi:</span>
                      <span class="info-value">${champion.age}</span>
                    </div>
                  `
                      : ""
                  }
                  ${
                    champion.weapon || champion.weaponSummary
                      ? `
                    <div class="info-item col-span-1 sm:col-span-2">
                      <span class="info-label">⚔️ Vũ Khí:</span>
                      <span class="info-value">${
                        champion.weaponSummary || champion.weapon
                      }</span>
                    </div>
                  `
                      : ""
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab Navigation -->
        <div class="tab-navigation mb-6">
          <div class="flex bg-slate-800 rounded-lg p-1">
            <button class="tab-button active" data-tab="story" onclick="switchChampionTab('story', this)">
              <i class="fas fa-book-open mr-2"></i>
              Cốt Truyện
            </button>
            <button class="tab-button" data-tab="skills" onclick="switchChampionTab('skills', this)">
              <i class="fas fa-magic mr-2"></i>
              Kỹ Năng
            </button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="tab-content">
          <!-- Story Tab -->
          <div id="story-tab" class="tab-panel active">
            <!-- Quote Section -->
            ${
              champion.lore
                ? `
            <div class="story-quote mb-6">
              <div class="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-lg border-l-4 border-cyan-400">
                <i class="fas fa-quote-left text-2xl text-cyan-400 mb-3"></i>
                <p class="text-lg text-slate-200 italic leading-relaxed">${champion.lore}</p>
              </div>
            </div>
            `
                : ""
            }

            <!-- Main Story Content -->
            <div class="story-content grid grid-cols-1 lg:grid-cols-3 gap-6">
              <!-- Main Story -->
              <div class="lg:col-span-2 space-y-6">
                ${
                  champion.fullLore
                    ? `
                <div class="story-section">
                  <h3 class="story-section-title">
                    <i class="fas fa-scroll mr-2"></i>
                    Câu Chuyện Đầy Đủ
                  </h3>
                  <div class="story-text">
                    <p class="leading-relaxed">${champion.fullLore}</p>
                  </div>
                </div>
                `
                    : ""
                }

                ${
                  champion.relationships && champion.relationships.length > 0
                    ? `
                <div class="story-section">
                  <h3 class="story-section-title">
                    <i class="fas fa-users mr-2"></i>
                    Mối Quan Hệ
                  </h3>
                  <div class="relationships-grid">
                    ${champion.relationships
                      .map(
                        (rel) => `
                      <div class="relationship-card">
                        <h4 class="relationship-type">${rel.type}</h4>
                        <p class="relationship-description">${rel.description}</p>
                      </div>
                    `
                      )
                      .join("")}
                  </div>
                </div>
                `
                    : ""
                }

                ${
                  champion.notes || champion.trivia
                    ? `
                <div class="story-section">
                  <h3 class="story-section-title">
                    <i class="fas fa-lightbulb mr-2"></i>
                    Ghi Chú & Trivia
                  </h3>
                  <div class="story-text">
                    <p class="leading-relaxed">${
                      champion.notes || champion.trivia
                    }</p>
                  </div>
                </div>
                `
                    : ""
                }
              </div>

              <!-- Sidebar -->
              <div class="sidebar space-y-4">
                ${
                  champion.loreConnections &&
                  champion.loreConnections.length > 0
                    ? `
                <div class="story-sidebar-section">
                  <h3 class="text-lg font-bold text-purple-300 mb-3">
                    <i class="fas fa-link mr-2"></i>
                    Liên Kết Cốt Truyện
                  </h3>
                  <div class="space-y-2">
                    ${champion.loreConnections
                      .map(
                        (conn) => `
                      <div class="lore-connection-item">
                        <span class="text-cyan-300">${conn}</span>
                      </div>
                    `
                      )
                      .join("")}
                  </div>
                </div>
                `
                    : ""
                }
              </div>
            </div>
          </div>

          <!-- Skills Tab -->
          <div id="skills-tab" class="tab-panel">
            <div class="skills-content space-y-6">
              ${gameplayHtml}
              ${statsHtml}
              ${skillsHtml}
              ${abilitiesHtml}              ${specialFeaturesHtml}
            </div>
          </div>
        </div>
      </div>
    `; // Thêm nút Edit vào modal
    modalBody.innerHTML += `
      <div class="mt-8 flex justify-center">
        <button 
          id="editChampionBtn" 
          class="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center gap-2"
        >
          ✏️ Chỉnh Sửa Tướng
        </button>
      </div>
    `;

    // Thêm event listener cho nút edit
    setTimeout(() => {
      document
        .getElementById("editChampionBtn")
        ?.addEventListener("click", () => {
          this.openEditModal(champion);
        });
    }, 100);

    console.log("Modal HTML generated:", modalBody.innerHTML);

    modal.classList.remove("hidden");
  }

  closeModal() {
    document.getElementById("championModal")?.classList.add("hidden");
  }

  // Mở modal chỉnh sửa champion
  openEditModal(champion) {
    console.log("Opening edit modal for:", champion);

    const modal = document.getElementById("editChampionModal");
    if (!modal) {
      console.error("Edit modal not found!");
      return;
    }

    // Lưu champion hiện tại để xử lý
    this.currentEditingChampion = champion;

    // Điền dữ liệu vào form
    this.populateEditForm(champion);

    // Đóng modal chi tiết hiện tại
    this.closeModal();

    // Mở modal edit
    modal.classList.remove("hidden");
  }

  // Điền dữ liệu vào form edit
  populateEditForm(champion) {
    // Basic info
    document.getElementById("editChampionName").value = champion.name || "";
    document.getElementById("editChampionFullName").value =
      champion.fullName || "";
    document.getElementById("editChampionIcon").value = champion.icon || "";
    document.getElementById("editChampionRole").value = champion.role || "";
    document.getElementById("editChampionReleaseDate").value =
      champion.releaseDate || "";
    document.getElementById("editChampionAge").value = champion.age || "";
    document.getElementById("editChampionGender").value = champion.gender || "";
    document.getElementById("editChampionSpecies").value =
      champion.species || "";
    document.getElementById("editChampionRegion").value = champion.region || "";
    document.getElementById("editChampionImage").value = champion.image || "";

    // Weapon info
    document.getElementById("editChampionWeapon").value = champion.weapon || "";
    document.getElementById("editChampionWeaponSummary").value =
      champion.weaponSummary || "";

    // Lore
    document.getElementById("editChampionLore").value = champion.lore || "";
    document.getElementById("editChampionFullLore").value =
      champion.fullLore || ""; // Other fields
    document.getElementById("editChampionAffiliation").value =
      champion.affiliation || "";
    document.getElementById("editChampionStatus").value = champion.status || "";

    // Lore connections
    if (champion.loreConnections && Array.isArray(champion.loreConnections)) {
      document.getElementById("editChampionLoreConnections").value =
        champion.loreConnections.join(", ");
    } else {
      document.getElementById("editChampionLoreConnections").value = "";
    }

    // Gameplay
    document.getElementById("editChampionGameplay").value =
      champion.gameplay || "";

    // Notes/Trivia
    document.getElementById("editChampionNotes").value =
      champion.notes || champion.trivia || "";

    // Populate skills
    this.populateEditSkills(champion.skills || []);

    // Populate special features
    this.populateEditFeatures(champion.specialFeatures || []);
  }

  // Điền kỹ năng vào form edit
  populateEditSkills(skills) {
    const container = document.getElementById("editSkillsContainer");
    container.innerHTML = "";

    skills.forEach((skill) => {
      if (typeof skill === "object" && (skill.type || skill.key)) {
        // Detailed skill object - support both old format (type) and new format (key)
        const skillType = skill.key || skill.type || "Passive";
        const skillName = skill.name || "";
        const skillDescription = skill.description || "";
        this.addEditSkillField(skillType, skillName, skillDescription);
      } else if (typeof skill === "string") {
        // Simple skill string
        this.addEditSkillField("Passive", "", skill);
      } else {
        // Fallback for any other format
        console.warn("Unknown skill format:", skill);
        this.addEditSkillField("Passive", "", String(skill));
      }
    });
  }

  // Điền điểm đặc biệt vào form edit
  populateEditFeatures(features) {
    const container = document.getElementById("editFeaturesContainer");
    container.innerHTML = "";

    features.forEach((feature) => {
      this.addEditFeatureField(feature);
    });
  }

  // Thêm field kỹ năng trong edit form
  addEditSkillField(type = "Passive", name = "", description = "") {
    const container = document.getElementById("editSkillsContainer");
    if (!container) return;

    const skillDiv = document.createElement("div");
    skillDiv.className =
      "edit-skill-field grid grid-cols-1 md:grid-cols-4 gap-3 p-4 bg-slate-700/50 rounded-lg border border-slate-600";

    skillDiv.innerHTML = `
      <div>
        <label class="block text-xs font-medium text-slate-300 mb-1">Loại</label>
        <select class="edit-skill-type w-full bg-slate-600 border border-slate-500 text-slate-100 rounded p-2 text-sm">
          <option value="Passive" ${
            type === "Passive" ? "selected" : ""
          }>Passive</option>
          <option value="Q" ${type === "Q" ? "selected" : ""}>Q</option>
          <option value="W" ${type === "W" ? "selected" : ""}>W</option>
          <option value="E" ${type === "E" ? "selected" : ""}>E</option>
          <option value="R" ${type === "R" ? "selected" : ""}>R</option>
          <option value="Ultimate" ${
            type === "Ultimate" ? "selected" : ""
          }>Ultimate</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-300 mb-1">Tên Kỹ Năng</label>
        <input type="text" class="edit-skill-name w-full bg-slate-600 border border-slate-500 text-slate-100 rounded p-2 text-sm" 
               value="${name}" placeholder="Tên kỹ năng">
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-300 mb-1">Mô Tả</label>
        <textarea class="edit-skill-desc w-full bg-slate-600 border border-slate-500 text-slate-100 rounded p-2 text-sm" 
                  rows="2" placeholder="Mô tả kỹ năng">${description}</textarea>
      </div>
      <div class="flex items-end">
        <button type="button" class="remove-edit-skill px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm w-full">
          🗑️ Xóa
        </button>
      </div>
    `;

    container.appendChild(skillDiv);

    // Add remove event listener
    skillDiv
      .querySelector(".remove-edit-skill")
      ?.addEventListener("click", () => {
        skillDiv.remove();
      });
  }

  // Thêm field điểm đặc biệt trong edit form
  addEditFeatureField(value = "") {
    const container = document.getElementById("editFeaturesContainer");
    if (!container) return;

    const featureDiv = document.createElement("div");
    featureDiv.className = "edit-feature-field flex gap-2 mb-2";

    featureDiv.innerHTML = `
      <input type="text" class="edit-feature-text flex-1 bg-slate-700 border border-slate-600 text-slate-100 rounded p-2.5 text-sm" 
             value="${value}" placeholder="Nhập điểm đặc biệt...">
      <button type="button" class="remove-edit-feature px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm">
        🗑️
      </button>
    `;

    container.appendChild(featureDiv);

    // Add remove event listener
    featureDiv
      .querySelector(".remove-edit-feature")
      ?.addEventListener("click", () => {
        featureDiv.remove();
      });
  }

  // Đóng modal edit
  closeEditModal() {
    document.getElementById("editChampionModal")?.classList.add("hidden");
    this.currentEditingChampion = null;
  }

  // Xử lý lưu thay đổi
  handleEditChampion(e) {
    e.preventDefault();

    console.log("=== handleEditChampion START ===");
    console.log("currentEditingChampion:", this.currentEditingChampion);

    if (!this.currentEditingChampion) {
      alert("Không tìm thấy thông tin champion để chỉnh sửa!");
      return;
    }

    try {
      console.log("Collecting form data...");
      // Lấy dữ liệu từ form
      const updatedChampion = this.collectEditFormData();
      console.log("Form data collected:", updatedChampion);

      // Validate dữ liệu bắt buộc - chỉ cần tên
      if (!updatedChampion.name) {
        alert("Vui lòng điền tên champion!");
        return;
      }

      console.log("Calling updateChampionInDatabase...");
      console.log("Original champion:", this.currentEditingChampion);
      console.log("Updated champion:", updatedChampion);

      // Cập nhật champion trong database
      const success = this.updateChampionInDatabase(
        this.currentEditingChampion,
        updatedChampion
      );

      if (success) {
        // Lưu thông tin để hiển thị thông báo trước khi đóng modal
        const originalChampion = { ...this.currentEditingChampion };

        // Lưu vào localStorage
        this.db.saveToStorage();

        // Cập nhật window.championsDatabase
        window.championsDatabase = JSON.parse(JSON.stringify(this.db.data));

        // Force reload từ localStorage thay vì file .js
        this.forceReloadFromStorage();

        // Tạo code để copy vào data.js
        this.showDataJsCode(updatedChampion);

        // Reload champions để hiển thị thay đổi
        this.loadChampions();

        // Đóng modal
        this.closeEditModal();

        // Hiển thị thông báo thành công với thông tin chi tiết
        const regionChanged =
          originalChampion.region !== updatedChampion.region;
        const successMessage = regionChanged
          ? `✅ Cập nhật tướng thành công!\n🔄 ${updatedChampion.name} đã được chuyển từ ${originalChampion.region} sang ${updatedChampion.region}\n📋 Code để cập nhật data.js đã được tạo.`
          : `✅ Cập nhật tướng ${updatedChampion.name} thành công!\n📋 Code để cập nhật data.js đã được tạo.`;

        alert(successMessage);

        // Log thông tin
        console.log("Champion updated successfully:", updatedChampion);
      } else {
        alert("❌ Có lỗi xảy ra khi cập nhật thông tin tướng!");
      }
    } catch (error) {
      console.error("Error updating champion:", error);
      console.error("Error stack:", error.stack);
      alert("❌ Có lỗi xảy ra khi cập nhật: " + error.message);
    }

    console.log("=== handleEditChampion END ===");
  }

  // Cập nhật champion trong database
  updateChampionInDatabase(originalChampion, updatedChampion) {
    try {
      // Validate input parameters
      if (!originalChampion) {
        console.error("originalChampion is null or undefined");
        alert("❌ Lỗi: Không tìm thấy thông tin tướng gốc!");
        return false;
      }

      if (!updatedChampion) {
        console.error("updatedChampion is null or undefined");
        alert("❌ Lỗi: Không có dữ liệu cập nhật!");
        return false;
      }

      if (!originalChampion.region) {
        console.error(
          "originalChampion.region is null or undefined:",
          originalChampion
        );
        alert("❌ Lỗi: Tướng gốc không có thông tin region!");
        return false;
      }

      if (!updatedChampion.region) {
        console.error(
          "updatedChampion.region is null or undefined:",
          updatedChampion
        );
        alert("❌ Lỗi: Vui lòng chọn region cho tướng!");
        return false;
      }

      // Kiểm tra xem có thay đổi region không
      const regionChanged = originalChampion.region !== updatedChampion.region;

      if (regionChanged) {
        // Nếu đổi region, cần chuyển champion từ region cũ sang region mới
        return this.moveChampionToNewRegion(originalChampion, updatedChampion);
      } else {
        // Nếu không đổi region, chỉ cập nhật thông tin
        return this.updateChampionInSameRegion(
          originalChampion,
          updatedChampion
        );
      }
    } catch (error) {
      console.error("Error updating champion in database:", error);
      alert(`❌ Có lỗi xảy ra khi cập nhật: ${error.message}`);
      return false;
    }
  }

  // Cập nhật champion trong cùng region
  updateChampionInSameRegion(originalChampion, updatedChampion) {
    // Tìm region của champion
    const region = this.db.data.regions.find(
      (r) => r.id === originalChampion.region
    );
    if (!region) {
      console.error("Region not found:", originalChampion.region);
      return false;
    }

    // Tìm champion trong existingChampions
    let championFound = false;
    if (region.existingChampions) {
      const championIndex = region.existingChampions.findIndex(
        (c) => c.name === originalChampion.name
      );
      if (championIndex !== -1) {
        // Cập nhật champion, giữ lại id và các field quan trọng
        region.existingChampions[championIndex] = {
          ...region.existingChampions[championIndex],
          ...updatedChampion,
          id: region.existingChampions[championIndex].id, // Giữ lại id gốc
          region: originalChampion.region, // Giữ lại region gốc
        };
        championFound = true;
      }
    }

    // Nếu không tìm thấy trong existingChampions, tìm trong newChampions
    if (!championFound && region.newChampions) {
      const championIndex = region.newChampions.findIndex(
        (c) => c.name === originalChampion.name
      );
      if (championIndex !== -1) {
        region.newChampions[championIndex] = {
          ...region.newChampions[championIndex],
          ...updatedChampion,
          id: region.newChampions[championIndex].id,
          region: originalChampion.region,
        };
        championFound = true;
      }
    }

    return championFound;
  }

  // Chuyển champion sang region mới
  moveChampionToNewRegion(originalChampion, updatedChampion) {
    // Validate region IDs - tất cả regions
    const validRegionIds = [
      "void",
      "demacia",
      "noxus",
      "ionia",
      "piltover",
      "shadowisles",
      "shurima",
      "freljord",
      "bilgewater",
      "targon",
      "bandle",
      "unknown",
    ];

    if (!validRegionIds.includes(originalChampion.region)) {
      console.error("Invalid original region:", originalChampion.region);
      alert(`❌ Region gốc không hợp lệ: ${originalChampion.region}`);
      return false;
    }

    if (!validRegionIds.includes(updatedChampion.region)) {
      console.error("Invalid target region:", updatedChampion.region);
      alert(
        `❌ Region đích không hợp lệ: ${updatedChampion.region}\nVui lòng chọn một region hợp lệ.`
      );
      return false;
    }

    // Tìm region cũ
    const oldRegion = this.db.data.regions.find(
      (r) => r.id === originalChampion.region
    );
    // Tìm region mới
    const newRegion = this.db.data.regions.find(
      (r) => r.id === updatedChampion.region
    );

    if (!oldRegion || !newRegion) {
      console.error(
        "Region not found in database:",
        originalChampion.region,
        updatedChampion.region
      );
      alert(
        `❌ Không tìm thấy region trong database!\nRegion cũ: ${originalChampion.region}\nRegion mới: ${updatedChampion.region}`
      );
      return false;
    }

    let championData = null;
    let championRemoved = false;

    // Xóa champion từ region cũ
    if (oldRegion.existingChampions) {
      const championIndex = oldRegion.existingChampions.findIndex(
        (c) => c.name === originalChampion.name
      );
      if (championIndex !== -1) {
        championData = oldRegion.existingChampions[championIndex];
        oldRegion.existingChampions.splice(championIndex, 1);
        championRemoved = true;
      }
    }

    if (!championRemoved && oldRegion.newChampions) {
      const championIndex = oldRegion.newChampions.findIndex(
        (c) => c.name === originalChampion.name
      );
      if (championIndex !== -1) {
        championData = oldRegion.newChampions[championIndex];
        oldRegion.newChampions.splice(championIndex, 1);
        championRemoved = true;
      }
    }

    if (!championRemoved || !championData) {
      console.error("Champion not found in old region:", originalChampion.name);
      return false;
    }

    // Cập nhật thông tin champion với dữ liệu mới
    const updatedChampionData = {
      ...championData,
      ...updatedChampion,
      id: championData.id, // Giữ lại id gốc
      region: updatedChampion.region, // Cập nhật region mới
    };

    // Thêm champion vào region mới
    if (!newRegion.existingChampions) {
      newRegion.existingChampions = [];
    }
    newRegion.existingChampions.push(updatedChampionData);

    console.log(
      `✅ Moved champion ${originalChampion.name} from ${originalChampion.region} to ${updatedChampion.region}`
    );
    return true;
  }

  // Thu thập dữ liệu từ form chỉnh sửa
  collectEditFormData() {
    // Lấy dữ liệu cơ bản
    const data = {
      name: document.getElementById("editChampionName").value.trim(),
      fullName: document.getElementById("editChampionFullName").value.trim(),
      icon: document.getElementById("editChampionIcon").value.trim(),
      role: document.getElementById("editChampionRole").value.trim(),
      releaseDate: document
        .getElementById("editChampionReleaseDate")
        .value.trim(),
      age: document.getElementById("editChampionAge").value.trim(),
      gender: document.getElementById("editChampionGender").value.trim(),
      species: document.getElementById("editChampionSpecies").value.trim(),
      region: document.getElementById("editChampionRegion").value.trim(),
      image: document.getElementById("editChampionImage").value.trim(),
      weapon: document.getElementById("editChampionWeapon").value.trim(),
      weaponSummary: document
        .getElementById("editChampionWeaponSummary")
        .value.trim(),
      lore: document.getElementById("editChampionLore").value.trim(),
      fullLore: document.getElementById("editChampionFullLore").value.trim(),
      affiliation: document
        .getElementById("editChampionAffiliation")
        .value.trim(),
      status: document.getElementById("editChampionStatus").value.trim(),
      gameplay: document.getElementById("editChampionGameplay").value.trim(),
      notes: document.getElementById("editChampionNotes").value.trim(),
    };

    // Validate required fields
    if (!data.name) {
      throw new Error("Tên champion là bắt buộc!");
    }

    // Ensure region has a value - use original champion's region if not selected
    if (
      !data.region &&
      this.currentEditingChampion &&
      this.currentEditingChampion.region
    ) {
      data.region = this.currentEditingChampion.region;
      console.log("Using original champion region:", data.region);
    }

    if (!data.region) {
      throw new Error("Vui lòng chọn region cho champion!");
    }

    // Validate region - tất cả regions
    const validRegionIds = [
      "void",
      "demacia",
      "noxus",
      "ionia",
      "piltover",
      "shadowisles",
      "shurima",
      "freljord",
      "bilgewater",
      "targon",
      "bandle",
      "unknown",
    ];
    if (data.region && !validRegionIds.includes(data.region)) {
      throw new Error(
        `Region không hợp lệ: ${data.region}. Vui lòng chọn một region hợp lệ.`
      );
    }

    // Lấy lore connections
    const loreConnectionsText = document
      .getElementById("editChampionLoreConnections")
      .value.trim();
    if (loreConnectionsText) {
      data.loreConnections = loreConnectionsText
        .split(",")
        .map((conn) => conn.trim())
        .filter((conn) => conn);
    }

    // Lấy skills
    const skillFields = document.querySelectorAll(".edit-skill-field");
    const skills = [];
    skillFields.forEach((field) => {
      const type = field.querySelector(".edit-skill-type")?.value || "Passive";
      const name = field.querySelector(".edit-skill-name")?.value.trim() || "";
      const description =
        field.querySelector(".edit-skill-desc")?.value.trim() || "";

      if (name || description) {
        skills.push({
          name: name,
          description: description,
          key: type,
        });
      }
    });
    if (skills.length > 0) {
      data.skills = skills;
    }

    // Lấy special features
    const featureInputs = document.querySelectorAll(".edit-feature-text");
    const features = [];
    featureInputs.forEach((input) => {
      const value = input.value.trim();
      if (value) {
        features.push(value);
      }
    });
    if (features.length > 0) {
      data.specialFeatures = features;
    }

    console.log("Collected form data:", data);
    return data;
  }

  // Hiển thị code để cập nhật data.js
  showDataJsCode(champion) {
    // Tìm region của champion
    const region = this.db.data.regions.find((r) => r.id === champion.region);
    if (!region) return;

    // Xác định champion nằm trong array nào
    const isInExisting = region.existingChampions?.some(
      (c) => c.name === champion.name
    );
    const arrayName = isInExisting ? "existingChampions" : "newChampions";

    // Tạo code JavaScript cho champion
    const championCode = this.generateChampionCode(champion);

    // Tạo code để cập nhật file region cụ thể
    const regionFileName = `js/regions/${champion.region}.js`;
    const fullCode = `// 🔄 Cập nhật champion "${champion.name}" trong ${region.name}
// File: ${regionFileName}
// 
// HƯỚNG DẪN:
// 1. Mở file ${regionFileName}
// 2. Tìm champion có name: "${champion.name}" trong array ${arrayName}
// 3. Thay thế toàn bộ object champion đó bằng code dưới đây:

${championCode}

// 📝 LƯU Ý QUAN TRỌNG:
// - Sau khi cập nhật file .js, cần reload trang để thấy thay đổi
// - Hoặc có thể tiếp tục edit trong localStorage và cập nhật file sau
// - Để giữ thay đổi vĩnh viễn, PHẢI cập nhật file .js

// 🚀 CÁCH NHANH: Copy code trên và paste vào đúng vị trí trong file ${regionFileName}`;

    // Hiển thị modal code với button copy
    this.showCodeModal(fullCode, `Cập nhật ${regionFileName}`, championCode);
  }

  // Tạo code JavaScript cho champion
  generateChampionCode(champion) {
    const cleanChampion = { ...champion };

    // Xóa các field không cần thiết hoặc được tính toán
    delete cleanChampion.regionName;

    // Format code JavaScript
    return `{
  name: "${cleanChampion.name || ""}",${
      cleanChampion.fullName
        ? `
  fullName: "${cleanChampion.fullName}",`
        : ""
    }${
      cleanChampion.icon
        ? `
  icon: "${cleanChampion.icon}",`
        : ""
    }
  role: "${cleanChampion.role || ""}",${
      cleanChampion.title
        ? `
  title: "${cleanChampion.title}",`
        : ""
    }${
      cleanChampion.releaseDate
        ? `
  releaseDate: "${cleanChampion.releaseDate}",`
        : ""
    }${
      cleanChampion.age
        ? `
  age: "${cleanChampion.age}",`
        : ""
    }${
      cleanChampion.gender
        ? `
  gender: "${cleanChampion.gender}",`
        : ""
    }${
      cleanChampion.species
        ? `
  species: "${cleanChampion.species}",`
        : ""
    }
  region: "${cleanChampion.region || ""}",${
      cleanChampion.image
        ? `
  image: "${cleanChampion.image}",`
        : ""
    }${
      cleanChampion.weapon
        ? `
  weapon: "${cleanChampion.weapon}",`
        : ""
    }${
      cleanChampion.weaponSummary
        ? `
  weaponSummary: "${cleanChampion.weaponSummary}",`
        : ""
    }
  lore: \`${(cleanChampion.lore || "").replace(/`/g, "\\`")}\`,${
      cleanChampion.fullLore
        ? `
  fullLore: \`${cleanChampion.fullLore.replace(/`/g, "\\`")}\`,`
        : ""
    }${
      cleanChampion.origin
        ? `
  origin: "${cleanChampion.origin}",`
        : ""
    }${
      cleanChampion.affiliation
        ? `
  affiliation: "${cleanChampion.affiliation}",`
        : ""
    }${
      cleanChampion.status
        ? `
  status: "${cleanChampion.status}",`
        : ""
    }${
      cleanChampion.rarity
        ? `
  rarity: "${cleanChampion.rarity}",`
        : ""
    }${
      cleanChampion.cost
        ? `
  cost: "${cleanChampion.cost}",`
        : ""
    }${
      cleanChampion.loreConnections && cleanChampion.loreConnections.length > 0
        ? `
  loreConnections: [${cleanChampion.loreConnections
    .map((conn) => `"${conn}"`)
    .join(", ")}],`
        : ""
    }${
      cleanChampion.gameplay
        ? `
  gameplay: \`${cleanChampion.gameplay.replace(/`/g, "\\`")}\`,`
        : ""
    }${
      cleanChampion.notes
        ? `
  notes: \`${cleanChampion.notes.replace(/`/g, "\\`")}\`,`
        : ""
    }${
      cleanChampion.skills && cleanChampion.skills.length > 0
        ? `
  skills: [${cleanChampion.skills
    .map((skill) => {
      if (typeof skill === "object") {
        return `
    {
      type: "${skill.type}",
      name: "${skill.name}",
      description: \`${skill.description.replace(/`/g, "\\`")}\`
    }`;
      } else {
        return `\`${skill.replace(/`/g, "\\`")}\``;
      }
    })
    .join(",")}
  ],`
        : ""
    }${
      cleanChampion.specialFeatures && cleanChampion.specialFeatures.length > 0
        ? `
  specialFeatures: [${cleanChampion.specialFeatures
    .map((feature) => `\`${feature.replace(/`/g, "\\`")}\``)
    .join(", ")}],`
        : ""
    }
}`;
  }

  // Hiển thị modal code (sử dụng lại modal hiện có)
  showCodeModal(code, title = "Code cho data.js", codeToCopy = "") {
    const modal = document.getElementById("codeModal");
    const codeDisplay = document.getElementById("codeDisplay");

    if (modal && codeDisplay) {
      const modalTitle = modal.querySelector("h2");

      // Safely update title if element exists
      if (modalTitle) {
        modalTitle.textContent = `💾 ${title}`;
      }

      codeDisplay.textContent = code;
      modal.classList.remove("hidden");

      // Copy functionality
      const copyBtn = document.getElementById("copyCodeBtn");
      if (copyBtn) {
        // Remove existing event listeners to prevent duplicates
        copyBtn.replaceWith(copyBtn.cloneNode(true));
        const newCopyBtn = document.getElementById("copyCodeBtn");

        newCopyBtn.addEventListener("click", () => {
          navigator.clipboard
            .writeText(code)
            .then(() => {
              alert("✅ Code đã được copy vào clipboard!");
            })
            .catch(() => {
              // Fallback cho browsers không hỗ trợ clipboard API
              const textArea = document.createElement("textarea");
              textArea.value = code;
              document.body.appendChild(textArea);
              textArea.select();
              document.execCommand("copy");
              document.body.removeChild(textArea);
              alert("✅ Code đã được copy vào clipboard!");
            });
        });
      }

      // Add copy button for code to copy
      if (codeToCopy) {
        const copyCodeBtn = document.getElementById("copyCodeBtn");
        copyCodeBtn.textContent = "Copy Code";
        copyCodeBtn.addEventListener("click", () => {
          navigator.clipboard
            .writeText(codeToCopy)
            .then(() => {
              alert("✅ Code đã được copy vào clipboard!");
            })
            .catch(() => {
              // Fallback cho browsers không hỗ trợ clipboard API
              const textArea = document.createElement("textarea");
              textArea.value = codeToCopy;
              document.body.appendChild(textArea);
              textArea.select();
              document.execCommand("copy");
              document.body.removeChild(textArea);
              alert("✅ Code đã được copy vào clipboard!");
            });
        });
      }
    } else {
      // If modal doesn't exist, create a simple alert with the code
      console.log("Code Modal not found, showing in console:");
      console.log(code);
      alert(
        "✅ Cập nhật thành công! Code đã được hiển thị trong console (F12)"
      );
    }
  }

  // Đóng modal code
  closeCodeModal() {
    document.getElementById("codeModal")?.classList.add("hidden");
  }
}

// Global function to show weapon detail in a popup
function showWeaponDetail(weaponText, buttonElement) {
  // Create a modal backdrop
  const backdrop = document.createElement("div");
  backdrop.className =
    "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4";
  backdrop.style.zIndex = "9999";

  // Create modal content
  const modal = document.createElement("div");
  modal.className =
    "bg-slate-800 rounded-lg p-6 max-w-md w-full border border-slate-600 shadow-2xl";

  modal.innerHTML = `
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-lg font-semibold text-cyan-300">Chi Tiết Vũ Khí</h3>
      <button onclick="closeWeaponDetail()" class="text-slate-400 hover:text-white text-xl font-bold">
        ×
      </button>
    </div>
    <div class="bg-slate-700/50 p-4 rounded-lg">
      <p class="text-slate-300 text-sm leading-relaxed">${weaponText}</p>
    </div>
    <div class="mt-4 text-right">
      <button onclick="closeWeaponDetail()" class="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded transition-colors">
        Đóng
      </button>
    </div>
  `;

  backdrop.appendChild(modal);
  document.body.appendChild(backdrop);

  // Close modal when clicking backdrop
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      closeWeaponDetail();
    }
  });

  // Store reference for closing
  window.currentWeaponModal = backdrop;
}

// Global function to close weapon detail modal
function closeWeaponDetail() {
  if (window.currentWeaponModal) {
    document.body.removeChild(window.currentWeaponModal);
    window.currentWeaponModal = null;
  }
}

// Global function to close weapon champions modal
function closeWeaponChampionsModal() {
  if (window.currentWeaponChampionsModal) {
    document.body.removeChild(window.currentWeaponChampionsModal);
    window.currentWeaponChampionsModal = null;
  }
}

// Global function to open champion modal from weapon champions list
function openChampionModalFromWeapon(championName, championRegion) {
  // Close the weapon champions modal first
  closeWeaponChampionsModal();

  // Find the champion in the app
  if (window.runeterra) {
    const allChampions = window.runeterra.getAllChampions();
    const champion = allChampions.find(
      (c) => c.name === championName && c.region === championRegion
    );
    if (champion) {
      window.runeterra.openModal(champion);
    }
  }
}

// Global function to close attribute champions modal
function closeAttributeChampionsModal() {
  if (window.currentAttributeChampionsModal) {
    document.body.removeChild(window.currentAttributeChampionsModal);
    window.currentAttributeChampionsModal = null;
  }
}

// Global function to open champion modal from attribute champions list
function openChampionModalFromAttribute(championName, championRegion) {
  // Close the attribute champions modal first
  closeAttributeChampionsModal();

  // Find the champion in the app
  if (window.runeterra) {
    const allChampions = window.runeterra.getAllChampions();
    const champion = allChampions.find(
      (c) => c.name === championName && c.region === championRegion
    );
    if (champion) {
      window.runeterra.openModal(champion);
    }
  }
}

// Add import data functionality to RuneterraApp class
RuneterraApp.prototype.openImportDataModal = async function () {
  const modal = document.getElementById("importDataModal");
  if (!modal) return;

  // Wait for scraped data to load if not already loaded
  if (!window.scrapedChampionsManager.isLoaded) {
    await window.scrapedChampionsManager.loadScrapedData();
  }

  // Get statistics
  const stats = window.scrapedChampionsManager.getStatistics();
  const currentChampions = this.getAllChampions();
  const missingChampions =
    window.scrapedChampionsManager.getMissingChampions(currentChampions);

  // Update statistics display
  document.getElementById("totalScrapedChampions").textContent = stats
    ? stats.totalChampions
    : 0;
  document.getElementById("newChampionsCount").textContent =
    missingChampions.length;
  document.getElementById("existingChampionsCount").textContent =
    currentChampions.length;

  // Populate new champions preview
  this.populateNewChampionsPreview(missingChampions);

  modal.classList.remove("hidden");
};

RuneterraApp.prototype.closeImportDataModal = function () {
  const modal = document.getElementById("importDataModal");
  if (modal) {
    modal.classList.add("hidden");
  }
};

RuneterraApp.prototype.populateNewChampionsPreview = function (newChampions) {
  const container = document.getElementById("newChampionsList");
  if (!container) return;

  if (newChampions.length === 0) {
    container.innerHTML =
      '<div class="text-center text-slate-400 py-4">Không có tướng mới để import</div>';
    return;
  }

  container.innerHTML =
    newChampions
      .slice(0, 20)
      .map(
        (champion) => `
    <div class="flex items-center justify-between py-2 px-3 bg-slate-600 rounded mb-2">
      <div class="flex items-center space-x-3">
        <span class="text-2xl">${champion.icon || "⚔️"}</span>
        <div>
          <div class="font-semibold text-slate-100">${champion.name}</div>
          <div class="text-sm text-slate-400">${
            champion.role
          } - ${this.getRegionName(champion.region)}</div>
        </div>
      </div>
      <div class="text-xs text-slate-500">${
        champion.species || "Không rõ"
      }</div>
    </div>
  `
      )
      .join("") +
    (newChampions.length > 20
      ? `<div class="text-center text-slate-400 py-2">... và ${
          newChampions.length - 20
        } tướng khác</div>`
      : "");
};

RuneterraApp.prototype.getRegionName = function (regionId) {
  const regionNames = {
    void: "Hư Không",
    demacia: "Demacia",
    noxus: "Noxus",
    ionia: "Ionia",
    piltover: "Piltover",
    shadowisles: "Quần Đảo Bóng Đêm",
    freljord: "Freljord",
    shurima: "Shurima",
    bilgewater: "Bilgewater",
    targon: "Targon",
    bandle: "Bandle City",
  };
  return regionNames[regionId] || regionId;
};

RuneterraApp.prototype.refreshAfterImport = async function () {
  // Reload the database from storage to get fresh data
  this.db = new ChampionsDB();

  // Update window.championsDatabase with fresh data
  window.championsDatabase = this.db.data;

  // Reload champions display
  this.loadChampions();

  console.log("Đã refresh dữ liệu sau import");
};

RuneterraApp.prototype.startImportProcess = async function () {
  const importNewChampions =
    document.getElementById("importNewChampions").checked;
  const updateExistingChampions = document.getElementById(
    "updateExistingChampions"
  ).checked;
  const importImages = document.getElementById("importImages").checked;

  if (!importNewChampions && !updateExistingChampions) {
    alert("Vui lòng chọn ít nhất một tùy chọn import!");
    return;
  }

  // Show progress
  document.getElementById("importProgress").classList.remove("hidden");
  document.getElementById("startImportBtn").disabled = true;

  try {
    const currentChampions = this.getAllChampions();
    const scrapedChampions =
      window.scrapedChampionsManager.getAllScrapedChampions();

    console.log(
      `Bắt đầu import: ${scrapedChampions.length} tướng từ dữ liệu cào`
    );
    console.log(`Hiện tại có: ${currentChampions.length} tướng trong database`);

    let importedCount = 0;
    let updatedCount = 0;
    let skippedCount = 0;
    const totalOperations = scrapedChampions.length;

    for (let i = 0; i < scrapedChampions.length; i++) {
      const scrapedChampion = scrapedChampions[i];

      // Check if champion exists by both ID and name
      const existingChampion = currentChampions.find(
        (c) =>
          c.id === scrapedChampion.id ||
          c.name.toLowerCase() === scrapedChampion.name.toLowerCase()
      );

      // Update progress
      const progress = Math.round(((i + 1) / totalOperations) * 100);
      document.getElementById("importProgressBar").style.width = `${progress}%`;
      document.getElementById(
        "importProgressText"
      ).textContent = `${progress}%`;

      try {
        if (existingChampion && updateExistingChampions) {
          // Update existing champion
          const updatedChampion =
            window.scrapedChampionsManager.updateChampionWithScrapedData(
              existingChampion,
              scrapedChampion
            );
          const updateResult = await this.db.updateChampion(updatedChampion);
          if (updateResult) {
            updatedCount++;
          } else {
            skippedCount++;
          }
        } else if (!existingChampion && importNewChampions) {
          // Add new champion
          const newChampion =
            window.scrapedChampionsManager.convertToAppFormat(scrapedChampion);
          const addResult = await this.db.addChampion(newChampion);
          if (addResult) {
            importedCount++;
          } else {
            skippedCount++;
          }
        } else {
          // Skip this champion
          skippedCount++;
        }
      } catch (championError) {
        console.warn(
          `Lỗi khi xử lý tướng ${scrapedChampion.name}:`,
          championError
        );
        skippedCount++;
        // Continue with next champion instead of stopping
      }

      // Small delay to show progress
      await new Promise((resolve) => setTimeout(resolve, 5));
    }

    // Show success message with detailed results
    let message = `Import hoàn thành!\n`;
    message += `- Đã import ${importedCount} tướng mới\n`;
    message += `- Đã cập nhật ${updatedCount} tướng\n`;
    if (skippedCount > 0) {
      message += `- Đã bỏ qua ${skippedCount} tướng (đã tồn tại hoặc lỗi)`;
    }

    alert(message);

    // Refresh the champions display and reload data
    await this.refreshAfterImport();

    // Close modal
    this.closeImportDataModal();
  } catch (error) {
    console.error("Lỗi khi import dữ liệu:", error);
    alert("Có lỗi xảy ra khi import dữ liệu: " + error.message);
  } finally {
    // Hide progress and re-enable button
    document.getElementById("importProgress").classList.add("hidden");
    document.getElementById("startImportBtn").disabled = false;
  }
};

// Export class
if (typeof module !== "undefined" && module.exports) {
  module.exports = RuneterraApp;
}

// Global functions for HTML onclick events
window.switchChampionTab = function (tabName, buttonElement) {
  // Remove active class from all tab buttons
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Add active class to clicked button
  buttonElement.classList.add("active");

  // Hide all tab panels
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.remove("active");
  });

  // Show selected tab panel
  const targetPanel = document.getElementById(tabName + "-tab");
  if (targetPanel) {
    targetPanel.classList.add("active");
  }
};

// Global app reference for easy access
window.app = window.runeterra;
