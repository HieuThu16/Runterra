// Database Manager - Quản lý dữ liệu từ database folder
class DatabaseManager {
  constructor() {
    this.champions = [];
    this.regions = {};
    this.isLoaded = false;
  }

  async loadDatabase() {
    console.log("📂 Loading database...");

    // Thử load từ localStorage trước (nhanh hơn)
    if (this.loadFromStorage()) {
      this.isLoaded = true;
      return true;
    }

    // Nếu không có, yêu cầu crawl
    console.log("❌ No database found. Please crawl data first.");
    return false;
  }

  loadFromStorage() {
    try {
      const saved = localStorage.getItem("finalChampionsData");
      if (saved) {
        this.regions = JSON.parse(saved);
        this.processChampionsFromRegions();
        console.log("✅ Database loaded from storage");
        return true;
      }
    } catch (error) {
      console.error("❌ Error loading database:", error);
    }
    return false;
  }

  processChampionsFromRegions() {
    this.champions = [];
    Object.entries(this.regions).forEach(([regionId, region]) => {
      if (region.champions) {
        region.champions.forEach((champion) => {
          this.champions.push({
            ...champion,
            regionId: regionId,
            regionName: region.name,
          });
        });
      }
    });
    console.log(
      `📊 Processed ${this.champions.length} champions from ${
        Object.keys(this.regions).length
      } regions`
    );
  }

  getChampionById(id) {
    return this.champions.find((c) => c.id === id);
  }

  getChampionsByRegion(regionId) {
    return this.champions.filter((c) => c.regionId === regionId);
  }

  searchChampions(query) {
    if (!query) return this.champions;
    const lowQuery = query.toLowerCase();
    return this.champions.filter(
      (c) =>
        c.name.toLowerCase().includes(lowQuery) ||
        c.fullName.toLowerCase().includes(lowQuery)
    );
  }

  filterByRegion(regionId) {
    if (regionId === "all") return this.champions;
    return this.champions.filter((c) => c.regionId === regionId);
  }

  updateChampion(championId, updatedData) {
    const champion = this.getChampionById(championId);
    if (champion) {
      Object.assign(champion, updatedData);
      this.saveToStorage();
      console.log(`✅ Updated champion: ${champion.name}`);
      return true;
    }
    return false;
  }

  saveToStorage() {
    try {
      // Rebuild regions structure
      const regionsToSave = {};
      Object.keys(this.regions).forEach((regionId) => {
        regionsToSave[regionId] = {
          ...this.regions[regionId],
          champions: this.champions.filter((c) => c.regionId === regionId),
        };
      });

      localStorage.setItem("finalChampionsData", JSON.stringify(regionsToSave));
      console.log("💾 Database saved to storage");
    } catch (error) {
      console.error("❌ Error saving database:", error);
    }
  }

  getStats() {
    const stats = {
      totalChampions: this.champions.length,
      regions: {},
    };

    Object.entries(this.regions).forEach(([regionId, region]) => {
      const count = this.champions.filter(
        (c) => c.regionId === regionId
      ).length;
      if (count > 0) {
        stats.regions[region.name] = count;
      }
    });

    return stats;
  }
}

// Main Application using database
class ChampionApp {
  constructor() {
    this.db = new DatabaseManager();
    this.filteredChampions = [];
    this.currentSearch = "";
    this.currentRegion = "all";
    this.currentEditingChampion = null;
  }

  async init() {
    console.log("🚀 Initializing Champion App...");

    const loaded = await this.db.loadDatabase();
    if (loaded) {
      this.filteredChampions = this.db.champions;
      this.setupEventListeners();
      this.renderChampions();
      this.updateStats();
      console.log("✅ App initialized successfully!");
    } else {
      this.showNoDatabaseMessage();
    }
  }

  showNoDatabaseMessage() {
    const container = document.getElementById("championsContainer");
    if (container) {
      container.innerHTML = `
        <div class="col-span-full text-center py-8">
          <div class="bg-red-900/30 border border-red-600/50 rounded-lg p-6">
            <h3 class="text-xl font-bold text-red-300 mb-4">⚠️ Chưa Có Database</h3>
            <p class="text-slate-300 mb-4">Chưa có dữ liệu tướng. Vui lòng cào dữ liệu trước khi sử dụng.</p>
            <button onclick="startFinalCrawl()" 
                    class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded">
              🚀 Cào Dữ Liệu Ngay
            </button>
          </div>
        </div>
      `;
    }
  }

