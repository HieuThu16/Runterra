/**
 * Advanced Analytics System for Runeterra Champions
 * Hệ thống phân tích nâng cao và đề xuất sáng tạo
 */
class AnalyticsManager {
  constructor(statisticsManager, database) {
    this.stats = statisticsManager;
    this.db = database;
    this.insights = [];
    this.recommendations = [];
  }

  /**
   * Perform full analysis - method được gọi từ UI
   */
  performFullAnalysis() {
    return this.generateComprehensiveAnalysis();
  }

  /**
   * Get key insights - method được gọi từ UI
   */
  getKeyInsights() {
    if (this.insights.length === 0) {
      this.generateComprehensiveAnalysis();
    }
    return this.insights.slice(0, 10); // Top 10 insights
  }

  /**
   * Get data gaps analysis
   */
  getDataGaps() {
    const allStats = this.stats.getAllStats();
    const gaps = {
      regionGaps: {},
      roleGaps: {},
      qualityGaps: {},
    };

    // Analyze region gaps
    allStats.regions.forEach((region) => {
      if (region.totalCount < 5) {
        gaps.regionGaps[region.name] = {
          current: region.totalCount,
          suggested: 5,
          priority: region.totalCount < 2 ? "high" : "medium",
        };
      }
    });

    // Analyze role gaps
    const avgRoleCount =
      allStats.roles.reduce((sum, role) => sum + role.count, 0) /
      allStats.roles.length;
    allStats.roles.forEach((role) => {
      if (role.count < avgRoleCount * 0.6) {
        gaps.roleGaps[role.role] = {
          current: role.count,
          suggested: Math.ceil(avgRoleCount),
          priority: role.count < avgRoleCount * 0.3 ? "high" : "medium",
        };
      }
    });

    return gaps;
  }

  /**
   * Get champion suggestions
   */
  getChampionSuggestions() {
    if (this.recommendations.length === 0) {
      // Generate suggestions directly without full analysis to avoid recursion
      const allStats = this.stats.getAllStats();
      this.generateChampionSuggestionsInternal(allStats);
    }
    return this.recommendations;
  }

  /**
   * Get data quality analysis
   */
  getDataQualityAnalysis() {
    const overview = this.stats.getOverviewStats();

    return {
      healthScore: {
        overall: Math.round(
          (overview.skillsCompletionRate +
            overview.imagesCompletionRate +
            overview.fullLoreCompletionRate +
            overview.releaseDateCompletionRate) /
            4
        ),
        skills: overview.skillsCompletionRate,
        images: overview.imagesCompletionRate,
        lore: overview.fullLoreCompletionRate,
        releaseDate: overview.releaseDateCompletionRate,
      },
      completionRates: {
        skills: overview.skillsCompletionRate,
        images: overview.imagesCompletionRate,
        fullLore: overview.fullLoreCompletionRate,
        releaseDate: overview.releaseDateCompletionRate,
      },
      actionItems: this.getTopPriorities(),
    };
  }

  /**
   * Phân tích toàn diện và tạo insights
   */
  generateComprehensiveAnalysis() {
    this.insights = [];
    this.recommendations = [];

    const allStats = this.stats.getAllStats();

    // Phân tích dữ liệu thiếu
    this.analyzeDataGaps(allStats);

    // Phân tích cân bằng vùng đất
    this.analyzeRegionBalance(allStats.regions);

    // Phân tích phân bố vai trò
    this.analyzeRoleDistribution(allStats.roles);

    // Phân tích đa dạng
    this.analyzeDiversity(allStats);

    // Đề xuất tướng mới
    this.generateChampionSuggestionsInternal(allStats);

    // Phân tích chất lượng dữ liệu
    this.analyzeDataQuality(allStats);

    return {
      insights: this.insights,
      recommendations: this.recommendations,
      summary: this.generateSummary(),
    };
  }

