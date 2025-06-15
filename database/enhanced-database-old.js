// Enhanced Champions Database with Individual Champion Files
class EnhancedChampionsDatabase {
  constructor() {
    this.allChampions = [];
    this.championsData = {};
    this.sortOrder = "alphabetical"; // alphabetical, region, role
    this.API_BASE = "https://ddragon.leagueoflegends.com/cdn";
    this.CURRENT_VERSION = "14.24.1";

    this.regionMap = {
      demacia: { name: "Demacia", icon: "🏰", color: "#d4af37" },
      noxus: { name: "Noxus", icon: "⚔️", color: "#dc143c" },
      ionia: { name: "Ionia", icon: "🌸", color: "#ff69b4" },
      piltover: { name: "Piltover", icon: "🔧", color: "#00bfff" },
      zaun: { name: "Zaun", icon: "⚗️", color: "#32cd32" },
      freljord: { name: "Freljord", icon: "❄️", color: "#87ceeb" },
      bilgewater: { name: "Bilgewater", icon: "🏴‍☠️", color: "#ff8c00" },
      shadowisles: { name: "Shadow Isles", icon: "💀", color: "#2e8b57" },
      targon: { name: "Mount Targon", icon: "⭐", color: "#ffd700" },
      shurima: { name: "Shurima", icon: "🏜️", color: "#daa520" },
      void: { name: "The Void", icon: "🕳️", color: "#9370db" },
      ixtal: { name: "Ixtal", icon: "🌿", color: "#228b22" },
      bandle: { name: "Bandle City", icon: "🍄", color: "#ff1493" },
      no: { name: "Unknown", icon: "❓", color: "#696969" },
    };
  }  // Load champions từ DatabaseManager (app.js)
  async loadChampions() {
    try {
      // Chỉ sử dụng dữ liệu từ DatabaseManager
      if (window.dbManager && window.dbManager.champions && window.dbManager.champions.length > 0) {
        console.log("🔄 Loading champions from DatabaseManager...");

        this.allChampions = [];
        this.championsData = {};

        // Convert từ app.js format sang enhanced format
        window.dbManager.champions.forEach((champion) => {
          const enhancedChampion = this.createIndividualChampionDatabase(
            champion,
            champion.regionId
          );
          this.allChampions.push(enhancedChampion);
          this.championsData[champion.id] = enhancedChampion;
        });

        // Sắp xếp A-Z
        this.sortChampions("alphabetical");

        console.log(`✅ Successfully loaded ${this.allChampions.length} champions from DatabaseManager`);
        return true;
      }

      console.log("❌ DatabaseManager not available or no champions found");
      return false;
    } catch (error) {
      console.error("❌ Error loading champions:", error);
      return false;
    }
  }

  // Tạo dữ liệu từ DatabaseManager (app.js)
  async createFromDatabaseManager() {
    try {
      // Check if DatabaseManager data exists
      const dbManagerData = localStorage.getItem("finalChampionsData");
      if (dbManagerData) {
        console.log("🔄 Creating enhanced database from DatabaseManager...");

        const regions = JSON.parse(dbManagerData);
        console.log("📊 DatabaseManager regions:", regions);

        this.allChampions = [];
        this.championsData = {};

        Object.entries(regions).forEach(([regionId, region]) => {
          console.log(`🔍 Processing region: ${regionId}`, region);

          if (region.champions && region.champions.length > 0) {
            console.log(
              `✅ Found ${region.champions.length} champions in ${regionId}`
            );

            region.champions.forEach((champion) => {
              console.log(
                `🎯 Processing champion: ${champion.name || champion.id}`,
                champion
              );

              const enhancedChampion = this.createIndividualChampionDatabase(
                champion,
                regionId
              );
              this.allChampions.push(enhancedChampion);
              this.championsData[champion.id] = enhancedChampion;
            });
          } else {
            console.log(`❌ No champions found in region ${regionId}`, region);
          }
        });

        // Sắp xếp A-Z
        this.sortChampions("alphabetical");

        // Lưu vào localStorage
        this.saveToStorage();

        console.log(
          `✅ Created enhanced database with ${this.allChampions.length} champions from DatabaseManager`
        );
        return true;
      }

      // Fallback: Try final-crawler data
      await this.createFromFinalCrawler();
      return true;
    } catch (error) {
      console.error("❌ Error creating from DatabaseManager:", error);

      // Final fallback: sample data
      await this.createSampleDatabase();
      return true;
    }
  }

