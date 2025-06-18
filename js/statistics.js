/**
 * Statistics Manager for Runeterra Champions
 * Quản lý tất cả thống kê và phân tích dữ liệu tướng
 */
class StatisticsManager {
  constructor(database) {
    this.db = database;
    this.cache = new Map();
    this.cacheExpiry = 5 * 60 * 1000; // 5 minutes
  }

  /**
   * Lấy tất cả dữ liệu champions từ database
   */
  getAllChampions() {
    const cacheKey = "all_champions";
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    const allChampions = [];

    // Lấy champions từ tất cả regions
    this.db.getAllRegions().forEach((region) => {
      // Official champions
      if (region.existingChampions) {
        region.existingChampions.forEach((champion) => {
          allChampions.push({
            ...champion,
            regionId: region.id,
            regionName: region.name,
            regionIcon: region.icon,
            isOfficial: true,
            type: "official",
          });
        });
      }

      // Creative champions
      if (region.newChampions) {
        region.newChampions.forEach((champion) => {
          allChampions.push({
            ...champion,
            regionId: region.id,
            regionName: region.name,
            regionIcon: region.icon,
            isOfficial: false,
            type: "creative",
          });
        });
      }
    });

    // Add special champions
    if (this.db.data.specialChampions) {
      Object.values(this.db.data.specialChampions).forEach((champion) => {
        allChampions.push({
          ...champion,
          regionId: "special",
          regionName: "Đặc Biệt",
          regionIcon: "⭐",
          isOfficial: false,
          type: "special",
        });
      });
    }

    this.setCache(cacheKey, allChampions);
    return allChampions;
  }

  /**
   * Thống kê tổng quan
   */
  getOverviewStats() {
    const cacheKey = "overview_stats";
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    const champions = this.getAllChampions();
    const regions = this.db.getAllRegions();

    // Đếm số loại vũ khí unique
    const uniqueWeapons = new Set();
    champions.forEach((champion) => {
      if (champion.weapon) {
        const weapons = champion.weapon.includes(",")
          ? champion.weapon.split(",").map((w) => w.trim())
          : [champion.weapon.trim()];
        weapons.forEach((weapon) => uniqueWeapons.add(weapon));
      }
    });

    // Tìm vai trò phổ biến nhất
    const roleCount = {};
    champions.forEach((champion) => {
      if (champion.role) {
        const roles = champion.role.split("/").map((r) => r.trim());
        roles.forEach((role) => {
          roleCount[role] = (roleCount[role] || 0) + 1;
        });
      }
    });

    const mostPopularRole = Object.keys(roleCount).reduce(
      (a, b) => (roleCount[a] > roleCount[b] ? a : b),
      "Không xác định"
    );

    const stats = {
      totalChampions: champions.length,
      officialChampions: champions.filter((c) => c.isOfficial).length,
      creativeChampions: champions.filter((c) => !c.isOfficial).length,
      totalRegions: regions.length,
      totalWeapons: uniqueWeapons.size,
      mostPopularRole: mostPopularRole,

      // Advanced stats
      championsWithSkills: champions.filter(
        (c) => c.skills && c.skills.length > 0
      ).length,
      championsWithImages: champions.filter((c) => c.image).length,
      championsWithFullLore: champions.filter(
        (c) => c.fullLore && c.fullLore.length > 100
      ).length,
      championsWithReleaseDate: champions.filter((c) => c.releaseDate).length,

      // Completion rates
      skillsCompletionRate: 0,
      imagesCompletionRate: 0,
      fullLoreCompletionRate: 0,
      releaseDateCompletionRate: 0,
    };

    // Calculate completion rates
    if (stats.totalChampions > 0) {
      stats.skillsCompletionRate = Math.round(
        (stats.championsWithSkills / stats.totalChampions) * 100
      );
      stats.imagesCompletionRate = Math.round(
        (stats.championsWithImages / stats.totalChampions) * 100
      );
      stats.fullLoreCompletionRate = Math.round(
        (stats.championsWithFullLore / stats.totalChampions) * 100
      );
      stats.releaseDateCompletionRate = Math.round(
        (stats.championsWithReleaseDate / stats.totalChampions) * 100
      );
    }

    this.setCache(cacheKey, stats);
    return stats;
  }