  /**
   * Phân tích khoảng trống trong dữ liệu
   */
  analyzeDataGaps(allStats) {
    const overview = allStats.overview;

    // Phân tích completion rates
    const completionInsights = [];

    if (overview.skillsCompletionRate < 50) {
      completionInsights.push({
        type: "warning",
        category: "Skills",
        title: "Thiếu Kỹ Năng Chi Tiết",
        description: `Chỉ ${overview.skillsCompletionRate}% tướng có kỹ năng chi tiết`,
        recommendation: "Thêm mô tả kỹ năng cho các tướng chưa có",
        priority: "high",
      });
    }

    if (overview.imagesCompletionRate < 30) {
      completionInsights.push({
        type: "warning",
        category: "Images",
        title: "Thiếu Hình Ảnh",
        description: `Chỉ ${overview.imagesCompletionRate}% tướng có hình ảnh`,
        recommendation: "Bổ sung hình ảnh cho các tướng",
        priority: "medium",
      });
    }

    if (overview.fullLoreCompletionRate < 40) {
      completionInsights.push({
        type: "warning",
        category: "Lore",
        title: "Thiếu Cốt Truyện Đầy Đủ",
        description: `Chỉ ${overview.fullLoreCompletionRate}% tướng có cốt truyện đầy đủ`,
        recommendation: "Mở rộng cốt truyện cho các tướng",
        priority: "medium",
      });
    }

    this.insights.push(...completionInsights);
  }

  /**
   * Phân tích cân bằng giữa các vùng đất
   */
  analyzeRegionBalance(regions) {
    const sortedRegions = [...regions].sort(
      (a, b) => b.totalCount - a.totalCount
    );
    const totalChampions = sortedRegions.reduce(
      (sum, region) => sum + region.totalCount,
      0
    );
    const averagePerRegion = totalChampions / sortedRegions.length;

    // Tìm vùng đất có ít tướng nhất và nhiều nhất
    const leastPopulated = sortedRegions[sortedRegions.length - 1];
    const mostPopulated = sortedRegions[0];

    if (mostPopulated.totalCount > leastPopulated.totalCount * 3) {
      this.insights.push({
        type: "warning",
        category: "Region Balance",
        title: "Mất Cân Bằng Vùng Đất",
        description: `${mostPopulated.name} có ${mostPopulated.totalCount} tướng, trong khi ${leastPopulated.name} chỉ có ${leastPopulated.totalCount}`,
        recommendation: `Tạo thêm tướng cho ${leastPopulated.name} để cân bằng`,
        priority: "medium",
      });
    }

    // Phân tích vùng đất thiếu đa dạng vai trò
    regions.forEach((region) => {
      const roleCount = Object.keys(region.rolesDistribution).length;
      if (roleCount < 4 && region.totalCount > 5) {
        this.insights.push({
          type: "info",
          category: "Region Diversity",
          title: `${region.name} Thiếu Đa Dạng Vai Trò`,
          description: `Chỉ có ${roleCount} vai trò khác nhau trong ${region.totalCount} tướng`,
          recommendation: `Thêm tướng với vai trò khác cho ${region.name}`,
          priority: "low",
        });
      }
    });
  }

  /**
   * Phân tích phân bố vai trò
   */
  analyzeRoleDistribution(roles) {
    const totalRoleAssignments = roles.reduce(
      (sum, role) => sum + role.count,
      0
    );
    const averagePerRole = totalRoleAssignments / roles.length;

    // Tìm vai trò thiếu và thừa
    const underrepresented = roles.filter(
      (role) => role.count < averagePerRole * 0.6
    );
    const overrepresented = roles.filter(
      (role) => role.count > averagePerRole * 1.5
    );

    if (underrepresented.length > 0) {
      this.insights.push({
        type: "info",
        category: "Role Balance",
        title: "Vai Trò Ít Được Đại Diện",
        description: `Các vai trò ${underrepresented
          .map((r) => r.name)
          .join(", ")} có ít tướng hơn trung bình`,
        recommendation: "Tạo thêm tướng cho các vai trò này",
        priority: "medium",
      });
    }

    if (overrepresented.length > 0) {
      this.insights.push({
        type: "info",
        category: "Role Balance",
        title: "Vai Trò Được Đại Diện Nhiều",
        description: `Các vai trò ${overrepresented
          .map((r) => r.name)
          .join(", ")} có nhiều tướng hơn trung bình`,
        recommendation: "Cân nhắc tạo ít tướng hơn cho các vai trò này",
        priority: "low",
      });
    }
  }

