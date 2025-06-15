// Node.js script để tạo file vật lý cho từng tướng
// Chạy: node create-champion-files.js

const fs = require("fs");
const path = require("path");

class ChampionFileCreator {
  constructor() {
    this.outputDir = path.join(__dirname, "database", "champions");
    this.inputFile = path.join(__dirname, "database", "enhanced-database.js");
  }

  // Sanitize filename - loại bỏ ký tự đặc biệt
  sanitizeFileName(name) {
    return name
      .toLowerCase()
      .replace(/'/g, "") // loại bỏ dấu nháy đơn (Kai'Sa -> kaisa)
      .replace(/\./g, "") // loại bỏ dấu chấm (Dr. Mundo -> dr-mundo)
      .replace(/[^a-z0-9]/g, "-") // thay thế ký tự đặc biệt bằng dấu gạch ngang
      .replace(/-+/g, "-") // loại bỏ dấu gạch ngang liên tiếp
      .replace(/^-|-$/g, ""); // loại bỏ dấu gạch ngang ở đầu và cuối
  }

  // Tạo nội dung file cho một tướng
  generateChampionFileContent(champion) {
    return `// ${champion.name} - Individual Champion Database
// Generated on ${new Date().toISOString()}

const ${champion.id}Database = ${JSON.stringify(champion, null, 2)};

// Export for use in different environments
if (typeof window !== 'undefined') {
  // Browser environment
  window.${champion.id}Database = ${champion.id}Database;
  window.championDatabases = window.championDatabases || {};
  window.championDatabases['${champion.id}'] = ${champion.id}Database;
  window.championDatabases['${this.sanitizeFileName(champion.name)}'] = ${
      champion.id
    }Database;
}

if (typeof module !== 'undefined' && module.exports) {
  // Node.js environment
  module.exports = ${champion.id}Database;
}

// ES6 export
export default ${champion.id}Database;
export { ${champion.id}Database };

console.log('✅ ${champion.name} database loaded successfully');
`;
  }

  // Tạo file index.js chứa danh sách tất cả champion files
  generateIndexFileContent(champions) {
    const imports = champions
      .map((champion) => {
        const fileName = this.sanitizeFileName(champion.name);
        return `import ${champion.id}Database from './${fileName}.js';`;
      })
      .join("\n");

    const exports = champions
      .map((champion) => {
        const fileName = this.sanitizeFileName(champion.name);
        return `  '${champion.id}': ${champion.id}Database,\n  '${fileName}': ${champion.id}Database`;
      })
      .join(",\n");

    const championsList = champions
      .map((champion) => {
        const fileName = this.sanitizeFileName(champion.name);
        return `  {\n    id: '${champion.id}',\n    name: '${champion.name}',\n    fileName: '${fileName}.js'\n  }`;
      })
      .join(",\n");

    return `// Champions Database Index
// Auto-generated file containing all individual champion databases
// Generated on ${new Date().toISOString()}

${imports}

// All champion databases
export const championDatabases = {
${exports}
};

// Champion files list
export const championFiles = [
${championsList}
];

// Get champion by ID or filename
export function getChampion(identifier) {
  return championDatabases[identifier] || null;
}

// Get all champions
export function getAllChampions() {
  return Object.values(championDatabases).filter((item, index, arr) => 
    arr.findIndex(c => c.id === item.id) === index
  );
}

// Export default
export default championDatabases;

console.log('✅ Champions Database Index loaded with ${
      champions.length
    } champions');
`;
  }

