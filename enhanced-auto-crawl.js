// Enhanced Auto Crawl and Refresh Script
// This script ensures the main page always shows the latest champions

console.log("🚀 Enhanced Auto Crawl Script Loading...");

// Enhanced skin service initialization
if (!window.skinService) {
  window.skinService = new SkinService();
}

// Initialize database from localStorage if available
function initializeDatabase() {
  try {
    // Try to load from localStorage first
    if (window.skinService.loadDatabase()) {
      console.log("📂 Loaded existing database from localStorage");
    } else {
      console.log("📝 Using default database from data.js");
    }

    // Ensure specialChampions is always an array
    if (!window.championsDatabase) {
      window.championsDatabase = { regions: [], specialChampions: [] };
    }
    if (!Array.isArray(window.championsDatabase.specialChampions)) {
      window.championsDatabase.specialChampions = [];
    }

    console.log("✅ Database initialized successfully");
  } catch (error) {
    console.error("❌ Error initializing database:", error);
  }
}

// Enhanced function to fully refresh champion display
window.refreshChampionDisplay = function () {
  console.log("🔄 Refreshing champion display...");

  try {
    // Refresh main app if exists
    if (window.runeterra) {
      window.runeterra.loadChampions();
    }

    // Force refresh any champion grids
    const grids = document.querySelectorAll("#championsGrid, .champions-grid");
    grids.forEach((grid) => {
      if (grid) {
        console.log("Refreshing grid:", grid.id || grid.className);
      }
    });

    // Update any champion count displays
    const countElements = document.querySelectorAll("[data-champion-count]");
    countElements.forEach((element) => {
      const count = window.skinService.getCurrentChampionCount();
      element.textContent = count;
    });

    console.log("✅ Champion display refreshed!");
  } catch (error) {
    console.error("❌ Error refreshing champion display:", error);
  }
};

// Enhanced force crawl function with better feedback
window.enhancedForceCrawl = async function (showAlert = true) {
  console.log("🔄 Enhanced force crawl starting...");

  try {
    // Get initial counts
    const beforeCount = window.skinService.getCurrentChampionCount();
    const apiCount = await window.skinService.getAPIChampionCount();
    const missingBefore = Math.max(0, apiCount - beforeCount);

    console.log(
      `📊 Before crawl: ${beforeCount}/${apiCount} champions (${missingBefore} missing)`
    );

    if (missingBefore === 0) {
      console.log(
        "ℹ️ All champions seem to be present, but crawling anyway to ensure freshness..."
      );
    }

    // Perform the crawl
    const newChampions = await window.skinService.crawlMissingChampions();

    // Get after counts
    const afterCount = window.skinService.getCurrentChampionCount();
    const missingAfter = Math.max(0, apiCount - afterCount);
    const actuallyAdded = afterCount - beforeCount;

    console.log(
      `📊 After crawl: ${afterCount}/${apiCount} champions (${missingAfter} missing)`
    );
    console.log(`✅ Actually added: ${actuallyAdded} champions`);

    // Always refresh the display, even if no new champions
    window.refreshChampionDisplay();

    // Show result
    const message =
      actuallyAdded > 0
        ? `✅ Đã cào thêm ${actuallyAdded} tướng mới!\nTổng cộng: ${afterCount}/${apiCount} tướng`
        : `ℹ️ Không có tướng mới để cào.\nTổng cộng: ${afterCount}/${apiCount} tướng\n(Database đã được làm mới)`;

    if (showAlert) {
      alert(message);
    }

    return {
      before: beforeCount,
      after: afterCount,
      added: actuallyAdded,
      total: apiCount,
      newChampions: newChampions,
    };
  } catch (error) {
    console.error("❌ Enhanced crawl error:", error);
    if (showAlert) {
      alert(`❌ Lỗi khi cào: ${error.message}`);
    }
    throw error;
  }
};

// Auto crawl on page load (if needed)
document.addEventListener("DOMContentLoaded", async function () {
  console.log("📱 DOM loaded, starting enhanced initialization...");

  try {
    // Initialize database first
    initializeDatabase();

    // Initialize main app if not exists
    if (!window.runeterra) {
      window.runeterra = new RuneterraApp();
    }

    // Check if we need to crawl
    const currentCount = window.skinService.getCurrentChampionCount();
    const apiCount = await window.skinService.getAPIChampionCount();
    const missing = apiCount - currentCount;

    console.log(
      `📊 Startup check: ${currentCount}/${apiCount} champions (${missing} missing)`
    );

    if (missing > 0) {
      console.log(`🔍 Found ${missing} missing champions, auto-crawling...`);

      const result = await window.enhancedForceCrawl(false);

      if (result.added > 0) {
        console.log(
          `✅ Auto-crawl successful: added ${result.added} champions`
        );

        // Show a non-intrusive notification
        const notification = document.createElement("div");
        notification.className =
          "fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50";
        notification.innerHTML = `✅ Đã tự động cập nhật ${result.added} tướng mới!`;
        document.body.appendChild(notification);

        setTimeout(() => {
          notification.remove();
        }, 5000);
      }
    } else {
      console.log("✅ All champions are up to date!");
    }

    // Load skin data in background
    await window.skinService.loadSkinsData();

    // Final refresh to ensure everything is displayed
    window.refreshChampionDisplay();

    console.log("✅ Enhanced initialization complete!");
  } catch (error) {
    console.error("❌ Enhanced initialization error:", error);
  }
});

// Replace the old forceCrawlChampions function with enhanced version
window.forceCrawlChampions = window.enhancedForceCrawl;