  /**
   * Phân tích đa dạng
   */
  analyzeDiversity(allStats) {
    const { genders, species, weapons } = allStats;

    // Phân tích đa dạng giới tính
    const femalePercent = genders.find((g) => g.name === "Nữ")?.percentage || 0;
    const malePercent = genders.find((g) => g.name === "Nam")?.percentage || 0;

    if (Math.abs(femalePercent - malePercent) > 20) {
      this.insights.push({
        type: "info",
        category: "Gender Diversity",
        title: "Mất Cân Bằng Giới Tính",
        description: `Nam: ${malePercent}%, Nữ: ${femalePercent}%`,
        recommendation: "Cân bằng tỷ lệ giới tính khi tạo tướng mới",
        priority: "low",
      });
    }

    // Phân tích đa dạng loài
    const humanPercent =
      species.find((s) => s.name === "Con người")?.percentage || 0;
    if (humanPercent > 60) {
      this.insights.push({
        type: "info",
        category: "Species Diversity",
        title: "Quá Nhiều Con Người",
        description: `${humanPercent}% tướng là con người`,
        recommendation: "Tạo thêm tướng với các loài khác để đa dạng hóa",
        priority: "medium",
      });
    }

    // Phân tích đa dạng vũ khí
    const magicPercent =
      weapons.find((w) => w.name === "Ma thuật")?.percentage || 0;
    const swordPercent =
      weapons.find((w) => w.name === "Kiếm")?.percentage || 0;

    if (magicPercent + swordPercent > 50) {
      this.insights.push({
        type: "info",
        category: "Weapon Diversity",
        title: "Thiếu Đa Dạng Vũ Khí",
        description: `Kiếm và Ma thuật chiếm ${
          magicPercent + swordPercent
        }% tổng vũ khí`,
        recommendation: "Thêm các loại vũ khí độc đáo khác",
        priority: "low",
      });
    }
  }

  /**
   * Tạo đề xuất tướng mới - Internal method
   */
  generateChampionSuggestionsInternal(allStats) {
    const suggestions = [];
    const { regions, roles, weapons, species } = allStats;

    // Đề xuất dựa trên vùng đất thiếu tướng
    const sortedRegions = [...regions].sort(
      (a, b) => a.totalCount - b.totalCount
    );
    const leastPopulated = sortedRegions.slice(0, 3);

    leastPopulated.forEach((region) => {
      // Tìm vai trò thiếu trong vùng đất này
      const missingRoles = this.findMissingRoles(region, roles);

      missingRoles.forEach((role) => {
        // Tìm vũ khí phù hợp với vai trò
        const suggestedWeapons = this.suggestWeaponsForRole(role, weapons);

        suggestions.push({
          type: "champion_suggestion",
          region: region.name,
          regionId: region.id,
          role: role,
          suggestedWeapons: suggestedWeapons,
          priority: this.calculateSuggestionPriority(region, role),
          description: `Tạo tướng ${role} cho ${
            region.name
          } với vũ khí ${suggestedWeapons.join(" hoặc ")}`,
        });
      });
    });

    // Đề xuất combo độc đáo
    const uniqueCombos = this.generateUniqueCombinations(
      regions,
      roles,
      weapons,
      species
    );
    suggestions.push(...uniqueCombos);

    this.recommendations.push(...suggestions);
  }

  /**
   * Tìm vai trò thiếu trong vùng đất
   */
  findMissingRoles(region, allRoles) {
    const regionRoles = Object.keys(region.rolesDistribution);
    const allRoleNames = allRoles.map((r) => r.name);

    return allRoleNames
      .filter((role) => !regionRoles.includes(role))
      .slice(0, 2);
  }

