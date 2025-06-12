// Language Manager
const languages = {
  vi: {
    name: "Tiếng Việt",
    flag: "🇻🇳",
    translations: {
      // Header
      appTitle: "🎮 Runeterra Games Hub",

      // Navigation
      game5vs5: "⚔️ Game 5vs5",
      cardGame: "🃏 Game Lá Bài",

      // Region Filter
      selectRegion: "Chọn Vùng Đất:",
      allRegions: "Tất Cả Vùng Đất",
      void: "🕳️ Hư Không",
      shadowisles: "👻 Quần Đảo Bóng Đêm",
      demacia: "⚜️ Demacia",
      noxus: "🗡️ Noxus",
      ionia: "🌸 Ionia",
      piltover: "⚙️ Piltover", // Champion Types
      oldChampions: "📚 Tướng Cũ",
      newChampions: "✨ Tướng Mới",
      addChampion: "➕ Thêm Tướng",
      statistics: "📊 Thống Kê",

      // Statistics
      statisticsTitle: "📊 Thống Kê Tướng & Vùng Đất",
      totalChampions: "Tổng Số Tướng",
      totalRegions: "Tổng Số Vùng Đất",
      totalWeapons: "Loại Vũ Khí",
      popularRole: "Vai Trò Phổ Biến",
      regionStats: "📍 Thống Kê Theo Vùng Đất",
      roleDistribution: "🎭 Phân Bố Vai Trò",
      weaponStats: "⚔️ Thống Kê Vũ Khí",
      championDetails: "🎯 Chi Tiết Tướng",
      selectChampion: "Chọn Tướng:",
      basicInfo: "Thông Tin Cơ Bản",
      skillsInfo: "Kỹ Năng",
      loreInfo: "Câu Chuyện",

      // Database Management
      backup: "📥 Backup",
      restore: "📤 Restore",
      reset: "🔄 Reset",
      stats: "📊 Stats",

      // Champion Modal
      fullName: "📛 Tên Đầy Đủ",
      species: "🧬 Loài",
      age: "📅 Tuổi",
      weapon: "⚔️ Vũ Khí",
      origin: "🌍 Xuất Xứ",
      affiliation: "🏛️ Phe Phái",
      status: "📊 Trạng Thái",
      title: "👑 Danh Hiệu",
      rarity: "💎 Độ Hiếm",
      cost: "💰 Chi Phí",

      // Modal Sections
      basicInfo: "📜 Tóm Tắt Lore",
      gameplay: "🎮 Lối Chơi",
      skillsDetailed: "🎯 Kỹ Năng Chi Tiết",
      skills: "🎯 Kỹ Năng",
      specialFeatures: "⭐ Điểm Đặc Biệt",
      relationships: "💕 Mối Quan Hệ",
      abilities: "⚡ Khả Năng Đặc Biệt",
      fullStory: "📖 Câu Chuyện Đầy Đủ",
      notes: "📝 Ghi Chú",
      statsTitle: "📊 Chỉ Số",

      // Add Champion Form
      addNewChampion: "Thêm Tướng Mới",
      addOldChampion: "Thêm Tướng Cũ",
      championName: "Tên Tướng *",
      iconEmoji: "Icon (Emoji) *",
      role: "Vai Trò *",
      region: "Vùng Đất *",
      loreShort: "Câu Chuyện Tóm Tắt (Lore) *",
      loreFull: "Câu Chuyện Đầy Đủ",
      gameplayDesc: "Lối Chơi",
      skillsSection: "🎯 Kỹ Năng Chi Tiết",
      specialFeaturesSection: "⭐ Điểm Đặc Biệt",

      // Skill Types
      passive: "Passive",
      skillQ: "Q",
      skillW: "W",
      skillE: "E",
      skillR: "R",

      // Form Labels
      skillType: "Loại Kỹ Năng",
      skillName: "Tên Kỹ Năng",
      skillDesc: "Mô Tả Kỹ Năng",
      addSkill: "➕ Thêm Kỹ Năng",
      addFeature: "➕ Thêm Điểm Đặc Biệt",
      cancel: "Hủy",
      add: "Thêm Tướng",

      // Roles
      fighter: "Đấu Sĩ",
      marksman: "Xạ Thủ",
      mage: "Pháp Sư",
      assassin: "Sát Thủ",
      support: "Hỗ Trợ",
      tank: "Đỡ Đòn",
      supportTank: "Hỗ Trợ/Đỡ Đòn",
      hybrid: "Lai/Đa Dạng",

      // Messages
      noChampions: "Không có tướng nào trong khu vực này",
      errorLoading: "Lỗi khi tải dữ liệu tướng",
      resetConfirm:
        "⚠️ Bạn có chắc chắn muốn reset database về trạng thái ban đầu?\n\nTất cả tướng đã thêm sẽ bị mất!",
      resetSuccess: "✅ Database đã được reset thành công!",
      resetError: "❌ Lỗi khi reset database!",

      // Card Game
      cardGameTitle: "🃏 Game Lá Bài Runeterra",
      inDevelopment: "Đang Phát Triển",
      cardGameDesc:
        "Game lá bài Runeterra đang được phát triển với các cơ chế mới thú vị. Sẽ có các loại bài bẫy, bài phép thuật và nhiều chiến thuật đa dạng.",
      trapCards: "Bài Bẫy",
      trapDesc: "Thiết lập bẫy để phục kích đối thủ",
      spellCards: "Phép Thuật",
      spellDesc: "Sử dụng ma thuật mạnh mẽ",

      // Footer
      footerText:
        "🎮 Runeterra Games Hub - Khám phá tướng cũ, mới và game lá bài",

      // Language Selector
      language: "🌐 Ngôn ngữ",
    },
  },

  en: {
    name: "English",
    flag: "🇺🇸",
    translations: {
      // Header
      appTitle: "🎮 Runeterra Games Hub",

      // Navigation
      game5vs5: "⚔️ 5vs5 Game",
      cardGame: "🃏 Card Game",

      // Region Filter
      selectRegion: "Select Region:",
      allRegions: "All Regions",
      void: "🕳️ The Void",
      shadowisles: "👻 Shadow Isles",
      demacia: "⚜️ Demacia",
      noxus: "🗡️ Noxus",
      ionia: "🌸 Ionia",
      piltover: "⚙️ Piltover", // Champion Types
      oldChampions: "📚 Existing Champions",
      newChampions: "✨ New Champions",
      addChampion: "➕ Add Champion",
      statistics: "📊 Statistics",

      // Statistics
      statisticsTitle: "📊 Champion & Region Statistics",
      totalChampions: "Total Champions",
      totalRegions: "Total Regions",
      totalWeapons: "Weapon Types",
      popularRole: "Popular Role",
      regionStats: "📍 Regional Statistics",
      roleDistribution: "🎭 Role Distribution",
      weaponStats: "⚔️ Weapon Statistics",
      championDetails: "🎯 Champion Details",
      selectChampion: "Select Champion:",
      basicInfo: "Basic Information",
      skillsInfo: "Skills",
      loreInfo: "Lore",

      // Database Management
      backup: "📥 Backup",
      restore: "📤 Restore",
      reset: "🔄 Reset",
      stats: "📊 Stats",

      // Champion Modal
      fullName: "📛 Full Name",
      species: "🧬 Species",
      age: "📅 Age",
      weapon: "⚔️ Weapon",
      origin: "🌍 Origin",
      affiliation: "🏛️ Affiliation",
      status: "📊 Status",
      title: "👑 Title",
      rarity: "💎 Rarity",
      cost: "💰 Cost",

      // Modal Sections
      basicInfo: "📜 Lore Summary",
      gameplay: "🎮 Gameplay",
      skillsDetailed: "🎯 Detailed Skills",
      skills: "🎯 Skills",
      specialFeatures: "⭐ Special Features",
      relationships: "💕 Relationships",
      abilities: "⚡ Special Abilities",
      fullStory: "📖 Full Story",
      notes: "📝 Notes",
      statsTitle: "📊 Stats",

      // Add Champion Form
      addNewChampion: "Add New Champion",
      addOldChampion: "Add Existing Champion",
      championName: "Champion Name *",
      iconEmoji: "Icon (Emoji) *",
      role: "Role *",
      region: "Region *",
      loreShort: "Short Lore Summary *",
      loreFull: "Full Lore",
      gameplayDesc: "Gameplay Description",
      skillsSection: "🎯 Detailed Skills",
      specialFeaturesSection: "⭐ Special Features",

      // Skill Types
      passive: "Passive",
      skillQ: "Q",
      skillW: "W",
      skillE: "E",
      skillR: "R",

      // Form Labels
      skillType: "Skill Type",
      skillName: "Skill Name",
      skillDesc: "Skill Description",
      addSkill: "➕ Add Skill",
      addFeature: "➕ Add Feature",
      cancel: "Cancel",
      add: "Add Champion",

      // Roles
      fighter: "Fighter",
      marksman: "Marksman",
      mage: "Mage",
      assassin: "Assassin",
      support: "Support",
      tank: "Tank",
      supportTank: "Support/Tank",
      hybrid: "Hybrid/Diverse",

      // Messages
      noChampions: "No champions in this region",
      errorLoading: "Error loading champion data",
      resetConfirm:
        "⚠️ Are you sure you want to reset the database to its initial state?\n\nAll added champions will be lost!",
      resetSuccess: "✅ Database reset successfully!",
      resetError: "❌ Error resetting database!",

      // Card Game
      cardGameTitle: "🃏 Runeterra Card Game",
      inDevelopment: "In Development",
      cardGameDesc:
        "The Runeterra card game is being developed with exciting new mechanics. There will be trap cards, spell cards and many diverse strategies.",
      trapCards: "Trap Cards",
      trapDesc: "Set traps to ambush opponents",
      spellCards: "Spell Cards",
      spellDesc: "Use powerful magic",

      // Footer
      footerText:
        "🎮 Runeterra Games Hub - Explore old, new champions and card games",

      // Language Selector
      language: "🌐 Language",
    },
  },

  zh: {
    name: "中文",
    flag: "🇨🇳",
    translations: {
      // Header
      appTitle: "🎮 符文大地游戏中心",

      // Navigation
      game5vs5: "⚔️ 5v5游戏",
      cardGame: "🃏 卡牌游戏",

      // Region Filter
      selectRegion: "选择地区：",
      allRegions: "所有地区",
      void: "🕳️ 虚空",
      shadowisles: "👻 暗影岛",
      demacia: "⚜️ 德玛西亚",
      noxus: "🗡️ 诺克萨斯",
      ionia: "🌸 艾欧尼亚",
      piltover: "⚙️ 皮尔特沃夫", // Champion Types
      oldChampions: "📚 现有英雄",
      newChampions: "✨ 新英雄",
      addChampion: "➕ 添加英雄",
      statistics: "📊 统计",

      // Statistics
      statisticsTitle: "📊 英雄与地区统计",
      totalChampions: "英雄总数",
      totalRegions: "地区总数",
      totalWeapons: "武器类型",
      popularRole: "热门职业",
      regionStats: "📍 地区统计",
      roleDistribution: "🎭 职业分布",
      weaponStats: "⚔️ 武器统计",
      championDetails: "🎯 英雄详情",
      selectChampion: "选择英雄:",
      basicInfo: "基本信息",
      skillsInfo: "技能",
      loreInfo: "背景故事",

      // Database Management
      backup: "📥 备份",
      restore: "📤 恢复",
      reset: "🔄 重置",
      stats: "📊 统计",

      // Champion Modal
      fullName: "📛 全名",
      species: "🧬 种族",
      age: "📅 年龄",
      weapon: "⚔️ 武器",
      origin: "🌍 出身",
      affiliation: "🏛️ 阵营",
      status: "📊 状态",
      title: "👑 称号",
      rarity: "💎 稀有度",
      cost: "💰 费用",

      // Modal Sections
      basicInfo: "📜 背景摘要",
      gameplay: "🎮 游戏玩法",
      skillsDetailed: "🎯 详细技能",
      skills: "🎯 技能",
      specialFeatures: "⭐ 特殊特性",
      relationships: "💕 关系",
      abilities: "⚡ 特殊能力",
      fullStory: "📖 完整故事",
      notes: "📝 备注",
      statsTitle: "📊 属性",

      // Add Champion Form
      addNewChampion: "添加新英雄",
      addOldChampion: "添加现有英雄",
      championName: "英雄名称 *",
      iconEmoji: "图标 (表情) *",
      role: "职业 *",
      region: "地区 *",
      loreShort: "背景简介 *",
      loreFull: "完整背景",
      gameplayDesc: "游戏玩法描述",
      skillsSection: "🎯 详细技能",
      specialFeaturesSection: "⭐ 特殊特性",

      // Skill Types
      passive: "被动",
      skillQ: "Q",
      skillW: "W",
      skillE: "E",
      skillR: "R",

      // Form Labels
      skillType: "技能类型",
      skillName: "技能名称",
      skillDesc: "技能描述",
      addSkill: "➕ 添加技能",
      addFeature: "➕ 添加特性",
      cancel: "取消",
      add: "添加英雄",

      // Roles
      fighter: "战士",
      marksman: "射手",
      mage: "法师",
      assassin: "刺客",
      support: "辅助",
      tank: "坦克",
      supportTank: "辅助/坦克",
      hybrid: "混合/多样",

      // Messages
      noChampions: "此地区没有英雄",
      errorLoading: "加载英雄数据时出错",
      resetConfirm:
        "⚠️ 您确定要将数据库重置为初始状态吗？\n\n所有添加的英雄都将丢失！",
      resetSuccess: "✅ 数据库重置成功！",
      resetError: "❌ 重置数据库时出错！",

      // Card Game
      cardGameTitle: "🃏 符文大地卡牌游戏",
      inDevelopment: "开发中",
      cardGameDesc:
        "符文大地卡牌游戏正在开发中，将有令人兴奋的新机制。将会有陷阱卡、法术卡和许多不同的策略。",
      trapCards: "陷阱卡",
      trapDesc: "设置陷阱伏击对手",
      spellCards: "法术卡",
      spellDesc: "使用强大的魔法",

      // Footer
      footerText: "🎮 符文大地游戏中心 - 探索新老英雄和卡牌游戏",

      // Language Selector
      language: "🌐 语言",
    },
  },
};

