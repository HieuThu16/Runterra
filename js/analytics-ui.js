/**
 * Analytics UI Manager for Runeterra Champions
 * Quản lý giao diện hiển thị phân tích và đề xuất
 */
class AnalyticsUI {
  constructor(analyticsManager, appReference) {
    this.analytics = analyticsManager;
    this.app = appReference;
    this.currentAnalysis = null;
    this.currentTab = "insights";
  }

  /**
   * Display insights - method được gọi từ app.js
   */
  displayInsights() {
    this.renderInsights();
  }

  /**
   * Display data gaps - method được gọi từ app.js
   */
  displayDataGaps() {
    this.renderDataGaps();
  }

  /**
   * Display champion suggestions - method được gọi từ app.js
   */
  displayChampionSuggestions() {
    this.renderChampionSuggestions();
  }

  /**
   * Display data quality - method được gọi từ app.js
   */
  displayDataQuality() {
    this.renderDataQuality();
  }

  /**
   * Generate phân tích từ dữ liệu
   */
  generateAnalysis() {
    try {
      this.currentAnalysis = this.analytics.performFullAnalysis();
      this.renderAnalysisSummary();
    } catch (error) {
      console.error("❌ Error generating analysis:", error);
    }
  }

  /**
   * Render summary của analysis
   */
  renderAnalysisSummary() {
    const summary = document.getElementById("analysisSummary");
    if (!summary || !this.currentAnalysis) return;

    const { insights, healthScore } = this.currentAnalysis;

    summary.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="bg-slate-700 p-4 rounded-lg text-center">
          <div class="text-3xl mb-2">💡</div>
          <div class="text-2xl font-bold text-blue-400">${
            insights.topInsights.length
          }</div>
          <div class="text-sm text-slate-400">Insights</div>
        </div>
        <div class="bg-slate-700 p-4 rounded-lg text-center">
          <div class="text-3xl mb-2">🎯</div>
          <div class="text-2xl font-bold text-orange-400">${
            Object.keys(this.currentAnalysis.dataGaps.regionGaps).length
          }</div>
          <div class="text-sm text-slate-400">Data Gaps</div>
        </div>
        <div class="bg-slate-700 p-4 rounded-lg text-center">
          <div class="text-3xl mb-2">✨</div>
          <div class="text-2xl font-bold text-green-400">${
            this.currentAnalysis.suggestions.championSuggestions.length
          }</div>
          <div class="text-sm text-slate-400">Suggestions</div>
        </div>
        <div class="bg-slate-700 p-4 rounded-lg text-center">
          <div class="text-3xl mb-2">${this.getHealthScoreIcon(
            healthScore.overall
          )}</div>
          <div class="text-2xl font-bold ${this.getHealthScoreColor(
            healthScore.overall
          )}">${healthScore.overall}%</div>
          <div class="text-sm text-slate-400">Health Score</div>
        </div>
      </div>
    `;
  }

  /**
   * Get health score icon
   */
  getHealthScoreIcon(score) {
    if (score >= 80) return "💚";
    if (score >= 60) return "💛";
    if (score >= 40) return "🧡";
    return "❤️";
  }

  /**
   * Khởi tạo Analytics UI
   */
  init() {
    this.createAnalyticsSection();
    this.setupTabNavigation();
    this.generateAnalysis();
    this.setupEventListeners();
  }

  /**
   * Tạo section analytics trong statistics
   */
  createAnalyticsSection() {
    const statisticsContent = document.getElementById("statisticsContent");
    if (!statisticsContent) return;

    // Tạo Analytics tab nếu chưa có
    const tabsContainer = document.querySelector(
      ".bg-slate-800.rounded-lg.p-4 .flex.flex-wrap.gap-2.justify-center"
    );
    if (tabsContainer && !document.getElementById("analyticsTab")) {
      const analyticsTabHtml = `
        <button
          id="analyticsTab"
          class="stats-tab-btn bg-slate-600 text-slate-300 px-4 py-2 rounded-lg font-semibold transition-colors hover:bg-slate-500"
        >
          🔍 Phân Tích & Đề Xuất
        </button>
      `;
      tabsContainer.insertAdjacentHTML("beforeend", analyticsTabHtml);
    }

    // Tạo Analytics section
    const analyticsSection = `
      <div id="analyticsSection" class="stats-section hidden">
        <h3 class="text-xl font-semibold text-cyan-300 mb-6">🔍 Phân Tích Nâng Cao & Đề Xuất</h3>
        
        <!-- Analysis Controls -->
        <div class="mb-6 bg-slate-800 p-4 rounded-lg">
          <div class="flex flex-wrap gap-4 items-center justify-between">
            <div class="flex items-center space-x-4">
              <button
                id="generateAnalysisBtn"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                🔄 Tạo Phân Tích Mới
              </button>
              <button
                id="exportAnalysisBtn"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                📥 Xuất Báo Cáo
              </button>
            </div>
            <div id="analysisHealth" class="flex items-center space-x-2">
              <!-- Health indicator will be inserted here -->
            </div>
          </div>
        </div>

        <!-- Analysis Summary -->
        <div id="analysisSummary" class="mb-6">
          <!-- Summary cards will be inserted here -->
        </div>

        <!-- Analysis Tabs -->
        <div class="mb-6">
          <div class="bg-slate-800 rounded-lg p-4">
            <div class="flex flex-wrap gap-2 justify-center">
              <button
                id="insightsAnalysisTab"
                class="analysis-tab-btn bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                💡 Insights
              </button>
              <button
                id="recommendationsAnalysisTab"
                class="analysis-tab-btn bg-slate-600 text-slate-300 px-4 py-2 rounded-lg font-semibold transition-colors hover:bg-slate-500"
              >
                🎯 Đề Xuất
              </button>
              <button
                id="dataQualityAnalysisTab"
                class="analysis-tab-btn bg-slate-600 text-slate-300 px-4 py-2 rounded-lg font-semibold transition-colors hover:bg-slate-500"
              >
                🔍 Chất Lượng Dữ Liệu
              </button>
              <button
                id="prioritiesAnalysisTab"
                class="analysis-tab-btn bg-slate-600 text-slate-300 px-4 py-2 rounded-lg font-semibold transition-colors hover:bg-slate-500"
              >
                ⭐ Ưu Tiên
              </button>
            </div>
          </div>
        </div>

        <!-- Analysis Content -->
        <div id="analysisContent">
          <div id="insightsContent" class="analysis-content">
            <!-- Insights will be rendered here -->
          </div>
          <div id="recommendationsContent" class="analysis-content hidden">
            <!-- Recommendations will be rendered here -->
          </div>
          <div id="dataQualityContent" class="analysis-content hidden">
            <!-- Data quality analysis will be rendered here -->
          </div>
          <div id="prioritiesContent" class="analysis-content hidden">
            <!-- Priorities will be rendered here -->
          </div>
        </div>

        <!-- Loading State -->
        <div id="analysisLoading" class="hidden text-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p class="text-slate-400">Đang phân tích dữ liệu...</p>
        </div>
      </div>
    `;

    statisticsContent.insertAdjacentHTML("beforeend", analyticsSection);
  }

  /**
   * Setup navigation tabs
   */
  setupTabNavigation() {
    const tabs = document.querySelectorAll(".analytics-tab-btn");
    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        const tabId = e.target.id;
        this.switchTab(tabId);
      });
    });
  }

  /**
   * Chuyển đổi tab analytics
   */
  switchTab(tabId) {
    // Update active tab
    document.querySelectorAll(".analytics-tab-btn").forEach((btn) => {
      btn.classList.remove("bg-purple-600", "text-white");
      btn.classList.add("bg-slate-600", "text-slate-300");
    });

    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.remove("bg-slate-600", "text-slate-300");
      activeTab.classList.add("bg-purple-600", "text-white");
    }

    // Hide all sections
    document.querySelectorAll(".analytics-section").forEach((section) => {
      section.classList.add("hidden");
    });

    // Show corresponding section
    const tabMap = {
      insightsTab: "insightsSection",
      gapsTab: "gapsSection",
      suggestionsTab: "suggestionsSection",
      qualityTab: "qualitySection",
    };

    const sectionId = tabMap[tabId];
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.classList.remove("hidden");
        this.currentTab = sectionId.replace("Section", "");
        this.renderTabContent(this.currentTab);
      }
    }
  }

  /**
   * Render nội dung tab tương ứng
   */
  renderTabContent(tabType) {
    switch (tabType) {
      case "insights":
        this.renderInsights();
        break;
      case "gaps":
        this.renderDataGaps();
        break;
      case "suggestions":
        this.renderChampionSuggestions();
        break;
      case "quality":
        this.renderDataQuality();
        break;
    }
  }

  /**
   * Render insights chính
   */
  renderInsights() {
    const insights = this.analytics.getKeyInsights();
    const container = document.getElementById("insightsContainer");

    if (!container) return;

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        ${this.createInsightCards(insights)}
      </div>
      
      <div class="bg-slate-700 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-purple-300 mb-4">📈 Xu Hướng Chính</h4>
        ${this.createTrendsAnalysis(insights)}
      </div>
    `;
  }

  /**
   * Tạo insight cards
   */
  createInsightCards(insights) {
    const cards = [
      {
        title: "Vùng Đất Phổ Biến Nhất",
        value: insights.mostPopularRegion || "Không rõ",
        icon: "🏆",
        color: "bg-yellow-600",
      },
      {
        title: "Vai Trò Cần Thêm",
        value: insights.underrepresentedRole || "Không rõ",
        icon: "🎯",
        color: "bg-red-600",
      },
      {
        title: "Độ Đa Dạng",
        value: insights.diversityScore
          ? `${insights.diversityScore}/10`
          : "N/A",
        icon: "🌈",
        color: "bg-blue-600",
      },
      {
        title: "Hoàn Thiện Dữ Liệu",
        value: insights.completionRate ? `${insights.completionRate}%` : "N/A",
        icon: "📊",
        color: "bg-green-600",
      },
      {
        title: "Vũ Khí Độc Đáo",
        value: insights.uniqueWeapons || 0,
        icon: "⚔️",
        color: "bg-orange-600",
      },
      {
        title: "Tiềm Năng Mở Rộng",
        value: insights.expansionPotential || "Trung bình",
        icon: "🚀",
        color: "bg-purple-600",
      },
    ];

    return cards
      .map(
        (card) => `
      <div class="analytics-card bg-slate-700 p-4 rounded-lg">
        <div class="flex items-center justify-between mb-3">
          <span class="${card.color} text-white text-2xl px-3 py-2 rounded-lg">${card.icon}</span>
          <div class="text-right">
            <div class="text-2xl font-bold text-white">${card.value}</div>
            <div class="text-sm text-slate-400">${card.title}</div>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }

  /**
   * Tạo trends analysis
   */
  createTrendsAnalysis(insights) {
    return `
      <div class="space-y-4">
        <div class="bg-slate-800 p-4 rounded-lg">
          <h5 class="font-semibold text-cyan-300 mb-2">🔍 Phân Tích Chính</h5>
          <ul class="space-y-2 text-sm text-slate-300">
            <li>• Database hiện có <strong>${
              insights.totalChampions || 0
            }</strong> tướng từ <strong>${
      insights.totalRegions || 0
    }</strong> vùng đất</li>
            <li>• Tỷ lệ official/creative: <strong>${
              insights.officialRatio || "N/A"
            }</strong></li>
            <li>• Vũ khí đa dạng nhất: <strong>${
              insights.mostDiverseWeapon || "Không rõ"
            }</strong></li>
            <li>• Khoảng trống lớn nhất: <strong>${
              insights.biggestGap || "Không phát hiện"
            }</strong></li>
          </ul>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-slate-800 p-4 rounded-lg">
            <h5 class="font-semibold text-green-300 mb-2">✅ Điểm Mạnh</h5>
            <ul class="space-y-1 text-sm text-slate-300">
              ${
                insights.strengths
                  ? insights.strengths
                      .slice(0, 3)
                      .map((s) => `<li>• ${s}</li>`)
                      .join("")
                  : "<li>• Đang phân tích...</li>"
              }
            </ul>
          </div>
          
          <div class="bg-slate-800 p-4 rounded-lg">
            <h5 class="font-semibold text-yellow-300 mb-2">⚠️ Cần Cải Thiện</h5>
            <ul class="space-y-1 text-sm text-slate-300">
              ${
                insights.improvements
                  ? insights.improvements
                      .slice(0, 3)
                      .map((i) => `<li>• ${i}</li>`)
                      .join("")
                  : "<li>• Đang phân tích...</li>"
              }
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render data gaps analysis
   */
  renderDataGaps() {
    const gaps = this.analytics.analyzeDataGaps();
    const container = document.getElementById("gapsContainer");

    if (!container) return;

    container.innerHTML = `
      <div class="space-y-6">
        ${this.createRegionGaps(gaps.regionGaps)}
        ${this.createRoleGaps(gaps.roleGaps)}
        ${this.createDataQualityGaps(gaps.qualityGaps)}
      </div>
    `;
  }

  /**
   * Tạo region gaps analysis
   */
  createRegionGaps(regionGaps) {
    return `
      <div class="bg-slate-700 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-purple-300 mb-4">🗺️ Phân Tích Vùng Đất</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${
            regionGaps && regionGaps.length > 0
              ? regionGaps
                  .map(
                    (gap) => `
            <div class="analytics-card ${this.getPriorityClass(
              gap.priority
            )} bg-slate-800 p-4 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <span class="font-semibold text-slate-200">${gap.region}</span>
                <span class="text-xs px-2 py-1 rounded-full ${this.getPriorityBadgeClass(
                  gap.priority
                )}">${gap.priority}</span>
              </div>
              <div class="text-sm text-slate-400 mb-2">${gap.description}</div>
              <div class="text-xs text-slate-500">Thiếu: ${
                gap.missing
              } tướng</div>
            </div>
          `
                  )
                  .join("")
              : '<div class="text-slate-400">Không phát hiện gap nào trong vùng đất</div>'
          }
        </div>
      </div>
    `;
  }

  /**
   * Tạo role gaps analysis
   */
  createRoleGaps(roleGaps) {
    return `
      <div class="bg-slate-700 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-purple-300 mb-4">🎭 Phân Tích Vai Trò</h4>
        <div class="space-y-3">
          ${
            roleGaps && roleGaps.length > 0
              ? roleGaps
                  .map(
                    (gap) => `
            <div class="analytics-card ${this.getPriorityClass(
              gap.priority
            )} bg-slate-800 p-3 rounded-lg flex items-center justify-between">
              <div>
                <span class="font-semibold text-slate-200">${gap.role}</span>
                <div class="text-sm text-slate-400">${gap.description}</div>
              </div>
              <div class="text-right">
                <div class="text-lg font-bold text-cyan-400">${
                  gap.currentCount
                }</div>
                <div class="text-xs text-slate-500">hiện có</div>
              </div>
            </div>
          `
                  )
                  .join("")
              : '<div class="text-slate-400">Vai trò được phân bố khá đều</div>'
          }
        </div>
      </div>
    `;
  }

  /**
   * Tạo data quality gaps
   */
  createDataQualityGaps(qualityGaps) {
    return `
      <div class="bg-slate-700 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-purple-300 mb-4">📊 Chất Lượng Dữ Liệu</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          ${
            qualityGaps
              ? Object.entries(qualityGaps)
                  .map(
                    ([field, data]) => `
            <div class="bg-slate-800 p-4 rounded-lg text-center">
              <div class="text-2xl mb-2">${this.getFieldIcon(field)}</div>
              <div class="font-semibold text-slate-200 mb-1">${this.getFieldName(
                field
              )}</div>
              <div class="text-lg font-bold ${this.getCompletionColor(
                data.completionRate
              )}">${data.completionRate}%</div>
              <div class="text-xs text-slate-500">${data.missing} thiếu</div>
            </div>
          `
                  )
                  .join("")
              : '<div class="text-slate-400">Đang phân tích chất lượng dữ liệu...</div>'
          }
        </div>
      </div>
    `;
  }

  /**
   * Render champion suggestions
   */
  renderChampionSuggestions() {
    const suggestions = this.analytics.generateChampionSuggestions();
    const container = document.getElementById("suggestionsContainer");

    if (!container) return;

    container.innerHTML = `
      <div class="mb-6">
        <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-lg text-center mb-4">
          <h4 class="text-lg font-bold text-white">✨ Gợi Ý Tướng Mới Dựa Trên Phân Tích</h4>
          <p class="text-purple-100 text-sm">Những combination độc đáo và cần thiết cho database</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${
            suggestions && suggestions.length > 0
              ? suggestions
                  .slice(0, 9)
                  .map((suggestion) => this.createSuggestionCard(suggestion))
                  .join("")
              : '<div class="col-span-full text-center text-slate-400">Đang tạo gợi ý...</div>'
          }
        </div>
      </div>
      
      ${this.createUniqueCombinations()}
    `;
  }

  /**
   * Tạo suggestion card
   */
  createSuggestionCard(suggestion) {
    return `
      <div class="suggestion-card bg-slate-700 p-4 rounded-lg">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center space-x-2">
            <span class="text-2xl">${suggestion.regionIcon || "🗺️"}</span>
            <span class="font-semibold text-cyan-300">${
              suggestion.region
            }</span>
          </div>
          <span class="text-xs px-2 py-1 rounded-full ${this.getPriorityBadgeClass(
            suggestion.priority
          )}">${suggestion.priority}</span>
        </div>
        
        <div class="space-y-2 mb-4">
          <div class="flex justify-between text-sm">
            <span class="text-slate-400">Vai trò:</span>
            <span class="text-green-400">${suggestion.role}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-slate-400">Vũ khí:</span>
            <span class="text-orange-400">${suggestion.weapon}</span>
          </div>
          ${
            suggestion.species
              ? `
          <div class="flex justify-between text-sm">
            <span class="text-slate-400">Loài:</span>
            <span class="text-purple-400">${suggestion.species}</span>
          </div>
          `
              : ""
          }
        </div>
        
        <div class="bg-slate-800 p-3 rounded text-sm text-slate-300 mb-4">
          <strong>Gợi ý:</strong> ${
            suggestion.description ||
            "Combination độc đáo này sẽ mang lại sự đa dạng cho database"
          }
        </div>
        
        <div class="flex justify-between items-center">
          <span class="text-xs text-slate-500">Score: ${
            suggestion.score || "N/A"
          }</span>
          <button onclick="app.createChampionFromSuggestion('${JSON.stringify(
            suggestion
          ).replace(/'/g, "\\'")}');" 
                  class="create-btn bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm transition-colors">
            ➕ Tạo Tướng
          </button>
        </div>
      </div>
    `;
  }

  /**
   * Tạo unique combinations section
   */
  createUniqueCombinations() {
    const uniqueCombos = this.analytics.findUniqueCombinations();

    return `
      <div class="bg-slate-700 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-purple-300 mb-4">🎯 Combination Chưa Có</h4>
        <div class="text-sm text-slate-400 mb-4">Những tổ hợp region + role + weapon chưa được tạo</div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          ${
            uniqueCombos && uniqueCombos.length > 0
              ? uniqueCombos
                  .slice(0, 12)
                  .map(
                    (combo) => `
            <div class="bg-slate-800 p-3 rounded-lg text-sm">
              <div class="flex items-center space-x-2 mb-2">
                <span>${combo.regionIcon || "🗺️"}</span>
                <span class="font-semibold text-cyan-300">${combo.region}</span>
              </div>
              <div class="text-slate-400">${combo.role} • ${combo.weapon}</div>
            </div>
          `
                  )
                  .join("")
              : '<div class="col-span-full text-center text-slate-400">Hầu hết combinations đã được cover</div>'
          }
        </div>
      </div>
    `;
  }

  /**
   * Render data quality analysis
   */
  renderDataQuality() {
    const quality = this.analytics.analyzeDataQuality();
    const container = document.getElementById("qualityContainer");

    if (!container) return;

    container.innerHTML = `
      <div class="space-y-6">
        ${this.createHealthScore(quality.healthScore)}
        ${this.createCompletionAnalysis(quality.completionRates)}
        ${this.createDataConsistency(quality.consistency)}
        ${this.createActionItems(quality.actionItems)}
      </div>
    `;
  }

  /**
   * Tạo health score overview
   */
  createHealthScore(healthScore) {
    const scoreData = healthScore || { overall: 75, category: "Good" };

    return `
      <div class="bg-gradient-to-r from-slate-700 to-slate-600 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-purple-300 mb-4">🏥 Health Score Database</h4>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center">
            <div class="text-4xl font-bold ${this.getHealthScoreColor(
              scoreData.overall
            )} mb-2">${scoreData.overall}/100</div>
            <div class="text-slate-400">Overall Score</div>
          </div>
          
          <div class="text-center">
            <div class="text-2xl font-bold ${this.getHealthCategoryColor(
              scoreData.category
            )} mb-2">${scoreData.category}</div>
            <div class="text-slate-400">Health Category</div>
          </div>
          
          <div class="text-center">
            <div class="text-2xl font-bold text-cyan-400 mb-2">${
              scoreData.trends || "Ổn định"
            }</div>
            <div class="text-slate-400">Xu Hướng</div>
          </div>
        </div>
        
        <div class="mt-4 w-full bg-slate-600 rounded-full h-3">
          <div class="${this.getHealthScoreBarColor(
            scoreData.overall
          )} h-3 rounded-full transition-all duration-1000" 
               style="width: ${scoreData.overall}%"></div>
        </div>
      </div>
    `;
  }

  /**
   * Tạo completion analysis
   */
  createCompletionAnalysis(completionRates) {
    const rates = completionRates || {
      skills: 45,
      images: 78,
      lore: 32,
      releaseDate: 89,
    };

    return `
      <div class="bg-slate-700 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-purple-300 mb-4">📊 Phân Tích Hoàn Thiện</h4>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          ${Object.entries(rates)
            .map(
              ([field, rate]) => `
            <div class="bg-slate-800 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">${this.getFieldIcon(field)}</div>
              <div class="font-semibold text-slate-200 mb-2">${this.getFieldName(
                field
              )}</div>
              <div class="text-xl font-bold ${this.getCompletionColor(
                rate
              )} mb-1">${rate}%</div>
              <div class="w-full bg-slate-600 rounded-full h-2 mb-2">
                <div class="${this.getCompletionBarColor(
                  rate
                )} h-2 rounded-full transition-all duration-700" 
                     style="width: ${rate}%"></div>
              </div>
              <div class="text-xs ${this.getCompletionStatusColor(
                rate
              )}">${this.getCompletionStatus(rate)}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  /**
   * Tạo data consistency analysis
   */
  createDataConsistency(consistency) {
    const data = consistency || {
      duplicates: 2,
      missingBasicInfo: 5,
      inconsistentFormats: 3,
      orphanedData: 1,
    };

    return `
      <div class="bg-slate-700 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-purple-300 mb-4">🔍 Tính Nhất Quán Dữ Liệu</h4>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-slate-800 p-4 rounded-lg text-center">
            <div class="text-2xl mb-2">👥</div>
            <div class="font-semibold text-slate-200 mb-1">Duplicates</div>
            <div class="text-xl font-bold ${
              data.duplicates > 0 ? "text-red-400" : "text-green-400"
            }">${data.duplicates}</div>
          </div>
          
          <div class="bg-slate-800 p-4 rounded-lg text-center">
            <div class="text-2xl mb-2">❓</div>
            <div class="font-semibold text-slate-200 mb-1">Thiếu Info</div>
            <div class="text-xl font-bold ${
              data.missingBasicInfo > 3 ? "text-red-400" : "text-yellow-400"
            }">${data.missingBasicInfo}</div>
          </div>
          
          <div class="bg-slate-800 p-4 rounded-lg text-center">
            <div class="text-2xl mb-2">📝</div>
            <div class="font-semibold text-slate-200 mb-1">Format Lỗi</div>
            <div class="text-xl font-bold ${
              data.inconsistentFormats > 2 ? "text-red-400" : "text-green-400"
            }">${data.inconsistentFormats}</div>
          </div>
          
          <div class="bg-slate-800 p-4 rounded-lg text-center">
            <div class="text-2xl mb-2">🔗</div>
            <div class="font-semibold text-slate-200 mb-1">Orphaned</div>
            <div class="text-xl font-bold ${
              data.orphanedData > 0 ? "text-yellow-400" : "text-green-400"
            }">${data.orphanedData}</div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Tạo action items
   */
  createActionItems(actionItems) {
    const items = actionItems || [
      {
        task: "Bổ sung kỹ năng cho các tướng mới",
        priority: "High",
        effort: "Medium",
      },
      {
        task: "Cập nhật hình ảnh cho tướng cũ",
        priority: "Medium",
        effort: "Low",
      },
      { task: "Hoàn thiện cốt truyện", priority: "Low", effort: "High" },
    ];

    return `
      <div class="bg-slate-700 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-purple-300 mb-4">🎯 Action Items</h4>
        
        <div class="space-y-3">
          ${items
            .map(
              (item, index) => `
            <div class="analytics-card ${this.getPriorityClass(
              item.priority
            )} bg-slate-800 p-4 rounded-lg flex items-center justify-between">
              <div class="flex-1">
                <div class="font-semibold text-slate-200">${item.task}</div>
                <div class="text-sm text-slate-400">Effort: ${item.effort}</div>
              </div>
              
              <div class="flex items-center space-x-2">
                <span class="text-xs px-2 py-1 rounded-full ${this.getPriorityBadgeClass(
                  item.priority
                )}">${item.priority}</span>
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors">
                  Thực hiện
                </button>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  // Helper methods
  getPriorityClass(priority) {
    switch (priority?.toLowerCase()) {
      case "high":
        return "priority-high";
      case "medium":
        return "priority-medium";
      case "low":
        return "priority-low";
      default:
        return "";
    }
  }

  getPriorityBadgeClass(priority) {
    switch (priority?.toLowerCase()) {
      case "high":
        return "bg-red-600 text-white";
      case "medium":
        return "bg-yellow-600 text-white";
      case "low":
        return "bg-green-600 text-white";
      default:
        return "bg-slate-600 text-slate-300";
    }
  }

  getFieldIcon(field) {
    const icons = {
      skills: "🎯",
      images: "🖼️",
      lore: "📖",
      releaseDate: "📅",
      fullLore: "📜",
      weapon: "⚔️",
      role: "🎭",
    };
    return icons[field] || "📊";
  }

  getFieldName(field) {
    const names = {
      skills: "Kỹ Năng",
      images: "Hình Ảnh",
      lore: "Cốt Truyện",
      releaseDate: "Ngày Phát Hành",
      fullLore: "Lore Đầy Đủ",
      weapon: "Vũ Khí",
      role: "Vai Trò",
    };
    return names[field] || field;
  }

  getCompletionColor(rate) {
    if (rate >= 90) return "text-green-400";
    if (rate >= 70) return "text-blue-400";
    if (rate >= 50) return "text-yellow-400";
    return "text-red-400";
  }

  getCompletionBarColor(rate) {
    if (rate >= 90) return "bg-green-500";
    if (rate >= 70) return "bg-blue-500";
    if (rate >= 50) return "bg-yellow-500";
    return "bg-red-500";
  }

  getCompletionStatus(rate) {
    if (rate >= 90) return "Excellent";
    if (rate >= 70) return "Good";
    if (rate >= 50) return "Fair";
    return "Poor";
  }

  getCompletionStatusColor(rate) {
    if (rate >= 90) return "text-green-400";
    if (rate >= 70) return "text-blue-400";
    if (rate >= 50) return "text-yellow-400";
    return "text-red-400";
  }

  getHealthScoreColor(score) {
    if (score >= 90) return "text-green-400";
    if (score >= 70) return "text-blue-400";
    if (score >= 50) return "text-yellow-400";
    return "text-red-400";
  }

  getHealthCategoryColor(category) {
    switch (category?.toLowerCase()) {
      case "excellent":
        return "text-green-400";
      case "good":
        return "text-blue-400";
      case "fair":
        return "text-yellow-400";
      case "poor":
        return "text-red-400";
      default:
        return "text-slate-400";
    }
  }

  getHealthScoreBarColor(score) {
    if (score >= 90) return "bg-green-500";
    if (score >= 70) return "bg-blue-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  }

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Export analytics button
    const exportBtn = document.getElementById("exportAnalyticsBtn");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => this.exportAnalytics());
    }
  }

  /**
   * Export analytics report
   */
  exportAnalytics() {
    const report = this.analytics.generateReport();
    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `runeterra_analytics_report_${new Date()
      .toISOString()
      .slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  /**
   * Refresh analysis and UI
   */
  refreshAnalytics() {
    this.generateAnalysis();
    this.renderTabContent(this.currentTab);
  }
}

// Export for use in other files
if (typeof window !== "undefined") {
  window.AnalyticsUI = AnalyticsUI;
}
