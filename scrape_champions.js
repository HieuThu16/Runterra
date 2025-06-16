// Script to scrape all League of Legends champions data
const fs = require("fs");
const https = require("https");

// Function to make HTTP requests
function fetchData(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(error);
          }
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

// Function to get the latest version
async function getLatestVersion() {
  const versions = await fetchData(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  return versions[0];
}

// Function to get champion list
async function getChampionList(version) {
  const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;
  return await fetchData(url);
}

// Function to get detailed champion data
async function getChampionDetails(version, championKey) {
  const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championKey}.json`;
  return await fetchData(url);
}

// Function to determine region based on champion lore and background
function determineRegion(champion) {
  const lore = (champion.lore || "").toLowerCase();
  const blurb = (champion.blurb || "").toLowerCase();
  const title = (champion.title || "").toLowerCase();
  const name = champion.name.toLowerCase();

  // Region keywords mapping
  const regionKeywords = {
    demacia: [
      "demacia",
      "demacian",
      "petricite",
      "jarvan",
      "crown guard",
      "noble",
      "justice",
      "light",
    ],
    noxus: [
      "noxus",
      "noxian",
      "empire",
      "conquest",
      "might",
      "strength",
      "grand general",
    ],
    ionia: [
      "ionia",
      "ionian",
      "balance",
      "spirit",
      "harmony",
      "kinkou",
      "vastaya",
      "first lands",
    ],
    piltover: [
      "piltover",
      "zaun",
      "hextech",
      "progress",
      "invention",
      "technology",
      "academy",
    ],
    shadowisles: [
      "shadow isles",
      "blessed isles",
      "ruination",
      "undead",
      "wraith",
      "specter",
      "mist",
    ],
    void: ["void", "voidborn", "icathia", "watchers", "hunger", "consume"],
    freljord: [
      "freljord",
      "iceborn",
      "winter",
      "frost",
      "ice",
      "troll",
      "yeti",
    ],
    shurima: ["shurima", "ascended", "desert", "sand", "emperor", "sun disc"],
    bilgewater: [
      "bilgewater",
      "pirate",
      "gangplank",
      "sea",
      "ocean",
      "serpent isles",
    ],
    targon: ["targon", "celestial", "aspect", "mountain", "star", "cosmic"],
    bandle: ["bandle city", "yordle", "magical", "whimsical"],
  };

  const text = `${lore} ${blurb} ${title} ${name}`;

  for (const [region, keywords] of Object.entries(regionKeywords)) {
    for (const keyword of keywords) {
      if (text.includes(keyword)) {
        return region;
      }
    }
  }

  // Default fallback based on champion characteristics
  if (text.includes("magic") || text.includes("spell")) return "ionia";
  if (text.includes("war") || text.includes("battle")) return "noxus";
  if (text.includes("protect") || text.includes("guard")) return "demacia";

  return "unknown"; // For manual review
}

// Function to determine role based on champion tags
function determineRole(champion) {
  const tags = champion.tags || [];
  const primaryTag = tags[0];

  const roleMapping = {
    Fighter: "Đấu Sĩ",
    Tank: "Đỡ Đòn",
    Mage: "Pháp Sư",
    Assassin: "Sát Thủ",
    Marksman: "Xạ Thủ",
    Support: "Hỗ Trợ",
  };

  return roleMapping[primaryTag] || "Lai/Đa Dạng";
}

// Function to extract weapon from champion data
function extractWeapon(champion) {
  const lore = (champion.lore || "").toLowerCase();
  const blurb = (champion.blurb || "").toLowerCase();
  const spells = champion.spells || [];

  const weaponKeywords = {
    sword: ["sword", "blade", "katana"],
    bow: ["bow", "arrow", "crossbow"],
    gun: ["gun", "rifle", "pistol", "firearm"],
    magic: ["magic", "spell", "arcane", "mystical"],
    axe: ["axe", "hatchet"],
    hammer: ["hammer", "mace"],
    spear: ["spear", "lance", "pike"],
    staff: ["staff", "rod", "wand"],
    dagger: ["dagger", "knife", "blade"],
    fist: ["fist", "punch", "martial arts"],
    claws: ["claw", "talon", "nail"],
  };

  const text = `${lore} ${blurb} ${spells
    .map((s) => s.description || "")
    .join(" ")}`;

  for (const [weapon, keywords] of Object.entries(weaponKeywords)) {
    for (const keyword of keywords) {
      if (text.includes(keyword)) {
        return weapon.charAt(0).toUpperCase() + weapon.slice(1);
      }
    }
  }

  return "Unknown";
}

// Function to determine gender from champion data
function determineGender(champion) {
  const lore = (champion.lore || "").toLowerCase();
  const title = (champion.title || "").toLowerCase();

  // Common gender indicators
  if (lore.includes(" he ") || lore.includes(" his ") || lore.includes(" him "))
    return "Nam";
  if (
    lore.includes(" she ") ||
    lore.includes(" her ") ||
    lore.includes(" hers ")
  )
    return "Nữ";

  // Title-based detection
  if (
    title.includes("king") ||
    title.includes("emperor") ||
    title.includes("lord")
  )
    return "Nam";
  if (
    title.includes("queen") ||
    title.includes("empress") ||
    title.includes("lady")
  )
    return "Nữ";

  return "Không xác định";
}

// Function to determine species from champion data
function determineSpecies(champion) {
  const lore = (champion.lore || "").toLowerCase();
  const blurb = (champion.blurb || "").toLowerCase();
  const title = (champion.title || "").toLowerCase();

  const text = `${lore} ${blurb} ${title}`;

  if (text.includes("yordle")) return "Yordle";
  if (text.includes("vastaya")) return "Vastaya";
  if (text.includes("dragon")) return "Rồng";
  if (text.includes("demon") || text.includes("darkin")) return "Ác Ma";
  if (text.includes("spirit") || text.includes("ghost")) return "Hồn Ma";
  if (text.includes("void") || text.includes("voidborn"))
    return "Sinh Vật Hư Không";
  if (text.includes("ascended")) return "Thăng Thiên";
  if (text.includes("celestial") || text.includes("aspect")) return "Thiên Thể";
  if (
    text.includes("robot") ||
    text.includes("golem") ||
    text.includes("construct")
  )
    return "Cỗ Máy";
  if (
    text.includes("undead") ||
    text.includes("wraith") ||
    text.includes("specter")
  )
    return "Bất Tử";

  return "Con Người";
}

// Main function to scrape all champions
async function scrapeAllChampions() {
  try {
    console.log("Getting latest version...");
    const version = await getLatestVersion();
    console.log(`Latest version: ${version}`);

    console.log("Getting champion list...");
    const championList = await getChampionList(version);
    const champions = Object.values(championList.data);

    console.log(
      `Found ${champions.length} champions. Getting detailed data...`
    );

    const detailedChampions = [];

    for (let i = 0; i < champions.length; i++) {
      const champion = champions[i];
      console.log(`Processing ${champion.name} (${i + 1}/${champions.length})`);

      try {
        const details = await getChampionDetails(version, champion.id);
        const championData = details.data[champion.id];

        // Format champion data according to existing structure
        const formattedChampion = {
          id: champion.id.toLowerCase(),
          name: champion.name,
          fullName: `${champion.name}, ${champion.title}`,
          icon: getChampionIcon(champion.name),
          role: determineRole(champion),
          region: determineRegion(championData),
          image: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`,
          gender: determineGender(championData),
          species: determineSpecies(championData),
          age: "Không rõ",
          weapon: extractWeapon(championData),
          releaseDate: "Không rõ", // Would need additional API for this
          loreConnections: [], // Would need manual curation
          weaponSummary: extractWeapon(championData),
          lore:
            championData.lore ||
            championData.blurb ||
            "Chưa có thông tin cốt truyện.",
          fullLore: championData.lore || "Chưa có thông tin cốt truyện đầy đủ.",
          affiliation: "Không rõ",
          status: "Hoạt động",
          notes: "",
          skills: championData.spells
            ? championData.spells.map((spell) => ({
                name: spell.name,
                description: spell.description,
                key: spell.id,
              }))
            : [],
          specialFeatures: [],
        };

        detailedChampions.push(formattedChampion);

        // Add small delay to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error) {
        console.error(`Error processing ${champion.name}:`, error.message);
      }
    }

    // Group champions by region
    const championsByRegion = {};
    detailedChampions.forEach((champion) => {
      const region = champion.region;
      if (!championsByRegion[region]) {
        championsByRegion[region] = [];
      }
      championsByRegion[region].push(champion);
    });

    // Save the data
    const outputData = {
      version: version,
      totalChampions: detailedChampions.length,
      lastUpdated: new Date().toISOString(),
      championsByRegion: championsByRegion,
      allChampions: detailedChampions,
    };

    fs.writeFileSync(
      "scraped_champions_data.json",
      JSON.stringify(outputData, null, 2)
    );
    console.log(
      `\nScraping complete! Saved ${detailedChampions.length} champions to scraped_champions_data.json`
    );

    // Print summary
    console.log("\nChampions by region:");
    Object.entries(championsByRegion).forEach(([region, champs]) => {
      console.log(`${region}: ${champs.length} champions`);
    });
  } catch (error) {
    console.error("Error during scraping:", error);
  }
}

