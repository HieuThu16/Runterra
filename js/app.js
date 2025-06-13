// Application Logic
class RuneterraApp {
  constructor() {
    // Ensure window.championsDatabase is initialized for translations
    if (!window.championsDatabase) {
      window.championsDatabase = JSON.parse(JSON.stringify(championsDatabase));
      console.log(
        "RuneterraApp constructor - Initialized window.championsDatabase"
      );
    }

    // Debug: Check if championsDatabase is loaded properly
    console.log(
      "RuneterraApp constructor - championsDatabase:",
      championsDatabase
    );
    if (championsDatabase && championsDatabase.regions) {
      const shadowIsles = championsDatabase.regions.find(
        (r) => r.id === "shadowisles"
      );
      if (shadowIsles) {
        const thresh = shadowIsles.existingChampions.find(
          (c) => c.name === "Thresh"
        );
        console.log("RuneterraApp constructor - Raw Thresh data:", thresh);
      }
    }
    this.db = new ChampionsDB();
    this.currentGame = "5vs5";
    this.currentRegion = "all";
    this.currentChampionType = "old";
    this.currentStatisticsTab = "region";

    // Initialize language manager
    this.languageManager = new LanguageManager();

    this.initializeEventListeners();
    this.loadChampions();
  }

  initializeEventListeners() {
    // Game tabs
    document
      .getElementById("game5vs5Tab")
      ?.addEventListener("click", () => this.switchGame("5vs5"));
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
      .getElementById("oldChampionsTab")
      ?.addEventListener("click", () => this.switchChampionType("old"));
    document
      .getElementById("newChampionsTab")
      ?.addEventListener("click", () => this.switchChampionType("new"));
    document
      .getElementById("statisticsTab")
      ?.addEventListener("click", () => this.switchChampionType("statistics"));

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
      ?.addEventListener("click", () => this.closeAddChampionModal()); // Form events
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
      ?.addEventListener("click", () => this.clearTranslationCache()); // Code modal events
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
      .getElementById(game === "5vs5" ? "game5vs5Tab" : "cardGameTab")
      ?.classList.add("active");

    // Show/hide content
    document
      .getElementById("game5vs5Content")
      ?.classList.toggle("hidden", game !== "5vs5");
    document
      .getElementById("cardGameContent")
      ?.classList.toggle("hidden", game !== "card");

    if (game === "5vs5") {
      this.loadChampions();
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
        .getElementById(type === "old" ? "oldChampionsTab" : "newChampionsTab")
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
             class="w-50 h-50 object-cover rounded-lg mx-auto shadow-lg"
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
  openModal(champion) {
    console.log("=== CHAMPION MODAL DEBUG ===");
    console.log("Opening modal for champion:", champion);
    console.log("Champion name:", champion.name);
    console.log("Champion lore:", champion.lore);
    console.log("Champion skills:", champion.skills);
    console.log("Champion specialFeatures:", champion.specialFeatures);
    console.log("Champion fullLore:", champion.fullLore);
    console.log("Champion fullName:", champion.fullName);
    console.log("Champion funFacts:", champion.funFacts);
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
      // Check if skills are objects with detailed info
      if (typeof champion.skills[0] === "object" && champion.skills[0].type) {
        skillsHtml = `
          <div class="mt-6">
            <h4 class="text-lg font-semibold text-cyan-300 mb-3">${this.languageManager.getTranslation(
              "skillsDetailed"
            )}:</h4>
            <div class="space-y-3">
              ${champion.skills
                .map(
                  (skill) => `
                <div class="bg-slate-700 p-4 rounded-lg border-l-4 border-cyan-500">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="bg-cyan-600 text-white px-2 py-1 rounded text-xs font-bold">${skill.type}</span>
                    <h5 class="text-cyan-300 font-semibold">${skill.name}</h5>
                  </div>
                  <p class="text-sm text-slate-300 leading-relaxed">${skill.description}</p>
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
            <h4 class="text-lg font-semibold text-cyan-300 mb-3">${this.languageManager.getTranslation(
              "skills"
            )}:</h4>
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
    // Weapon field removed - only show via weaponSummary with detail button
    if (champion.origin)
      additionalFields.push({
        label: this.languageManager.getTranslation("origin"),
        value: champion.origin,
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
    if (champion.rarity)
      additionalFields.push({
        label: this.languageManager.getTranslation("rarity"),
        value: champion.rarity,
      });
    if (champion.cost)
      additionalFields.push({
        label: this.languageManager.getTranslation("cost"),
        value: champion.cost,
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
    } // Abilities/Powers section if different from skills
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
    }

    // Lore connections panel with integrated relationships
    let loreConnectionsPanel = "";
    if (
      (champion.loreConnections && champion.loreConnections.length > 0) ||
      (champion.relationships && champion.relationships.length > 0)
    ) {
      let connectionsContent = ""; // Add lore connections
      if (champion.loreConnections && champion.loreConnections.length > 0) {
        connectionsContent += champion.loreConnections
          .map(
            (connectionName) => `
            <div class="bg-slate-600/50 p-3 rounded-md border border-purple-500/30">
              <h4 class="text-cyan-300 font-medium mb-2">${connectionName}</h4>
              <p class="text-sm text-slate-300">${this.getLoreConnectionDescription(
                champion.name,
                connectionName
              )}</p>
            </div>
          `
          )
          .join("");
      }

      // Add relationships as part of lore connections
      if (champion.relationships && champion.relationships.length > 0) {
        connectionsContent += champion.relationships
          .map(
            (rel) => `
            <div class="bg-pink-900/30 p-3 rounded-md border border-pink-600/50">
              <h4 class="text-pink-300 font-medium mb-2">${rel.type}</h4>
              <p class="text-sm text-pink-100">${rel.description}</p>
            </div>
          `
          )
          .join("");
      }

      loreConnectionsPanel = `
        <div class="bg-slate-700/50 p-4 rounded-lg mb-6">
          <h3 class="text-lg font-semibold text-purple-300 mb-4">🔗 Liên Kết Cốt Truyện & Mối Quan Hệ</h3>
          <div class="space-y-3">
            ${connectionsContent}
          </div>
        </div>
      `;
    }

    // Fun Facts panel for right side
    let funFactsPanel = "";
    if (champion.funFacts && champion.funFacts.length > 0) {
      funFactsPanel = `
        <div class="bg-slate-700/50 p-4 rounded-lg">
          <h3 class="text-lg font-semibold text-amber-300 mb-4">✨ Fun Facts</h3>
          <div class="bg-amber-900/30 p-4 rounded-lg border border-amber-600/50">
            <ul class="space-y-2 list-disc list-inside">
              ${champion.funFacts
                .map(
                  (fact) => `
                <li class="text-sm text-amber-100 leading-relaxed">${fact}</li>
              `
                )
                .join("")}
            </ul>
          </div>
        </div>
      `;
    }
    modalBody.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Main content (left side) -->
        <div class="lg:col-span-2">
          <!-- Champion Header with Image and Basic Info -->
          <div class="flex gap-6 mb-6">
            <!-- Champion Image -->
            <div class="flex-shrink-0">
              <img src="${
                champion.image ||
                "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg"
              }" 
                   alt="${champion.name}" 
                   class="w-120 h-96 object-cover rounded-lg shadow-lg"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
              <div class="text-6xl hidden">🎭</div>
            </div>
              <!-- Champion Basic Info -->
            <div class="flex-1 flex flex-col justify-center">
              <h2 class="text-4xl font-bold text-cyan-300 mb-3">${
                champion.name || "Unknown"
              }</h2>
              <p class="text-2xl text-slate-400 mb-6">${
                champion.role || "Unknown Role"
              } - ${champion.regionName || "Unknown Region"}</p>
              
              <!-- Essential Champion Info -->
              <div class="space-y-3">
                ${
                  champion.species
                    ? `
                <div class="flex items-center">
                  <span class="text-cyan-300 font-semibold text-lg w-20">Loài:</span>
                  <span class="text-slate-300 text-lg">${champion.species}</span>
                </div>
                `
                    : ""
                }
                ${
                  champion.gender
                    ? `
                <div class="flex items-center">
                  <span class="text-cyan-300 font-semibold text-lg w-20">Giới:</span>
                  <span class="text-slate-300 text-lg">${this.simplifyGender(
                    champion.gender
                  )}</span>
                </div>
                `
                    : ""
                }
                ${
                  champion.weaponSummary
                    ? `
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <span class="text-cyan-300 font-semibold text-lg w-20">Vũ Khí:</span>
                    <span class="text-slate-300 text-lg">${
                      champion.weaponSummary
                    }</span>
                  </div>
                  ${
                    champion.weapon
                      ? `
                    <button 
                      onclick="showWeaponDetail('${champion.weapon.replace(
                        /'/g,
                        "\\'"
                      )}', this)" 
                      class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded transition-colors"
                    >
                      Chi tiết
                    </button>
                  `
                      : ""
                  }
                </div>
                `
                    : ""
                }
              </div>
            </div></div>
          
          <div class="mt-6">
            <h4 class="text-lg font-semibold text-slate-300 mb-3">${this.languageManager.getTranslation(
              "basicInfo"
            )}:</h4>
            <div class="text-slate-300 leading-relaxed bg-slate-700/50 p-4 rounded-lg">
              <p>${champion.lore || "Chưa có thông tin lore."}</p>
            </div>
          </div>
            ${gameplayHtml}
          ${statsHtml}
          ${skillsHtml}
          ${abilitiesHtml}
          ${specialFeaturesHtml}
          ${fullLoreHtml}
          ${notesHtml}
          
          ${
            champion.special
              ? '<div class="mt-6 p-4 bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg"><p class="text-sm text-white"><strong>🌟 Đặc biệt:</strong> Tướng có khả năng biến đổi giữa 4 dạng với cơ chế mua đồ tự động.</p></div>'
              : ""
          }
        </div>
          <!-- Right panel for lore connections and fun facts -->
        <div class="lg:col-span-1">
          ${loreConnectionsPanel}
          ${funFactsPanel}
        </div>
      </div>
    `;

    console.log("Modal HTML generated:", modalBody.innerHTML);

    modal.classList.remove("hidden");
  }

  closeModal() {
    document.getElementById("championModal")?.classList.add("hidden");
  }

  openAddChampionModal() {
    const modal = document.getElementById("addChampionModal");
    const title = document.getElementById("addModalTitle");
    const skillsSection = document.getElementById("skillsSection");

    if (!modal || !title || !skillsSection) return;

    // Update title and show/hide skills section based on current champion type
    if (this.currentChampionType === "new") {
      title.textContent = "Thêm Tướng Mới";
      skillsSection.classList.remove("hidden");
      this.clearSkillFields();
      this.addSkillField();
    } else {
      title.textContent = "Thêm Tướng Cũ";
      skillsSection.classList.add("hidden");
      this.clearSkillFields();
    }

    // Reset form
    document.getElementById("addChampionForm")?.reset();
    modal.classList.remove("hidden");
  }

  closeAddChampionModal() {
    document.getElementById("addChampionModal")?.classList.add("hidden");
    document.getElementById("addChampionForm")?.reset();
    this.clearSkillFields();
  }
  addSkillField() {
    const container = document.getElementById("skillsContainer");
    if (!container) return;

    const skillDiv = document.createElement("div");
    skillDiv.className =
      "skill-field grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 bg-slate-700 rounded-lg";

    skillDiv.innerHTML = `
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-2">Loại Kỹ Năng</label>
        <select class="skill-type w-full bg-slate-600 border border-slate-500 text-slate-100 rounded-lg p-2.5" required>
          <option value="">Chọn loại</option>
          <option value="Passive">Passive</option>
          <option value="Q">Q</option>
          <option value="W">W</option>
          <option value="E">E</option>
          <option value="R">R</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-2">Tên Kỹ Năng</label>
        <input type="text" class="skill-name w-full bg-slate-600 border border-slate-500 text-slate-100 rounded-lg p-2.5" placeholder="Tên kỹ năng" required>
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-2">Mô Tả Kỹ Năng</label>
        <textarea class="skill-desc w-full bg-slate-600 border border-slate-500 text-slate-100 rounded-lg p-2.5" rows="2" placeholder="Mô tả hiệu ứng kỹ năng" required></textarea>
      </div>
      <div class="md:col-span-3 flex justify-end">
        <button type="button" class="remove-skill px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm">
          ❌ Xóa
        </button>
      </div>
    `;

    container.appendChild(skillDiv);

    // Add remove event listener
    skillDiv.querySelector(".remove-skill")?.addEventListener("click", () => {
      skillDiv.remove();
    });
  }

  addFeatureField() {
    const container = document.getElementById("featuresContainer");
    if (!container) return;

    const featureDiv = document.createElement("div");
    featureDiv.className = "feature-field flex gap-2 mb-3";

    featureDiv.innerHTML = `
      <input type="text" class="feature-text flex-1 bg-slate-700 border border-slate-600 text-slate-100 rounded-lg p-2.5" placeholder="Nhập điểm đặc biệt..." required>
      <button type="button" class="remove-feature px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm">
        ❌
      </button>
    `;

    container.appendChild(featureDiv);

    // Add remove event listener
    featureDiv
      .querySelector(".remove-feature")
      ?.addEventListener("click", () => {
        featureDiv.remove();
      });
  }
  clearSkillFields() {
    const skillsContainer = document.getElementById("skillsContainer");
    const featuresContainer = document.getElementById("featuresContainer");
    if (skillsContainer) {
      skillsContainer.innerHTML = "";
    }
    if (featuresContainer) {
      featuresContainer.innerHTML = "";
    }
  }

  handleAddChampion(e) {
    e.preventDefault();

    try {
      const name = document.getElementById("championName")?.value;
      const icon = document.getElementById("championIcon")?.value;
      const role = document.getElementById("championRole")?.value;
      const region = document.getElementById("championRegion")?.value;
      const lore = document.getElementById("championLore")?.value;

      // Validate required fields
      if (!name || !icon || !role || !region || !lore) {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
        return;
      }

      // Create champion object
      const newChampion = {
        name: name,
        icon: icon,
        role: role,
        region: region,
        lore: lore,
      };

      // Add skills if it's a new champion
      if (this.currentChampionType === "new") {
        const skillFields = document.querySelectorAll(".skill-field");
        const skills = [];

        skillFields.forEach((field) => {
          const skillName = field.querySelector(".skill-name")?.value;
          const skillDesc = field.querySelector(".skill-desc")?.value;

          if (skillName && skillDesc) {
            skills.push(`${skillName}: ${skillDesc}`);
          }
        });

        if (skills.length === 0) {
          alert("Tướng mới cần có ít nhất 1 kỹ năng!");
          return;
        }

        newChampion.skills = skills;
      } // Add champion to database
      this.db.addChampion(
        region,
        newChampion,
        this.currentChampionType === "new"
      );

      // Generate code for manual addition to data.js
      const code = this.db.generateChampionCode(
        region,
        newChampion,
        this.currentChampionType === "new"
      );

      // Close modal and refresh champions
      this.closeAddChampionModal();
      this.loadChampions();

      // Show success message and code modal
      alert(
        `✅ Đã thêm ${
          this.currentChampionType === "old" ? "tướng cũ" : "tướng mới"
        } "${name}" thành công!\n\n⚠️ Lưu ý: Để tướng hiển thị sau khi deploy, hãy copy code và thêm vào file data.js`
      ); // Show code modal
      this.showCodeModal(code);
    } catch (error) {
      console.error("Lỗi khi thêm tướng:", error);
      alert(`Lỗi: ${error.message}`);
    }
  }

  // Updated handleAddChampion method with extended fields
  handleAddChampionExtended(e) {
    e.preventDefault();

    try {
      const name = document.getElementById("championName")?.value;
      const icon = document.getElementById("championIcon")?.value;
      const role = document.getElementById("championRole")?.value;
      const region = document.getElementById("championRegion")?.value;
      const lore = document.getElementById("championLore")?.value;

      // Extended fields
      const fullName = document.getElementById("championFullName")?.value;
      const species = document.getElementById("championSpecies")?.value;
      const age = document.getElementById("championAge")?.value;
      const weapon = document.getElementById("championWeapon")?.value;
      const fullLore = document.getElementById("championFullLore")?.value;
      const gameplay = document.getElementById("championGameplay")?.value;

      // Validate required fields
      if (!name || !icon || !role || !region || !lore) {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
        return;
      }

      // Create champion object
      const newChampion = {
        name: name,
        icon: icon,
        role: role,
        region: region,
        lore: lore,
      };

      // Add optional fields if provided
      if (fullName) newChampion.fullName = fullName;
      if (species) newChampion.species = species;
      if (age) newChampion.age = age;
      if (weapon) newChampion.weapon = weapon;
      if (fullLore) newChampion.fullLore = fullLore;
      if (gameplay) newChampion.gameplay = gameplay;

      // Add skills if it's a new champion
      if (this.currentChampionType === "new") {
        const skillFields = document.querySelectorAll(".skill-field");
        const skills = [];

        skillFields.forEach((field) => {
          const skillType = field.querySelector(".skill-type")?.value;
          const skillName = field.querySelector(".skill-name")?.value;
          const skillDesc = field.querySelector(".skill-desc")?.value;

          if (skillType && skillName && skillDesc) {
            skills.push({
              type: skillType,
              name: skillName,
              description: skillDesc,
            });
          }
        });

        if (skills.length === 0) {
          alert("Tướng mới cần có ít nhất 1 kỹ năng!");
          return;
        }

        newChampion.skills = skills;
      }

      // Add special features
      const featureFields = document.querySelectorAll(
        ".feature-field .feature-text"
      );
      const specialFeatures = [];
      featureFields.forEach((field) => {
        if (field.value.trim()) {
          specialFeatures.push(field.value.trim());
        }
      });
      if (specialFeatures.length > 0) {
        newChampion.specialFeatures = specialFeatures;
      }

      // Add champion to database
      this.db.addChampion(
        region,
        newChampion,
        this.currentChampionType === "new"
      );

      // Generate code for manual addition to data.js
      const code = this.db.generateChampionCode(
        region,
        newChampion,
        this.currentChampionType === "new"
      );

      // Close modal and refresh champions
      this.closeAddChampionModal();
      this.loadChampions();

      // Show success message and code modal
      alert(
        `✅ Đã thêm ${
          this.currentChampionType === "old" ? "tướng cũ" : "tướng mới"
        } "${name}" thành công!\n\n⚠️ Lưu ý: Để tướng hiển thị sau khi deploy, hãy copy code và thêm vào file data.js`
      );

      // Show code modal
      this.showCodeModal(code);
    } catch (error) {
      console.error("Lỗi khi thêm tướng:", error);
      alert(`Lỗi: ${error.message}`);
    }
  }

  // Database management methods
  downloadDatabase() {
    this.db.downloadDatabase();
  }

  uploadDatabase() {
    document.getElementById("uploadDbInput")?.click();
  }

  async handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
      await this.db.uploadDatabase(file);
      this.loadChampions();
      alert("🎉 Restore dữ liệu thành công!");
    } catch (error) {
      console.error("Error uploading database:", error);
      alert("❌ Lỗi khi restore dữ liệu!");
    }

    // Reset file input
    event.target.value = "";
  }
  resetDatabase() {
    if (
      confirm("🔄 Bạn có chắc muốn reset tất cả dữ liệu về trạng thái ban đầu?")
    ) {
      // Clear localStorage and reload from original data
      localStorage.removeItem("runeterra_champions_db");
      this.db.resetDatabase();
      this.loadChampions();
      alert("🎉 Reset dữ liệu thành công!");
      console.log("Database reset - checking Thresh again:");
      const threshCheck = this.db
        .getChampions("shadowisles", "old")
        .find((c) => c.name === "Thresh");
      console.log("Thresh after reset:", threshCheck);
    }
  }

  showStats() {
    const stats = this.db.getStats();
    let message = `📊 Thống kê Champions:\n\n`;
    message += `🎯 Tổng: ${stats.total} tướng\n`;
    message += `📚 Tướng cũ: ${stats.old}\n`;
    message += `✨ Tướng mới: ${stats.new}\n\n`;
    message += `📍 Theo vùng đất:\n`;

    Object.entries(stats.regions).forEach(([region, data]) => {
      message += `• ${region}: ${data.total} (${data.old} cũ, ${data.new} mới)\n`;
    });

    alert(message);
  }

  // Code modal methods
  showCodeModal(code) {
    document.getElementById("codeDisplay").textContent = code;
    document.getElementById("codeModal")?.classList.remove("hidden");
  }

  closeCodeModal() {
    document.getElementById("codeModal")?.classList.add("hidden");
  }
  copyCode() {
    const codeText = document.getElementById("codeDisplay")?.textContent;
    if (codeText) {
      navigator.clipboard.writeText(codeText).then(() => {
        const btn = document.getElementById("copyCodeBtn");
        const originalText = btn.textContent;
        btn.textContent = "✅ Copied!";
        setTimeout(() => {
          btn.textContent = originalText;
        }, 2000);
      });
    }
  }
  // Language menu control methods
  toggleLanguageMenu() {
    const languageMenu = document.getElementById("languageMenu");
    if (languageMenu) {
      languageMenu.classList.toggle("hidden");
    }
  }

  closeLanguageMenu() {
    const languageMenu = document.getElementById("languageMenu");
    if (languageMenu) {
      languageMenu.classList.add("hidden");
    }
  }

  // Translation cache management
  clearTranslationCache() {
    if (this.languageManager && this.languageManager.translationService) {
      const stats = this.languageManager.translationService.getCacheStats();
      const confirmation = confirm(
        `⚠️ Bạn có chắc chắn muốn xóa cache dịch thuật?\n\n` +
          `Cache hiện tại: ${stats.size} mục\n` +
          `Dung lượng: ${Math.round(stats.memoryUsage / 1024)} KB\n\n` +
          `Điều này sẽ làm cho việc dịch chậm hơn lần đầu tiên.`
      );
      if (confirmation) {
        this.languageManager.translationService.clearCache();
        alert("✅ Đã xóa cache dịch thuật thành công!");
      }
    }
  }

  // Statistics functions
  loadStatistics() {
    this.updateStatisticsOverview();
    this.updateRegionStatistics();
    this.updateRoleDistribution();
    this.updateWeaponStatistics();
    this.updateChampionSelect();
    this.setupChampionDetailsListener();

    // Initialize statistics navigation
    this.switchStatisticsTab(this.currentStatisticsTab);
  }

  updateStatisticsOverview() {
    const allChampions = this.getAllChampions();
    const allRegions = (window.championsDatabase || championsDatabase).regions;
    const weapons = this.extractWeapons(allChampions);
    const roles = this.extractRoles(allChampions);

    // Find most popular role
    const roleCount = {};
    roles.forEach((role) => {
      roleCount[role] = (roleCount[role] || 0) + 1;
    });
    const mostPopularRole = Object.keys(roleCount).reduce(
      (a, b) => (roleCount[a] > roleCount[b] ? a : b),
      ""
    );

    document.getElementById("totalChampions").textContent = allChampions.length;
    document.getElementById("totalRegions").textContent = allRegions.length;
    document.getElementById("totalWeapons").textContent = weapons.length;
    document.getElementById("popularRole").textContent = mostPopularRole || "-";
  }

  updateRegionStatistics() {
    const container = document.getElementById("regionStatsContainer");
    const allRegions = (window.championsDatabase || championsDatabase).regions;

    container.innerHTML = "";

    // Calculate max champions for percentage calculation
    const regionCounts = allRegions.map((region) => {
      const existingCount = region.existingChampions
        ? region.existingChampions.length
        : 0;
      const newCount = region.newChampions ? region.newChampions.length : 0;
      return existingCount + newCount;
    });
    const maxCount = Math.max(...regionCounts, 1); // Avoid division by zero

    allRegions.forEach((region) => {
      const existingCount = region.existingChampions
        ? region.existingChampions.length
        : 0;
      const newCount = region.newChampions ? region.newChampions.length : 0;
      const totalCount = existingCount + newCount;
      const percentage = maxCount > 0 ? (totalCount / maxCount) * 100 : 0;

      const regionDiv = document.createElement("div");
      regionDiv.className = "bg-slate-700 p-4 rounded-lg";
      regionDiv.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <h4 class="font-semibold text-cyan-300">${region.icon} ${region.name}</h4>
          <span class="text-xl font-bold text-yellow-400">${totalCount}</span>
        </div>
        <div class="text-sm text-slate-400">
          <div>Tướng Cũ: ${existingCount}</div>
          <div>Tướng Mới: ${newCount}</div>
        </div>
        <div class="mt-2 bg-slate-600 rounded-full h-2">
          <div class="bg-cyan-400 h-2 rounded-full transition-all duration-300" style="width: ${percentage}%"></div>
        </div>
      `;
      container.appendChild(regionDiv);
    });
  }

