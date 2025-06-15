// Database Manager for Champions
class ChampionsDB {
  constructor() {
    this.storageKey = "runeterra_champions_db";
    const savedData = this.loadFromStorage();
    this.data = savedData || championsDatabase;

    // Debug: Check what data is loaded
    console.log(
      "ChampionsDB constructor - savedData:",
      savedData ? "exists" : "null"
    );
    console.log(
      "ChampionsDB constructor - using data source:",
      savedData ? "localStorage" : "championsDatabase"
    );

    if (this.data.regions) {
      const shadowIsles = this.data.regions.find((r) => r.id === "shadowisles");
      if (shadowIsles) {
        const thresh = shadowIsles.existingChampions.find(
          (c) => c.name === "Thresh"
        );
        console.log(
          "ChampionsDB constructor - Thresh data found:",
          thresh ? "yes" : "no"
        );
        if (thresh) {
          console.log(
            "ChampionsDB constructor - Thresh skills:",
            thresh.skills ? "exists" : "missing"
          );
          console.log(
            "ChampionsDB constructor - Thresh specialFeatures:",
            thresh.specialFeatures ? "exists" : "missing"
          );
        }
      }
    }
  }

  // Lưu dữ liệu vào localStorage
  saveToStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
      return true;
    } catch (error) {
      console.error("Lỗi khi lưu database:", error);
      return false;
    }
  }

  // Tải dữ liệu từ localStorage
  loadFromStorage() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.error("Lỗi khi tải database:", error);
      return null;
    }
  }

  // Reset database về trạng thái ban đầu
  resetDatabase() {
    this.data = JSON.parse(JSON.stringify(championsDatabase)); // Deep copy
    this.saveToStorage();
    return true;
  }

  // Lấy tất cả regions
  getAllRegions() {
    return this.data.regions;
  }

  // Lấy region theo ID
  getRegion(regionId) {
    return this.data.regions.find((region) => region.id === regionId);
  }

  // Thêm tướng mới
  addChampion(regionId, championData, isNew = true) {
    const region = this.getRegion(regionId);
    if (!region) {
      throw new Error(`Không tìm thấy region: ${regionId}`);
    }

    const championList = isNew ? "newChampions" : "existingChampions";

    // Kiểm tra trùng tên
    const exists = region[championList].some(
      (champ) => champ.name.toLowerCase() === championData.name.toLowerCase()
    );

    if (exists) {
      throw new Error("Tướng này đã tồn tại trong vùng đất!");
    }

    // Tạo ID tự động nếu chưa có
    if (!championData.id) {
      championData.id = championData.name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
    }

    region[championList].push(championData);
    this.saveToStorage();
    return true;
  }

  // Xóa tướng
  removeChampion(regionId, championName, isNew = true) {
    const region = this.getRegion(regionId);
    if (!region) {
      throw new Error(`Không tìm thấy region: ${regionId}`);
    }

    const championList = isNew ? "newChampions" : "existingChampions";
    const index = region[championList].findIndex(
      (champ) => champ.name.toLowerCase() === championName.toLowerCase()
    );

    if (index === -1) {
      throw new Error("Không tìm thấy tướng để xóa!");
    }

    region[championList].splice(index, 1);
    this.saveToStorage();
    return true;
  }

  // Cập nhật tướng
  updateChampion(regionId, championName, newData, isNew = true) {
    const region = this.getRegion(regionId);
    if (!region) {
      throw new Error(`Không tìm thấy region: ${regionId}`);
    }

    const championList = isNew ? "newChampions" : "existingChampions";
    const championIndex = region[championList].findIndex(
      (champ) => champ.name.toLowerCase() === championName.toLowerCase()
    );

    if (championIndex === -1) {
      throw new Error("Không tìm thấy tướng để cập nhật!");
    }

    region[championList][championIndex] = {
      ...region[championList][championIndex],
      ...newData,
    };
    this.saveToStorage();
    return true;
  }
  // Lấy tất cả champions theo filter
  getChampions(regionId = "all", championType = "old") {
    let champions = [];

    // Always prioritize window.championsDatabase for translated data
    const dataSource = window.championsDatabase || this.data;

    console.log(
      `getChampions - Using data source: ${
        window.championsDatabase ? "window.championsDatabase" : "this.data"
      }`
    );

    dataSource.regions.forEach((region) => {
      if (regionId === "all" || regionId === region.id) {
        const championList =
          championType === "old"
            ? region.existingChampions
            : region.newChampions;
        if (championList && championList.length > 0) {
          champions = champions.concat(
            championList.map((champ) => {
              // Create a copy to avoid modifying original data
              const championWithRegion = { ...champ };
              championWithRegion.regionName = region.name;

              // Debug log for Thresh specifically
              if (champ.name === "Thresh") {
                console.log(`getChampions - Thresh data:`, {
                  name: championWithRegion.name,
                  lore: championWithRegion.lore
                    ? championWithRegion.lore.substring(0, 50) + "..."
                    : "N/A",
                  skills: championWithRegion.skills
                    ? championWithRegion.skills.length
                    : 0,
                });
              }

              return championWithRegion;
            })
          );
        }
      }
    });

    // Thêm special champions nếu cần
    if (
      championType === "new" &&
      (regionId === "all" || regionId === "special")
    ) {
      const specialChampion = JSON.parse(
        JSON.stringify(this.data.specialChampions.apocalypseKnight)
      );
      specialChampion.regionName = "Đặc Biệt";
      champions.push(specialChampion);
    }

    return champions;
  }
  // Export database to JSON
  exportDatabase() {
    return JSON.stringify(this.data, null, 2);
  }

  // Import database from JSON
  importDatabase(jsonData) {
    try {
      const importedData = JSON.parse(jsonData);
      this.data = importedData;
      this.saveToStorage();
      return true;
    } catch (error) {
      console.error("Lỗi khi import database:", error);
      return false;
    }
  }

  // Download database as JSON file
  downloadDatabase() {
    const dataStr = this.exportDatabase();
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `runeterra_champions_backup_${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // Upload and import database from file
  uploadDatabase(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = this.importDatabase(e.target.result);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }

  // Generate code snippet for adding champion to data.js
  generateChampionCode(regionId, championData, isNew = true) {
    const championCode = {
      name: championData.name,
      icon: championData.icon,
      role: championData.role,
      region: regionId,
      lore: championData.lore,
      ...(isNew && championData.skills ? { skills: championData.skills } : {}),
    };

    const codeString = JSON.stringify(championCode, null, 6);
    const arrayType = isNew ? "newChampions" : "existingChampions";

    return `// Thêm vào ${arrayType} của region "${regionId}" trong file js/data.js:\n${codeString},`;
  }

  // Lấy thống kê
  getStats() {
    let totalOld = 0;
    let totalNew = 0;
    const regionStats = {};

    this.data.regions.forEach((region) => {
      const oldCount = region.existingChampions.length;
      const newCount = region.newChampions.length;

      totalOld += oldCount;
      totalNew += newCount;

      regionStats[region.name] = {
        old: oldCount,
        new: newCount,
        total: oldCount + newCount,
      };
    });

    return {
      total: totalOld + totalNew + 1, // +1 for Apocalypse Knight
      old: totalOld,
      new: totalNew + 1, // +1 for Apocalypse Knight
      regions: regionStats,
    };
  }
}

// Export class
if (typeof module !== "undefined" && module.exports) {
  module.exports = ChampionsDB;
}