  /**
   * Đề xuất vũ khí cho vai trò
   */
  suggestWeaponsForRole(role, weapons) {
    const roleWeaponMap = {
      "Đấu Sĩ": ["Kiếm", "Rìu", "Tay không"],
      "Xạ Thủ": ["Cung", "Súng", "Giáo"],
      "Pháp Sư": ["Ma thuật", "Gậy", "Nguyên tố"],
      "Sát Thủ": ["Dao găm", "Móng vuốt", "Tay không"],
      "Hỗ Trợ": ["Khiên", "Gậy", "Ma thuật"],
      "Đỡ Đòn": ["Khiên", "Rìu", "Tay không"],
    };

    const possibleWeapons = roleWeaponMap[role] || ["Kiếm", "Ma thuật"];

    // Ưu tiên vũ khí ít được sử dụng
    const weaponCounts = weapons.reduce((acc, weapon) => {
      acc[weapon.name] = weapon.count;
      return acc;
    }, {});

    return possibleWeapons
      .sort((a, b) => (weaponCounts[a] || 0) - (weaponCounts[b] || 0))
      .slice(0, 2);
  }

  /**
   * Tạo combo độc đáo
   */
  generateUniqueCombinations(regions, roles, weapons, species) {
    const uniqueCombos = [];

    // Combo hiếm: Loài + Vùng đất + Vai trò
    const rareSpecies = species.filter(
      (s) => s.count <= 2 && s.name !== "Không xác định"
    );
    const underrepresentedRegions = regions.filter((r) => r.totalCount < 8);

    rareSpecies.forEach((specie) => {
      underrepresentedRegions.forEach((region) => {
        const missingRoles = this.findMissingRoles(region, roles);
        if (missingRoles.length > 0) {
          uniqueCombos.push({
            type: "unique_combo",
            description: `Tướng ${specie.name} ${missingRoles[0]} từ ${region.name}`,
            species: specie.name,
            region: region.name,
            regionId: region.id,
            role: missingRoles[0],
            uniqueness: "high",
            priority: "high",
          });
        }
      });
    });

    return uniqueCombos.slice(0, 5); // Chỉ lấy 5 combo tốt nhất
  }

  /**
   * Tính độ ưu tiên cho đề xuất
   */
  calculateSuggestionPriority(region, role) {
    let score = 0;

    // Vùng đất ít tướng = ưu tiên cao hơn
    if (region.totalCount < 5) score += 3;
    else if (region.totalCount < 10) score += 2;
    else score += 1;

    // Vai trò hiếm = ưu tiên cao hơn
    const roleInRegion = region.rolesDistribution[role] || 0;
    if (roleInRegion === 0) score += 3;
    else if (roleInRegion === 1) score += 2;
    else score += 1;

    if (score >= 5) return "high";
    if (score >= 3) return "medium";
    return "low";
  }

  /**
   * Phân tích chất lượng dữ liệu
   */
  analyzeDataQuality(allStats) {
    const champions = this.stats.getAllChampions();

    // Kiểm tra tướng thiếu thông tin cơ bản
    const missingBasicInfo = champions.filter(
      (c) => !c.role || !c.lore || !c.region
    );

    if (missingBasicInfo.length > 0) {
      this.insights.push({
        type: "error",
        category: "Data Quality",
        title: "Thiếu Thông Tin Cơ Bản",
        description: `${missingBasicInfo.length} tướng thiếu thông tin cơ bản (vai trò, cốt truyện, vùng đất)`,
        recommendation: "Hoàn thiện thông tin cơ bản cho các tướng",
        priority: "high",
      });
    }

    // Kiểm tra trùng lặp
    const nameCount = {};
    champions.forEach((c) => {
      nameCount[c.name] = (nameCount[c.name] || 0) + 1;
    });

    const duplicates = Object.entries(nameCount).filter(
      ([name, count]) => count > 1
    );
    if (duplicates.length > 0) {
      this.insights.push({
        type: "error",
        category: "Data Quality",
        title: "Tướng Trùng Lặp",
        description: `Phát hiện ${
          duplicates.length
        } tướng bị trùng lặp: ${duplicates.map(([name]) => name).join(", ")}`,
        recommendation: "Kiểm tra và gộp các tướng trùng lặp",
        priority: "high",
      });
    }
  }

