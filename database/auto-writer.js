// Auto File Writer for Database
class DatabaseFileWriter {
  constructor() {
    this.outputArea = null;
    this.setupOutput();
  }

  setupOutput() {
    // Tạo output area để hiển thị code
    if (!document.getElementById("codeOutput")) {
      const output = document.createElement("div");
      output.id = "codeOutput";
      output.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        width: 500px;
        max-height: 400px;
        background: #1e293b;
        border: 2px solid #0ea5e9;
        border-radius: 8px;
        padding: 20px;
        z-index: 1000;
        overflow-y: auto;
        font-family: monospace;
        font-size: 12px;
        color: #e2e8f0;
        display: none;
      `;
      document.body.appendChild(output);
      this.outputArea = output;
    }
  }

  showOutput() {
    if (this.outputArea) {
      this.outputArea.style.display = "block";
    }
  }

  hideOutput() {
    if (this.outputArea) {
      this.outputArea.style.display = "none";
    }
  }

  // Tạo file region và hiển thị code để copy
  async generateAllRegionFiles(regions) {
    console.log("🔥 AUTO-GENERATING REGION FILES...");

    const files = [];

    for (const [regionId, region] of Object.entries(regions)) {
      if (region.champions && region.champions.length > 0) {
        const fileContent = this.generateRegionFileContent(regionId, region);
        files.push({
          name: `${regionId}.js`,
          content: fileContent,
          path: `database/regions/${regionId}.js`,
        });

        // Lưu vào localStorage để có thể tải xuống
        localStorage.setItem(`region_file_${regionId}`, fileContent);
      }
    }

    // Tạo main database file
    const mainDbContent = this.generateMainDatabaseContent(regions);
    files.push({
      name: "championsDatabase.js",
      content: mainDbContent,
      path: "database/championsDatabase.js",
    });

    localStorage.setItem("main_database_file", mainDbContent);

    // Hiển thị files để copy
    this.displayFilesForCopy(files);

    return files;
  }

  generateRegionFileContent(regionId, region) {
    return `// ${region.name} Champions Data - Auto Generated
// Generated on: ${new Date().toISOString()}

const ${regionId}Champions = ${JSON.stringify(region.champions, null, 2)};

// Export for ES6 modules
export default ${regionId}Champions;
export { ${regionId}Champions };

// Global window export for browser
if (typeof window !== 'undefined') {
  window.${regionId}Champions = ${regionId}Champions;
}

// CommonJS export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ${regionId}Champions;
}

console.log('✅ ${
      region.name
    } champions loaded:', ${regionId}Champions.length, 'champions');
`;
  }

  generateMainDatabaseContent(regions) {
    const allChampions = [];
    Object.values(regions).forEach((region) => {
      if (region.champions) {
        allChampions.push(...region.champions);
      }
    });

    return `// Champions Database - Auto Generated
// Generated on: ${new Date().toISOString()}

const championsDatabase = {
  version: "${new Date().toISOString()}",
  totalChampions: ${allChampions.length},
  lastUpdated: "${new Date().toISOString()}",
  
  // Regions data
  regions: ${JSON.stringify(regions, null, 2)},
  
  // All champions flat array
  allChampions: ${JSON.stringify(allChampions, null, 2)}
};

// Export for ES6 modules
export default championsDatabase;
export { championsDatabase };

// Global window export for browser
if (typeof window !== 'undefined') {
  window.championsDatabase = championsDatabase;
}

// CommonJS export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = championsDatabase;
}

console.log('✅ Champions Database loaded:', championsDatabase.totalChampions, 'total champions');
`;
  }

  displayFilesForCopy(files) {
    let html =
      '<h3 style="color: #0ea5e9; margin-bottom: 15px;">📁 Generated Files (Click to Copy)</h3>';

    files.forEach((file, index) => {
      html += `
        <div style="margin-bottom: 15px; border: 1px solid #475569; border-radius: 6px; padding: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <strong style="color: #fbbf24;">${file.path}</strong>
            <button onclick="copyFileContent(${index})" style="background: #059669; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 11px;">Copy</button>
          </div>
          <textarea id="fileContent${index}" readonly style="width: 100%; height: 100px; background: #0f172a; color: #e2e8f0; border: 1px solid #374151; border-radius: 4px; padding: 8px; font-family: monospace; font-size: 10px; resize: vertical;">${file.content}</textarea>
        </div>
      `;
    });

    html += `
      <div style="margin-top: 15px; text-align: right;">
        <button onclick="hideCodeOutput()" style="background: #dc2626; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Close</button>
        <button onclick="downloadAllFiles()" style="background: #0ea5e9; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-left: 8px;">Download All</button>
      </div>
    `;

    if (this.outputArea) {
      this.outputArea.innerHTML = html;
      this.showOutput();
    }

    // Lưu files data để có thể download
    localStorage.setItem("generated_files", JSON.stringify(files));
  }
}

// Global functions
window.copyFileContent = function (index) {
  const textarea = document.getElementById(`fileContent${index}`);
  if (textarea) {
    textarea.select();
    document.execCommand("copy");
    alert("✅ File content copied to clipboard!");
  }
};

window.hideCodeOutput = function () {
  const output = document.getElementById("codeOutput");
  if (output) {
    output.style.display = "none";
  }
};

window.downloadAllFiles = function () {
  try {
    const filesData = localStorage.getItem("generated_files");
    if (filesData) {
      const files = JSON.parse(filesData);
      files.forEach((file) => {
        const blob = new Blob([file.content], { type: "text/javascript" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
      alert("✅ All files downloaded!");
    }
  } catch (error) {
    console.error("Error downloading files:", error);
    alert("❌ Error downloading files");
  }
};

// Global instance
window.dbWriter = new DatabaseFileWriter();

console.log("🎯 Database File Writer loaded!");
console.log("Use: dbWriter.generateAllRegionFiles(regions) to generate files");
