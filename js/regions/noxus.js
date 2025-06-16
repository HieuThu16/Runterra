// 🗡️ Noxus Region Data - Version 3.2 (Enhanced with Skills)
const noxusData = {
  "id": "noxus",
  "name": "🗡️ Noxus",
  "description": "Vùng đất 🗡️ Noxus",
  "lore": "Câu chuyện về 🗡️ Noxus",
  "existingChampions": [
    {
      "id": "alistar",
      "name": "Alistar",
      "fullName": "Alistar, the Minotaur",
      "icon": "🐂",
      "role": "Đỡ Đòn",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "1000+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Horns and Hooves - Sừng và móng guốc",
      "releaseDate": "2010",
      "lore": "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.",
      "fullLore": "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Triumphant Roar",
          "description": "Alistar charges his roar by stunning or displacing enemy champions or when nearby enemies die. When fully charged he heals himself all nearby allied champions.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Alistar_E.png"
        },
        {
          "key": "Q",
          "name": "Pulverize",
          "description": "Alistar smashes the ground, dealing damage to nearby enemies and tossing them into the air.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/Pulverize.png",
          "cooldown": "14/13/12/11/10",
          "cost": "50/55/60/65/70",
          "range": "365"
        },
        {
          "key": "W",
          "name": "Headbutt",
          "description": "Alistar rams a target with his head, dealing damage and knocking the target back.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/Headbutt.png",
          "cooldown": "14/13/12/11/10",
          "cost": "50/55/60/65/70",
          "range": "650"
        },
        {
          "key": "E",
          "name": "Trample",
          "description": "Alistar tramples nearby enemy units, ignoring unit collision and gaining stacks if he damages an enemy champion. At full stacks Alistar's next basic attack against an enemy champion deals additional magic damage and stuns them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AlistarE.png",
          "cooldown": "12/11.5/11/10.5/10",
          "cost": "50/55/60/65/70",
          "range": "350"
        },
        {
          "key": "R",
          "name": "Unbreakable Will",
          "description": "Alistar lets out a wild roar, removing all crowd control effects on himself, and reducing incoming physical and magical damage for the duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/FerociousHowl.png",
          "cooldown": "120/100/80",
          "cost": "100",
          "range": "1"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "ambessa",
      "name": "Ambessa",
      "fullName": "Ambessa, Matriarch of War",
      "icon": "⚔️",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ambessa_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "Không rõ",
      "weapon": "Sword",
      "weaponSummary": "Sword",
      "releaseDate": "Không rõ",
      "lore": "All who know the name Medarda respect and fear the family's leader, Ambessa. As a Noxian general, she embodies a deadly combination of ruthless strength and fearless resolve in battle. Her role as matriarch is no different, requiring great cunning to empower the Medardas while leaving no room for failure or compassion. Embracing the merciless ways of the Wolf, Ambessa will do whatever it takes to protect her family's legacy, even at the cost of her own children's love.",
      "fullLore": "All who know the name Medarda respect and fear the family's leader, Ambessa. As a Noxian general, she embodies a deadly combination of ruthless strength and fearless resolve in battle. Her role as matriarch is no different, requiring great cunning to empower the Medardas while leaving no room for failure or compassion. Embracing the merciless ways of the Wolf, Ambessa will do whatever it takes to protect her family's legacy, even at the cost of her own children's love.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "name": "Cunning Sweep / Sundering Slam",
          "description": "Ambessa sweeps her twin drakehounds in a semicircle in front of her, dealing bonus damage to enemies hit by the blades. Striking an enemy will transform the next cast of this ability for a short period of time, causing her to slam her twin drakehounds down in a line in front of her, dealing bonus damage to the first enemy hit.",
          "key": "AmbessaQ"
        },
        {
          "name": "Repudiation",
          "description": "Ambessa gains a shield, briefly braces herself, and then slams the ground to damage nearby enemies. If she blocked any non-minion damage while bracing herself, this ability will deal increased damage.",
          "key": "AmbessaW"
        },
        {
          "name": "Lacerate",
          "description": "Ambessa whips her twin drakehounds around herself, damaging and slowing nearby enemies. Initiating Drakehound's Step from this ability causes her to strike a second time at the end of its dash.",
          "key": "AmbessaE"
        },
        {
          "name": "Public Execution",
          "description": "Ambessa blinks to the farthest enemy champion in a line of her choosing and suppresses them upon her arrival. She then slams the enemy into the ground where they take damage and are stunned.",
          "key": "AmbessaR"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "annie",
      "name": "Annie",
      "fullName": "Annie, the Dark Child",
      "icon": "🔥",
      "role": "Pháp Sư",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "8-10 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Tibbers and Fire Magic - Gấu bông và ma thuật lửa",
      "releaseDate": "2009",
      "lore": "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.",
      "fullLore": "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Pyromania",
          "description": "After casting 4 spells, Annie's next offensive spell will stun the target.Annie begins the game and respawns with Pyromania available.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Annie_Passive.png"
        },
        {
          "key": "Q",
          "name": "Disintegrate",
          "description": "Annie hurls a Mana infused fireball, dealing damage and refunding the Mana cost if it destroys the target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AnnieQ.png",
          "cooldown": "4",
          "cost": "60/65/70/75/80",
          "range": "625"
        },
        {
          "key": "W",
          "name": "Incinerate",
          "description": "Annie casts a blazing cone of fire, dealing damage to all enemies in the area.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AnnieW.png",
          "cooldown": "8",
          "cost": "90/95/100/105/110",
          "range": "600"
        },
        {
          "key": "E",
          "name": "Molten Shield",
          "description": "Grants Annie or an ally a shield, a burst of Move Speed, and damages enemies who strike her with attacks or spells.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AnnieE.png",
          "cooldown": "12/11.5/11/10.5/10",
          "cost": "60/65/70/75/80",
          "range": "800"
        },
        {
          "key": "R",
          "name": "Summon: Tibbers",
          "description": "Annie wills her bear Tibbers to life, dealing damage to units in the area. Tibbers can attack and also burns enemies that stand near him.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AnnieR.png",
          "cooldown": "130/115/100",
          "cost": "100",
          "range": "600"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "aurelionsol",
      "name": "Aurelion Sol",
      "fullName": "Aurelion Sol, The Star Forger",
      "icon": "🐉",
      "role": "Pháp Sư",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",
      "gender": "Nam",
      "species": "Thiên Thể",
      "age": "10000+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Cosmic Magic - Ma thuật vũ trụ",
      "releaseDate": "2016",
      "lore": "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his star-forging ways, Aurelion Sol will drag the very stars from the sky, if he must, in order to regain his freedom.",
      "fullLore": "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his star-forging ways, Aurelion Sol will drag the very stars from the sky, if he must, in order to regain his freedom.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Cosmic Creator",
          "description": "Aurelion Sol's damaging Abilities break down enemies into stacks of Stardust, which permanently improves each of his abilities. ",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/AurelionSolP.png"
        },
        {
          "key": "Q",
          "name": "Breath of Light",
          "description": "Aurelion Sol channels his dragon breath for a few seconds, damaging the first enemy hit and splashing reduced damage onto nearby enemies. Each second the breath is channeled directly at an enemy will deal bonus damage, which is improved by the amount of Stardust that's been collected. This ability collects Stardust if the target is a champion.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AurelionSolQ.png",
          "cooldown": "3",
          "cost": "45/50/55/60/65",
          "range": "750"
        },
        {
          "key": "W",
          "name": "Astral Flight",
          "description": "Aurelion Sol flies over terrain in a targeted direction. While in this state, he can cast other abilities. Breath of Light no longer has a cooldown or maximum channel duration and deals increased damage while flying.\\n\\nAstral Flight's remaining cooldown is reduced whenever an enemy champion dies after being recently damaged by Aurelion Sol.\\n\\nStardust increases Astral Flight's maximum range.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AurelionSolW.png",
          "cooldown": "0",
          "cost": "80/85/90/95/100",
          "range": "1200"
        },
        {
          "key": "E",
          "name": "Singularity",
          "description": "Aurelion Sol summons a black hole, damaging enemies and slowly pulling them toward its center. This ability grants Stardust each time an enemy dies within the black hole and for each second an enemy champion is caught inside it. The center of the black hole executes enemies who are below a certain percentage of their maximum health. Stardust increases Singularity's area as well as the execution threshold.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AurelionSolE.png",
          "cooldown": "12",
          "cost": "80/85/90/95/100",
          "range": "750"
        },
        {
          "key": "R",
          "name": "Falling Star / The Skies Descend",
          "description": "Falling Star: Aurelion Sol crashes a star into the earth. This impact deals magic damage and stuns enemies while also granting Stardust for each enemy champion it hits. Gathering enough Stardust transforms Aurelion Sol's next Falling Star into The Skies Descend. The Skies Descend: Aurelion Sol drags a giant star down from the heavens with an increased impact zone and increased damage, knocking up enemies rather than stunning them. A shockwave then spreads from the edge of the impact zone, which damages and slows the enemies it hits. Stardust increases the impact area of both Falling Star and The Skies Descend.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AurelionSolR.png",
          "cooldown": "120/110/100",
          "cost": "100",
          "range": "1250"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "blitzcrank",
      "name": "Blitzcrank",
      "fullName": "Blitzcrank, the Great Steam Golem",
      "icon": "🤖",
      "role": "Đỡ Đòn",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg",
      "gender": "Robot",
      "species": "Cỗ Máy",
      "age": "Không rõ",
      "weapon": "Fist",
      "weaponSummary": "Steam Powered Fists - Nắm đấm hơi nước",
      "releaseDate": "2010",
      "lore": "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump. Blitzcrank selflessly uses his strength and durability to protect others, extending a helpful metal fist or burst of energy to subdue any troublemakers.",
      "fullLore": "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump. Blitzcrank selflessly uses his strength and durability to protect others, extending a helpful metal fist or burst of energy to subdue any troublemakers.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Mana Barrier",
          "description": "Blitzcrank gains a shield based on their mana when dropping to low health.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Blitzcrank_ManaBarrier.png"
        },
        {
          "key": "Q",
          "name": "Rocket Grab",
          "description": "Blitzcrank fires their right hand to grab an opponent on its path, dealing damage and dragging it back to them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RocketGrab.png",
          "cooldown": "20/19/18/17/16",
          "cost": "100",
          "range": "1079"
        },
        {
          "key": "W",
          "name": "Overdrive",
          "description": "Blitzcrank super charges themself to get dramatically increased Move and Attack Speed. They are temporarily slowed after the effect ends.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/Overdrive.png",
          "cooldown": "15",
          "cost": "75",
          "range": "1"
        },
        {
          "key": "E",
          "name": "Power Fist",
          "description": "Blitzcrank charges up their fist to make the next attack deal double damage and pop their target up in the air.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/PowerFist.png",
          "cooldown": "9/8/7/6/5",
          "cost": "25",
          "range": "300"
        },
        {
          "key": "R",
          "name": "Static Field",
          "description": "Enemies attacked by Blitzcrank are marked and take lightning damage after 1 second. Additionally, Blitzcrank can activate this ability to remove nearby enemies' shields, damage them, and silence them briefly.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/StaticField.png",
          "cooldown": "60/40/20",
          "cost": "100",
          "range": "600"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "braum",
      "name": "Braum",
      "fullName": "Braum, the Heart of the Freljord",
      "icon": "🛡️",
      "role": "Đỡ Đòn",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "40-45 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Unbreakable Shield - Khiên bất phá",
      "releaseDate": "2014",
      "lore": "Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into rubble. Bearing an enchanted vault door as his shield, Braum roams the frozen north sporting a mustachioed smile as big as his muscles—a true friend to all those in need.",
      "fullLore": "Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into rubble. Bearing an enchanted vault door as his shield, Braum roams the frozen north sporting a mustachioed smile as big as his muscles—a true friend to all those in need.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Concussive Blows",
          "description": "Braum's basic attacks apply Concussive Blows. Once the first stack is applied, ally basic attacks also stack Concussive Blows. Upon reaching 4 stacks, the target is stunned and takes magic damage. For the next few seconds they cannot receive new stacks, but take bonus magic damage from Braum's attacks.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Braum_Passive.png"
        },
        {
          "key": "Q",
          "name": "Winter's Bite",
          "description": "Braum propels freezing ice from his shield, slowing and dealing magic damage.Applies a stack of Concussive Blows.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/BraumQ.png",
          "cooldown": "8/7.5/7/6.5/6",
          "cost": "45/50/55/60/65",
          "range": "1000"
        },
        {
          "key": "W",
          "name": "Stand Behind Me",
          "description": "Braum leaps to a target allied champion or minion. On arrival, Braum and the ally gain Armor and Magic Resist for a few seconds.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/BraumW.png",
          "cooldown": "12/11/10/9/8",
          "cost": "40",
          "range": "650"
        },
        {
          "key": "E",
          "name": "Unbreakable",
          "description": "Braum raises his shield in a direction for several seconds, intercepting all projectiles causing them to hit him and be destroyed. He negates the damage of the first attack completely and reduces the damage of all subsequent attacks from this direction.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/BraumE.png",
          "cooldown": "16/14/12/10/8",
          "cost": "30/35/40/45/50",
          "range": "25000"
        },
        {
          "key": "R",
          "name": "Glacial Fissure",
          "description": "Braum slams the ground, knocking up enemies nearby and in a line in front of him. A fissure is left along the line that slows enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/BraumRWrapper.png",
          "cooldown": "120/100/80",
          "cost": "100",
          "range": "1250"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "darius",
      "name": "Darius",
      "fullName": "Darius, the Hand of Noxus",
      "icon": "🪓",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "35-40 tuổi",
      "weapon": "Sword",
      "weaponSummary": "Decapitator - Rìu chặt đầu",
      "releaseDate": "2012",
      "lore": "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened commander. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that he never doubts his cause is just, and never hesitates once his axe is raised, those who stand against the leader of the Trifarian Legion can expect no mercy.",
      "fullLore": "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened commander. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that he never doubts his cause is just, and never hesitates once his axe is raised, those who stand against the leader of the Trifarian Legion can expect no mercy.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Hemorrhage",
          "description": "Darius' attacks and damaging abilities cause enemies to bleed for physical damage over 5 seconds, stacking up to 5 times. Darius enrages and gains massive Attack Damage when his target reaches max stacks.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Darius_Icon_Hemorrhage.png"
        },
        {
          "key": "Q",
          "name": "Decimate",
          "description": "Darius winds up and swings his axe in a wide circle. Enemies struck by the blade take more damage than those struck by the handle. Darius heals based on enemy champions and large monsters hit by the blade.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DariusCleave.png",
          "cooldown": "9/8/7/6/5",
          "cost": "30/35/40/45/50",
          "range": "1"
        },
        {
          "key": "W",
          "name": "Crippling Strike",
          "description": "Darius's next attack strikes an enemy's crucial artery. As they bleed out, their Move Speed is slowed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DariusNoxianTacticsONH.png",
          "cooldown": "5",
          "cost": "40",
          "range": "300"
        },
        {
          "key": "E",
          "name": "Apprehend",
          "description": "Darius hones his axe, passively causing his physical damage to ignore a percentage of his target's Armor. When activated, Darius sweeps up his enemies with his axe's hook and pulls them to him.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DariusAxeGrabCone.png",
          "cooldown": "24/21.5/19/16.5/14",
          "cost": "70/60/50/40/30",
          "range": "535"
        },
        {
          "key": "R",
          "name": "Noxian Guillotine",
          "description": "Darius leaps to an enemy champion and strikes a lethal blow, dealing true damage. This damage is increased for each stack of Hemorrhage on the target. If Noxian Guillotine is a killing blow, its cooldown is refreshed for a brief duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DariusExecute.png",
          "cooldown": "120/100/80",
          "cost": "100/100/0",
          "range": "460"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "draven",
      "name": "Draven",
      "fullName": "Draven, the Glorious Executioner",
      "icon": "🪓",
      "role": "Xạ Thủ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "30-35 tuổi",
      "weapon": "Axe",
      "weaponSummary": "Spinning Axes - Rìu xoay",
      "releaseDate": "2012",
      "lore": "In Noxus, warriors known as Reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic, and his unparalleled skill with his spinning axes. Addicted to the spectacle of his own brash perfection, Draven has sworn to defeat whomever he must to ensure that his name is chanted throughout the empire forever more.",
      "fullLore": "In Noxus, warriors known as Reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic, and his unparalleled skill with his spinning axes. Addicted to the spectacle of his own brash perfection, Draven has sworn to defeat whomever he must to ensure that his name is chanted throughout the empire forever more.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "League of Draven",
          "description": "Draven gains his fans' Adoration when he catches a Spinning Axe or kills a minion, monster, or tower. Killing enemy champions grants Draven bonus gold based on how much Adoration he has.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Draven_passive.png"
        },
        {
          "key": "Q",
          "name": "Spinning Axe",
          "description": "Draven's next attack will deal bonus physical damage. This axe will ricochet off the target high up into the air. If Draven catches it, he automatically readies another Spinning Axe. Draven can have two Spinning Axes at once.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DravenSpinning.png",
          "cooldown": "12/11/10/9/8",
          "cost": "45",
          "range": "300"
        },
        {
          "key": "W",
          "name": "Blood Rush",
          "description": "Draven gains increased Move Speed and Attack Speed. The Move Speed bonus decreases rapidly over its duration. Catching a Spinning Axe will refresh the cooldown of Blood Rush.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DravenFury.png",
          "cooldown": "12",
          "cost": "40/35/30/25/20",
          "range": "1000"
        },
        {
          "key": "E",
          "name": "Stand Aside",
          "description": "Draven throws his axes, dealing physical damage to targets hit and knocking them aside. Targets hit are slowed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DravenDoubleShot.png",
          "cooldown": "18/17/16/15/14",
          "cost": "70",
          "range": "1050"
        },
        {
          "key": "R",
          "name": "Whirling Death",
          "description": "Draven hurls two massive axes to deal physical damage to each unit struck. Whirling Death slowly reverses direction and returns to Draven after striking an enemy champion. Draven may also activate this ability while the axes are in flight to cause it to return early. Deals less damage for each unit hit and resets when the axes reverse direction. Executes enemies who have less health than Draven's number of Adoration stacks.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/DravenRCast.png",
          "cooldown": "100/90/80",
          "cost": "100",
          "range": "20000"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "fiddlesticks",
      "name": "Fiddlesticks",
      "fullName": "Fiddlesticks, the Ancient Fear",
      "icon": "🎃",
      "role": "Pháp Sư",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg",
      "gender": "Quái vật",
      "species": "Con Người",
      "age": "10000+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Scythe - Lưỡi hái",
      "releaseDate": "2009",
      "lore": "Something has awoken in Runeterra. Something ancient. Something terrible. The ageless horror known as Fiddlesticks stalks the edges of mortal society, drawn to areas thick with paranoia where it feeds upon terrorized victims. Wielding a jagged scythe, the haggard, makeshift creature reaps fear itself, shattering the minds of those unlucky enough to survive in its wake. Beware the sounding of the crow, or the whispering of the shape that appears <i>almost</i> human… Fiddlesticks has returned.",
      "fullLore": "Something has awoken in Runeterra. Something ancient. Something terrible. The ageless horror known as Fiddlesticks stalks the edges of mortal society, drawn to areas thick with paranoia where it feeds upon terrorized victims. Wielding a jagged scythe, the haggard, makeshift creature reaps fear itself, shattering the minds of those unlucky enough to survive in its wake. Beware the sounding of the crow, or the whispering of the shape that appears <i>almost</i> human… Fiddlesticks has returned.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "A Harmless Scarecrow",
          "description": "Fiddlesticks' trinket is replaced by scarecrow effigies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/FiddlesticksP.png"
        },
        {
          "key": "Q",
          "name": "Terrify",
          "description": "Fiddlesticks damaging enemies with spells while unseen or targeting an enemy with Terrify's activation strikes a target unit with fear, causing it to flee in terror for a duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/FiddleSticksQ.png",
          "cooldown": "15/14.5/14/13.5/13",
          "cost": "65",
          "range": "575"
        },
        {
          "key": "W",
          "name": "Bountiful Harvest",
          "description": "Fiddlesticks drains health from nearby enemies, dealing bonus execute damage at the end of the duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/FiddleSticksW.png",
          "cooldown": "10/9.5/9/8.5/8",
          "cost": "60/65/70/75/80",
          "range": "650"
        },
        {
          "key": "E",
          "name": "Reap",
          "description": "Fiddlesticks slashes an area with its scythe, slowing all enemies hit and silencing enemies hit in the center of the slash.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/FiddleSticksE.png",
          "cooldown": "10/9/8/7/6",
          "cost": "40/45/50/55/60",
          "range": "850"
        },
        {
          "key": "R",
          "name": "Crowstorm",
          "description": "A murder of crows flock wildly around Fiddlesticks, dealing damage per second to all enemy units in the area.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/FiddleSticksR.png",
          "cooldown": "140/110/80",
          "cost": "100",
          "range": "800"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "graves",
      "name": "Graves",
      "fullName": "Graves, the Outlaw",
      "icon": "🔫",
      "role": "Xạ Thủ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "40-45 tuổi",
      "weapon": "Gun",
      "weaponSummary": "Destiny - Súng săn số phận",
      "releaseDate": "2011",
      "lore": "Malcolm Graves is a renowned mercenary, gambler, and thief—a wanted man in every city and empire he has visited. Even though he has an explosive temper, he possesses a strict sense of criminal honor, often enforced at the business end of his double-barreled shotgun Destiny. In recent years, he has reconciled a troubled partnership with Twisted Fate, and together they have prospered once more in the turmoil of Bilgewater's criminal underbelly.",
      "fullLore": "Malcolm Graves is a renowned mercenary, gambler, and thief—a wanted man in every city and empire he has visited. Even though he has an explosive temper, he possesses a strict sense of criminal honor, often enforced at the business end of his double-barreled shotgun Destiny. In recent years, he has reconciled a troubled partnership with Twisted Fate, and together they have prospered once more in the turmoil of Bilgewater's criminal underbelly.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "New Destiny",
          "description": "Graves' shotgun has some unique properties. He must reload when he runs out of ammo. Attacks fire 4 bullets, which cannot pass through units. Non-champions struck by multiple bullets are knocked back.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/GravesTrueGrit.png"
        },
        {
          "key": "Q",
          "name": "End of the Line",
          "description": "Graves fires an explosive shell that detonates after 2 seconds, or 0.2 seconds if it strikes terrain.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GravesQLineSpell.png",
          "cooldown": "13/11.5/10/8.5/7",
          "cost": "80",
          "range": "925"
        },
        {
          "key": "W",
          "name": "Smoke Screen",
          "description": "Graves fires a smoke canister at the target area creating a cloud of smoke that reduces sight range. Enemies caught in the initial impact are dealt magic damage and have their Move Speed reduced briefly.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GravesSmokeGrenade.png",
          "cooldown": "26/24/22/20/18",
          "cost": "70/75/80/85/90",
          "range": "950"
        },
        {
          "key": "E",
          "name": "Quickdraw",
          "description": "Graves dashes forward gaining an Armor boost for several seconds. If Graves dashes towards an enemy champion, gain two stacks of True Grit instead. Hitting enemies with basic attacks lowers the cooldown of this skill and refreshes the resistance boost.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GravesMove.png",
          "cooldown": "16/15/14/13/12",
          "cost": "40",
          "range": "425"
        },
        {
          "key": "R",
          "name": "Collateral Damage",
          "description": "Graves fires an explosive shell dealing heavy damage to the first champion it hits. After hitting a champion or reaching the end of its range, the shell explodes dealing damage in a cone.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GravesChargeShot.png",
          "cooldown": "100/80/60",
          "cost": "100",
          "range": "1000"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "irelia",
      "name": "Irelia",
      "fullName": "Irelia, the Blade Dancer",
      "icon": "⚔️",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "22-24 tuổi",
      "weapon": "Sword",
      "weaponSummary": "Blade Dance - Vũ điệu lưỡi dao",
      "releaseDate": "Không rõ",
      "lore": "The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of deadly blades. After proving herself as a fighter, she was thrust into the role of resistance leader and figurehead, and to this day remains dedicated to the preservation of her homeland.",
      "fullLore": "The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of deadly blades. After proving herself as a fighter, she was thrust into the role of resistance leader and figurehead, and to this day remains dedicated to the preservation of her homeland.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Ionian Fervor",
          "description": "When Irelia strikes enemies with spells she gains stacking bonus Attack Speed. At maximum stacks she also gains bonus damage on hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Irelia_Passive.png"
        },
        {
          "key": "Q",
          "name": "Bladesurge",
          "description": "Irelia dashes forward to strike her target, healing herself. If the target is Marked or dies to Bladesurge, its cooldown refreshes.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/IreliaQ.png",
          "cooldown": "11/10/9/8/7",
          "cost": "20",
          "range": "600"
        },
        {
          "key": "W",
          "name": "Defiant Dance",
          "description": "Irelia charges a strike that deals more damage as she charges. She takes reduced physical damage during the charge.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/IreliaW.png",
          "cooldown": "20/18/16/14/12",
          "cost": "70/75/80/85/90",
          "range": "825"
        },
        {
          "key": "E",
          "name": "Flawless Duet",
          "description": "Irelia sends out two blades which converge on each other. Enemies caught in between are damaged, stunned and Marked.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/IreliaE.png",
          "cooldown": "16/15/14/13/12",
          "cost": "50",
          "range": "850"
        },
        {
          "key": "R",
          "name": "Vanguard's Edge",
          "description": "Irelia fires a massive number of blades that explode outward upon hitting an enemy champion. Enemies hit by the blades are damaged and Marked. Afterwards the blades form a wall that will damage and slow enemies that walk through it.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/IreliaR.png",
          "cooldown": "125/105/85",
          "cost": "100",
          "range": "950"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "kaisa",
      "name": "Kai'Sa",
      "fullName": "Kai'Sa, Daughter of the Void",
      "icon": "🦋",
      "role": "Xạ Thủ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg",
      "gender": "Nữ",
      "species": "Sinh Vật Hư Không",
      "age": "20-22 tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Void Suit - Bộ giáp hư không",
      "releaseDate": "2018",
      "lore": "Claimed by the Void when she was only a child, Kai'Sa managed to survive through sheer tenacity and strength of will. Her experiences have made her a deadly hunter and, to some, the harbinger of a future they would rather not live to see. Having entered into an uneasy symbiosis with a living Void carapace, the time will soon come when she must decide whether to forgive those mortals who would call her a monster, and defeat the coming darkness together… or simply to forget, as the Void consumes the world that left her behind.",
      "fullLore": "Claimed by the Void when she was only a child, Kai'Sa managed to survive through sheer tenacity and strength of will. Her experiences have made her a deadly hunter and, to some, the harbinger of a future they would rather not live to see. Having entered into an uneasy symbiosis with a living Void carapace, the time will soon come when she must decide whether to forgive those mortals who would call her a monster, and defeat the coming darkness together… or simply to forget, as the Void consumes the world that left her behind.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Second Skin",
          "description": "Kai'Sa's basic attacks stack Plasma, dealing increasing bonus magic damage. Allies' immobilizing effects help stack Plasma. Additionally, Kai'Sa's item purchases upgrade her basic spells to have more powerful properties.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Kaisa_Passive.png"
        },
        {
          "key": "Q",
          "name": "Icathian Rain",
          "description": "Kai'Sa shoots a swarm of missiles that seek out nearby targets.Living Weapon: Icathian Rain is upgraded to shoot more missiles.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KaisaQ.png",
          "cooldown": "10/9/8/7/6",
          "cost": "55",
          "range": "600"
        },
        {
          "key": "W",
          "name": "Void Seeker",
          "description": "Kai'Sa shoots a long range missile, marking enemies with her passive.Living Weapon: Void Seeker is upgraded to apply more passive marks and reduce cooldown on champion hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KaisaW.png",
          "cooldown": "22/20/18/16/14",
          "cost": "55/60/65/70/75",
          "range": "3000"
        },
        {
          "key": "E",
          "name": "Supercharge",
          "description": "Kai'Sa briefly increases her Move Speed, then increases her Attack Speed.Living Weapon: Supercharge is upgraded to briefly grant Invisibility.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KaisaE.png",
          "cooldown": "16/14.5/13/11.5/10",
          "cost": "30",
          "range": "1"
        },
        {
          "key": "R",
          "name": "Killer Instinct",
          "description": "Kai'Sa dashes near an enemy champion.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KaisaR.png",
          "cooldown": "130/100/70",
          "cost": "100",
          "range": "1500/2250/3000"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "katarina",
      "name": "Katarina",
      "fullName": "Katarina, the Sinister Blade",
      "icon": "🗡️",
      "role": "Sát Thủ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "25-27 tuổi",
      "weapon": "Sword",
      "weaponSummary": "Daggers - Dao găm",
      "releaseDate": "2010",
      "lore": "Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest daughter to the legendary General Du Couteau, she made her talents known with swift kills against unsuspecting enemies. Her fiery ambition has driven her to pursue heavily-guarded targets, even at the risk of endangering her allies—but no matter the mission, Katarina will not hesitate to execute her duty amid a whirlwind of serrated daggers.",
      "fullLore": "Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest daughter to the legendary General Du Couteau, she made her talents known with swift kills against unsuspecting enemies. Her fiery ambition has driven her to pursue heavily-guarded targets, even at the risk of endangering her allies—but no matter the mission, Katarina will not hesitate to execute her duty amid a whirlwind of serrated daggers.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Voracity",
          "description": "Whenever an enemy champion dies that Katarina has damaged recently, her remaining ability cooldowns are dramatically reduced.If Katarina picks up a Dagger, she uses it to slash through all nearby enemies, dealing magic damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Katarina_Passive.png"
        },
        {
          "key": "Q",
          "name": "Bouncing Blade",
          "description": "Katarina throws a Dagger at the target that then bounces to nearby enemies before ricocheting onto the ground.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KatarinaQ.png",
          "cooldown": "11/10/9/8/7",
          "cost": "0",
          "range": "625"
        },
        {
          "key": "W",
          "name": "Preparation",
          "description": "Katarina gains a burst of Move Speed, tossing a Dagger into the air directly above herself.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KatarinaW.png",
          "cooldown": "15/14/13/12/11",
          "cost": "0",
          "range": "25000"
        },
        {
          "key": "E",
          "name": "Shunpo",
          "description": "Katarina blinks to the target, striking it if its an enemy, or striking the nearest enemy otherwise.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KatarinaEWrapper.png",
          "cooldown": "14/12.5/11/9.5/8",
          "cost": "0",
          "range": "725"
        },
        {
          "key": "R",
          "name": "Death Lotus",
          "description": "Katarina becomes a flurry of blades, dealing massive magic damage while she channels to the 3 nearest enemy champions.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KatarinaR.png",
          "cooldown": "90/60/45",
          "cost": "0",
          "range": "550"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "kled",
      "name": "Kled",
      "fullName": "Kled, the Cantankerous Cavalier",
      "icon": "🦎",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg",
      "gender": "Nam",
      "species": "Yordle",
      "age": "1000+ tuổi",
      "weapon": "Gun",
      "weaponSummary": "Chainsword - Kiếm xích",
      "releaseDate": "2016",
      "lore": "A warrior as fearless as he is ornery, the yordle Kled embodies the furious bravado of Noxus. He is an icon beloved by the empire's soldiers, distrusted by its officers, and loathed by the nobility. Many claim Kled has fought in every campaign the legions have waged, has “acquired” every military title, and has never once backed down from a fight. Though the truth of the matter is often questionable, one part of his legend is undeniable: Charging into battle on his un-trusty steed, Skaarl, Kled fights to protect what's his… and to take whatever he can get.",
      "fullLore": "A warrior as fearless as he is ornery, the yordle Kled embodies the furious bravado of Noxus. He is an icon beloved by the empire's soldiers, distrusted by its officers, and loathed by the nobility. Many claim Kled has fought in every campaign the legions have waged, has “acquired” every military title, and has never once backed down from a fight. Though the truth of the matter is often questionable, one part of his legend is undeniable: Charging into battle on his un-trusty steed, Skaarl, Kled fights to protect what's his… and to take whatever he can get.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Skaarl, the Cowardly Lizard",
          "description": "Kled rides his trusty steed, Skaarl, who takes damage for him. When Skaarl's health depletes, Kled dismounts.While dismounted, Kled's abilities change and he deals less damage to champions. Kled can restore Skaarl's courage by fighting enemies. At maximum courage, Kled remounts with a portion of Skaarl's health.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Kled_P.png"
        },
        {
          "key": "Q",
          "name": "Bear Trap on a Rope",
          "description": "Kled throws a bear trap that damages and hooks an enemy champion. If shackled for a short duration, the target takes additional physical damage and is yanked toward Kled.When dismounted, this ability is replaced by Pocket Pistol, a ranged gun blast that knocks back Kled and restores courage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KledQ.png",
          "cooldown": "11/10/9/8/7",
          "cost": "0",
          "range": "800"
        },
        {
          "key": "W",
          "name": "Violent Tendencies",
          "description": "Kled gains massive attack speed for four attacks. The fourth attack deals more damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KledW.png",
          "cooldown": "11/9.5/8/6.5/5",
          "cost": "0",
          "range": "0"
        },
        {
          "key": "E",
          "name": "Jousting",
          "description": "Kled dashes, dealing physical damage and gaining a short burst of speed. Kled can cast this ability again to dash back through his initial target, dealing the same damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KledE.png",
          "cooldown": "13/12/11/10/9",
          "cost": "0",
          "range": "550"
        },
        {
          "key": "R",
          "name": "Chaaaaaaaarge!!!",
          "description": "Kled and Skaarl charge to a location, leaving a speed-granting trail behind them and gaining a shield. Skaarl locks onto and rams the first enemy champion encountered.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KledR.png",
          "cooldown": "140/125/110",
          "cost": "0",
          "range": "3500/4000/4500"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "leblanc",
      "name": "LeBlanc",
      "fullName": "LeBlanc, the Deceiver",
      "icon": "🎭",
      "role": "Sát Thủ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "1000+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Staff of Deception - Gậy lừa dối",
      "releaseDate": "2010",
      "lore": "Mysterious even to other members of the Black Rose cabal, LeBlanc is but one of many names for a pale woman who has manipulated people and events since the earliest days of Noxus. Using her magic to mirror herself, the sorceress can appear to anyone, anywhere, and even be in many places at once. Always plotting just out of sight, LeBlanc's true motives are as inscrutable as her shifting identity.",
      "fullLore": "Mysterious even to other members of the Black Rose cabal, LeBlanc is but one of many names for a pale woman who has manipulated people and events since the earliest days of Noxus. Using her magic to mirror herself, the sorceress can appear to anyone, anywhere, and even be in many places at once. Always plotting just out of sight, LeBlanc's true motives are as inscrutable as her shifting identity.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Mirror Image",
          "description": "When LeBlanc drops below 40% Health, she becomes invisible for 1 second and creates a Mirror Image that deals no damage and lasts for up to 8 seconds.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/LeBlancP.png"
        },
        {
          "key": "Q",
          "name": "Sigil of Malice",
          "description": "LeBlanc projects a sigil, dealing damage and marking the target for 3.5 seconds. Damaging the marked target with an ability detonates the sigil, dealing additional damage. If either part kills the target, Leblanc refunds the Mana cost and part of this spell's remaining Cooldown.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LeblancQ.png",
          "cooldown": "6",
          "cost": "50",
          "range": "700"
        },
        {
          "key": "W",
          "name": "Distortion",
          "description": "LeBlanc dashes to a location, dealing damage to enemies near her destination. For the next 4 seconds, activate Distortion again to return LeBlanc to her starting location.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LeblancW.png",
          "cooldown": "18/16/14/12/10",
          "cost": "60/70/80/90/100",
          "range": "600"
        },
        {
          "key": "E",
          "name": "Ethereal Chains",
          "description": "LeBlanc launches a chain that shackles the first enemy hit. If the target remains shackled for 1.5 seconds, LeBlanc roots them and deals additional damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LeblancE.png",
          "cooldown": "14/13.25/12.5/11.75/11",
          "cost": "50",
          "range": "925"
        },
        {
          "key": "R",
          "name": "Mimic",
          "description": "LeBlanc casts a mimicked version of one of her basic spells.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LeblancR.png",
          "cooldown": "50/40/30",
          "cost": "0",
          "range": "25000"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "lulu",
      "name": "Lulu",
      "fullName": "Lulu, the Fae Sorceress",
      "icon": "🧚",
      "role": "Hỗ Trợ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg",
      "gender": "Nữ",
      "species": "Yordle",
      "age": "300+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Pix and Wand - Tiên và đũa phép",
      "releaseDate": "2012",
      "lore": "The yordle mage Lulu is known for conjuring dreamlike illusions and fanciful creatures as she roams Runeterra with her fairy companion Pix. Lulu shapes reality on a whim, warping the fabric of the world, and what she views as the constraints of this mundane, physical realm. While others might consider her magic at best unnatural, and at worst dangerous, she believes everyone could use a touch of enchantment.",
      "fullLore": "The yordle mage Lulu is known for conjuring dreamlike illusions and fanciful creatures as she roams Runeterra with her fairy companion Pix. Lulu shapes reality on a whim, warping the fabric of the world, and what she views as the constraints of this mundane, physical realm. While others might consider her magic at best unnatural, and at worst dangerous, she believes everyone could use a touch of enchantment.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Pix, Faerie Companion",
          "description": "Pix fires magical bolts of energy whenever the champion he's following attacks another enemy unit. These bolts are homing, but can be intercepted by other units.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Lulu_PixFaerieCompanion.png"
        },
        {
          "key": "Q",
          "name": "Glitterlance",
          "description": "Pix and Lulu each fire a bolt of magical energy that damages and heavily slows all enemies it hits.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LuluQ.png",
          "cooldown": "7",
          "cost": "50/55/60/65/70",
          "range": "925"
        },
        {
          "key": "W",
          "name": "Whimsy",
          "description": "If cast on an ally, grants them Attack Speed and Move Speed for a short time. If cast on an enemy, turns them into an adorable critter that can't attack or cast spells.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LuluW.png",
          "cooldown": "17/16.5/16/15.5/15",
          "cost": "65",
          "range": "650"
        },
        {
          "key": "E",
          "name": "Help, Pix!",
          "description": "If cast on an ally, commands Pix to jump to an ally and shield them. He then follows them and aids their attacks. If cast on an enemy, commands Pix to jump to an enemy and damage them. He then follows them and grants you vision of that enemy.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LuluE.png",
          "cooldown": "8",
          "cost": "60/65/70/75/80",
          "range": "650"
        },
        {
          "key": "R",
          "name": "Wild Growth",
          "description": "Lulu enlarges an ally, knocking nearby enemies into the air and granting the ally a large amount of bonus health. For the next few seconds, that ally gains an aura that slows nearby enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LuluR.png",
          "cooldown": "120/100/80",
          "cost": "100",
          "range": "900"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "malphite",
      "name": "Malphite",
      "fullName": "Malphite, Shard of the Monolith",
      "icon": "🗿",
      "role": "Đỡ Đòn",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "10000+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Rock Body - Cơ thể đá",
      "releaseDate": "2010",
      "lore": "A massive creature of living stone, Malphite struggles to impose blessed order on a chaotic world. Birthed as a servitor-shard to an otherworldly obelisk known as the Monolith, he used his tremendous elemental strength to maintain and protect his progenitor, but ultimately failed. The only survivor of the destruction that followed, Malphite now endures Runeterra's soft folk and their fluid temperaments, while struggling to find a new role worthy of the last of his kind.",
      "fullLore": "A massive creature of living stone, Malphite struggles to impose blessed order on a chaotic world. Birthed as a servitor-shard to an otherworldly obelisk known as the Monolith, he used his tremendous elemental strength to maintain and protect his progenitor, but ultimately failed. The only survivor of the destruction that followed, Malphite now endures Runeterra's soft folk and their fluid temperaments, while struggling to find a new role worthy of the last of his kind.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Granite Shield",
          "description": "Malphite is shielded by a layer of rock which absorbs damage up to 10% of his maximum Health. If Malphite has not been hit for a few seconds, this effect recharges.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Malphite_GraniteShield.png"
        },
        {
          "key": "Q",
          "name": "Seismic Shard",
          "description": "Malphite sends a shard of the earth through the ground at his foe, dealing damage upon impact and stealing Move Speed for 3 seconds.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SeismicShard.png",
          "cooldown": "8",
          "cost": "70/75/80/85/90",
          "range": "625"
        },
        {
          "key": "W",
          "name": "Thunderclap",
          "description": "Malphite attacks with such force that it creates a sonic boom. For the next few seconds, his attacks create aftershocks in front of him.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/Obduracy.png",
          "cooldown": "10/9.5/9/8.5/8",
          "cost": "30/35/40/45/50",
          "range": "400"
        },
        {
          "key": "E",
          "name": "Ground Slam",
          "description": "Malphite slams the ground, sending out a shockwave that deals magic damage based on his Armor and reduces the Attack Speed of enemies for a short duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/Landslide.png",
          "cooldown": "7",
          "cost": "50",
          "range": "400"
        },
        {
          "key": "R",
          "name": "Unstoppable Force",
          "description": "Malphite launches himself to a location at high speed, damaging enemies and knocking them into the air.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/UFSlash.png",
          "cooldown": "130/105/80",
          "cost": "100",
          "range": "1000"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "milio",
      "name": "Milio",
      "fullName": "Milio, The Gentle Flame",
      "icon": "⚔️",
      "role": "Hỗ Trợ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Milio_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "Không rõ",
      "weapon": "Unknown",
      "weaponSummary": "Unknown",
      "releaseDate": "Không rõ",
      "lore": "Milio is a warmhearted boy from Ixtal who has, despite his young age, mastered the fire axiom and discovered something new: soothing fire. With this newfound power, Milio plans to help his family escape their exile by joining the Yun Tal—just like his grandmother once did. Having traveled through the Ixtal jungles to the capital of Ixaocan, Milio now prepares to face the Vidalion and join the Yun Tal, unaware of the trials—and dangers—that await him.",
      "fullLore": "Milio is a warmhearted boy from Ixtal who has, despite his young age, mastered the fire axiom and discovered something new: soothing fire. With this newfound power, Milio plans to help his family escape their exile by joining the Yun Tal—just like his grandmother once did. Having traveled through the Ixtal jungles to the capital of Ixaocan, Milio now prepares to face the Vidalion and join the Yun Tal, unaware of the trials—and dangers—that await him.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Fired Up!",
          "description": "Milio's abilities enchant allies on touch, making their next damage deal a burst of extra damage and burn the target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Milio_P.png"
        },
        {
          "key": "Q",
          "name": "Ultra Mega Fire Kick",
          "description": "Kick a ball that knocks back an enemy. The ball launches upward on hit and falls toward the enemy, damaging and slowing enemies in the area upon impact.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MilioQ.png",
          "cooldown": "12",
          "cost": "50/55/60/65/70",
          "range": "1000"
        },
        {
          "key": "W",
          "name": "Cozy Campfire",
          "description": "Create an empowering zone that heals allies and increases attack range to those inside. The zone follows the ally nearest to the cast point.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MilioW.png",
          "cooldown": "29/27/25/23/21",
          "cost": "90/100/110/120/130",
          "range": "350"
        },
        {
          "key": "E",
          "name": "Warm Hugs",
          "description": "Milio tosses a shield to an ally, temporarily increasing their movement speed. This ability has 2 charges.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MilioE.png",
          "cooldown": "0.5",
          "cost": "50/60/70/80/90",
          "range": "650"
        },
        {
          "key": "R",
          "name": "Breath of Life",
          "description": "Milio unleashes a wave of soothing flames that heal and remove crowd control effects from allies in range.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MilioR.png",
          "cooldown": "160/145/130",
          "cost": "100",
          "range": "700"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "monkeyking",
      "name": "Wukong",
      "fullName": "Wukong, the Monkey King",
      "icon": "🐒",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg",
      "gender": "Nam",
      "species": "Vastaya",
      "age": "Không rõ",
      "weapon": "Staff",
      "weaponSummary": "Staff - Gậy như ý",
      "releaseDate": "2011",
      "lore": "Wukong is a vastayan trickster who uses his strength, agility, and intelligence to confuse his opponents and gain the upper hand. After finding a lifelong friend in the warrior known as Master Yi, Wukong became the last student of the ancient martial art known as Wuju. Armed with an enchanted staff, Wukong seeks to prevent Ionia from falling to ruin.",
      "fullLore": "Wukong is a vastayan trickster who uses his strength, agility, and intelligence to confuse his opponents and gain the upper hand. After finding a lifelong friend in the warrior known as Master Yi, Wukong became the last student of the ancient martial art known as Wuju. Armed with an enchanted staff, Wukong seeks to prevent Ionia from falling to ruin.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Stone Skin",
          "description": "Wukong gains stacking armor and max health regeneration while fighting champions and monsters.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/MonkeyKingStoneSkin.png"
        },
        {
          "key": "Q",
          "name": "Crushing Blow",
          "description": "Wukong's next attack gains attack range, deals bonus damage, and reduces the target's armor for a few seconds.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MonkeyKingDoubleAttack.png",
          "cooldown": "8/7.5/7/6.5/6",
          "cost": "20",
          "range": "250/275/300/325/350"
        },
        {
          "key": "W",
          "name": "Warrior Trickster",
          "description": "Wukong becomes Invisible and dashes in a direction, leaving behind a clone that will attack nearby enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MonkeyKingDecoy.png",
          "cooldown": "22/20/18/16/14",
          "cost": "60/55/50/45/40",
          "range": "275"
        },
        {
          "key": "E",
          "name": "Nimbus Strike",
          "description": "Wukong dashes to a targeted enemy and sends out images to attack enemies near his target, dealing damage to each enemy struck.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MonkeyKingNimbus.png",
          "cooldown": "10/9.5/9/8.5/8",
          "cost": "30/35/40/45/50",
          "range": "650"
        },
        {
          "key": "R",
          "name": "Cyclone",
          "description": "Wukong's extends his staff and spins it around repeatedly, gaining Move Speed.Enemies struck take damage and are knocked up.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MonkeyKingSpinToWin.png",
          "cooldown": "130/110/90",
          "cost": "100",
          "range": "315"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "mordekaiser",
      "name": "Mordekaiser",
      "fullName": "Mordekaiser, the Iron Revenant",
      "icon": "💀",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "1000+ tuổi",
      "weapon": "Hammer",
      "weaponSummary": "Nightfall - Búa Nightfall",
      "releaseDate": "Không rõ",
      "lore": "Twice slain and thrice born, Mordekaiser is a brutal warlord from a foregone epoch who uses his necromantic sorcery to bind souls into an eternity of servitude. Few now remain who remember his earlier conquests, or know the true extent of his powers—but there are some ancient souls that do, and they fear the day when he may return to claim dominion over both the living and the dead.",
      "fullLore": "Twice slain and thrice born, Mordekaiser is a brutal warlord from a foregone epoch who uses his necromantic sorcery to bind souls into an eternity of servitude. Few now remain who remember his earlier conquests, or know the true extent of his powers—but there are some ancient souls that do, and they fear the day when he may return to claim dominion over both the living and the dead.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Darkness Rise",
          "description": "Mordekaiser gains a powerful damage aura and Move Speed after landing 3 attacks or spells against champions or monsters.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/MordekaiserPassive.png"
        },
        {
          "key": "Q",
          "name": "Obliterate",
          "description": "Mordekaiser smashes the ground with his mace dealing damage to each enemy struck. Damage is increased when hitting a single enemy.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MordekaiserQ.png",
          "cooldown": "9/7.75/6.5/5.25/4",
          "cost": "0",
          "range": "675"
        },
        {
          "key": "W",
          "name": "Indestructible",
          "description": "Mordekaiser stores damage he deals and takes to create a shield. He may consume the shield to heal.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MordekaiserW.png",
          "cooldown": "12/11/10/9/8",
          "cost": "0",
          "range": "25000"
        },
        {
          "key": "E",
          "name": "Death's Grasp",
          "description": "Mordekaiser pulls all enemies in an area.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MordekaiserE.png",
          "cooldown": "18/16/14/12/10",
          "cost": "0",
          "range": "700"
        },
        {
          "key": "R",
          "name": "Realm of Death",
          "description": "Mordekaiser drags his victim to a different dimension with him and steals a portion of their stats. If he kills them, he keeps the stats until the victim respawns.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MordekaiserR.png",
          "cooldown": "140/120/100",
          "cost": "0",
          "range": "650"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "nami",
      "name": "Nami",
      "fullName": "Nami, the Tidecaller",
      "icon": "🧜",
      "role": "Hỗ Trợ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg",
      "gender": "Nữ",
      "species": "Vastaya",
      "age": "200+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Tidecaller Staff - Gậy gọi thủy triều",
      "releaseDate": "Không rõ",
      "lore": "A headstrong young vastaya of the seas, Nami was the first of the Marai tribe to leave the waves and venture onto dry land, when their ancient accord with the Targonians was broken. With no other option, she took it upon herself to complete the sacred ritual that would ensure the safety of her people. Amidst the chaos of this new age, Nami faces an uncertain future with grit and determination, using her Tidecaller staff to summon the strength of the oceans themselves.",
      "fullLore": "A headstrong young vastaya of the seas, Nami was the first of the Marai tribe to leave the waves and venture onto dry land, when their ancient accord with the Targonians was broken. With no other option, she took it upon herself to complete the sacred ritual that would ensure the safety of her people. Amidst the chaos of this new age, Nami faces an uncertain future with grit and determination, using her Tidecaller staff to summon the strength of the oceans themselves.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Surging Tides",
          "description": "When Nami's Abilities hit allied champions they gain Move Speed for a short duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/NamiPassive.png"
        },
        {
          "key": "Q",
          "name": "Aqua Prison",
          "description": "Sends a bubble to a target area, dealing damage and stunning all enemies on impact.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NamiQ.png",
          "cooldown": "12/11/10/9/8",
          "cost": "60",
          "range": "875"
        },
        {
          "key": "W",
          "name": "Ebb and Flow",
          "description": "Unleashes a stream of water that bounces back and forth between allied and enemy champions, healing allies and damaging enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NamiW.png",
          "cooldown": "10",
          "cost": "70/80/90/100/110",
          "range": "725"
        },
        {
          "key": "E",
          "name": "Tidecaller's Blessing",
          "description": "Empowers an allied champion for a short duration. The ally's basic attacks and spells deal bonus magic damage and slow the target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NamiE.png",
          "cooldown": "11",
          "cost": "55/60/65/70/75",
          "range": "800"
        },
        {
          "key": "R",
          "name": "Tidal Wave",
          "description": "Summons a massive Tidal Wave that knocks up, slows, and damages enemies. Allies hit gain double the effect of Surging Tides.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NamiR.png",
          "cooldown": "120/110/100",
          "cost": "100",
          "range": "2550"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "nasus",
      "name": "Nasus",
      "fullName": "Nasus, the Curator of the Sands",
      "icon": "🐕",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg",
      "gender": "Nam",
      "species": "Thăng Thiên",
      "age": "3000+ tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Staff of Ascension - Gậy thăng thiên",
      "releaseDate": "Không rõ",
      "lore": "Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and peerless strategist whose wisdom guided the ancient empire of Shurima to greatness for many centuries. After the fall of the empire, he went into self-imposed exile, becoming little more than a legend. Now that the ancient city of Shurima has risen once more, he has returned, determined to ensure it never falls again.",
      "fullLore": "Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and peerless strategist whose wisdom guided the ancient empire of Shurima to greatness for many centuries. After the fall of the empire, he went into self-imposed exile, becoming little more than a legend. Now that the ancient city of Shurima has risen once more, he has returned, determined to ensure it never falls again.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Soul Eater",
          "description": "Nasus drains his foe's spiritual energy, giving him bonus Life Steal.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Nasus_Passive.png"
        },
        {
          "key": "Q",
          "name": "Siphoning Strike",
          "description": "Nasus strikes his foe, dealing damage and increasing the power of his future Siphoning Strikes if he slays his target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NasusQ.png",
          "cooldown": "7.5/6.5/5.5/4.5/3.5",
          "cost": "20",
          "range": "300"
        },
        {
          "key": "W",
          "name": "Wither",
          "description": "Nasus ages an enemy champion, decelerating their Move Speed and Attack Speed over time.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NasusW.png",
          "cooldown": "15/14/13/12/11",
          "cost": "80",
          "range": "700"
        },
        {
          "key": "E",
          "name": "Spirit Fire",
          "description": "Nasus unleashes a spirit flame at a location, dealing damage and reducing the Armor of enemies who stand on it.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NasusE.png",
          "cooldown": "12",
          "cost": "70/85/100/115/130",
          "range": "650"
        },
        {
          "key": "R",
          "name": "Fury of the Sands",
          "description": "Nasus unleashes a mighty sandstorm that batters nearby enemies. While the storm rages, he gains increased Health, Attack Range, damages nearby enemies, has a reduced cooldown on Siphoning Strike, and gains bonus Armor and Magic Resistance.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NasusR.png",
          "cooldown": "120/100/80",
          "cost": "100",
          "range": "20"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "neeko",
      "name": "Neeko",
      "fullName": "Neeko, the Curious Chameleon",
      "icon": "🦎",
      "role": "Pháp Sư",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg",
      "gender": "Nữ",
      "species": "Vastaya",
      "age": "200+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Shapeshifting Magic - Ma thuật biến hình",
      "releaseDate": "2018",
      "lore": "Hailing from a long lost tribe of vastaya, Neeko can blend into any crowd by borrowing the appearances of others, even absorbing something of their emotional state to tell friend from foe in an instant. No one is ever sure where—or who—Neeko might be, but those who intend to do her harm will soon witness her true colors revealed, and feel the full power of her primordial spirit magic unleashed upon them.",
      "fullLore": "Hailing from a long lost tribe of vastaya, Neeko can blend into any crowd by borrowing the appearances of others, even absorbing something of their emotional state to tell friend from foe in an instant. No one is ever sure where—or who—Neeko might be, but those who intend to do her harm will soon witness her true colors revealed, and feel the full power of her primordial spirit magic unleashed upon them.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Inherent Glamour",
          "description": "Neeko can look like an ally champion. Taking damage from enemy Champions or casting damaging spells breaks the disguise.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Neeko_P.png"
        },
        {
          "key": "Q",
          "name": "Blooming Burst",
          "description": "Neeko throws a seed dealing magic damage. The seed blooms again on hitting champions or killing units.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NeekoQ.png",
          "cooldown": "9/8.5/8/7.5/7",
          "cost": "50/60/70/80/90",
          "range": "800"
        },
        {
          "key": "W",
          "name": "Shapesplitter",
          "description": "Neeko passively deals bonus magic damage every third attack. Neeko can activate to send a clone in a direction.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NeekoW.png",
          "cooldown": "16/15/14/13/12",
          "cost": "0",
          "range": "900"
        },
        {
          "key": "E",
          "name": "Tangle-Barbs",
          "description": "Neeko slings a tangle that damage and root everything it passes through. If the tangle kills an enemy or passes through a champion, it becomes larger, faster, and roots for longer.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NeekoE.png",
          "cooldown": "12/11.5/11/10.5/10",
          "cost": "60/65/70/75/80",
          "range": "1000"
        },
        {
          "key": "R",
          "name": "Pop Blossom",
          "description": "After a short preparation, Neeko leaps into the air. Upon landing, nearby enemies are damaged and knocked up. The preparation is hidden if Neeko is disguised.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NeekoR.png",
          "cooldown": "120/105/90",
          "cost": "100",
          "range": "600"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "nilah",
      "name": "Nilah",
      "fullName": "Nilah, the Joy Unbound",
      "icon": "⚔️",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_0.jpg",
      "gender": "Nữ",
      "species": "Ác Ma",
      "age": "20-25 tuổi",
      "weapon": "Sword",
      "weaponSummary": "Urumi Whip-Blade - Roi kiếm Urumi",
      "releaseDate": "2022",
      "lore": "Nilah is an ascetic warrior from a distant land, seeking the world's deadliest, most titanic opponents so that she might challenge and destroy them. Having won her power through an encounter with the long-imprisoned demon of joy, she has no emotions other than unceasing jubilation—a small price to pay for the vast strength she now possesses. Channeling the demon's liquid form into a blade of unparalleled might, she stands defiant against ancient threats long forgotten.",
      "fullLore": "Nilah is an ascetic warrior from a distant land, seeking the world's deadliest, most titanic opponents so that she might challenge and destroy them. Having won her power through an encounter with the long-imprisoned demon of joy, she has no emotions other than unceasing jubilation—a small price to pay for the vast strength she now possesses. Channeling the demon's liquid form into a blade of unparalleled might, she stands defiant against ancient threats long forgotten.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Joy Unending",
          "description": "Nilah gains increased experience from last-hitting minions along with the ability to enhance and share nearby healing and shielding from her allies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/NIlahP.png"
        },
        {
          "key": "Q",
          "name": "Formless Blade",
          "description": "With a snap of her whip-blade, Nilah damages any enemies she hits in a straight line in her chosen direction. This action extends her attack range for a short duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NilahQ.png",
          "cooldown": "4",
          "cost": "30",
          "range": "600"
        },
        {
          "key": "W",
          "name": "Jubilant Veil",
          "description": "Nilah envelops herself in mist, increasing her movement speed and allowing her to gracefully dodge all incoming attacks. Any allies she touches during the mist's duration will also gain this effect.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NilahW.png",
          "cooldown": "26/25/24/23/22",
          "cost": "60/45/30/15/0",
          "range": "150"
        },
        {
          "key": "E",
          "name": "Slipstream",
          "description": "Nilah enthusiastically dashes toward her target, dealing damage to any enemies she passes through on the way.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NilahE.png",
          "cooldown": "0.5",
          "cost": "40",
          "range": "550"
        },
        {
          "key": "R",
          "name": "Apotheosis",
          "description": "Twirling her whip-blade in joyful exuberance, Nilah deals damage to enemies around her before pulling them closer with her weapon.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/NilahR.png",
          "cooldown": "110/95/80",
          "cost": "80",
          "range": "400"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "qiyana",
      "name": "Qiyana",
      "fullName": "Qiyana, Empress of the Elements",
      "icon": "💎",
      "role": "Sát Thủ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "20-22 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Ohmlatl - Vũ khí nguyên tố",
      "releaseDate": "2019",
      "lore": "In the jungle city of Ixaocan, Qiyana plots her own ruthless path to the high seat of the Yun Tal. Last in line to succeed her parents, she faces those who stand in her way with brash confidence and unprecedented mastery over elemental magic. With the land itself obeying her every command, Qiyana sees herself as the greatest elementalist in the history of Ixaocan—and by that right, deserving of not only a city, but an empire.",
      "fullLore": "In the jungle city of Ixaocan, Qiyana plots her own ruthless path to the high seat of the Yun Tal. Last in line to succeed her parents, she faces those who stand in her way with brash confidence and unprecedented mastery over elemental magic. With the land itself obeying her every command, Qiyana sees herself as the greatest elementalist in the history of Ixaocan—and by that right, deserving of not only a city, but an empire.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Royal Privilege",
          "description": "Qiyana's first basic attack or ability against each enemy deals bonus damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Qiyana_Passive.png"
        },
        {
          "key": "Q",
          "name": "Elemental Wrath / Edge of Ixtal",
          "description": "Qiyana swings her weapon, dealing damage with a bonus effect based on her element.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/QiyanaQ.png",
          "cooldown": "7",
          "cost": "35",
          "range": "525"
        },
        {
          "key": "W",
          "name": "Terrashape",
          "description": "Qiyana dashes to a location and enchants her weapon with an element. Her attacks and abilities deal bonus damage while her weapon is enchanted. ",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/QiyanaW.png",
          "cooldown": "7",
          "cost": "25/30/35/40/45",
          "range": "1100"
        },
        {
          "key": "E",
          "name": "Audacity",
          "description": "Qiyana dashes to an enemy, damaging them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/QiyanaE.png",
          "cooldown": "11/10/9/8/7",
          "cost": "40/45/50/55/60",
          "range": "650"
        },
        {
          "key": "R",
          "name": "Supreme Display of Talent",
          "description": "Qiyana sends out a shockwave that detonates whatever elements she hits with it, stunning and damaging nearby enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/QiyanaR.png",
          "cooldown": "120",
          "cost": "100",
          "range": "950"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "reksai",
      "name": "Rek'Sai",
      "fullName": "Rek'Sai, the Void Burrower",
      "icon": "🦂",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg",
      "gender": "Nữ",
      "species": "Sinh Vật Hư Không",
      "age": "Không rõ",
      "weapon": "Unknown",
      "weaponSummary": "Claws and Tunnels - Móng vuốt và đường hầm",
      "releaseDate": "2014",
      "lore": "An apex predator, Rek'Sai is a merciless Void-spawn that tunnels beneath the ground to ambush and devour unsuspecting prey. Her insatiable hunger has laid waste to entire regions of the once-great empire of Shurima—merchants, traders, even armed caravans, will go hundreds of miles out of their way to avoid her and her offspring's hunting grounds. All know that once Rek'Sai is seen on the horizon, death from below is all but guaranteed.",
      "fullLore": "An apex predator, Rek'Sai is a merciless Void-spawn that tunnels beneath the ground to ambush and devour unsuspecting prey. Her insatiable hunger has laid waste to entire regions of the once-great empire of Shurima—merchants, traders, even armed caravans, will go hundreds of miles out of their way to avoid her and her offspring's hunting grounds. All know that once Rek'Sai is seen on the horizon, death from below is all but guaranteed.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Fury of the Xer'Sai",
          "description": "Rek'sai generates Fury by Attack and hitting with basic abilities. She consumes this Fury while Burrowed to restore health.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/RekSai_Passive.png"
        },
        {
          "key": "Q",
          "name": "Queen's Wrath / Prey Seeker",
          "description": "Rek'Sai's next 3 basic attacks deal bonus Physical Damage to nearby enemies.While Burrowed, Rek'Sai launches a burst of void-charged earth that deals Physical Damage and reveals enemies hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RekSaiQ.png",
          "cooldown": "4/3.5/3/2.5/2",
          "cost": "0",
          "range": "325"
        },
        {
          "key": "W",
          "name": "Burrow / Un-burrow",
          "description": "Rek'Sai burrows into the ground, gaining new abilities and increased Move Speed. Her vision range is reduced and she cannot use basic attacks.While Burrowed, Rek'Sai may cast Un-burrow to knock up and damage nearby enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RekSaiW.png",
          "cooldown": "4",
          "cost": "0",
          "range": "1650"
        },
        {
          "key": "E",
          "name": "Furious Bite / Tunnel",
          "description": "Rek'Sai bites her target, dealing double and True Damage if she has max Fury.While Burrowed, Rek'Sai creates a re-usable, long lasting tunnel. Enemies can destroy it by standing on top of either entrance.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RekSaiE.png",
          "cooldown": "12",
          "cost": "0",
          "range": "250"
        },
        {
          "key": "R",
          "name": "Void Rush",
          "description": "Rek'sai passively marks targets by damaging them. She can activate this ability to become briefly untargetable and lunge at a marked target for heavy damage based on their missing health.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RekSaiRWrapper.png",
          "cooldown": "100/90/80",
          "cost": "0",
          "range": "1500"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "rell",
      "name": "Rell",
      "fullName": "Rell, the Iron Maiden",
      "icon": "⚔️",
      "role": "Đỡ Đòn",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "16-17 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Magnetic Lance - Giáo từ tính",
      "releaseDate": "2020",
      "lore": "The product of brutal experimentation at the hands of the Black Rose, Rell is a defiant, living weapon determined to topple Noxus. Her childhood was one of misery and horror, enduring unspeakable procedures to perfect and weaponize her magical control over metal... until she staged a violent escape, killing many of her captors in the process. Now branded as a criminal, Rell attacks Noxian soldiers on sight as she searches for survivors of her old “academy,” defending the meek while delivering violent death to her former overseers.",
      "fullLore": "The product of brutal experimentation at the hands of the Black Rose, Rell is a defiant, living weapon determined to topple Noxus. Her childhood was one of misery and horror, enduring unspeakable procedures to perfect and weaponize her magical control over metal... until she staged a violent escape, killing many of her captors in the process. Now branded as a criminal, Rell attacks Noxian soldiers on sight as she searches for survivors of her old “academy,” defending the meek while delivering violent death to her former overseers.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Break the Mold",
          "description": "Rell's Attacks and Abilities steal Armor and Magic Resist on hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/RellP.png"
        },
        {
          "key": "Q",
          "name": "Shattering Strike",
          "description": "Rell deals magic damage to units in a line, breaking their shields and stunning them. ",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RellQ.png",
          "cooldown": "11/10.5/10/9.5/9",
          "cost": "50",
          "range": "600"
        },
        {
          "key": "W",
          "name": "Ferromancy: Crash Down",
          "description": "Mounted: Rell Dismounts, crashing down in her armor, Knocking enemies up and gaining a large Shield. While dismounted, she gains Armor, Magic Resist, Attack Speed, and Attack Range, but is Slowed.Dismounted: Rell forms her Mount, gaining a burst of speed and Knocking Up the next enemy she attacks.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RellW_Dismount.png",
          "cooldown": "11",
          "cost": "40",
          "range": "450"
        },
        {
          "key": "E",
          "name": "Full Tilt",
          "description": "Passive: Rell gains out of combat Move Speed.Active: Rell and an ally gain ramping Move Speed, doubled toward enemies and each other. Her next Attack explodes, dealing magic damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RellE.png",
          "cooldown": "15",
          "cost": "40",
          "range": "1200"
        },
        {
          "key": "R",
          "name": "Magnet Storm",
          "description": "Rell explodes in a magnetic fury, violently Pulling nearby enemies toward herself. Then Rell constantly Drags nearby enemies toward herself for a short while, dealing magic damage over time.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RellR.png",
          "cooldown": "120/100/80",
          "cost": "100",
          "range": "200"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "renekton",
      "name": "Renekton",
      "fullName": "Renekton, the Butcher of the Sands",
      "icon": "🐊",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg",
      "gender": "Nam",
      "species": "Thăng Thiên",
      "age": "3000+ tuổi",
      "weapon": "Sword",
      "weaponSummary": "Crescent Axe - Rìu lưỡi liềm",
      "releaseDate": "2011",
      "lore": "Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the nation's armies to countless victories. However, after the empire's fall, Renekton was entombed beneath the sands, and slowly, as the world turned and changed, he succumbed to insanity. Now free once more, he is utterly consumed with finding and killing his brother, Nasus, who he blames, in his madness, for the centuries he spent in darkness.",
      "fullLore": "Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the nation's armies to countless victories. However, after the empire's fall, Renekton was entombed beneath the sands, and slowly, as the world turned and changed, he succumbed to insanity. Now free once more, he is utterly consumed with finding and killing his brother, Nasus, who he blames, in his madness, for the centuries he spent in darkness.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Reign of Anger",
          "description": "Renekton's attacks generate Fury, increased when he is low on life. This Fury can empower his abilities with bonus effects.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Renekton_Passive.png"
        },
        {
          "key": "Q",
          "name": "Cull the Meek",
          "description": "Renekton swings his blade, dealing moderate physical damage to all targets around him, and heals for a small portion of the damage dealt. If he has more than 50 Fury, his damage and heal are increased.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RenektonCleave.png",
          "cooldown": "7",
          "cost": "0",
          "range": "325"
        },
        {
          "key": "W",
          "name": "Ruthless Predator",
          "description": "Renekton slashes his target twice, dealing moderate physical damage and stuns them for 0.75 seconds. If Renekton has more than 50 Fury, he slashes his target three times, destroying damage shields on the target, dealing high physical damage, and stunning them for 1.5 seconds.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RenektonPreExecute.png",
          "cooldown": "16/14/12/10/8",
          "cost": "0",
          "range": "300"
        },
        {
          "key": "E",
          "name": "Slice and Dice",
          "description": "Renekton dashes, dealing damage to units along the way. Empowered, Renekton deals bonus damage and reduces the Armor of units hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RenektonSliceAndDice.png",
          "cooldown": "16/15/14/13/12",
          "cost": "0",
          "range": "450"
        },
        {
          "key": "R",
          "name": "Dominus",
          "description": "Renekton transforms into the Tyrant form, gaining bonus Health and dealing damage to enemies around him. While in this form, Renekton gains Fury periodically.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RenektonReignOfTheTyrant.png",
          "cooldown": "120/100/80",
          "cost": "0",
          "range": "20"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "riven",
      "name": "Riven",
      "fullName": "Riven, the Exile",
      "icon": "⚔️",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "25-30 tuổi",
      "weapon": "Sword",
      "weaponSummary": "Broken Blade - Kiếm gãy",
      "releaseDate": "2011",
      "lore": "Once a swordmaster in the warhosts of Noxus, Riven is an expatriate in a land she previously tried to conquer. She rose through the ranks on the strength of her conviction and brutal efficiency, and was rewarded with a legendary runic blade and a warband of her own. However, on the Ionian front, Riven's faith in her homeland was tested and ultimately broken. Having severed all ties to the empire, she now seeks to find her place in a shattered world, even as rumors abound that Noxus itself has been reforged...",
      "fullLore": "Once a swordmaster in the warhosts of Noxus, Riven is an expatriate in a land she previously tried to conquer. She rose through the ranks on the strength of her conviction and brutal efficiency, and was rewarded with a legendary runic blade and a warband of her own. However, on the Ionian front, Riven's faith in her homeland was tested and ultimately broken. Having severed all ties to the empire, she now seeks to find her place in a shattered world, even as rumors abound that Noxus itself has been reforged...",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Runic Blade",
          "description": "Riven's abilities charge her blade, and her basic attacks expend charges to deal an additional damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/RivenRunicBlades.png"
        },
        {
          "key": "Q",
          "name": "Broken Wings",
          "description": "Riven lashes out in a series of strikes. This ability can be reactivated three times in a short time frame with the third hit knocking back nearby enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RivenTriCleave.png",
          "cooldown": "13",
          "cost": "0",
          "range": "275"
        },
        {
          "key": "W",
          "name": "Ki Burst",
          "description": "Riven emits a Ki Burst, damaging and stunning nearby enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RivenMartyr.png",
          "cooldown": "11/10/9/8/7",
          "cost": "0",
          "range": "260"
        },
        {
          "key": "E",
          "name": "Valor",
          "description": "Riven steps forward a short distance and blocks incoming damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RivenFeint.png",
          "cooldown": "10/9/8/7/6",
          "cost": "0",
          "range": "250"
        },
        {
          "key": "R",
          "name": "Blade of the Exile",
          "description": "Riven empowers her keepsake weapon with energy, and gains Attack Damage and Range. During this time, she also gains the ability to use Wind Slash, a powerful ranged attack, once.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/RivenFengShuiEngine.png",
          "cooldown": "120/90/60",
          "cost": "0",
          "range": "200"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "samira",
      "name": "Samira",
      "fullName": "Samira, the Desert Rose",
      "icon": "🔫",
      "role": "Xạ Thủ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "30-35 tuổi",
      "weapon": "Sword",
      "weaponSummary": "Guns and Sword - Súng và kiếm",
      "releaseDate": "2020",
      "lore": "Samira stares death in the eye with unyielding confidence, seeking thrill wherever she goes. After her Shuriman home was destroyed as a child, Samira found her true calling in Noxus, where she built a reputation as a stylish daredevil taking on dangerous missions of the highest caliber. Wielding black-powder pistols and a custom-engineered blade, Samira thrives in life-or-death circumstances, eliminating any who stand in her way with flash and flair.",
      "fullLore": "Samira stares death in the eye with unyielding confidence, seeking thrill wherever she goes. After her Shuriman home was destroyed as a child, Samira found her true calling in Noxus, where she built a reputation as a stylish daredevil taking on dangerous missions of the highest caliber. Wielding black-powder pistols and a custom-engineered blade, Samira thrives in life-or-death circumstances, eliminating any who stand in her way with flash and flair.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Daredevil Impulse",
          "description": "Samira builds a combo by hitting attacks or abilities unique from the previous hit. Samira's attacks in melee range deal additional magic damage. Samira's attacks against enemies affected by Immobilizing effects will dash her to her attack range. If the enemy is Knocked Up, she also keeps them Knocked Up briefly.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/SamiraP.png"
        },
        {
          "key": "Q",
          "name": "Flair",
          "description": "Samira fires a shot or swings her sword, dealing damage. If cast during Wild Rush, strike all enemies in her path upon completion.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SamiraQ.png",
          "cooldown": "6/5/4/3/2",
          "cost": "30",
          "range": "950"
        },
        {
          "key": "W",
          "name": "Blade Whirl",
          "description": "Samira slashes around her, damaging enemies and destroying enemy missiles.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SamiraW.png",
          "cooldown": "30/28/26/24/22",
          "cost": "60",
          "range": "325"
        },
        {
          "key": "E",
          "name": "Wild Rush",
          "description": "Samira dashes through an enemy (including structures), slashing enemies she passes through and gaining Attack Speed. Killing an enemy champion refreshes this ability's cooldown.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SamiraE.png",
          "cooldown": "20/18/16/14/12",
          "cost": "40",
          "range": "600"
        },
        {
          "key": "R",
          "name": "Inferno Trigger",
          "description": "Samira unleashes a torrent of shots from her weapons, wildly shooting all enemies surrounding her.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SamiraR.png",
          "cooldown": "5",
          "cost": "0",
          "range": "600"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "sett",
      "name": "Sett",
      "fullName": "Sett, the Boss",
      "icon": "👊",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "25-30 tuổi",
      "weapon": "Fist",
      "weaponSummary": "Knuckledusters - Đấm thép",
      "releaseDate": "2020",
      "lore": "A leader of Ionia's growing criminal underworld, Sett rose to prominence in the wake of the war with Noxus. Though he began as a humble challenger in the fighting pits of Navori, he quickly gained notoriety for his savage strength, and his ability to take seemingly endless amounts of punishment. Now, having climbed through the ranks of local combatants, Sett has muscled to the top, reigning over the pits he once fought in.",
      "fullLore": "A leader of Ionia's growing criminal underworld, Sett rose to prominence in the wake of the war with Noxus. Though he began as a humble challenger in the fighting pits of Navori, he quickly gained notoriety for his savage strength, and his ability to take seemingly endless amounts of punishment. Now, having climbed through the ranks of local combatants, Sett has muscled to the top, reigning over the pits he once fought in.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Pit Grit",
          "description": "Sett's basic attacks alternate between left and right punch. Right punch is slightly stronger and faster. Sett also hates losing, gaining additional health regeneration based off of his missing health.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Sett_P.png"
        },
        {
          "key": "Q",
          "name": "Knuckle Down",
          "description": "Sett's next two attacks deal additional damage based off of the target's max health. Sett also gains Move Speed while moving towards enemy champions.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SettQ.png",
          "cooldown": "9/8/7/6/5",
          "cost": "0",
          "range": "0"
        },
        {
          "key": "W",
          "name": "Haymaker",
          "description": "Sett passively stores damage he takes as Grit. On cast, Sett expends all stored Grit to gain a shield and punch an area, dealing true damage in the center and physical damage on the sides.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SettW.png",
          "cooldown": "18/16.5/15/13.5/12",
          "cost": "0",
          "range": "25000"
        },
        {
          "key": "E",
          "name": "Facebreaker",
          "description": "Sett pulls in all enemies on opposite sides of him, dealing damage and stunning them. If enemies were only on one side, they are slowed instead of stunned.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SettE.png",
          "cooldown": "16/14.5/13/11.5/10",
          "cost": "0",
          "range": "490"
        },
        {
          "key": "R",
          "name": "The Show Stopper",
          "description": "Sett carries an enemy champion through the air and slams them into the ground, dealing damage and slowing all enemies near where they land.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SettR.png",
          "cooldown": "120/100/80",
          "cost": "0",
          "range": "400"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "smolder",
      "name": "Smolder",
      "fullName": "Smolder, the Fiery Fledgling",
      "icon": "⚔️",
      "role": "Xạ Thủ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Smolder_0.jpg",
      "gender": "Nam",
      "species": "Rồng",
      "age": "Không rõ",
      "weapon": "Unknown",
      "weaponSummary": "Unknown",
      "releaseDate": "2024",
      "lore": "Hidden amongst the craggy cliffs of the Noxian frontier, under the watchful eyes of his mother, a young dragon is learning what it means to be heir to the Camavoran imperial dragon lineage. Playful and eager to grow up, Smolder looks for any excuse to practice his burgeoning abilities. Though he's still a fledgling, his skills are nothing to sneeze at, easily setting fire to anything that burns.",
      "fullLore": "Hidden amongst the craggy cliffs of the Noxian frontier, under the watchful eyes of his mother, a young dragon is learning what it means to be heir to the Camavoran imperial dragon lineage. Playful and eager to grow up, Smolder looks for any excuse to practice his burgeoning abilities. Though he's still a fledgling, his skills are nothing to sneeze at, easily setting fire to anything that burns.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "name": "Super Scorcher Breath",
          "description": "Smolder breathes fire on an enemy. As he gains more stacks, this ability becomes more powerful.",
          "key": "SmolderQ"
        },
        {
          "name": "Achooo!",
          "description": "Smolder lets out an adorable flaming sneeze that explodes when hitting enemy champions.",
          "key": "SmolderW"
        },
        {
          "name": "Flap, Flap, Flap",
          "description": "Smolder takes flight ignoring terrain and bombarding the lowest health enemy.",
          "key": "SmolderE"
        },
        {
          "name": "MMOOOMMMM!",
          "description": "Smolder calls his mom to breath fire from above, dealing extra damage and slowing enemies in the center of her fire.",
          "key": "SmolderR"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "swain",
      "name": "Swain",
      "fullName": "Swain, the Noxian Grand General",
      "icon": "🦅",
      "role": "Pháp Sư",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg",
      "gender": "Nam",
      "species": "Ác Ma",
      "age": "50-55 tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Beatrice and Magic - Quạ và ma thuật",
      "releaseDate": "2010",
      "lore": "Jericho Swain is the visionary ruler of Noxus, an expansionist nation that reveres only strength. Though he was cast down and crippled in the Ionian wars, his left arm severed, he seized control of the empire with ruthless determination… and a new, demonic hand. Now, Swain commands from the front lines, marching against a coming darkness that only he can see—in glimpses gathered by shadowy ravens from the corpses all around him. In a swirl of sacrifice and secrets, the greatest secret of all is that the true enemy lies within.",
      "fullLore": "Jericho Swain is the visionary ruler of Noxus, an expansionist nation that reveres only strength. Though he was cast down and crippled in the Ionian wars, his left arm severed, he seized control of the empire with ruthless determination… and a new, demonic hand. Now, Swain commands from the front lines, marching against a coming darkness that only he can see—in glimpses gathered by shadowy ravens from the corpses all around him. In a swirl of sacrifice and secrets, the greatest secret of all is that the true enemy lies within.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Ravenous Flock",
          "description": "Swain's ravens collect Soul Fragments that heal him and permanently increase his maximum health.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Swain_P.png"
        },
        {
          "key": "Q",
          "name": "Death's Hand",
          "description": "Swain unleashes several bolts of eldritch power that pierce through enemies. Enemies hit take more damage for each bolt they are struck by.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SwainQ.png",
          "cooldown": "7/6/5/4/3",
          "cost": "45/50/55/60/65",
          "range": "750"
        },
        {
          "key": "W",
          "name": "Vision of Empire",
          "description": "Swain opens a demon eye that deals damage and slows enemies. Champions hit are revealed and also grant Swain a Soul Fragment.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SwainW.png",
          "cooldown": "22/21/20/19/18",
          "cost": "60/65/70/75/80",
          "range": "5500/6000/6500/7000/7500"
        },
        {
          "key": "E",
          "name": "Nevermove",
          "description": "Swain launches a wave of demonic power forward. It then returns to Swain and roots enemies it hits. Swain can then choose to pull all rooted champions closer. This ability has a shorter cooldown during Demonic Ascension.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SwainE.png",
          "cooldown": "10",
          "cost": "50",
          "range": "850"
        },
        {
          "key": "R",
          "name": "Demonic Ascension",
          "description": "Swain transforms into a demon and drains health from nearby enemy champions, minions, and neutral monsters. Swain can cast Demonflare to decimate and slow nearby enemies with a nova of soulfire. This form is indefinite as long as Swain drains enemy champions.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SwainR.png",
          "cooldown": "100/80/60",
          "cost": "100",
          "range": "650"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "talon",
      "name": "Talon",
      "fullName": "Talon, the Blade's Shadow",
      "icon": "🗡️",
      "role": "Sát Thủ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "25-30 tuổi",
      "weapon": "Sword",
      "weaponSummary": "Arm Blades - Lưỡi dao cánh tay",
      "releaseDate": "2011",
      "lore": "Talon is the knife in the darkness, a merciless killer able to strike without warning and escape before any alarm is raised. He carved out a dangerous reputation on the brutal streets of Noxus, where he was forced to fight, kill, and steal to survive. Adopted by the notorious Du Couteau family, he now plies his deadly trade at the empire's command, assassinating enemy leaders, captains, and heroes… as well as any Noxian foolish enough to earn the scorn of their masters.",
      "fullLore": "Talon is the knife in the darkness, a merciless killer able to strike without warning and escape before any alarm is raised. He carved out a dangerous reputation on the brutal streets of Noxus, where he was forced to fight, kill, and steal to survive. Adopted by the notorious Du Couteau family, he now plies his deadly trade at the empire's command, assassinating enemy leaders, captains, and heroes… as well as any Noxian foolish enough to earn the scorn of their masters.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Blade's End",
          "description": "Talon's spells Wound champions and large monsters, stacking up to 3 times. When Talon attacks a champion with 3 stacks of Wound, they bleed for heavy damage over time.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/TalonP.png"
        },
        {
          "key": "Q",
          "name": "Noxian Diplomacy",
          "description": "Talon stabs the target unit. If they are within melee range, this attack deals critical damage. If they are outside melee range, Talon will leap at his target before stabbing them. Talon refunds some health and cooldown if this ability kills the target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TalonQ.png",
          "cooldown": "8/7.5/7/6.5/6",
          "cost": "40",
          "range": "575"
        },
        {
          "key": "W",
          "name": "Rake",
          "description": "Talon sends out a volley of daggers that then return back to him, dealing physical damage every time it passes through an enemy. The returning blades deal bonus damage and slow units hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TalonW.png",
          "cooldown": "9/8.5/8/7.5/7",
          "cost": "50/55/60/65/70",
          "range": "650"
        },
        {
          "key": "E",
          "name": "Assassin's Path",
          "description": "Talon vaults over any terrain or structure, up to a max distance. This ability has a low cooldown, but puts the used terrain on a long cooldown.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TalonE.png",
          "cooldown": "0",
          "cost": "0",
          "range": "725"
        },
        {
          "key": "R",
          "name": "Shadow Assault",
          "description": "Talon disperses a ring of blades and becomes Invisible while gaining additional Move Speed. When Talon emerges from Invisibility, the blades converge on his location. Each time the blades move, Shadow Assault deals physical damage to enemies hit by at least one blade.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TalonR.png",
          "cooldown": "100/80/60",
          "cost": "100",
          "range": "550"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "tryndamere",
      "name": "Tryndamere",
      "fullName": "Tryndamere, the Barbarian King",
      "icon": "⚔️",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "30-35 tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Greatsword - Đại kiếm",
      "releaseDate": "2010",
      "lore": "Fueled by unbridled fury and rage, Tryndamere once carved his way through the Freljord, openly challenging the greatest warriors of the north to prepare himself for even darker days ahead. The wrathful barbarian has long sought revenge for the annihilation of his clan, though more recently he has found companionship with Ashe, the Avarosan warmother, and a home with her people. His almost inhuman strength and fortitude is legendary, and has delivered him and his new allies countless victories against the greatest of odds.",
      "fullLore": "Fueled by unbridled fury and rage, Tryndamere once carved his way through the Freljord, openly challenging the greatest warriors of the north to prepare himself for even darker days ahead. The wrathful barbarian has long sought revenge for the annihilation of his clan, though more recently he has found companionship with Ashe, the Avarosan warmother, and a home with her people. His almost inhuman strength and fortitude is legendary, and has delivered him and his new allies countless victories against the greatest of odds.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Battle Fury",
          "description": "Tryndamere gains Fury for each attack, critical strike, and killing blow he makes. Fury passively increases his Critical Strike Chance and can be consumed with his Bloodlust spell.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Tryndamere_Passive.png"
        },
        {
          "key": "Q",
          "name": "Bloodlust",
          "description": "Tryndamere thrives on the thrills of combat, increasing his Attack Damage as he is more and more wounded. He can cast Bloodlust to consume his Fury and heal himself.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TryndamereQ.png",
          "cooldown": "12",
          "cost": "0",
          "range": "400"
        },
        {
          "key": "W",
          "name": "Mocking Shout",
          "description": "Tryndamere lets out an insulting cry, decreasing surrounding champions' Attack Damage. Enemies with their backs turned to Tryndamere also have their Move Speed reduced.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TryndamereW.png",
          "cooldown": "14",
          "cost": "0",
          "range": "850"
        },
        {
          "key": "E",
          "name": "Spinning Slash",
          "description": "Tryndamere slices toward a target unit, dealing damage to enemies in his path.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TryndamereE.png",
          "cooldown": "12/11/10/9/8",
          "cost": "0",
          "range": "650"
        },
        {
          "key": "R",
          "name": "Undying Rage",
          "description": "Tryndamere's lust for battle becomes so strong that he is unable to die, no matter how wounded he becomes.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/UndyingRage.png",
          "cooldown": "120/100/80",
          "cost": "0",
          "range": "400"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "urgot",
      "name": "Urgot",
      "fullName": "Urgot, the Dreadnought",
      "icon": "🦀",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "45-50 tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Purifier - Máy thanh lọc",
      "releaseDate": "2010",
      "lore": "Once a powerful Noxian headsman, Urgot was betrayed by the empire for which he had killed so many. Bound in iron chains, he was forced to learn the true meaning of strength in the Dredge—a prison mine deep beneath Zaun. Emerging in a disaster that spread chaos throughout the city, he now casts an imposing shadow over its criminal underworld. Raising his victims on the very chains that once enslaved him, he will purge his new home of the unworthy, making it a crucible of pain.",
      "fullLore": "Once a powerful Noxian headsman, Urgot was betrayed by the empire for which he had killed so many. Bound in iron chains, he was forced to learn the true meaning of strength in the Dredge—a prison mine deep beneath Zaun. Emerging in a disaster that spread chaos throughout the city, he now casts an imposing shadow over its criminal underworld. Raising his victims on the very chains that once enslaved him, he will purge his new home of the unworthy, making it a crucible of pain.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Echoing Flames",
          "description": "Urgot's basic attacks and Purge periodically trigger blasts of flame from his legs, dealing physical damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Urgot_Passive.png"
        },
        {
          "key": "Q",
          "name": "Corrosive Charge",
          "description": "Fires an explosive charge at the target location, dealing physical damage and slowing enemies caught in the explosion.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/UrgotQ.png",
          "cooldown": "10/9.5/9/8.5/8",
          "cost": "70",
          "range": "800"
        },
        {
          "key": "W",
          "name": "Purge",
          "description": "Urgot slows himself while he unloads his weapon on nearby enemies. Prioritizes enemy champions Urgot has recently struck with other abilities and triggers Echoing Flames.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/UrgotW.png",
          "cooldown": "12/9/6/3/0",
          "cost": "40/30/20/10/0",
          "range": "490"
        },
        {
          "key": "E",
          "name": "Disdain",
          "description": "Urgot charges in a direction, shielding himself and trampling non-champion enemies. If he catches an enemy champion, he will stop and hurl them out of his way.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/UrgotE.png",
          "cooldown": "16/15.5/15/14.5/14",
          "cost": "60/70/80/90/100",
          "range": "475"
        },
        {
          "key": "R",
          "name": "Fear Beyond Death",
          "description": "Urgot fires a chem-drill that impales the first enemy champion hit. If that champion falls below a health threshold, Urgot judges them weak and can execute them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/UrgotR.png",
          "cooldown": "100/85/70",
          "cost": "100",
          "range": "2500"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "velkoz",
      "name": "Vel'Koz",
      "fullName": "Vel'Koz, the Eye of the Void",
      "icon": "👁️",
      "role": "Pháp Sư",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg",
      "gender": "Nam",
      "species": "Sinh Vật Hư Không",
      "age": "Không rõ",
      "weapon": "Magic",
      "weaponSummary": "Void Rays - Tia hư không",
      "releaseDate": "2014",
      "lore": "It is unclear if Vel'Koz was the first Void-spawn to emerge on Runeterra, but there has certainly never been another to match his level of cruel, calculating sentience. While his kin devour or defile everything around them, he seeks instead to scrutinize and study the physical realm—and the strange, warlike beings that dwell there—for any weakness the Void might exploit. But Vel'Koz is far from a passive observer, striking back at threats with deadly plasma, or by disrupting the very fabric of the world itself.",
      "fullLore": "It is unclear if Vel'Koz was the first Void-spawn to emerge on Runeterra, but there has certainly never been another to match his level of cruel, calculating sentience. While his kin devour or defile everything around them, he seeks instead to scrutinize and study the physical realm—and the strange, warlike beings that dwell there—for any weakness the Void might exploit. But Vel'Koz is far from a passive observer, striking back at threats with deadly plasma, or by disrupting the very fabric of the world itself.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Organic Deconstruction",
          "description": "Vel'Koz's abilities apply Organic Deconstruction to enemies on hit. If 3 stacks are accumulated, the enemy will take a burst of true damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/VelKoz_Passive.png"
        },
        {
          "key": "Q",
          "name": "Plasma Fission",
          "description": "Vel'Koz shoots a bolt of plasma that splits in two on reactivation or upon hitting an enemy. The bolt slows and damages on hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VelkozQ.png",
          "cooldown": "7",
          "cost": "40/45/50/55/60",
          "range": "1050"
        },
        {
          "key": "W",
          "name": "Void Rift",
          "description": "Vel'Koz opens a rift to the void that deals an initial burst of damage, then explodes for a second burst of damage after a delay.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VelkozW.png",
          "cooldown": "1.5",
          "cost": "50/55/60/65/70",
          "range": "1050"
        },
        {
          "key": "E",
          "name": "Tectonic Disruption",
          "description": "Vel'Koz causes an area to explode, knocking up enemies, and knocking close enemies slightly away.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VelkozE.png",
          "cooldown": "16/15/14/13/12",
          "cost": "50/55/60/65/70",
          "range": "810"
        },
        {
          "key": "R",
          "name": "Life Form Disintegration Ray",
          "description": "Vel'Koz unleashes a channelled beam that follows the cursor for 2.5 seconds that deals magic damage. Organic Deconstruction Researches enemy champions causing them to take true damage instead.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VelkozR.png",
          "cooldown": "120/100/80",
          "cost": "100",
          "range": "1575"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "vi",
      "name": "Vi",
      "fullName": "Vi, the Piltover Enforcer",
      "icon": "👊",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "25-30 tuổi",
      "weapon": "Fist",
      "weaponSummary": "Atlas Gauntlets - Găng tay Atlas",
      "releaseDate": "2013",
      "lore": "Raised on the mean streets of Zaun, Vi is a hotheaded, impulsive, and fearsome woman with very little respect for authority. She has always been a shrewd survivor, both from her youthful troublemaking topside and an unfairly long stint in Stillwater Hold. Now working with the Piltover Enforcers to keep the peace instead of breaking it, she wields mighty hextech gauntlets that can punch through walls—and criminals—with equal ease.",
      "fullLore": "Raised on the mean streets of Zaun, Vi is a hotheaded, impulsive, and fearsome woman with very little respect for authority. She has always been a shrewd survivor, both from her youthful troublemaking topside and an unfairly long stint in Stillwater Hold. Now working with the Piltover Enforcers to keep the peace instead of breaking it, she wields mighty hextech gauntlets that can punch through walls—and criminals—with equal ease.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Blast Shield",
          "description": "Vi charges a shield over time. The shield can be activated by hitting an enemy with an ability.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/ViPassive.png"
        },
        {
          "key": "Q",
          "name": "Vault Breaker",
          "description": "Vi charges her gauntlets and unleashes a vault shattering punch, carrying her forward. Enemies she hits are knocked back and receive a stack of Denting Blows.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ViQ.png",
          "cooldown": "12/10.5/9/7.5/6",
          "cost": "50/60/70/80/90",
          "range": "250"
        },
        {
          "key": "W",
          "name": "Denting Blows",
          "description": "Vi's punches break her opponent's Armor, dealing bonus damage and granting her Attack Speed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ViW.png",
          "cooldown": "0",
          "cost": "0",
          "range": "750"
        },
        {
          "key": "E",
          "name": "Relentless Force",
          "description": "Vi's next attack blasts through her target, dealing damage to enemies behind it.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ViE.png",
          "cooldown": "1",
          "cost": "26/32/38/44/50",
          "range": "400"
        },
        {
          "key": "R",
          "name": "Cease and Desist",
          "description": "Vi runs down an enemy, knocking aside anyone in the way. When she reaches her target she knocks it into the air, jumps after it, and slams it back into the ground.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ViR.png",
          "cooldown": "140/115/90",
          "cost": "100/125/150",
          "range": "800"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "viego",
      "name": "Viego",
      "fullName": "Viego, The Ruined King",
      "icon": "⚔️",
      "role": "Đấu Sĩ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg",
      "gender": "Nam",
      "species": "Bất Tử",
      "age": "25-30 tuổi (khi chết)",
      "weapon": "Sword",
      "weaponSummary": "Blade of the Ruined King - Kiếm vua hủy diệt",
      "releaseDate": "2021",
      "lore": "Once ruler of a long-lost kingdom, Viego perished over a thousand years ago when his attempt to bring his wife back from the dead triggered the magical catastrophe known as the Ruination. Transformed into a powerful, unliving specter tortured by an obsessive longing for his centuries-dead queen, Viego now stands as the Ruined King, controlling the deadly Harrowings as he scours Runeterra for anything that might one day restore her, and destroying all in his path as the Black Mist pours endlessly from his cruel, broken heart.",
      "fullLore": "Once ruler of a long-lost kingdom, Viego perished over a thousand years ago when his attempt to bring his wife back from the dead triggered the magical catastrophe known as the Ruination. Transformed into a powerful, unliving specter tortured by an obsessive longing for his centuries-dead queen, Viego now stands as the Ruined King, controlling the deadly Harrowings as he scours Runeterra for anything that might one day restore her, and destroying all in his path as the Black Mist pours endlessly from his cruel, broken heart.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Sovereign's Domination",
          "description": "Enemies who fall before Viego become wraiths. By attacking a wraith, Viego temporarily seizes control of the dead enemy's body, healing for a percentage of his target's max health and gaining access to their basic abilities and items. He replaces their Ultimate with a free cast of his own.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Viego_Passive.png"
        },
        {
          "key": "Q",
          "name": "Blade of the Ruined King",
          "description": "Viego's spectral blade passively deals bonus percent current Health damage On-Hit and strikes twice vs. enemies he recently hit with an Ability, stealing Health.Viego can activate this Ability to thrust his zweihander forward, impaling enemies in front of him.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ViegoQ.png",
          "cooldown": "5/4.5/4/3.5/3",
          "cost": "0",
          "range": "600"
        },
        {
          "key": "W",
          "name": "Spectral Maw",
          "description": "Viego charges up before dashing forward, releasing a ball of concentrated Black Mist that stuns the first enemy hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ViegoW.png",
          "cooldown": "8",
          "cost": "0",
          "range": "400"
        },
        {
          "key": "E",
          "name": "Harrowed Path",
          "description": "Viego commands the Black Mist to haunt and surround a piece of terrain. Viego can hide in the Mist as a wraith, gaining camouflage, Move Speed, and Attack Speed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ViegoE.png",
          "cooldown": "14/12/10/8/6",
          "cost": "0",
          "range": "750"
        },
        {
          "key": "R",
          "name": "Heartbreaker",
          "description": "Viego teleports to a nearby location and executes an enemy champion on arrival, piercing their heart and causing a destructive shockwave around them that knocks away their allies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ViegoR.png",
          "cooldown": "120/100/80",
          "cost": "0",
          "range": "500"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "vladimir",
      "name": "Vladimir",
      "fullName": "Vladimir, the Crimson Reaper",
      "icon": "🩸",
      "role": "Pháp Sư",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "1500+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Blood Magic - Ma thuật máu",
      "releaseDate": "2010",
      "lore": "A fiend with a thirst for mortal blood, Vladimir has influenced the affairs of Noxus since the empire's earliest days. In addition to unnaturally extending his life, his mastery of hemomancy allows him to control the minds and bodies of others as easily as his own. In the flamboyant salons of the Noxian aristocracy, this has enabled him to build a fanatical cult of personality around himself—while in the lowest back alleys, it allows him to bleed his enemies dry.",
      "fullLore": "A fiend with a thirst for mortal blood, Vladimir has influenced the affairs of Noxus since the empire's earliest days. In addition to unnaturally extending his life, his mastery of hemomancy allows him to control the minds and bodies of others as easily as his own. In the flamboyant salons of the Noxian aristocracy, this has enabled him to build a fanatical cult of personality around himself—while in the lowest back alleys, it allows him to bleed his enemies dry.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Crimson Pact",
          "description": "Every 30 points of bonus Health gives Vladimir 1 Ability Power and every 1 point of Ability Power gives Vladimir 1.6 bonus Health (does not stack with itself).",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/VladimirP.png"
        },
        {
          "key": "Q",
          "name": "Transfusion",
          "description": "Vladimir steals life from the target enemy. When Vladimir's resource is full, Transfusion will benefit from massively increased damage and healing for a brief time.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VladimirQ.png",
          "cooldown": "9/7.9/6.8/5.7/4.6",
          "cost": "0",
          "range": "600"
        },
        {
          "key": "W",
          "name": "Sanguine Pool",
          "description": "Vladimir sinks into a pool of blood, becoming untargetable for 2 seconds. Additionally, enemies on the pool are slowed and Vladimir siphons life from them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VladimirSanguinePool.png",
          "cooldown": "28/25/22/19/16",
          "cost": "0",
          "range": "350"
        },
        {
          "key": "E",
          "name": "Tides of Blood",
          "description": "Vladimir pays his own health to charge up a reservoir of blood which, when released, deals damage in the area around him but can be blocked by enemy units.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VladimirE.png",
          "cooldown": "13/11/9/7/5",
          "cost": "0",
          "range": "600"
        },
        {
          "key": "R",
          "name": "Hemoplague",
          "description": "Vladimir infects an area with a virulent plague. Affected enemies take increased damage for the duration. After a few seconds, Hemoplague deals magic damage to infected enemies and heals Vladimir for each enemy Champion hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VladimirHemoplague.png",
          "cooldown": "120",
          "cost": "0",
          "range": "625"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "zed",
      "name": "Zed",
      "fullName": "Zed, the Master of Shadows",
      "icon": "🌙",
      "role": "Sát Thủ",
      "region": "noxus",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
      "gender": "Nam",
      "species": "Hồn Ma",
      "age": "35-40 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Shadow Blades - Lưỡi kiếm bóng tối",
      "releaseDate": "2013",
      "lore": "Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia's magical and martial traditions to drive out Noxian invaders. During the war, desperation led him to unlock the secret shadow form—a malevolent spirit magic as dangerous and corrupting as it is powerful. Zed has mastered all of these forbidden techniques to destroy anything he sees as a threat to his nation, or his new order.",
      "fullLore": "Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia's magical and martial traditions to drive out Noxian invaders. During the war, desperation led him to unlock the secret shadow form—a malevolent spirit magic as dangerous and corrupting as it is powerful. Zed has mastered all of these forbidden techniques to destroy anything he sees as a threat to his nation, or his new order.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Contempt for the Weak",
          "description": "Zed's basic attacks against low health targets deals bonus Magic Damage. This effect can only occur once every few seconds against the same enemy champion.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/ZedP.png"
        },
        {
          "key": "Q",
          "name": "Razor Shuriken",
          "description": "Zed and his shadows throw their shurikens.Each shuriken deals damage to every enemy hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZedQ.png",
          "cooldown": "6",
          "cost": "75/70/65/60/55",
          "range": "900"
        },
        {
          "key": "W",
          "name": "Living Shadow",
          "description": "Passive: Zed gains energy whenever he and his shadows strike an enemy with the same ability. Energy can only be gained once per cast ability.Active: Zed's shadow dashes forward, remaining in place for a few seconds. Reactivating Living Shadow will cause Zed to switch positions with this shadow.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZedW.png",
          "cooldown": "20/19.25/18.5/17.75/17",
          "cost": "40/35/30/25/20",
          "range": "650"
        },
        {
          "key": "E",
          "name": "Shadow Slash",
          "description": "Zed and his Shadows slash, dealing damage to nearby enemies. Enemies hit by a Shadow's slash are slowed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZedE.png",
          "cooldown": "5/4.5/4/3.5/3",
          "cost": "40",
          "range": "290"
        },
        {
          "key": "R",
          "name": "Death Mark",
          "description": "Zed becomes untargetable and dashes to an enemy champion, marking them. After 3 seconds the mark triggers, repeating a portion of all the damage Zed dealt to the target while they were marked.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZedR.png",
          "cooldown": "120/100/80",
          "cost": "0",
          "range": "625"
        }
      ],
      "specialFeatures": []
    }
  ],
  "newChampions": []
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = noxusData;
}