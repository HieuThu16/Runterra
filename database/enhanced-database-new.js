// Enhanced Champions Database - Clean Version (Only DatabaseManager)
class EnhancedChampionsDatabase {
  constructor() {
    this.allChampions = [];
    this.championsData = {};
    this.sortOrder = "alphabetical";
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
  }

  // ONLY load from DatabaseManager - NO localStorage fallback
  async loadChampions() {
    try {
      if (
        window.dbManager &&
        window.dbManager.champions &&
        window.dbManager.champions.length > 0
      ) {
        console.log("🔄 Loading champions from DatabaseManager ONLY...");

        this.allChampions = [];
        this.championsData = {};

        window.dbManager.champions.forEach((champion) => {
          const enhancedChampion = this.createIndividualChampionDatabase(
            champion,
            champion.regionId
          );
          this.allChampions.push(enhancedChampion);
          this.championsData[champion.id] = enhancedChampion;
        });

        this.sortChampions("alphabetical");
        console.log(
          `✅ Successfully loaded ${this.allChampions.length} champions from DatabaseManager`
        );
        return true;
      }

      console.log("❌ DatabaseManager not available or no champions found");
      return false;
    } catch (error) {
      console.error("❌ Error loading champions:", error);
      return false;
    }
  }

  createIndividualChampionDatabase(champion, regionId) {
    const region = this.regionMap[regionId] || this.regionMap.no;

    return {
      id: champion.id,
      name: champion.name,
      title: champion.title,
      blurb: champion.blurb,

      database: {
        version: this.CURRENT_VERSION,
        lastUpdated: new Date().toISOString(),
        region: {
          id: regionId,
          name: region.name,
          icon: region.icon,
          color: region.color,
        },
        isEdited: false,
        editHistory: [],
      },

      originalData: {
        info: champion.info || {},
        image: champion.image || { full: champion.id + ".png" },
        tags: champion.tags || [],
        stats: champion.stats || {},
        spells: champion.spells || [],
        passive: champion.passive || {},
        skins: champion.skins || [],
        lore: champion.lore || champion.blurb || "",
        allytips: champion.allytips || [],
        enemytips: champion.enemytips || [],
        partype: champion.partype || "",
      },

      urls: {
        image: `${this.API_BASE}/${this.CURRENT_VERSION}/img/champion/${champion.id}.png`,
        square: `${this.API_BASE}/${this.CURRENT_VERSION}/img/champion/${champion.id}.png`,
        loading: `${this.API_BASE}/img/champion/loading/${champion.id}_0.jpg`,
        splash: `${this.API_BASE}/img/champion/splash/${champion.id}_0.jpg`,
      },

      getChampion: function (championId) {
        return this.championsData[championId];
      },
    };
  }

  sortChampions(order = "alphabetical") {
    this.sortOrder = order;
    switch (order) {
      case "alphabetical":
        this.allChampions.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    console.log(`✅ Sorted ${this.allChampions.length} champions by ${order}`);
  }

  getChampion(championId) {
    return this.championsData[championId];
  }

  editChampion(championId, editData) {
    try {
      const champion = this.championsData[championId];
      if (!champion) {
        console.error(`❌ Champion ${championId} not found`);
        return false;
      }

      if (editData.name && editData.name !== champion.name) {
        champion.name = editData.name;
      }

      if (editData.title && editData.title !== champion.title) {
        champion.title = editData.title;
      }

      if (editData.blurb && editData.blurb !== champion.blurb) {
        champion.blurb = editData.blurb;
      }

      if (editData.region && editData.region !== champion.database.region.id) {
        const newRegion = this.regionMap[editData.region] || this.regionMap.no;
        champion.database.region = {
          id: editData.region,
          name: newRegion.name,
          icon: newRegion.icon,
          color: newRegion.color,
        };
      }

      champion.database.isEdited = true;
      champion.database.lastUpdated = new Date().toISOString();

      this.championsData[championId] = champion;
      const index = this.allChampions.findIndex((c) => c.id === championId);
      if (index !== -1) {
        this.allChampions[index] = champion;
      }

      console.log(`✅ Successfully edited champion ${championId}`, editData);
      return true;
    } catch (error) {
      console.error(`❌ Error editing champion ${championId}:`, error);
      return false;
    }
  }

  saveChampion(championId) {
    try {
      const champion = this.championsData[championId];
      if (!champion) {
        console.error(`❌ Champion ${championId} not found`);
        return false;
      }

      if (window.dbManager && window.dbManager.champions) {
        const dbIndex = window.dbManager.champions.findIndex(
          (c) => c.id === championId
        );
        if (dbIndex !== -1) {
          window.dbManager.champions[dbIndex] = {
            ...window.dbManager.champions[dbIndex],
            name: champion.name,
            title: champion.title,
            blurb: champion.blurb,
            regionId: champion.database.region.id,
          };

          window.dbManager.saveToStorage();
          console.log(`✅ Saved champion ${championId} to DatabaseManager`);
          return true;
        }
      }

      console.error(`❌ DatabaseManager not available or champion not found`);
      return false;
    } catch (error) {
      console.error(`❌ Error saving champion ${championId}:`, error);
      return false;
    }
  }

  resetChampion(championId) {
    try {
      const champion = this.championsData[championId];
      if (!champion) {
        console.error(`❌ Champion ${championId} not found`);
        return false;
      }

      if (window.dbManager && window.dbManager.champions) {
        const originalChampion = window.dbManager.champions.find(
          (c) => c.id === championId
        );
        if (originalChampion) {
          champion.name = originalChampion.name;
          champion.title = originalChampion.title;
          champion.blurb = originalChampion.blurb;

          const originalRegion =
            this.regionMap[originalChampion.regionId] || this.regionMap.no;
          champion.database.region = {
            id: originalChampion.regionId,
            name: originalRegion.name,
            icon: originalRegion.icon,
            color: originalRegion.color,
          };

          champion.database.isEdited = false;
          champion.database.editHistory = [];
          champion.database.lastUpdated = new Date().toISOString();

          this.championsData[championId] = champion;
          const index = this.allChampions.findIndex((c) => c.id === championId);
          if (index !== -1) {
            this.allChampions[index] = champion;
          }

          console.log(`✅ Reset champion ${championId} to original state`);
          return true;
        }
      }

      console.error(`❌ Original data not found for champion ${championId}`);
      return false;
    } catch (error) {
      console.error(`❌ Error resetting champion ${championId}:`, error);
      return false;
    }
  }
}

// Global instance
let enhancedDB = null;

// Initialize function - ONLY loads from DatabaseManager
async function initializeEnhancedDatabase() {
  console.log("🚀 Initializing Enhanced Champions Database...");

  enhancedDB = new EnhancedChampionsDatabase();

  const success = await enhancedDB.loadChampions();

  if (success) {
    console.log(
      `✅ Enhanced Database initialized with ${enhancedDB.allChampions.length} champions`
    );
    return enhancedDB;
  } else {
    console.error("❌ Failed to initialize Enhanced Database");
    return null;
  }
}

// Export for global use
if (typeof window !== "undefined") {
  window.EnhancedChampionsDatabase = EnhancedChampionsDatabase;
  window.initializeEnhancedDatabase = initializeEnhancedDatabase;
}