  // Tạo dữ liệu từ final-crawler nếu có
  async createFromFinalCrawler() {
    if (window.finalCrawler && window.finalCrawler.regions) {
      console.log("🔄 Creating enhanced database from final-crawler...");
      console.log("📊 Final crawler data:", window.finalCrawler);
      console.log("📊 Final crawler regions:", window.finalCrawler.regions);

      this.allChampions = [];
      this.championsData = {};

      Object.entries(window.finalCrawler.regions).forEach(
        ([regionId, region]) => {
          console.log(`🔍 Processing region: ${regionId}`, region);

          if (region.champions && region.champions.length > 0) {
            console.log(
              `✅ Found ${region.champions.length} champions in ${regionId}`
            );

            region.champions.forEach((champion) => {
              console.log(
                `🎯 Processing champion: ${champion.name || champion.id}`,
                champion
              );

              const enhancedChampion = this.createIndividualChampionDatabase(
                champion,
                regionId
              );
              this.allChampions.push(enhancedChampion);
              this.championsData[champion.id] = enhancedChampion;
            });
          } else {
            console.log(`❌ No champions found in region ${regionId}`, region);
          }
        }
      );

      // Sắp xếp A-Z
      this.sortChampions("alphabetical");

      // Lưu vào localStorage
      this.saveToStorage();

      console.log(
        `✅ Created enhanced database with ${this.allChampions.length} champions`
      );
      return true;
    } else {
      // Tạo dữ liệu mẫu nếu không có final-crawler
      console.log("🔄 Creating sample database...");
      console.log("❌ Final crawler not found or no regions data");

      // Debug: Check what's available
      console.log(
        "🔍 Available on window:",
        Object.keys(window).filter(
          (key) =>
            key.toLowerCase().includes("final") ||
            key.toLowerCase().includes("crawler")
        )
      );
      console.log("🔍 Window.finalCrawler:", window.finalCrawler);

      await this.createSampleDatabase();
      return true;
    }
  }

