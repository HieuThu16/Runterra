// ❄️ Freljord Region Data - Version 3.2 (Enhanced with Skills)
const freljordRegion = {
  "id": "freljord",
  "name": "❄️ Freljord",
  "description": "Vùng đất ❄️ Freljord",
  "lore": "Câu chuyện về ❄️ Freljord",
  "existingChampions": [
    {
      "id": "ashe",
      "name": "Ashe",
      "fullName": "Ashe, the Frost Archer",
      "icon": "❄️",
      "role": "Xạ Thủ",
      "region": "freljord",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "25-30 tuổi",
      "weapon": "Bow",
      "weaponSummary": "Avarosan Bow - Cung băng Avarosan",
      "releaseDate": "2009",
      "lore": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people's belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.",
      "fullLore": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people's belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Frost Shot",
          "description": "Ashe's attacks slow their target, causing her to deal increased damage to these targets.Ashe's critical strikes deal no bonus damage but apply an empowered slow to the target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Ashe_P.png"
        },
        {
          "key": "Q",
          "name": "Ranger's Focus",
          "description": "Ashe builds up Focus by attacking. At maximum Focus, Ashe can cast Ranger's Focus to consume all stacks of Focus, temporarily increasing her Attack Speed and transforming her basic attack into a powerful flurry attack for the duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AsheQ.png",
          "cooldown": "0",
          "cost": "30",
          "range": "400"
        },
        {
          "key": "W",
          "name": "Volley",
          "description": "Ashe fires arrows in a cone for increased damage. Also applies Frost Shot.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/Volley.png",
          "cooldown": "18/14.5/11/7.5/4",
          "cost": "75/70/65/60/55",
          "range": "1200"
        },
        {
          "key": "E",
          "name": "Hawkshot",
          "description": "Ashe sends her Hawk Spirit on a scouting mission anywhere on the map.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AsheSpiritOfTheHawk.png",
          "cooldown": "5",
          "cost": "0",
          "range": "25000"
        },
        {
          "key": "R",
          "name": "Enchanted Crystal Arrow",
          "description": "Ashe fires a missile of ice in a straight line. If the arrow collides with an enemy Champion, it deals damage and stuns the Champion, stunning for longer the farther arrow has traveled. In addition, surrounding enemy units take damage and are slowed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/EnchantedCrystalArrow.png",
          "cooldown": "100/80/60",
          "cost": "100",
          "range": "25000"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "brand",
      "name": "Brand",
      "fullName": "Brand, the Burning Vengeance",
      "icon": "🔥",
      "role": "Pháp Sư",
      "region": "freljord",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "30-35 tuổi (khi còn là Kegan)",
      "weapon": "Magic",
      "weaponSummary": "Fire Magic - Ma thuật lửa",
      "releaseDate": "2011",
      "lore": "Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the man was no more. His soul burned away, his body a vessel of living flame, Brand now roams Valoran in search of other Runes, swearing revenge for wrongs he could never possibly have suffered in a dozen mortal lifetimes.",
      "fullLore": "Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the man was no more. His soul burned away, his body a vessel of living flame, Brand now roams Valoran in search of other Runes, swearing revenge for wrongs he could never possibly have suffered in a dozen mortal lifetimes.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Blaze",
          "description": "Brand's spells light his targets ablaze, dealing damage over 4 seconds, stacking up to 3 times. If Brand kills an enemy while it is ablaze he regains mana. When Blaze reaches max stacks on a Champion or large monster, it becomes unstable. It detonates in 2 seconds, applying spell effects and dealing massive damage in an area around the victim.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/BrandP.png"
        },
        {
          "key": "Q",
          "name": "Sear",
          "description": "Brand launches a ball of fire forward that deals magic damage. If the target is ablaze, Sear will stun the target for 1.5 seconds.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/BrandQ.png",
          "cooldown": "8/7.5/7/6.5/6",
          "cost": "50",
          "range": "1050"
        },
        {
          "key": "W",
          "name": "Pillar of Flame",
          "description": "After a short delay, Brand creates a Pillar of Flame at a target area, dealing magic damage to enemy units within the area. Units that are ablaze take an additional 25% damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/BrandW.png",
          "cooldown": "10/9.5/9/8.5/8",
          "cost": "60/70/80/90/100",
          "range": "900"
        },
        {
          "key": "E",
          "name": "Conflagration",
          "description": "Brand conjures a powerful blast at his target that spreads to nearby enemies, dealing magic damage. If the target is ablaze, Conflagration's spread is doubled.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/BrandE.png",
          "cooldown": "12/11/10/9/8",
          "cost": "70/75/80/85/90",
          "range": "625"
        },
        {
          "key": "R",
          "name": "Pyroclasm",
          "description": "Brand unleashes a devastating torrent of fire that bounces up to 5 times off of Brand and nearby enemies, dealing magic damage to enemies each time bounce. Bounces prioritize stacking Blaze to max on Champions. If a target is ablaze, Pyroclasm will briefly slow them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/BrandR.png",
          "cooldown": "105/90/75",
          "cost": "100",
          "range": "750"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "diana",
      "name": "Diana",
      "fullName": "Diana, Scorn of the Moon",
      "icon": "🌙",
      "role": "Đấu Sĩ",
      "region": "freljord",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg",
      "gender": "Nữ",
      "species": "Thiên Thể",
      "age": "25-30 tuổi",
      "weapon": "Sword",
      "weaponSummary": "Crescent Blade - Lưỡi liềm mặt trăng",
      "releaseDate": "2012",
      "lore": "Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon's power. Imbued with the essence of an Aspect from beyond Targon's towering summit, Diana is no longer wholly human, and struggles to understand her power and purpose in this world.",
      "fullLore": "Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon's power. Imbued with the essence of an Aspect from beyond Targon's towering summit, Diana is no longer wholly human, and struggles to understand her power and purpose in this world.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Moonsilver Blade",
          "description": "Every third strike cleaves nearby enemies for an additional magic damage. After casting a spell, Diana gains Attack Speed for her next 3 attacks.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Diana_Passive_LunarBlade.png"
        },
        {
          "key": "Q",
          "name": "Crescent Strike",
          "description": "Unleashes a bolt of lunar energy in an arc dealing magic damage.Afflicts enemies struck with Moonlight, revealing them if they are not stealthed for 3 seconds.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DianaQ.png",
          "cooldown": "8/7.5/7/6.5/6",
          "cost": "50",
          "range": "900"
        },
        {
          "key": "W",
          "name": "Pale Cascade",
          "description": "Diana creates three orbiting spheres that detonate on contact with enemies to deal damage in an area. She also gains a temporary shield that absorbs damage. If her third sphere detonates, the shield gains additional strength.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DianaOrbs.png",
          "cooldown": "15/13.5/12/10.5/9",
          "cost": "40/45/50/55/60",
          "range": "800"
        },
        {
          "key": "E",
          "name": "Lunar Rush",
          "description": "Becomes the living embodiment of the vengeful moon, dashing to an enemy and dealing magic damage.Lunar Rush has no cooldown when used to dash to an enemy afflicted with Moonlight. All other enemies will have the Moonlight debuff removed regardless of whether they were the target of Lunar Rush.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DianaTeleport.png",
          "cooldown": "22/20/18/16/14",
          "cost": "40/45/50/55/60",
          "range": "825"
        },
        {
          "key": "R",
          "name": "Moonfall",
          "description": "Diana reveals and draws in all nearby enemies and slows them.If Diana pulls in one or more enemy champions, the moonlight crashes down onto her after a short delay, dealing magic damage in an area around her, increased for each target beyond the first pulled.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DianaR.png",
          "cooldown": "100/90/80",
          "cost": "100",
          "range": "475"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "lissandra",
      "name": "Lissandra",
      "fullName": "Lissandra, the Ice Witch",
      "icon": "❄️",
      "role": "Pháp Sư",
      "region": "freljord",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "8000+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "True Ice - Băng thật",
      "releaseDate": "2013",
      "lore": "Lissandra's magic twists the pure power of ice into something dark and terrible. With the force of her black ice, she does more than freeze—she impales and crushes those who oppose her. To the terrified denizens of the north, she is known only as ''The Ice Witch.'' The truth is much more sinister: Lissandra is a corruptor of nature who plots to unleash an ice age on the world.",
      "fullLore": "Lissandra's magic twists the pure power of ice into something dark and terrible. With the force of her black ice, she does more than freeze—she impales and crushes those who oppose her. To the terrified denizens of the north, she is known only as ''The Ice Witch.'' The truth is much more sinister: Lissandra is a corruptor of nature who plots to unleash an ice age on the world.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Iceborn Subjugation",
          "description": "When an enemy champion dies near Lissandra they become a Frozen Thrall. Frozen Thralls slow nearby enemies and then, after a delay, shatter from the intense cold, dealing magic damage to nearby targets.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Lissandra_Passive.png"
        },
        {
          "key": "Q",
          "name": "Ice Shard",
          "description": "Throws a spear of ice that shatters when it hits an enemy, dealing magic damage and slowing Move Speed. Shards pass through the target, dealing the same damage to other enemies hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LissandraQ.png",
          "cooldown": "8/7/6/5/4",
          "cost": "55/60/65/70/75",
          "range": "725"
        },
        {
          "key": "W",
          "name": "Ring of Frost",
          "description": "Freezes nearby enemies in ice, dealing magic damage and rooting them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LissandraW.png",
          "cooldown": "12/11/10/9/8",
          "cost": "40",
          "range": "450"
        },
        {
          "key": "E",
          "name": "Glacial Path",
          "description": "Lissandra creates an ice claw that deals magic damage. Reactivating this ability transports Lissandra to the claw's current location.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LissandraE.png",
          "cooldown": "24/21/18/15/12",
          "cost": "80/85/90/95/100",
          "range": "1050"
        },
        {
          "key": "R",
          "name": "Frozen Tomb",
          "description": "If cast on an enemy champion, the target is frozen solid, stunning it. If cast on Lissandra, she encases herself in dark ice, healing herself while becoming untargetable and invulnerable. Dark ice then emanates from the target dealing magic damage to enemies and slowing Move Speed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LissandraR.png",
          "cooldown": "120/100/80",
          "cost": "100",
          "range": "550"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "nunu",
      "name": "Nunu & Willump",
      "fullName": "Nunu & Willump, the Boy and His Yeti",
      "icon": "❄️",
      "role": "Đỡ Đòn",
      "region": "freljord",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "12-13 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Snowball and Yeti Strength - Cầu tuyết và sức mạnh Yeti",
      "releaseDate": "2009",
      "lore": "Once upon a time, there was a boy who wanted to prove he was a hero by slaying a fearsome monster—only to discover that the beast, a lonely and magical yeti, merely needed a friend. Bound together by ancient power and a shared love of snowballs, Nunu and Willump now ramble wildly across the Freljord, breathing life into imagined adventures. They hope that somewhere out there, they will find Nunu's mother. If they can save her, maybe they will be heroes after all…",
      "fullLore": "Once upon a time, there was a boy who wanted to prove he was a hero by slaying a fearsome monster—only to discover that the beast, a lonely and magical yeti, merely needed a friend. Bound together by ancient power and a shared love of snowballs, Nunu and Willump now ramble wildly across the Freljord, breathing life into imagined adventures. They hope that somewhere out there, they will find Nunu's mother. If they can save her, maybe they will be heroes after all…",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Call of the Freljord",
          "description": "Nunu increases the attack speed and Move Speed of Willump and a nearby ally, and causes Willump's basic attacks to damage enemies around the target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/NunuPassive.png"
        },
        {
          "key": "Q",
          "name": "Consume",
          "description": "Willump takes a bite out of a minion, monster, or enemy champion, dealing damage and healing himself.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NunuQ.png",
          "cooldown": "12/11/10/9/8",
          "cost": "60",
          "range": "125"
        },
        {
          "key": "W",
          "name": "Biggest Snowball Ever!",
          "description": "Willump creates a snowball that grows in size and speed as he rolls it.  The snowball damages and knocks up enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NunuW.png",
          "cooldown": "14",
          "cost": "50/55/60/65/70",
          "range": "7500"
        },
        {
          "key": "E",
          "name": "Snowball Barrage",
          "description": "Nunu throws multiple snowballs that damage enemies.  When he's finished, Willump roots any champions or large monsters that were hit by a snowball.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NunuE.png",
          "cooldown": "14/13/12/11/10",
          "cost": "50/55/60/65/70",
          "range": "625"
        },
        {
          "key": "R",
          "name": "Absolute Zero",
          "description": "Nunu & Willump create a powerful blizzard in an area that slows enemies and deals massive damage at the end.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NunuR.png",
          "cooldown": "110/100/90",
          "cost": "100",
          "range": "650"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "olaf",
      "name": "Olaf",
      "fullName": "Olaf, the Berserker",
      "icon": "🪓",
      "role": "Đấu Sĩ",
      "region": "freljord",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "30-35 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Twin Axes - Đôi rìu",
      "releaseDate": "2010",
      "lore": "An unstoppable force of destruction, the axe-wielding Olaf wants nothing but to die in glorious combat. Hailing from the brutal Freljordian peninsula of Lokfar, he once received a prophecy foretelling his peaceful passing—a coward's fate, and a great insult among his people. Seeking death, and fueled by rage, he rampaged across the land, slaughtering scores of great warriors and legendary beasts in search of any opponent who could stop him. Now a brutal enforcer for the Winter's Claw, he seeks his end in the great wars to come.",
      "fullLore": "An unstoppable force of destruction, the axe-wielding Olaf wants nothing but to die in glorious combat. Hailing from the brutal Freljordian peninsula of Lokfar, he once received a prophecy foretelling his peaceful passing—a coward's fate, and a great insult among his people. Seeking death, and fueled by rage, he rampaged across the land, slaughtering scores of great warriors and legendary beasts in search of any opponent who could stop him. Now a brutal enforcer for the Winter's Claw, he seeks his end in the great wars to come.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Berserker Rage",
          "description": "Olaf gains Attack Speed and Life Steal based on his missing Health.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Olaf_Passive.png"
        },
        {
          "key": "Q",
          "name": "Undertow",
          "description": "Olaf throws an axe into the ground at a target location, dealing damage to enemies it passes through and reducing their Armor and Move Speed. If Olaf picks up the axe, the ability's cooldown is reset.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/OlafAxeThrowCast.png",
          "cooldown": "9",
          "cost": "50/55/60/65/70",
          "range": "1000"
        },
        {
          "key": "W",
          "name": "Tough It Out",
          "description": "Olaf's Attack Speed is increased, he reduces incoming damage, and he gains a Shield.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/OlafFrenziedStrikes.png",
          "cooldown": "16/15/14/13/12",
          "cost": "30",
          "range": "700"
        },
        {
          "key": "E",
          "name": "Reckless Swing",
          "description": "Olaf attacks with such force that it deals true damage to his target and himself, refunding the Health cost if he destroys the target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/OlafRecklessStrike.png",
          "cooldown": "11/10/9/8/7",
          "cost": "0",
          "range": "325"
        },
        {
          "key": "R",
          "name": "Ragnarok",
          "description": "Olaf passively gains increased armor and magic resist. He can activate this ability to become immune to disables for as long as he keeps attacking.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/OlafRagnarok.png",
          "cooldown": "100/90/80",
          "cost": "0",
          "range": "400"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "trundle",
      "name": "Trundle",
      "fullName": "Trundle, the Troll King",
      "icon": "🧊",
      "role": "Đấu Sĩ",
      "region": "freljord",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "30-35 tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Boneshiver - Gậy xương",
      "releaseDate": "2010",
      "lore": "Trundle is a hulking and devious troll with a particularly vicious streak, and there is nothing he cannot bludgeon into submission—not even the Freljord itself. Fiercely territorial, he chases down anyone foolish enough to enter his domain. Then, his massive club of True Ice at the ready, he chills his enemies to the bone and impales them with jagged, frozen pillars, laughing as they bleed out onto the tundra.",
      "fullLore": "Trundle is a hulking and devious troll with a particularly vicious streak, and there is nothing he cannot bludgeon into submission—not even the Freljord itself. Fiercely territorial, he chases down anyone foolish enough to enter his domain. Then, his massive club of True Ice at the ready, he chills his enemies to the bone and impales them with jagged, frozen pillars, laughing as they bleed out onto the tundra.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "King's Tribute",
          "description": "When an enemy unit dies near Trundle, he heals for a percent of its maximum Health.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Trundle_Passive.png"
        },
        {
          "key": "Q",
          "name": "Chomp",
          "description": "Trundle bites his opponent, dealing damage, briefly slowing and sapping some of their Attack Damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TrundleTrollSmash.png",
          "cooldown": "3.5",
          "cost": "20",
          "range": "300"
        },
        {
          "key": "W",
          "name": "Frozen Domain",
          "description": "Trundle turns target location into his domain, gaining Attack Speed, Move Speed, and increased healing from all sources while on it.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/trundledesecrate.png",
          "cooldown": "16/15/14/13/12",
          "cost": "40",
          "range": "750"
        },
        {
          "key": "E",
          "name": "Pillar of Ice",
          "description": "Trundle creates an ice pillar at target location, becoming impassable terrain and slowing all nearby enemy units.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TrundleCircle.png",
          "cooldown": "24/22/20/18/16",
          "cost": "75",
          "range": "1000"
        },
        {
          "key": "R",
          "name": "Subjugate",
          "description": "Trundle immediately steals a percent of his target's Health, Armor and Magic Resistance. Over the next 4 seconds the amount of Health, Armor, and Magic Resistance stolen is doubled.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TrundlePain.png",
          "cooldown": "120/100/80",
          "cost": "100",
          "range": "650"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "volibear",
      "name": "Volibear",
      "fullName": "Volibear, the Relentless Storm",
      "icon": "🐻",
      "role": "Đấu Sĩ",
      "region": "freljord",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "10000+ tuổi",
      "weapon": "Claws",
      "weaponSummary": "Lightning and Claws - Sét và móng vuốt",
      "releaseDate": "2011",
      "lore": "To those who still revere him, the Volibear is the storm made manifest. Destructive, wild, and stubbornly resolute, he existed before mortals walked the Freljord's tundra, and is fiercely protective of the lands that he and his demi-god kin created. Cultivating a deep hatred of civilization and the weakness it brought with it, he now fights to return to the old ways—when the land was untamed, and blood spilled freely—and eagerly battles all who oppose him, with tooth, claw, and thundering domination.",
      "fullLore": "To those who still revere him, the Volibear is the storm made manifest. Destructive, wild, and stubbornly resolute, he existed before mortals walked the Freljord's tundra, and is fiercely protective of the lands that he and his demi-god kin created. Cultivating a deep hatred of civilization and the weakness it brought with it, he now fights to return to the old ways—when the land was untamed, and blood spilled freely—and eagerly battles all who oppose him, with tooth, claw, and thundering domination.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "The Relentless Storm",
          "description": "Volibear's Attacks and abilities grant Attack Speed, and eventually cause his Attacks to deal bonus magic damage to nearby enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Volibear_Icon_P.png"
        },
        {
          "key": "Q",
          "name": "Thundering Smash",
          "description": "Volibear gains speed towards enemies, Stunning and damaging the first one he Attacks.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VolibearQ.png",
          "cooldown": "14/13/12/11/10",
          "cost": "50",
          "range": "300"
        },
        {
          "key": "W",
          "name": "Frenzied Maul",
          "description": "Volibear damages an enemy, applying on-hit effects and marking them.  Casting this ability again on the same target deals bonus damage and Heals Volibear.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VolibearW.png",
          "cooldown": "5",
          "cost": "30/35/40/45/50",
          "range": "325"
        },
        {
          "key": "E",
          "name": "Sky Splitter",
          "description": "Volibear summons a lightning bolt at a location, dealing damage and Slowing enemies while granting Volibear a Shield if he's inside the blast radius.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VolibearE.png",
          "cooldown": "13",
          "cost": "60",
          "range": "1200"
        },
        {
          "key": "R",
          "name": "Stormbringer",
          "description": "Volibear leaps to a target location, Slowing and damaging enemies beneath him while gaining bonus Health.  Enemy towers near his landing location become temporarily disabled.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VolibearR.png",
          "cooldown": "160/140/120",
          "cost": "100",
          "range": "550"
        }
      ],
      "specialFeatures": []
    }
  ],
  "newChampions": []
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = freljordRegion;
}