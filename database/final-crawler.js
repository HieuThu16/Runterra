// Final Champion Crawler - Không lặp dữ liệu và lưu vào database
class FinalChampionCrawler {
  constructor() {
    this.API_BASE = "https://ddragon.leagueoflegends.com/cdn";
    this.CURRENT_VERSION = "14.1.1";
    this.processedChampions = new Set(); // Tránh lặp
    this.regions = {
      demacia: { id: "demacia", name: "Demacia", icon: "🏰", champions: [] },
      noxus: { id: "noxus", name: "Noxus", icon: "⚔️", champions: [] },
      ionia: { id: "ionia", name: "Ionia", icon: "🌸", champions: [] },
      piltover: { id: "piltover", name: "Piltover", icon: "🔧", champions: [] },
      zaun: { id: "zaun", name: "Zaun", icon: "⚗️", champions: [] },
      freljord: { id: "freljord", name: "Freljord", icon: "❄️", champions: [] },
      bilgewater: {
        id: "bilgewater",
        name: "Bilgewater",
        icon: "🏴‍☠️",
        champions: [],
      },
      shadowisles: {
        id: "shadowisles",
        name: "Shadow Isles",
        icon: "💀",
        champions: [],
      },
      targon: { id: "targon", name: "Mount Targon", icon: "⭐", champions: [] },
      shurima: { id: "shurima", name: "Shurima", icon: "🏜️", champions: [] },
      void: { id: "void", name: "The Void", icon: "🕳️", champions: [] },
      ixtal: { id: "ixtal", name: "Ixtal", icon: "🌿", champions: [] },
      bandle: { id: "bandle", name: "Bandle City", icon: "🍄", champions: [] },
      no: { id: "no", name: "Unknown Region", icon: "❓", champions: [] },
    };

    // Champion-Region mapping (dựa trên lore chính thức)
    this.championRegionMap = {
      Aatrox: "shurima",
      Ahri: "ionia",
      Akali: "ionia",
      Akshan: "shurima",
      Alistar: "no",
      Amumu: "shurima",
      Anivia: "freljord",
      Annie: "noxus",
      Aphelios: "targon",
      Ashe: "freljord",
      AurelionSol: "targon",
      Azir: "shurima",
      Bard: "no",
      Blitzcrank: "zaun",
      Brand: "no",
      Braum: "freljord",
      Caitlyn: "piltover",
      Camille: "piltover",
      Cassiopeia: "noxus",
      Chogath: "void",
      Corki: "bandle",
      Darius: "noxus",
      Diana: "targon",
      Draven: "noxus",
      DrMundo: "zaun",
      Ekko: "zaun",
      Elise: "shadowisles",
      Evelynn: "no",
      Ezreal: "piltover",
      Fiddlesticks: "no",
      Fiora: "demacia",
      Fizz: "bilgewater",
      Galio: "demacia",
      Gangplank: "bilgewater",
      Garen: "demacia",
      Gnar: "freljord",
      Gragas: "freljord",
      Graves: "bilgewater",
      Gwen: "shadowisles",
      Hecarim: "shadowisles",
      Heimerdinger: "piltover",
      Illaoi: "bilgewater",
      Irelia: "ionia",
      Ivern: "ionia",
      Janna: "zaun",
      JarvanIV: "demacia",
      Jax: "no",
      Jayce: "piltover",
      Jhin: "ionia",
      Jinx: "zaun",
      Kaisa: "void",
      Kalista: "shadowisles",
      Karma: "ionia",
      Karthus: "shadowisles",
      Kassadin: "shurima",
      Katarina: "noxus",
      Kayle: "targon",
      Kayn: "ionia",
      Kennen: "ionia",
      Khazix: "void",
      Kindred: "no",
      Kled: "noxus",
      KogMaw: "void",
      Leblanc: "noxus",
      LeeSin: "ionia",
      Leona: "targon",
      Lillia: "ionia",
      Lissandra: "freljord",
      Lucian: "demacia",
      Lulu: "bandle",
      Lux: "demacia",
      Malphite: "ixtal",
      Malzahar: "void",
      Maokai: "shadowisles",
      MasterYi: "ionia",
      MissFortune: "bilgewater",
      MonkeyKing: "ionia",
      Mordekaiser: "noxus",
      Morgana: "targon",
      Nami: "targon",
      Nasus: "shurima",
      Nautilus: "bilgewater",
      Neeko: "ixtal",
      Nidalee: "ixtal",
      Nocturne: "no",
      Nunu: "freljord",
      Olaf: "freljord",
      Orianna: "piltover",
      Ornn: "freljord",
      Pantheon: "targon",
      Poppy: "demacia",
      Pyke: "bilgewater",
      Qiyana: "ixtal",
      Quinn: "demacia",
      Rakan: "ionia",
      Rammus: "shurima",
      RekSai: "void",
      Rell: "noxus",
      Renata: "zaun",
      Renekton: "shurima",
      Rengar: "ixtal",
      Riven: "noxus",
      Rumble: "bandle",
      Ryze: "no",
      Samira: "noxus",
      Sejuani: "freljord",
      Senna: "demacia",
      Seraphine: "piltover",
      Sett: "ionia",
      Shaco: "no",
      Shen: "ionia",
      Shyvana: "demacia",
      Singed: "zaun",
      Sion: "noxus",
      Sivir: "shurima",
      Skarner: "ixtal",
      Sona: "demacia",
      Soraka: "targon",
      Swain: "noxus",
      Sylas: "demacia",
      Syndra: "ionia",
      TahmKench: "bilgewater",
      Taliyah: "shurima",
      Talon: "noxus",
      Taric: "targon",
      Teemo: "bandle",
      Thresh: "shadowisles",
      Tristana: "bandle",
      Trundle: "freljord",
      Tryndamere: "freljord",
      TwistedFate: "bilgewater",
      Twitch: "zaun",
      Udyr: "freljord",
      Urgot: "zaun",
      Varus: "ionia",
      Vayne: "demacia",
      Veigar: "bandle",
      Velkoz: "void",
      Vex: "bandle",
      Vi: "piltover",
      Viego: "shadowisles",
      Viktor: "zaun",
      Vladimir: "noxus",
      Volibear: "freljord",
      Warwick: "zaun",
      Xayah: "ionia",
      Xerath: "shurima",
      XinZhao: "demacia",
      Yasuo: "ionia",
      Yone: "ionia",
      Yorick: "shadowisles",
      Yuumi: "bandle",
      Zac: "zaun",
      Zed: "ionia",
      Zeri: "zaun",
      Ziggs: "zaun",
      Zilean: "shurima",
      Zoe: "targon",
      Zyra: "ixtal",
    };
  }

