// Database Manager for Champions
class ChampionsDB {
  constructor() {
    this.storageKey = "runeterra_champions_db";
    this.data = this.loadFromStorage() || championsDatabase;
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

    this.data.regions.forEach((region) => {
      if (regionId === "all" || regionId === region.id) {
        const championList =
          championType === "old"
            ? region.existingChampions
            : region.newChampions;
        if (championList && championList.length > 0) {
          champions = champions.concat(
            championList.map((champ) => ({ ...champ, regionName: region.name }))
          );
        }
      }
    });

    // Thêm special champions nếu cần
    if (
      championType === "new" &&
      (regionId === "all" || regionId === "special")
    ) {
      champions.push({
        ...this.data.specialChampions.apocalypseKnight,
        regionName: "Đặc Biệt",
      });
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
