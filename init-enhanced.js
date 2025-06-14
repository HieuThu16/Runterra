// Enhanced initialization script
// This script initializes the skin service and loads all champions from API

console.log("🚀 Initializing Enhanced Runeterra Hub...");

// Initialize skin service globally
if (!window.skinService) {
  window.skinService = new SkinService();
}

// Initialize the main app
document.addEventListener("DOMContentLoaded", async function () {
  console.log("📱 DOM loaded, starting initialization...");

  // Initialize the main app
  window.runeterra = new RuneterraApp();

  // Check current vs API champion count
  console.log("📊 Checking champion count...");
  const apiCount = await window.skinService.getAPIChampionCount();
  const currentCount = window.skinService.getCurrentChampionCount();
  console.log(
    `📊 Current: ${currentCount}, API: ${apiCount}, Missing: ${
      apiCount - currentCount
    }`
  );

  // Crawl missing champions
  if (apiCount > currentCount) {
    console.log("🔍 Crawling missing champions...");
    const newChampions = await window.skinService.crawlMissingChampions();
    console.log(`✅ Added ${newChampions.length} new champions!`);
  }

  // Load skin data in background
  console.log("🎨 Loading skin data...");
  await window.skinService.loadSkinsData();

  // Force refresh champions display to use new data
  console.log("🔄 Refreshing champions display...");
  window.runeterra.loadChampions();

  console.log("✅ Enhanced initialization complete!");
});

// Enhanced debug function
window.debugData = function () {
  console.log("=== DEBUG DATA ===");
  console.log("Skin Service:", window.skinService);
  console.log("Total skins loaded:", window.skinService?.skins?.length || 0);
  console.log("Crawled champions:", window.crawledChampions?.length || 0);
  console.log(
    "Champions database regions:",
    window.championsDatabase?.regions?.length || 0
  );

  // Show champion count by region
  if (window.championsDatabase?.regions) {
    window.championsDatabase.regions.forEach((region) => {
      const total =
        (region.existingChampions?.length || 0) +
        (region.newChampions?.length || 0);
      console.log(`${region.name}: ${total} champions`);
    });
  }

  console.log("=== END DEBUG ===");
};

// Function to manually crawl missing champions
window.crawlMissing = async function () {
  console.log("🔍 Manual crawl missing champions...");
  const newChampions = await window.skinService.crawlMissingChampions();
  console.log(`✅ Added ${newChampions.length} new champions!`);
  window.runeterra.loadChampions();
  return newChampions;
};

console.log(
  "Enhanced init script loaded. Commands: debugData(), crawlMissing()"
);
