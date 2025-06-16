// Scraped Champions Data Integration
// This file loads and processes the scraped champions data

class ScrapedChampionsManager {
  constructor() {
    this.scrapedData = null;
    this.isLoaded = false;
  }

  // Load scraped data from JSON file
  async loadScrapedData() {
    try {
      const response = await fetch("./scraped_champions_data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.scrapedData = await response.json();
      this.isLoaded = true;
      console.log(
        `Đã tải ${this.scrapedData.totalChampions} tướng từ dữ liệu cào được`
      );
      return this.scrapedData;
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu tướng đã cào:", error);
      return null;
    }
  }

  // Get all scraped champions
  getAllScrapedChampions() {
    if (!this.isLoaded || !this.scrapedData) {
      return [];
    }

    const allChampions = [];
    const regions = Object.keys(this.scrapedData.championsByRegion);

    regions.forEach((region) => {
      const champions = this.scrapedData.championsByRegion[region];
      allChampions.push(...champions);
    });

    return allChampions;
  }

  // Get champions by region
  getChampionsByRegion(region) {
    if (!this.isLoaded || !this.scrapedData) {
      return [];
    }

    return this.scrapedData.championsByRegion[region] || [];
  }

  // Convert scraped champion to app format
  convertToAppFormat(scrapedChampion) {
    return {
      id: scrapedChampion.id,
      name: scrapedChampion.name,
      fullName: scrapedChampion.fullName,
      icon: scrapedChampion.icon || this.getDefaultIcon(scrapedChampion.role),
      role: scrapedChampion.role,
      region: scrapedChampion.region,
      image: scrapedChampion.image,
      gender: scrapedChampion.gender || "Không rõ",
      species: scrapedChampion.species || "Không rõ",
      age: scrapedChampion.age || "Không rõ",
      weapon: scrapedChampion.weapon || "Không rõ",
      weaponSummary:
        scrapedChampion.weaponSummary || scrapedChampion.weapon || "Không rõ",
      releaseDate: scrapedChampion.releaseDate || "Không rõ",
      lore: this.translateLore(scrapedChampion.lore),
      fullLore: this.translateLore(scrapedChampion.fullLore),
      loreConnections: scrapedChampion.loreConnections || [],
      affiliation: scrapedChampion.affiliation || "Không rõ",
      status: scrapedChampion.status || "Hoạt động",
      notes: scrapedChampion.notes || "",
      skills: scrapedChampion.skills || [],
      specialFeatures: scrapedChampion.specialFeatures || [],
      isOfficial: true, // Mark as official champion
      source: "scraped",
    };
  }

  // Get default icon based on role
  getDefaultIcon(role) {
    const roleIcons = {
      "Đấu Sĩ": "⚔️",
      "Xạ Thủ": "🏹",
      "Pháp Sư": "🔮",
      "Sát Thủ": "🗡️",
      "Hỗ Trợ": "🛡️",
      "Đỡ Đòn": "🛡️",
    };
    return roleIcons[role] || "⚔️";
  }

  // Basic translation for lore (can be enhanced)
  translateLore(englishLore) {
    if (!englishLore) return "";

    // For now, return the English lore as is
    // In the future, this could be enhanced with translation API
    return englishLore;
  }

  // Get champions not in current database
  getMissingChampions(currentChampions) {
    const scrapedChampions = this.getAllScrapedChampions();
    const currentIds = new Set(currentChampions.map((c) => c.id));
    const currentNames = new Set(
      currentChampions.map((c) => c.name.toLowerCase())
    );

    return scrapedChampions.filter(
      (champion) =>
        !currentIds.has(champion.id) &&
        !currentNames.has(champion.name.toLowerCase())
    );
  }

  // Merge scraped data with existing data
  mergeWithExistingData(existingChampions) {
    const scrapedChampions = this.getAllScrapedChampions();
    const existingIds = new Set(existingChampions.map((c) => c.id));

    // Convert new champions to app format
    const newChampions = scrapedChampions
      .filter((champion) => !existingIds.has(champion.id))
      .map((champion) => this.convertToAppFormat(champion));

    // Combine existing and new champions
    return [...existingChampions, ...newChampions];
  }

  // Get statistics about scraped data
  getStatistics() {
    if (!this.isLoaded || !this.scrapedData) {
      return null;
    }

    const stats = {
      totalChampions: this.scrapedData.totalChampions,
      version: this.scrapedData.version,
      lastUpdated: this.scrapedData.lastUpdated,
      regionCounts: {},
    };

    // Count champions by region
    Object.keys(this.scrapedData.championsByRegion).forEach((region) => {
      stats.regionCounts[region] =
        this.scrapedData.championsByRegion[region].length;
    });

    return stats;
  }

  // Update existing champion with scraped data
  updateChampionWithScrapedData(existingChampion, scrapedChampion) {
    return {
      ...existingChampion,
      // Update with scraped data while preserving custom fields
      image: scrapedChampion.image || existingChampion.image,
      skills:
        scrapedChampion.skills && scrapedChampion.skills.length > 0
          ? scrapedChampion.skills
          : existingChampion.skills,
      fullLore: scrapedChampion.fullLore || existingChampion.fullLore,
      releaseDate:
        scrapedChampion.releaseDate !== "Không rõ"
          ? scrapedChampion.releaseDate
          : existingChampion.releaseDate,
      // Keep existing custom data
      isOfficial: true,
      lastUpdated: new Date().toISOString(),
    };
  }
}

// Create global instance
window.scrapedChampionsManager = new ScrapedChampionsManager();

// Auto-load data when script loads
document.addEventListener("DOMContentLoaded", async () => {
  await window.scrapedChampionsManager.loadScrapedData();
});