  /**
   * Thống kê theo vùng đất
   */
  getRegionStats() {
    const cacheKey = "region_stats";
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    const champions = this.getAllChampions();
    const regionStats = new Map();

    // Initialize with all regions
    this.db.getAllRegions().forEach((region) => {
      regionStats.set(region.id, {
        id: region.id,
        name: region.name,
        icon: region.icon,
        officialCount: 0,
        creativeCount: 0,
        totalCount: 0,
        percentage: 0,
        champions: [],
        averageSkillsCount: 0,
        rolesDistribution: new Map(),
        weaponsDistribution: new Map(),
        genderDistribution: new Map(),
        speciesDistribution: new Map(),
        completionStats: {
          withSkills: 0,
          withImages: 0,
          withFullLore: 0,
          withReleaseDate: 0,
        },
      });
    });

    // Add special region
    regionStats.set("special", {
      id: "special",
      name: "Đặc Biệt",
      icon: "⭐",
      officialCount: 0,
      creativeCount: 0,
      totalCount: 0,
      percentage: 0,
      champions: [],
      averageSkillsCount: 0,
      rolesDistribution: new Map(),
      weaponsDistribution: new Map(),
      genderDistribution: new Map(),
      speciesDistribution: new Map(),
      completionStats: {
        withSkills: 0,
        withImages: 0,
        withFullLore: 0,
        withReleaseDate: 0,
      },
    });

    // Group champions by region
    champions.forEach((champion) => {
      const regionId = champion.regionId;
      const regionStat = regionStats.get(regionId);

      if (regionStat) {
        regionStat.champions.push(champion);
        regionStat.totalCount++;

        if (champion.isOfficial) {
          regionStat.officialCount++;
        } else {
          regionStat.creativeCount++;
        }

        // Role distribution
        if (champion.role) {
          const roles = champion.role.split("/").map((r) => r.trim());
          roles.forEach((role) => {
            const currentCount = regionStat.rolesDistribution.get(role) || 0;
            regionStat.rolesDistribution.set(role, currentCount + 1);
          });
        }

        // Weapon distribution
        if (champion.weapon) {
          const weapons = champion.weapon.includes(",")
            ? champion.weapon.split(",").map((w) => w.trim())
            : [champion.weapon.trim()];
          weapons.forEach((weapon) => {
            const currentCount =
              regionStat.weaponsDistribution.get(weapon) || 0;
            regionStat.weaponsDistribution.set(weapon, currentCount + 1);
          });
        }

        // Gender distribution
        if (champion.gender) {
          const currentCount =
            regionStat.genderDistribution.get(champion.gender) || 0;
          regionStat.genderDistribution.set(champion.gender, currentCount + 1);
        }

        // Species distribution
        if (champion.species) {
          const currentCount =
            regionStat.speciesDistribution.get(champion.species) || 0;
          regionStat.speciesDistribution.set(
            champion.species,
            currentCount + 1
          );
        }

        // Completion stats
        if (champion.skills && champion.skills.length > 0) {
          regionStat.completionStats.withSkills++;
        }
        if (champion.image) {
          regionStat.completionStats.withImages++;
        }
        if (champion.fullLore && champion.fullLore.length > 100) {
          regionStat.completionStats.withFullLore++;
        }
        if (champion.releaseDate) {
          regionStat.completionStats.withReleaseDate++;
        }
      }
    });

    // Calculate percentages and averages
    const totalChampions = champions.length;
    regionStats.forEach((regionStat) => {
      regionStat.percentage =
        totalChampions > 0
          ? Math.round((regionStat.totalCount / totalChampions) * 100)
          : 0;

      // Calculate average skills count
      const championsWithSkills = regionStat.champions.filter(
        (c) => c.skills && c.skills.length > 0
      );
      if (championsWithSkills.length > 0) {
        const totalSkills = championsWithSkills.reduce(
          (sum, c) => sum + c.skills.length,
          0
        );
        regionStat.averageSkillsCount =
          Math.round((totalSkills / championsWithSkills.length) * 10) / 10;
      }

      // Calculate completion rates
      if (regionStat.totalCount > 0) {
        regionStat.completionStats.skillsRate = Math.round(
          (regionStat.completionStats.withSkills / regionStat.totalCount) * 100
        );
        regionStat.completionStats.imagesRate = Math.round(
          (regionStat.completionStats.withImages / regionStat.totalCount) * 100
        );
        regionStat.completionStats.fullLoreRate = Math.round(
          (regionStat.completionStats.withFullLore / regionStat.totalCount) *
            100
        );
        regionStat.completionStats.releaseDateRate = Math.round(
          (regionStat.completionStats.withReleaseDate / regionStat.totalCount) *
            100
        );
      }

      // Convert Maps to Objects for easier handling
      regionStat.rolesDistribution = Object.fromEntries(
        regionStat.rolesDistribution
      );
      regionStat.weaponsDistribution = Object.fromEntries(
        regionStat.weaponsDistribution
      );
      regionStat.genderDistribution = Object.fromEntries(
        regionStat.genderDistribution
      );
      regionStat.speciesDistribution = Object.fromEntries(
        regionStat.speciesDistribution
      );
    });

    const result = Array.from(regionStats.values()).sort(
      (a, b) => b.totalCount - a.totalCount
    );

    this.setCache(cacheKey, result);
    return result;
  }

