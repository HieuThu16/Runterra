// Application Logic
class RuneterraApp {
  constructor() {
    // Ensure window.championsDatabase is initialized for translations
    if (!window.championsDatabase) {
      window.championsDatabase = JSON.parse(JSON.stringify(championsDatabase));
      console.log(
        "RuneterraApp constructor - Initialized window.championsDatabase"
      );
    }

    // Debug: Check if championsDatabase is loaded properly
    console.log(
      "RuneterraApp constructor - championsDatabase:",
      championsDatabase
    );
    if (championsDatabase && championsDatabase.regions) {
      const shadowIsles = championsDatabase.regions.find(
        (r) => r.id === "shadowisles"
      );
      if (shadowIsles) {
        const thresh = shadowIsles.existingChampions.find(
          (c) => c.name === "Thresh"
        );
        console.log("RuneterraApp constructor - Raw Thresh data:", thresh);
      }
    }
    this.db = new ChampionsDB();
    this.currentGame = "5vs5";
    this.currentRegion = "all";
    this.currentChampionType = "old";

    // Initialize language manager
    this.languageManager = new LanguageManager();

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
      ?.addEventListener("click", () => this.switchGame("card")); // Region filter
    document.getElementById("regionFilter")?.addEventListener("change", (e) => {
      this.currentRegion = e.target.value;
      // Nếu chọn Demacia thì hiển thị lore info box
      if (this.currentRegion === "demacia") {
        const demaciaRegion = (
          window.championsDatabase || championsDatabase
        ).regions.find((r) => r.id === "demacia");
        if (demaciaRegion && demaciaRegion.lore) {
          document.getElementById("regionLoreBoxTitle").textContent =
            "📜 " + demaciaRegion.name + " - Lore";
          document.getElementById("regionLoreBoxContent").textContent =
            demaciaRegion.lore;
          document.getElementById("regionLoreBox").classList.remove("hidden");
        }
      } else {
        // Ẩn lore box khi chọn vùng khác
        document.getElementById("regionLoreBox").classList.add("hidden");
      }
      // Luôn luôn load champions
      this.loadChampions();
    }); // Đóng region lore info box
    document
      .getElementById("regionLoreBoxClose")
      ?.addEventListener("click", () => {
        document.getElementById("regionLoreBox").classList.add("hidden");
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
      ?.addEventListener("submit", (e) => this.handleAddChampionExtended(e));
    document
      .getElementById("addSkillBtn")
      ?.addEventListener("click", () => this.addSkillField());
    document
      .getElementById("addFeatureBtn")
      ?.addEventListener("click", () => this.addFeatureField());

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
    document
      .getElementById("clearTranslationCacheBtn")
      ?.addEventListener("click", () => this.clearTranslationCache()); // Code modal events
    document
      .getElementById("codeModalCloseButton")
      ?.addEventListener("click", () => this.closeCodeModal());
    document.getElementById("codeModal")?.addEventListener("click", (e) => {
      if (e.target.id === "codeModal") this.closeCodeModal();
    });
    document
      .getElementById("copyCodeBtn")
      ?.addEventListener("click", () => this.copyCode());

    // Language selector events
    document
      .getElementById("languageSelector")
      ?.addEventListener("click", () => this.toggleLanguageMenu()); // Language option events
    document.querySelectorAll(".language-option").forEach((option) => {
      option.addEventListener("click", async (e) => {
        const lang = e.currentTarget.getAttribute("data-lang");
        console.log("Changing language to:", lang);

        try {
          await this.languageManager.changeLanguage(lang);
          this.closeLanguageMenu();
          console.log("Language changed successfully");
        } catch (error) {
          console.error("Error changing language:", error);
          alert("Lỗi khi chuyển ngôn ngữ: " + error.message);
        }
      });
    });

    // Close language menu when clicking outside
    document.addEventListener("click", (e) => {
      const languageMenu = document.getElementById("languageMenu");
      const languageSelector = document.getElementById("languageSelector");

      if (
        languageMenu &&
        !languageSelector.contains(e.target) &&
        !languageMenu.contains(e.target)
      ) {
        this.closeLanguageMenu();
      }
    });
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

      // Debug: Check if we can find Thresh directly in raw data
      if (
        this.currentRegion === "all" ||
        this.currentRegion === "shadowisles"
      ) {
        console.log(
          "Raw data check - Shadow Isles region:",
          championsDatabase.regions.find((r) => r.id === "shadowisles")
        );
        const threshRaw = championsDatabase.regions
          .find((r) => r.id === "shadowisles")
          ?.existingChampions.find((c) => c.name === "Thresh");
        console.log("Raw Thresh data:", threshRaw);
      }

      console.log("Loaded champions:", champions);

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
    console.log("=== CHAMPION MODAL DEBUG ===");
    console.log("Opening modal for champion:", champion);
    console.log("Champion name:", champion.name);
    console.log("Champion lore:", champion.lore);
    console.log("Champion skills:", champion.skills);
    console.log("Champion specialFeatures:", champion.specialFeatures);
    console.log("Champion fullLore:", champion.fullLore);
    console.log("Champion fullName:", champion.fullName);
    console.log("Current language:", this.languageManager.getCurrentLanguage());

    // Additional debug: Check if this champion exists in window.championsDatabase
    if (window.championsDatabase) {
      const windowChampion = window.championsDatabase.regions
        .find((r) => r.id === "shadowisles")
        ?.existingChampions?.find((c) => c.name === champion.name);
      console.log("Same champion in window.championsDatabase:", windowChampion);
      if (windowChampion && champion.name === "Thresh") {
        console.log("Window Thresh lore:", windowChampion.lore);
        console.log("Modal Thresh lore:", champion.lore);
        console.log("Are they the same object?", windowChampion === champion);
      }
    }
    console.log("=== END DEBUG ===");

    const modal = document.getElementById("championModal");
    const modalBody = document.getElementById("modalBody");

    if (!modal || !modalBody) {
      console.error("Modal elements not found!");
      return;
    }

    // Enhanced skills display for detailed champion data
    let skillsHtml = "";
    if (champion.skills && champion.skills.length > 0) {
      // Check if skills are objects with detailed info
      if (typeof champion.skills[0] === "object" && champion.skills[0].type) {
        skillsHtml = `
          <div class="mt-6">
            <h4 class="text-lg font-semibold text-cyan-300 mb-3">${this.languageManager.getTranslation(
              "skillsDetailed"
            )}:</h4>
            <div class="space-y-3">
              ${champion.skills
                .map(
                  (skill) => `
                <div class="bg-slate-700 p-4 rounded-lg border-l-4 border-cyan-500">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="bg-cyan-600 text-white px-2 py-1 rounded text-xs font-bold">${skill.type}</span>
                    <h5 class="text-cyan-300 font-semibold">${skill.name}</h5>
                  </div>
                  <p class="text-sm text-slate-300 leading-relaxed">${skill.description}</p>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `;
      } else {
        // Simple skills display for basic champion data
        skillsHtml = `
          <div class="mt-6">
            <h4 class="text-lg font-semibold text-cyan-300 mb-3">${this.languageManager.getTranslation(
              "skills"
            )}:</h4>
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
    }

    // Special features display
    let specialFeaturesHtml = "";
    if (champion.specialFeatures && champion.specialFeatures.length > 0) {
      specialFeaturesHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-yellow-300 mb-3">${this.languageManager.getTranslation(
            "specialFeatures"
          )}:</h4>
          <div class="space-y-2">
            ${champion.specialFeatures
              .map(
                (feature) => `
              <div class="bg-yellow-900/30 p-3 rounded-md border border-yellow-600/50">
                <p class="text-sm text-yellow-100">• ${feature}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    // Additional info section - Enhanced with more attributes
    let additionalInfoHtml = "";
    const additionalFields = [];
    if (champion.fullName)
      additionalFields.push({
        label: this.languageManager.getTranslation("fullName"),
        value: champion.fullName,
      });
    if (champion.species)
      additionalFields.push({
        label: this.languageManager.getTranslation("species"),
        value: champion.species,
      });
    if (champion.age)
      additionalFields.push({
        label: this.languageManager.getTranslation("age"),
        value: champion.age,
      });
    if (champion.weapon)
      additionalFields.push({
        label: this.languageManager.getTranslation("weapon"),
        value: champion.weapon,
      });
    if (champion.origin)
      additionalFields.push({
        label: this.languageManager.getTranslation("origin"),
        value: champion.origin,
      });
    if (champion.affiliation)
      additionalFields.push({
        label: this.languageManager.getTranslation("affiliation"),
        value: champion.affiliation,
      });
    if (champion.status)
      additionalFields.push({
        label: this.languageManager.getTranslation("status"),
        value: champion.status,
      });
    if (champion.title)
      additionalFields.push({
        label: this.languageManager.getTranslation("title"),
        value: champion.title,
      });
    if (champion.rarity)
      additionalFields.push({
        label: this.languageManager.getTranslation("rarity"),
        value: champion.rarity,
      });
    if (champion.cost)
      additionalFields.push({
        label: this.languageManager.getTranslation("cost"),
        value: champion.cost,
      });

    if (additionalFields.length > 0) {
      additionalInfoHtml = `
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          ${additionalFields
            .map(
              (field) => `
            <div class="bg-slate-700/50 p-3 rounded-lg">
              <h5 class="text-cyan-300 font-semibold text-sm mb-1">${field.label}:</h5>
              <p class="text-slate-300 text-sm">${field.value}</p>
            </div>
          `
            )
            .join("")}
        </div>
      `;
    }

    // Gameplay section
    let gameplayHtml = "";
    if (champion.gameplay) {
      gameplayHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-green-300 mb-3">${this.languageManager.getTranslation(
            "gameplay"
          )}:</h4>
          <div class="bg-green-900/30 p-4 rounded-lg border border-green-600/50">
            <p class="text-sm text-green-100 leading-relaxed">${
              champion.gameplay
            }</p>
          </div>
        </div>
      `;
    }

    // Stats section if available
    let statsHtml = "";
    if (champion.stats) {
      statsHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-orange-300 mb-3">${this.languageManager.getTranslation(
            "statsTitle"
          )}:</h4>
          <div class="bg-orange-900/30 p-4 rounded-lg border border-orange-600/50">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              ${Object.entries(champion.stats)
                .map(
                  ([key, value]) => `
                <div class="text-orange-100">
                  <span class="text-orange-300 font-medium">${key}:</span> ${value}
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
    }

    // Relationships section if available
    let relationshipsHtml = "";
    if (champion.relationships && champion.relationships.length > 0) {
      relationshipsHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-pink-300 mb-3">${this.languageManager.getTranslation(
            "relationships"
          )}:</h4>
          <div class="space-y-2">
            ${champion.relationships
              .map(
                (rel) => `
              <div class="bg-pink-900/30 p-3 rounded-md border border-pink-600/50">
                <p class="text-sm text-pink-100"><strong>${rel.type}:</strong> ${rel.description}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    // Abilities/Powers section if different from skills
    let abilitiesHtml = "";
    if (champion.abilities && champion.abilities.length > 0) {
      abilitiesHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-indigo-300 mb-3">${this.languageManager.getTranslation(
            "abilities"
          )}:</h4>
          <div class="space-y-2">
            ${champion.abilities
              .map(
                (ability) => `
              <div class="bg-indigo-900/30 p-3 rounded-md border border-indigo-600/50">
                <p class="text-sm text-indigo-100">• ${ability}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    // Full lore section
    let fullLoreHtml = "";
    if (champion.fullLore && champion.fullLore !== champion.lore) {
      fullLoreHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-purple-300 mb-3">${this.languageManager.getTranslation(
            "fullStory"
          )}:</h4>
          <div class="bg-purple-900/30 p-4 rounded-lg border border-purple-600/50 max-h-64 overflow-y-auto">
            <p class="text-sm text-purple-100 leading-relaxed whitespace-pre-line">${
              champion.fullLore
            }</p>
          </div>
        </div>
      `;
    }

    // Additional notes or trivia
    let notesHtml = "";
    if (champion.notes || champion.trivia) {
      const content = champion.notes || champion.trivia;
      notesHtml = `
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-gray-300 mb-3">${this.languageManager.getTranslation(
            "notes"
          )}:</h4>
          <div class="bg-gray-900/30 p-4 rounded-lg border border-gray-600/50">
            <p class="text-sm text-gray-100 leading-relaxed">${content}</p>
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
      
      ${additionalInfoHtml}      
      <div class="mt-6">
        <h4 class="text-lg font-semibold text-slate-300 mb-3">${this.languageManager.getTranslation(
          "basicInfo"
        )}:</h4>
        <div class="text-slate-300 leading-relaxed bg-slate-700/50 p-4 rounded-lg">
          <p>${champion.lore || "Chưa có thông tin lore."}</p>
        </div>
      </div>
      
      ${gameplayHtml}
      ${statsHtml}
      ${skillsHtml}
      ${abilitiesHtml}
      ${specialFeaturesHtml}
      ${relationshipsHtml}
      ${fullLoreHtml}
      ${notesHtml}
      
      ${
        champion.special
          ? '<div class="mt-6 p-4 bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg"><p class="text-sm text-white"><strong>🌟 Đặc biệt:</strong> Tướng có khả năng biến đổi giữa 4 dạng với cơ chế mua đồ tự động.</p></div>'
          : ""
      }
    `;

    console.log("Modal HTML generated:", modalBody.innerHTML);

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
      "skill-field grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 bg-slate-700 rounded-lg";

    skillDiv.innerHTML = `
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-2">Loại Kỹ Năng</label>
        <select class="skill-type w-full bg-slate-600 border border-slate-500 text-slate-100 rounded-lg p-2.5" required>
          <option value="">Chọn loại</option>
          <option value="Passive">Passive</option>
          <option value="Q">Q</option>
          <option value="W">W</option>
          <option value="E">E</option>
          <option value="R">R</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-2">Tên Kỹ Năng</label>
        <input type="text" class="skill-name w-full bg-slate-600 border border-slate-500 text-slate-100 rounded-lg p-2.5" placeholder="Tên kỹ năng" required>
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-300 mb-2">Mô Tả Kỹ Năng</label>
        <textarea class="skill-desc w-full bg-slate-600 border border-slate-500 text-slate-100 rounded-lg p-2.5" rows="2" placeholder="Mô tả hiệu ứng kỹ năng" required></textarea>
      </div>
      <div class="md:col-span-3 flex justify-end">
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

  addFeatureField() {
    const container = document.getElementById("featuresContainer");
    if (!container) return;

    const featureDiv = document.createElement("div");
    featureDiv.className = "feature-field flex gap-2 mb-3";

    featureDiv.innerHTML = `
      <input type="text" class="feature-text flex-1 bg-slate-700 border border-slate-600 text-slate-100 rounded-lg p-2.5" placeholder="Nhập điểm đặc biệt..." required>
      <button type="button" class="remove-feature px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm">
        ❌
      </button>
    `;

    container.appendChild(featureDiv);

    // Add remove event listener
    featureDiv
      .querySelector(".remove-feature")
      ?.addEventListener("click", () => {
        featureDiv.remove();
      });
  }
  clearSkillFields() {
    const skillsContainer = document.getElementById("skillsContainer");
    const featuresContainer = document.getElementById("featuresContainer");
    if (skillsContainer) {
      skillsContainer.innerHTML = "";
    }
    if (featuresContainer) {
      featuresContainer.innerHTML = "";
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

  // Updated handleAddChampion method with extended fields
  handleAddChampionExtended(e) {
    e.preventDefault();

    try {
      const name = document.getElementById("championName")?.value;
      const icon = document.getElementById("championIcon")?.value;
      const role = document.getElementById("championRole")?.value;
      const region = document.getElementById("championRegion")?.value;
      const lore = document.getElementById("championLore")?.value;

      // Extended fields
      const fullName = document.getElementById("championFullName")?.value;
      const species = document.getElementById("championSpecies")?.value;
      const age = document.getElementById("championAge")?.value;
      const weapon = document.getElementById("championWeapon")?.value;
      const fullLore = document.getElementById("championFullLore")?.value;
      const gameplay = document.getElementById("championGameplay")?.value;

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

      // Add optional fields if provided
      if (fullName) newChampion.fullName = fullName;
      if (species) newChampion.species = species;
      if (age) newChampion.age = age;
      if (weapon) newChampion.weapon = weapon;
      if (fullLore) newChampion.fullLore = fullLore;
      if (gameplay) newChampion.gameplay = gameplay;

      // Add skills if it's a new champion
      if (this.currentChampionType === "new") {
        const skillFields = document.querySelectorAll(".skill-field");
        const skills = [];

        skillFields.forEach((field) => {
          const skillType = field.querySelector(".skill-type")?.value;
          const skillName = field.querySelector(".skill-name")?.value;
          const skillDesc = field.querySelector(".skill-desc")?.value;

          if (skillType && skillName && skillDesc) {
            skills.push({
              type: skillType,
              name: skillName,
              description: skillDesc,
            });
          }
        });

        if (skills.length === 0) {
          alert("Tướng mới cần có ít nhất 1 kỹ năng!");
          return;
        }

        newChampion.skills = skills;
      }

      // Add special features
      const featureFields = document.querySelectorAll(
        ".feature-field .feature-text"
      );
      const specialFeatures = [];
      featureFields.forEach((field) => {
        if (field.value.trim()) {
          specialFeatures.push(field.value.trim());
        }
      });
      if (specialFeatures.length > 0) {
        newChampion.specialFeatures = specialFeatures;
      }

      // Add champion to database
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
      );

      // Show code modal
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
      // Clear localStorage and reload from original data
      localStorage.removeItem("runeterra_champions_db");
      this.db.resetDatabase();
      this.loadChampions();
      alert("🎉 Reset dữ liệu thành công!");
      console.log("Database reset - checking Thresh again:");
      const threshCheck = this.db
        .getChampions("shadowisles", "old")
        .find((c) => c.name === "Thresh");
      console.log("Thresh after reset:", threshCheck);
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
  // Language menu control methods
  toggleLanguageMenu() {
    const languageMenu = document.getElementById("languageMenu");
    if (languageMenu) {
      languageMenu.classList.toggle("hidden");
    }
  }

  closeLanguageMenu() {
    const languageMenu = document.getElementById("languageMenu");
    if (languageMenu) {
      languageMenu.classList.add("hidden");
    }
  }

  // Translation cache management
  clearTranslationCache() {
    if (this.languageManager && this.languageManager.translationService) {
      const stats = this.languageManager.translationService.getCacheStats();
      const confirmation = confirm(
        `⚠️ Bạn có chắc chắn muốn xóa cache dịch thuật?\n\n` +
          `Cache hiện tại: ${stats.size} mục\n` +
          `Dung lượng: ${Math.round(stats.memoryUsage / 1024)} KB\n\n` +
          `Điều này sẽ làm cho việc dịch chậm hơn lần đầu tiên.`
      );

      if (confirmation) {
        this.languageManager.translationService.clearCache();
        alert("✅ Đã xóa cache dịch thuật thành công!");
      }
    }
  }
}

// Export class
if (typeof module !== "undefined" && module.exports) {
  module.exports = RuneterraApp;
}
