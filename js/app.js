// Application Logic
class RuneterraApp {
  constructor() {
    this.db = new ChampionsDB();
    this.currentGame = "5vs5";
    this.currentRegion = "all";
    this.currentChampionType = "old";

    this.initializeEventListeners();
    this.loadChampions();
  }

  initializeEventListeners() {
    // Game tabs
    document
      .getElementById("game5vs5Tab")
      ?.addEventListener("click", () => this.switchGame("5vs5"));
    document
      .getElementById("cardGameTab")
      ?.addEventListener("click", () => this.switchGame("card"));

    // Region filter
    document.getElementById("regionFilter")?.addEventListener("change", (e) => {
      this.currentRegion = e.target.value;
      this.loadChampions();
    });

    // Champion type tabs
    document
      .getElementById("oldChampionsTab")
      ?.addEventListener("click", () => this.switchChampionType("old"));
    document
      .getElementById("newChampionsTab")
      ?.addEventListener("click", () => this.switchChampionType("new"));

    // Add champion button
    document
      .getElementById("addChampionBtn")
      ?.addEventListener("click", () => this.openAddChampionModal());

    // Modal close events
    document
      .getElementById("modalCloseButton")
      ?.addEventListener("click", () => this.closeModal());
    document.getElementById("championModal")?.addEventListener("click", (e) => {
      if (e.target.id === "championModal") this.closeModal();
    });

    // Add champion modal events
    document
      .getElementById("addModalCloseButton")
      ?.addEventListener("click", () => this.closeAddChampionModal());
    document
      .getElementById("addChampionModal")
      ?.addEventListener("click", (e) => {
        if (e.target.id === "addChampionModal") this.closeAddChampionModal();
      });
    document
      .getElementById("cancelAddBtn")
      ?.addEventListener("click", () => this.closeAddChampionModal()); // Form events
    document
      .getElementById("addChampionForm")
      ?.addEventListener("submit", (e) => this.handleAddChampion(e));
    document
      .getElementById("addSkillBtn")
      ?.addEventListener("click", () => this.addSkillField());

    // Database management events
    document
      .getElementById("downloadDbBtn")
      ?.addEventListener("click", () => this.downloadDatabase());
    document
      .getElementById("uploadDbBtn")
      ?.addEventListener("click", () => this.uploadDatabase());
    document
      .getElementById("uploadDbInput")
      ?.addEventListener("change", (e) => this.handleFileUpload(e));
    document
      .getElementById("resetDbBtn")
      ?.addEventListener("click", () => this.resetDatabase());
    document
      .getElementById("statsBtn")
      ?.addEventListener("click", () => this.showStats());

    // Code modal events
    document
      .getElementById("codeModalCloseButton")
      ?.addEventListener("click", () => this.closeCodeModal());
    document.getElementById("codeModal")?.addEventListener("click", (e) => {
      if (e.target.id === "codeModal") this.closeCodeModal();
    });
    document
      .getElementById("copyCodeBtn")
      ?.addEventListener("click", () => this.copyCode());
  }

  switchGame(game) {
    this.currentGame = game;

    // Update tab styles
    document
      .querySelectorAll(".game-tab")
      .forEach((tab) => tab.classList.remove("active"));
    document
      .getElementById(game === "5vs5" ? "game5vs5Tab" : "cardGameTab")
      ?.classList.add("active");

    // Show/hide content
    document
      .getElementById("game5vs5Content")
      ?.classList.toggle("hidden", game !== "5vs5");
    document
      .getElementById("cardGameContent")
      ?.classList.toggle("hidden", game !== "card");

    if (game === "5vs5") {
      this.loadChampions();
    }
  }

  switchChampionType(type) {
    this.currentChampionType = type;

    // Update tab styles
    document
      .querySelectorAll(".champion-type-tab")
      .forEach((tab) => tab.classList.remove("active"));
    document
      .getElementById(type === "old" ? "oldChampionsTab" : "newChampionsTab")
      ?.classList.add("active");

    this.loadChampions();
  }

  loadChampions() {
    const grid = document.getElementById("championsGrid");
    if (!grid) return;

    grid.innerHTML = "";

    try {
      const champions = this.db.getChampions(
        this.currentRegion,
        this.currentChampionType
      );

      if (champions.length === 0) {
        grid.innerHTML =
          '<div class="col-span-full text-center text-slate-400 py-8">Không có tướng nào trong khu vực này</div>';
        return;
      }

      champions.forEach((champion, index) => {
        const card = this.createChampionCard(champion, index + 1);
        grid.appendChild(card);
      });
    } catch (error) {
      console.error("Lỗi khi tải champions:", error);
      grid.innerHTML =
        '<div class="col-span-full text-center text-red-400 py-8">Lỗi khi tải dữ liệu tướng</div>';
    }
  }

