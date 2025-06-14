// Quick test script to check champions count
async function quickTest() {
  console.log("🚀 Quick Champion Count Test");

  // Initialize if needed
  if (!window.skinService) {
    window.skinService = new SkinService();
  }

  // Count current champions
  const currentCount = window.skinService.getCurrentChampionCount();
  console.log(`📊 Current champions in database: ${currentCount}`);

  // Count API champions
  console.log("🔍 Fetching API champion count...");
  const apiCount = await window.skinService.getAPIChampionCount();
  console.log(`📊 API champions available: ${apiCount}`);

  const missing = apiCount - currentCount;
  console.log(`❌ Missing champions: ${missing}`);

  if (missing > 0) {
    console.log("🔍 Starting to crawl missing champions...");
    const newChampions = await window.skinService.crawlMissingChampions();
    console.log(
      `✅ Successfully crawled ${newChampions.length} new champions!`
    );

    if (newChampions.length > 0) {
      console.log("🆕 New champions added:");
      newChampions.forEach((champ) => {
        console.log(`  - ${champ.name} (${champ.region}, ${champ.role})`);
      });
    }
  } else {
    console.log("✅ All champions are already in database!");
  }

  return {
    currentCount,
    apiCount,
    missing,
    newChampions:
      missing > 0 ? await window.skinService.crawlMissingChampions() : [],
  };
}

// Auto run when included
if (typeof window !== "undefined") {
  setTimeout(() => {
    quickTest()
      .then((result) => {
        console.log("🎯 Test completed:", result);
      })
      .catch((error) => {
        console.error("❌ Test failed:", error);
      });
  }, 2000);
}
