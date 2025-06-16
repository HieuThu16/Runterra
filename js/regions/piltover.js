// ⚙️ Piltover Region Data - Version 3.2 (Enhanced with Skills)
const piltoverData = {
  "id": "piltover",
  "name": "⚙️ Piltover",
  "description": "Vùng đất ⚙️ Piltover",
  "lore": "Câu chuyện về ⚙️ Piltover",
  "existingChampions": [
    {
      "id": "caitlyn",
      "name": "Caitlyn",
      "fullName": "Caitlyn, the Sheriff of Piltover",
      "icon": "🎯",
      "role": "Xạ Thủ",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "25-30 tuổi",
      "weapon": "Gun",
      "weaponSummary": "Hextech Rifle - Súng trường Hextech",
      "releaseDate": "2011",
      "lore": "Renowned as its finest peacekeeper, Caitlyn Kiramman is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a one-of-a-kind hextech rifle, Caitlyn's most powerful weapon is her superior intellect, allowing her to lay elaborate traps for any lawbreakers foolish enough to operate in the City of Progress.",
      "fullLore": "Renowned as its finest peacekeeper, Caitlyn Kiramman is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a one-of-a-kind hextech rifle, Caitlyn's most powerful weapon is her superior intellect, allowing her to lay elaborate traps for any lawbreakers foolish enough to operate in the City of Progress.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Headshot",
          "description": "Every few basic attacks, or against a target she has trapped or netted, Caitlyn will fire a headshot dealing bonus damage that scales with her critical strike chance. On trapped or netted targets, Caitlyn's Headshot attack range is doubled.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Caitlyn_Headshot.png"
        },
        {
          "key": "Q",
          "name": "Piltover Peacemaker",
          "description": "Caitlyn revs up her rifle for 1 second to unleash a penetrating shot that deals physical damage (deals less damage to subsequent targets).",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/CaitlynQ.png",
          "cooldown": "10/9/8/7/6",
          "cost": "55/60/65/70/75",
          "range": "1250"
        },
        {
          "key": "W",
          "name": "Yordle Snap Trap",
          "description": "Caitlyn sets a trap that, when sprung, reveals and immobilizes the enemy champion for 1.5 seconds, granting Caitlyn an empowered Headshot.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/CaitlynW.png",
          "cooldown": "0.5",
          "cost": "20",
          "range": "800"
        },
        {
          "key": "E",
          "name": "90 Caliber Net",
          "description": "Caitlyn fires a heavy net to slow her target. The recoil knocks Caitlyn back.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/CaitlynE.png",
          "cooldown": "16/14/12/10/8",
          "cost": "75",
          "range": "750"
        },
        {
          "key": "R",
          "name": "Ace in the Hole",
          "description": "Caitlyn takes time to line up the perfect shot, dealing massive damage to a single target at a huge range. Enemy champions can intercept the bullet for their ally.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/CaitlynR.png",
          "cooldown": "90",
          "cost": "100",
          "range": "3500"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "camille",
      "name": "Camille",
      "fullName": "Camille, the Steel Shadow",
      "icon": "⚔️",
      "role": "Đấu Sĩ",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "80+ tuổi (cơ thể cải tạo)",
      "weapon": "Sword",
      "weaponSummary": "Hextech Legs - Chân Hextech",
      "releaseDate": "2016",
      "lore": "Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly. Adaptable and precise, she views sloppy technique as an embarrassment that must be put to order. With a mind as sharp as the blades she bears, Camille's pursuit of superiority through hextech body augmentation has left many to wonder if she is now more machine than woman.",
      "fullLore": "Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly. Adaptable and precise, she views sloppy technique as an embarrassment that must be put to order. With a mind as sharp as the blades she bears, Camille's pursuit of superiority through hextech body augmentation has left many to wonder if she is now more machine than woman.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Adaptive Defenses",
          "description": "Basic attacks on champions grant a shield equal to a percentage of Camille's maximum health against their damage type (Physical or Magic) for a brief duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Camille_Passive.png"
        },
        {
          "key": "Q",
          "name": "Precision Protocol",
          "description": "Camille's next attack deals bonus damage and grants bonus Move Speed. This spell can be recast for a short period of time, doing significantly increased bonus damage if Camille delays a period of time between the two attacks.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/CamilleQ.png",
          "cooldown": "9/8.25/7.5/6.75/6",
          "cost": "25",
          "range": "325"
        },
        {
          "key": "W",
          "name": "Tactical Sweep",
          "description": "Camille blasts in a cone after a delay, dealing damage. Enemies in the outer half are slowed and take extra damage, while also healing Camille.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/CamilleW.png",
          "cooldown": "17/15.5/14/12.5/11",
          "cost": "50/55/60/65/70",
          "range": "610"
        },
        {
          "key": "E",
          "name": "Hookshot",
          "description": "Camille pulls herself to a wall, leaping off and knocking up enemy champions upon landing.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/CamilleE.png",
          "cooldown": "16/15/14/13/12",
          "cost": "70",
          "range": "800"
        },
        {
          "key": "R",
          "name": "The Hextech Ultimatum",
          "description": "Camille dashes to target champion, anchoring them to the area. She also deals bonus magic damage to the target with her basic attacks.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/CamilleR.png",
          "cooldown": "140/115/90",
          "cost": "100",
          "range": "475"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "corki",
      "name": "Corki",
      "fullName": "Corki, the Daring Bombardier",
      "icon": "✈️",
      "role": "Xạ Thủ",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg",
      "gender": "Nam",
      "species": "Yordle",
      "age": "100+ tuổi",
      "weapon": "Gun",
      "weaponSummary": "The Roflcopter - Máy bay trực thăng",
      "releaseDate": "2010",
      "lore": "The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He dedicated himself to the development of flying contraptions, leading an aerial defense force of seasoned veterans known as the Screaming Yipsnakes. Calm under fire, Corki patrols the skies around his adopted home, and has never encountered a problem that a good missile barrage couldn't solve.",
      "fullLore": "The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He dedicated himself to the development of flying contraptions, leading an aerial defense force of seasoned veterans known as the Screaming Yipsnakes. Calm under fire, Corki patrols the skies around his adopted home, and has never encountered a problem that a good missile barrage couldn't solve.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Hextech Munitions",
          "description": "A percentage of Corki's basic attack damage is converted into magic damage.Corki can occasionally retrieve The Package inside his base, granting him Move Speed and an empowered cast of Valkyrie.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Corki_RapidReload.png"
        },
        {
          "key": "Q",
          "name": "Phosphorus Bomb",
          "description": "Corki fires a flash bomb at a target location, dealing magic damage to enemies in the area. This attack additionally reveals units in the area for a duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/PhosphorusBomb.png",
          "cooldown": "8",
          "cost": "60/70/80/90/100",
          "range": "825"
        },
        {
          "key": "W",
          "name": "Valkyrie",
          "description": "Corki flies a short distance, dropping bombs that create a trail of fire that damages opponents who remain in it.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/CarpetBomb.png",
          "cooldown": "20/19/18/17/16",
          "cost": "100",
          "range": "600"
        },
        {
          "key": "E",
          "name": "Gatling Gun",
          "description": "Corki's gatling gun rapidly fires in a cone in front of him, dealing damage and reducing enemy Armor and Magic Resist.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GGun.png",
          "cooldown": "16",
          "cost": "50",
          "range": "600"
        },
        {
          "key": "R",
          "name": "Missile Barrage",
          "description": "Corki fires a missile toward his target location that explodes on impact, dealing damage to enemies in an area. Corki stores missiles over time, up to a maximum. Every 3rd missile fired will be a Big One, dealing extra damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MissileBarrage.png",
          "cooldown": "2",
          "cost": "20",
          "range": "1225"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "drmundo",
      "name": "Dr. Mundo",
      "fullName": "Dr. Mundo, the Madman of Zaun",
      "icon": "💉",
      "role": "Đỡ Đòn",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "40-45 tuổi",
      "weapon": "Staff",
      "weaponSummary": "Cleaver - Dao phay",
      "releaseDate": "2010",
      "lore": "Utterly mad, tragically homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. Now a self-proclaimed physician, he was once a patient of Zaun's most infamous asylum. After \"curing\" the entire staff, Dr. Mundo established his practice in the empty wards that once treated him and began mimicking the highly unethical procedures he had so often experienced himself. With a full cabinet of medicines and zero medical knowledge, he now makes himself more monstrous with each injection and terrifies the hapless \"patients\" who wander near his office.",
      "fullLore": "Utterly mad, tragically homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. Now a self-proclaimed physician, he was once a patient of Zaun's most infamous asylum. After \"curing\" the entire staff, Dr. Mundo established his practice in the empty wards that once treated him and began mimicking the highly unethical procedures he had so often experienced himself. With a full cabinet of medicines and zero medical knowledge, he now makes himself more monstrous with each injection and terrifies the hapless \"patients\" who wander near his office.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Goes Where He Pleases",
          "description": "Dr. Mundo resists the first Immobilizing effect that hits him, instead losing Health and dropping a chemical cannister nearby. Dr. Mundo can pick it up by walking over it, restoring Health and reducing this Ability's Cooldown.Dr. Mundo also has significantly increased Health regeneration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/DrMundo_P.png"
        },
        {
          "key": "Q",
          "name": "Infected Bonesaw",
          "description": "Dr. Mundo throws an infected bonesaw, dealing damage to the first enemy hit based on their current health and slowing them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DrMundoQ.png",
          "cooldown": "4",
          "cost": "0",
          "range": "975"
        },
        {
          "key": "W",
          "name": "Heart Zapper",
          "description": "Dr. Mundo electrocutes himself, dealing persistent damage to nearby enemies and storing a portion of damage he takes. At the end of the duration or on Recast, Dr. Mundo deals a burst of damage to nearby enemies. If the burst hit an enemy, he heals a percentage of the stored damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DrMundoW.png",
          "cooldown": "17/16.5/16/15.5/15",
          "cost": "0",
          "range": "325"
        },
        {
          "key": "E",
          "name": "Blunt Force Trauma",
          "description": "Passive - Dr. Mundo gains bonus Attack Damage, increasing based on his max Health.Active - Dr. Mundo slams his “medical” bag into an enemy, dealing additional damage based on his missing Health. If the enemy dies they are swatted away, dealing damage to enemies they pass through.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DrMundoE.png",
          "cooldown": "9/8.25/7.5/6.75/6",
          "cost": "0",
          "range": "0"
        },
        {
          "key": "R",
          "name": "Maximum Dosage",
          "description": "Dr. Mundo pumps himself with chemicals, instantly healing a percent of his missing Health. He then gains Move Speed and regenerates a portion of his maximum Health over a long duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DrMundoR.png",
          "cooldown": "120",
          "cost": "0",
          "range": "20"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "heimerdinger",
      "name": "Heimerdinger",
      "fullName": "Heimerdinger, the Revered Inventor",
      "icon": "🔧",
      "role": "Pháp Sư",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "300+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Turrets - Tháp pháo",
      "releaseDate": "2010",
      "lore": "The eccentric Professor Cecil B. Heimerdinger is one of the most innovative and esteemed inventors the world has ever known. As the longest serving member of the Council of Piltover, he saw the best and the worst of the city's unending desire for progress. Nonetheless, this brilliant scientist and teacher will always remain dedicated to using his unconventional devices to improve the lives of others.",
      "fullLore": "The eccentric Professor Cecil B. Heimerdinger is one of the most innovative and esteemed inventors the world has ever known. As the longest serving member of the Council of Piltover, he saw the best and the worst of the city's unending desire for progress. Nonetheless, this brilliant scientist and teacher will always remain dedicated to using his unconventional devices to improve the lives of others.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Hextech Affinity",
          "description": "Gain Move Speed while near allied towers and turrets deployed by Heimerdinger.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Heimerdinger_Passive.png"
        },
        {
          "key": "Q",
          "name": "H-28 G Evolution Turret",
          "description": "Heimerdinger lays down a rapid-fire cannon turret equipped with a secondary pass-through beam attack (turrets deal half damage to towers).",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/HeimerdingerQ.png",
          "cooldown": "1",
          "cost": "20",
          "range": "350"
        },
        {
          "key": "W",
          "name": "Hextech Micro-Rockets",
          "description": "Heimerdinger fires long-range rockets that converge on his cursor.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/HeimerdingerW.png",
          "cooldown": "11/10/9/8/7",
          "cost": "50/60/70/80/90",
          "range": "1325"
        },
        {
          "key": "E",
          "name": "CH-2 Electron Storm Grenade",
          "description": "Heimerdinger lobs a grenade at a location, dealing damage to enemy units, as well as stunning anyone directly hit and slowing surrounding units.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/HeimerdingerE.png",
          "cooldown": "11",
          "cost": "85",
          "range": "970"
        },
        {
          "key": "R",
          "name": "UPGRADE!!!",
          "description": "Heimerdinger invents an upgrade, causing his next spell to have increased effects. ",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/HeimerdingerR.png",
          "cooldown": "100/85/70",
          "cost": "100",
          "range": "1"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "jayce",
      "name": "Jayce",
      "fullName": "Jayce, the Defender of Tomorrow",
      "icon": "🔨",
      "role": "Xạ Thủ",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "30-35 tuổi",
      "weapon": "Gun",
      "weaponSummary": "Mercury Hammer/Cannon - Búa/Pháo thủy ngân",
      "releaseDate": "2012",
      "lore": "Jayce Talis is a brilliant inventor who, along with his friend Viktor, made the first great discoveries in the field of hextech. Celebrated across Piltover, he tries to live up to his reputation as \"the Man of Progress,\" but often struggles with the expectations placed upon him. Because of this, Jayce has begun to see the ways in which his invention has furthered the division between Piltover and Zaun—and armed with his hextech hammer, he stands ready to defend tomorrow.",
      "fullLore": "Jayce Talis is a brilliant inventor who, along with his friend Viktor, made the first great discoveries in the field of hextech. Celebrated across Piltover, he tries to live up to his reputation as \"the Man of Progress,\" but often struggles with the expectations placed upon him. Because of this, Jayce has begun to see the ways in which his invention has furthered the division between Piltover and Zaun—and armed with his hextech hammer, he stands ready to defend tomorrow.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Hextech Capacitor",
          "description": "When Jayce swaps weapons he gains Move Speed for a short duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Jayce_Passive.png"
        },
        {
          "key": "Q",
          "name": "To the Skies! / Shock Blast",
          "description": "Hammer Stance: Leaps to an enemy dealing physical damage and slowing enemies.Cannon Stance: Fires an orb of electricity that detonates upon hitting an enemy (or reaching the end of its path) dealing physical damage to all enemies hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JayceToTheSkies.png",
          "cooldown": "16/14/12/10/8/6",
          "cost": "40",
          "range": "600"
        },
        {
          "key": "W",
          "name": "Lightning Field / Hyper Charge",
          "description": "Hammer Stance: Passive: Restores Mana per strike. Active: Creates a field of lightning damaging nearby enemies for several seconds.Cannon Stance: Gains a burst of energy, increasing Attack Speed to maximum for several attacks.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JayceStaticField.png",
          "cooldown": "10",
          "cost": "40",
          "range": "285"
        },
        {
          "key": "E",
          "name": "Thundering Blow / Acceleration Gate",
          "description": "Hammer Stance: Deals magic damage to an enemy and knocks them back a short distance.Cannon Stance: Deploys an Acceleration Gate increasing the Move Speed of all allied champions who pass through it. If Shock Blast is fired through the gate the missile speed, range, and damage will increase.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JayceThunderingBlow.png",
          "cooldown": "20/18/16/14/12/10",
          "cost": "55",
          "range": "240"
        },
        {
          "key": "R",
          "name": "Mercury Cannon / Mercury Hammer",
          "description": "Hammer Stance: Transforms the Mercury Hammer into the Mercury Cannon gaining new abilities and increased range. The first attack in this form reduces the target's Armor and Magic Resist.Cannon Stance: Transforms the Mercury Cannon into the Mercury Hammer gaining new abilities and increasing Armor and Magic Resist. The first attack in this form deals additional magic damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JayceStanceHtG.png",
          "cooldown": "6",
          "cost": "0",
          "range": "600"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "jinx",
      "name": "Jinx",
      "fullName": "Jinx, the Loose Cannon",
      "icon": "💥",
      "role": "Xạ Thủ",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
      "gender": "Nữ",
      "species": "Ác Ma",
      "age": "18-21 tuổi",
      "weapon": "Gun",
      "weaponSummary": "Pow-Pow and Fishbones - Súng máy và rocket",
      "releaseDate": "2013",
      "lore": "An unhinged and impulsive criminal from the undercity, Jinx is haunted by the consequences of her past—but that doesn't stop her from bringing her own chaotic brand of pandemonium to Piltover and Zaun. She uses her arsenal of DIY weapons to devastating effect, unleashing torrents of colorful explosions and gunfire, inspiring the disenfranchised to rebellion and resistance with the mayhem she leaves in her wake.",
      "fullLore": "An unhinged and impulsive criminal from the undercity, Jinx is haunted by the consequences of her past—but that doesn't stop her from bringing her own chaotic brand of pandemonium to Piltover and Zaun. She uses her arsenal of DIY weapons to devastating effect, unleashing torrents of colorful explosions and gunfire, inspiring the disenfranchised to rebellion and resistance with the mayhem she leaves in her wake.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Get Excited!",
          "description": "Jinx receives massively increased Move Speed and Attack Speed whenever she helps kill or destroy an enemy champions epic jungle monster, or structure.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Jinx_Passive.png"
        },
        {
          "key": "Q",
          "name": "Switcheroo!",
          "description": "Jinx modifies her basic attacks by swapping between Pow-Pow, her minigun and Fishbones, her rocket launcher. Attacks with Pow-Pow grant Attack Speed, while attacks with Fishbones deal area of effect damage, gain increased range, but drain Mana and attack slower.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JinxQ.png",
          "cooldown": "0.9",
          "cost": "20",
          "range": "600"
        },
        {
          "key": "W",
          "name": "Zap!",
          "description": "Jinx uses Zapper, her shock pistol, to fire a blast that deals damage to the first enemy hit, slowing and revealing it.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JinxW.png",
          "cooldown": "8/7/6/5/4",
          "cost": "40/45/50/55/60",
          "range": "1450"
        },
        {
          "key": "E",
          "name": "Flame Chompers!",
          "description": "Jinx throws out a line of snare grenades that explode after 5 seconds, lighting enemies on fire. Flame Chompers will bite enemy champions who walk over them, rooting them in place.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JinxE.png",
          "cooldown": "24/20.5/17/13.5/10",
          "cost": "90",
          "range": "925"
        },
        {
          "key": "R",
          "name": "Super Mega Death Rocket!",
          "description": "Jinx fires a super rocket across the map that gains damage as it travels. The rocket will explode upon colliding with an enemy champion, dealing damage to it and surrounding enemies based on their missing Health.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JinxR.png",
          "cooldown": "70/60/50",
          "cost": "100",
          "range": "25000"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "orianna",
      "name": "Orianna",
      "fullName": "Orianna, the Lady of Clockwork",
      "icon": "⚙️",
      "role": "Pháp Sư",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "18-20 tuổi (robot)",
      "weapon": "Magic",
      "weaponSummary": "The Ball - Quả cầu cơ khí",
      "releaseDate": "2011",
      "lore": "Once a curious girl of flesh and blood, Orianna is now a technological marvel comprised entirely of clockwork. She became gravely ill after an accident in the lower districts of Zaun, and her failing body had to be replaced with exquisite artifice, piece by piece. Accompanied by an extraordinary brass sphere she built for companionship and protection, Orianna is now free to explore the wonders of Piltover, and beyond.",
      "fullLore": "Once a curious girl of flesh and blood, Orianna is now a technological marvel comprised entirely of clockwork. She became gravely ill after an accident in the lower districts of Zaun, and her failing body had to be replaced with exquisite artifice, piece by piece. Accompanied by an extraordinary brass sphere she built for companionship and protection, Orianna is now free to explore the wonders of Piltover, and beyond.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Clockwork Windup",
          "description": "Orianna's Attacks deal additional magic damage. This damage increases the more Orianna Attacks the same target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/OriannaPassive.png"
        },
        {
          "key": "Q",
          "name": "Command: Attack",
          "description": "Orianna commands her Ball to fire toward a target location, dealing magic damage to targets along the way (deals less damage to subsequent targets). Her Ball remains at the target location after.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/OrianaIzunaCommand.png",
          "cooldown": "6/5.25/4.5/3.75/3",
          "cost": "30/35/40/45/50",
          "range": "815"
        },
        {
          "key": "W",
          "name": "Command: Dissonance",
          "description": "Orianna commands her Ball to release a pulse of energy, dealing magic damage around it. This leaves a field behind that speeds up allies and slows enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/OrianaDissonanceCommand.png",
          "cooldown": "7",
          "cost": "60/65/70/75/80",
          "range": "225"
        },
        {
          "key": "E",
          "name": "Command: Protect",
          "description": "Orianna commands her Ball to attach to an allied champion, Shielding them and dealing magic damage to any enemies it passes through on the way. Additionally, the Ball grants additional Armor and Magic Resist to the champion it is attached to.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/OrianaRedactCommand.png",
          "cooldown": "9",
          "cost": "60",
          "range": "1095"
        },
        {
          "key": "R",
          "name": "Command: Shockwave",
          "description": "Orianna commands her Ball to unleash a shockwave, dealing magic damage and launching nearby enemies towards the Ball after a short delay.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/OrianaDetonateCommand.png",
          "cooldown": "110/95/80",
          "cost": "100",
          "range": "410"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "renata",
      "name": "Renata Glasc",
      "fullName": "Renata Glasc, the Chem-Baroness",
      "icon": "⚔️",
      "role": "Hỗ Trợ",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renata_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "45-50 tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Chemtech Gauntlets - Găng tay hóa học",
      "releaseDate": "2022",
      "lore": "Renata Glasc rose from the ashes of her childhood home with nothing but her name and her parents' alchemical research. In the decades since, she has become Zaun's wealthiest chem-baron, a business magnate who built her power by tying everyone's interests to her own. Work with her, and be rewarded beyond measure. Work against her, and live to regret it. But everyone comes to her side, eventually.",
      "fullLore": "Renata Glasc rose from the ashes of her childhood home with nothing but her name and her parents' alchemical research. In the decades since, she has become Zaun's wealthiest chem-baron, a business magnate who built her power by tying everyone's interests to her own. Work with her, and be rewarded beyond measure. Work against her, and live to regret it. But everyone comes to her side, eventually.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Leverage",
          "description": "Renata's Attacks deal bonus damage and mark enemies. Renata's allies can damage marked enemies to deal bonus damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Renata_P.png"
        },
        {
          "key": "Q",
          "name": "Handshake",
          "description": "Renata sends out a missile rooting the first enemy hit, and can recast the ability to throw the unit in a direction.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RenataQ.png",
          "cooldown": "16",
          "cost": "80",
          "range": "900"
        },
        {
          "key": "W",
          "name": "Bailout",
          "description": "Renata buffs an allied champion to fight harder, delaying their death and potentially saving them if they get a takedown.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RenataW.png",
          "cooldown": "28/27/26/25/24",
          "cost": "80",
          "range": "800"
        },
        {
          "key": "E",
          "name": "Loyalty Program",
          "description": "Renata sends out a pair of chemtech missiles, shielding allies and damaging and slowing enemies hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RenataE.png",
          "cooldown": "14/13/12/11/10",
          "cost": "70/80/90/100/110",
          "range": "800"
        },
        {
          "key": "R",
          "name": "Hostile Takeover",
          "description": "Renata sends out a wave of chemicals, causing any enemies hit to go Berserk.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RenataR.png",
          "cooldown": "150/130/110",
          "cost": "100",
          "range": "2000"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "seraphine",
      "name": "Seraphine",
      "fullName": "Seraphine, the Starry-Eyed Songstress",
      "icon": "🎵",
      "role": "Hỗ Trợ",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "17-19 tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Stage and Voice - Sân khấu và giọng hát",
      "releaseDate": "2020",
      "lore": "Born in Piltover to Zaunite parents, Seraphine can hear the souls of others—the world sings to her, and she sings back. Though these sounds overwhelmed her in her youth, she now draws on them for inspiration, turning the chaos into a symphony. She performs for the sister cities to remind their citizens that they're not alone, that they're stronger together, and that, in her eyes, their potential is limitless.",
      "fullLore": "Born in Piltover to Zaunite parents, Seraphine can hear the souls of others—the world sings to her, and she sings back. Though these sounds overwhelmed her in her youth, she now draws on them for inspiration, turning the chaos into a symphony. She performs for the sister cities to remind their citizens that they're not alone, that they're stronger together, and that, in her eyes, their potential is limitless.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Stage Presence",
          "description": "Every third basic spell will cast twice from Seraphine. Additionally, casting spells near allies grants her bonus magic damage and range on her next basic attack.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Seraphine_Passive.png"
        },
        {
          "key": "Q",
          "name": "High Note",
          "description": "Seraphine deals damage in an area.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SeraphineQ.png",
          "cooldown": "10/8.75/7.5/6.25/5",
          "cost": "65/70/75/80/85",
          "range": "900"
        },
        {
          "key": "W",
          "name": "Surround Sound",
          "description": "Seraphine Shields and Hastes nearby allies. If she is already Shielded she will Heal nearby allies as well.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SeraphineW.png",
          "cooldown": "28/25/22/19/16",
          "cost": "80/85/90/95/100",
          "range": "800"
        },
        {
          "key": "E",
          "name": "Beat Drop",
          "description": "Seraphine deals damage and impairs the movement of enemies in a line.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SeraphineE.png",
          "cooldown": "10",
          "cost": "60/65/70/75/80",
          "range": "1300"
        },
        {
          "key": "R",
          "name": "Encore",
          "description": "Seraphine deals damage and charms enemies hit, refreshing the range with every allied or enemy champion hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SeraphineR.png",
          "cooldown": "160/130/100",
          "cost": "100",
          "range": "25000"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "singed",
      "name": "Singed",
      "fullName": "Singed, the Mad Chemist",
      "icon": "☠️",
      "role": "Đỡ Đòn",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "50-55 tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Poison Trail - Vết độc",
      "releaseDate": "2010",
      "lore": "Singed is a brilliant alchemist of dubious morality, whose experiments would turn the stomach of even the most cutthroat criminal. Selling his skills to the highest bidder, he cares little for how his noxious concoctions are used, with the ensuing chaos an experiment in itself. His most infamous work is “shimmer”, which enabled the chembarons to turn Zaun into their personal playground—but fueled by madness, Singed is always working on something new, with each endeavor more depraved than the last...",
      "fullLore": "Singed is a brilliant alchemist of dubious morality, whose experiments would turn the stomach of even the most cutthroat criminal. Selling his skills to the highest bidder, he cares little for how his noxious concoctions are used, with the ensuing chaos an experiment in itself. His most infamous work is “shimmer”, which enabled the chembarons to turn Zaun into their personal playground—but fueled by madness, Singed is always working on something new, with each endeavor more depraved than the last...",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Noxious Slipstream",
          "description": "Singed drafts off nearby champions, gaining a burst of Move Speed when passing them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Singed_Passive.png"
        },
        {
          "key": "Q",
          "name": "Poison Trail",
          "description": "Leaves a trail of poison behind Singed, dealing damage to enemies caught in the path.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/PoisonTrail.png",
          "cooldown": "0",
          "cost": "13",
          "range": "20"
        },
        {
          "key": "W",
          "name": "Mega Adhesive",
          "description": "Throws a vial of mega adhesive on the ground, slowing and grounding enemies who walk on it.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MegaAdhesive.png",
          "cooldown": "17/16/15/14/13",
          "cost": "60/70/80/90/100",
          "range": "1000"
        },
        {
          "key": "E",
          "name": "Fling",
          "description": "Damages target enemy unit and flings them into the air behind Singed. If the target Singed flings lands in his Mega Adhesive, they are also rooted.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/Fling.png",
          "cooldown": "10/9.5/9/8.5/8",
          "cost": "60/70/80/90/100",
          "range": "125"
        },
        {
          "key": "R",
          "name": "Insanity Potion",
          "description": "Singed drinks a potent brew of chemicals, granting him increased combat stats, and making his Poison Trail apply Grievous Wounds.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/InsanityPotion.png",
          "cooldown": "120/110/100",
          "cost": "100",
          "range": "20"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "tristana",
      "name": "Tristana",
      "fullName": "Tristana, the Yordle Gunner",
      "icon": "💥",
      "role": "Xạ Thủ",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg",
      "gender": "Nữ",
      "species": "Yordle",
      "age": "100+ tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Boomer - Pháo Boomer",
      "releaseDate": "2009",
      "lore": "While many other yordles channel their energy into discovery, invention, or just plain mischief-making, Tristana was always inspired by the adventures of great warriors. She had heard much about Runeterra, its factions, and its wars, and believed her kind could become worthy of legend too. Setting foot in the world for the first time, she took up her trusty cannon Boomer, and now leaps into battle with steadfast courage and optimism.",
      "fullLore": "While many other yordles channel their energy into discovery, invention, or just plain mischief-making, Tristana was always inspired by the adventures of great warriors. She had heard much about Runeterra, its factions, and its wars, and believed her kind could become worthy of legend too. Setting foot in the world for the first time, she took up her trusty cannon Boomer, and now leaps into battle with steadfast courage and optimism.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Draw a Bead",
          "description": "Increases Tristana's Attack Range as she levels.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Tristana_Passive.png"
        },
        {
          "key": "Q",
          "name": "Rapid Fire",
          "description": "Tristana fires her weapon rapidly, increasing her Attack Speed for a short time.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TristanaQ.png",
          "cooldown": "20/19/18/17/16",
          "cost": "0",
          "range": "20"
        },
        {
          "key": "W",
          "name": "Rocket Jump",
          "description": "Tristana fires at the ground to propel her to a distant location, dealing damage and slowing surrounding units for a brief period where she lands.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TristanaW.png",
          "cooldown": "22/20/18/16/14",
          "cost": "60",
          "range": "900"
        },
        {
          "key": "E",
          "name": "Explosive Charge",
          "description": "When Tristana kills a unit, her cannonballs burst into shrapnel, dealing damage to surrounding enemies. Can be activated to place a bomb on a target enemy that explodes after a short duration dealing damage to surrounding units.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TristanaE.png",
          "cooldown": "16/15.5/15/14.5/14",
          "cost": "50/55/60/65/70",
          "range": "550"
        },
        {
          "key": "R",
          "name": "Buster Shot",
          "description": "Tristana loads a massive cannonball into her weapon and fires it at an enemy unit. This deals Magic Damage and knocks the target back. If the target is carrying the Explosive Charge bomb, the bomb detonation radius is doubled.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TristanaR.png",
          "cooldown": "120/110/100",
          "cost": "100",
          "range": "550"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "twitch",
      "name": "Twitch",
      "fullName": "Twitch, the Plague Rat",
      "icon": "🐀",
      "role": "Xạ Thủ",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "Không rõ",
      "weapon": "Bow",
      "weaponSummary": "Crossbow - Nỏ",
      "releaseDate": "2010",
      "lore": "A Zaunite plague rat by birth, but a connoisseur of filth by passion, Twitch is not afraid to get his paws dirty. Aiming a chem-powered crossbow at the gilded heart of Piltover, he has vowed to show those in the city above just how filthy they really are. Always a sneaky sneak, when he's not rooting around in the Sump, he's digging deep into other people's garbage for discarded treasures… and perhaps a moldy sandwich.",
      "fullLore": "A Zaunite plague rat by birth, but a connoisseur of filth by passion, Twitch is not afraid to get his paws dirty. Aiming a chem-powered crossbow at the gilded heart of Piltover, he has vowed to show those in the city above just how filthy they really are. Always a sneaky sneak, when he's not rooting around in the Sump, he's digging deep into other people's garbage for discarded treasures… and perhaps a moldy sandwich.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Deadly Venom",
          "description": "Twitch's basic attacks infect the target, dealing true damage each second.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Twitch_Passive.png"
        },
        {
          "key": "Q",
          "name": "Ambush",
          "description": "Twitch becomes Camouflaged for a short duration and gains Move Speed. When leaving Camouflage, Twitch gains Attack Speed for a short duration.When an enemy champion with Deadly Venom dies, Ambush's cooldown is reset.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TwitchHideInShadows.png",
          "cooldown": "16",
          "cost": "40",
          "range": "20"
        },
        {
          "key": "W",
          "name": "Venom Cask",
          "description": "Twitch hurls a cask of venom that explodes in an area, slowing targets and applying deadly venom to the target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TwitchVenomCask.png",
          "cooldown": "13/12/11/10/9",
          "cost": "70",
          "range": "950"
        },
        {
          "key": "E",
          "name": "Contaminate",
          "description": "Twitch wreaks further havoc on poisoned enemies with a blast of his vile diseases.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TwitchExpunge.png",
          "cooldown": "12/11/10/9/8",
          "cost": "50/60/70/80/90",
          "range": "1200"
        },
        {
          "key": "R",
          "name": "Spray and Pray",
          "description": "Twitch unleashes the full power of his crossbow, shooting bolts over a great distance that pierce all enemies caught in their path.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TwitchFullAutomatic.png",
          "cooldown": "90",
          "cost": "100",
          "range": "1200"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "warwick",
      "name": "Warwick",
      "fullName": "Warwick, the Uncaged Wrath of Zaun",
      "icon": "🐺",
      "role": "Đấu Sĩ",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "40-45 tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Claws and Fangs - Móng vuốt và răng nanh",
      "releaseDate": "2009",
      "lore": "Warwick is a monster who hunts the gray alleys of Zaun. Transformed by agonizing experiments, his body is fused with an intricate system of chambers and pumps, machinery filling his veins with alchemical rage. He bursts from the shadows to prey upon those criminals who terrorize the city's depths. Warwick is drawn to blood, driven mad by its scent… and none who spill it can escape him.",
      "fullLore": "Warwick is a monster who hunts the gray alleys of Zaun. Transformed by agonizing experiments, his body is fused with an intricate system of chambers and pumps, machinery filling his veins with alchemical rage. He bursts from the shadows to prey upon those criminals who terrorize the city's depths. Warwick is drawn to blood, driven mad by its scent… and none who spill it can escape him.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Eternal Hunger",
          "description": "Warwick's basic attacks deal bonus magic damage. If Warwick is below 50% health, he heals the same amount. If Warwick is below 25% health, this healing triples.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/WarwickP.png"
        },
        {
          "key": "Q",
          "name": "Jaws of the Beast",
          "description": "Warwick lunges forward and bites his target, dealing damage based on their maximum health and healing for damage dealt.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/WarwickQ.png",
          "cooldown": "6",
          "cost": "50/60/70/80/90",
          "range": "350"
        },
        {
          "key": "W",
          "name": "Blood Hunt",
          "description": "Warwick senses enemies below 50% health, gaining Move Speed toward and attack speed against them. When they fall below 20% health, he frenzies and these bonuses triple.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/WarwickW.png",
          "cooldown": "100/85/70/55/40",
          "cost": "70",
          "range": "4000"
        },
        {
          "key": "E",
          "name": "Primal Howl",
          "description": "Warwick gains damage reduction for 2.5 seconds. At the end, or if re-activated, he howls, causing nearby enemies to flee for 1 second.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/WarwickE.png",
          "cooldown": "15/14/13/12/11",
          "cost": "40",
          "range": "375"
        },
        {
          "key": "R",
          "name": "Infinite Duress",
          "description": "Warwick leaps in a direction (scaling with his bonus Move Speed), suppressing the first champion he collides with for 1.5 seconds.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/WarwickR.png",
          "cooldown": "110/90/70",
          "cost": "100",
          "range": "25000"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "zac",
      "name": "Zac",
      "fullName": "Zac, the Secret Weapon",
      "icon": "💚",
      "role": "Đỡ Đòn",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "10+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Elastic Body - Cơ thể đàn hồi",
      "releaseDate": "Không rõ",
      "lore": "Zac is the product of a toxic spill that ran through a chemtech seam and pooled in an isolated cavern deep in Zaun's Sump. Despite such humble origins, Zac has grown from primordial ooze into a thinking being who dwells in the city's pipes, occasionally emerging to help those who cannot help themselves or to rebuild the broken infrastructure of Zaun.",
      "fullLore": "Zac is the product of a toxic spill that ran through a chemtech seam and pooled in an isolated cavern deep in Zaun's Sump. Despite such humble origins, Zac has grown from primordial ooze into a thinking being who dwells in the city's pipes, occasionally emerging to help those who cannot help themselves or to rebuild the broken infrastructure of Zaun.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Cell Division",
          "description": "Each time Zac hits an enemy with an ability, he sheds a chunk of himself that can be reabsorbed to restore Health. Upon taking fatal damage, Zac splits into 4 bloblets that attempt to recombine. If any bloblets remain, he will revive with an amount of Health depending on the Health of the surviving bloblets. Each bloblet has a percentage of Zac's maximum Health, Armor and Magic Resistance. This ability has a 5 minute cooldown.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/ZacPassive.png"
        },
        {
          "key": "Q",
          "name": "Stretching Strikes",
          "description": "Zac stretches an arm, grabbing an enemy. Attacking a different enemy will cause him to throw both targets towards each other.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZacQ.png",
          "cooldown": "14/12.5/11/9.5/8",
          "cost": "0",
          "range": "800"
        },
        {
          "key": "W",
          "name": "Unstable Matter",
          "description": "Zac explodes outward towards nearby enemies, dealing a percentage of their maximum health as magic damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZacW.png",
          "cooldown": "5",
          "cost": "0",
          "range": "350"
        },
        {
          "key": "E",
          "name": "Elastic Slingshot",
          "description": "Zac attaches his arms to the ground and stretches back, launching himself forward.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZacE.png",
          "cooldown": "24/21/18/15/12",
          "cost": "0",
          "range": "300"
        },
        {
          "key": "R",
          "name": "Let's Bounce!",
          "description": "Zac bounces four times, knocking up enemies hit and slowing them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZacR.png",
          "cooldown": "130/115/100",
          "cost": "0",
          "range": "300"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "ziggs",
      "name": "Ziggs",
      "fullName": "Ziggs, the Hexplosives Expert",
      "icon": "💣",
      "role": "Pháp Sư",
      "region": "piltover",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg",
      "gender": "Nam",
      "species": "Yordle",
      "age": "100+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Bombs - Bom",
      "releaseDate": "2012",
      "lore": "With a love of big bombs and short fuses, the yordle Ziggs is an explosive force of nature. As an inventor's assistant in Piltover, he was bored by his predictable life and befriended a mad, blue-haired bomber named Jinx. After a wild night on the town, Ziggs took her advice and moved to Zaun, where he now explores his fascinations more freely, terrorizing the chem-barons and regular citizens alike in his never ending quest to blow stuff up.",
      "fullLore": "With a love of big bombs and short fuses, the yordle Ziggs is an explosive force of nature. As an inventor's assistant in Piltover, he was bored by his predictable life and befriended a mad, blue-haired bomber named Jinx. After a wild night on the town, Ziggs took her advice and moved to Zaun, where he now explores his fascinations more freely, terrorizing the chem-barons and regular citizens alike in his never ending quest to blow stuff up.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Short Fuse",
          "description": "Periodically, Ziggs' next basic attack deals bonus magic damage. This cooldown is reduced whenever Ziggs uses an ability.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/ZiggsPassiveReady.png"
        },
        {
          "key": "Q",
          "name": "Bouncing Bomb",
          "description": "Ziggs throws a bouncing bomb that deals magic damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZiggsQ.png",
          "cooldown": "6/5.5/5/4.5/4",
          "cost": "50/55/60/65/70",
          "range": "850"
        },
        {
          "key": "W",
          "name": "Satchel Charge",
          "description": "Ziggs flings an explosive charge that detonates after 4 seconds, or when this ability is activated again. The explosion deals magic damage to enemies, knocking them away. Ziggs is also knocked away, but takes no damage. Ziggs can use the Satchel to hexplode vulnerable enemy turrets.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZiggsW.png",
          "cooldown": "24/21/18/15/12",
          "cost": "80",
          "range": "1000"
        },
        {
          "key": "E",
          "name": "Hexplosive Minefield",
          "description": "Ziggs scatters proximity mines that detonate on enemy contact, dealing magic damage and slowing. Successive mine detonations on the same target deal reduced damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZiggsE.png",
          "cooldown": "16",
          "cost": "70/80/90/100/110",
          "range": "900"
        },
        {
          "key": "R",
          "name": "Mega Inferno Bomb",
          "description": "Ziggs deploys his ultimate creation, the Mega Inferno Bomb, hurling it an enormous distance. Enemies in the primary blast zone take more damage than those farther away.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZiggsR.png",
          "cooldown": "120/95/70",
          "cost": "100",
          "range": "5000"
        }
      ],
      "specialFeatures": []
    }
  ],
  "newChampions": []
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = piltoverData;
}