  updateRoleStatistics() {
    const container = document.getElementById("roleStatsContainer");
    const allChampions = this.getAllChampions();
    const roleCount = {};
    const roleChampions = {};

    allChampions.forEach((champion) => {
      if (champion.role) {
        roleCount[champion.role] = (roleCount[champion.role] || 0) + 1;

        if (!roleChampions[champion.role]) {
          roleChampions[champion.role] = [];
        }
        roleChampions[champion.role].push(champion);
      }
    });

    container.innerHTML = "";

    if (Object.keys(roleCount).length === 0) {
      container.innerHTML =
        '<div class="col-span-full text-center text-slate-400">Chưa có thông tin vai trò</div>';
      return;
    }

    const roleIcons = {
      "Sát Thủ": "🗡️",
      "Đấu Sĩ": "⚔️",
      "Pháp Sư": "🧙",
      "Xạ Thủ": "🏹",
      "Đỡ Đòn": "🛡️",
      "Hỗ Trợ": "💚",
      Tank: "🛡️",
      Lai: "🔄",
      "Đa Dạng": "🎭",
    };

    Object.entries(roleCount).forEach(([role, count]) => {
      const roleDiv = document.createElement("div");
      roleDiv.className =
        "bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-slate-600 transition-colors";

      roleDiv.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <h4 class="font-semibold text-blue-300">${
            roleIcons[role] || "🎭"
          } ${role}</h4>
          <span class="text-lg font-bold text-blue-400">${count}</span>
        </div>
        <div class="text-sm text-slate-400">Số tướng theo vai trò (nhấn để xem)</div>
      `;

      // Add click event to show champions with this role
      roleDiv.addEventListener("click", () => {
        this.showChampionsForAttribute("Vai trò", role, roleChampions[role]);
      });

      container.appendChild(roleDiv);
    });
  }

  updateWeaponStatistics() {
    const container = document.getElementById("weaponStatsContainer");
    const allChampions = this.getAllChampions();
    const weaponCount = {};
    const weaponChampions = {};

    allChampions.forEach((champion) => {
      if (champion.weaponSummary) {
        weaponCount[champion.weaponSummary] =
          (weaponCount[champion.weaponSummary] || 0) + 1;

        if (!weaponChampions[champion.weaponSummary]) {
          weaponChampions[champion.weaponSummary] = [];
        }
        weaponChampions[champion.weaponSummary].push(champion);
      }
    });

    container.innerHTML = "";

    if (Object.keys(weaponCount).length === 0) {
      container.innerHTML =
        '<div class="col-span-full text-center text-slate-400">Chưa có thông tin vũ khí</div>';
      return;
    }

    Object.entries(weaponCount).forEach(([weapon, count]) => {
      const weaponDiv = document.createElement("div");
      weaponDiv.className =
        "bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-slate-600 transition-colors";
      weaponDiv.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <h4 class="font-semibold text-orange-300">${weapon}</h4>
          <span class="text-lg font-bold text-orange-400">${count}</span>
        </div>
        <div class="text-sm text-slate-400">Số lượng tướng sử dụng (nhấn để xem)</div>
      `;

      // Add click event to show champions using this weapon
      weaponDiv.addEventListener("click", () => {
        this.showChampionsForWeapon(weapon, weaponChampions[weapon]);
      });

      container.appendChild(weaponDiv);
    });
  }
  updateGenderStatistics() {
    const container = document.getElementById("genderStatsContainer");
    const allChampions = this.getAllChampions();
    const genderCount = {};
    const genderChampions = {};
    allChampions.forEach((champion) => {
      if (champion.gender) {
        const simplifiedGender = this.simplifyGender(champion.gender);

        genderCount[simplifiedGender] =
          (genderCount[simplifiedGender] || 0) + 1;

        if (!genderChampions[simplifiedGender]) {
          genderChampions[simplifiedGender] = [];
        }
        genderChampions[simplifiedGender].push(champion);
      }
    });

    container.innerHTML = "";

    if (Object.keys(genderCount).length === 0) {
      container.innerHTML =
        '<div class="col-span-full text-center text-slate-400">Chưa có thông tin giới tính</div>';
      return;
    }

    const genderIcons = {
      Nam: "♂️",
      Nữ: "♀️",
      "Thú/Sinh vật": "🐾",
      "Không xác định": "❓",
    };

    Object.entries(genderCount).forEach(([gender, count]) => {
      const genderDiv = document.createElement("div");
      genderDiv.className =
        "bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-slate-600 transition-colors";

      const genderIcon = genderIcons[gender] || "❓";

      genderDiv.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <h4 class="font-semibold text-pink-300">${genderIcon} ${gender}</h4>
          <span class="text-lg font-bold text-pink-400">${count}</span>
        </div>
        <div class="text-sm text-slate-400">Số tướng theo giới tính (nhấn để xem)</div>
      `;

      // Add click event to show champions with this gender
      genderDiv.addEventListener("click", () => {
        this.showChampionsForAttribute(
          "Giới tính",
          gender,
          genderChampions[gender]
        );
      });

      container.appendChild(genderDiv);
    });
  }

  updateSpeciesStatistics() {
    const container = document.getElementById("speciesStatsContainer");
    const allChampions = this.getAllChampions();
    const speciesCount = {};
    const speciesChampions = {};

    allChampions.forEach((champion) => {
      if (champion.species) {
        const species = champion.species;
        speciesCount[species] = (speciesCount[species] || 0) + 1;

        if (!speciesChampions[species]) {
          speciesChampions[species] = [];
        }
        speciesChampions[species].push(champion);
      }
    });

    container.innerHTML = "";

    if (Object.keys(speciesCount).length === 0) {
      container.innerHTML =
        '<div class="col-span-full text-center text-slate-400">Chưa có thông tin loài</div>';
      return;
    }

    const speciesIcons = {
      "Con người": "👤",
      Human: "👤",
      Yordle: "🧚",
      Vastaya: "🦊",
      Voidborn: "👾",
      "Sinh vật Hư Không": "👾",
      "Thực thể": "👻",
      "Ma thuật": "✨",
      Rồng: "🐲",
      "Tinh linh": "✨",
      Minotaur: "🐂",
      Troll: "👹",
    };

    Object.entries(speciesCount).forEach(([species, count]) => {
      const speciesDiv = document.createElement("div");
      speciesDiv.className =
        "bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-slate-600 transition-colors";

      // Determine species icon
      let speciesIcon = "🧬";
      for (const [key, icon] of Object.entries(speciesIcons)) {
        if (species.includes(key)) {
          speciesIcon = icon;
          break;
        }
      }

      speciesDiv.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <h4 class="font-semibold text-green-300">${speciesIcon} ${species}</h4>
          <span class="text-lg font-bold text-green-400">${count}</span>
        </div>
        <div class="text-sm text-slate-400">Số tướng theo loài (nhấn để xem)</div>
      `;

      // Add click event to show champions with this species
      speciesDiv.addEventListener("click", () => {
        this.showChampionsForAttribute(
          "Loài",
          species,
          speciesChampions[species]
        );
      });

      container.appendChild(speciesDiv);
    });
  }
  updateReleaseYearStatistics() {
    const container = document.getElementById("releaseYearStatsContainer");
    const allChampions = this.getAllChampions();
    const yearCount = {};

    allChampions.forEach((champion) => {
      if (champion.releaseDate) {
        // Extract year from releaseDate (format: dd/mm/yyyy)
        const year = champion.releaseDate.split("/")[2];
        if (year) {
          yearCount[year] = (yearCount[year] || 0) + 1;
        }
      }
    });

    container.innerHTML = "";

    if (Object.keys(yearCount).length === 0) {
      container.innerHTML =
        '<div class="col-span-full text-center text-slate-400">Chưa có thông tin năm phát hành</div>';
      return;
    }

    // Sort years chronologically
    const sortedYears = Object.keys(yearCount).sort(
      (a, b) => parseInt(a) - parseInt(b)
    );

    sortedYears.forEach((year) => {
      const count = yearCount[year];
      const yearDiv = document.createElement("div");
      yearDiv.className =
        "bg-slate-700 p-4 rounded-lg cursor-pointer hover:bg-slate-600 transition-colors";

      yearDiv.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <h4 class="font-semibold text-yellow-300">📅 ${year}</h4>
          <span class="text-lg font-bold text-yellow-400">${count}</span>
        </div>
        <div class="text-sm text-slate-400">Số tướng phát hành (nhấn để xem)</div>
      `;

      // Add click event to show champions released in this year
      yearDiv.addEventListener("click", () => {
        const championsOfYear = allChampions.filter(
          (c) => c.releaseDate && c.releaseDate.split("/")[2] === year
        );
        this.showChampionsForAttribute("Năm phát hành", year, championsOfYear);
      });

      container.appendChild(yearDiv);
    });
  }

  showChampionsForWeapon(weaponName, champions) {
    // Create a modal backdrop
    const backdrop = document.createElement("div");
    backdrop.className =
      "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4";
    backdrop.style.zIndex = "9999";

    // Create modal content
    const modal = document.createElement("div");
    modal.className =
      "bg-slate-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto border border-slate-600 shadow-2xl";

    modal.innerHTML = `
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-semibold text-orange-300">Tướng sử dụng: ${weaponName}</h3>
        <button onclick="closeWeaponChampionsModal()" class="text-slate-400 hover:text-white text-xl font-bold">
          ×
        </button>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="weaponChampionsGrid">
        ${champions
          .map(
            (champion) => `
          <div class="bg-slate-700 rounded-lg p-3 cursor-pointer hover:bg-slate-600 transition-colors champion-card-mini" 
               onclick="openChampionModalFromWeapon('${champion.name}', '${
              champion.region
            }')">
            <div class="aspect-square bg-slate-600 rounded-lg mb-2 overflow-hidden">
              ${
                champion.image
                  ? `<img src="${champion.image}" alt="${champion.name}" class="w-full h-full object-cover">`
                  : `<div class="w-full h-full flex items-center justify-center text-slate-400">
                  <span class="text-2xl">🛡️</span>
                </div>`
              }
            </div>
            <h4 class="text-white font-semibold text-sm text-center mb-1">${
              champion.name
            }</h4>
            <p class="text-slate-400 text-xs text-center">${champion.region}</p>
          </div>
        `
          )
          .join("")}
      </div>
      <div class="mt-6 text-right">
        <button onclick="closeWeaponChampionsModal()" class="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded transition-colors">
          Đóng
        </button>
      </div>
    `;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    // Close modal when clicking backdrop
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeWeaponChampionsModal();
      }
    });

    // Store reference for closing
    window.currentWeaponChampionsModal = backdrop;
  }

  showChampionsForAttribute(attributeType, attributeValue, champions) {
    // Create a modal backdrop
    const backdrop = document.createElement("div");
    backdrop.className =
      "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4";
    backdrop.style.zIndex = "9999";

    // Create modal content
    const modal = document.createElement("div");
    modal.className =
      "bg-slate-800 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto border border-slate-600 shadow-2xl";

    modal.innerHTML = `
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-semibold text-cyan-300">${attributeType}: ${attributeValue}</h3>
        <button onclick="closeAttributeChampionsModal()" class="text-slate-400 hover:text-white text-xl font-bold">
          ×
        </button>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="attributeChampionsGrid">
        ${champions
          .map(
            (champion) => `
          <div class="bg-slate-700 rounded-lg p-3 cursor-pointer hover:bg-slate-600 transition-colors champion-card-mini" 
               onclick="openChampionModalFromAttribute('${champion.name}', '${
              champion.region
            }')">
            <div class="aspect-square bg-slate-600 rounded-lg mb-2 overflow-hidden">
              ${
                champion.image
                  ? `<img src="${champion.image}" alt="${champion.name}" class="w-full h-full object-cover">`
                  : `<div class="w-full h-full flex items-center justify-center text-slate-400">
                  <span class="text-2xl">🛡️</span>
                </div>`
              }
            </div>
            <h4 class="text-white font-semibold text-sm text-center mb-1">${
              champion.name
            }</h4>
            <p class="text-slate-400 text-xs text-center">${champion.region}</p>
          </div>
        `
          )
          .join("")}
      </div>
      <div class="mt-6 text-right">
        <button onclick="closeAttributeChampionsModal()" class="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded transition-colors">
          Đóng
        </button>
      </div>
    `;

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    // Close modal when clicking backdrop
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeAttributeChampionsModal();
      }
    });

    // Store reference for closing
    window.currentAttributeChampionsModal = backdrop;
  }

  getAllChampions() {
    // Get all champions from all regions and types
    const allChampions = [];
    const regions = [
      "demacia",
      "ionia",
      "noxus",
      "piltover",
      "shadowisles",
      "void",
      "special",
    ];

    regions.forEach((region) => {
      // Get existing champions
      const existingChampions = this.db.getChampions(region, "old");
      if (existingChampions && existingChampions.length > 0) {
        allChampions.push(...existingChampions);
      }

      // Get new champions
      const newChampions = this.db.getChampions(region, "new");
      if (newChampions && newChampions.length > 0) {
        allChampions.push(...newChampions);
      }
    });

    return allChampions;
  }

  extractWeapons(champions) {
    const weapons = new Set();
    champions.forEach((champion) => {
      if (champion.weaponSummary) {
        weapons.add(champion.weaponSummary);
      }
    });
    return Array.from(weapons);
  }

  extractRoles(champions) {
    return champions.map((champion) => champion.role).filter((role) => role);
  }

  simplifyGender(genderText) {
    if (!genderText) return "Không xác định";

    const genderLower = genderText.toLowerCase();

    // Phân loại giới tính đơn giản
    if (genderLower.includes("nam") || genderLower.includes("he/him")) {
      return "Nam";
    } else if (genderLower.includes("nữ") || genderLower.includes("she/her")) {
      return "Nữ";
    } else if (
      genderLower.includes("sinh vật") ||
      genderLower.includes("quái vật") ||
      genderLower.includes("thú") ||
      genderLower.includes("rồng") ||
      genderLower.includes("alien") ||
      genderLower.includes("creature") ||
      genderLower.includes("voidborn")
    ) {
      return "Thú/Sinh vật";
    }

    return "Không xác định";
  }

  // Function to get detailed lore connection descriptions
  getLoreConnectionDescription(championName, connectionName) {
    // Special detailed descriptions for Bel'Veth's connections
    if (championName === "Bel'Veth") {
      const connections = {
        Malzahar:
          "Đồng minh chiến lược: Malzahar - Nhà tiên tri trung thành, đã chuyển từ phục vụ Kẻ Giám Sát sang phục vụ Bel'Veth. Anh ta 'khá ổn với ý tưởng phục vụ Bel'Veth' và có thể đã hứa thành phố Belveth để giúp cô ta có được hình dạng vật lý.",
        "Kai'Sa":
          "Mục tiêu thuyết phục: Kai'Sa - Bel'Veth cố gắng lôi kéo Kai'Sa, nhận thấy giá trị của một con người đã thích nghi với Hư Không. Trong câu chuyện 'Pinwheel', cô ta sử dụng thuyết phục tâm lý thay vì vũ lực.",
        Lissandra:
          "Liên minh tiềm năng: Lissandra - Mối quan hệ dựa trên sự đối lập chung với Kẻ Giám Sát. Lissandra đã phản bội và giam cầm Kẻ Giám Sát, trong khi Bel'Veth muốn tiêu diệt chúng - tạo ra động thái 'kẻ thù của kẻ thù là bạn'.",
        "Vel'Koz":
          "Đối thủ trí tuệ: Vel'Koz - Sự xuất hiện của Bel'Veth đã 'làm giảm các đặc điểm độc đáo của Vel'Koz' và 'làm anh ta sợ hãi'. Cô ta đại diện cho 'biến số không thể đoán trước' thách thức sự hiểu biết logic của anh ta về Hư Không.",
        "Kẻ Giám Sát":
          "Kẻ thù truyền kiếp: Kẻ Giám Sát - Mục tiêu chính của Bel'Veth là 'tiêu diệt cả Runeterra và lãnh địa của những kẻ khai sinh ra cô ấy, Kẻ Giám Sát'. Cô ta đại diện cho sự tiến hóa và phản kháng chống lại trật tự cũ của Hư Không.",
      };
      return connections[connectionName] || "Liên kết cốt truyện";
    }

    // Default description for other champions
    return "Liên kết cốt truyện";
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

// Export class
if (typeof module !== "undefined" && module.exports) {
  module.exports = RuneterraApp;
}