  /**
   * Thống kê theo vai trò
   */
  getRoleStats() {
    const cacheKey = "role_stats";
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    const champions = this.getAllChampions();
    const roleStats = new Map();

    champions.forEach((champion) => {
      if (champion.role) {
        const roles = champion.role.split("/").map((r) => r.trim());

        roles.forEach((role) => {
          if (!roleStats.has(role)) {
            roleStats.set(role, {
              name: role,
              icon: this.getRoleIcon(role),
              count: 0,
              percentage: 0,
              champions: [],
              regions: new Map(),
              weapons: new Map(),
              averageSkillsCount: 0,
              officialCount: 0,
              creativeCount: 0,
              completionStats: {
                withSkills: 0,
                withImages: 0,
                withFullLore: 0,
              },
            });
          }

          const roleStat = roleStats.get(role);
          roleStat.count++;
          roleStat.champions.push(champion);

          if (champion.isOfficial) {
            roleStat.officialCount++;
          } else {
            roleStat.creativeCount++;
          }

          // Region distribution for this role
          const regionCount = roleStat.regions.get(champion.regionName) || 0;
          roleStat.regions.set(champion.regionName, regionCount + 1);

          // Weapon distribution for this role
          if (champion.weapon) {
            const weapons = champion.weapon.includes(",")
              ? champion.weapon.split(",").map((w) => w.trim())
              : [champion.weapon.trim()];
            weapons.forEach((weapon) => {
              const weaponCount = roleStat.weapons.get(weapon) || 0;
              roleStat.weapons.set(weapon, weaponCount + 1);
            });
          }

          // Completion stats
          if (champion.skills && champion.skills.length > 0) {
            roleStat.completionStats.withSkills++;
          }
          if (champion.image) {
            roleStat.completionStats.withImages++;
          }
          if (champion.fullLore && champion.fullLore.length > 100) {
            roleStat.completionStats.withFullLore++;
          }
        });
      }
    });

    // Calculate percentages and averages
    const totalRoleAssignments = Array.from(roleStats.values()).reduce(
      (sum, role) => sum + role.count,
      0
    );

    roleStats.forEach((roleStat) => {
      roleStat.percentage =
        totalRoleAssignments > 0
          ? Math.round((roleStat.count / totalRoleAssignments) * 100)
          : 0;

      // Calculate average skills count
      const championsWithSkills = roleStat.champions.filter(
        (c) => c.skills && c.skills.length > 0
      );
      if (championsWithSkills.length > 0) {
        const totalSkills = championsWithSkills.reduce(
          (sum, c) => sum + c.skills.length,
          0
        );
        roleStat.averageSkillsCount =
          Math.round((totalSkills / championsWithSkills.length) * 10) / 10;
      }

      // Calculate completion rates
      if (roleStat.count > 0) {
        roleStat.completionStats.skillsRate = Math.round(
          (roleStat.completionStats.withSkills / roleStat.count) * 100
        );
        roleStat.completionStats.imagesRate = Math.round(
          (roleStat.completionStats.withImages / roleStat.count) * 100
        );
        roleStat.completionStats.fullLoreRate = Math.round(
          (roleStat.completionStats.withFullLore / roleStat.count) * 100
        );
      }

      // Convert Maps to Objects
      roleStat.regions = Object.fromEntries(roleStat.regions);
      roleStat.weapons = Object.fromEntries(roleStat.weapons);
    });

    const result = Array.from(roleStats.values()).sort(
      (a, b) => b.count - a.count
    );

    this.setCache(cacheKey, result);
    return result;
  }