// Function to get appropriate icon for champion
function getChampionIcon(championName) {
  const iconMap = {
    Aatrox: "⚔️",
    Ahri: "🦊",
    Akali: "🗡️",
    Akshan: "🏹",
    Alistar: "🐂",
    Ammu: "🧸",
    Anivia: "🦅",
    Annie: "🔥",
    Aphelios: "🌙",
    Ashe: "❄️",
    "Aurelion Sol": "🐉",
    Azir: "🦅",
    Bard: "🎵",
    Blitzcrank: "🤖",
    Brand: "🔥",
    Braum: "🛡️",
    Caitlyn: "🎯",
    Camille: "⚔️",
    Cassiopeia: "🐍",
    "Cho'Gath": "👹",
    Corki: "✈️",
    Darius: "🪓",
    Diana: "🌙",
    "Dr. Mundo": "💉",
    Draven: "🪓",
    Ekko: "⏰",
    Elise: "🕷️",
    Evelynn: "💋",
    Ezreal: "✨",
    Fiddlesticks: "🎃",
    Fiora: "⚔️",
    Fizz: "🐟",
    Galio: "🗿",
    Gangplank: "🏴‍☠️",
    Garen: "🛡️",
    Gnar: "🦴",
    Gragas: "🍺",
    Graves: "🔫",
    Hecarim: "🐎",
    Heimerdinger: "🔧",
    Illaoi: "🐙",
    Irelia: "⚔️",
    Ivern: "🌳",
    Janna: "💨",
    "Jarvan IV": "👑",
    Jax: "🥊",
    Jayce: "🔨",
    Jhin: "🎭",
    Jinx: "💥",
    "Kai'Sa": "🦋",
    Kalista: "👻",
    Karma: "☯️",
    Karthus: "💀",
    Kassadin: "🌌",
    Katarina: "🗡️",
    Kayle: "👼",
    Kayn: "🌙",
    Kennen: "⚡",
    "Kha'Zix": "🦂",
    Kindred: "🐺",
    Kled: "🦎",
    "Kog'Maw": "👹",
    LeBlanc: "🎭",
    "Lee Sin": "🥋",
    Leona: "☀️",
    Lissandra: "❄️",
    Lucian: "🔫",
    Lulu: "🧚",
    Lux: "✨",
    Malphite: "🗿",
    Malzahar: "👁️",
    Maokai: "🌳",
    "Master Yi": "⚔️",
    "Miss Fortune": "🔫",
    Wukong: "🐒",
    Mordekaiser: "💀",
    Morgana: "🖤",
    Nami: "🧜",
    Nasus: "🐕",
    Nautilus: "⚓",
    Neeko: "🦎",
    Nidalee: "🐆",
    Nocturne: "👹",
    "Nunu & Willump": "❄️",
    Olaf: "🪓",
    Orianna: "⚙️",
    Ornn: "🔨",
    Pantheon: "🛡️",
    Poppy: "🔨",
    Pyke: "🗡️",
    Qiyana: "💎",
    Quinn: "🦅",
    Rakan: "🪶",
    Rammus: "🛡️",
    "Rek'Sai": "🦂",
    Rell: "⚔️",
    Renekton: "🐊",
    Rengar: "🦁",
    Riven: "⚔️",
    Rumble: "🤖",
    Ryze: "📜",
    Samira: "🔫",
    Sejuani: "❄️",
    Senna: "🔫",
    Seraphine: "🎵",
    Sett: "👊",
    Shaco: "🃏",
    Shen: "⚔️",
    Shyvana: "🐉",
    Singed: "☠️",
    Sion: "💀",
    Sivir: "🌟",
    Skarner: "🦂",
    Sona: "🎵",
    Soraka: "🌟",
    Swain: "🦅",
    Sylas: "⛓️",
    Syndra: "🔮",
    "Tahm Kench": "🐸",
    Taliyah: "🗿",
    Talon: "🗡️",
    Taric: "💎",
    Teemo: "🍄",
    Thresh: "⛓️",
    Tristana: "💥",
    Trundle: "🧊",
    Tryndamere: "⚔️",
    "Twisted Fate": "🃏",
    Twitch: "🐀",
    Udyr: "🐻",
    Urgot: "🦀",
    Varus: "🏹",
    Vayne: "🏹",
    Veigar: "🎩",
    "Vel'Koz": "👁️",
    Vi: "👊",
    Viktor: "⚙️",
    Vladimir: "🩸",
    Volibear: "🐻",
    Warwick: "🐺",
    Xayah: "🪶",
    Xerath: "⚡",
    "Xin Zhao": "🗡️",
    Yasuo: "🌪️",
    Yone: "👹",
    Yorick: "💀",
    Yuumi: "🐱",
    Zac: "💚",
    Zed: "🌙",
    Ziggs: "💣",
    Zilean: "⏰",
    Zoe: "✨",
    Zyra: "🌹",
  };

  return iconMap[championName] || "⚔️";
}

// Run the scraper
scrapeAllChampions();