  async getLatestVersion() {
    try {
      const response = await fetch(
        "https://ddragon.leagueoflegends.com/api/versions.json"
      );
      const versions = await response.json();
      this.CURRENT_VERSION = versions[0];
      console.log("✅ Latest version:", this.CURRENT_VERSION);
      return this.CURRENT_VERSION;
    } catch (error) {
      console.error("❌ Error getting version:", error);
      return this.CURRENT_VERSION;
    }
  }

  async getAllChampions() {
    try {
      const response = await fetch(
        `${this.API_BASE}/${this.CURRENT_VERSION}/data/en_US/champion.json`
      );
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("❌ Error getting champions:", error);
      return {};
    }
  }

  async getChampionDetail(championKey) {
    try {
      const response = await fetch(
        `${this.API_BASE}/${this.CURRENT_VERSION}/data/en_US/champion/${championKey}.json`
      );
      const data = await response.json();
      return data.data[championKey];
    } catch (error) {
      console.error(`❌ Error getting ${championKey}:`, error);
      return null;
    }
  }

  translateRole(role) {
    const roleMap = {
      Fighter: "Đấu Sĩ",
      Tank: "Đỡ Đòn",
      Assassin: "Sát Thủ",
      Mage: "Pháp Sư",
      Marksman: "Xạ Thủ",
      Support: "Hỗ Trợ",
    };
    return roleMap[role] || "Đấu Sĩ";
  }