  /**
   * Thống kê theo vũ khí
   */
  getWeaponStats() {
    const cacheKey = "weapon_stats";
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    const champions = this.getAllChampions();
    const weaponStats = new Map();

    champions.forEach((champion) => {
      if (champion.weapon) {
        const weapons = champion.weapon.includes(",")
          ? champion.weapon.split(",").map((w) => w.trim())
          : [champion.weapon.trim()];

        weapons.forEach((weapon) => {
          if (!weaponStats.has(weapon)) {
            weaponStats.set(weapon, {
              name: weapon,
              icon: this.getWeaponIcon(weapon),
              count: 0,
              percentage: 0,
              champions: [],
              regions: new Map(),
              roles: new Map(),
              officialCount: 0,
              creativeCount: 0,
              averageSkillsCount: 0,
            });
          }

          const weaponStat = weaponStats.get(weapon);
          weaponStat.count++;
          weaponStat.champions.push(champion);

          if (champion.isOfficial) {
            weaponStat.officialCount++;
          } else {
            weaponStat.creativeCount++;
          }

          // Region distribution
          const regionCount = weaponStat.regions.get(champion.regionName) || 0;
          weaponStat.regions.set(champion.regionName, regionCount + 1);

          // Role distribution
          if (champion.role) {
            const roles = champion.role.split("/").map((r) => r.trim());
            roles.forEach((role) => {
              const roleCount = weaponStat.roles.get(role) || 0;
              weaponStat.roles.set(role, roleCount + 1);
            });
          }
        });
      }
    });

    // Calculate percentages and averages
    const totalWeaponAssignments = Array.from(weaponStats.values()).reduce(
      (sum, weapon) => sum + weapon.count,
      0
    );

    weaponStats.forEach((weaponStat) => {
      weaponStat.percentage =
        totalWeaponAssignments > 0
          ? Math.round((weaponStat.count / totalWeaponAssignments) * 100)
          : 0;

      // Calculate average skills count
      const championsWithSkills = weaponStat.champions.filter(
        (c) => c.skills && c.skills.length > 0
      );
      if (championsWithSkills.length > 0) {
        const totalSkills = championsWithSkills.reduce(
          (sum, c) => sum + c.skills.length,
          0
        );
        weaponStat.averageSkillsCount =
          Math.round((totalSkills / championsWithSkills.length) * 10) / 10;
      }

      // Convert Maps to Objects
      weaponStat.regions = Object.fromEntries(weaponStat.regions);
      weaponStat.roles = Object.fromEntries(weaponStat.roles);
    });

    const result = Array.from(weaponStats.values()).sort(
      (a, b) => b.count - a.count
    );

    this.setCache(cacheKey, result);
    return result;
  }

  /**
   * Thống kê theo giới tính
   */
  getGenderStats() {
    const cacheKey = "gender_stats";
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    const champions = this.getAllChampions();
    const genderStats = new Map();

    champions.forEach((champion) => {
      const gender = champion.gender || "Không xác định";

      if (!genderStats.has(gender)) {
        genderStats.set(gender, {
          name: gender,
          icon: this.getGenderIcon(gender),
          count: 0,
          percentage: 0,
          champions: [],
          regions: new Map(),
          roles: new Map(),
          officialCount: 0,
          creativeCount: 0,
        });
      }

      const genderStat = genderStats.get(gender);
      genderStat.count++;
      genderStat.champions.push(champion);

      if (champion.isOfficial) {
        genderStat.officialCount++;
      } else {
        genderStat.creativeCount++;
      }

      // Region distribution
      const regionCount = genderStat.regions.get(champion.regionName) || 0;
      genderStat.regions.set(champion.regionName, regionCount + 1);

      // Role distribution
      if (champion.role) {
        const roles = champion.role.split("/").map((r) => r.trim());
        roles.forEach((role) => {
          const roleCount = genderStat.roles.get(role) || 0;
          genderStat.roles.set(role, roleCount + 1);
        });
      }
    });

    // Calculate percentages
    const totalChampions = champions.length;
    genderStats.forEach((genderStat) => {
      genderStat.percentage =
        totalChampions > 0
          ? Math.round((genderStat.count / totalChampions) * 100)
          : 0;

      // Convert Maps to Objects
      genderStat.regions = Object.fromEntries(genderStat.regions);
      genderStat.roles = Object.fromEntries(genderStat.roles);
    });

    const result = Array.from(genderStats.values()).sort(
      (a, b) => b.count - a.count
    );

    this.setCache(cacheKey, result);
    return result;
  }

