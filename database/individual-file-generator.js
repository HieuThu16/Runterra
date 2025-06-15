// Individual Champion File Generator
// Tạo file database riêng cho từng tướng với tên file là tên tướng

class IndividualFileGenerator {
  constructor() {
    this.outputDir = "database/champions/";
    this.generatedFiles = [];
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

  // Tạo tất cả file từng tướng
  async generateAllFiles(championsData) {
    try {
      this.generatedFiles = [];
      const champions = Object.values(championsData);

      console.log(
        `🚀 Starting to generate ${champions.length} individual champion files...`
      );

      for (const champion of champions) {
        const fileName = this.sanitizeFileName(champion.name);
        const fileContent = this.generateChampionFileContent(champion);

        // Tạo object file để lưu trữ
        const fileData = {
          originalName: champion.name,
          fileName: `${fileName}.js`,
          filePath: `${this.outputDir}${fileName}.js`,
          content: fileContent,
          champion: champion,
          size: fileContent.length,
          created: new Date().toISOString(),
        };

        this.generatedFiles.push(fileData);

        console.log(
          `📄 Generated: ${champion.name} -> ${fileName}.js (${fileContent.length} bytes)`
        );
      }

      console.log(
        `✅ Generated ${this.generatedFiles.length} champion database files`
      );
      return this.generatedFiles;
    } catch (error) {
      console.error("❌ Error generating individual files:", error);
      return [];
    }
  }

  // Log tất cả file đã tạo (để copy-paste vào thư mục)
  logAllFiles() {
    console.log("\n=== INDIVIDUAL CHAMPION FILES ===");
    console.log(`Total files: ${this.generatedFiles.length}`);

    this.generatedFiles.forEach((file, index) => {
      console.log(`\n--- File ${index + 1}: ${file.fileName} ---`);
      console.log(`Champion: ${file.originalName}`);
      console.log(`Size: ${file.size} bytes`);
      console.log(`Path: ${file.filePath}`);
      console.log("Content:");
      console.log(file.content);
      console.log(`--- End ${file.fileName} ---\n`);
    });

    console.log("=== END FILES ===");
  }

  // Tạo file index.js chứa danh sách tất cả champion files
  generateIndexFile() {
    const imports = this.generatedFiles
      .map(
        (file) =>
          `import ${file.champion.id}Database from './${file.fileName}';`
      )
      .join("\n");

    const exports = this.generatedFiles
      .map(
        (file) =>
          `  '${file.champion.id}': ${
            file.champion.id
          }Database,\n  '${file.fileName.replace(".js", "")}': ${
            file.champion.id
          }Database`
      )
      .join(",\n");

    const championsList = this.generatedFiles
      .map(
        (file) =>
          `  {\n    id: '${file.champion.id}',\n    name: '${file.champion.name}',\n    fileName: '${file.fileName}'\n  }`
      )
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
  return Object.values(championDatabases);
}

// Export default
export default championDatabases;

console.log('✅ Champions Database Index loaded with ${
      this.generatedFiles.length
    } champions');
`;
  }

  // Download tất cả file dưới dạng zip
  downloadAllFiles() {
    try {
      // Tạo file tổng hợp chứa tất cả champion files
      let allContent = `// ALL CHAMPIONS DATABASE COLLECTION\n`;
      allContent += `// Generated on ${new Date().toISOString()}\n`;
      allContent += `// Total champions: ${this.generatedFiles.length}\n\n`;

      this.generatedFiles.forEach((file, index) => {
        allContent += `\n// =============================================\n`;
        allContent += `// FILE ${index + 1}: ${file.fileName}\n`;
        allContent += `// CHAMPION: ${file.originalName}\n`;
        allContent += `// =============================================\n\n`;
        allContent += file.content;
        allContent += `\n\n// ============= END ${file.fileName} =============\n\n`;
      });

      // Thêm index file
      allContent += `\n// =============================================\n`;
      allContent += `// INDEX FILE: champions-index.js\n`;
      allContent += `// =============================================\n\n`;
      allContent += this.generateIndexFile();

      // Tạo và download file
      const blob = new Blob([allContent], { type: "text/javascript" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `all-champions-database-${Date.now()}.js`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      console.log("✅ Downloaded all champion database files");
      return true;
    } catch (error) {
      console.error("❌ Error downloading files:", error);
      return false;
    }
  }

  // Hiển thị thống kê
  showStats() {
    console.log("\n📊 INDIVIDUAL FILES STATISTICS:");
    console.log(`Total files: ${this.generatedFiles.length}`);
    console.log(
      `Total size: ${this.generatedFiles.reduce(
        (sum, f) => sum + f.size,
        0
      )} bytes`
    );
    console.log(
      `Average size: ${Math.round(
        this.generatedFiles.reduce((sum, f) => sum + f.size, 0) /
          this.generatedFiles.length
      )} bytes per file`
    );

    // Hiển thị các file đã tạo
    const fileList = this.generatedFiles.map(
      (f) => `${f.originalName} -> ${f.fileName}`
    );
    console.log("\n📁 Files created:");
    fileList.forEach((file, index) => {
      console.log(`${index + 1}. ${file}`);
    });
  }
}

// Global instance
window.individualFileGenerator = new IndividualFileGenerator();

// Hàm tiện lợi để sử dụng
window.generateIndividualChampionFiles = async function () {
  if (!window.enhancedDB || !window.enhancedDB.championsData) {
    console.error(
      "❌ Enhanced database not found. Please load champions first."
    );
    return false;
  }

  const generator = window.individualFileGenerator;
  const files = await generator.generateAllFiles(
    window.enhancedDB.championsData
  );

  if (files.length > 0) {
    generator.showStats();
    generator.logAllFiles();
    return files;
  }

  return false;
};

// Hàm download tất cả file
window.downloadAllChampionFiles = function () {
  return window.individualFileGenerator.downloadAllFiles();
};

console.log("🎯 Individual File Generator loaded!");
console.log("📝 Usage: generateIndividualChampionFiles()");
console.log("💾 Download: downloadAllChampionFiles()");