  extractSkills(championDetail) {
    const skills = [];
    if (championDetail.passive) {
      skills.push(`Passive: ${championDetail.passive.name}`);
    }
    if (championDetail.spells) {
      championDetail.spells.forEach((spell, index) => {
        const key = ["Q", "W", "E", "R"][index];
        skills.push(`${key}: ${spell.name}`);
      });
    }
    return skills.length > 0 ? skills : ["hello", "hello", "hello", "hello"];
  }

  createChampionData(champion, detail) {
    const championId = champion.id;

    // Kiểm tra đã xử lý chưa để tránh lặp
    if (this.processedChampions.has(championId)) {
      console.log(
        `⚠️ Champion ${champion.name} already processed, skipping...`
      );
      return null;
    }

    this.processedChampions.add(championId);

    return {
      id: championId.toLowerCase(),
      name: champion.name,
      fullName: champion.title
        ? `${champion.name}, ${champion.title}`
        : champion.name,
      icon: "⚔️",
      role: this.translateRole(champion.tags[0] || "Fighter"),
      region: this.championRegionMap[championId] || "no",

      // Thông tin cơ bản (sẽ cập nhật thủ công)
      gender: "hello",
      species: "hello",
      age: "hello",

      // Vũ khí
      weaponSummary: "hello",
      weapon: "hello",

      // Kỹ năng từ API
      skills: detail
        ? this.extractSkills(detail)
        : ["hello", "hello", "hello", "hello"],

      // Cốt truyện từ API
      lore: champion.blurb || "hello",
      fullLore: detail ? detail.lore.replace(/<br>/g, "\n") : "hello",

      // Cần cập nhật thủ công
      loreConnections: ["hello"],
      funFacts: ["hello", "hello", "hello"],

      // Skins từ API
      skins: detail
        ? detail.skins.map((skin) => ({
            id: skin.id,
            name: skin.name || "Default",
            image: `${this.API_BASE}/img/champion/splash/${championId}_${skin.num}.jpg`,
          }))
        : [],

      // Hình ảnh
      image: `${this.API_BASE}/${this.CURRENT_VERSION}/img/champion/${championId}.png`,
      splashImage: `${this.API_BASE}/img/champion/splash/${championId}_0.jpg`,

      // Meta
      releaseDate: "hello",
    };
  }

  async crawlAllChampions() {
    console.log("🚀 Starting final champion crawl...");

    // Reset để tránh lặp
    this.processedChampions.clear();
    Object.keys(this.regions).forEach((region) => {
      this.regions[region].champions = [];
    });

    // Lấy version và champions
    await this.getLatestVersion();
    const champions = await this.getAllChampions();

    const championKeys = Object.keys(champions);
    const total = championKeys.length;
    let processed = 0;

    console.log(`📊 Processing ${total} unique champions...`);

    for (const key of championKeys) {
      try {
        processed++;
        console.log(
          `⚡ Processing ${processed}/${total}: ${champions[key].name}`
        );

        // Lấy chi tiết
        const detail = await this.getChampionDetail(key);

        // Tạo dữ liệu
        const championData = this.createChampionData(champions[key], detail);

        if (championData) {
          // Thêm vào region
          const regionId = championData.region;
          if (this.regions[regionId]) {
            this.regions[regionId].champions.push(championData);
            console.log(`✅ Added ${championData.name} to ${regionId}`);
          } else {
            console.warn(
              `⚠️ Unknown region ${regionId} for ${championData.name}`
            );
            this.regions.no.champions.push(championData);
          }
        }

        // Delay để tránh rate limit
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error) {
        console.error(`❌ Error processing ${key}:`, error);
      }
    }

    console.log("✅ Crawl completed!");
    this.showStats();
    await this.saveToDatabase();
  }