  // Tạo dữ liệu mẫu để test
  async createSampleDatabase() {
    console.log("🎯 Creating sample champions database...");

    const sampleChampions = [
      {
        id: "Ahri",
        name: "Ahri",
        title: "the Nine-Tailed Fox",
        blurb:
          "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy.",
        info: { attack: 3, defense: 4, magic: 8, difficulty: 5 },
        image: { full: "Ahri.png" },
        tags: ["Mage", "Assassin"],
        stats: {
          hp: 570,
          hpperlevel: 92,
          mp: 418,
          mpperlevel: 25,
          movespeed: 330,
          armor: 21,
          armorperlevel: 4.7,
          spellblock: 30,
          spellblockperlevel: 1.3,
          attackrange: 550,
          hpregen: 2.5,
          hpregenperlevel: 0.6,
          mpregen: 8,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 53,
          attackdamageperlevel: 3,
          attackspeedperlevel: 2,
          attackspeed: 0.668,
        },
      },
      {
        id: "Garen",
        name: "Garen",
        title: "the Might of Demacia",
        blurb:
          "A proud and noble warrior, Garen fights as one of the Dauntless Vanguard.",
        info: { attack: 7, defense: 7, magic: 1, difficulty: 5 },
        image: { full: "Garen.png" },
        tags: ["Fighter", "Tank"],
        stats: {
          hp: 620,
          hpperlevel: 84,
          mp: 0,
          mpperlevel: 0,
          movespeed: 340,
          armor: 36,
          armorperlevel: 4.2,
          spellblock: 32,
          spellblockperlevel: 1.25,
          attackrange: 175,
          hpregen: 8,
          hpregenperlevel: 0.5,
          mpregen: 0,
          mpregenperlevel: 0,
          crit: 0,
          critperlevel: 0,
          attackdamage: 66,
          attackdamageperlevel: 4.5,
          attackspeedperlevel: 2.9,
          attackspeed: 0.625,
        },
      },
      {
        id: "KaiSa",
        name: "Kai'Sa",
        title: "Daughter of the Void",
        blurb:
          "Claimed by the Void when she was only a child, Kai'Sa has become something more than human.",
        info: { attack: 8, defense: 5, magic: 3, difficulty: 6 },
        image: { full: "KaiSa.png" },
        tags: ["Marksman"],
        stats: {
          hp: 600,
          hpperlevel: 88,
          mp: 344,
          mpperlevel: 38,
          movespeed: 335,
          armor: 28,
          armorperlevel: 4.2,
          spellblock: 30,
          spellblockperlevel: 1.3,
          attackrange: 525,
          hpregen: 3.5,
          hpregenperlevel: 0.55,
          mpregen: 8.2,
          mpregenperlevel: 0.45,
          crit: 0,
          critperlevel: 0,
          attackdamage: 59,
          attackdamageperlevel: 2,
          attackspeedperlevel: 1.8,
          attackspeed: 0.644,
        },
      },
      {
        id: "Yasuo",
        name: "Yasuo",
        title: "the Unforgiven",
        blurb:
          "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies.",
        info: { attack: 8, defense: 4, magic: 4, difficulty: 10 },
        image: { full: "Yasuo.png" },
        tags: ["Fighter", "Assassin"],
        stats: {
          hp: 520,
          hpperlevel: 87,
          mp: 0,
          mpperlevel: 0,
          movespeed: 345,
          armor: 30,
          armorperlevel: 3.4,
          spellblock: 32,
          spellblockperlevel: 1.25,
          attackrange: 175,
          hpregen: 6.5,
          hpregenperlevel: 0.9,
          mpregen: 0,
          mpregenperlevel: 0,
          crit: 0,
          critperlevel: 0,
          attackdamage: 60,
          attackdamageperlevel: 3.2,
          attackspeedperlevel: 2.5,
          attackspeed: 0.67,
        },
      },
      {
        id: "Jinx",
        name: "Jinx",
        title: "the Loose Cannon",
        blurb:
          "A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences.",
        info: { attack: 9, defense: 2, magic: 4, difficulty: 6 },
        image: { full: "Jinx.png" },
        tags: ["Marksman"],
        stats: {
          hp: 610,
          hpperlevel: 86,
          mp: 245,
          mpperlevel: 45,
          movespeed: 325,
          armor: 26,
          armorperlevel: 3.5,
          spellblock: 30,
          spellblockperlevel: 0.5,
          attackrange: 525,
          hpregen: 3.75,
          hpregenperlevel: 0.5,
          mpregen: 6.7,
          mpregenperlevel: 1,
          crit: 0,
          critperlevel: 0,
          attackdamage: 59,
          attackdamageperlevel: 2.4,
          attackspeedperlevel: 1,
          attackspeed: 0.625,
        },
      },
    ];

    // Mapping region cho sample champions
    const regionMapping = {
      Ahri: "ionia",
      Garen: "demacia",
      KaiSa: "void",
      Yasuo: "ionia",
      Jinx: "zaun",
    };

    this.allChampions = [];
    this.championsData = {};

    sampleChampions.forEach((champion) => {
      const regionId = regionMapping[champion.id] || "no";
      const enhancedChampion = this.createIndividualChampionDatabase(
        champion,
        regionId
      );
      this.allChampions.push(enhancedChampion);
      this.championsData[champion.id] = enhancedChampion;
    });

    // Sắp xếp A-Z
    this.sortChampions("alphabetical");

    // Lưu vào localStorage
    this.saveToStorage();

    console.log(
      `✅ Created sample database with ${this.allChampions.length} champions`
    );
    return true;
  }