  /**
   * Thống kê theo loài
   */
  getSpeciesStats() {
    const cacheKey = "species_stats";
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    const champions = this.getAllChampions();
    const speciesStats = new Map();

    champions.forEach((champion) => {
      const species = champion.species || "Không xác định";

      if (!speciesStats.has(species)) {
        speciesStats.set(species, {
          name: species,
          icon: this.getSpeciesIcon(species),
          count: 0,
          percentage: 0,
          champions: [],
          regions: new Map(),
          roles: new Map(),
          officialCount: 0,
          creativeCount: 0,
        });
      }

      const speciesStat = speciesStats.get(species);
      speciesStat.count++;
      speciesStat.champions.push(champion);

      if (champion.isOfficial) {
        speciesStat.officialCount++;
      } else {
        speciesStat.creativeCount++;
      }

      // Region distribution
      const regionCount = speciesStat.regions.get(champion.regionName) || 0;
      speciesStat.regions.set(champion.regionName, regionCount + 1);

      // Role distribution
      if (champion.role) {
        const roles = champion.role.split("/").map((r) => r.trim());
        roles.forEach((role) => {
          const roleCount = speciesStat.roles.get(role) || 0;
          speciesStat.roles.set(role, roleCount + 1);
        });
      }
    });

    // Calculate percentages
    const totalChampions = champions.length;
    speciesStats.forEach((speciesStat) => {
      speciesStat.percentage =
        totalChampions > 0
          ? Math.round((speciesStat.count / totalChampions) * 100)
          : 0;

      // Convert Maps to Objects
      speciesStat.regions = Object.fromEntries(speciesStat.regions);
      speciesStat.roles = Object.fromEntries(speciesStat.roles);
    });

    const result = Array.from(speciesStats.values()).sort(
      (a, b) => b.count - a.count
    );

    this.setCache(cacheKey, result);
    return result;
  }

  /**
   * Thống kê theo năm phát hành
   */
  getReleaseYearStats() {
    const cacheKey = "release_year_stats";
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    const champions = this.getAllChampions();
    const yearStats = new Map();

    champions.forEach((champion) => {
      if (champion.releaseDate) {
        let year;
        if (champion.releaseDate.includes("-")) {
          year = champion.releaseDate.split("-")[0];
        } else {
          year = champion.releaseDate.toString();
        }

        if (!yearStats.has(year)) {
          yearStats.set(year, {
            year: year,
            count: 0,
            champions: [],
            regions: new Map(),
            roles: new Map(),
            officialCount: 0,
            creativeCount: 0,
          });
        }

        const yearStat = yearStats.get(year);
        yearStat.count++;
        yearStat.champions.push(champion);

        if (champion.isOfficial) {
          yearStat.officialCount++;
        } else {
          yearStat.creativeCount++;
        }

        // Region distribution
        const regionCount = yearStat.regions.get(champion.regionName) || 0;
        yearStat.regions.set(champion.regionName, regionCount + 1);

        // Role distribution
        if (champion.role) {
          const roles = champion.role.split("/").map((r) => r.trim());
          roles.forEach((role) => {
            const roleCount = yearStat.roles.get(role) || 0;
            yearStat.roles.set(role, roleCount + 1);
          });
        }
      }
    });

    // Convert Maps to Objects and sort by year
    yearStats.forEach((yearStat) => {
      yearStat.regions = Object.fromEntries(yearStat.regions);
      yearStat.roles = Object.fromEntries(yearStat.roles);
    });

    const result = Array.from(yearStats.values()).sort(
      (a, b) => parseInt(a.year) - parseInt(b.year)
    );

    this.setCache(cacheKey, result);
    return result;
  }