  /**
   * Tạo tóm tắt phân tích
   */
  generateSummary() {
    const totalInsights = this.insights.length;
    const totalRecommendations = this.recommendations.length;

    const highPriorityIssues = this.insights.filter(
      (i) => i.priority === "high"
    ).length;
    const championSuggestions = this.recommendations.filter(
      (r) => r.type === "champion_suggestion"
    ).length;

    return {
      totalInsights,
      totalRecommendations,
      highPriorityIssues,
      championSuggestions,
      overallHealth: this.calculateOverallHealth(),
      topPriorities: this.getTopPriorities(),
    };
  }

  /**
   * Tính toán sức khỏe tổng thể của dữ liệu
   */
  calculateOverallHealth() {
    const overview = this.stats.getOverviewStats();

    let healthScore = 100;

    // Trừ điểm cho completion rates thấp
    healthScore -= (100 - overview.skillsCompletionRate) * 0.3;
    healthScore -= (100 - overview.imagesCompletionRate) * 0.2;
    healthScore -= (100 - overview.fullLoreCompletionRate) * 0.2;

    // Trừ điểm cho issues có priority cao
    const highPriorityCount = this.insights.filter(
      (i) => i.priority === "high"
    ).length;
    healthScore -= highPriorityCount * 10;

    healthScore = Math.max(0, Math.min(100, healthScore));

    if (healthScore >= 80) return "excellent";
    if (healthScore >= 60) return "good";
    if (healthScore >= 40) return "fair";
    return "poor";
  }

  /**
   * Lấy danh sách ưu tiên hàng đầu
   */
  getTopPriorities() {
    const allItems = [...this.insights, ...this.recommendations];

    const priorityOrder = { high: 3, medium: 2, low: 1 };

    return allItems
      .sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])
      .slice(0, 5)
      .map((item) => ({
        title: item.title || item.description,
        priority: item.priority,
        category: item.category || item.type,
      }));
  }

  /**
   * Xuất báo cáo chi tiết
   */
  exportDetailedReport() {
    const analysis = this.generateComprehensiveAnalysis();

    return {
      metadata: {
        generatedAt: new Date().toISOString(),
        version: "1.0",
        totalChampions: this.stats.getAllChampions().length,
        totalRegions: this.stats.db.getAllRegions().length,
      },
      ...analysis,
      detailedStats: this.stats.getAllStats(),
    };
  }

  /**
   * Analyze data gaps - alias method
   */
  analyzeDataGaps() {
    return this.getDataGaps();
  }

  /**
   * Generate champion suggestions - alias method
   */
  generateChampionSuggestions() {
    // Return existing recommendations or generate new ones directly
    if (this.recommendations.length === 0) {
      const allStats = this.stats.getAllStats();
      this.generateChampionSuggestionsInternal(allStats);
    }
    return this.recommendations;
  }

  /**
   * Find unique combinations
   */
  findUniqueCombinations() {
    const allStats = this.stats.getAllStats();
    const combinations = [];

    // Generate unique region-role combinations
    allStats.regions.forEach((region) => {
      allStats.roles.forEach((role) => {
        const existing = region.rolesDistribution[role.role] || 0;
        if (existing === 0) {
          combinations.push({
            type: "region-role",
            region: region.name,
            role: role.role,
            description: `${role.role} từ ${region.name}`,
            priority: this.calculateSuggestionPriority(region, role),
          });
        }
      });
    });

    return combinations.slice(0, 20); // Top 20 combinations
  }

  /**
   * Analyze data quality - alias method
   */
  analyzeDataQuality() {
    return this.getDataQualityAnalysis();
  }

  /**
   * Generate report
   */
  generateReport() {
    const analysis = this.generateComprehensiveAnalysis();
    const overview = this.stats.getOverviewStats();

    return {
      timestamp: new Date().toISOString(),
      overview: overview,
      insights: analysis.insights,
      recommendations: analysis.recommendations,
      dataGaps: this.getDataGaps(),
      dataQuality: this.getDataQualityAnalysis(),
      uniqueCombinations: this.findUniqueCombinations(),
      summary: analysis.summary,
    };
  }
}

// Export for use in other files
if (typeof window !== "undefined") {
  window.AnalyticsManager = AnalyticsManager;
}