// Add refresh button functionality if it exists
document.addEventListener("DOMContentLoaded", function () {
  const refreshBtn = document.getElementById("refreshChampionsBtn");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", window.refreshChampionDisplay);
  }
});

// Debug functions
window.debugChampionCount = function () {
  console.log("=== CHAMPION COUNT DEBUG ===");
  console.log("Current count:", window.skinService.getCurrentChampionCount());

  if (window.championsDatabase?.regions) {
    let total = 0;
    window.championsDatabase.regions.forEach((region) => {
      const existing = region.existingChampions?.length || 0;
      const newChamps = region.newChampions?.length || 0;
      const regionTotal = existing + newChamps;
      total += regionTotal;
      console.log(
        `${region.name}: ${regionTotal} (${existing} existing + ${newChamps} new)`
      );
    });
    console.log("Total calculated:", total);
  }

  console.log("=== END DEBUG ===");
};

window.forceRefreshAll = function () {
  console.log("🔄 Force refreshing all displays...");
  window.refreshChampionDisplay();

  // Also reload the page if needed
  if (confirm("Reload trang để đảm bảo hiển thị mới nhất?")) {
    location.reload();
  }
};

// Function to unify all existing champions properties
window.unifyExistingChampions = function () {
  console.log("🔄 Unifying existing champions properties...");

  if (!window.championsDatabase || !window.championsDatabase.regions) {
    console.log("❌ No database found to unify");
    return;
  }

  let totalUpdated = 0;

  window.championsDatabase.regions.forEach((region) => {
    if (!region.existingChampions) return;

    region.existingChampions.forEach((champion) => {
      let updated = false;

      // Ensure all required properties exist
      const requiredProps = {
        id: champion.id || window.skinService.generateChampionId(champion.name),
        title: champion.title || "The Unknown",
        image:
          champion.image ||
          window.skinService.getDefaultChampionImage(champion.name),
        splash:
          champion.splash ||
          window.skinService.getDefaultSplashImage(champion.name),
        description:
          champion.description ||
          `${champion.name} is a champion from ${region.name}.`,
        lore:
          champion.lore ||
          `${champion.name} is a mysterious champion from ${region.name}.`,
        role: champion.role || "Unknown",
        tags: champion.tags || [],
        difficulty: champion.difficulty || 5,
        weapon: champion.weapon || "Unknown",
        species: champion.species || "Human",
        gender: champion.gender || "Unknown",
        releaseDate: champion.releaseDate || "Unknown",
        regionName: champion.regionName || region.name,
        stats: champion.stats || {
          hp: 500,
          hpperlevel: 80,
          mp: 300,
          mpperlevel: 40,
          movespeed: 325,
          armor: 20,
          armorperlevel: 3,
          spellblock: 30,
          spellblockperlevel: 0.5,
          attackrange: 125,
          hpregen: 7,
          hpregenperlevel: 0.7,
          mpregen: 7,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 60,
          attackdamageperlevel: 3,
          attackspeedperlevel: 3,
          attackspeed: 0.625,
        },
        spells: champion.spells || [],
        passive: champion.passive || {
          name: "Unknown Passive",
          description: "This champion's passive ability.",
          image: { full: "unknown.png" },
        },
      };

      // Update missing properties
      Object.keys(requiredProps).forEach((prop) => {
        if (!champion[prop]) {
          champion[prop] = requiredProps[prop];
          updated = true;
        }
      });

      if (updated) {
        champion.lastUpdated = new Date().toISOString();
        totalUpdated++;
      }
    });
  });

  console.log(`✅ Unified ${totalUpdated} existing champions`);

  // Save updated database
  window.skinService.saveDatabase();

  return totalUpdated;
};

// Function to show detailed database statistics
window.showDatabaseStats = function () {
  console.log("=== DATABASE STATISTICS ===");

  if (!window.championsDatabase || !window.championsDatabase.regions) {
    console.log("❌ No database found");
    return;
  }

  let totalChampions = 0;
  let totalRegions = window.championsDatabase.regions.length;

  console.log(`📊 Total Regions: ${totalRegions}`);

  window.championsDatabase.regions.forEach((region) => {
    const existing = region.existingChampions?.length || 0;
    const newChamps = region.newChampions?.length || 0;
    const regionTotal = existing + newChamps;
    totalChampions += regionTotal;

    console.log(
      `🏛️ ${region.name}: ${regionTotal} champions (${existing} existing + ${newChamps} new)`
    );
  });

  const specialCount = Array.isArray(window.championsDatabase.specialChampions)
    ? window.championsDatabase.specialChampions.length
    : 0;

  console.log(`⭐ Special Champions: ${specialCount}`);
  console.log(`🎯 Total Champions: ${totalChampions}`);
  console.log(
    `📊 Service Count: ${window.skinService.getCurrentChampionCount()}`
  );

  console.log("=== END STATISTICS ===");

  return {
    totalChampions,
    totalRegions,
    specialCount,
    serviceCount: window.skinService.getCurrentChampionCount(),
  };
};

console.log("✅ Enhanced Auto Crawl Script Loaded!");
console.log("Available commands:");
console.log("  - enhancedForceCrawl() - Force crawl missing champions");
console.log("  - refreshChampionDisplay() - Refresh champion display");
console.log("  - debugChampionCount() - Debug champion count");
console.log("  - forceRefreshAll() - Force refresh everything");
console.log(
  "  - unifyExistingChampions() - Unify existing champions properties"
);
console.log("  - showDatabaseStats() - Show detailed database statistics");