  /**
   * Helper methods for icons
   */
  getRoleIcon(role) {
    const roleIcons = {
      "Đấu Sĩ": "⚔️",
      "Xạ Thủ": "🏹",
      "Pháp Sư": "🔮",
      "Sát Thủ": "🗡️",
      "Hỗ Trợ": "🛡️",
      "Đỡ Đòn": "🛡️",
      "Hỗ Trợ/Đỡ Đòn": "🛡️",
      "Lai/Đa Dạng": "🌟",
    };
    return roleIcons[role] || "❓";
  }

  getWeaponIcon(weapon) {
    const weaponIcons = {
      Kiếm: "⚔️",
      Cung: "🏹",
      "Ma thuật": "🔮",
      "Dao găm": "🗡️",
      Rìu: "🪓",
      Giáo: "🏹",
      Súng: "🔫",
      "Tay không": "👊",
      Khiên: "🛡️",
      Gậy: "🪄",
      "Móng vuốt": "🐾",
      "Nguyên tố": "🌟",
      "Hỗn hợp": "🔄",
    };
    return weaponIcons[weapon] || "⚔️";
  }

  getGenderIcon(gender) {
    const genderIcons = {
      Nam: "♂️",
      Nữ: "♀️",
      "Không xác định": "❓",
      Khác: "⚧️",
    };
    return genderIcons[gender] || "❓";
  }

  getSpeciesIcon(species) {
    const speciesIcons = {
      "Con người": "👤",
      Yordle: "🧝",
      "Hồn ma": "👻",
      Rồng: "🐉",
      "Quái vật": "👹",
      "Thần linh": "✨",
      Golem: "🗿",
      Cây: "🌳",
      Thú: "🐺",
      "Không xác định": "❓",
    };
    return speciesIcons[species] || "👤";
  }

  /**
   * Cache management
   */
  getFromCache(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheExpiry) {
      return cached.data;
    }
    return null;
  }

  setCache(key, data) {
    this.cache.set(key, {
      data: data,
      timestamp: Date.now(),
    });
  }

  clearCache() {
    this.cache.clear();
  }

  /**
   * Get role distribution - alias for getRoleStats
   */
  getRoleDistribution() {
    const roleStats = this.getRoleStats();
    const distribution = new Map();

    roleStats.forEach((stat) => {
      distribution.set(stat.role, stat.count);
    });

    return distribution;
  }

  /**
   * Get gender distribution - alias for getGenderStats
   */
  getGenderDistribution() {
    const genderStats = this.getGenderStats();
    const distribution = new Map();

    genderStats.forEach((stat) => {
      distribution.set(stat.gender, stat.count);
    });

    return distribution;
  }

  /**
   * Get species distribution - alias for getSpeciesStats
   */
  getSpeciesDistribution() {
    const speciesStats = this.getSpeciesStats();
    const distribution = new Map();

    speciesStats.forEach((stat) => {
      distribution.set(stat.species, stat.count);
    });

    return distribution;
  }

  /**
   * Get weapon distribution - alias for getWeaponStats
   */
  getWeaponDistribution() {
    const weaponStats = this.getWeaponStats();
    const distribution = new Map();

    weaponStats.forEach((stat) => {
      distribution.set(stat.weapon, stat.count);
    });

    return distribution;
  }

  /**
   * Get release year distribution - alias for getReleaseYearStats
   */
  getReleaseYearDistribution() {
    const yearStats = this.getReleaseYearStats();
    const distribution = new Map();

    yearStats.forEach((stat) => {
      distribution.set(stat.year, stat.count);
    });

    return distribution;
  }

  /**
   * Lấy tất cả thống kê
   */
  getAllStats() {
    return {
      overview: this.getOverviewStats(),
      regions: this.getRegionStats(),
      roles: this.getRoleStats(),
      weapons: this.getWeaponStats(),
      genders: this.getGenderStats(),
      species: this.getSpeciesStats(),
      releaseYears: this.getReleaseYearStats(),
    };
  }
}

// Export for use in other files
if (typeof window !== "undefined") {
  window.StatisticsManager = StatisticsManager;
}