  // Tạo database chi tiết cho 1 tướng
  createIndividualChampionDatabase(champion, regionId) {
    const region = this.regionMap[regionId] || this.regionMap.no;

    return {
      // Basic Info
      id: champion.id,
      key: champion.key || champion.id,
      name: champion.name,
      title: champion.title || champion.fullName || "",

      // Visual
      image: `${this.API_BASE}/${this.CURRENT_VERSION}/img/champion/${champion.id}.png`,
      splashArt: `${this.API_BASE}/img/champion/splash/${champion.id}_0.jpg`,

      // Region & Classification
      region: {
        id: regionId,
        name: region.name,
        icon: region.icon,
        color: region.color,
      },

      // Gameplay
      role: champion.role || "Fighter",
      tags: champion.tags || ["Fighter"],

      // Stats (from API or default)
      stats: champion.stats || {
        hp: 600,
        hpperlevel: 90,
        mp: 300,
        mpperlevel: 50,
        movespeed: 340,
        armor: 30,
        armorperlevel: 4,
        spellblock: 30,
        spellblockperlevel: 1,
        attackrange: 125,
        hpregen: 8,
        hpregenperlevel: 0.8,
        mpregen: 7,
        mpregenperlevel: 0.7,
        crit: 0,
        critperlevel: 0,
        attackdamage: 65,
        attackdamageperlevel: 3,
        attackspeedperlevel: 3,
        attackspeed: 0.625,
      },

      // Abilities (4 skills)
      abilities: champion.skills || [
        {
          key: "Passive",
          name: "Passive Ability",
          description: "Champion passive ability",
        },
        { key: "Q", name: "Q Ability", description: "First ability" },
        { key: "W", name: "W Ability", description: "Second ability" },
        { key: "E", name: "E Ability", description: "Third ability" },
        { key: "R", name: "R Ability", description: "Ultimate ability" },
      ],

      // Lore & Story
      lore:
        champion.lore ||
        champion.fullLore ||
        `${champion.name} is a champion from ${region.name}.`,
      blurb:
        champion.blurb ||
        champion.lore ||
        `A powerful champion from ${region.name}.`,

      // Relationships & Connections
      allies: champion.loreConnections || [],
      enemies: [],

      // Fun Facts
      funFacts: champion.funFacts || [
        `${champion.name} comes from ${region.name}`,
        `Primary role: ${champion.role || "Fighter"}`,
        `Has unique abilities and playstyle`,
      ],

      // Skins Collection
      skins: champion.skins || [
        {
          id: 0,
          name: "Classic",
          image: `${this.API_BASE}/img/champion/splash/${champion.id}_0.jpg`,
          price: "Default",
        },
      ],

      // Personal Details
      species: champion.species || "Human",
      gender: champion.gender || "Unknown",
      age: champion.age || "Unknown",

      // Equipment
      weapon: champion.weapon || "Unknown",
      weaponType: champion.weaponSummary || "Melee",

      // Meta Information
      releaseDate: champion.releaseDate || "2009",
      lastUpdated: new Date().toISOString(),
      difficulty: this.calculateDifficulty(champion),
      popularity: Math.floor(Math.random() * 100) + 1,

      // Search Keywords (for better search)
      searchKeywords: [
        champion.name.toLowerCase(),
        (champion.title || "").toLowerCase(),
        region.name.toLowerCase(),
        (champion.role || "").toLowerCase(),
        ...(champion.tags || []).map((tag) => tag.toLowerCase()),
      ].filter(Boolean),
    };
  }

  // Tính toán độ khó
  calculateDifficulty(champion) {
    if (champion.info && champion.info.difficulty) {
      return Math.min(10, Math.max(1, champion.info.difficulty));
    }

    // Default difficulty based on role
    const roleDifficulty = {
      Tank: 3,
      Fighter: 5,
      Assassin: 7,
      Mage: 6,
      Marksman: 6,
      Support: 4,
    };

    return roleDifficulty[champion.role] || 5;
  }

