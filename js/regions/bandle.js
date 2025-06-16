// 🎪 Bandle City Region Data - Version 3.2 (Enhanced with Skills)
const bandleRegion = {
  "id": "bandle",
  "name": "🎪 Bandle City",
  "description": "Vùng đất 🎪 Bandle City",
  "lore": "Câu chuyện về 🎪 Bandle City",
  "existingChampions": [
    {
      "id": "rumble",
      "name": "Rumble",
      "fullName": "Rumble, the Mechanized Menace",
      "icon": "🤖",
      "role": "Đấu Sĩ",
      "region": "bandle",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg",
      "gender": "Nam",
      "species": "Yordle",
      "age": "100+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Tristy - Robot Tristy",
      "releaseDate": "2011",
      "lore": "Rumble is a young inventor with a temper. Using nothing more than his own two hands and a heap of scrap, the feisty yordle constructed a colossal mech suit outfitted with an arsenal of electrified harpoons and incendiary rockets. Though others may scoff and sneer at his junkyard creations, Rumble doesn't mind—after all, he's the one with the flamespitter.",
      "fullLore": "Rumble is a young inventor with a temper. Using nothing more than his own two hands and a heap of scrap, the feisty yordle constructed a colossal mech suit outfitted with an arsenal of electrified harpoons and incendiary rockets. Though others may scoff and sneer at his junkyard creations, Rumble doesn't mind—after all, he's the one with the flamespitter.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Junkyard Titan",
          "description": "Every spell Rumble casts gives him Heat. When he reaches 50% Heat he reaches Danger Zone, granting all his basic abilities bonus effects. When he reaches 100% Heat, he starts Overheating, gaining bonus Attack Speed and granting his basic attacks bonus damage, but making him unable to cast spells for a few seconds.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Rumble_JunkyardTitan1.png"
        },
        {
          "key": "Q",
          "name": "Flamespitter",
          "description": "Rumble torches opponents in front of him, dealing magic damage in a cone for 3 seconds. While in Danger Zone this damage is increased.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RumbleFlameThrower.png",
          "cooldown": "10/9/8/7/6",
          "cost": "0",
          "range": "600"
        },
        {
          "key": "W",
          "name": "Scrap Shield",
          "description": "Rumble pulls up a shield, protecting him from damage and granting him a quick burst of speed. While in Danger Zone, the shield strength and speed bonus is increased.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RumbleShield.png",
          "cooldown": "6",
          "cost": "0",
          "range": "20"
        },
        {
          "key": "E",
          "name": "Electro Harpoon",
          "description": "Rumble launches a harpoon, electrocuting his target with magic damage, slowing their Move Speed, and reducing their Magic Resist. Rumble can carry 2 harpoons at a time. While in Danger Zone the damage and slow percentage is increased.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RumbleGrenade.png",
          "cooldown": "0.5",
          "cost": "0",
          "range": "850"
        },
        {
          "key": "R",
          "name": "The Equalizer",
          "description": "Rumble fires off a group of rockets, creating a wall of flames that damages and slows enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RumbleCarpetBomb.png",
          "cooldown": "130/105/80",
          "cost": "0",
          "range": "1750"
        }
      ],
      "specialFeatures": []
    }
  ],
  "newChampions": []
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = bandleRegion;
}