  setupEventListeners() {
    // Search
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) =>
        this.handleSearch(e.target.value)
      );
    }

    // Region filter
    const regionSelect = document.getElementById("regionFilter");
    if (regionSelect) {
      regionSelect.addEventListener("change", (e) =>
        this.handleRegionFilter(e.target.value)
      );
    }

    // Modal events
    const modal = document.getElementById("championModal");
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) this.closeModal();
      });
    }

    const editModal = document.getElementById("editModal");
    if (editModal) {
      editModal.addEventListener("click", (e) => {
        if (e.target === editModal) this.closeEditModal();
      });
    }

    // Edit form
    const editForm = document.getElementById("editForm");
    if (editForm) {
      editForm.addEventListener("submit", (e) => this.handleEditSubmit(e));
    }
  }

  handleSearch(query) {
    this.currentSearch = query;
    this.applyFilters();
  }

  handleRegionFilter(region) {
    this.currentRegion = region;
    this.applyFilters();
  }

  applyFilters() {
    let filtered = this.db.champions;

    // Apply search
    if (this.currentSearch) {
      filtered = this.db.searchChampions(this.currentSearch);
    }

    // Apply region filter
    if (this.currentRegion !== "all") {
      filtered = filtered.filter((c) => c.regionId === this.currentRegion);
    }

    this.filteredChampions = filtered;
    this.renderChampions();
  }

  renderChampions() {
    const container = document.getElementById("championsContainer");
    if (!container) return;

    if (this.filteredChampions.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-8">
          <p class="text-slate-400">Không tìm thấy tướng nào phù hợp</p>
        </div>
      `;
      return;
    }

    container.innerHTML = this.filteredChampions
      .map(
        (champion) => `
      <div class="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" 
           onclick="app.openModal('${champion.id}')">
        <div class="relative">
          <img src="${champion.image}" 
               alt="${champion.name}" 
               class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
               onerror="this.src='https://via.placeholder.com/300x200/334155/94a3b8?text=${champion.name}'">
          <div class="absolute top-2 right-2 bg-black/70 rounded px-2 py-1">
            <span class="text-xs text-white">${champion.regionName}</span>
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-200">${champion.name}</h3>
          <p class="text-slate-400 text-sm mb-1">${champion.role}</p>
          <p class="text-slate-500 text-xs truncate">${champion.fullName}</p>
        </div>
      </div>
    `
      )
      .join("");

    this.updateStats();
  }

  updateStats() {
    const stats = this.db.getStats();

    const totalElement = document.getElementById("totalChampions");
    const filteredElement = document.getElementById("filteredChampions");
    const regionsElement = document.getElementById("totalRegions");

    if (totalElement) totalElement.textContent = stats.totalChampions;
    if (filteredElement)
      filteredElement.textContent = this.filteredChampions.length;
    if (regionsElement)
      regionsElement.textContent = Object.keys(stats.regions).length;
  }

  openModal(championId) {
    const champion = this.db.getChampionById(championId);
    if (!champion) return;

    const modal = document.getElementById("championModal");
    const modalContent = document.getElementById("modalContent");

    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="bg-slate-800 rounded-lg p-6 max-w-6xl mx-4 max-h-[90vh] overflow-y-auto">
        <!-- Header -->
        <div class="flex justify-between items-start mb-6">
          <div class="flex gap-6">
            <img src="${champion.splashImage || champion.image}" 
                 alt="${champion.name}" 
                 class="w-32 h-32 rounded-lg object-cover shadow-lg">
            <div>
              <h2 class="text-4xl font-bold text-cyan-300">${champion.name}</h2>
              <p class="text-xl text-slate-400 mt-2">${champion.fullName}</p>
              <div class="flex gap-4 mt-3">
                <span class="bg-blue-600 text-white px-3 py-1 rounded">${
                  champion.role
                }</span>
                <span class="bg-purple-600 text-white px-3 py-1 rounded">${
                  champion.regionName
                }</span>
              </div>
            </div>
          </div>
          <div class="flex gap-3">
            <button onclick="app.openEditModal('${champion.id}')" 
                    class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
              ✏️ Sửa
            </button>
            <button onclick="app.closeModal()" 
                    class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
              ✕ Đóng
            </button>
          </div>
        </div>

        <!-- Content -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Left Column - Basic Info -->
          <div class="space-y-4">
            <div class="bg-slate-700 rounded-lg p-4">
              <h3 class="text-lg font-bold text-yellow-300 mb-3">📋 Thông Tin Cơ Bản</h3>
              <div class="space-y-2 text-sm">
                <p><span class="text-yellow-300 font-medium">Giới tính:</span> ${
                  champion.gender
                }</p>
                <p><span class="text-yellow-300 font-medium">Loài:</span> ${
                  champion.species
                }</p>
                <p><span class="text-yellow-300 font-medium">Tuổi:</span> ${
                  champion.age
                }</p>
                <p><span class="text-yellow-300 font-medium">Vũ khí:</span> ${
                  champion.weaponSummary
                }</p>
              </div>
            </div>

            <div class="bg-slate-700 rounded-lg p-4">
              <h3 class="text-lg font-bold text-orange-300 mb-3">⚔️ Vũ Khí Chi Tiết</h3>
              <p class="text-slate-300 text-sm leading-relaxed">${
                champion.weapon
              }</p>
            </div>
          </div>

          <!-- Middle Column - Skills & Abilities -->
          <div class="space-y-4">
            <div class="bg-slate-700 rounded-lg p-4">
              <h3 class="text-lg font-bold text-cyan-300 mb-3">🎯 Kỹ Năng</h3>
              <div class="space-y-2">
                ${champion.skills
                  .map(
                    (skill) => `
                  <div class="bg-slate-600 rounded p-3">
                    <p class="text-sm text-slate-300">${skill}</p>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>

          <!-- Right Column - Lore & Facts -->
          <div class="space-y-4">
            <div class="bg-slate-700 rounded-lg p-4">
              <h3 class="text-lg font-bold text-purple-300 mb-3">📜 Cốt Truyện</h3>
              <div class="max-h-48 overflow-y-auto">
                <p class="text-slate-300 text-sm leading-relaxed">${
                  champion.lore
                }</p>
              </div>
            </div>

            <div class="bg-slate-700 rounded-lg p-4">
              <h3 class="text-lg font-bold text-pink-300 mb-3">🔗 Liên Kết Cốt Truyện</h3>
              <div class="flex flex-wrap gap-2">
                ${champion.loreConnections
                  .map(
                    (connection) => `
                  <span class="bg-pink-600 text-white px-2 py-1 rounded text-xs">${connection}</span>
                `
                  )
                  .join("")}
              </div>
            </div>

            <div class="bg-slate-700 rounded-lg p-4">
              <h3 class="text-lg font-bold text-green-300 mb-3">✨ Fun Facts</h3>
              <ul class="space-y-1">
                ${champion.funFacts
                  .map(
                    (fact) => `
                  <li class="text-slate-300 text-sm leading-relaxed">• ${fact}</li>
                `
                  )
                  .join("")}
              </ul>
            </div>
          </div>
        </div>

        <!-- Full Lore -->
        <div class="bg-slate-700 rounded-lg p-4 mt-6">
          <h3 class="text-lg font-bold text-purple-300 mb-3">📖 Cốt Truyện Đầy Đủ</h3>
          <div class="max-h-64 overflow-y-auto">
            <p class="text-slate-300 text-sm leading-relaxed whitespace-pre-line">${
              champion.fullLore
            }</p>
          </div>
        </div>

        <!-- Skins -->
        ${
          champion.skins && champion.skins.length > 0
            ? `
          <div class="bg-slate-700 rounded-lg p-4 mt-6">
            <h3 class="text-lg font-bold text-blue-300 mb-3">🎨 Skins (${
              champion.skins.length
            })</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              ${champion.skins
                .slice(0, 8)
                .map(
                  (skin) => `
                <div class="bg-slate-600 rounded-lg overflow-hidden">
                  <img src="${skin.image}" 
                       alt="${skin.name}" 
                       class="w-full h-24 object-cover"
                       onerror="this.src='https://via.placeholder.com/300x200/334155/94a3b8?text=${skin.name}'">
                  <p class="p-2 text-xs text-slate-300 truncate">${skin.name}</p>
                </div>
              `
                )
                .join("")}
            </div>
            ${
              champion.skins.length > 8
                ? `<p class="text-sm text-slate-400 mt-2">và ${
                    champion.skins.length - 8
                  } skins khác...</p>`
                : ""
            }
          </div>
        `
            : ""
        }
      </div>
    `;

    modal.classList.remove("hidden");
  }

  closeModal() {
    const modal = document.getElementById("championModal");
    if (modal) modal.classList.add("hidden");
  }

  openEditModal(championId) {
    const champion = this.db.getChampionById(championId);
    if (!champion) return;

    this.currentEditingChampion = champion;

    // Populate form
    document.getElementById("editName").value = champion.name || "";
    document.getElementById("editFullName").value = champion.fullName || "";
    document.getElementById("editRole").value = champion.role || "";
    document.getElementById("editGender").value = champion.gender || "";
    document.getElementById("editSpecies").value = champion.species || "";
    document.getElementById("editAge").value = champion.age || "";
    document.getElementById("editWeaponSummary").value =
      champion.weaponSummary || "";
    document.getElementById("editWeapon").value = champion.weapon || "";
    document.getElementById("editLore").value = champion.lore || "";
    document.getElementById("editFullLore").value = champion.fullLore || "";

    // Skills
    const skillsContainer = document.getElementById("editSkills");
    skillsContainer.innerHTML = champion.skills
      .map(
        (skill, index) => `
      <input type="text" value="${skill}" 
             class="w-full p-3 bg-slate-700 text-white rounded border border-slate-600 mb-2" 
             onchange="app.updateSkill(${index}, this.value)"
             placeholder="Kỹ năng ${index + 1}">
    `
      )
      .join("");

    // Connections
    const connectionsContainer = document.getElementById("editConnections");
    connectionsContainer.innerHTML = champion.loreConnections
      .map(
        (connection, index) => `
      <input type="text" value="${connection}" 
             class="w-full p-3 bg-slate-700 text-white rounded border border-slate-600 mb-2" 
             onchange="app.updateConnection(${index}, this.value)"
             placeholder="Liên kết ${index + 1}">
    `
      )
      .join("");

    // Facts
    const factsContainer = document.getElementById("editFacts");
    factsContainer.innerHTML = champion.funFacts
      .map(
        (fact, index) => `
      <input type="text" value="${fact}" 
             class="w-full p-3 bg-slate-700 text-white rounded border border-slate-600 mb-2" 
             onchange="app.updateFact(${index}, this.value)"
             placeholder="Fun fact ${index + 1}">
    `
      )
      .join("");

    document.getElementById("editModal").classList.remove("hidden");
  }

  closeEditModal() {
    document.getElementById("editModal").classList.add("hidden");
    this.currentEditingChampion = null;
  }

  updateSkill(index, value) {
    if (this.currentEditingChampion) {
      this.currentEditingChampion.skills[index] = value;
    }
  }

  updateConnection(index, value) {
    if (this.currentEditingChampion) {
      this.currentEditingChampion.loreConnections[index] = value;
    }
  }

  updateFact(index, value) {
    if (this.currentEditingChampion) {
      this.currentEditingChampion.funFacts[index] = value;
    }
  }

  handleEditSubmit(e) {
    e.preventDefault();

    if (!this.currentEditingChampion) return;

    // Update basic fields
    const updates = {
      name: document.getElementById("editName").value,
      fullName: document.getElementById("editFullName").value,
      role: document.getElementById("editRole").value,
      gender: document.getElementById("editGender").value,
      species: document.getElementById("editSpecies").value,
      age: document.getElementById("editAge").value,
      weaponSummary: document.getElementById("editWeaponSummary").value,
      weapon: document.getElementById("editWeapon").value,
      lore: document.getElementById("editLore").value,
      fullLore: document.getElementById("editFullLore").value,
    };

    // Update in database
    this.db.updateChampion(this.currentEditingChampion.id, updates);

    // Refresh display
    this.closeEditModal();
    this.renderChampions();

    // Show success message
    this.showNotification("✅ Đã cập nhật thông tin tướng!");
  }

  showNotification(message, type = "success") {
    const notification = document.createElement("div");
    notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
      type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
    }`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.opacity = "0";
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Refresh data after crawl
  async refreshAfterCrawl() {
    const loaded = await this.db.loadDatabase();
    if (loaded) {
      this.filteredChampions = this.db.champions;
      this.renderChampions();
      this.updateStats();
      this.showNotification("✅ Dữ liệu đã được cập nhật!");
    }
  }
}

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  window.app = new ChampionApp();
  window.app.init();
});

// Global refresh function
window.refreshApp = () => {
  if (window.app) {
    window.app.refreshAfterCrawl();
  }
};

console.log("🎯 Champion App with Database Manager loaded!");
