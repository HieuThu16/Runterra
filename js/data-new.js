// Import region data from separate files
const voidData = require("./regions/void.js");
const shadowislesData = require("./regions/shadowisles.js");
const demaciaData = require("./regions/demacia.js");
const noxusData = require("./regions/noxus.js");
const ioniaData = require("./regions/ionia.js");
const piltoverData = require("./regions/piltover.js");
const specialChampionsData = require("./regions/specialChampions.js");

// Champions Database
const championsDatabase = {
  regions: [
    voidData,
    shadowislesData,
    demaciaData,
    noxusData,
    ioniaData,
    piltoverData,
  ],
  specialChampions: specialChampionsData,
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = championsDatabase;
}