// Language Manager Class
class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem("runeterra_language") || "vi";
    this.translationService = new TranslationService();
    this.isTranslating = false;
    this.translatedData = new Map(); // Cache for translated champion data
    this.initializeLanguage();
  }

  initializeLanguage() {
    this.updateContent();
    this.updateLanguageSelector();
  }
  setLanguage(langCode) {
    if (languages[langCode]) {
      this.currentLanguage = langCode;
      localStorage.setItem("runeterra_language", langCode);
      this.updateContent();
      this.updateLanguageSelector();
    }
  }

  async changeLanguage(langCode) {
    if (this.isTranslating) {
      console.log("Translation in progress, please wait...");
      return;
    }

    this.isTranslating = true;
    this.showTranslationProgress(true);

    try {
      this.setLanguage(langCode);

      // If changing to a language other than Vietnamese, translate dynamic content
      if (langCode !== "vi") {
        await this.translateDynamicContent(langCode);
      }

      // Refresh the champions display with translated data
      if (window.runeterra) {
        window.runeterra.loadChampions();
      }
    } catch (error) {
      console.error("Error during language change:", error);
    } finally {
      this.isTranslating = false;
      this.showTranslationProgress(false);
    }
  }

  showTranslationProgress(show) {
    let progressEl = document.getElementById("translation-progress");

    if (show && !progressEl) {
      progressEl = document.createElement("div");
      progressEl.id = "translation-progress";
      progressEl.className =
        "fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50";
      progressEl.innerHTML = "🌐 Đang dịch...";
      document.body.appendChild(progressEl);
    } else if (!show && progressEl) {
      progressEl.remove();
    }
  }
  async translateDynamicContent(targetLang) {
    console.log(`Translating dynamic content to ${targetLang}`);

    // Get all champion data and translate it
    if (window.championsDatabase && window.championsDatabase.regions) {
      // Count total champions for progress tracking
      let totalChampions = 0;
      let currentChampion = 0;

      for (const region of window.championsDatabase.regions) {
        if (region.existingChampions)
          totalChampions += region.existingChampions.length;
        if (region.newChampions) totalChampions += region.newChampions.length;
      }

      for (const region of window.championsDatabase.regions) {
        // Translate region name
        if (region.name) {
          const cacheKey = `region-${region.id}-${targetLang}`;
          if (!this.translatedData.has(cacheKey)) {
            const translatedName = await this.translationService.translateText(
              region.name,
              targetLang
            );
            this.translatedData.set(cacheKey, translatedName);
          }
          region.translatedName = this.translatedData.get(cacheKey);
        } // Translate existing champions
        if (region.existingChampions) {
          for (const champion of region.existingChampions) {
            currentChampion++;
            this.updateTranslationProgress(
              `Đang dịch tướng: ${champion.name}`,
              currentChampion,
              totalChampions
            );

            console.log(
              `=== TRANSLATING CHAMPION: ${champion.name} (ID: ${champion.id}) ===`
            );
            console.log(`Before translation:`, {
              name: champion.name,
              lore: champion.lore
                ? champion.lore.substring(0, 50) + "..."
                : "N/A",
              skills: champion.skills ? champion.skills.length : 0,
            });

            const cacheKey = `champion-${champion.id}-${targetLang}`;
            console.log(`Cache key: ${cacheKey}`);

            if (!this.translatedData.has(cacheKey)) {
              console.log(
                `Cache miss - translating champion ${champion.name}...`
              );
              const translatedChampion =
                await this.translationService.translateChampion(
                  champion,
                  targetLang
                );
              console.log(`Translation result:`, {
                name: translatedChampion.name,
                lore: translatedChampion.lore
                  ? translatedChampion.lore.substring(0, 50) + "..."
                  : "N/A",
                skills: translatedChampion.skills
                  ? translatedChampion.skills.length
                  : 0,
              });
              this.translatedData.set(cacheKey, translatedChampion);
            } else {
              console.log(
                `Cache hit - using cached translation for ${champion.name}`
              );
            }

            const translatedData = this.translatedData.get(cacheKey);
            console.log(`Applying translation to original champion...`);
            Object.assign(champion, translatedData);

            console.log(`After assignment:`, {
              name: champion.name,
              lore: champion.lore
                ? champion.lore.substring(0, 50) + "..."
                : "N/A",
              skills: champion.skills ? champion.skills.length : 0,
            });
            console.log(`=== END TRANSLATION FOR ${champion.name} ===`);
          }
        }

        // Translate new champions
        if (region.newChampions) {
          for (const champion of region.newChampions) {
            currentChampion++;
            this.updateTranslationProgress(
              `Đang dịch tướng: ${champion.name}`,
              currentChampion,
              totalChampions
            );

            const cacheKey = `champion-${champion.id}-${targetLang}`;
            if (!this.translatedData.has(cacheKey)) {
              const translatedChampion =
                await this.translationService.translateChampion(
                  champion,
                  targetLang
                );
              this.translatedData.set(cacheKey, translatedChampion);
            }
            Object.assign(champion, this.translatedData.get(cacheKey));
          }
        }
      }
    }
  }

  updateTranslationProgress(message, current, total) {
    let progressEl = document.getElementById("translation-progress");
    if (progressEl) {
      const percentage = Math.round((current / total) * 100);
      progressEl.innerHTML = `
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <div>
            <div class="text-sm font-medium">${message}</div>
            <div class="text-xs opacity-75">${percentage}% hoàn thành</div>
          </div>
        </div>
      `;
    }
  }

  translate(key) {
    return languages[this.currentLanguage]?.translations[key] || key;
  }

  getTranslation(key) {
    return this.translate(key);
  }
  updateContent() {
    // Update all elements with data-translate attribute
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      const translation = this.translate(key);

      if (element.tagName === "INPUT" && element.type === "text") {
        element.placeholder = translation;
      } else if (element.tagName === "OPTION") {
        element.textContent = translation;
      } else if (element.tagName === "SELECT") {
        // For select elements, update their options
        element.querySelectorAll("option[data-translate]").forEach((option) => {
          const optionKey = option.getAttribute("data-translate");
          const optionTranslation = this.translate(optionKey);
          option.textContent = optionTranslation;
        });
      } else {
        element.textContent = translation;
      }
    });

    // Update title
    document.title = this.translate("appTitle");

    // Update language in html tag
    document.documentElement.lang = this.currentLanguage;
  }

  updateLanguageSelector() {
    const selector = document.getElementById("languageSelector");
    if (selector) {
      const currentLang = languages[this.currentLanguage];
      selector.innerHTML = `${currentLang.flag} ${currentLang.name}`;
    }
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  getAvailableLanguages() {
    return Object.keys(languages);
  }
}

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = { LanguageManager, languages };
}