  showStats() {
    console.log("\n📊 FINAL CRAWL STATISTICS:");
    let total = 0;
    Object.entries(this.regions).forEach(([regionId, region]) => {
      console.log(`${region.name}: ${region.champions.length} champions`);
      total += region.champions.length;
    });
    console.log(`\nTotal unique champions: ${total}`);
    console.log(`Processed champions: ${this.processedChampions.size}`);
  }

  async saveToDatabase() {
    console.log("💾 Saving to database...");

    try {
      // Lưu từng region
      for (const [regionId, region] of Object.entries(this.regions)) {
        if (region.champions.length > 0) {
          await this.saveRegionFile(regionId, region);
        }
      }

      // Lưu database tổng hợp
      await this.saveCombinedDatabase();

      console.log("✅ All data saved to database folder!");
    } catch (error) {
      console.error("❌ Error saving to database:", error);
    }
  }

  async saveRegionFile(regionId, region) {
    const fileContent = `// ${region.name} Region Data - Auto Generated
const ${regionId}Data = {
  id: "${regionId}",
  name: "${region.name}",
  icon: "${region.icon}",
  existingChampions: ${JSON.stringify(region.champions, null, 2)}
};

if (typeof window !== 'undefined') {
  window.${regionId}Data = ${regionId}Data;
}

console.log('✅ ${region.name} loaded - ${
      region.champions.length
    } champions');`;

    console.log(
      `📁 Generated ${regionId}.js with ${region.champions.length} champions`
    );

    // Trong môi trường thực tế, bạn sẽ lưu file này vào database/regions/
    // Ở đây chúng ta chỉ log ra để copy
    console.log(`\n=== database/regions/${regionId}.js ===`);
    console.log(fileContent);
    console.log(`=== END ${regionId}.js ===\n`);
  }

  async saveCombinedDatabase() {
    const dbContent = `// Combined Champions Database - Auto Generated
const championsDatabase = {
  version: "${new Date().toISOString()}",
  totalChampions: ${this.processedChampions.size},
  regions: [
${Object.values(this.regions)
  .filter((r) => r.champions.length > 0)
  .map(
    (region) => `    {
      id: "${region.id}",
      name: "${region.name}",
      icon: "${region.icon}",
      existingChampions: ${region.id}Data.existingChampions,
      newChampions: []
    }`
  )
  .join(",\n")}
  ]
};

if (typeof window !== 'undefined') {
  window.championsDatabase = championsDatabase;
}

console.log('✅ Champions Database loaded:', championsDatabase.totalChampions, 'champions');`;

    console.log("\n=== database/championsDatabase.js ===");
    console.log(dbContent);
    console.log("=== END championsDatabase.js ===\n");
  }

  // Load từ localStorage (fallback)
  loadFromStorage() {
    try {
      const saved = localStorage.getItem("finalChampionsData");
      if (saved) {
        this.regions = JSON.parse(saved);
        console.log("✅ Loaded data from localStorage");
        return true;
      }
    } catch (error) {
      console.error("❌ Error loading from localStorage:", error);
    }
    return false;
  }

  // Save to localStorage (backup)
  saveToStorage() {
    try {
      localStorage.setItem("finalChampionsData", JSON.stringify(this.regions));
      console.log("✅ Backup saved to localStorage");
    } catch (error) {
      console.error("❌ Error saving to localStorage:", error);
    }
  }
}

// Global instance
window.finalCrawler = new FinalChampionCrawler();

// Global functions
window.startFinalCrawl = async () => {
  await window.finalCrawler.crawlAllChampions();
  window.finalCrawler.saveToStorage(); // Backup
};

window.showFinalStats = () => {
  window.finalCrawler.showStats();
};

window.loadFromStorage = () => {
  return window.finalCrawler.loadFromStorage();
};

console.log("🎯 Final Champion Crawler loaded!");
console.log("Commands:");
console.log("  - startFinalCrawl() - Cào dữ liệu không lặp");
console.log("  - showFinalStats() - Hiển thị thống kê");
console.log("  - loadFromStorage() - Load từ localStorage");
