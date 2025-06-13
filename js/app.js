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
    this.currentStatisticsTab = "region"; // Champion navigation state
    this.currentChampionsList = [];
    this.currentChampionIndex = -1;
    this.devModeActive = false;
    this.currentEditingChampion = null;

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
      .getElementById("skinThemesTab")
      ?.addEventListener("click", () => this.switchChampionType("skinThemes"));
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
      ?.addEventListener("click", () => this.openAddChampionModal()); // Modal close events
    document
      .getElementById("modalCloseButton")
      ?.addEventListener("click", () => this.closeModal());
    document.getElementById("championModal")?.addEventListener("click", (e) => {
      if (e.target.id === "championModal") this.closeModal();
    }); // Champion navigation events
    document
      .getElementById("prevChampionBtn")
      ?.addEventListener("click", () => this.navigateToChampion(-1));
    document
      .getElementById("nextChampionBtn")
      ?.addEventListener("click", () => this.navigateToChampion(1));    // Modal edit button
    document
      .getElementById("modalEditButton")
      ?.addEventListener("click", () => this.openFloatingEditWindow());

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
      ?.addEventListener("click", () => this.clearTranslationCache());

    // Refresh skins data
    document
      .getElementById("refreshSkinsBtn")
      ?.addEventListener("click", () => this.refreshSkinsData());

    // Dev Mode events
    document
      .getElementById("editModeBtn")
      ?.addEventListener("click", () => this.toggleDevMode());
    document
      .getElementById("editModalCloseButton")
      ?.addEventListener("click", () => this.closeEditModal());
    document
      .getElementById("editChampionModal")
      ?.addEventListener("click", (e) => {
        if (e.target.id === "editChampionModal") this.closeEditModal();
      });
    document
      .getElementById("cancelEditBtn")
      ?.addEventListener("click", () => this.closeEditModal());
    document
      .getElementById("editChampionForm")
      ?.addEventListener("submit", (e) => this.handleEditChampion(e));
    document
      .getElementById("addEditSkillBtn")
      ?.addEventListener("click", () => this.addEditSkillField());
    document
      .getElementById("addEditFeatureBtn")
      ?.addEventListener("click", () => this.addEditFeatureField());
    document
      .getElementById("addEditConnectionBtn")
      ?.addEventListener("click", () => this.addEditConnectionField()); // Code modal events
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

    // Floating edit window events
    document
      .getElementById("floatingWindowClose")
      ?.addEventListener("click", () => this.closeFloatingEditWindow());
    document
      .getElementById("floatingCancelBtn")
      ?.addEventListener("click", () => this.closeFloatingEditWindow());
    document
      .getElementById("floatingSaveBtn")
      ?.addEventListener("click", () => this.saveFloatingEditForm());
    document
      .getElementById("floatingAddSkillBtn")
      ?.addEventListener("click", () => this.addFloatingSkillField());
    document
      .getElementById("floatingAddFeatureBtn")
      ?.addEventListener("click", () => this.addFloatingFeatureField());
    document
      .getElementById("floatingAddConnectionBtn")
      ?.addEventListener("click", () => this.addFloatingConnectionField());
      
    // Code modal events
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
      // Hide champions grid and skin themes, show statistics
      document.getElementById("championsGrid").classList.add("hidden");
      document.getElementById("skinThemesSection").classList.add("hidden");
      document.getElementById("statisticsSection").classList.remove("hidden");
      this.loadStatistics();
    } else if (type === "skinThemes") {
      document.getElementById("skinThemesTab")?.classList.add("active");
      // Hide other sections and show skin themes
      document.getElementById("championsGrid").classList.add("hidden");
      document.getElementById("statisticsSection").classList.add("hidden");
      document.getElementById("skinThemesSection").classList.remove("hidden");
      this.loadSkinThemes();
    } else {
      document
        .getElementById(type === "old" ? "oldChampionsTab" : "newChampionsTab")
        ?.classList.add("active");
      // Show champions grid and hide other sections
      document.getElementById("championsGrid").classList.remove("hidden");
      document.getElementById("statisticsSection").classList.add("hidden");
      document.getElementById("skinThemesSection").classList.add("hidden");
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
      let champions = this.db.getChampions(
        this.currentRegion,
        this.currentChampionType
      );

      // Sắp xếp champions theo ABC
      champions.sort((a, b) =>
        a.name.localeCompare(b.name, "vi", { sensitivity: "base" })
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

      console.log("Loaded and sorted champions:", champions);

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
      "bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 cursor-pointer relative champion-card";

    // Lấy ảnh champion từ Data Dragon API hoặc sử dụng ảnh có sẵn
    const championImage = this.getChampionImage(champion);

    card.innerHTML = `
      <div class="absolute top-2 left-2 bg-slate-700 text-slate-300 text-xs font-bold px-2 py-1 rounded-full">#${serialNumber}</div>
      <div class="mb-2 text-center">
        <img src="${championImage}" 
             alt="${champion.name}" 
             class="w-50 h-50 object-cover rounded-lg mx-auto shadow-lg champion-avatar"
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
      }
      ${
        champion.weaponSummary
          ? `<p class="text-xs text-orange-400 text-center mt-1">⚔️ ${champion.weaponSummary}</p>`
          : ""
      }
      ${
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

  // Helper method để lấy ảnh champion
  getChampionImage(champion) {
    // Nếu có crawled champions data, sử dụng ảnh từ đó
    if (window.crawledChampions) {
      const crawledChampion = window.crawledChampions.find(
        (c) => c.name === champion.name
      );
      if (crawledChampion && crawledChampion.image) {
        return crawledChampion.image;
      }
    }

    // Nếu champion có image field, sử dụng nó
    if (champion.image) {
      return champion.image;
    }

    // Tạo URL từ Data Dragon API dựa trên tên champion
    const championKey = this.getChampionKey(champion.name);
    if (championKey) {
      return `https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${championKey}.png`;
    }

    // Fallback image
    return "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg";
  }

  // Helper method để convert tên champion thành key cho API
  getChampionKey(championName) {
    const keyMap = {
      Aatrox: "Aatrox",
      Ahri: "Ahri",
      Akali: "Akali",
      Akshan: "Akshan",
      Alistar: "Alistar",
      Amumu: "Amumu",
      Anivia: "Anivia",
      Annie: "Annie",
      Aphelios: "Aphelios",
      Ashe: "Ashe",
      "Aurelion Sol": "AurelionSol",
      Azir: "Azir",
      Bard: "Bard",
      "Bel'Veth": "Belveth",
      Blitzcrank: "Blitzcrank",
      Brand: "Brand",
      Braum: "Braum",
      Briar: "Briar",
      Caitlyn: "Caitlyn",
      Camille: "Camille",
      Cassiopeia: "Cassiopeia",
      "Cho'Gath": "Chogath",
      Corki: "Corki",
      Darius: "Darius",
      Diana: "Diana",
      "Dr. Mundo": "DrMundo",
      Draven: "Draven",
      Ekko: "Ekko",
      Elise: "Elise",
      Evelynn: "Evelynn",
      Ezreal: "Ezreal",
      Fiddlesticks: "Fiddlesticks",
      Fiora: "Fiora",
      Fizz: "Fizz",
      Galio: "Galio",
      Gangplank: "Gangplank",
      Garen: "Garen",
      Gnar: "Gnar",
      Gragas: "Gragas",
      Graves: "Graves",
      Gwen: "Gwen",
      Hecarim: "Hecarim",
      Heimerdinger: "Heimerdinger",
      Hwei: "Hwei",
      Illaoi: "Illaoi",
      Irelia: "Irelia",
      Ivern: "Ivern",
      Janna: "Janna",
      "Jarvan IV": "JarvanIV",
      Jax: "Jax",
      Jayce: "Jayce",
      Jhin: "Jhin",
      Jinx: "Jinx",
      "K'Sante": "KSante",
      "Kai'Sa": "Kaisa",
      Kalista: "Kalista",
      Karma: "Karma",
      Karthus: "Karthus",
      Kassadin: "Kassadin",
      Katarina: "Katarina",
      Kayle: "Kayle",
      Kayn: "Kayn",
      Kennen: "Kennen",
      "Kha'Zix": "Khazix",
      Kindred: "Kindred",
      Kled: "Kled",
      "Kog'Maw": "KogMaw",
      LeBlanc: "Leblanc",
      "Lee Sin": "LeeSin",
      Leona: "Leona",
      Lillia: "Lillia",
      Lissandra: "Lissandra",
      Lucian: "Lucian",
      Lulu: "Lulu",
      Lux: "Lux",
      Malphite: "Malphite",
      Malzahar: "Malzahar",
      Maokai: "Maokai",
      "Master Yi": "MasterYi",
      Milio: "Milio",
      "Miss Fortune": "MissFortune",
      Mordekaiser: "Mordekaiser",
      Morgana: "Morgana",
      Naafiri: "Naafiri",
      Nami: "Nami",
      Nasus: "Nasus",
      Nautilus: "Nautilus",
      Neeko: "Neeko",
      Nidalee: "Nidalee",
      Nilah: "Nilah",
      Nocturne: "Nocturne",
      "Nunu & Willump": "Nunu",
      Olaf: "Olaf",
      Orianna: "Orianna",
      Ornn: "Ornn",
      Pantheon: "Pantheon",
      Poppy: "Poppy",
      Pyke: "Pyke",
      Qiyana: "Qiyana",
      Quinn: "Quinn",
      Rakan: "Rakan",
      Rammus: "Rammus",
      "Rek'Sai": "RekSai",
      Rell: "Rell",
      "Renata Glasc": "Renata",
      Renekton: "Renekton",
      Rengar: "Rengar",
      Riven: "Riven",
      Rumble: "Rumble",
      Ryze: "Ryze",
      Samira: "Samira",
      Sejuani: "Sejuani",
      Senna: "Senna",
      Seraphine: "Seraphine",
      Sett: "Sett",
      Shen: "Shen",
      Shyvana: "Shyvana",
      Singed: "Singed",
      Sion: "Sion",
      Sivir: "Sivir",
      Skarner: "Skarner",
      Sona: "Sona",
      Soraka: "Soraka",
      Swain: "Swain",
      Sylas: "Sylas",
      Syndra: "Syndra",
      "Tahm Kench": "TahmKench",
      Taliyah: "Taliyah",
      Talon: "Talon",
      Taric: "Taric",
      Teemo: "Teemo",
      Thresh: "Thresh",
      Tristana: "Tristana",
      Trundle: "Trundle",
      Tryndamere: "Tryndamere",
      "Twisted Fate": "TwistedFate",
      Twitch: "Twitch",
      Udyr: "Udyr",
      Urgot: "Urgot",
      Varus: "Varus",
      Vayne: "Vayne",
      Veigar: "Veigar",
      "Vel'Koz": "Velkoz",
      Vex: "Vex",
      Vi: "Vi",
      Viego: "Viego",
      Viktor: "Viktor",
      Vladimir: "Vladimir",
      Volibear: "Volibear",
      Warwick: "Warwick",
      Wukong: "MonkeyKing",
      Xayah: "Xayah",
      Xerath: "Xerath",
      "Xin Zhao": "XinZhao",
      Yasuo: "Yasuo",
      Yone: "Yone",
      Yorick: "Yorick",
      Yuumi: "Yuumi",
      Zac: "Zac",
      Zed: "Zed",
      Zeri: "Zeri",
      Ziggs: "Ziggs",
      Zilean: "Zilean",
      Zoe: "Zoe",
      Zyra: "Zyra",
    };
    return keyMap[championName] || championName.replace(/[^a-zA-Z0-9]/g, "");
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

    // FIX: Merge with full data from championsDatabase if available
    let fullChampion = champion;
    if (window.championsDatabase && champion.name) {
      const foundRegion = window.championsDatabase.regions.find(
        (region) =>
          region.existingChampions?.some((c) => c.name === champion.name) ||
          region.newChampions?.some((c) => c.name === champion.name)
      );

      if (foundRegion) {
        const fullChampionData =
          foundRegion.existingChampions?.find(
            (c) => c.name === champion.name
          ) || foundRegion.newChampions?.find((c) => c.name === champion.name);

        if (fullChampionData) {
          console.log(
            "✅ Found full champion data in database:",
            fullChampionData.name
          );
          console.log("Full data skills:", fullChampionData.skills);
          console.log(
            "Full data specialFeatures:",
            fullChampionData.specialFeatures
          );
          console.log("Full data fullLore:", fullChampionData.fullLore);

          // Merge the data - keep some fields from champion (like stats from API) but prioritize database data
          fullChampion = {
            ...champion, // Keep API data (stats, etc.)
            ...fullChampionData, // Override with database data (lore, skills, etc.)
            regionName: champion.regionName, // Keep the regionName from the passed champion
          };

          console.log("✅ Merged champion data:", fullChampion.name);
          console.log("Merged skills:", fullChampion.skills);
          console.log("Merged specialFeatures:", fullChampion.specialFeatures);
        }
      }
    }

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

    // Use fullChampion for all modal content
    champion = fullChampion;

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
      console.log("✅ Hiển thị Special Features cho", champion.name);
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
    } else {
      console.log("❌ Không có Special Features cho", champion.name);
    }

    // Debug logging for Fun Facts and Special Features
    console.log("=== DEBUG SPECIAL CONTENT ===");
    console.log("Champion specialFeatures:", champion.specialFeatures);
    console.log("Champion funFacts:", champion.funFacts);
    console.log(
      "Champion fullLore length:",
      champion.fullLore ? champion.fullLore.length : "N/A"
    );

    // Fun Facts display
    let funFactsHtml = "";
    if (champion.funFacts && champion.funFacts.length > 0) {
      funFactsHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-amber-300 mb-3">✨ Fun Facts:</h4>
          <ul class="list-disc list-inside space-y-2 text-sm text-slate-300">
            ${champion.funFacts
              .map(
                (fact) => `
              <li>${fact}</li>
            `
              )
              .join("")}
          </ul>
        </div>
      `;
    }

    // Additional info section - Enhanced with more attributes
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
    }    // Bỏ phần stats theo yêu cầu
    let statsHtml = "";// Abilities/Powers section if different from skills
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

    // Full lore section    // Always generate full lore HTML for right panel
    let fullLoreHtml = `
      <div class="mt-6">
        <h4 class="text-lg font-semibold text-purple-300 mb-3">${this.languageManager.getTranslation(
          "fullStory"
        )}:</h4>
        <div class="bg-purple-900/30 p-4 rounded-lg border border-purple-600/50 max-h-64 overflow-y-auto">
          <p class="text-sm text-purple-100 leading-relaxed whitespace-pre-line">${
            champion.fullLore || champion.lore || "Chưa có thông tin chi tiết về cốt truyện."
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
    }    // Lore connections panel with integrated relationships
    let loreConnectionsPanel = "";
    console.log("=== LORE CONNECTIONS DEBUG ===");
    console.log("Champion loreConnections:", champion.loreConnections);
    console.log("Champion relationships:", champion.relationships);
    
    // Always create lore connections panel
    let connectionsContent = "";
    
    // Add lore connections
    if (champion.loreConnections && champion.loreConnections.length > 0) {
      console.log("✅ Found loreConnections for", champion.name);
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
      console.log("✅ Found relationships for", champion.name);
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
    
    // If no connections found, add default message
    if (!connectionsContent.trim()) {
      console.log("❌ No connections found for", champion.name);
      connectionsContent = `
        <div class="bg-slate-600/50 p-3 rounded-md border border-purple-500/30">
          <p class="text-sm text-slate-300">Không có liên kết cốt truyện nào được ghi nhận.</p>
        </div>
      `;
    }
    
    loreConnectionsPanel = `
      <div class="bg-slate-700/50 p-4 rounded-lg mb-6">
        <h3 class="text-lg font-semibold text-purple-300 mb-4">🔗 Liên Kết Cốt Truyện & Mối Quan Hệ</h3>
        <div class="space-y-3">
          ${connectionsContent}
        </div>
      </div>
    `;

    // Fun Facts panel for right side - also check specialFeatures as backup
    let funFactsPanel = "";
    const factsData = champion.funFacts || champion.specialFeatures || [];
    console.log("=== FUN FACTS DEBUG ===");
    console.log("Champion funFacts:", champion.funFacts);
    console.log("Champion specialFeatures:", champion.specialFeatures);
    console.log("Final factsData:", factsData);
    console.log("factsData length:", factsData.length);

    if (factsData && factsData.length > 0) {
      console.log("✅ Hiển thị Fun Facts panel cho", champion.name);
      funFactsPanel = `
        <div class="bg-slate-700/50 p-4 rounded-lg">
          <h3 class="text-lg font-semibold text-amber-300 mb-4">✨ Fun Facts & Điểm Đặc Biệt</h3>
          <div class="bg-amber-900/30 p-4 rounded-lg border border-amber-600/50">
            <ul class="space-y-2 list-disc list-inside">
              ${factsData
                .map(
                  (fact) => `
                <li class="text-amber-100 text-sm leading-relaxed">${fact}</li>
              `
                )
                .join("")}
            </ul>
          </div>
        </div>
      `;
    } else {
      console.log("❌ Không có Fun Facts để hiển thị cho", champion.name);
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
                }                ${
                  champion.weaponSummary || champion.weapon
                    ? `
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <span class="text-cyan-300 font-semibold text-lg w-20">Vũ Khí:</span>
                    <span class="text-slate-300 text-lg">${
                      champion.weaponSummary || 'Không có thông tin chi tiết'
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
                <div class="mt-2 bg-slate-600/30 p-3 rounded-lg border border-blue-500/30 weapon-details ${!champion.weapon ? 'hidden' : ''}">
                  <p class="text-sm text-blue-100">${champion.weapon || 'Không có thông tin chi tiết về vũ khí.'}</p>
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
          
          <!-- Skills Section -->
          ${champion.skills && champion.skills.length > 0 ? `
          <div class="mt-6">
            <h4 class="text-lg font-semibold text-cyan-300 mb-3">🎯 Kỹ Năng</h4>
            <div class="space-y-2">
              ${champion.skills.map((skill, index) => `
                <div class="bg-slate-700 p-3 rounded-md border-l-4 border-cyan-500">
                  <p class="text-sm text-slate-300">${skill}</p>
                </div>
              `).join('')}
            </div>
          </div>
          ` : ''}
          
            ${gameplayHtml}
          ${statsHtml}
          ${skillsHtml}
          ${abilitiesHtml}          ${specialFeaturesHtml}
          ${funFactsHtml}
          ${this.getSkinSection(champion)}
          ${fullLoreHtml}
          ${notesHtml}
          
          ${
            champion.special
              ? '<div class="mt-6 p-4 bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg"><p class="text-sm text-white"><strong>🌟 Đặc biệt:</strong> Tướng có khả năng biến đổi giữa 4 dạng với cơ chế mua đồ tự động.</p></div>'
              : ""
          }
        </div>        <!-- Right panel for lore connections and fun facts -->
        <div class="lg:col-span-1">
          <!-- Full Lore Section -->
          <div class="bg-slate-700/50 p-4 rounded-lg mb-6">
            <h3 class="text-lg font-semibold text-purple-300 mb-4">� Cốt Truyện Đầy Đủ</h3>
            <div class="bg-purple-900/30 p-4 rounded-lg border border-purple-600/50 max-h-64 overflow-y-auto">
              <p class="text-sm text-purple-100 leading-relaxed whitespace-pre-line">
                ${champion.fullLore || champion.lore || "Thông tin cốt truyện đang được cập nhật."}
              </p>
            </div>
          </div>
          
          <!-- Lore Connections -->
          ${loreConnectionsPanel}
          
          <!-- Fun Facts & Special Features -->
          <div class="bg-slate-700/50 p-4 rounded-lg">
            ${this.getFunFactsAndSpecialFeaturesHtml(champion)}
          </div>
        </div>
      </div>
    `;
    console.log("Modal HTML generated:", modalBody.innerHTML);

    // Setup navigation state
    this.setupChampionNavigation(champion); // Store current champion for editing
    this.currentModalChampion = champion; // Always show edit button regardless of dev mode
    const editBtn = document.getElementById("modalEditButton");
    console.log("=== EDIT BUTTON DEBUG ===");
    console.log("Edit button element:", editBtn);
    console.log("Dev mode active:", this.devModeActive);

    if (editBtn) {
      editBtn.classList.remove("hidden");
      console.log("✅ Edit button shown");
    } else {
      console.error("❌ Edit button not found in DOM!");
    }

    modal.classList.remove("hidden");
  }

  closeModal() {
    document.getElementById("championModal")?.classList.add("hidden");
  }
  setupChampionNavigation(currentChampion) {
    console.log("=== SETUP NAVIGATION DEBUG ===");
    console.log("Current champion:", currentChampion.name);

    // Get current champions list based on current filters
    this.currentChampionsList = this.getCurrentFilteredChampions();
    console.log("Champions list length:", this.currentChampionsList.length);

    // Find current champion index
    this.currentChampionIndex = this.currentChampionsList.findIndex(
      (champ) => champ.name === currentChampion.name
    );
    console.log("Current champion index:", this.currentChampionIndex);

    // Update navigation buttons visibility
    this.updateNavigationButtons();
  }

  getCurrentFilteredChampions() {
    const allChampions = [];
    const database = window.championsDatabase || championsDatabase;

    // Get champions based on current filters
    database.regions.forEach((region) => {
      if (this.currentRegion === "all" || region.id === this.currentRegion) {
        if (this.currentChampionType === "old" && region.existingChampions) {
          region.existingChampions.forEach((champion) => {
            allChampions.push({
              ...champion,
              regionName: region.name,
              regionId: region.id,
            });
          });
        } else if (this.currentChampionType === "new" && region.newChampions) {
          region.newChampions.forEach((champion) => {
            allChampions.push({
              ...champion,
              regionName: region.name,
              regionId: region.id,
            });
          });
        }
      }
    });

    return allChampions;
  }

  updateNavigationButtons() {
    const prevBtn = document.getElementById("prevChampionBtn");
    const nextBtn = document.getElementById("nextChampionBtn");

    if (prevBtn && nextBtn) {
      // Show/hide buttons based on position
      if (this.currentChampionIndex <= 0) {
        prevBtn.style.opacity = "0.3";
        prevBtn.style.pointerEvents = "none";
      } else {
        prevBtn.style.opacity = "1";
        prevBtn.style.pointerEvents = "auto";
      }

      if (this.currentChampionIndex >= this.currentChampionsList.length - 1) {
        nextBtn.style.opacity = "0.3";
        nextBtn.style.pointerEvents = "none";
      } else {
        nextBtn.style.opacity = "1";
        nextBtn.style.pointerEvents = "auto";
      }
    }
  }
  navigateToChampion(direction) {
    console.log("=== NAVIGATION DEBUG ===");
    console.log("Current index:", this.currentChampionIndex);
    console.log("Current list length:", this.currentChampionsList.length);
    console.log("Direction:", direction);

    const newIndex = this.currentChampionIndex + direction;
    console.log("New index:", newIndex);

    if (newIndex >= 0 && newIndex < this.currentChampionsList.length) {
      const newChampion = this.currentChampionsList[newIndex];
      console.log("New champion:", newChampion.name);
      this.currentChampionIndex = newIndex;

      // Get full champion data from database
      this.openModal(newChampion);
    } else {
      console.log("❌ Navigation failed - index out of bounds");
    }
  }

  // Function to handle adding champions
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
      title.textContent = "Thêm Tướng Có Sẵn";
      skillsSection.classList.add("hidden");
    }

    modal.classList.remove("hidden");
  }

  closeAddChampionModal() {
    document.getElementById("addChampionModal")?.classList.add("hidden");
    // Clear form
    document.getElementById("addChampionForm")?.reset();
    this.clearSkillFields();
    this.clearFeatureFields();
  }

  // Helper functions for skills and features
  addSkillField() {
    const skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) return;

    const skillDiv = document.createElement("div");
    skillDiv.className = "skill-field flex items-center space-x-2";
    skillDiv.innerHTML = `
      <input type="text" class="skill-input flex-1 p-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-cyan-500" placeholder="Nhập kỹ năng">
      <button type="button" onclick="this.parentElement.remove()" class="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700">Xóa</button>
    `;
    skillsContainer.appendChild(skillDiv);
  }

  addFeatureField() {
    const featuresContainer = document.getElementById("featuresContainer");
    if (!featuresContainer) return;

    const featureDiv = document.createElement("div");
    featureDiv.className = "feature-field flex items-center space-x-2";
    featureDiv.innerHTML = `
      <input type="text" class="feature-input flex-1 p-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-cyan-500" placeholder="Nhập điểm đặc biệt">
      <button type="button" onclick="this.parentElement.remove()" class="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700">Xóa</button>
    `;
    featuresContainer.appendChild(featureDiv);
  }

  clearSkillFields() {
    const skillsContainer = document.getElementById("skillsContainer");
    if (skillsContainer) {
      skillsContainer.innerHTML = "";
    }
  }

  clearFeatureFields() {
    const featuresContainer = document.getElementById("featuresContainer");
    if (featuresContainer) {
      featuresContainer.innerHTML = "";
    }
  }

  // Additional helper methods that might be referenced
  simplifyGender(gender) {
    if (!gender) return "";

    const genderMap = {
      male: "Nam",
      female: "Nữ",
      "non-binary": "Khác",
      unknown: "Không rõ",
      other: "Khác",
    };

    return genderMap[gender.toLowerCase()] || gender;
  }
  getSkinSection(champion) {
    if (!window.skinService) return "";

    const championKey = this.getChampionKeyForAPI(champion.name);
    const skins = window.skinService.getSkinsForChampion(championKey);

    if (!skins || skins.length === 0) return "";

    return `
      <div class="mt-6">
        <h4 class="text-lg font-semibold text-blue-300 mb-3">🎨 Skins</h4>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
          ${skins
            .slice(0, 6)
            .map(
              (skin) => `
            <div class="bg-slate-700/50 p-3 rounded-lg">
              <img 
                src="${
                  skin.image ||
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE2OSIgdmlld0JveD0iMCAwIDMwMCAxNjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxNjkiIGZpbGw9IiM0NDQiLz48dGV4dCB4PSIxNTAiIHk9Ijg0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZmlsbD0iI2ZmZiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij4ke champion.name}</text></svg>"
                }" 
                alt="${skin.name}" 
                class="w-full h-20 object-cover rounded"
                loading="lazy"
                onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE2OSIgdmlld0JveD0iMCAwIDMwMCAxNjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxNjkiIGZpbGw9IiM0NDQiLz48dGV4dCB4PSIxNTAiIHk9Ijg0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZmlsbD0iI2ZmZiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij4ke champion.name}</text></svg>'"
              >
              <p class="text-xs text-slate-300 mt-2 truncate">${skin.name}</p>
              <p class="text-xs text-blue-400">${skin.rarity || "Standard"}</p>
            </div>
          `
            .join("")}
        </div>
        ${
          skins.length > 6
            ? `<p class="text-sm text-slate-400 mt-2">và ${
                skins.length - 6
              } skins khác...</p>`
            : ""
        }
      </div>
    `;
  }
  getFunFactsAndSpecialFeaturesHtml(champion) {
    // Combine fun facts from multiple possible sources
    let funFacts = [];
    
    // Add from funFacts array if it exists
    if (champion.funFacts && Array.isArray(champion.funFacts) && champion.funFacts.length > 0) {
      funFacts = [...funFacts, ...champion.funFacts];
    }
    
    // Add from specialFeatures array if it exists
    if (champion.specialFeatures && Array.isArray(champion.specialFeatures) && champion.specialFeatures.length > 0) {
      funFacts = [...funFacts, ...champion.specialFeatures];
    }
    
    // If no fun facts found, add placeholder data
    if (funFacts.length === 0) {
      funFacts = ["Thông tin đang được cập nhật.", "Điểm đặc biệt sẽ được bổ sung sau."];
    }

    return `
      <h3 class="text-lg font-semibold text-amber-300 mb-4">✨ Fun Facts & Điểm Đặc Biệt</h3>
      <div class="bg-amber-900/30 p-4 rounded-lg border border-amber-600/50">
        <ul class="space-y-2 list-disc list-inside">
          ${funFacts.map(fact => 
            `<li class="text-amber-100 text-sm leading-relaxed">${fact}</li>`
          ).join("")}
        </ul>
      </div>
    `;
  }
  getLoreConnectionDescription(championName, connectionName) {
    // Enhanced lore connection descriptions based on common Runeterra relationships
    const connectionType = this.detectConnectionType(championName, connectionName);
    
    switch(connectionType) {
      case "ally":
        return `${championName} và ${connectionName} là đồng minh trong nhiều cuộc chiến tại Runeterra.`;
      case "rival":
        return `${championName} và ${connectionName} có mối quan hệ đối địch và cạnh tranh.`;
      case "family":
        return `${championName} có mối quan hệ họ hàng/gia đình với ${connectionName}.`;
      case "mentor":
        return `${championName} từng được hướng dẫn hoặc có mối quan hệ thầy trò với ${connectionName}.`;
      case "enemy":
        return `${championName} và ${connectionName} là kẻ thù truyền kiếp.`;
      default:
        return `${championName} có mối liên kết cốt truyện với ${connectionName}. Chi tiết đang được cập nhật.`;
    }
  }
  
  detectConnectionType(champion1, champion2) {
    // This would ideally come from actual data, but for now we'll randomly assign a type
    // to demonstrate the feature
    const connectionTypes = ["ally", "rival", "family", "mentor", "enemy"];
    const randomIndex = Math.floor(Math.random() * connectionTypes.length);
    return connectionTypes[randomIndex];
  }

  // Handle form submissions and other functionality
  handleAddChampionExtended(e) {
    e.preventDefault();
    console.log("Add champion form submitted");
    // Implement champion addition logic here
  }

  // Additional placeholder methods that might be called
  downloadDatabase() {
    console.log("Download database clicked");
  }
  uploadDatabase() {
    console.log("Upload database clicked");
  }
  handleFileUpload(e) {
    console.log("File upload:", e.target.files);
  }
  resetDatabase() {
    console.log("Reset database clicked");
  }
  showStats() {
    console.log("Show stats clicked");
  }
  clearTranslationCache() {
    console.log("Clear translation cache clicked");
  }

  // Phương thức để làm mới dữ liệu skin
  async refreshSkinsData() {
    if (!window.skinService) {
      alert("Không thể tìm thấy dịch vụ quản lý skin!");
      return;
    }

    try {
      // Gọi phương thức làm mới dữ liệu từ SkinService
      await window.skinService.refreshSkinData();

      // Cập nhật giao diện nếu đang ở tab skin theme
      if (this.currentChampionType === "skinThemes") {
        this.loadChampions();
      }
    } catch (error) {
      console.error("❌ Lỗi khi làm mới dữ liệu skin:", error);
      alert("Có lỗi xảy ra khi cập nhật dữ liệu skin. Vui lòng thử lại sau.");
    }
  }

  // Dev Mode functions
  toggleDevMode() {
    if (!this.devModeActive) {
      this.devModeActive = true;
      this.addEditButtonsToCards();
      document.getElementById("editModeBtn").innerHTML =
        "<span>🔧</span><span>Thoát Dev</span>";
      document
        .getElementById("editModeBtn")
        .classList.remove("bg-yellow-600", "hover:bg-yellow-700");
      document
        .getElementById("editModeBtn")
        .classList.add("bg-red-600", "hover:bg-red-700");
      console.log("✅ Dev mode activated");
    } else {
      this.devModeActive = false;
      this.removeEditButtonsFromCards();
      document.getElementById("editModeBtn").innerHTML =
        "<span>✏️</span><span>Chế độ Dev</span>";
      document
        .getElementById("editModeBtn")
        .classList.remove("bg-red-600", "hover:bg-red-700");
      document
        .getElementById("editModeBtn")
        .classList.add("bg-yellow-600", "hover:bg-yellow-700");
      console.log("❌ Dev mode deactivated");
    }
  }

  addEditButtonsToCards() {
    document.querySelectorAll(".champion-card").forEach((card) => {
      if (!card.querySelector(".edit-champion-btn")) {
        const editBtn = document.createElement("button");
        editBtn.className =
          "edit-champion-btn absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded hover:bg-blue-700 transition-colors z-10";
        editBtn.innerHTML = "✏️";
        editBtn.title = "Sửa thông tin tướng";
        editBtn.onclick = (e) => {
          e.stopPropagation();
          const championName = card.querySelector("h3").textContent;
          this.openEditModalForChampion(championName);
        };
        card.style.position = "relative";
        card.appendChild(editBtn);
      }
    });
  }

  removeEditButtonsFromCards() {
    document
      .querySelectorAll(".edit-champion-btn")
      .forEach((btn) => btn.remove());
  }

  openEditModalForChampion(championName) {
    // Find the champion in database
    const champion = this.findChampionByName(championName);
    if (champion) {
      this.openEditModal(champion);
    } else {
      alert(`Không tìm thấy tướng: ${championName}`);
    }
  }

  findChampionByName(name) {
    const database = window.championsDatabase || championsDatabase;
    for (const region of database.regions) {
      const existingChamp = region.existingChampions?.find(
        (c) => c.name === name
      );
      if (existingChamp)
        return { ...existingChamp, regionId: region.id, type: "existing" };

      const newChamp = region.newChampions?.find((c) => c.name === name);
      if (newChamp) return { ...newChamp, regionId: region.id, type: "new" };
    }
    return null;
  }
  openEditModal(champion) {
    console.log("=== OPENING EDIT MODAL ===");
    const modal = document.getElementById("editChampionModal");
    if (!modal) {
      console.error("❌ Edit modal not found!");
      alert("Không tìm thấy form sửa tướng!");
      return;
    }

    try {
      // Store champion for editing
      this.currentEditingChampion = champion;
      console.log("Đang mở modal sửa cho tướng:", champion.name);
      console.log("Dữ liệu tướng:", champion);

      // Populate form with champion data
      this.populateEditForm(champion);

      // Hiển thị modal
      modal.classList.remove("hidden");
      console.log("✅ Đã mở modal sửa tướng thành công");

      // Cuộn lên đầu modal
      setTimeout(() => {
        const modalContent = modal.querySelector(".modal-content");
        if (modalContent) {
          modalContent.scrollTop = 0;
        }
      }, 100);
    } catch (error) {
      console.error("❌ Lỗi khi mở modal sửa tướng:", error);
      alert("Đã xảy ra lỗi khi mở form sửa tướng. Vui lòng thử lại.");
    }
  }
  populateEditForm(champion) {
    console.log("=== POPULATING EDIT FORM ===");

    // Fill basic info - mapping to actual HTML field IDs
    const fieldMappings = {
      editChampionName: "name",
      editChampionFullName: "fullName",
      editChampionIcon: "icon",
      editChampionRole: "role",
      editChampionSpecies: "species",
      editChampionGender: "gender",
      editChampionAge: "age",
      editChampionWeaponSummary: "weaponSummary",
      editChampionLore: "lore",
      editChampionFullLore: "fullLore",
      editChampionGameplay: "gameplay",
    };

    Object.entries(fieldMappings).forEach(([fieldId, propName]) => {
      const field = document.getElementById(fieldId);
      if (field) {
        // Đảm bảo vẫn hiển thị trường ngay cả khi giá trị là null/undefined
        field.value = champion[propName] || "";
        console.log(`Đã thiết lập ${fieldId} = ${field.value}`);
      } else {
        console.warn(`❌ Không tìm thấy trường ${fieldId}`);
      }
    });

    // Populate skills
    this.clearEditSkills();
    if (champion.skills && champion.skills.length > 0) {
      champion.skills.forEach((skill) => {
        this.addEditSkillField(
          typeof skill === "string"
            ? skill
            : `${skill.name}: ${skill.description}`
        );
      });
    }

    // Populate special features
    this.clearEditFeatures();
    if (champion.specialFeatures && champion.specialFeatures.length > 0) {
      champion.specialFeatures.forEach((feature) => {
        this.addEditFeatureField(feature);
      });
    }

    // Store champion data for later use
    this.currentEditingChampion = champion;
  }

  addEditSkillField(value = "") {
    const container = document.getElementById("editSkillsContainer");
    if (!container) return;

    const skillDiv = document.createElement("div");
    skillDiv.className = "skill-field flex items-center space-x-2";
    skillDiv.innerHTML = `
      <input type="text" class="skill-input flex-1 p-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-cyan-500" placeholder="Nhập kỹ năng" value="${value}">
      <button type="button" onclick="this.parentElement.remove()" class="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700">Xóa</button>
    `;
    container.appendChild(skillDiv);
  }

  addEditFeatureField(value = "") {
    const container = document.getElementByElementById("editFeaturesContainer");
    if (!container) return;

    const featureDiv = document.createElement("div");
    featureDiv.className = "feature-field flex items-center space-x-2";
    featureDiv.innerHTML = `
      <input type="text" class="feature-input flex-1 p-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-amber-500" placeholder="Nhập điểm đặc biệt" value="${value}">
      <button type="button" onclick="this.parentElement.remove()" class="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700">Xóa</button>
    `;
    container.appendChild(featureDiv);
  }

  addEditConnectionField(value = "") {
    const container = document.getElementById("editConnectionsContainer");
    if (!container) return;

    const connectionDiv = document.createElement("div");
    connectionDiv.className = "connection-field flex items-center space-x-2";
    connectionDiv.innerHTML = `
      <input type="text" class="connection-input flex-1 p-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-pink-500" placeholder="Nhập liên kết cốt truyện" value="${value}">
      <button type="button" onclick="this.parentElement.remove()" class="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700">Xóa</button>
    `;
    container.appendChild(connectionDiv);
  }

  closeEditModal() {
    document.getElementById("editChampionModal")?.classList.add("hidden");
    this.currentEditingChampion = null;
  }
  handleEditChampion(e) {
    e.preventDefault();
    console.log("=== HANDLING EDIT CHAMPION FORM ===");

    if (!this.currentEditingChampion) {
      alert("Không có tướng nào được chọn để sửa!");
      return;
    }

    try {
      // Thu thập dữ liệu từ form
      const formData = {};

      // Thu thập thông tin cơ bản
      const basicFields = [
        "name",
        "fullName",
        "icon",
        "role",
        "species",
        "gender",
        "age",
        "weaponSummary",
        "lore",
        "fullLore",
        "gameplay",
      ];

      basicFields.forEach((field) => {
        const inputId =
          "editChampion" + field.charAt(0).toUpperCase() + field.slice(1);
        const input = document.getElementById(inputId);
        if (input && input.value.trim()) {
          formData[field] = input.value.trim();
        }
      });

      // Thu thập kỹ năng
      formData.skills = [];
      document
        .querySelectorAll("#editSkillsContainer .skill-input")
        .forEach((input) => {
          if (input.value.trim()) {
            formData.skills.push(input.value.trim());
          }
        });

      // Thu thập điểm đặc biệt
      formData.specialFeatures = [];
      document
        .querySelectorAll("#editFeaturesContainer .feature-input")
        .forEach((input) => {
          if (input.value.trim()) {
            formData.specialFeatures.push(input.value.trim());
          }
        });

      // Thu thập liên kết cốt truyện
      formData.loreConnections = [];
      document
        .querySelectorAll("#editConnectionsContainer .connection-input")
        .forEach((input) => {
          if (input.value.trim()) {
            formData.loreConnections.push(input.value.trim());
          }
        });

      console.log("Collected form data:", formData);

      // Cập nhật tướng trong cơ sở dữ liệu
      const success = this.updateChampionInDatabase(
        this.currentEditingChampion,
        formData
      );

      if (success) {
        // Đóng modal và làm mới hiển thị
        this.closeEditModal();
        this.loadChampions();
        alert("✅ Đã cập nhật thông tin tướng thành công!");
      } else {
        alert("❌ Không thể cập nhật thông tin tướng. Vui lòng thử lại!");
      }
    } catch (error) {
      console.error("❌ Lỗi khi xử lý form sửa tướng:", error);
      alert("Đã xảy ra lỗi khi lưu thông tin tướng. Vui lòng thử lại.");
    }
  }
  collectEditFormData() {
    const data = {};

    // Basic fields - mapping to actual HTML field IDs
    const fieldMappings = {
      editChampionName: "name",
      editChampionFullName: "fullName",
      editChampionIcon: "icon",
      editChampionRole: "role",
      editChampionSpecies: "species",
      editChampionGender: "gender",
      editChampionAge: "age",
      editChampionWeaponSummary: "weaponSummary",
      editChampionLore: "lore",
      editChampionFullLore: "fullLore",
      editChampionGameplay: "gameplay",
    };

    Object.entries(fieldMappings).forEach(([fieldId, propName]) => {
      const field = document.getElementById(fieldId);
      if (field && field.value.trim()) {
        data[propName] = field.value.trim();
      }
    });

    // Skills
    data.skills = [];
    document
      .querySelectorAll("#editSkillsContainer .skill-input")
      .forEach((input) => {
        if (input.value.trim()) {
          data.skills.push(input.value.trim());
        }
      });

    // Special features
    data.specialFeatures = [];
    document
      .querySelectorAll("#editFeaturesContainer .feature-input")
      .forEach((input) => {
        if (input.value.trim()) {
          data.specialFeatures.push(input.value.trim());
        }
      });

    // Lore connections
    data.loreConnections = [];
    document
      .querySelectorAll("#editConnectionsContainer .connection-input")
      .forEach((input) => {
        if (input.value.trim()) {
          data.loreConnections.push(input.value.trim());
        }
      });

    return data;
  }
  updateChampionInDatabase(champion, newData) {
    console.log("=== UPDATING CHAMPION IN DATABASE ===");
    console.log("Updating champion:", champion.name);
    console.log("With new data:", newData);

    try {
      const database = window.championsDatabase || championsDatabase;
      if (!database || !database.regions) {
        console.error("❌ Database or database.regions not found!");
        return false;
      }

      // Tìm vùng và tướng
      let found = false;

      for (const region of database.regions) {
        // Kiểm tra trong danh sách tướng cũ
        if (region.existingChampions) {
          const championIndex = region.existingChampions.findIndex(
            (c) => c.name === champion.name
          );
          if (championIndex !== -1) {
            // Cập nhật dữ liệu tướng
            Object.assign(region.existingChampions[championIndex], newData);
            region.existingChampions[championIndex].lastUpdated =
              new Date().toISOString();
            console.log(
              `✅ Đã cập nhật tướng ${champion.name} trong vùng ${region.name} (Tướng cũ)`
            );
            found = true;
            break;
          }
        }

        // Kiểm tra trong danh sách tướng mới
        if (region.newChampions) {
          const championIndex = region.newChampions.findIndex(
            (c) => c.name === champion.name
          );
          if (championIndex !== -1) {
            // Cập nhật dữ liệu tướng
            Object.assign(region.newChampions[championIndex], newData);
            region.newChampions[championIndex].lastUpdated =
              new Date().toISOString();
            console.log(
              `✅ Đã cập nhật tướng ${champion.name} trong vùng ${region.name} (Tướng mới)`
            );
            found = true;
            break;
          }
        }
      }

      if (!found) {
        console.error(`❌ Không tìm thấy tướng ${champion.name} để cập nhật`);
      }

      return found;
    } catch (error) {
      console.error("❌ Lỗi khi cập nhật tướng trong cơ sở dữ liệu:", error);
      return false;
    }
  }
  editCurrentChampion() {
    console.log("=== EDIT CURRENT CHAMPION ===");

    // Kiểm tra xem có tướng hiện tại không
    if (!this.currentModalChampion) {
      console.error("No current modal champion to edit!");
      alert("Không thể sửa tướng - không có dữ liệu tướng hiện tại");
      return;
    }

    console.log("Current modal champion:", this.currentModalChampion);

    // Lấy modal và form
    const modal = document.getElementById("editChampionModal");
    if (!modal) {
      console.error("Edit modal not found!");
      alert("Không tìm thấy form sửa tướng!");
      return;
    }

    // Lưu tướng đang chỉnh sửa
    this.currentEditingChampion = this.currentModalChampion;

    // Điền thông tin tướng vào form
    this.fillEditForm(this.currentModalChampion);

    // Hiển thị modal
    modal.classList.remove("hidden");
    console.log("✅ Đã mở modal sửa tướng thành công");
  }

  fillEditForm(champion) {
    console.log("Filling edit form for:", champion.name);

    // Điền thông tin cơ bản
    const basicFields = {
      editChampionName: champion.name || "",
      editChampionFullName: champion.fullName || "",
      editChampionIcon: champion.icon || "",
      editChampionRole: champion.role || "",
      editChampionSpecies: champion.species || "",
      editChampionGender: champion.gender || "",
      editChampionAge: champion.age || "",
      editChampionWeaponSummary: champion.weaponSummary || "",
      editChampionLore: champion.lore || "",
      editChampionFullLore: champion.fullLore || "",
      editChampionGameplay: champion.gameplay || "",
    };

    // Điền các trường vào form
    Object.entries(basicFields).forEach(([fieldId, value]) => {
      const field = document.getElementById(fieldId);
      if (field) {
        field.value = value;
      }
    });

    // Xóa và thêm lại các kỹ năng
    const skillsContainer = document.getElementById("editSkillsContainer");
    if (skillsContainer) {
      skillsContainer.innerHTML = "";
      if (champion.skills && champion.skills.length > 0) {
        champion.skills.forEach((skill) => {
          this.addEditSkillField(
            typeof skill === "string"
              ? skill
              : `${skill.name}: ${skill.description}`
          );
        });
      }
    }

    // Xóa và thêm lại các điểm đặc biệt
    const featuresContainer = document.getElementById("editFeaturesContainer");
    if (featuresContainer) {
      featuresContainer.innerHTML = "";
      if (champion.specialFeatures && champion.specialFeatures.length > 0) {
        champion.specialFeatures.forEach((feature) => {
          this.addEditFeatureField(feature);
        });
      }
    }

    // Xóa và thêm lại các liên kết cốt truyện
    const connectionsContainer = document.getElementById(
      "editConnectionsContainer"
    );
    if (connectionsContainer) {
      connectionsContainer.innerHTML = "";
      if (champion.loreConnections && champion.loreConnections.length > 0) {
        champion.loreConnections.forEach((connection) => {
          this.addEditConnectionField(connection);
        });
      }
    }
  }

  // Mở cửa sổ chỉnh sửa pop-up
  openFloatingEditWindow() {
    console.log("=== OPENING FLOATING EDIT WINDOW ===");
    
    // Kiểm tra xem có tướng hiện tại không
    if (!this.currentModalChampion) {
      console.error("No current modal champion to edit!");
      alert("Không thể sửa tướng - không có dữ liệu tướng hiện tại");
      return;
    }
    
    console.log("Current modal champion:", this.currentModalChampion);
    
    // Lấy cửa sổ pop-up
    const floatingWindow = document.getElementById("floatingEditWindow");
    if (!floatingWindow) {
      console.error("❌ Floating edit window not found!");
      alert("Không tìm thấy cửa sổ sửa tướng!");
      return;
    }
    
    try {
      // Lưu tướng đang chỉnh sửa
      this.currentEditingChampion = this.currentModalChampion;
      
      // Điền thông tin tướng vào form
      this.fillFloatingEditForm(this.currentModalChampion);
      
      // Hiển thị cửa sổ pop-up
      floatingWindow.classList.add("active");
      console.log("✅ Đã mở cửa sổ chỉnh sửa tướng");
      
      // Đóng modal chi tiết tướng
      this.closeModal();
      
    } catch (error) {
      console.error("❌ Lỗi khi mở cửa sổ chỉnh sửa tướng:", error);
      alert("Đã xảy ra lỗi khi mở form sửa tướng. Vui lòng thử lại.");
    }
  }
  
  // Điền thông tin vào form chỉnh sửa nổi
  fillFloatingEditForm(champion) {
    console.log("Filling floating edit form for:", champion.name);

    // Điền thông tin cơ bản
    const basicFields = {
      "floatingEditName": champion.name || "",
      "floatingEditFullName": champion.fullName || "",
      "floatingEditIcon": champion.icon || "",
      "floatingEditRole": champion.role || "",
      "floatingEditSpecies": champion.species || "",
      "floatingEditGender": champion.gender || "",
      "floatingEditAge": champion.age || "",
      "floatingEditWeaponSummary": champion.weaponSummary || "",
      "floatingEditLore": champion.lore || "",
      "floatingEditFullLore": champion.fullLore || "",
      "floatingEditGameplay": champion.gameplay || "",
    };

    // Điền các trường vào form
    Object.entries(basicFields).forEach(([fieldId, value]) => {
      const field = document.getElementById(fieldId);
      if (field) {
        field.value = value;
        console.log(`Đã điền ${fieldId}: ${value}`);
      } else {
        console.warn(`⚠️ Không tìm thấy trường ${fieldId}`);
      }
    });

    // Xóa và thêm lại các kỹ năng
    const skillsContainer = document.getElementById("floatingEditSkillsContainer");
    if (skillsContainer) {
      skillsContainer.innerHTML = "";
      if (champion.skills && champion.skills.length > 0) {
        champion.skills.forEach((skill) => {
          this.addFloatingSkillField(
            typeof skill === "string"
              ? skill
              : `${skill.name}: ${skill.description}`
          );
        });
      }
    }

    // Xóa và thêm lại các điểm đặc biệt
    const featuresContainer = document.getElementById("floatingEditFeaturesContainer");
    if (featuresContainer) {
      featuresContainer.innerHTML = "";
      if (champion.specialFeatures && champion.specialFeatures.length > 0) {
        champion.specialFeatures.forEach((feature) => {
          this.addFloatingFeatureField(feature);
        });
      }
    }

    // Xóa và thêm lại các liên kết cốt truyện
    const connectionsContainer = document.getElementById("floatingEditConnectionsContainer");
    if (connectionsContainer) {
      connectionsContainer.innerHTML = "";
      if (champion.loreConnections && champion.loreConnections.length > 0) {
        champion.loreConnections.forEach((connection) => {
          this.addFloatingConnectionField(connection);
        });
      }
    }
  }
  
  // Thêm trường kỹ năng vào form nổi  addFloatingSkillField(value = "") {
    const container = document.getElementById("floatingEditSkillsContainer");
    if (!container) {
      console.error("❌ Container floatingEditSkillsContainer not found!");
      return;
    }

    const skillDiv = document.createElement("div");
    skillDiv.className = "skill-field flex items-center space-x-2 mb-2";
    
    // Escape the value to prevent HTML injection
    const escapedValue = value.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    skillDiv.innerHTML = `
      <input type="text" class="skill-input flex-1 p-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-cyan-500" placeholder="Nhập kỹ năng" value="${escapedValue}">
      <button type="button" class="remove-btn bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700">Xóa</button>
    `;
    
    // Add event listener for remove button
    const removeBtn = skillDiv.querySelector(".remove-btn");
    if (removeBtn) {
      removeBtn.addEventListener("click", () => skillDiv.remove());
    }
    
    container.appendChild(skillDiv);
  }
  
  // Thêm trường đặc điểm vào form nổi  addFloatingFeatureField(value = "") {
    const container = document.getElementById("floatingEditFeaturesContainer");
    if (!container) {
      console.error("❌ Container floatingEditFeaturesContainer not found!");
      return;
    }

    const featureDiv = document.createElement("div");
    featureDiv.className = "feature-field flex items-center space-x-2 mb-2";
    
    // Escape the value to prevent HTML injection
    const escapedValue = value.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    featureDiv.innerHTML = `
      <input type="text" class="feature-input flex-1 p-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-amber-500" placeholder="Nhập điểm đặc biệt" value="${escapedValue}">
      <button type="button" class="remove-btn bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700">Xóa</button>
    `;
    
    // Add event listener for remove button
    const removeBtn = featureDiv.querySelector(".remove-btn");
    if (removeBtn) {
      removeBtn.addEventListener("click", () => featureDiv.remove());
    }
    
    container.appendChild(featureDiv);
  }
  
  // Thêm trường liên kết vào form nổi  addFloatingConnectionField(value = "") {
    const container = document.getElementById("floatingEditConnectionsContainer");
    if (!container) {
      console.error("❌ Container floatingEditConnectionsContainer not found!");
      return;
    }

    const connectionDiv = document.createElement("div");
    connectionDiv.className = "connection-field flex items-center space-x-2 mb-2";
    
    // Escape the value to prevent HTML injection
    const escapedValue = value.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    connectionDiv.innerHTML = `
      <input type="text" class="connection-input flex-1 p-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-pink-500" placeholder="Nhập liên kết cốt truyện" value="${escapedValue}">
      <button type="button" class="remove-btn bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700">Xóa</button>
    `;
    
    // Add event listener for remove button
    const removeBtn = connectionDiv.querySelector(".remove-btn");
    if (removeBtn) {
      removeBtn.addEventListener("click", () => connectionDiv.remove());
    }
    
    container.appendChild(connectionDiv);
  }
  
  // Đóng cửa sổ chỉnh sửa nổi  closeFloatingEditWindow() {
    console.log("=== CLOSING FLOATING EDIT WINDOW ===");
    
    const floatingWindow = document.getElementById("floatingEditWindow");
    if (floatingWindow) {
      floatingWindow.classList.remove("active");
      console.log("✅ Đã đóng cửa sổ chỉnh sửa tướng");
    } else {
      console.warn("⚠️ Không tìm thấy cửa sổ chỉnh sửa tướng khi đóng");
    }
    
    // Reset current editing champion
    this.currentEditingChampion = null;
      // Hiển thị lại modal chi tiết tướng
    if (this.currentModalChampion) {
      this.openModal(this.currentModalChampion);
    }
  }
  
  // Thu thập dữ liệu từ form chỉnh sửa nổi
  collectFloatingEditFormData() {
    const formData = {};
    
    // Thu thập thông tin cơ bản
    const basicFields = [
      { id: "floatingEditName", field: "name" },
      { id: "floatingEditFullName", field: "fullName" },
      { id: "floatingEditIcon", field: "icon" },
      { id: "floatingEditRole", field: "role" },
      { id: "floatingEditSpecies", field: "species" },
      { id: "floatingEditGender", field: "gender" },
      { id: "floatingEditAge", field: "age" },
      { id: "floatingEditWeaponSummary", field: "weaponSummary" },
      { id: "floatingEditLore", field: "lore" },
      { id: "floatingEditFullLore", field: "fullLore" },
      { id: "floatingEditGameplay", field: "gameplay" }
    ];
    
    basicFields.forEach(({ id, field }) => {
      const input = document.getElementById(id);
      if (input && input.value.trim()) {
        formData[field] = input.value.trim();
      }
    });
    
    // Thu thập kỹ năng
    formData.skills = [];
    document.querySelectorAll("#floatingEditSkillsContainer .skill-input").forEach(input => {
      if (input.value.trim()) {
        formData.skills.push(input.value.trim());
      }
    });
    
    // Thu thập điểm đặc biệt
    formData.specialFeatures = [];
    document.querySelectorAll("#floatingEditFeaturesContainer .feature-input").forEach(input => {
      if (input.value.trim()) {
        formData.specialFeatures.push(input.value.trim());
      }
    });
    
    // Thu thập liên kết cốt truyện
    formData.loreConnections = [];
    document.querySelectorAll("#floatingEditConnectionsContainer .connection-input").forEach(input => {
      if (input.value.trim()) {
        formData.loreConnections.push(input.value.trim());
      }
    });
    
    return formData;
  }
  
  // Lưu dữ liệu từ form chỉnh sửa nổi
  saveFloatingEditForm() {
    console.log("=== SAVING FLOATING EDIT FORM ===");
    
    if (!this.currentEditingChampion) {
      alert("Không có tướng nào được chọn để sửa!");
      return;
    }
    
    try {
      // Thu thập dữ liệu form
      const formData = this.collectFloatingEditFormData();
      console.log("Collected form data:", formData);
      
      // Kiểm tra dữ liệu bắt buộc
      if (!formData.name || !formData.icon || !formData.role || !formData.lore) {
        alert("Vui lòng điền đầy đủ các trường bắt buộc: Tên, Icon, Vai Trò, và Cốt Truyện!");
        return;
      }
      
      // Cập nhật tướng trong cơ sở dữ liệu
      const success = this.updateChampionInDatabase(this.currentEditingChampion, formData);
      
      if (success) {
        // Đóng cửa sổ và làm mới hiển thị
        this.closeFloatingEditWindow();
        this.loadChampions();
        
        // Hiển thị thông báo thành công
        this.showNotification("✅ Đã cập nhật thông tin tướng thành công!");
      } else {
        alert("❌ Không thể cập nhật thông tin tướng. Vui lòng thử lại!");
      }
    } catch (error) {
      console.error("❌ Lỗi khi lưu form:", error);
      alert("Đã xảy ra lỗi khi lưu thông tin tướng. Vui lòng thử lại.");
    }
  }
  
  // Hiển thị thông báo
  showNotification(message, type = "success", duration = 3000) {
    let notificationDiv = document.getElementById("appNotification");
    
    if (!notificationDiv) {
      notificationDiv = document.createElement("div");
      notificationDiv.id = "appNotification";
      notificationDiv.style.position = "fixed";
      notificationDiv.style.top = "20px";
      notificationDiv.style.right = "20px";
      notificationDiv.style.padding = "15px 25px";
      notificationDiv.style.borderRadius = "8px";
      notificationDiv.style.zIndex = "9999";
      notificationDiv.style.transition = "all 0.3s ease";
      notificationDiv.style.opacity = "0";
      notificationDiv.style.transform = "translateY(-20px)";
      document.body.appendChild(notificationDiv);
    }
    
    // Thiết lập màu sắc theo loại thông báo
    switch(type) {
      case "success":
        notificationDiv.style.backgroundColor = "#10B981";
        break;
      case "error":
        notificationDiv.style.backgroundColor = "#EF4444";
        break;
      case "warning":
        notificationDiv.style.backgroundColor = "#F59E0B";
        break;
      default:
        notificationDiv.style.backgroundColor = "#3B82F6";
    }
    
    notificationDiv.style.color = "white";
    notificationDiv.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
    notificationDiv.textContent = message;
    
    // Hiện thông báo
    setTimeout(() => {    notificationDiv.style.opacity = "1";
    notificationDiv.style.transform = "translateY(0)";
    notificationDiv.classList.add("show");
    }, 10);
    
    // Tự động ẩn sau thời gian chỉ định    setTimeout(() => {
      notificationDiv.style.opacity = "0";
      notificationDiv.style.transform = "translateY(-20px)";
      notificationDiv.classList.remove("show");
      
      setTimeout(() => {
        if (notificationDiv.parentNode) {
          notificationDiv.parentNode.removeChild(notificationDiv);
        }
      }, 300);
    }, duration);
  }
}

// Initialize the app
window.addEventListener("DOMContentLoaded", () => {
  window.runeterra = new RuneterraApp();
});

// Function to show weapon details when clicking the "Chi tiết" button
function showWeaponDetail(weaponInfo, buttonElement) {
  // Find the weapon details container (the next element after the parent div of the button)
  const parentDiv = buttonElement.closest('.flex.items-center.justify-between');
  const weaponDetailsDiv = parentDiv.nextElementSibling;
  
  if (weaponDetailsDiv && weaponDetailsDiv.classList.contains('weapon-details')) {
    // Toggle visibility of the weapon details
    if (weaponDetailsDiv.classList.contains('hidden')) {
      weaponDetailsDiv.classList.remove('hidden');
      buttonElement.textContent = 'Ẩn chi tiết';
    } else {
      weaponDetailsDiv.classList.add('hidden');
      buttonElement.textContent = 'Chi tiết';
    }
  }
}
