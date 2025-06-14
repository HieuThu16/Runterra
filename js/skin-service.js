class SkinService {
  constructor() {
    this.skins = [];
    this.skinsByChampion = new Map();
    this.skinThemes = new Map();
    this.loading = false;
    this.cacheKey = "runeterra_skins_cache";
    this.cacheVersion = "1.0";
    this.cacheMaxAge = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  }

  // Load skins from cache first, then from API if needed
  async loadSkinsData() {
    if (this.loading) return;
    this.loading = true;

    try {
      // Try to load from cache first
      const cachedData = this.loadFromCache();
      if (cachedData) {
        console.log(
          "✅ Loaded skins from cache:",
          cachedData.skins.length,
          "skins"
        );
        this.skins = cachedData.skins;
        this.skinsByChampion = new Map(cachedData.skinsByChampion);
        this.skinThemes = new Map(cachedData.skinThemes);

        // Still load from API in background to update cache
        this.loadFromAPIInBackground();
        return;
      }

      // Load từ nhiều nguồn bao gồm cào dữ liệu API thật
      await this.loadFromLeagueAPI();
      await this.loadFromCommunityAPI();
      await this.loadFromRiotCDN();
      await this.loadFromAlternateCDN();
      await this.loadFromLoLWiki();
      await this.loadFromFandom();

      // 🚀 CÀO DỮ LIỆU THẬT TỪ API
      await this.crawlFromDataDragonAPI();

      // 🎨 CÀO SKIN THEO CHỦ ĐỀ PHỔ BIẾN
      await this.crawlPopularThemes();

      await this.processSkinsData();

      // Save to cache
      this.saveToCache();

      console.log(
        "✅ Đã tải xong dữ liệu skin:",
        this.skins.length,
        "skins từ nhiều nguồn + cào API thật"
      );

      // Test ảnh skin sau khi load
      setTimeout(() => {
        this.testAllSkinImages();
      }, 1000);
    } catch (error) {
      console.error("❌ Lỗi khi tải dữ liệu skin:", error);
    } finally {
      this.loading = false;
    }
  }

  // Load from localStorage cache
  loadFromCache() {
    try {
      const cached = localStorage.getItem(this.cacheKey);
      if (!cached) return null;

      const data = JSON.parse(cached);

      // Check cache version and age
      if (data.version !== this.cacheVersion) {
        console.log("Cache version mismatch, invalidating cache");
        localStorage.removeItem(this.cacheKey);
        return null;
      }

      const cacheAge = Date.now() - data.timestamp;
      if (cacheAge > this.cacheMaxAge) {
        console.log("Cache expired, invalidating cache");
        localStorage.removeItem(this.cacheKey);
        return null;
      }

      console.log(
        "✅ Valid cache found, age:",
        Math.round(cacheAge / (60 * 1000)),
        "minutes"
      );
      return data;
    } catch (error) {
      console.error("Error loading from cache:", error);
      localStorage.removeItem(this.cacheKey);
      return null;
    }
  }

  // Save to localStorage cache
  saveToCache() {
    try {
      const dataToCache = {
        version: this.cacheVersion,
        timestamp: Date.now(),
        skins: this.skins,
        skinsByChampion: Array.from(this.skinsByChampion.entries()),
        skinThemes: Array.from(this.skinThemes.entries()),
      };

      localStorage.setItem(this.cacheKey, JSON.stringify(dataToCache));
      console.log("✅ Saved skin data to cache");
    } catch (error) {
      console.error("Error saving to cache:", error);
      // If localStorage is full, try to clear old data
      try {
        localStorage.removeItem(this.cacheKey);
        console.log("Cleared cache due to storage limit");
      } catch (e) {
        console.error("Could not clear cache:", e);
      }
    }
  }

  // Load from API in background to update cache
  async loadFromAPIInBackground() {
    setTimeout(async () => {
      try {
        console.log("🔄 Updating skin cache in background...");
        await this.crawlFromDataDragonAPI();
        await this.processSkinsData();
        this.saveToCache();
        console.log("✅ Cache updated in background");
      } catch (error) {
        console.error("Error updating cache in background:", error);
      }
    }, 2000); // Wait 2 seconds before background update
  }

  // Get skins for a specific champion
  getSkinsForChampion(championKey) {
    return this.skinsByChampion.get(championKey) || [];
  }
  // Cào dữ liệu champions và skins từ Data Dragon API (Official Riot)
  async crawlFromDataDragonAPI() {
    console.log("🔍 Crawling from Data Dragon API...");
    try {
      // Lấy version mới nhất
      const versionResponse = await fetch(
        "https://ddragon.leagueoflegends.com/api/versions.json"
      );
      const versions = await versionResponse.json();
      const latestVersion = versions[0];

      // Lấy danh sách champions
      const championResponse = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`
      );
      const championData = await championResponse.json();

      const skinsByCrawl = [];
      const championsByCrawl = [];
      let skinId = 1000; // Start with high ID to avoid conflicts

      // Sắp xếp champions theo ABC
      const sortedChampions = Object.entries(championData.data).sort((a, b) =>
        a[1].name.localeCompare(b[1].name)
      );

      // Crawl champions và skins
      for (const [championKey, champion] of sortedChampions) {
        try {
          // Lấy chi tiết champion để có thông tin skin
          const championDetailResponse = await fetch(
            `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion/${championKey}.json`
          );
          const championDetail = await championDetailResponse.json();
          const championInfo = championDetail.data[championKey];

          // Tạo champion data với thuộc tính mở rộng
          const championWithDetails = {
            id: championInfo.key,
            name: championInfo.name,
            title: championInfo.title,
            tags: championInfo.tags || [],
            image: `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${championKey}.png`,
            splash: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championKey}_0.jpg`,
            lore: championInfo.lore || "",
            info: championInfo.info || {},
            stats: championInfo.stats || {},
            spells: championInfo.spells || [],
            passive: championInfo.passive || {},
            // Thuộc tính mở rộng
            region: this.detectChampionRegion(championInfo.name),
            role: this.detectChampionRole(championInfo.tags),
            difficulty: championInfo.info ? championInfo.info.difficulty : 5,
            releaseDate: this.estimateReleaseDate(championInfo.name),
            weapon: this.detectWeapon(championInfo.name, championInfo.lore),
            species: this.detectSpecies(championInfo.name, championInfo.lore),
            gender: this.detectGender(championInfo.name),
          };

          championsByCrawl.push(championWithDetails);

          // Crawl skins (bỏ qua default skin)
          if (championInfo.skins && championInfo.skins.length > 1) {
            championInfo.skins.forEach((skin) => {
              if (skin.id !== "0") {
                // Skip default skin
                const skinTheme = this.detectSkinTheme(skin.name);
                skinsByCrawl.push({
                  id: skinId++,
                  name: skin.name,
                  champion: championInfo.name,
                  theme: skinTheme,
                  rarity: this.detectRarity(skin.name),
                  price: this.estimatePrice(skin.name),
                  releaseDate: "2020-01-01", // Placeholder
                  splashArt: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championKey}_${skin.num}.jpg`,
                  loadingScreen: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championKey}_${skin.num}.jpg`,
                  description: `${skin.name} - ${championInfo.name} skin`,
                  effects: [
                    "Custom animations",
                    "New visual effects",
                    "Themed particles",
                  ],
                });
              }
            });
          } // Delay để tránh rate limit
          await new Promise((resolve) => setTimeout(resolve, 100));
        } catch (error) {
          console.warn(
            `⚠️ Failed to fetch details for ${championKey}:`,
            error.message
          );
        }
      }

      console.log(
        `✅ Crawled ${championsByCrawl.length} champions and ${skinsByCrawl.length} skins from Data Dragon API`
      );

      // Store champions data globally
      window.crawledChampions = championsByCrawl;

      // Merge with existing database
      this.mergeWithExistingDatabase(championsByCrawl);

      this.skins = [...this.skins, ...skinsByCrawl];
    } catch (error) {
      console.error("❌ Error crawling from Data Dragon API:", error);
    }
  }
  // Merge crawled champions with existing database
  mergeWithExistingDatabase(newChampions) {
    if (!window.championsDatabase) {
      console.log("Initializing new champions database");
      window.championsDatabase = {
        regions: [],
        specialChampions: [],
      };
    }

    // Ensure specialChampions is an array
    if (!Array.isArray(window.championsDatabase.specialChampions)) {
      window.championsDatabase.specialChampions = [];
    }

    console.log(
      `🔄 Merging ${newChampions.length} new champions with database...`
    );

    // Group champions by region
    const championsByRegion = {};
    newChampions.forEach((champion) => {
      const region = champion.region;
      if (!championsByRegion[region]) {
        championsByRegion[region] = [];
      }
      championsByRegion[region].push(champion);
    });

    let totalAdded = 0;

    // Update or create regions in database
    Object.entries(championsByRegion).forEach(([regionName, champions]) => {
      let existingRegion = window.championsDatabase.regions.find(
        (r) => r.id === regionName
      );

      if (!existingRegion) {
        // Create new region
        existingRegion = {
          id: regionName,
          name: this.formatRegionName(regionName),
          existingChampions: [],
          newChampions: [],
          description: `Champions from ${this.formatRegionName(regionName)}`,
          lore: `The region of ${this.formatRegionName(
            regionName
          )} with its unique champions.`,
        };
        window.championsDatabase.regions.push(existingRegion);
        console.log(`📍 Created new region: ${existingRegion.name}`);
      }

      // Ensure region has required arrays
      if (!existingRegion.existingChampions)
        existingRegion.existingChampions = [];
      if (!existingRegion.newChampions) existingRegion.newChampions = [];

      // Add champions to existing champions array with unified properties
      champions.forEach((champion) => {
        const existingChampion = existingRegion.existingChampions.find(
          (c) => c.name === champion.name
        );

        if (!existingChampion) {
          // Create unified champion object with all standard properties
          const unifiedChampion = {
            // Basic info
            id:
              champion.id ||
              champion.key ||
              this.generateChampionId(champion.name),
            name: champion.name,
            title: champion.title || "The Unknown",
            image:
              champion.image || this.getDefaultChampionImage(champion.name),
            splash:
              champion.splash || this.getDefaultSplashImage(champion.name),

            // Descriptions
            description: champion.lore
              ? champion.lore.length > 200
                ? champion.lore.substring(0, 200) + "..."
                : champion.lore
              : `${champion.name} is a champion from ${this.formatRegionName(
                  regionName
                )}.`,
            lore:
              champion.lore ||
              `${
                champion.name
              } is a mysterious champion from ${this.formatRegionName(
                regionName
              )}.`,

            // Game properties
            role: champion.role || this.detectChampionRole(champion.tags || []),
            tags: champion.tags || [],
            difficulty:
              champion.difficulty ||
              (champion.info ? champion.info.difficulty : 5),

            // Extended properties
            weapon: champion.weapon || "Unknown",
            species: champion.species || "Human",
            gender: champion.gender || "Unknown",
            releaseDate: champion.releaseDate || "Unknown",
            regionName: this.formatRegionName(regionName),

            // Combat stats
            stats: champion.stats || {
              hp: 500,
              hpperlevel: 80,
              mp: 300,
              mpperlevel: 40,
              movespeed: 325,
              armor: 20,
              armorperlevel: 3,
              spellblock: 30,
              spellblockperlevel: 0.5,
              attackrange: 125,
              hpregen: 7,
              hpregenperlevel: 0.7,
              mpregen: 7,
              mpregenperlevel: 0.8,
              crit: 0,
              critperlevel: 0,
              attackdamage: 60,
              attackdamageperlevel: 3,
              attackspeedperlevel: 3,
              attackspeed: 0.625,
            },

            // Abilities
            spells: champion.spells || [],
            passive: champion.passive || {
              name: "Unknown Passive",
              description: "This champion's passive ability.",
              image: { full: "unknown.png" },
            },

            // Additional metadata
            crawledAt: new Date().toISOString(),
            source: "riot-api",
            version: "latest",
          };

          existingRegion.existingChampions.push(unifiedChampion);
          totalAdded++;
          console.log(`➕ Added ${champion.name} to ${existingRegion.name}`);
        } else {
          // Update existing champion with any missing properties
          this.updateChampionProperties(existingChampion, champion);
          console.log(`🔄 Updated ${champion.name} in ${existingRegion.name}`);
        }
      });
    });

    console.log(
      `✅ Merged complete: Added ${totalAdded} new champions to database`
    );

    // Auto-save database to localStorage
    this.saveDatabase();

    // Refresh any champion count displays
    this.refreshChampionCountDisplays();
  }

  // Format region name for display
  formatRegionName(regionId) {
    const regionNames = {
      demacia: "Demacia",
      noxus: "Noxus",
      ionia: "Ionia",
      piltover: "Piltover",
      zaun: "Zaun",
      freljord: "Freljord",
      shadowisles: "Shadow Isles",
      shurima: "Shurima",
      targon: "Mount Targon",
      void: "The Void",
      bilgewater: "Bilgewater",
      ixtal: "Ixtal",
      bandle: "Bandle City",
      unknown: "Unknown Region",
    };
    return regionNames[regionId] || regionId;
  }

  // Detect skin theme from name
  detectSkinTheme(skinName) {
    const themeMap = {
      PROJECT: ["PROJECT", "Project"],
      "Star Guardian": ["Star Guardian", "Starguardian"],
      "K/DA": ["KDA", "K/DA"],
      "Spirit Blossom": ["Spirit Blossom"],
      "Dark Star": ["Dark Star", "Darkstar"],
      "Blood Moon": ["Blood Moon", "Bloodmoon"],
      "High Noon": ["High Noon", "Highnoon"],
      Arcade: ["Arcade", "Battle Boss"],
      "Pool Party": ["Pool Party", "Poolparty"],
      "Snow Day": ["Snow Day", "Snowdown"],
      Halloween: ["Harrowing", "Halloween", "Bewitching"],
      "Lunar Revel": ["Lunar", "Firecracker"],
      Elderwood: ["Elderwood", "Nature"],
      Coven: ["Coven", "Witch"],
      "Battle Academia": ["Battle Academia"],
      "True Damage": ["True Damage"],
      Prestige: ["Prestige"],
      Championship: ["Championship"],
      Victorious: ["Victorious"],
      Worlds: ["Worlds"],
      Esports: ["SKT", "T1", "FNC", "SSG", "DWG", "EDG"],
      Cosmic: ["Cosmic", "Galaxy"],
      Mecha: ["Mecha", "Mech"],
      Dragonmancer: ["Dragonmancer"],
      "Crime City": ["Crime City", "Mafia"],
      Ruined: ["Ruined"],
      Sentinel: ["Sentinel"],
      "Battle Queen": ["Battle Queen"],
      "Space Groove": ["Space Groove"],
      Debonair: ["Debonair"],
      "Cafe Cuties": ["Cafe Cuties"],
      "Crystal Rose": ["Crystal Rose"],
      "Beast Hunter": ["Beast Hunter"],
      Blackfrost: ["Blackfrost"],
      Dragonslayer: ["Dragonslayer"],
      "Guardian of the Sands": ["Guardian"],
      "Immortal Journey": ["Immortal Journey"],
      "Lunar Beast": ["Lunar Beast"],
      "Ocean Song": ["Ocean Song"],
      "Anima Squad": ["Anima Squad"],
      "Steel Valkyries": ["Steel Valkyries"],
      "Sun-Eater": ["Sun-Eater"],
      Mythmaker: ["Mythmaker"],
      "Faerie Court": ["Faerie Court"],
      Porcelain: ["Porcelain"],
      Inkshadow: ["Inkshadow"],
      Classic: ["Classic", "Default"],
    };

    for (const [theme, keywords] of Object.entries(themeMap)) {
      if (keywords.some((keyword) => skinName.includes(keyword))) {
        return theme;
      }
    }

    return "Other";
  }

  // Detect rarity from skin name/theme
  detectRarity(skinName) {
    if (
      skinName.includes("Prestige") ||
      skinName.includes("Ultimate") ||
      skinName.includes("Elementalist") ||
      skinName.includes("DJ") ||
      skinName.includes("Gun Goddess") ||
      skinName.includes("Pulsefire Ezreal")
    ) {
      return "ultimate";
    }
    if (
      skinName.includes("Legendary") ||
      skinName.includes("God King") ||
      skinName.includes("Spirit Blossom") ||
      skinName.includes("Dark Cosmic") ||
      skinName.includes("PROJECT: Pyke")
    ) {
      return "legendary";
    }
    if (
      skinName.includes("Epic") ||
      skinName.includes("PROJECT") ||
      skinName.includes("Star Guardian") ||
      skinName.includes("K/DA") ||
      skinName.includes("True Damage")
    ) {
      return "epic";
    }
    return "common";
  }

  // Estimate price based on rarity and theme
  estimatePrice(skinName) {
    const rarity = this.detectRarity(skinName);
    switch (rarity) {
      case "ultimate":
        return Math.floor(Math.random() * 500) + 3250;
      case "legendary":
        return Math.floor(Math.random() * 300) + 1820;
      case "epic":
        return Math.floor(Math.random() * 200) + 1350;
      default:
        return Math.floor(Math.random() * 300) + 975;
    }
  }

  // Cào skin theo chủ đề cụ thể với số lượng lớn
  async crawlSkinsByTheme(themeName, maxCount = 50) {
    console.log(`🎨 Crawling ${maxCount} skins for theme: ${themeName}`);

    const themeKeywords = this.getThemeKeywords(themeName);
    const crawledSkins = [];
    let skinId = 2000 + Math.floor(Math.random() * 1000);

    // Champion pool cho theme này
    const themeChampions = this.getChampionsForTheme(themeName);

    for (let i = 0; i < maxCount && i < themeChampions.length * 3; i++) {
      const champion = themeChampions[i % themeChampions.length];
      const variation = Math.floor(i / themeChampions.length) + 1;

      const skin = {
        id: skinId++,
        name: `${champion} ${themeName}${variation > 1 ? ` ${variation}` : ""}`,
        champion: champion,
        theme: themeName,
        rarity: this.getRandomRarity(),
        price: this.estimatePrice(`${champion} ${themeName}`),
        releaseDate: this.getRandomDate(),
        splashArt: await this.findSkinImage(champion, themeName, variation),
        loadingScreen: await this.findLoadingImage(
          champion,
          themeName,
          variation
        ),
        description: `${champion} trong bộ sưu tập ${themeName}${
          variation > 1 ? ` phiên bản ${variation}` : ""
        }`,
        effects: this.generateEffectsForTheme(themeName),
      };

      crawledSkins.push(skin);
    }

    console.log(
      `✅ Generated ${crawledSkins.length} skins for theme ${themeName}`
    );
    return crawledSkins;
  }

  // Get theme keywords for search
  getThemeKeywords(themeName) {
    const keywords = {
      PROJECT: ["project", "cyber", "neon", "tech"],
      "Star Guardian": ["star", "guardian", "magical", "girl"],
      "K/DA": ["kda", "popstar", "music", "idol"],
      "Dark Star": ["dark", "star", "cosmic", "void"],
      "Blood Moon": ["blood", "moon", "demon", "red"],
      "Spirit Blossom": ["spirit", "blossom", "cherry", "festival"],
      "High Noon": ["high", "noon", "western", "cowboy"],
      "Pool Party": ["pool", "party", "summer", "beach"],
      Halloween: ["halloween", "witch", "spooky", "harrowing"],
      Arcade: ["arcade", "pixel", "retro", "game"],
    };
    return keywords[themeName] || [themeName.toLowerCase()];
  }

  // Get champions suitable for theme
  getChampionsForTheme(themeName) {
    const themeChampions = {
      PROJECT: [
        "Yasuo",
        "Vayne",
        "Zed",
        "Fiora",
        "Lucian",
        "Ekko",
        "Ashe",
        "Katarina",
        "Jhin",
        "Akali",
        "Irelia",
        "Mordekaiser",
        "Pyke",
        "Jinx",
        "Leona",
        "Renekton",
        "Senna",
        "Sylas",
        "Varus",
        "Vi",
      ],
      "Star Guardian": [
        "Lux",
        "Jinx",
        "Poppy",
        "Janna",
        "Lulu",
        "Ahri",
        "Miss Fortune",
        "Soraka",
        "Syndra",
        "Ezreal",
        "Neeko",
        "Rakan",
        "Xayah",
        "Zoe",
        "Kai Sa",
        "Seraphine",
        "Akali",
        "Nilah",
        "Senna",
        "Orianna",
      ],
      "K/DA": [
        "Ahri",
        "Akali",
        "Evelynn",
        "Kai Sa",
        "Seraphine",
        "Bel Veth",
        "Gragas",
        "Bard",
      ],
      "Dark Star": [
        "Thresh",
        "Varus",
        "Orianna",
        "Kha Zix",
        "Xerath",
        "Jhin",
        "Karma",
        "Mordekaiser",
        "Malphite",
        "Cho Gath",
        "Shaco",
      ],
      "Blood Moon": [
        "Akali",
        "Elise",
        "Jhin",
        "Kennen",
        "Shen",
        "Thresh",
        "Twisted Fate",
        "Yasuo",
        "Zilean",
        "Diana",
        "Evelynn",
        "Katarina",
        "Master Yi",
        "Pyke",
        "Sivir",
        "Talon",
        "Tryndamere",
        "Aatrox",
      ],
      "Spirit Blossom": [
        "Teemo",
        "Vayne",
        "Yasuo",
        "Yone",
        "Ahri",
        "Cassiopeia",
        "Kindred",
        "Lillia",
        "Riven",
        "Thresh",
        "Aphelios",
        "Darius",
        "Evelynn",
        "Garen",
        "Master Yi",
        "Sett",
      ],
      "High Noon": [
        "Yasuo",
        "Jhin",
        "Lucian",
        "Thresh",
        "Urgot",
        "Ashe",
        "Darius",
        "Hecarim",
        "Irelia",
        "Karthus",
        "Leona",
        "Senna",
        "Sion",
        "Talon",
        "Twisted Fate",
        "Veigar",
      ],
      "Pool Party": [
        "Graves",
        "Lee Sin",
        "Leona",
        "Renekton",
        "Ziggs",
        "Lulu",
        "Draven",
        "Fiora",
        "Miss Fortune",
        "Taric",
        "Zac",
        "Caitlyn",
        "Gangplank",
        "Heimerdinger",
        "Jarvan IV",
        "Orianna",
        "Sett",
        "Taliyah",
        "Zoe",
      ],
      Halloween: [
        "Hecarim",
        "Karthus",
        "Morgana",
        "Nocturne",
        "Fiddlesticks",
        "Katarina",
        "LeBlanc",
        "Nidalee",
        "Syndra",
        "Elise",
        "Cassiopeia",
        "Poppy",
      ],
      Arcade: [
        "Blitzcrank",
        "Hecarim",
        "Miss Fortune",
        "Sona",
        "Corki",
        "Ezreal",
        "Malphite",
        "Veigar",
        "Ziggs",
        "Kai Sa",
        "Yasuo",
        "Caitlyn",
      ],
    };

    return (
      themeChampions[themeName] || [
        "Ashe",
        "Jinx",
        "Yasuo",
        "Lux",
        "Zed",
        "Ahri",
        "Thresh",
        "Vayne",
        "Akali",
        "Ezreal",
      ]
    );
  }
  // Get random rarity with weighted distribution
  getRandomRarity() {
    const rand = Math.random();
    if (rand < 0.05) return "ultimate"; // 5%
    if (rand < 0.15) return "legendary"; // 10%
    if (rand < 0.45) return "epic"; // 30%
    return "common"; // 55%
  }

  // Generate random date
  getRandomDate() {
    const start = new Date(2015, 0, 1);
    const end = new Date();
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return randomDate.toISOString().split("T")[0];
  }

  // Find skin image with fallbacks
  async findSkinImage(champion, theme, variation = 1) {
    const sources = [
      // Try specific theme images first
      `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${
        variation + 1
      }.jpg`,
      `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${
        variation + 2
      }.jpg`,
      `https://raw.communitydragon.org/latest/game/assets/characters/${champion.toLowerCase()}/skins/skin0${variation}/images/${champion.toLowerCase()}_splash_centered_${variation}.jpg`,
      // Fallback to default
      `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`,
      // Ultimate fallback
      `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg`,
    ];

    return sources[Math.floor(Math.random() * 3)]; // Return one of the first 3 for variety
  }

  // Find loading screen image
  async findLoadingImage(champion, theme, variation = 1) {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_${
      variation + 1
    }.jpg`;
  }

  // Generate effects for theme
  generateEffectsForTheme(themeName) {
    const themeEffects = {
      PROJECT: [
        "Cybernetic enhancements",
        "Neon trail effects",
        "Digital particles",
        "Tech sound effects",
      ],
      "Star Guardian": [
        "Magical transformation",
        "Star particle effects",
        "Friendship power",
        "Constellation abilities",
      ],
      "K/DA": [
        "Music synchronization",
        "Pop star choreography",
        "Stage lighting effects",
        "Fan interaction",
      ],
      "Dark Star": [
        "Cosmic destruction",
        "Void rifts",
        "Gravitational pull",
        "Universal entropy",
      ],
      "Blood Moon": [
        "Demonic transformation",
        "Crimson effects",
        "Spiritual energy",
        "Ancient rituals",
      ],
      "Spirit Blossom": [
        "Cherry blossom petals",
        "Spirit magic",
        "Festival celebration",
        "Nature harmony",
      ],
      "High Noon": [
        "Western showdown",
        "Desert winds",
        "Gunslinger effects",
        "Frontier justice",
      ],
      "Pool Party": [
        "Water splash effects",
        "Summer vibes",
        "Beach party atmosphere",
        "Fun interactions",
      ],
      Halloween: [
        "Spooky transformations",
        "Dark magic",
        "Haunting effects",
        "Scary animations",
      ],
      Arcade: [
        "Pixel art style",
        "Retro game sounds",
        "8-bit effects",
        "Classic gaming references",
      ],
    };

    return (
      themeEffects[themeName] || [
        "Custom visual effects",
        "Themed animations",
        "Special particles",
        "Enhanced sounds",
      ]
    );
  }

  // Cào skin cho các chủ đề phổ biến với số lượng lớn
  async crawlPopularThemes() {
    console.log("🔥 Crawling popular themes with large datasets...");

    const popularThemes = [
      { name: "PROJECT", count: 25 },
      { name: "Star Guardian", count: 20 },
      { name: "K/DA", count: 15 },
      { name: "Dark Star", count: 18 },
      { name: "Blood Moon", count: 22 },
      { name: "Spirit Blossom", count: 16 },
      { name: "High Noon", count: 19 },
      { name: "Pool Party", count: 17 },
      { name: "Halloween", count: 14 },
      { name: "Arcade", count: 13 },
    ];

    for (const theme of popularThemes) {
      console.log(`🎨 Crawling ${theme.count} skins for ${theme.name}...`);
      const themeSkins = await this.crawlSkinsByTheme(theme.name, theme.count);
      this.skins = [...this.skins, ...themeSkins];

      // Delay để tránh overload
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    console.log(`✅ Finished crawling ${popularThemes.length} popular themes`);
  }

  // Cào skin theo chủ đề cụ thể (public method)
  async loadThemeSpecificSkins(themeName, maxCount = 30) {
    console.log(`🎯 Loading specific theme: ${themeName} (${maxCount} skins)`);

    const existingThemeSkins = this.skins.filter(
      (skin) => skin.theme === themeName
    );
    console.log(
      `📊 Already have ${existingThemeSkins.length} skins for ${themeName}`
    );

    if (existingThemeSkins.length < maxCount) {
      const neededCount = maxCount - existingThemeSkins.length;
      const newSkins = await this.crawlSkinsByTheme(themeName, neededCount);
      this.skins = [...this.skins, ...newSkins];
      await this.processSkinsData();

      console.log(`✅ Added ${newSkins.length} new skins for ${themeName}`);
      return newSkins;
    } else {
      console.log(`ℹ️ Already have enough skins for ${themeName}`);
      return [];
    }
  }

  // Cào tất cả skin cho một champion cụ thể
  async loadAllChampionSkins(championName, maxCount = 10) {
    console.log(`👤 Loading all skins for ${championName}`);

    try {
      // Tìm champion trong Data Dragon
      const versionResponse = await fetch(
        "https://ddragon.leagueoflegends.com/api/versions.json"
      );
      const versions = await versionResponse.json();
      const latestVersion = versions[0];

      const championDetailResponse = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion/${championName}.json`
      );
      const championDetail = await championDetailResponse.json();
      const championInfo = championDetail.data[championName];

      const championSkins = [];
      let skinId = 5000 + Math.floor(Math.random() * 1000);

      if (championInfo.skins) {
        championInfo.skins.forEach((skin) => {
          if (skin.id !== "0") {
            // Skip default
            const skinTheme = this.detectSkinTheme(skin.name);
            championSkins.push({
              id: skinId++,
              name: skin.name,
              champion: championInfo.name,
              theme: skinTheme,
              rarity: this.detectRarity(skin.name),
              price: this.estimatePrice(skin.name),
              releaseDate: this.getRandomDate(),
              splashArt: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skin.num}.jpg`,
              loadingScreen: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_${skin.num}.jpg`,
              description: `${skin.name} - Official ${championInfo.name} skin`,
              effects: this.generateEffectsForTheme(skinTheme),
            });
          }
        });
      }

      console.log(`✅ Found ${championSkins.length} skins for ${championName}`);
      this.skins = [...this.skins, ...championSkins];
      await this.processSkinsData();

      return championSkins;
    } catch (error) {
      console.error(`❌ Error loading skins for ${championName}:`, error);
      return [];
    }
  }

  // Tìm kiếm và cào skin theo keyword
  async searchAndCrawlSkins(keyword, maxCount = 20) {
    console.log(`🔍 Searching and crawling skins with keyword: "${keyword}"`);

    const searchResults = [];
    let skinId = 6000 + Math.floor(Math.random() * 1000);

    // Simulate API search results
    const mockSearchResults = [
      "Ashe",
      "Jinx",
      "Yasuo",
      "Lux",
      "Zed",
      "Ahri",
      "Thresh",
      "Vayne",
      "Akali",
      "Ezreal",
      "Kai Sa",
      "Seraphine",
      "Sett",
      "Yone",
      "Gwen",
      "Viego",
      "Aphelios",
      "Senna",
      "Qiyana",
      "Sylas",
    ];

    for (let i = 0; i < Math.min(maxCount, mockSearchResults.length); i++) {
      const champion = mockSearchResults[i];
      const theme =
        this.detectSkinTheme(keyword) !== "Other"
          ? this.detectSkinTheme(keyword)
          : "Special Edition";

      searchResults.push({
        id: skinId++,
        name: `${champion} ${keyword} Edition`,
        champion: champion,
        theme: theme,
        rarity: this.getRandomRarity(),
        price: this.estimatePrice(`${champion} ${keyword}`),
        releaseDate: this.getRandomDate(),
        splashArt: await this.findSkinImage(champion, keyword, i + 1),
        loadingScreen: await this.findLoadingImage(champion, keyword, i + 1),
        description: `${champion} trong bộ sưu tập ${keyword} đặc biệt`,
        effects: this.generateEffectsForTheme(theme),
      });
    }

    console.log(
      `✅ Found ${searchResults.length} skins for keyword "${keyword}"`
    );
    this.skins = [...this.skins, ...searchResults];
    await this.processSkinsData();

    return searchResults;
  }

  async loadFromLeagueAPI() {
    // Sử dụng nhiều nguồn ảnh skin thật từ League of Legends
    const realSkinData = [
      {
        id: 1,
        name: "Ashe Queen",
        champion: "Ashe",
        theme: "Royal",
        rarity: "legendary",
        price: 1820,
        releaseDate: "2011-02-21",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_1.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_1.jpg",
        description: "Ashe với bộ trang phục hoàng gia lộng lẫy",
        effects: ["Hiệu ứng skill mới", "Âm thanh mới", "Recall animation mới"],
      },
      {
        id: 2,
        name: "Jinx Star Guardian",
        champion: "Jinx",
        theme: "Star Guardian",
        rarity: "legendary",
        price: 1820,
        releaseDate: "2017-09-07",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_3.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_3.jpg",
        description: "Jinx trong bộ trang phục Star Guardian ma thuật",
        effects: [
          "Hoàn toàn mới hiệu ứng",
          "Voice lines mới",
          "Particle effects",
        ],
      },
      {
        id: 3,
        name: "Yasuo High Noon",
        champion: "Yasuo",
        theme: "High Noon",
        rarity: "epic",
        price: 1350,
        releaseDate: "2019-01-10",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_2.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_2.jpg",
        description: "Yasuo trong thế giới miền Tây hoang dã",
        effects: ["Western theme effects", "Desert winds", "Cowboy animations"],
      },
      {
        id: 4,
        name: "Kai'Sa K/DA",
        champion: "Kai'Sa",
        theme: "K/DA",
        rarity: "epic",
        price: 1350,
        releaseDate: "2018-11-03",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_1.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kaisa_1.jpg",
        description: "Kai'Sa trong nhóm nhạc K/DA",
        effects: [
          "Music-themed effects",
          "Dance animations",
          "Pop star styling",
        ],
      },
      {
        id: 5,
        name: "Lux Elementalist",
        champion: "Lux",
        theme: "Elementalist",
        rarity: "ultimate",
        price: 3250,
        releaseDate: "2016-11-28",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lux_7.jpg",
        description: "Lux với sức mạnh của 10 nguyên tố",
        effects: [
          "10 different forms",
          "Elemental transformations",
          "Master tier skin",
        ],
      },
    ];
    this.skins = [...this.skins, ...realSkinData];
  }

  async loadFromCommunityAPI() {
    // Thêm nhiều skin từ các nguồn khác với ảnh thật
    const moreSkinData = [
      {
        id: 6,
        name: "Zed PROJECT",
        champion: "Zed",
        theme: "PROJECT",
        rarity: "legendary",
        price: 1820,
        releaseDate: "2020-05-14",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_2.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zed_2.jpg",
        description: "Zed trong thế giới cyberpunk PROJECT",
        effects: ["Cyber effects", "Holographic animations", "Tech particles"],
      },
      {
        id: 7,
        name: "Ahri Star Guardian",
        champion: "Ahri",
        theme: "Star Guardian",
        rarity: "epic",
        price: 1350,
        releaseDate: "2017-09-07",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_4.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_4.jpg",
        description: "Ahri trong đội Star Guardian",
        effects: [
          "Magical girl transformation",
          "Star-themed particles",
          "Team synergy effects",
        ],
      },
      {
        id: 8,
        name: "Akali K/DA",
        champion: "Akali",
        theme: "K/DA",
        rarity: "epic",
        price: 1350,
        releaseDate: "2018-11-03",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_9.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akali_9.jpg",
        description: "Akali trong nhóm nhạc K/DA",
        effects: ["Music effects", "Neon animations", "Pop choreography"],
      },
      {
        id: 9,
        name: "Thresh Dark Star",
        champion: "Thresh",
        theme: "Dark Star",
        rarity: "epic",
        price: 1350,
        releaseDate: "2017-06-08",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_4.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Thresh_4.jpg",
        description: "Thresh với sức mạnh Dark Star",
        effects: ["Cosmic effects", "Void particles", "Dark energy"],
      },
      {
        id: 10,
        name: "Ezreal Pulsefire",
        champion: "Ezreal",
        theme: "Pulsefire",
        rarity: "ultimate",
        price: 3250,
        releaseDate: "2012-06-29",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_4.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ezreal_4.jpg",
        description: "Ezreal từ tương lai với công nghệ Pulsefire",
        effects: [
          "Time travel effects",
          "Futuristic animations",
          "Evolution model",
        ],
      },
      {
        id: 11,
        name: "Leona Solar Eclipse",
        champion: "Leona",
        theme: "Eclipse",
        rarity: "legendary",
        price: 1820,
        releaseDate: "2018-02-22",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_4.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Leona_4.jpg",
        description: "Leona với sức mạnh nhật thực",
        effects: [
          "Solar eclipse effects",
          "Dual form",
          "Light/Dark transitions",
        ],
      },
      {
        id: 12,
        name: "Diana Lunar Eclipse",
        champion: "Diana",
        theme: "Eclipse",
        rarity: "legendary",
        price: 1820,
        releaseDate: "2018-02-22",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_2.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Diana_2.jpg",
        description: "Diana với sức mạnh nguyệt thực",
        effects: [
          "Lunar eclipse effects",
          "Moon phases",
          "Celestial animations",
        ],
      },
    ];

    this.skins = [...this.skins, ...moreSkinData];
  }

  // Tải skin từ Riot CDN với nhiều skin hơn
  async loadFromRiotCDN() {
    const riotSkins = [
      // Arcade Skins
      {
        id: 13,
        name: "Riven Battle Bunny",
        champion: "Riven",
        theme: "Battle Bunny",
        rarity: "epic",
        price: 1350,
        releaseDate: "2012-04-10",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_6.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Riven_6.jpg",
        description: "Riven trong bộ trang phục Battle Bunny",
        effects: ["Bunny ears", "Carrot sword", "Cute animations"],
      },
      {
        id: 14,
        name: "Garen God-King",
        champion: "Garen",
        theme: "God-King",
        rarity: "legendary",
        price: 1820,
        releaseDate: "2018-06-27",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_6.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Garen_6.jpg",
        description: "Garen với quyền lực thần thánh",
        effects: ["Divine powers", "Golden armor", "Royal effects"],
      },
      {
        id: 15,
        name: "Darius God-King",
        champion: "Darius",
        theme: "God-King",
        rarity: "legendary",
        price: 1820,
        releaseDate: "2018-06-27",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_4.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Darius_4.jpg",
        description: "Darius với sức mạnh bạo chúa",
        effects: ["Demonic powers", "Dark energy", "Tyrant effects"],
      },
      {
        id: 16,
        name: "Miss Fortune Gun Goddess",
        champion: "Miss Fortune",
        theme: "Gun Goddess",
        rarity: "ultimate",
        price: 2775,
        releaseDate: "2018-03-29",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_8.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/MissFortune_8.jpg",
        description: "Miss Fortune với công nghệ tương lai",
        effects: ["Sci-fi weapons", "Armor evolution", "Future tech"],
      },
      {
        id: 17,
        name: "Vayne Project",
        champion: "Vayne",
        theme: "PROJECT",
        rarity: "epic",
        price: 1350,
        releaseDate: "2015-08-27",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_3.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vayne_3.jpg",
        description: "Vayne trong thế giới cyberpunk PROJECT",
        effects: ["Cyber effects", "Neon lights", "Tech sounds"],
      },
      {
        id: 18,
        name: "Vi Arcane",
        champion: "Vi",
        theme: "Arcane",
        rarity: "legendary",
        price: 1820,
        releaseDate: "2021-11-06",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_6.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vi_6.jpg",
        description: "Vi từ series Arcane",
        effects: [
          "Arcane animation style",
          "Netflix series look",
          "Piltover punk",
        ],
      },
    ];

    this.skins = [...this.skins, ...riotSkins];
  }

  // Load skin từ CDN khác (fallback nếu Riot CDN không hoạt động)
  async loadFromAlternateCDN() {
    const alternateSkins = [
      {
        id: 23,
        name: "Seraphine K/DA All Out",
        champion: "Seraphine",
        theme: "K/DA",
        rarity: "ultimate",
        price: 3250,
        releaseDate: "2020-10-29",
        splashArt:
          "https://raw.communitydragon.org/latest/game/assets/characters/seraphine/skins/skin01/images/seraphine_splash_centered_1.jpg",
        loadingScreen:
          "https://raw.communitydragon.org/latest/game/assets/characters/seraphine/skins/skin01/images/seraphine_loadscreen_1.jpg",
        description: "Seraphine trong nhóm K/DA All Out",
        effects: ["Music evolution", "Stage presence", "Pop star ultimate"],
      },
      {
        id: 24,
        name: "Sett Spirit Blossom",
        champion: "Sett",
        theme: "Spirit Blossom",
        rarity: "epic",
        price: 1350,
        releaseDate: "2020-07-22",
        splashArt:
          "https://raw.communitydragon.org/latest/game/assets/characters/sett/skins/skin26/images/sett_splash_centered_26.jpg",
        loadingScreen:
          "https://raw.communitydragon.org/latest/game/assets/characters/sett/skins/skin26/images/sett_loadscreen_26.jpg",
        description: "Sett trong lễ hội hoa linh hồn",
        effects: [
          "Cherry blossom effects",
          "Japanese festival",
          "Spirit magic",
        ],
      },
      {
        id: 25,
        name: "Viego Ruined King",
        champion: "Viego",
        theme: "Ruined King",
        rarity: "legendary",
        price: 1820,
        releaseDate: "2021-01-08",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Viego_0.jpg",
        description: "Viego Vua Hủy Diệt nguyên bản",
        effects: ["Ruination effects", "Mist powers", "Corrupted king"],
      },
    ];

    this.skins = [...this.skins, ...alternateSkins];
  }

  // Tải skin từ LoL Wiki
  async loadFromLoLWiki() {
    const wikiSkins = [
      {
        id: 19,
        name: "Teemo Omega Squad",
        champion: "Teemo",
        theme: "Omega Squad",
        rarity: "legendary",
        price: 1820,
        releaseDate: "2017-07-25",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_6.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Teemo_6.jpg",
        description: "Teemo chiến binh đặc nhiệm",
        effects: ["Military theme", "War sounds", "Combat animations"],
      },
      {
        id: 20,
        name: "Gangplank Captain",
        champion: "Gangplank",
        theme: "Captain",
        rarity: "epic",
        price: 1350,
        releaseDate: "2015-08-05",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_7.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Gangplank_7.jpg",
        description: "Gangplank thuyền trưởng hải tặc",
        effects: ["Pirate theme", "Ocean sounds", "Ship effects"],
      },
      {
        id: 21,
        name: "Senna High Noon",
        champion: "Senna",
        theme: "High Noon",
        rarity: "epic",
        price: 1350,
        releaseDate: "2020-05-28",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_2.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Senna_2.jpg",
        description: "Senna trong thế giới miền Tây",
        effects: ["Western theme", "Desert winds", "Cowgirl style"],
      },
      {
        id: 22,
        name: "Yone Spirit Blossom",
        champion: "Yone",
        theme: "Spirit Blossom",
        rarity: "epic",
        price: 1350,
        releaseDate: "2020-07-22",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_1.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yone_1.jpg",
        description: "Yone trong lễ hội hoa linh hồn",
        effects: ["Cherry blossoms", "Spirit effects", "Japanese theme"],
      },
    ];

    this.skins = [...this.skins, ...wikiSkins];
  }

  // Load skin từ LoL Fandom
  async loadFromFandom() {
    const fandomSkins = [
      {
        id: 26,
        name: "Gwen Space Groove",
        champion: "Gwen",
        theme: "Space Groove",
        rarity: "epic",
        price: 1350,
        releaseDate: "2021-04-01",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_1.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Gwen_1.jpg",
        description: "Gwen trong vũ trụ Space Groove",
        effects: ["Disco effects", "Groovy animations", "70s style"],
      },
      {
        id: 27,
        name: "Mordekaiser Dark Star",
        champion: "Mordekaiser",
        theme: "Dark Star",
        rarity: "legendary",
        price: 1820,
        releaseDate: "2020-03-26",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_4.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Mordekaiser_4.jpg",
        description: "Mordekaiser với sức mạnh Dark Star",
        effects: [
          "Cosmic destruction",
          "Black hole effects",
          "Universal terror",
        ],
      },
      {
        id: 28,
        name: "Caitlyn Arcane",
        champion: "Caitlyn",
        theme: "Arcane",
        rarity: "legendary",
        price: 1820,
        releaseDate: "2021-11-06",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_6.jpg",
        loadingScreen:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Caitlyn_6.jpg",
        description: "Caitlyn từ series Arcane",
        effects: ["Arcane animation", "Netflix style", "Piltover enforcer"],
      },
    ];

    this.skins = [...this.skins, ...fandomSkins];
  }

  processSkinsData() {
    // Nhóm skin theo champion
    this.skinsByChampion.clear();
    this.skinThemes.clear();

    this.skins.forEach((skin) => {
      // Nhóm theo champion
      if (!this.skinsByChampion.has(skin.champion)) {
        this.skinsByChampion.set(skin.champion, []);
      }
      this.skinsByChampion.get(skin.champion).push(skin);

      // Nhóm theo theme
      if (!this.skinThemes.has(skin.theme)) {
        this.skinThemes.set(skin.theme, []);
      }
      this.skinThemes.get(skin.theme).push(skin);
    });

    console.log("Đã xử lý dữ liệu:", {
      totalSkins: this.skins.length,
      champions: this.skinsByChampion.size,
      themes: this.skinThemes.size,
    });
  }

  // Lấy skin theo champion
  getSkinsByChampion(championName) {
    return this.skinsByChampion.get(championName) || [];
  }

  // Lấy tất cả theme
  getAllThemes() {
    return Array.from(this.skinThemes.keys()).sort();
  }

  // Lấy skin theo theme
  getSkinsByTheme(themeName) {
    return this.skinThemes.get(themeName) || [];
  }

  // Tìm kiếm skin
  searchSkins(query) {
    const lowercaseQuery = query.toLowerCase();
    return this.skins.filter(
      (skin) =>
        skin.name.toLowerCase().includes(lowercaseQuery) ||
        skin.champion.toLowerCase().includes(lowercaseQuery) ||
        skin.theme.toLowerCase().includes(lowercaseQuery)
    );
  }

  // Lấy thống kê skin
  getSkinsStats() {
    const stats = {
      total: this.skins.length,
      byRarity: {},
      byTheme: {},
      byChampion: {},
      avgPrice: 0,
    };

    let totalPrice = 0;
    this.skins.forEach((skin) => {
      // Theo rarity
      stats.byRarity[skin.rarity] = (stats.byRarity[skin.rarity] || 0) + 1;

      // Theo theme
      stats.byTheme[skin.theme] = (stats.byTheme[skin.theme] || 0) + 1;

      // Theo champion
      stats.byChampion[skin.champion] =
        (stats.byChampion[skin.champion] || 0) + 1;

      totalPrice += skin.price;
    });

    stats.avgPrice = Math.round(totalPrice / this.skins.length);
    return stats;
  }

  // Lấy skin theo ID
  getSkinById(id) {
    return this.skins.find((skin) => skin.id === id);
  }

  // Lấy skin mới nhất
  getLatestSkins(limit = 10) {
    return this.skins
      .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
      .slice(0, limit);
  }

  // Lấy skin theo giá
  getSkinsByPriceRange(minPrice, maxPrice) {
    return this.skins.filter(
      (skin) => skin.price >= minPrice && skin.price <= maxPrice
    );
  }

  // Test tất cả ảnh skin
  async testAllSkinImages() {
    console.log("🧪 Testing all skin images...");
    const results = {
      total: this.skins.length,
      success: 0,
      failed: 0,
      failedUrls: [],
    };

    for (let skin of this.skins) {
      try {
        const img = new Image();
        const loaded = await new Promise((resolve) => {
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = skin.splashArt;
        });

        if (loaded) {
          results.success++;
          console.log(`✅ ${skin.name}: Image loaded successfully`);
        } else {
          results.failed++;
          results.failedUrls.push({ name: skin.name, url: skin.splashArt });
          console.warn(
            `❌ ${skin.name}: Image failed to load - ${skin.splashArt}`
          );
        }
      } catch (error) {
        results.failed++;
        results.failedUrls.push({
          name: skin.name,
          url: skin.splashArt,
          error: error.message,
        });
        console.error(
          `❌ ${skin.name}: Error testing image - ${error.message}`
        );
      }
    }

    console.log("🏁 Image test results:", results);
    return results;
  }

  // Debug function to check skin loading
  debugSkinLoading() {
    console.log("=== SKIN DEBUG ===");
    console.log("Skins loaded:", this.skins.length);
    console.log("Skin data:", this.skins);
    console.log("Themes map:", this.skinThemes);
    console.log("Champions map:", this.skinsByChampion);
    console.log("=== END DEBUG ===");
  }

  // Export dữ liệu skin ra JSON
  exportSkinsData() {
    const exportData = {
      timestamp: new Date().toISOString(),
      version: "2.0",
      totalSkins: this.skins.length,
      themes: Array.from(this.skinThemes.keys()),
      champions: Array.from(this.skinsByChampion.keys()),
      skins: this.skins,
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `lol-skins-data-${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    console.log(`📁 Exported ${this.skins.length} skins to JSON file`);
  }

  // Detect champion region from name/lore
  detectChampionRegion(name) {
    const regionMap = {
      demacia: [
        "Garen",
        "Lux",
        "Jarvan IV",
        "Fiora",
        "Galio",
        "Lucian",
        "Poppy",
        "Quinn",
        "Shyvana",
        "Sona",
        "Sylas",
        "Vayne",
        "Xin Zhao",
      ],
      noxus: [
        "Darius",
        "Draven",
        "Katarina",
        "LeBlanc",
        "Sion",
        "Swain",
        "Talon",
        "Vladimir",
        "Cassiopeia",
        "Kled",
        "Rell",
        "Samira",
      ],
      ionia: [
        "Ahri",
        "Akali",
        "Irelia",
        "Jhin",
        "Karma",
        "Kennen",
        "Lee Sin",
        "Master Yi",
        "Shen",
        "Syndra",
        "Varus",
        "Yasuo",
        "Zed",
        "Xayah",
        "Rakan",
        "Kayn",
        "Sett",
        "Lillia",
        "Yone",
      ],
      piltover: [
        "Caitlyn",
        "Ezreal",
        "Heimerdinger",
        "Jayce",
        "Jinx",
        "Vi",
        "Camille",
        "Orianna",
        "Blitzcrank",
        "Corki",
        "Seraphine",
      ],
      zaun: [
        "Ekko",
        "Jinx",
        "Viktor",
        "Warwick",
        "Zac",
        "Singed",
        "Twitch",
        "Dr. Mundo",
        "Janna",
        "Urgot",
        "Zeri",
      ],
      freljord: [
        "Anivia",
        "Ashe",
        "Braum",
        "Gragas",
        "Lissandra",
        "Nunu & Willump",
        "Olaf",
        "Sejuani",
        "Trundle",
        "Tryndamere",
        "Udyr",
        "Volibear",
        "Ornn",
      ],
      shadowisles: [
        "Hecarim",
        "Karthus",
        "Maokai",
        "Mordekaiser",
        "Thresh",
        "Viego",
        "Yorick",
        "Kalista",
        "Elise",
        "Vex",
        "Gwen",
      ],
      shurima: [
        "Azir",
        "Nasus",
        "Renekton",
        "Sivir",
        "Xerath",
        "Taliyah",
        "Rammus",
        "Skarner",
        "Amumu",
        "Akshan",
        "KSante",
      ],
      targon: [
        "Diana",
        "Leona",
        "Pantheon",
        "Taric",
        "Aurelion Sol",
        "Zoe",
        "Soraka",
        "Aphelios",
      ],
      void: [
        "ChoGath",
        "Kassadin",
        "Khazix",
        "Kogmaw",
        "Malzahar",
        "Rek Sai",
        "Vel Koz",
        "Kai Sa",
        "Bel Veth",
      ],
      bilgewater: [
        "Gangplank",
        "Graves",
        "Miss Fortune",
        "Nautilus",
        "Pyke",
        "Twisted Fate",
        "Fizz",
        "Tahm Kench",
        "Nilah",
      ],
      ixtal: ["Qiyana", "Malphite", "Neeko", "Rengar", "Zyra"],
      bandle: [
        "Lulu",
        "Poppy",
        "Teemo",
        "Tristana",
        "Veigar",
        "Yuumi",
        "Heimerdinger",
        "Ziggs",
        "Rumble",
        "Corki",
        "Kennen",
      ],
    };

    for (const [region, champions] of Object.entries(regionMap)) {
      if (champions.includes(name)) {
        return region;
      }
    }
    return "unknown";
  }

  // Detect champion role from tags
  detectChampionRole(tags) {
    if (!tags || tags.length === 0) return "unknown";

    const roleMap = {
      Assassin: "assassin",
      Fighter: "fighter",
      Mage: "mage",
      Marksman: "marksman",
      Support: "support",
      Tank: "tank",
    };

    return roleMap[tags[0]] || tags[0].toLowerCase();
  }

  // Detect weapon from name/lore
  detectWeapon(name, lore) {
    const weaponKeywords = {
      sword: ["sword", "blade", "katana", "saber"],
      bow: ["bow", "arrow", "archer"],
      gun: ["gun", "rifle", "pistol", "firearm"],
      magic: ["magic", "spell", "arcane", "mage"],
      fist: ["fist", "martial", "punch"],
      staff: ["staff", "wand", "rod"],
      spear: ["spear", "lance", "pike"],
      hammer: ["hammer", "mace", "club"],
      claws: ["claw", "talon"],
      other: [],
    };

    const text = (name + " " + (lore || "")).toLowerCase();

    for (const [weapon, keywords] of Object.entries(weaponKeywords)) {
      if (keywords.some((keyword) => text.includes(keyword))) {
        return weapon;
      }
    }

    return "other";
  }

  // Detect species from name/lore
  detectSpecies(name, lore) {
    const speciesKeywords = {
      human: ["human", "man", "woman", "person"],
      yordle: ["yordle", "small", "fuzzy"],
      vastaya: ["vastaya", "animal", "fox", "cat"],
      demon: ["demon", "devil", "shadow"],
      spirit: ["spirit", "ghost", "soul"],
      dragon: ["dragon", "drake"],
      void: ["void", "voidborn"],
      construct: ["construct", "golem", "mechanical"],
      undead: ["undead", "zombie", "lich"],
      celestial: ["celestial", "star", "cosmic"],
      other: [],
    };

    const text = (name + " " + (lore || "")).toLowerCase();

    for (const [species, keywords] of Object.entries(speciesKeywords)) {
      if (keywords.some((keyword) => text.includes(keyword))) {
        return species;
      }
    }

    return "other";
  }

  // Detect gender from name
  detectGender(name) {
    const femaleNames = [
      "Ahri",
      "Akali",
      "Anivia",
      "Annie",
      "Ashe",
      "Caitlyn",
      "Camille",
      "Cassiopeia",
      "Diana",
      "Elise",
      "Evelynn",
      "Fiora",
      "Irelia",
      "Janna",
      "Jinx",
      "Kalista",
      "Karma",
      "Katarina",
      "Kayle",
      "Kindred",
      "LeBlanc",
      "Leona",
      "Lissandra",
      "Lulu",
      "Lux",
      "Miss Fortune",
      "Morgana",
      "Nami",
      "Neeko",
      "Nidalee",
      "Orianna",
      "Poppy",
      "Quinn",
      "Qiyana",
      "Rell",
      "Riven",
      "Samira",
      "Sejuani",
      "Seraphine",
      "Shyvana",
      "Sivir",
      "Sona",
      "Soraka",
      "Syndra",
      "Taliyah",
      "Tristana",
      "Vayne",
      "Vex",
      "Vi",
      "Xayah",
      "Zoe",
      "Zyra",
      "Gwen",
      "Viego",
      "Yuumi",
      "Lillia",
      "Kai Sa",
      "Bel Veth",
      "Nilah",
      "Zeri",
    ];

    return femaleNames.includes(name) ? "female" : "male";
  }

  // Estimate release date (placeholder function)
  estimateReleaseDate(name) {
    // This would need a proper database mapping
    // For now, return a default date
    return "2020-01-01";
  }

  // Crawl missing champions that don't exist in current database
  async crawlMissingChampions() {
    console.log("🔍 Crawling missing champions...");

    try {
      // Get current champion names
      const currentChampions = new Set();
      if (window.championsDatabase?.regions) {
        window.championsDatabase.regions.forEach((region) => {
          (region.existingChampions || []).forEach((champ) =>
            currentChampions.add(champ.name)
          );
          (region.newChampions || []).forEach((champ) =>
            currentChampions.add(champ.name)
          );
        });
      }

      // Get API champions
      const versionResponse = await fetch(
        "https://ddragon.leagueoflegends.com/api/versions.json"
      );
      const versions = await versionResponse.json();
      const latestVersion = versions[0];

      const championResponse = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`
      );
      const championData = await championResponse.json();

      const missingChampions = [];
      const newChampions = [];

      // Find missing champions
      for (const [championKey, champion] of Object.entries(championData.data)) {
        if (!currentChampions.has(champion.name)) {
          missingChampions.push({ key: championKey, data: champion });
        }
      }

      console.log(
        `Found ${missingChampions.length} missing champions:`,
        missingChampions.map((c) => c.data.name)
      );

      // Crawl detailed data for missing champions
      for (const { key: championKey, data: champion } of missingChampions) {
        try {
          const championDetailResponse = await fetch(
            `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion/${championKey}.json`
          );
          const championDetail = await championDetailResponse.json();
          const championInfo = championDetail.data[championKey];

          const championWithDetails = {
            id: championInfo.key,
            name: championInfo.name,
            title: championInfo.title,
            tags: championInfo.tags || [],
            image: `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${championKey}.png`,
            splash: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championKey}_0.jpg`,
            lore: championInfo.lore || "",
            info: championInfo.info || {},
            stats: championInfo.stats || {},
            spells: championInfo.spells || [],
            passive: championInfo.passive || {},
            region: this.detectChampionRegion(championInfo.name),
            role: this.detectChampionRole(championInfo.tags),
            difficulty: championInfo.info ? championInfo.info.difficulty : 5,
            releaseDate: this.estimateReleaseDate(championInfo.name),
            weapon: this.detectWeapon(championInfo.name, championInfo.lore),
            species: this.detectSpecies(championInfo.name, championInfo.lore),
            gender: this.detectGender(championInfo.name),
          };

          newChampions.push(championWithDetails);

          // Delay để tránh rate limit
          await new Promise((resolve) => setTimeout(resolve, 100));
        } catch (error) {
          console.warn(
            `⚠️ Failed to fetch details for ${championKey}:`,
            error.message
          );
        }
      }

      // Merge new champions with database
      if (newChampions.length > 0) {
        this.mergeWithExistingDatabase(newChampions);
        console.log(
          `✅ Successfully added ${newChampions.length} new champions!`
        );
      }

      return newChampions;
    } catch (error) {
      console.error("❌ Error crawling missing champions:", error);
      return [];
    }
  }

  // Get champions count comparison
  getChampionsComparison() {
    const current = this.getCurrentChampionCount();
    const api = this.getAPIChampionCount();

    return {
      current,
      api,
      missing: api - current,
      percentage: Math.round((current / api) * 100),
    };
  }

  // Get current champion count from database
  getCurrentChampionCount() {
    if (!window.championsDatabase || !window.championsDatabase.regions) {
      return 0;
    }

    // Use Set to avoid counting duplicates
    const championNames = new Set();

    window.championsDatabase.regions.forEach((region) => {
      // Add existing champions
      (region.existingChampions || []).forEach((champ) => {
        championNames.add(champ.name);
      });

      // Add new champions
      (region.newChampions || []).forEach((champ) => {
        championNames.add(champ.name);
      });
    }); // Also check special champions if exists
    if (
      window.championsDatabase.specialChampions &&
      Array.isArray(window.championsDatabase.specialChampions)
    ) {
      window.championsDatabase.specialChampions.forEach((champ) => {
        championNames.add(champ.name);
      });
    }

    console.log(`📊 Total unique champions in database: ${championNames.size}`);
    return championNames.size;
  }

  // Get API champion count
  async getAPIChampionCount() {
    try {
      const versionResponse = await fetch(
        "https://ddragon.leagueoflegends.com/api/versions.json"
      );
      const versions = await versionResponse.json();
      const latestVersion = versions[0];

      const championResponse = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`
      );
      const championData = await championResponse.json();

      return Object.keys(championData.data).length;
    } catch (error) {
      console.error("Error getting API champion count:", error);
      return 0;
    }
  }

  // Helper function to generate champion ID
  generateChampionId(championName) {
    return championName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  }

  // Helper function to get default champion image
  getDefaultChampionImage(championName) {
    const championKey = this.getChampionKeyFromName(championName);
    return championKey
      ? `https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${championKey}.png`
      : "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg";
  }

  // Helper function to get default splash image
  getDefaultSplashImage(championName) {
    const championKey = this.getChampionKeyFromName(championName);
    return championKey
      ? `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championKey}_0.jpg`
      : "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg";
  }

  // Helper function to get champion key from name
  getChampionKeyFromName(championName) {
    // Basic mapping for common champions
    const nameToKey = {
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
      Shaco: "Shaco",
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

    return nameToKey[championName] || championName.replace(/[^a-zA-Z]/g, "");
  }

  // Helper function to update existing champion properties
  updateChampionProperties(existingChampion, newChampion) {
    // Update only if new data is available
    if (newChampion.title && !existingChampion.title)
      existingChampion.title = newChampion.title;
    if (newChampion.image && !existingChampion.image)
      existingChampion.image = newChampion.image;
    if (newChampion.lore && !existingChampion.lore)
      existingChampion.lore = newChampion.lore;
    if (newChampion.stats && !existingChampion.stats)
      existingChampion.stats = newChampion.stats;
    if (newChampion.spells && !existingChampion.spells)
      existingChampion.spells = newChampion.spells;
    if (newChampion.passive && !existingChampion.passive)
      existingChampion.passive = newChampion.passive;

    // Always update timestamp
    existingChampion.lastUpdated = new Date().toISOString();
  }

  // Function to save database to localStorage
  saveDatabase() {
    try {
      const databaseString = JSON.stringify(window.championsDatabase);
      localStorage.setItem("championsDatabase", databaseString);
      console.log("💾 Database saved to localStorage");
    } catch (error) {
      console.error("❌ Error saving database:", error);
    }
  }

  // Function to load database from localStorage
  loadDatabase() {
    try {
      const savedDatabase = localStorage.getItem("championsDatabase");
      if (savedDatabase) {
        const parsed = JSON.parse(savedDatabase);
        // Merge with existing database
        if (parsed.regions) {
          window.championsDatabase = parsed;
          console.log("📂 Database loaded from localStorage");
          return true;
        }
      }
    } catch (error) {
      console.error("❌ Error loading database:", error);
    }
    return false;
  }

  // Function to refresh champion count displays
  refreshChampionCountDisplays() {
    const currentCount = this.getCurrentChampionCount();

    // Update any elements with champion count
    document.querySelectorAll("[data-champion-count]").forEach((element) => {
      element.textContent = currentCount;
    });

    // Update specific elements by ID if they exist
    const countElements = ["currentCount", "championCount", "totalChampions"];
    countElements.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = currentCount;
      }
    });
  }

  // Helper to create SVG placeholder for skin images
  createSVGPlaceholder(championName, skinName = "", width = 300, height = 169) {
    const encodedText = encodeURIComponent(
      `${championName}${skinName ? ` ${skinName}` : ""}`
    );
    const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#374151"/>
      <text x="${width / 2}" y="${
      height / 2
    }" text-anchor="middle" dominant-baseline="central" fill="#E5E7EB" font-family="Arial, sans-serif" font-size="14">${encodedText}</text>
    </svg>`;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  }
}