  // Sample champions data để test
  getSampleChampionsData() {
    return {
      Ahri: {
        id: "Ahri",
        name: "Ahri",
        title: "the Nine-Tailed Fox",
        blurb:
          "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy.",
        image:
          "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Ahri.png",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
        region: {
          id: "ionia",
          name: "Ionia",
          icon: "🌸",
          color: "#ff69b4",
        },
        role: "Mage",
        tags: ["Mage", "Assassin"],
        stats: {
          hp: 570,
          mp: 418,
          movespeed: 330,
          armor: 21,
          spellblock: 30,
          attackrange: 550,
        },
        abilities: [
          {
            key: "Passive",
            name: "Essence Theft",
            description: "Ahri gains essence when enemy champions die near her",
          },
          {
            key: "Q",
            name: "Orb of Deception",
            description: "Sends out an orb that deals magic damage",
          },
          {
            key: "W",
            name: "Fox-Fire",
            description: "Releases three fox-fires that target nearby enemies",
          },
          {
            key: "E",
            name: "Charm",
            description: "Blows a kiss that charms an enemy",
          },
          {
            key: "R",
            name: "Spirit Rush",
            description: "Dashes forward and fires essence bolts",
          },
        ],
      },
      Garen: {
        id: "Garen",
        name: "Garen",
        title: "the Might of Demacia",
        blurb:
          "A proud and noble warrior, Garen fights as one of the Dauntless Vanguard.",
        image:
          "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Garen.png",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",
        region: {
          id: "demacia",
          name: "Demacia",
          icon: "🏰",
          color: "#d4af37",
        },
        role: "Fighter",
        tags: ["Fighter", "Tank"],
        stats: {
          hp: 620,
          mp: 0,
          movespeed: 340,
          armor: 36,
          spellblock: 32,
          attackrange: 175,
        },
        abilities: [
          {
            key: "Passive",
            name: "Perseverance",
            description: "Regenerates health when out of combat",
          },
          {
            key: "Q",
            name: "Decisive Strike",
            description: "Next attack silences and deals bonus damage",
          },
          { key: "W", name: "Courage", description: "Reduces incoming damage" },
          {
            key: "E",
            name: "Judgment",
            description: "Spins sword to deal damage",
          },
          {
            key: "R",
            name: "Demacian Justice",
            description: "Executes low health enemies",
          },
        ],
      },
      KaiSa: {
        id: "KaiSa",
        name: "Kai'Sa",
        title: "Daughter of the Void",
        blurb:
          "Claimed by the Void when she was only a child, Kai'Sa has become something more than human.",
        image:
          "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/KaiSa.png",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KaiSa_0.jpg",
        region: {
          id: "void",
          name: "The Void",
          icon: "🕳️",
          color: "#9370db",
        },
        role: "Marksman",
        tags: ["Marksman"],
        stats: {
          hp: 600,
          mp: 344,
          movespeed: 335,
          armor: 28,
          spellblock: 30,
          attackrange: 525,
        },
        abilities: [
          {
            key: "Passive",
            name: "Second Skin",
            description: "Living weapon adapts to champion abilities",
          },
          {
            key: "Q",
            name: "Icathian Rain",
            description: "Fires a swarm of missiles",
          },
          {
            key: "W",
            name: "Void Seeker",
            description: "Fires a long range projectile",
          },
          {
            key: "E",
            name: "Supercharge",
            description: "Charges up attack speed and movement",
          },
          {
            key: "R",
            name: "Killer Instinct",
            description: "Dashes to marked enemy champion",
          },
        ],
      },
      DrMundo: {
        id: "DrMundo",
        name: "Dr. Mundo",
        title: "the Madman of Zaun",
        blurb:
          "Utterly mad, tragically homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors.",
        image:
          "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/DrMundo.png",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg",
        region: {
          id: "zaun",
          name: "Zaun",
          icon: "⚗️",
          color: "#32cd32",
        },
        role: "Fighter",
        tags: ["Fighter", "Tank"],
        stats: {
          hp: 582,
          mp: 0,
          movespeed: 345,
          armor: 32,
          spellblock: 32,
          attackrange: 175,
        },
        abilities: [
          {
            key: "Passive",
            name: "Goes Where He Pleases",
            description: "Immunity to immobilizing effects",
          },
          {
            key: "Q",
            name: "Infected Bonesaw",
            description: "Throws bonesaw that slows enemies",
          },
          {
            key: "W",
            name: "Heart Zapper",
            description: "Defibrillator deals damage over time",
          },
          {
            key: "E",
            name: "Blunt Force Trauma",
            description: "Gains bonus attack damage",
          },
          {
            key: "R",
            name: "Maximum Dosage",
            description: "Heals and gains movement speed",
          },
        ],
      },
      MissFortune: {
        id: "MissFortune",
        name: "Miss Fortune",
        title: "the Bounty Hunter",
        blurb:
          "A Bilgewater captain famed for her looks but feared for her ruthlessness.",
        image:
          "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/MissFortune.png",
        splashArt:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg",
        region: {
          id: "bilgewater",
          name: "Bilgewater",
          icon: "🏴‍☠️",
          color: "#ff8c00",
        },
        role: "Marksman",
        tags: ["Marksman"],
        stats: {
          hp: 580,
          mp: 325,
          movespeed: 325,
          armor: 28,
          spellblock: 30,
          attackrange: 550,
        },
        abilities: [
          {
            key: "Passive",
            name: "Love Taps",
            description: "Basic attacks deal bonus damage",
          },
          {
            key: "Q",
            name: "Double Up",
            description: "Fires shot that bounces to second target",
          },
          {
            key: "W",
            name: "Strut",
            description: "Gains movement speed when not taking damage",
          },
          {
            key: "E",
            name: "Make It Rain",
            description: "Rains bullets in target area",
          },
          {
            key: "R",
            name: "Bullet Time",
            description: "Channels to fire waves of bullets",
          },
        ],
      },
    };
  }