  createChampionCard(champion, serialNumber) {
    const card = document.createElement("div");
    card.className =
      "bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 cursor-pointer relative";

    card.innerHTML = `
      <div class="absolute top-2 left-2 bg-slate-700 text-slate-300 text-xs font-bold px-2 py-1 rounded-full">#${serialNumber}</div>
      <div class="text-4xl mb-2 text-center">${champion.icon || "🎭"}</div>
      <h3 class="text-xl font-semibold text-cyan-300 mb-2 text-center">${
        champion.name || "Unknown"
      }</h3>
      <p class="text-sm text-slate-400 mb-2 text-center">${
        champion.role || "Unknown Role"
      }</p>
      <p class="text-xs text-slate-500 text-center">${
        champion.regionName || "Unknown Region"
      }</p>
      ${
        champion.special
          ? '<div class="mt-2 text-center"><span class="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full">Đặc Biệt</span></div>'
          : ""
      }
    `;

    card.addEventListener("click", () => this.openModal(champion));
    return card;
  }

  openModal(champion) {
    const modal = document.getElementById("championModal");
    const modalBody = document.getElementById("modalBody");

    if (!modal || !modalBody) return;

    let skillsHtml = "";
    if (champion.skills && champion.skills.length > 0) {
      skillsHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-cyan-300 mb-3">Kỹ Năng:</h4>
          <div class="space-y-2">
            ${champion.skills
              .map(
                (skill) => `
              <div class="bg-slate-700 p-3 rounded-md">
                <p class="text-sm text-slate-300">${skill}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    modalBody.innerHTML = `
      <div class="text-6xl mb-4 text-center">${champion.icon || "🎭"}</div>
      <h2 class="text-2xl font-bold text-cyan-300 mb-2 text-center">${
        champion.name || "Unknown"
      }</h2>
      <p class="text-lg text-slate-400 mb-4 text-center">${
        champion.role || "Unknown Role"
      } - ${champion.regionName || "Unknown Region"}</p>
      <div class="text-slate-300 leading-relaxed">
        <p>${champion.lore || "Chưa có thông tin lore."}</p>
      </div>
      ${skillsHtml}
      ${
        champion.special
          ? '<div class="mt-4 p-4 bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg"><p class="text-sm text-white"><strong>Đặc biệt:</strong> Tướng có khả năng biến đổi giữa 4 dạng với cơ chế mua đồ tự động.</p></div>'
          : ""
      }
    `;

    modal.classList.remove("hidden");
  }

  closeModal() {
    document.getElementById("championModal")?.classList.add("hidden");
  }

  openAddChampionModal() {
    const modal = document.getElementById("addChampionModal");
    const title = document.getElementById("addModalTitle");
    const skillsSection = document.getElementById("skillsSection");

    if (!modal || !title || !skillsSection) return;

    // Update title and show/hide skills section based on current champion type
    if (this.currentChampionType === "new") {
      title.textContent = "Thêm Tướng Mới";
      skillsSection.classList.remove("hidden");
      this.clearSkillFields();
      this.addSkillField();
    } else {
      title.textContent = "Thêm Tướng Cũ";
      skillsSection.classList.add("hidden");
      this.clearSkillFields();
    }

    // Reset form
    document.getElementById("addChampionForm")?.reset();
    modal.classList.remove("hidden");
  }

  closeAddChampionModal() {
    document.getElementById("addChampionModal")?.classList.add("hidden");
    document.getElementById("addChampionForm")?.reset();
    this.clearSkillFields();
  }

  addSkillField() {
    const container = document.getElementById("skillsContainer");
    if (!container) return;

    const skillDiv = document.createElement("div");
    skillDiv.className =
      "skill-field grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-slate-700 rounded-lg";

    skillDiv.innerHTML = `
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-2">Tên Kỹ Năng</label>
        <input type="text" class="skill-name w-full bg-slate-600 border border-slate-500 text-slate-100 rounded-lg p-2.5" placeholder="Q: Tên kỹ năng" required>
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-2">Mô Tả Kỹ Năng</label>
        <input type="text" class="skill-desc w-full bg-slate-600 border border-slate-500 text-slate-100 rounded-lg p-2.5" placeholder="Mô tả hiệu ứng kỹ năng" required>
      </div>
      <div class="md:col-span-2 flex justify-end">
        <button type="button" class="remove-skill px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm">
          ❌ Xóa
        </button>
      </div>
    `;

    container.appendChild(skillDiv);

    // Add remove event listener
    skillDiv.querySelector(".remove-skill")?.addEventListener("click", () => {
      skillDiv.remove();
    });
  }

  clearSkillFields() {
    const container = document.getElementById("skillsContainer");
    if (container) {
      container.innerHTML = "";
    }
  }

  handleAddChampion(e) {
    e.preventDefault();

    try {
      const name = document.getElementById("championName")?.value;
      const icon = document.getElementById("championIcon")?.value;
      const role = document.getElementById("championRole")?.value;
      const region = document.getElementById("championRegion")?.value;
      const lore = document.getElementById("championLore")?.value;

      // Validate required fields
      if (!name || !icon || !role || !region || !lore) {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
        return;
      }

      // Create champion object
      const newChampion = {
        name: name,
        icon: icon,
        role: role,
        region: region,
        lore: lore,
      };

      // Add skills if it's a new champion
      if (this.currentChampionType === "new") {
        const skillFields = document.querySelectorAll(".skill-field");
        const skills = [];

        skillFields.forEach((field) => {
          const skillName = field.querySelector(".skill-name")?.value;
          const skillDesc = field.querySelector(".skill-desc")?.value;

          if (skillName && skillDesc) {
            skills.push(`${skillName}: ${skillDesc}`);
          }
        });

        if (skills.length === 0) {
          alert("Tướng mới cần có ít nhất 1 kỹ năng!");
          return;
        }

        newChampion.skills = skills;
      } // Add champion to database
      this.db.addChampion(
        region,
        newChampion,
        this.currentChampionType === "new"
      );

      // Generate code for manual addition to data.js
      const code = this.db.generateChampionCode(
        region,
        newChampion,
        this.currentChampionType === "new"
      );

      // Close modal and refresh champions
      this.closeAddChampionModal();
      this.loadChampions();

      // Show success message and code modal
      alert(
        `✅ Đã thêm ${
          this.currentChampionType === "old" ? "tướng cũ" : "tướng mới"
        } "${name}" thành công!\n\n⚠️ Lưu ý: Để tướng hiển thị sau khi deploy, hãy copy code và thêm vào file data.js`
      ); // Show code modal
      this.showCodeModal(code);
    } catch (error) {
      console.error("Lỗi khi thêm tướng:", error);
      alert(`Lỗi: ${error.message}`);
    }
  }

  // Database management methods
  downloadDatabase() {
    this.db.downloadDatabase();
  }

  uploadDatabase() {
    document.getElementById("uploadDbInput")?.click();
  }

  async handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
      await this.db.uploadDatabase(file);
      this.loadChampions();
      alert("🎉 Restore dữ liệu thành công!");
    } catch (error) {
      console.error("Error uploading database:", error);
      alert("❌ Lỗi khi restore dữ liệu!");
    }

    // Reset file input
    event.target.value = "";
  }

  resetDatabase() {
    if (
      confirm("🔄 Bạn có chắc muốn reset tất cả dữ liệu về trạng thái ban đầu?")
    ) {
      this.db.resetDatabase();
      this.loadChampions();
      alert("🎉 Reset dữ liệu thành công!");
    }
  }

  showStats() {
    const stats = this.db.getStats();
    let message = `📊 Thống kê Champions:\n\n`;
    message += `🎯 Tổng: ${stats.total} tướng\n`;
    message += `📚 Tướng cũ: ${stats.old}\n`;
    message += `✨ Tướng mới: ${stats.new}\n\n`;
    message += `📍 Theo vùng đất:\n`;

    Object.entries(stats.regions).forEach(([region, data]) => {
      message += `• ${region}: ${data.total} (${data.old} cũ, ${data.new} mới)\n`;
    });

    alert(message);
  }

  // Code modal methods
  showCodeModal(code) {
    document.getElementById("codeDisplay").textContent = code;
    document.getElementById("codeModal")?.classList.remove("hidden");
  }

  closeCodeModal() {
    document.getElementById("codeModal")?.classList.add("hidden");
  }

  copyCode() {
    const codeText = document.getElementById("codeDisplay")?.textContent;
    if (codeText) {
      navigator.clipboard.writeText(codeText).then(() => {
        const btn = document.getElementById("copyCodeBtn");
        const originalText = btn.textContent;
        btn.textContent = "✅ Copied!";
        setTimeout(() => {
          btn.textContent = originalText;
        }, 2000);
      });
    }
  }
}

// Export class
if (typeof module !== "undefined" && module.exports) {
  module.exports = RuneterraApp;
}