  // Sắp xếp tướng
  sortChampions(sortType = "alphabetical") {
    this.sortOrder = sortType;

    switch (sortType) {
      case "alphabetical":
        this.allChampions.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "region":
        this.allChampions.sort((a, b) => {
          if (a.region.name === b.region.name) {
            return a.name.localeCompare(b.name);
          }
          return a.region.name.localeCompare(b.region.name);
        });
        break;

      case "role":
        this.allChampions.sort((a, b) => {
          if (a.role === b.role) {
            return a.name.localeCompare(b.name);
          }
          return a.role.localeCompare(b.role);
        });
        break;

      case "difficulty":
        this.allChampions.sort((a, b) => {
          if (a.difficulty === b.difficulty) {
            return a.name.localeCompare(b.name);
          }
          return a.difficulty - b.difficulty;
        });
        break;

      default:
        this.allChampions.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  // Lọc tướng
  filterChampions(searchText = "", regionFilter = "all") {
    let filtered = this.allChampions;

    // Lọc theo region
    if (regionFilter !== "all") {
      filtered = filtered.filter(
        (champion) => champion.region.id === regionFilter
      );
    }

    // Lọc theo search text
    if (searchText.trim()) {
      const search = searchText.toLowerCase().trim();
      filtered = filtered.filter((champion) =>
        champion.searchKeywords.some((keyword) => keyword.includes(search))
      );
    }

    return filtered;
  }

  // Render champion card với ảnh lớn
  renderChampionCard(champion) {
    return `
      <div class="champion-card bg-slate-700 rounded-lg p-4 hover:bg-slate-600 cursor-pointer transition-all" 
           onclick="showChampionModal('${champion.id}')">
        
        <!-- Champion Image (Large) -->
        <div class="flex justify-center mb-3">
          <img src="${champion.image}" 
               alt="${champion.name}"
               class="champion-image w-28 h-28 object-cover rounded-xl border-2 border-slate-500"
               onerror="this.src='https://via.placeholder.com/112x112/334155/e2e8f0?text=${champion.name.charAt(
                 0
               )}'">
        </div>
        
        <!-- Champion Name -->
        <h3 class="text-lg font-bold text-center text-white mb-1 truncate">${
          champion.name
        }</h3>
        
        <!-- Champion Title -->
        <p class="text-xs text-slate-300 text-center mb-2 truncate">${
          champion.title
        }</p>
        
        <!-- Region Badge -->
        <div class="flex justify-center mb-2">
          <span class="px-2 py-1 rounded-full text-xs font-medium" 
                style="background-color: ${champion.region.color}20; color: ${
      champion.region.color
    }; border: 1px solid ${champion.region.color}40;">
            ${champion.region.icon} ${champion.region.name}
          </span>
        </div>
        
        <!-- Role -->
        <p class="text-xs text-center text-slate-400">${champion.role}</p>
        
        <!-- Difficulty Stars -->
        <div class="flex justify-center mt-2">
          ${"★".repeat(champion.difficulty)}${"☆".repeat(
      10 - champion.difficulty
    )}
        </div>
      </div>
    `;
  }

  // Render all champions
  renderAllChampions(container, searchText = "", regionFilter = "all") {
    const filtered = this.filterChampions(searchText, regionFilter);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12">
          <p class="text-slate-400 text-lg">❌ Không tìm thấy tướng nào</p>
          <p class="text-slate-500 text-sm mt-2">Thử thay đổi từ khóa tìm kiếm hoặc region filter</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered
      .map((champion) => this.renderChampionCard(champion))
      .join("");

    // Update counters
    document.getElementById("totalChampions").textContent =
      this.allChampions.length;
    document.getElementById("filteredChampions").textContent = filtered.length;
    document.getElementById("currentTotal").textContent =
      this.allChampions.length;
  }

  // Lưu vào localStorage
  saveToStorage() {
    try {
      const data = {
        champions: this.allChampions,
        championsData: this.championsData,
        lastUpdated: new Date().toISOString(),
      };
      localStorage.setItem("enhancedChampionsDatabase", JSON.stringify(data));
      console.log("✅ Enhanced database saved to localStorage");
    } catch (error) {
      console.error("❌ Error saving to localStorage:", error);
    }
  }
  // Generate individual champion database files
  generateIndividualFiles() {
    const files = [];

    Object.values(this.championsData).forEach((champion) => {
      // Tạo tên file từ tên tướng, loại bỏ ký tự đặc biệt
      const fileName = this.sanitizeFileName(champion.name);

      const fileContent = `// ${champion.name} - Individual Champion Database
const ${champion.id}Database = ${JSON.stringify(champion, null, 2)};

// Export for use
if (typeof window !== 'undefined') {
  window.${champion.id}Database = ${champion.id}Database;
}

export default ${champion.id}Database;
export { ${champion.id}Database };

console.log('✅ ${champion.name} database loaded');
`;

      files.push({
        name: `${fileName}.js`,
        content: fileContent,
        path: `database/champions/${fileName}.js`,
        champion: champion,
      });
    });

    console.log(
      `🔥 Generated ${files.length} individual champion database files`
    );
    return files;
  }

  // Sanitize filename - loại bỏ ký tự đặc biệt
  sanitizeFileName(name) {
    return name
      .toLowerCase()
      .replace(/'/g, "") // loại bỏ dấu nháy đơn
      .replace(/\./g, "") // loại bỏ dấu chấm
      .replace(/[^a-z0-9]/g, "-") // thay thế ký tự đặc biệt bằng dấu gạch ngang
      .replace(/-+/g, "-") // loại bỏ dấu gạch ngang liên tiếp
      .replace(/^-|-$/g, ""); // loại bỏ dấu gạch ngang ở đầu và cuối
  }

  // Create physical files - tạo file vật lý trong database/champions/
  async createIndividualFiles() {
    try {
      const files = this.generateIndividualFiles();
      const createdFiles = [];

      for (const file of files) {
        // Tạo link download cho từng file
        const blob = new Blob([file.content], { type: "text/javascript" });
        const url = URL.createObjectURL(blob);

        // Tạo link tạm thời để download
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);

        createdFiles.push({
          name: file.name,
          champion: file.champion.name,
          size: file.content.length,
          downloadUrl: url,
        });
      }

      console.log(`✅ Created ${createdFiles.length} champion database files`);
      console.log(
        "📁 Files ready for download:",
        createdFiles.map((f) => f.name)
      );

      return createdFiles;
    } catch (error) {
      console.error("❌ Error creating individual files:", error);
      return [];
    }
  }

  // Download all champion files as zip
  async downloadAllChampionFiles() {
    try {
      const files = this.generateIndividualFiles();

      // Tạo một file zip chứa tất cả champion files
      let zipContent = `// Champions Database Collection\n// Generated ${new Date().toISOString()}\n\n`;

      files.forEach((file) => {
        zipContent += `\n// ============ ${file.champion.name} ============\n`;
        zipContent += file.content;
        zipContent += `\n// ============ End ${file.champion.name} ============\n\n`;
      });

      // Download file tổng hợp
      const blob = new Blob([zipContent], { type: "text/javascript" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "all-champions-database.js";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      console.log("✅ Downloaded all champion database files");
      return true;
    } catch (error) {
      console.error("❌ Error downloading files:", error);
      return false;
    }
  }

  // Get champion by ID
  getChampion(championId) {
    return this.championsData[championId] || null;
  }

  // Get champions by region
  getChampionsByRegion(regionId) {
    return this.allChampions.filter(
      (champion) => champion.region.id === regionId
    );
  }

  // Get champions by role
  getChampionsByRole(role) {
    return this.allChampions.filter((champion) => champion.role === role);
  }
  // Search champions
  searchChampions(query) {
    return this.filterChampions(query, "all");
  }

  // ===== EDIT & SAVE FUNCTIONS =====

  // Edit champion information
  editChampion(championId, updates) {
    try {
      const champion = this.championsData[championId];
      if (!champion) {
        console.error(`❌ Champion ${championId} not found`);
        return false;
      }

      // Backup original data
      const originalData = JSON.parse(JSON.stringify(champion));

      // Apply updates
      Object.keys(updates).forEach((key) => {
        if (key === "stats" && typeof updates[key] === "object") {
          // Merge stats
          champion.stats = { ...champion.stats, ...updates[key] };
        } else if (key === "region" && typeof updates[key] === "object") {
          // Update region
          champion.region = { ...champion.region, ...updates[key] };
        } else if (key === "abilities" && Array.isArray(updates[key])) {
          // Update abilities
          champion.abilities = updates[key];
        } else {
          // Direct update
          champion[key] = updates[key];
        }
      });

      // Update in allChampions array
      const index = this.allChampions.findIndex((c) => c.id === championId);
      if (index !== -1) {
        this.allChampions[index] = champion;
      }

      // Save to storage immediately
      this.saveToStorage();

      console.log(`✅ Champion ${champion.name} updated successfully`);
      return {
        success: true,
        champion: champion,
        originalData: originalData,
      };
    } catch (error) {
      console.error(`❌ Error editing champion ${championId}:`, error);
      return false;
    }
  }

  // Save champion data permanently
  saveChampion(championId) {
    try {
      const champion = this.championsData[championId];
      if (!champion) {
        console.error(`❌ Champion ${championId} not found`);
        return false;
      }

      // Update timestamp
      champion.lastModified = new Date().toISOString();

      // Save to localStorage
      this.saveToStorage();

      // Update DatabaseManager if available
      if (window.dbManager && window.dbManager.champions) {
        const dbIndex = window.dbManager.champions.findIndex(
          (c) => c.id === championId
        );
        if (dbIndex !== -1) {
          // Update basic info in DatabaseManager
          window.dbManager.champions[dbIndex] = {
            ...window.dbManager.champions[dbIndex],
            name: champion.name,
            title: champion.title,
            blurb: champion.blurb,
            role: champion.role,
            tags: champion.tags,
            stats: champion.stats,
          };

          // Save DatabaseManager to its storage
          window.dbManager.saveToStorage();
        }
      }

      console.log(`✅ Champion ${champion.name} saved permanently`);
      return true;
    } catch (error) {
      console.error(`❌ Error saving champion ${championId}:`, error);
      return false;
    }
  }

  // Batch save all champions
  saveAllChampions() {
    try {
      this.saveToStorage();

      // Update all timestamps
      Object.values(this.championsData).forEach((champion) => {
        champion.lastModified = new Date().toISOString();
      });

      console.log(`✅ All ${this.allChampions.length} champions saved`);
      return true;
    } catch (error) {
      console.error("❌ Error saving all champions:", error);
      return false;
    }
  }

  // Reset champion to original data
  resetChampion(championId) {
    try {
      // You would need to store original data somewhere
      // For now, we'll reload from DatabaseManager
      if (window.dbManager && window.dbManager.champions) {
        const originalChampion = window.dbManager.champions.find(
          (c) => c.id === championId
        );
        if (originalChampion) {
          const enhancedChampion = this.createIndividualChampionDatabase(
            originalChampion,
            originalChampion.regionId
          );

          this.championsData[championId] = enhancedChampion;

          const index = this.allChampions.findIndex((c) => c.id === championId);
          if (index !== -1) {
            this.allChampions[index] = enhancedChampion;
          }

          this.saveToStorage();

          console.log(
            `✅ Champion ${enhancedChampion.name} reset to original data`
          );
          return enhancedChampion;
        }
      }

      console.error(
        `❌ Cannot reset champion ${championId} - no original data found`
      );
      return false;
    } catch (error) {
      console.error(`❌ Error resetting champion ${championId}:`, error);
      return false;
    }
  }

  // Get edit history (if we implement it)
  getEditHistory(championId) {
    // This would require implementing edit history tracking
    return [];
  }
}

// Global instance
window.enhancedDB = new EnhancedChampionsDatabase();

console.log("🏰 Enhanced Champions Database loaded!");