  // Tạo thư mục nếu chưa có
  ensureDirectoryExists() {
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
      console.log(`✅ Created directory: ${this.outputDir}`);
    }
  }

  // Tạo tất cả file từng tướng
  async createAllFiles(championsData = null) {
    try {
      // Sử dụng sample data nếu không có data
      const data = championsData || this.getSampleChampionsData();
      const champions = Object.values(data);

      this.ensureDirectoryExists();

      console.log(
        `🚀 Creating ${champions.length} individual champion files...`
      );

      let createdCount = 0;
      const createdFiles = [];

      // Tạo file từng tướng
      for (const champion of champions) {
        const fileName = this.sanitizeFileName(champion.name);
        const filePath = path.join(this.outputDir, `${fileName}.js`);
        const fileContent = this.generateChampionFileContent(champion);

        try {
          fs.writeFileSync(filePath, fileContent, "utf8");
          createdCount++;
          createdFiles.push({
            original: champion.name,
            fileName: `${fileName}.js`,
            filePath: filePath,
            size: fileContent.length,
          });
          console.log(`✅ Created: ${champion.name} -> ${fileName}.js`);
        } catch (error) {
          console.error(
            `❌ Error creating file for ${champion.name}:`,
            error.message
          );
        }
      }

      // Tạo file index.js
      const indexPath = path.join(this.outputDir, "index.js");
      const indexContent = this.generateIndexFileContent(champions);

      try {
        fs.writeFileSync(indexPath, indexContent, "utf8");
        console.log(`✅ Created index file: index.js`);
      } catch (error) {
        console.error(`❌ Error creating index file:`, error.message);
      }

      console.log(
        `\n🎉 Successfully created ${createdCount}/${champions.length} champion files!`
      );
      console.log(`📁 Files location: ${this.outputDir}`);

      return {
        success: true,
        created: createdCount,
        total: champions.length,
        files: createdFiles,
        directory: this.outputDir,
      };
    } catch (error) {
      console.error("❌ Error creating champion files:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  // Hiển thị thống kê file đã tạo
  showStats() {
    try {
      if (!fs.existsSync(this.outputDir)) {
        console.log("📁 No champion files directory found.");
        return;
      }

      const files = fs
        .readdirSync(this.outputDir)
        .filter((file) => file.endsWith(".js"));
      console.log(`\n📊 CHAMPION FILES STATISTICS:`);
      console.log(`Directory: ${this.outputDir}`);
      console.log(`Total files: ${files.length}`);

      if (files.length > 0) {
        const fileSizes = files.map((file) => {
          const filePath = path.join(this.outputDir, file);
          const stats = fs.statSync(filePath);
          return { name: file, size: stats.size };
        });

        const totalSize = fileSizes.reduce((sum, f) => sum + f.size, 0);
        const avgSize = totalSize / fileSizes.length;

        console.log(
          `Total size: ${totalSize} bytes (${(totalSize / 1024).toFixed(2)} KB)`
        );
        console.log(`Average size: ${avgSize.toFixed(2)} bytes per file`);

        console.log("\n📋 Files list:");
        fileSizes.forEach((file, index) => {
          console.log(`${index + 1}. ${file.name} (${file.size} bytes)`);
        });
      }
    } catch (error) {
      console.error("❌ Error showing stats:", error);
    }
  }
}

// Main function
async function main() {
  console.log("🎯 Champion Files Creator");
  console.log("=========================\n");

  const creator = new ChampionFileCreator();

  // Tạo files
  const result = await creator.createAllFiles();

  if (result.success) {
    console.log("\n✅ All done!");
    creator.showStats();
  } else {
    console.log(`\n❌ Failed: ${result.error}`);
  }
}

// Chạy script nếu được gọi trực tiếp
if (require.main === module) {
  main().catch(console.error);
}

module.exports = ChampionFileCreator;
