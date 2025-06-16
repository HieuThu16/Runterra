// ⚜️ Demacia Region Data - Version 3.2 (Enhanced with Skills)
const demaciaData = {
  "id": "demacia",
  "name": "⚜️ Demacia",
  "description": "Vùng đất ⚜️ Demacia",
  "lore": "Câu chuyện về ⚜️ Demacia",
  "existingChampions": [
    {
      "id": "akshan",
      "name": "Akshan",
      "fullName": "Akshan, the Rogue Sentinel",
      "icon": "🏹",
      "role": "Xạ Thủ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "25-30 tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Absolver - Súng boomerang",
      "releaseDate": "2021",
      "lore": "Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they least expect him. With a keen sense of justice and a legendary death-reversing weapon, he rights the wrongs of Runeterra's many scoundrels while living by his own moral code: “Don't be an ass.”",
      "fullLore": "Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they least expect him. With a keen sense of justice and a legendary death-reversing weapon, he rights the wrongs of Runeterra's many scoundrels while living by his own moral code: “Don't be an ass.”",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Dirty Fighting",
          "description": "Every three hits from Akshan's Attacks and Abilities deals bonus damage and grants him a Shield if the target was a champion.When Akshan Attacks, he fires an additional Attack for reduced damage. If he cancels the additional Attack, he instead gains Move Speed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/akshan_p.png"
        },
        {
          "key": "Q",
          "name": "Avengerang",
          "description": "Akshan throws a boomerang that deals damage going out and coming back, extending its range each time it hits an enemy.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AkshanQ.png",
          "cooldown": "8/7.25/6.5/5.75/5",
          "cost": "60/65/70/75/80",
          "range": "850"
        },
        {
          "key": "W",
          "name": "Going Rogue",
          "description": "Akshan passively marks enemy champions as Scoundrels when they kill his ally champions. If Akshan kills a Scoundrel, he resurrects the allies they killed, gains bonus gold, and clears all marks.When activated, Akshan enters camouflage and gains Move Speed and Mana Regen while moving towards Scoundrels. Akshan loses the camouflage quickly while he is not in brush or near terrain.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AkshanW.png",
          "cooldown": "18/14/10/6/2",
          "cost": "40/30/20/10/0",
          "range": "5500"
        },
        {
          "key": "E",
          "name": "Heroic Swing",
          "description": "Akshan fires a grappling hook into terrain then swings around it, repeatedly firing at the nearest enemy while swinging. He can jump off early or gets knocked off when colliding with champions or terrain.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AkshanE.png",
          "cooldown": "18/16.5/15/13.5/12",
          "cost": "70",
          "range": "800"
        },
        {
          "key": "R",
          "name": "Comeuppance",
          "description": "Akshan locks onto an enemy champion and starts storing bullets. When released, he fires all stored bullets, dealing damage based on missing health to the first champion, minion, or structure hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/AkshanR.png",
          "cooldown": "100/85/70",
          "cost": "100",
          "range": "2500"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "aphelios",
      "name": "Aphelios",
      "fullName": "Aphelios, the Weapon of the Faithful",
      "icon": "🌙",
      "role": "Xạ Thủ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "22-24 tuổi",
      "weapon": "Gun",
      "weaponSummary": "Moonstone Weapons - 5 loại vũ khí đá mặt trăng",
      "releaseDate": "2019",
      "lore": "Emerging from moonlight's shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by his sister Alune. From her distant temple sanctuary, she pushes an arsenal of moonstone weapons into his hands. For as long as the moon shines overhead, Aphelios will never be alone.",
      "fullLore": "Emerging from moonlight's shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by his sister Alune. From her distant temple sanctuary, she pushes an arsenal of moonstone weapons into his hands. For as long as the moon shines overhead, Aphelios will never be alone.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "The Hitman and the Seer",
          "description": "Aphelios wields 5 Lunari Weapons made by his sister Alune. He has access to two at a time: one main-hand and one off-hand. Each weapon has a unique Basic Attack and Ability. Attacks and abilities consume a weapon's ammo. When out of ammo, Aphelios discards the weapon and Alune summons the next of the 5. ",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/ApheliosP.png"
        },
        {
          "key": "Q",
          "name": "Weapon Abilites",
          "description": "Aphelios has 5 different activated abilities, based on his main-hand weapon:Calibrum (Rifle): Long range shot that marks its target for a long-range follow-up attack.Severum (Scythe Pistol): Run fast while attacking nearby enemies with both weapons.Gravitum (Cannon): Root all enemies slowed by this weapon.Infernum (Flamethrower): Blast enemies in a cone and attack them with your off-hand weapon.Crescendum (Chakram): Deploy a sentry that shoots your off-hand weapon.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ApheliosQ_ClientTooltipWrapper.png",
          "cooldown": "9",
          "cost": "60",
          "range": "1450"
        },
        {
          "key": "W",
          "name": "Phase",
          "description": "Aphelios swaps his main-hand gun with his off-hand gun, replacing his basic attack and activated ability.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ApheliosW.png",
          "cooldown": "0.8",
          "cost": "0",
          "range": "250"
        },
        {
          "key": "E",
          "name": "Weapon Queue System",
          "description": "Aphelios has no third ability. This slot shows the next weapon Alune will give him. Weapon order begins fixed but may change over game time -- when a weapon is out of ammo it goes to the end of the order.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ApheliosE_ClientTooltipWrapper.png",
          "cooldown": "0",
          "cost": "0",
          "range": "1000"
        },
        {
          "key": "R",
          "name": "Moonlight Vigil",
          "description": "Fire a concentrated blast of moonlight that explodes on enemy champions. Applies the unique effect of Aphelios' main-hand gun.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ApheliosR.png",
          "cooldown": "120/110/100",
          "cost": "100",
          "range": "1300"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "cassiopeia",
      "name": "Cassiopeia",
      "fullName": "Cassiopeia, the Serpent's Embrace",
      "icon": "🐍",
      "role": "Pháp Sư",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "25-30 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Poison Magic - Ma thuật độc",
      "releaseDate": "2011",
      "lore": "Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power. There, she was bitten by a gruesome tomb guardian, whose venom transformed her into a viper-like predator. Cunning and agile, Cassiopeia now slithers under the veil of night, petrifying her enemies with her baleful gaze.",
      "fullLore": "Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power. There, she was bitten by a gruesome tomb guardian, whose venom transformed her into a viper-like predator. Cunning and agile, Cassiopeia now slithers under the veil of night, petrifying her enemies with her baleful gaze.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Serpentine Grace",
          "description": "Cassiopeia gains Move Speed per level, but she cannot purchase Boots items.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Cassiopeia_Passive.png"
        },
        {
          "key": "Q",
          "name": "Noxious Blast",
          "description": "Cassiopeia blasts an area with Poison after a brief delay, granting her increased Move Speed if she hits an enemy champion.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/CassiopeiaQ.png",
          "cooldown": "3.5",
          "cost": "50/60/70/80/90",
          "range": "850"
        },
        {
          "key": "W",
          "name": "Miasma",
          "description": "Cassiopeia releases several clouds of poison, slowing, grounding, and lightly damaging enemies that pass through them. Grounded enemies cannot use Movement abilities.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/CassiopeiaW.png",
          "cooldown": "24/22/20/18/16",
          "cost": "70/80/90/100/110",
          "range": "700"
        },
        {
          "key": "E",
          "name": "Twin Fang",
          "description": "Cassiopeia lets loose an attack that deals increased damage to Poisoned targets and heals her for a percentage of the damage dealt. If the target dies from this attack, Cassiopeia regains Mana.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/CassiopeiaE.png",
          "cooldown": "0.75",
          "cost": "50/48/46/44/42",
          "range": "700"
        },
        {
          "key": "R",
          "name": "Petrifying Gaze",
          "description": "Cassiopeia releases a swirl of magical energy from her eyes, stunning any enemies in front of her that are facing her and slowing any others with their back turned.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/CassiopeiaR.png",
          "cooldown": "120/100/80",
          "cost": "100",
          "range": "825"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "chogath",
      "name": "Cho'Gath",
      "fullName": "Cho'Gath, the Terror of the Void",
      "icon": "👹",
      "role": "Đỡ Đòn",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg",
      "gender": "Quái vật",
      "species": "Sinh Vật Hư Không",
      "age": "Không rõ",
      "weapon": "Magic",
      "weaponSummary": "Void Spikes - Gai hư không",
      "releaseDate": "2010",
      "lore": "From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts matter into new bodily growth—increasing its muscle mass and density, or hardening its outer carapace like organic diamond. When growing larger does not suit the Void-spawn's needs, it vomits out the excess material as razor-sharp spines, leaving prey skewered and ready to feast upon later.",
      "fullLore": "From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts matter into new bodily growth—increasing its muscle mass and density, or hardening its outer carapace like organic diamond. When growing larger does not suit the Void-spawn's needs, it vomits out the excess material as razor-sharp spines, leaving prey skewered and ready to feast upon later.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Carnivore",
          "description": "Whenever Cho'Gath kills a unit, he recovers Health and Mana. The values restored increase with Cho'Gath's level.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/GreenTerror_TailSpike.png"
        },
        {
          "key": "Q",
          "name": "Rupture",
          "description": "Ruptures the ground at target location, popping enemy units into the air, dealing damage and slowing them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/Rupture.png",
          "cooldown": "6",
          "cost": "50",
          "range": "950"
        },
        {
          "key": "W",
          "name": "Feral Scream",
          "description": "Cho'Gath unleashes a terrible scream at enemies in a cone, dealing magic damage and Silencing enemies for a few seconds.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/FeralScream.png",
          "cooldown": "13/12/11/10/9",
          "cost": "70/75/80/85/90",
          "range": "300"
        },
        {
          "key": "E",
          "name": "Vorpal Spikes",
          "description": "Cho'Gath's attacks release deadly spikes, dealing damage and slowing all enemy units in front of him.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VorpalSpikes.png",
          "cooldown": "8/7/6/5/4",
          "cost": "30",
          "range": "40"
        },
        {
          "key": "R",
          "name": "Feast",
          "description": "Devours an enemy unit, dealing a high amount of true damage. If the target is killed, Cho'Gath grows, gaining maximum Health.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/Feast.png",
          "cooldown": "80/70/60",
          "cost": "100",
          "range": "175"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "ekko",
      "name": "Ekko",
      "fullName": "Ekko, the Boy Who Shattered Time",
      "icon": "⏰",
      "role": "Sát Thủ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "16-17 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Z-Drive - Thiết bị điều khiển thời gian",
      "releaseDate": "2015",
      "lore": "A prodigy from the rough streets of Zaun, Ekko is able to manipulate time to twist any situation to his advantage. He uses his own invention, the Z-Drive, to explore the branching possibilities of reality, crafting the perfect moment to seemingly achieve the impossible the first time, every time. Though Ekko revels in this freedom, when there's a threat to those he cares about, he and the Firelights will do anything to defend them.",
      "fullLore": "A prodigy from the rough streets of Zaun, Ekko is able to manipulate time to twist any situation to his advantage. He uses his own invention, the Z-Drive, to explore the branching possibilities of reality, crafting the perfect moment to seemingly achieve the impossible the first time, every time. Though Ekko revels in this freedom, when there's a threat to those he cares about, he and the Firelights will do anything to defend them.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Z-Drive Resonance",
          "description": "Every third attack or damaging spell on the same target deals bonus magic damage, and grants Ekko a burst of speed if the target is a champion.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Ekko_P.png"
        },
        {
          "key": "Q",
          "name": "Timewinder",
          "description": "Ekko throws a temporal grenade that expands into a time-distortion field upon hitting an enemy champion, slowing and damaging anyone caught inside. After a delay, the grenade rewinds back to Ekko, dealing damage on its return.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/EkkoQ.png",
          "cooldown": "9/8.5/8/7.5/7",
          "cost": "50/60/70/80/90",
          "range": "1075"
        },
        {
          "key": "W",
          "name": "Parallel Convergence",
          "description": "Ekko's basic attacks deal bonus magic damage to low health enemies. He can cast Parallel Convergence to split the timeline, creating an anomaly after a few seconds that slows enemies caught inside. If Ekko enters the anomaly, he gains shielding and stuns enemies by suspending them in time.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/EkkoW.png",
          "cooldown": "22/20/18/16/14",
          "cost": "30/35/40/45/50",
          "range": "1600"
        },
        {
          "key": "E",
          "name": "Phase Dive",
          "description": "Ekko rolls evasively while charging up his Z-Drive. His next attack deals bonus damage and warps reality, teleporting him to his target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/EkkoE.png",
          "cooldown": "9/8.5/8/7.5/7",
          "cost": "40/45/50/55/60",
          "range": "325"
        },
        {
          "key": "R",
          "name": "Chronobreak",
          "description": "Ekko shatters his timeline, becoming untargetable and rewinding to a more favorable point in time. He returns to whenever he was a few seconds ago, and heals for a percentage of the damage received in that duration. Enemies near his arrival zone take massive damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/EkkoR.png",
          "cooldown": "110/80/50",
          "cost": "100",
          "range": "850"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "elise",
      "name": "Elise",
      "fullName": "Elise, the Spider Queen",
      "icon": "🕷️",
      "role": "Sát Thủ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "1000+ tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Spider Form - Hình dạng nhện",
      "releaseDate": "2012",
      "lore": "Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once mortal, she was the mistress of a powerful house, but the bite of a vile demigod transformed her into something beautiful, yet utterly inhuman—a spider-like creature, drawing unsuspecting prey into her web. To maintain her eternal youth, Elise now prefers to feed upon the naive and the faithless, and there are few who can resist her seductions.",
      "fullLore": "Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once mortal, she was the mistress of a powerful house, but the bite of a vile demigod transformed her into something beautiful, yet utterly inhuman—a spider-like creature, drawing unsuspecting prey into her web. To maintain her eternal youth, Elise now prefers to feed upon the naive and the faithless, and there are few who can resist her seductions.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Spider Queen",
          "description": "Human Form: When Elise's abilities hit an enemy, she gains a dormant Spiderling.Spider Form: Basic attacks deal bonus magic damage and restore health to Elise.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/ElisePassive.png"
        },
        {
          "key": "Q",
          "name": "Neurotoxin / Venomous Bite",
          "description": "Human Form: Deals damage based upon how high the target's Health is.Spider Form: Lunges at an enemy and deals damage based upon how low their Health is.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/EliseHumanQ.png",
          "cooldown": "6",
          "cost": "80/85/90/95/100",
          "range": "615"
        },
        {
          "key": "W",
          "name": "Volatile Spiderling / Skittering Frenzy",
          "description": "Human Form: Releases a venom-gorged Spiderling that explodes when it nears a target.Spider Form: Elise and her Spiderlings gain Attack Speed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/EliseHumanW.png",
          "cooldown": "12",
          "cost": "60/70/80/90/100",
          "range": "950"
        },
        {
          "key": "E",
          "name": "Cocoon / Rappel",
          "description": "Human Form: Stuns the first enemy unit hit and reveals them if they are not stealthed.Spider Form: Elise and her Spiderlings ascend into the air and then descend upon target enemy. After descending on an enemy target, Elise's bonus damage and healing from Spider Queen is increased.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/EliseHumanE.png",
          "cooldown": "12/11.5/11/10.5/10",
          "cost": "50",
          "range": "1075"
        },
        {
          "key": "R",
          "name": "Spider Form",
          "description": "Transforms into a menacing spider, reducing her attack range in exchange for Move Speed, new abilities, and a Spiderling swarm that will attack her foes.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/EliseR.png",
          "cooldown": "4",
          "cost": "0",
          "range": "20"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "fiora",
      "name": "Fiora",
      "fullName": "Fiora, the Grand Duelist",
      "icon": "⚔️",
      "role": "Đấu Sĩ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "25-28 tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Durand Blade - Kiếm Durand",
      "releaseDate": "2012",
      "lore": "The most feared duelist in all Valoran, Fiora is as renowned for her brusque manner and cunning mind as she is for the speed of her bluesteel rapier. Born to House Laurent in the kingdom of Demacia, Fiora took control of the family from her father in the wake of a scandal that nearly destroyed them. House Laurent's reputation was sundered, but Fiora bends her every effort to restore her family's honor and return them to their rightful place among the great and good of Demacia.",
      "fullLore": "The most feared duelist in all Valoran, Fiora is as renowned for her brusque manner and cunning mind as she is for the speed of her bluesteel rapier. Born to House Laurent in the kingdom of Demacia, Fiora took control of the family from her father in the wake of a scandal that nearly destroyed them. House Laurent's reputation was sundered, but Fiora bends her every effort to restore her family's honor and return them to their rightful place among the great and good of Demacia.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Duelist's Dance",
          "description": "Fiora has revealed a Vital on this Champion. If she hits the Vital, she restores Health and gains Move Speed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Fiora_P.png"
        },
        {
          "key": "Q",
          "name": "Lunge",
          "description": "Fiora lunges in a direction and stabs a nearby enemy, dealing physical damage and applying on-hit effects.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/FioraQ.png",
          "cooldown": "13/11.25/9.5/7.75/6",
          "cost": "20/25/30/35/40",
          "range": "400"
        },
        {
          "key": "W",
          "name": "Riposte",
          "description": "Fiora parries all incoming damage and disables for a short time, then stabs in a direction. This stab slows the first enemy champion hit, or stuns them if Fiora blocked an immobilizing effect with this ability.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/FioraW.png",
          "cooldown": "24/22/20/18/16",
          "cost": "50",
          "range": "750"
        },
        {
          "key": "E",
          "name": "Bladework",
          "description": "Fiora has increased attack speed for the next two attacks. The first attack slows the target, and the second attack will critically strike.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/FioraE.png",
          "cooldown": "11/10/9/8/7",
          "cost": "40",
          "range": "425"
        },
        {
          "key": "R",
          "name": "Grand Challenge",
          "description": "Fiora reveals all four Vitals on an enemy champion and gains Move Speed while near them. If Fiora hits all four Vitals or if the target dies after she has hit at least one, Fiora and her allies in the area are healed over the next few seconds.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/FioraR.png",
          "cooldown": "110/90/70",
          "cost": "100",
          "range": "500"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "fizz",
      "name": "Fizz",
      "fullName": "Fizz, the Tidal Trickster",
      "icon": "🐟",
      "role": "Sát Thủ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg",
      "gender": "Nam",
      "species": "Yordle",
      "age": "100+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Trident - Đinh ba",
      "releaseDate": "2011",
      "lore": "Fizz is an amphibious yordle, who dwells among the reefs surrounding Bilgewater. He often retrieves and returns the tithes cast into the sea by superstitious captains, but even the saltiest of sailors know better than to cross him—for many are the tales of those who have underestimated this slippery character. Often mistaken for some manner of capricious ocean spirit, he seems able to command the beasts of the deep, and delights in confounding his allies and enemies alike.",
      "fullLore": "Fizz is an amphibious yordle, who dwells among the reefs surrounding Bilgewater. He often retrieves and returns the tithes cast into the sea by superstitious captains, but even the saltiest of sailors know better than to cross him—for many are the tales of those who have underestimated this slippery character. Often mistaken for some manner of capricious ocean spirit, he seems able to command the beasts of the deep, and delights in confounding his allies and enemies alike.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Nimble Fighter",
          "description": "Fizz can move through units and takes a flat amount of reduced damage from all sources",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Fizz_P.png"
        },
        {
          "key": "Q",
          "name": "Urchin Strike",
          "description": "Fizz dashes through his target, dealing magic damage and applying on hit effects.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/FizzQ.png",
          "cooldown": "8/7.5/7/6.5/6",
          "cost": "50",
          "range": "550"
        },
        {
          "key": "W",
          "name": "Seastone Trident",
          "description": "Fizz's attacks bleed his enemies, dealing magic damage over several seconds. Fizz can empower his next attack to deal bonus damage and empower his further attacks for a short time.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/FizzW.png",
          "cooldown": "7/6.5/6/5.5/5",
          "cost": "30/40/50/60/70",
          "range": "600"
        },
        {
          "key": "E",
          "name": "Playful / Trickster",
          "description": "Fizz hops into the air, landing gracefully upon his spear and becoming untargetable. From this position, Fizz can either slam the ground or choose to jump again before smashing back down.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/FizzE.png",
          "cooldown": "16/14/12/10/8",
          "cost": "75/80/85/90/95",
          "range": "400"
        },
        {
          "key": "R",
          "name": "Chum the Waters",
          "description": "Fizz tosses a fish in a direction that attaches to any champion that touches it, slowing the target. After a short delay, a shark erupts from the ground, knocking up the target and knocking any nearby enemies aside. All enemies hit are dealt magic damage and slowed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/FizzR.png",
          "cooldown": "100/85/70",
          "cost": "100",
          "range": "1300"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "galio",
      "name": "Galio",
      "fullName": "Galio, the Colossus",
      "icon": "🗿",
      "role": "Đỡ Đòn",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "1000+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Petricite Body - Cơ thể đá Petricite",
      "releaseDate": "2010",
      "lore": "Outside the gleaming city of Demacia, the stone colossus Galio keeps vigilant watch. Built as a bulwark against enemy mages, he often stands motionless for decades until the presence of powerful magic stirs him to life. Once activated, Galio makes the most of his time, savoring the thrill of a fight and the rare honor of defending his countrymen. But his triumphs are always bittersweet, for the magic he destroys is also his source of reanimation, and each victory leaves him dormant once again.",
      "fullLore": "Outside the gleaming city of Demacia, the stone colossus Galio keeps vigilant watch. Built as a bulwark against enemy mages, he often stands motionless for decades until the presence of powerful magic stirs him to life. Once activated, Galio makes the most of his time, savoring the thrill of a fight and the rare honor of defending his countrymen. But his triumphs are always bittersweet, for the magic he destroys is also his source of reanimation, and each victory leaves him dormant once again.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Colossal Smash",
          "description": "Every few seconds, Galio's next basic attack deals bonus magic damage in an area.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Galio_Passive.png"
        },
        {
          "key": "Q",
          "name": "Winds of War",
          "description": "Galio fires two windblasts that converge into a large tornado that deals damage over time.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GalioQ.png",
          "cooldown": "12/11/10/9/8",
          "cost": "70/75/80/85/90",
          "range": "825"
        },
        {
          "key": "W",
          "name": "Shield of Durand",
          "description": "Galio charges a defensive stance, moving slowly. Upon releasing the charge, Galio will taunt and damage nearby enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GalioW.png",
          "cooldown": "18/17/16/15/14",
          "cost": "50",
          "range": "275"
        },
        {
          "key": "E",
          "name": "Justice Punch",
          "description": "Galio will briefly step back and charge, knocking up the first enemy champion he encounters.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GalioE.png",
          "cooldown": "11/10/9/8/7",
          "cost": "50",
          "range": "650"
        },
        {
          "key": "R",
          "name": "Hero's Entrance",
          "description": "Galio designates an ally's position as his landing spot, granting all allies in the area a magic shield. After a delay Galio smashes down location, knocking up nearby enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GalioR.png",
          "cooldown": "180/160/140",
          "cost": "100",
          "range": "4000/4750/5500"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "garen",
      "name": "Garen",
      "fullName": "Garen, The Might of Demacia",
      "icon": "🛡️",
      "role": "Đấu Sĩ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "25-30 tuổi",
      "weapon": "Sword",
      "weaponSummary": "Demacian Steel Sword - Kiếm thép Demacia",
      "releaseDate": "Không rõ",
      "lore": "A proud and noble warrior, Garen fights as one of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its ideals. Clad in magic-resistant armor and bearing a mighty broadsword, Garen stands ready to confront mages and sorcerers on the field of battle, in a veritable whirlwind of righteous steel.",
      "fullLore": "A proud and noble warrior, Garen fights as one of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its ideals. Clad in magic-resistant armor and bearing a mighty broadsword, Garen stands ready to confront mages and sorcerers on the field of battle, in a veritable whirlwind of righteous steel.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Perseverance",
          "description": "If Garen has not recently been struck by damage or enemy abilities, he regenerates a percentage of his total health each second.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Garen_Passive.png"
        },
        {
          "key": "Q",
          "name": "Decisive Strike",
          "description": "Garen gains a burst of Move Speed, breaking free of all slows affecting him. His next attack strikes a vital area of his foe, dealing bonus damage and silencing them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GarenQ.png",
          "cooldown": "8",
          "cost": "0",
          "range": "300"
        },
        {
          "key": "W",
          "name": "Courage",
          "description": "Garen passively increases his armor and magic resist by killing enemies. He may also activate this ability to give him a shield and tenacity for a brief moment followed by a lesser amount of damage reduction for a longer duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GarenW.png",
          "cooldown": "23/21/19/17/15",
          "cost": "0",
          "range": "0"
        },
        {
          "key": "E",
          "name": "Judgment",
          "description": "Garen rapidly spins his sword around his body, dealing physical damage to nearby enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GarenE.png",
          "cooldown": "9",
          "cost": "0",
          "range": "325"
        },
        {
          "key": "R",
          "name": "Demacian Justice",
          "description": "Garen calls upon the might of Demacia to attempt to execute an enemy champion.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GarenR.png",
          "cooldown": "120/100/80",
          "cost": "0",
          "range": "400"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "gnar",
      "name": "Gnar",
      "fullName": "Gnar, the Missing Link",
      "icon": "🦴",
      "role": "Đấu Sĩ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg",
      "gender": "Nam",
      "species": "Yordle",
      "age": "10000+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Boomerang - Boomerang",
      "releaseDate": "2014",
      "lore": "Gnar is a primeval yordle whose playful antics can erupt into a toddler's outrage in an instant, transforming him into a massive beast bent on destruction. Frozen in True Ice for millennia, the curious creature broke free and now hops about a changed world he sees as exotic and wondrous. Delighted by danger, Gnar flings whatever he can at his enemies, be it his bonetooth boomerang, or a nearby building.",
      "fullLore": "Gnar is a primeval yordle whose playful antics can erupt into a toddler's outrage in an instant, transforming him into a massive beast bent on destruction. Frozen in True Ice for millennia, the curious creature broke free and now hops about a changed world he sees as exotic and wondrous. Delighted by danger, Gnar flings whatever he can at his enemies, be it his bonetooth boomerang, or a nearby building.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Rage Gene",
          "description": "While in combat Gnar generates Rage. At maximum Rage his next ability will transform him into Mega Gnar, granting increased survivability and access to new spells.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Gnar_Passive.png"
        },
        {
          "key": "Q",
          "name": "Boomerang Throw / Boulder Toss",
          "description": "Gnar throws a boomerang that damages and slows enemies it hits before returning to him. If he catches the boomerang its cooldown is reduced.Mega Gnar instead throws a boulder that stops on the first unit hit, damaging and slowing everything nearby. It can then be picked up to reduce the cooldown.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GnarQ.png",
          "cooldown": "20/17.5/15/12.5/10",
          "cost": "0",
          "range": "1100"
        },
        {
          "key": "W",
          "name": "Hyper / Wallop",
          "description": "Gnar's attacks and spells hype him up, dealing bonus damage and granting him Move Speed.Mega Gnar is too enraged to be hyper and instead can rear up on his hind legs and smash down on the area in front of him, stunning enemies in an area.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GnarW.png",
          "cooldown": "7",
          "cost": "0",
          "range": "0"
        },
        {
          "key": "E",
          "name": "Hop / Crunch",
          "description": "Gnar leaps to a location and bounces off the head of any unit he lands on, traveling further.Mega Gnar is too large to bounce and instead lands with earth-shattering force, dealing damage in an area around him.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GnarE.png",
          "cooldown": "22/19.5/17/14.5/12",
          "cost": "0",
          "range": "475"
        },
        {
          "key": "R",
          "name": "GNAR!",
          "description": "Mega Gnar throws everything around him in a chosen direction, dealing damage and slowing them.  Any enemy that hits a wall is stunned and takes bonus damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/GnarR.png",
          "cooldown": "90/60/30",
          "cost": "0",
          "range": "590"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "hwei",
      "name": "Hwei",
      "fullName": "Hwei, the Visionary",
      "icon": "⚔️",
      "role": "Pháp Sư",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hwei_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "Không rõ",
      "weapon": "Unknown",
      "weaponSummary": "Unknown",
      "releaseDate": "2023",
      "lore": "Hwei is a brooding painter who creates brilliant art in order to confront Ionia's criminals and comfort their victims. Beneath his melancholy roils a torn, emotional mind—haunted by both the vibrant visions of his imagination and the gruesome memories of his temple's massacre. Hwei seeks to understand this light and dark, which drives him inevitably toward the artist who unraveled him. With paintbrush and palette, Hwei shapes endless possibilities as he draws ever closer to earning closure or embracing despair.",
      "fullLore": "Hwei is a brooding painter who creates brilliant art in order to confront Ionia's criminals and comfort their victims. Beneath his melancholy roils a torn, emotional mind—haunted by both the vibrant visions of his imagination and the gruesome memories of his temple's massacre. Hwei seeks to understand this light and dark, which drives him inevitably toward the artist who unraveled him. With paintbrush and palette, Hwei shapes endless possibilities as he draws ever closer to earning closure or embracing despair.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Signature of the Visionary",
          "description": "Hwei primes enemy champions he damages with his abilities for his signature finishing touch.Hitting an enemy with a second damaging spell completes his signature, leaving it beneath them. The signature detonates after a short delay, dealing magic damage to all enemies in range.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/HweiPassive.png"
        },
        {
          "key": "Q",
          "name": "Subject: Disaster",
          "description": "Hwei envisions a series of disasters, allowing him to paint a devastating blow.This ability replaces Hwei's abilities with damaging abilities: Devastating Fire, Severing Bolt, and Molten Fissure.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/HweiQ.png",
          "cooldown": "10/9/8/7/6",
          "cost": "80/90/100/110/120",
          "range": "0"
        },
        {
          "key": "W",
          "name": "Subject: Serenity",
          "description": "Hwei envisions a series of serenities, allowing him to paint invigorating settings.This ability replaces Hwei's abilities with utility abilities: Fleeting Current, Pool of Reflection, and Stirring Lights.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/HweiW.png",
          "cooldown": "18/17.5/17/16.5/16",
          "cost": "90/95/100/105/110",
          "range": "0"
        },
        {
          "key": "E",
          "name": "Subject: Torment",
          "description": "Hwei envisions a series of torments, allowing him to paint controlling visages.This ability replaces Hwei's abilities with crowd control abilities: Grim Visage, Gaze of the Abyss, and Crushing Maw.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/HweiE.png",
          "cooldown": "15/14/13/12/11",
          "cost": "50/55/60/65/70",
          "range": "0"
        },
        {
          "key": "R",
          "name": "Spiraling Despair",
          "description": "Hwei paints a vision of pure despair. The first enemy champion struck becomes the center of an expanding painting that slows and damages nearby enemies. The vision explodes after reaching its maximum size or when the champion dies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/HweiR.png",
          "cooldown": "140/115/80",
          "cost": "100",
          "range": "1300"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "jarvaniv",
      "name": "Jarvan IV",
      "fullName": "Jarvan IV, the Exemplar of Demacia",
      "icon": "👑",
      "role": "Đấu Sĩ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "25-30 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Dragon Lance - Giáo rồng",
      "releaseDate": "2011",
      "lore": "Prince Jarvan, scion of the Lightshield dynasty, is heir apparent to the throne of Demacia. Raised to be a paragon of his nation's greatest virtues, he is forced to balance the heavy expectations placed upon him with his own desire to fight on the front lines. Jarvan inspires his troops with his fearsome courage and selfless determination, raising his family's colors high and revealing his true strength as a future leader of his people.",
      "fullLore": "Prince Jarvan, scion of the Lightshield dynasty, is heir apparent to the throne of Demacia. Raised to be a paragon of his nation's greatest virtues, he is forced to balance the heavy expectations placed upon him with his own desire to fight on the front lines. Jarvan inspires his troops with his fearsome courage and selfless determination, raising his family's colors high and revealing his true strength as a future leader of his people.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Martial Cadence",
          "description": "Jarvan's first basic attack on an enemy deals bonus physical damage based on their current Health. This effect cannot occur again on the same enemy for a few seconds.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/JarvanIVP.png"
        },
        {
          "key": "Q",
          "name": "Dragon Strike",
          "description": "Jarvan IV extends his lance, dealing physical damage and lowering the Armor of enemies in its path. Additionally, this will pull Jarvan to his Demacian Standard, knocking up enemies in his path.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JarvanIVDragonStrike.png",
          "cooldown": "10/9.5/9/8.5/8",
          "cost": "45/50/55/60/65",
          "range": "770"
        },
        {
          "key": "W",
          "name": "Golden Aegis",
          "description": "Jarvan IV calls upon the ancient kings of Demacia to shield him from harm and slow surrounding enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JarvanIVGoldenAegis.png",
          "cooldown": "9",
          "cost": "30",
          "range": "625"
        },
        {
          "key": "E",
          "name": "Demacian Standard",
          "description": "Jarvan IV carries the pride of Demacia, passively granting him bonus Attack Speed. Activating Demacian Standard allows Jarvan IV to place a Demacian flag that deals magic damage on impact and grants Attack Speed to nearby allied champions.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JarvanIVDemacianStandard.png",
          "cooldown": "12/11.5/11/10.5/10",
          "cost": "55",
          "range": "860"
        },
        {
          "key": "R",
          "name": "Cataclysm",
          "description": "Jarvan IV heroically leaps into battle at a target with such force that he terraforms the surrounding area to create an arena around them. Nearby enemies are damaged at the moment of impact.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JarvanIVCataclysm.png",
          "cooldown": "120/105/90",
          "cost": "100",
          "range": "650"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "jax",
      "name": "Jax",
      "fullName": "Jax, Grandmaster at Arms",
      "icon": "🥊",
      "role": "Đấu Sĩ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg",
      "gender": "Nam",
      "species": "Sinh Vật Hư Không",
      "age": "1000+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Lamppost - Cột đèn",
      "releaseDate": "2009",
      "lore": "Unmatched in both his skill with unique armaments and his biting sarcasm, Jax is the last known weapons master of Icathia. After his homeland was laid low by its own hubris in unleashing the Void, Jax and his kind vowed to protect what little remained. As magic now rises in the world, this slumbering threat stirs once more, and Jax roams Valoran, wielding the last light of Icathia and testing all warriors he meets to see if any are strong enough to stand beside him...",
      "fullLore": "Unmatched in both his skill with unique armaments and his biting sarcasm, Jax is the last known weapons master of Icathia. After his homeland was laid low by its own hubris in unleashing the Void, Jax and his kind vowed to protect what little remained. As magic now rises in the world, this slumbering threat stirs once more, and Jax roams Valoran, wielding the last light of Icathia and testing all warriors he meets to see if any are strong enough to stand beside him...",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Relentless Assault",
          "description": "Jax's consecutive basic attacks continuously increase his Attack Speed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Armsmaster_MasterOfArms.png"
        },
        {
          "key": "Q",
          "name": "Leap Strike",
          "description": "Jax leaps toward a unit. If they are an enemy, he strikes them with his weapon.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JaxQ.png",
          "cooldown": "8/7.5/7/6.5/6",
          "cost": "65",
          "range": "700"
        },
        {
          "key": "W",
          "name": "Empower",
          "description": "Jax charges his weapon with energy, causing his next attack to deal additional damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JaxW.png",
          "cooldown": "7/6/5/4/3",
          "cost": "30",
          "range": "300"
        },
        {
          "key": "E",
          "name": "Counter Strike",
          "description": "Jax's combat prowess allows him to dodge all incoming attacks for a short duration and then quickly counterattack, stunning all surrounding enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JaxE.png",
          "cooldown": "15/13.5/12/10.5/9",
          "cost": "50/60/70/80/90",
          "range": "300"
        },
        {
          "key": "R",
          "name": "Grandmaster-at-Arms",
          "description": "Every third consecutive attack deals additional Magic Damage. Additionally, Jax can activate this ability to deal damage around himself and strengthen his resolve, increasing his Armor and Magic Resist for a short duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JaxR.png",
          "cooldown": "100/90/80",
          "cost": "100",
          "range": "260"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "karma",
      "name": "Karma",
      "fullName": "Karma, the Enlightened One",
      "icon": "☯️",
      "role": "Pháp Sư",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg",
      "gender": "Nữ",
      "species": "Hồn Ma",
      "age": "40-45 tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Fans - Quạt ma thuật",
      "releaseDate": "2011",
      "lore": "No mortal exemplifies the spiritual traditions of Ionia more than Karma. She is the living embodiment of an ancient soul reincarnated countless times, carrying all her accumulated memories into each new life, and blessed with power that few can comprehend. She has done her best to guide her people in recent times of crisis, though she knows that peace and harmony may come only at a considerable cost—both to her, and to the land she holds most dear.",
      "fullLore": "No mortal exemplifies the spiritual traditions of Ionia more than Karma. She is the living embodiment of an ancient soul reincarnated countless times, carrying all her accumulated memories into each new life, and blessed with power that few can comprehend. She has done her best to guide her people in recent times of crisis, though she knows that peace and harmony may come only at a considerable cost—both to her, and to the land she holds most dear.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Gathering Fire",
          "description": "Karma's damaging abilities will reduce the cooldown of Mantra.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Karma_Passive.png"
        },
        {
          "key": "Q",
          "name": "Inner Flame",
          "description": "Karma sends forth a ball of spirit energy that explodes and deals damage upon hitting an enemy unit.Mantra Bonus: In addition to the explosion, Mantra increases the destructive power of her Inner Flame, creating a cataclysm which deals damage after a short delay.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KarmaQ.png",
          "cooldown": "9/8/7/6/5",
          "cost": "45",
          "range": "950"
        },
        {
          "key": "W",
          "name": "Focused Resolve",
          "description": "Karma creates a tether between herself and a targeted enemy, dealing damage and revealing them. If the tether is not broken, the enemy will be rooted and damaged again.Mantra Bonus: Karma strengthens the link, healing herself and extending the root duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KarmaSpiritBind.png",
          "cooldown": "12",
          "cost": "50/55/60/65/70",
          "range": "675"
        },
        {
          "key": "E",
          "name": "Inspire",
          "description": "Karma summons a protective shield that absorbs incoming damage and increases the Move Speed of the protected ally.Mantra Bonus: Energy radiates out from her target, strengthening the initial shield and applying Inspire to nearby allied champions.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KarmaSolKimShield.png",
          "cooldown": "10/9.5/9/8.5/8",
          "cost": "50/55/60/65/70",
          "range": "800"
        },
        {
          "key": "R",
          "name": "Mantra",
          "description": "Karma empowers her next ability to do an additional effect. Mantra is available at level 1 and does not require a skill point.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KarmaMantra.png",
          "cooldown": "40/37/34/31",
          "cost": "0",
          "range": "1100"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "kayle",
      "name": "Kayle",
      "fullName": "Kayle, the Righteous",
      "icon": "👼",
      "role": "Pháp Sư",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg",
      "gender": "Nữ",
      "species": "Thiên Thể",
      "age": "4000+ tuổi",
      "weapon": "Sword",
      "weaponSummary": "Virtue - Kiếm thiêng",
      "releaseDate": "2009",
      "lore": "Born to a Targonian Aspect at the height of the Rune Wars, Kayle honored her mother's legacy by fighting for justice on wings of divine flame. She and her twin sister Morgana were the protectors of Demacia for many years—until Kayle became disillusioned with the repeated failings of mortals, and abandoned this realm altogether. Still, legends are told of her punishing the unjust with her fiery swords, and many hope that she will one day return…",
      "fullLore": "Born to a Targonian Aspect at the height of the Rune Wars, Kayle honored her mother's legacy by fighting for justice on wings of divine flame. She and her twin sister Morgana were the protectors of Demacia for many years—until Kayle became disillusioned with the repeated failings of mortals, and abandoned this realm altogether. Still, legends are told of her punishing the unjust with her fiery swords, and many hope that she will one day return…",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Divine Ascent",
          "description": "Kayle's attacks are empowered by the heavens as she levels up and spends skill points. Her wings are lit aflame as she progressively gains Attack Speed, Move Speed, Attack Range, and waves of fire on her attacks.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Kayle_P.png"
        },
        {
          "key": "Q",
          "name": "Radiant Blast",
          "description": "Kayle conjures a portal, summoning a celestial sword that pierces through enemies, slowing, damaging, and reducing the resistances of all hit.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KayleQ.png",
          "cooldown": "12/11/10/9/8",
          "cost": "70/75/80/85/90",
          "range": "900"
        },
        {
          "key": "W",
          "name": "Celestial Blessing",
          "description": "Blessed by the divine, Kayle heals and grants Move Speed to herself and the nearest ally.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KayleW.png",
          "cooldown": "15",
          "cost": "90/100/110/120/130",
          "range": "900"
        },
        {
          "key": "E",
          "name": "Starfire Spellblade",
          "description": "Passive: Kayle's celestial sword, Virtue, deals bonus magic damage to enemies she attacks.Active: Kayle's next attack smites her target with celestial fire, dealing bonus damage proportionate to their missing health.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KayleE.png",
          "cooldown": "8/7.5/7/6.5/6",
          "cost": "0",
          "range": "550"
        },
        {
          "key": "R",
          "name": "Divine Judgment",
          "description": "Kayle makes an ally invulnerable and calls upon former Aspects of Justice to purify the area around her target with a holy rain of swords.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KayleR.png",
          "cooldown": "160/120/80",
          "cost": "100/50/0",
          "range": "900"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "kennen",
      "name": "Kennen",
      "fullName": "Kennen, the Heart of the Tempest",
      "icon": "⚡",
      "role": "Pháp Sư",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg",
      "gender": "Nam",
      "species": "Yordle",
      "age": "200+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Shuriken - Phi tiêu",
      "releaseDate": "2010",
      "lore": "More than just the lightning-quick enforcer of Ionian balance, Kennen is the only yordle member of the Kinkou. Despite his small, furry stature, he is eager to take on any threat with a whirling storm of shuriken and boundless enthusiasm. Alongside his master Shen, Kennen patrols the spirit realm, employing devastating electrical energy to strike down his enemies.",
      "fullLore": "More than just the lightning-quick enforcer of Ionian balance, Kennen is the only yordle member of the Kinkou. Despite his small, furry stature, he is eager to take on any threat with a whirling storm of shuriken and boundless enthusiasm. Alongside his master Shen, Kennen patrols the spirit realm, employing devastating electrical energy to strike down his enemies.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Mark of the Storm",
          "description": "Kennen stuns enemies he hits 3 times with his abilities.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Kennen_Passive.png"
        },
        {
          "key": "Q",
          "name": "Thundering Shuriken",
          "description": "Kennen throws a fast moving shuriken towards a location, causing damage and adding a Mark of the Storm to any opponent that it hits.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KennenShurikenHurlMissile1.png",
          "cooldown": "7/6.25/5.5/4.75/4",
          "cost": "60/55/50/45/40",
          "range": "950"
        },
        {
          "key": "W",
          "name": "Electrical Surge",
          "description": "Kennen passively deals extra damage and adds a Mark of the Storm to his target every few attacks, and he can activate this ability to damage and add another Mark of the Storm to targets who are already marked.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KennenBringTheLight.png",
          "cooldown": "13/11.25/9.5/7.75/6",
          "cost": "40",
          "range": "725"
        },
        {
          "key": "E",
          "name": "Lightning Rush",
          "description": "Kennen morphs into a lightning form, enabling him to pass through units and apply a Mark of the Storm. Kennen gains Move Speed when entering this form, and attack speed when leaving it.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KennenLightningRush.png",
          "cooldown": "10/9/8/7/6",
          "cost": "80",
          "range": "200"
        },
        {
          "key": "R",
          "name": "Slicing Maelstrom",
          "description": "Kennen summons a storm that strikes at nearby enemy champions for magical damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/KennenShurikenStorm.png",
          "cooldown": "120/100/80",
          "cost": "0",
          "range": "550"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "leona",
      "name": "Leona",
      "fullName": "Leona, the Radiant Dawn",
      "icon": "☀️",
      "role": "Đỡ Đòn",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg",
      "gender": "Nữ",
      "species": "Thiên Thể",
      "age": "25-30 tuổi",
      "weapon": "Sword",
      "weaponSummary": "Zenith Blade and Shield - Kiếm và khiên mặt trời",
      "releaseDate": "2011",
      "lore": "Imbued with the fire of the sun, Leona is a holy warrior of the Solari who defends Mount Targon with her Zenith Blade and the Shield of Daybreak. Her skin shimmers with starfire while her eyes burn with the power of the celestial Aspect within her. Armored in gold and bearing a terrible burden of ancient knowledge, Leona brings enlightenment to some, death to others.",
      "fullLore": "Imbued with the fire of the sun, Leona is a holy warrior of the Solari who defends Mount Targon with her Zenith Blade and the Shield of Daybreak. Her skin shimmers with starfire while her eyes burn with the power of the celestial Aspect within her. Armored in gold and bearing a terrible burden of ancient knowledge, Leona brings enlightenment to some, death to others.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Sunlight",
          "description": "Damaging spells afflict enemies with Sunlight for 1.5 seconds. When allied Champions deal damage to those targets, they consume the Sunlight to deal additional magic damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/LeonaSunlight.png"
        },
        {
          "key": "Q",
          "name": "Shield of Daybreak",
          "description": "Leona uses her shield to perform her next basic attack, dealing bonus magic damage and stunning the target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LeonaShieldOfDaybreak.png",
          "cooldown": "5",
          "cost": "35/40/45/50/55",
          "range": "100"
        },
        {
          "key": "W",
          "name": "Eclipse",
          "description": "Leona raises her shield to gain Damage Reduction, Armor, and Magic Resist. When the duration first ends, if there are nearby enemies, she will deal magic damage to them and prolong the duration of the effect.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LeonaSolarBarrier.png",
          "cooldown": "14/13/12/11/10",
          "cost": "60",
          "range": "450"
        },
        {
          "key": "E",
          "name": "Zenith Blade",
          "description": "Leona projects a solar image of her sword, dealing magic damage to all enemies in a line. When the image fades, the last enemy champion struck will be briefly immobilized and Leona will dash to them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LeonaZenithBlade.png",
          "cooldown": "12/10.5/9/7.5/6",
          "cost": "60",
          "range": "875"
        },
        {
          "key": "R",
          "name": "Solar Flare",
          "description": "Leona calls down a beam of solar energy, dealing damage to enemies in an area. Enemies in the center of the area are stunned, while enemies on the outside are slowed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LeonaSolarFlare.png",
          "cooldown": "90/75/60",
          "cost": "100",
          "range": "1200"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "lucian",
      "name": "Lucian",
      "fullName": "Lucian, the Purifier",
      "icon": "🔫",
      "role": "Xạ Thủ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg",
      "gender": "Nam",
      "species": "Bất Tử",
      "age": "30-35 tuổi",
      "weapon": "Gun",
      "weaponSummary": "Relic Pistols - Đôi súng di tích",
      "releaseDate": "2013",
      "lore": "Lucian, a Sentinel of Light, is a grim hunter of wraiths and specters, pursuing them relentlessly and annihilating them with his twin relic pistols. After the specter Thresh slew his wife, Lucian embarked on the path of vengeance—but even with her return to life, his rage is undiminished. Merciless and single-minded, Lucian will stop at nothing to protect the living from the long-dead horrors of the Black Mist.",
      "fullLore": "Lucian, a Sentinel of Light, is a grim hunter of wraiths and specters, pursuing them relentlessly and annihilating them with his twin relic pistols. After the specter Thresh slew his wife, Lucian embarked on the path of vengeance—but even with her return to life, his rage is undiminished. Merciless and single-minded, Lucian will stop at nothing to protect the living from the long-dead horrors of the Black Mist.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Lightslinger",
          "description": "Whenever Lucian uses an ability, his next attack becomes a double-shot. When Lucian is healed or shielded by an ally, or when a nearby enemy Champion is immobilized, his next 2 basic attacks will deal bonus magic damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Lucian_Passive.png"
        },
        {
          "key": "Q",
          "name": "Piercing Light",
          "description": "Lucian shoots a bolt of piercing light through a target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LucianQ.png",
          "cooldown": "9/8/7/6/5",
          "cost": "48/56/64/72/80",
          "range": "500"
        },
        {
          "key": "W",
          "name": "Ardent Blaze",
          "description": "Lucian shoots a missile that explodes in a star shape, marking and briefly revealing enemies. Lucian gains Move Speed for attacking marked enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LucianW.png",
          "cooldown": "14/13/12/11/10",
          "cost": "60",
          "range": "900"
        },
        {
          "key": "E",
          "name": "Relentless Pursuit",
          "description": "Lucian quickly dashes a short distance. Lightslinger attacks reduce Relentless Pursuit's cooldown.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LucianE.png",
          "cooldown": "19/17.75/16.5/15.25/14",
          "cost": "40/30/20/10/0",
          "range": "445"
        },
        {
          "key": "R",
          "name": "The Culling",
          "description": "Lucian unleashes a torrent of shots from his weapons.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LucianR.png",
          "cooldown": "110/100/90",
          "cost": "100",
          "range": "1400"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "lux",
      "name": "Lux",
      "fullName": "Lux, the Lady of Luminosity",
      "icon": "✨",
      "role": "Pháp Sư",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "20-22 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Light Magic - Ma thuật ánh sáng",
      "releaseDate": "2010",
      "lore": "Luxanna Crownguard hails from Demacia, an insular realm where magical abilities are viewed with fear and suspicion. Able to bend light to her will, she grew up dreading discovery and exile, and was forced to keep her power secret, in order to preserve her family's noble status. Nonetheless, Lux's optimism and resilience have led her to embrace her unique talents, and she now covertly wields them in service of her homeland.",
      "fullLore": "Luxanna Crownguard hails from Demacia, an insular realm where magical abilities are viewed with fear and suspicion. Able to bend light to her will, she grew up dreading discovery and exile, and was forced to keep her power secret, in order to preserve her family's noble status. Nonetheless, Lux's optimism and resilience have led her to embrace her unique talents, and she now covertly wields them in service of her homeland.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Illumination",
          "description": "Lux's damaging spells charge the target with energy for a few seconds. Lux's next attack ignites the energy, dealing bonus magic damage (depending on Lux's level) to the target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/LuxIlluminatingFraulein.png"
        },
        {
          "key": "Q",
          "name": "Light Binding",
          "description": "Lux releases a sphere of light that binds and deals damage to up to two enemy units.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LuxLightBinding.png",
          "cooldown": "11/10.5/10/9.5/9",
          "cost": "50",
          "range": "1175"
        },
        {
          "key": "W",
          "name": "Prismatic Barrier",
          "description": "Lux throws her wand and bends the light around any friendly target it touches, protecting them from enemy damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LuxPrismaticWave.png",
          "cooldown": "14/13/12/11/10",
          "cost": "60/65/70/75/80",
          "range": "1150"
        },
        {
          "key": "E",
          "name": "Lucent Singularity",
          "description": "Fires an anomaly of twisted light to an area, which slows nearby enemies. Lux can detonate it to damage enemies in the area of effect.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LuxLightStrikeKugel.png",
          "cooldown": "10/9.5/9/8.5/8",
          "cost": "70/80/90/100/110",
          "range": "1100"
        },
        {
          "key": "R",
          "name": "Final Spark",
          "description": "After gathering energy, Lux fires a beam of light that deals damage to all targets in the area. In addition, triggers Lux's passive ability and refreshes the Illumination debuff duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/LuxR.png",
          "cooldown": "60/50/40",
          "cost": "100",
          "range": "3340"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "mel",
      "name": "Mel",
      "fullName": "Mel, the Soul's Reflection",
      "icon": "⚔️",
      "role": "Pháp Sư",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mel_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "Không rõ",
      "weapon": "Magic",
      "weaponSummary": "Magic",
      "releaseDate": "Không rõ",
      "lore": "Mel Medarda is the presumed heir of the Medarda family, once one of the most powerful in Noxus. In appearance she is a graceful aristocrat, but beneath the surface lies a skilled politician who makes it her business to know everything about everyone she meets. After an encounter with the mysterious Black Rose, Mel discovered the depths of her mother's deception and, for once, faced a situation potentially beyond her control. With newly awakened magical abilities, she sailed home in search of answers—and though many still seek to temper the light within her, Mel's soul remains forever defiant.",
      "fullLore": "Mel Medarda is the presumed heir of the Medarda family, once one of the most powerful in Noxus. In appearance she is a graceful aristocrat, but beneath the surface lies a skilled politician who makes it her business to know everything about everyone she meets. After an encounter with the mysterious Black Rose, Mel discovered the depths of her mother's deception and, for once, faced a situation potentially beyond her control. With newly awakened magical abilities, she sailed home in search of answers—and though many still seek to temper the light within her, Mel's soul remains forever defiant.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "name": "Radiant Volley",
          "description": "Mel fires a barrage of projectiles that explode around a target location, dealing damage repeatedly to enemies within the area.",
          "key": "MelQ"
        },
        {
          "name": "Rebuttal",
          "description": "Mel forms a barrier around herself that reflects enemy projectiles back at the attacker, prevents her from taking damage, and grants her movement speed.",
          "key": "MelW"
        },
        {
          "name": "Solar Snare",
          "description": "Mel fires a radiant orb forward, rooting those at its center while the area around it slows enemies and deals damage over time.",
          "key": "MelE"
        },
        {
          "name": "Golden Eclipse",
          "description": "Mel strikes all enemies marked with Overwhelm regardless of their distance from her, dealing additional damage for each stack of Overwhelm.<br><br>Ranks of Golden Eclipse increase Overwhelm's damage.",
          "key": "MelR"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "morgana",
      "name": "Morgana",
      "fullName": "Morgana, the Fallen",
      "icon": "🖤",
      "role": "Pháp Sư",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg",
      "gender": "Nữ",
      "species": "Thiên Thể",
      "age": "4000+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Dark Magic - Ma thuật tối",
      "releaseDate": "2009",
      "lore": "Conflicted between her celestial and mortal natures, Morgana bound her wings to embrace humanity, and inflicts her pain and bitterness upon the dishonest and the corrupt. She rejects laws and traditions she believes are unjust, and fights for truth from the shadows of Demacia—even as others seek to repress it—by casting shields and chains of dark fire. More than anything else, Morgana truly believes that even the banished and outcast may one day rise again.",
      "fullLore": "Conflicted between her celestial and mortal natures, Morgana bound her wings to embrace humanity, and inflicts her pain and bitterness upon the dishonest and the corrupt. She rejects laws and traditions she believes are unjust, and fights for truth from the shadows of Demacia—even as others seek to repress it—by casting shields and chains of dark fire. More than anything else, Morgana truly believes that even the banished and outcast may one day rise again.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Soul Siphon",
          "description": "Morgana drains spirit from her enemies, healing as she deals damage to champions, large minions, and medium and larger jungler monsters.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/FallenAngel_Empathize.png"
        },
        {
          "key": "Q",
          "name": "Dark Binding",
          "description": "Morgana binds an enemy in place with dark magic, forcing them to feel the pain they've caused and dealing magic damage. ",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MorganaQ.png",
          "cooldown": "10",
          "cost": "50/55/60/65/70",
          "range": "1250"
        },
        {
          "key": "W",
          "name": "Tormented Shadow",
          "description": "Morgana casts a cursed shadow on an area, damaging enemies who dare stand in her dark circle. They receive magic damage over time, which increases the lower health they are.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MorganaW.png",
          "cooldown": "12",
          "cost": "70/85/100/115/130",
          "range": "900"
        },
        {
          "key": "E",
          "name": "Black Shield",
          "description": "Morgana anoints an ally with a protective barrier of starfire, which absorbs magical damage and disabling effects until it is broken.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MorganaE.png",
          "cooldown": "26/23.5/21/18.5/16",
          "cost": "80",
          "range": "800"
        },
        {
          "key": "R",
          "name": "Soul Shackles",
          "description": "Morgana unleashes the full force of her Celestial power as she unbinds her wings and hovers above the ground. She lashes chains of dark pain onto nearby enemy champions, gaining Move Speed towards them. The chains slow and deal initial damage and, after a delay, stun those who are unable to break them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/MorganaR.png",
          "cooldown": "120/110/100",
          "cost": "100",
          "range": "625"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "poppy",
      "name": "Poppy",
      "fullName": "Poppy, Keeper of the Hammer",
      "icon": "🔨",
      "role": "Đỡ Đòn",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg",
      "gender": "Nữ",
      "species": "Yordle",
      "age": "200+ tuổi",
      "weapon": "Hammer",
      "weaponSummary": "Hammer of Orlon - Búa Orlon",
      "releaseDate": "2010",
      "lore": "Runeterra has no shortage of valiant champions, but few are as tenacious as Poppy. Bearing the legendary hammer of Orlon, a weapon twice her size, this determined yordle has spent untold years searching in secret for the fabled “Hero of Demacia,” said to be its rightful wielder. Until then, she dutifully charges into battle, pushing back the kingdom's enemies with every whirling strike.",
      "fullLore": "Runeterra has no shortage of valiant champions, but few are as tenacious as Poppy. Bearing the legendary hammer of Orlon, a weapon twice her size, this determined yordle has spent untold years searching in secret for the fabled “Hero of Demacia,” said to be its rightful wielder. Until then, she dutifully charges into battle, pushing back the kingdom's enemies with every whirling strike.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Iron Ambassador",
          "description": "Poppy throws her buckler that bounces off the target. Poppy can pick it up to gain a temporary shield.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Poppy_Passive.png"
        },
        {
          "key": "Q",
          "name": "Hammer Shock",
          "description": "Poppy swings her hammer, dealing damage and creating a zone that will slow enemies and explode after a delay.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/PoppyQ.png",
          "cooldown": "8/7/6/5/4",
          "cost": "35/40/45/50/55",
          "range": "430"
        },
        {
          "key": "W",
          "name": "Steadfast Presence",
          "description": "Poppy passively gains Armor and Magic Resist. This bonus increases when she is low on Health. Poppy can activate Steadfast Presence to gain Move Speed and stop enemy dashes around her. If a dash is stopped, the enemy is slowed and grounded.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/PoppyW.png",
          "cooldown": "20/18/16/14/12",
          "cost": "50",
          "range": "400"
        },
        {
          "key": "E",
          "name": "Heroic Charge",
          "description": "Poppy dashes to the target and pushes it back. If the target is pushed into a wall, it is stunned.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/PoppyE.png",
          "cooldown": "14/13/12/11/10",
          "cost": "70",
          "range": "475"
        },
        {
          "key": "R",
          "name": "Keeper's Verdict",
          "description": "Poppy channels a hammer strike that knocks enemies very far away.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/PoppyR.png",
          "cooldown": "140/120/100",
          "cost": "100",
          "range": "500"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "quinn",
      "name": "Quinn",
      "fullName": "Quinn, Demacia's Wings",
      "icon": "🦅",
      "role": "Xạ Thủ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "25-30 tuổi",
      "weapon": "Bow",
      "weaponSummary": "Crossbow and Valor - Nỏ và đại bàng",
      "releaseDate": "2013",
      "lore": "Quinn is an elite ranger-knight of Demacia, who undertakes dangerous missions deep in enemy territory. She and her legendary eagle, Valor, share an unbreakable bond, and their foes are often slain before they realize they are fighting not one, but two of the kingdom's greatest heroes. Nimble and acrobatic when required, Quinn takes aim with her crossbow while Valor marks their elusive targets from above, making them a deadly pair on the battlefield.",
      "fullLore": "Quinn is an elite ranger-knight of Demacia, who undertakes dangerous missions deep in enemy territory. She and her legendary eagle, Valor, share an unbreakable bond, and their foes are often slain before they realize they are fighting not one, but two of the kingdom's greatest heroes. Nimble and acrobatic when required, Quinn takes aim with her crossbow while Valor marks their elusive targets from above, making them a deadly pair on the battlefield.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Harrier",
          "description": "Valor, Quinn's Demacian eagle, periodically marks enemies as Vulnerable. Quinn's first basic attack against Vulnerable targets will deal bonus physical damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Quinn_Passive.png"
        },
        {
          "key": "Q",
          "name": "Blinding Assault",
          "description": "Quinn calls Valor to mark an enemy and hinder its vision before damaging all enemies in the immediate area.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/QuinnQ.png",
          "cooldown": "11/10.5/10/9.5/9",
          "cost": "50/55/60/65/70",
          "range": "1025"
        },
        {
          "key": "W",
          "name": "Heightened Senses",
          "description": "Passively grants Quinn Attack Speed and Move Speed after she attacks a Vulnerable target. Activate to have Valor reveal a large area nearby.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/QuinnW.png",
          "cooldown": "50/45/40/35/30",
          "cost": "0",
          "range": "2100"
        },
        {
          "key": "E",
          "name": "Vault",
          "description": "Quinn dashes to an enemy, dealing physical damage and slowing the target's Move Speed. Upon reaching the target, she leaps off the target, briefly interrupting it, and lands near her maximum Attack Range away from the target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/QuinnE.png",
          "cooldown": "12/11/10/9/8",
          "cost": "50",
          "range": "675"
        },
        {
          "key": "R",
          "name": "Behind Enemy Lines",
          "description": "Quinn and Valor team up to fly around at great speed.  Ending the ability casts Skystrike, which deals damage to nearby enemies and marks champions as Vulnerable.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/QuinnR.png",
          "cooldown": "3",
          "cost": "100/50/0",
          "range": "700"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "sejuani",
      "name": "Sejuani",
      "fullName": "Sejuani, Fury of the North",
      "icon": "❄️",
      "role": "Đỡ Đòn",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "25-30 tuổi",
      "weapon": "Hammer",
      "weaponSummary": "Flail of the Northern Winds - Chùy gió bắc",
      "releaseDate": "2012",
      "lore": "Sejuani is the brutal, unforgiving Iceborn warmother of the Winter's Claw, one of the most feared tribes of the Freljord. Her people's survival is a constant, desperate battle against the elements, forcing them to raid Noxians, Demacians, and Avarosans alike to survive the harsh winters. Sejuani herself spearheads the most dangerous of these attacks from the saddle of her drüvask boar Bristle, using her True Ice flail to freeze and shatter her enemies.",
      "fullLore": "Sejuani is the brutal, unforgiving Iceborn warmother of the Winter's Claw, one of the most feared tribes of the Freljord. Her people's survival is a constant, desperate battle against the elements, forcing them to raid Noxians, Demacians, and Avarosans alike to survive the harsh winters. Sejuani herself spearheads the most dangerous of these attacks from the saddle of her drüvask boar Bristle, using her True Ice flail to freeze and shatter her enemies.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Fury of the North",
          "description": "After being out of combat, Sejuani gains Frost Armor which grants Armor and Magic Resist and immunity to slows. Frost Armor persists for a short time after Sejuani takes damage.  Sejuani can damage a stunned enemy to shatter it, dealing massive magic damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Sejuani_passive.png"
        },
        {
          "key": "Q",
          "name": "Arctic Assault",
          "description": "Sejuani charges forward, knocking enemies into the air. The charge stops after hitting an enemy champion.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SejuaniQ.png",
          "cooldown": "19/17.5/16/14.5/13",
          "cost": "70/75/80/85/90",
          "range": "650"
        },
        {
          "key": "W",
          "name": "Winter's Wrath",
          "description": "Sejuani swings her mace twice, dealing damage, slowing enemies and applying Frost stacks.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SejuaniW.png",
          "cooldown": "9/8/7/6/5",
          "cost": "65",
          "range": "600"
        },
        {
          "key": "E",
          "name": "Permafrost",
          "description": "Sejuani freezes and stuns an enemy champion that has maximum Frost stacks.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SejuaniE.png",
          "cooldown": "1.5",
          "cost": "20",
          "range": "560"
        },
        {
          "key": "R",
          "name": "Glacial Prison",
          "description": "Sejuani throws her bola that freezes and stuns the first champion hit and creates an ice storm that slows other enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SejuaniR.png",
          "cooldown": "130/110/90",
          "cost": "100",
          "range": "1300"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "senna",
      "name": "Senna",
      "fullName": "Senna, the Redeemer",
      "icon": "🔫",
      "role": "Hỗ Trợ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg",
      "gender": "Nữ",
      "species": "Bất Tử",
      "age": "30-35 tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Relic Cannon - Pháo di tích",
      "releaseDate": "2019",
      "lore": "Cursed from childhood to be haunted by the supernatural Black Mist, Senna joined a sacred order known as the Sentinels of Light, and fiercely fought back—only to be killed, her soul imprisoned in a lantern by the cruel specter Thresh. But refusing to lose hope, within the lantern Senna learned to use the Mist, and reemerged to new life, forever changed. Now wielding darkness along with light, Senna seeks to end the Black Mist by turning it against itself—with every blast of her relic weapon, redeeming the souls lost within.",
      "fullLore": "Cursed from childhood to be haunted by the supernatural Black Mist, Senna joined a sacred order known as the Sentinels of Light, and fiercely fought back—only to be killed, her soul imprisoned in a lantern by the cruel specter Thresh. But refusing to lose hope, within the lantern Senna learned to use the Mist, and reemerged to new life, forever changed. Now wielding darkness along with light, Senna seeks to end the Black Mist by turning it against itself—with every blast of her relic weapon, redeeming the souls lost within.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Absolution",
          "description": "When units die near Senna, their souls are periodically trapped by the Black Mist. Senna can attack these souls to free them, absorbing the Mist that held them in death. Mist fuels her Relic Cannon's power with increased Attack Damage, Attack Range, and Critical Strike Chance. Attacks from Senna's Relic Cannon take longer to fire, deal bonus damage, and briefly grant her a portion of her target's Move Speed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Senna_Passive.png"
        },
        {
          "key": "Q",
          "name": "Piercing Darkness",
          "description": "From the twin barrels of her Relic Cannon, Senna fires a unified beam of light and shadow through a target, healing allies and damaging enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SennaQ.png",
          "cooldown": "15",
          "cost": "70/80/90/100/110",
          "range": "600"
        },
        {
          "key": "W",
          "name": "Last Embrace",
          "description": "Senna sends forth a wave of Black Mist. If it hits an enemy it latches onto them hungrily, rooting them and everything nearby after a brief delay.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SennaW.png",
          "cooldown": "11",
          "cost": "50/55/60/65/70",
          "range": "1250"
        },
        {
          "key": "E",
          "name": "Curse of the Black Mist",
          "description": "Senna draws the Mist she has stored in her weapon into a storm around her, embracing darkness and becoming a wraith within. Allies who enter the area are camouflaged and also appear as wraiths as the Mist shrouds them. Wraiths gain increased Move Speed, are unselectable, and hide their identities.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SennaE.png",
          "cooldown": "26/24.5/23/21.5/20",
          "cost": "70",
          "range": "400"
        },
        {
          "key": "R",
          "name": "Dawning Shadow",
          "description": "Senna calls upon the relic stones of fallen Sentinels, splitting her relic cannon into a holy array of shadow and light. She then fires a global beam that shields allies from harm, while damaging enemies caught in the center.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SennaR.png",
          "cooldown": "140/120/100",
          "cost": "100",
          "range": "25000"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "shaco",
      "name": "Shaco",
      "fullName": "Shaco, the Demon Jester",
      "icon": "🃏",
      "role": "Sát Thủ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg",
      "gender": "Nam",
      "species": "Ác Ma",
      "age": "Không rõ",
      "weapon": "Magic",
      "weaponSummary": "Daggers and Boxes - Dao găm và hộp",
      "releaseDate": "2010",
      "lore": "Crafted long ago as a plaything for a lonely prince, the enchanted marionette Shaco now delights in murder and mayhem. Corrupted by dark magic and the loss of his beloved charge, the once-kind puppet finds pleasure only in the misery of the poor souls he torments. He uses toys and simple tricks to deadly effect, finding the results of his bloody “games” hilarious—and for those who hear a dark chuckle in the dead of night, the Demon Jester may have marked them as his next plaything.",
      "fullLore": "Crafted long ago as a plaything for a lonely prince, the enchanted marionette Shaco now delights in murder and mayhem. Corrupted by dark magic and the loss of his beloved charge, the once-kind puppet finds pleasure only in the misery of the poor souls he torments. He uses toys and simple tricks to deadly effect, finding the results of his bloody “games” hilarious—and for those who hear a dark chuckle in the dead of night, the Demon Jester may have marked them as his next plaything.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Backstab",
          "description": "Shaco's basic attacks and Two-Shiv Poison deal additional damage when striking from behind.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Jester_CarefulStrikes.png"
        },
        {
          "key": "Q",
          "name": "Deceive",
          "description": "Shaco becomes Invisible and teleports to target location.His first attack while Invisible is empowered, dealing bonus damage and critically striking if he attacks from behind.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/Deceive.png",
          "cooldown": "12/11.5/11/10.5/10",
          "cost": "40",
          "range": "400"
        },
        {
          "key": "W",
          "name": "Jack In The Box",
          "description": "Shaco creates a hidden animated Jack-in-the-Box. When triggered, it will fear and attack nearby enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/JackInTheBox.png",
          "cooldown": "15",
          "cost": "70",
          "range": "500"
        },
        {
          "key": "E",
          "name": "Two-Shiv Poison",
          "description": "Shaco's Shivs passively poison targets on hit, slowing their Move Speed. He can throw his Shivs to deal damage and poison the target. The thrown Shiv deals bonus damage if the target is below 30% health.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TwoShivPoison.png",
          "cooldown": "8",
          "cost": "65",
          "range": "625"
        },
        {
          "key": "R",
          "name": "Hallucinate",
          "description": "Shaco creates an illusion of himself near him, which can attack nearby enemies (Deals reduced damage to turrets).  Upon death, it explodes, spawning three mini Jack in the Boxes and dealing damage to nearby enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/HallucinateFull.png",
          "cooldown": "100/90/80",
          "cost": "100",
          "range": "200"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "shen",
      "name": "Shen",
      "fullName": "Shen, the Eye of Twilight",
      "icon": "⚔️",
      "role": "Đỡ Đòn",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg",
      "gender": "Nam",
      "species": "Hồn Ma",
      "age": "40-45 tuổi",
      "weapon": "Sword",
      "weaponSummary": "Spirit Blade - Kiếm linh hồn",
      "releaseDate": "Không rõ",
      "lore": "Among the secretive, Ionian warriors known as the Kinkou, Shen serves as their leader, the Eye of Twilight. He longs to remain free from the confusion of emotion, prejudice, and ego, and walks the unseen path of dispassionate judgment between the spirit realm and the physical world. Tasked with enforcing the equilibrium between them, Shen wields blades of steel and arcane energy against any who would threaten it.",
      "fullLore": "Among the secretive, Ionian warriors known as the Kinkou, Shen serves as their leader, the Eye of Twilight. He longs to remain free from the confusion of emotion, prejudice, and ego, and walks the unseen path of dispassionate judgment between the spirit realm and the physical world. Tasked with enforcing the equilibrium between them, Shen wields blades of steel and arcane energy against any who would threaten it.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Ki Barrier",
          "description": "After casting a spell, Shen gets a shield. Affecting other champions reduces the cooldown of this effect.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Shen_Passive.png"
        },
        {
          "key": "Q",
          "name": "Twilight Assault",
          "description": "Shen recalls his spirit blade to attack with it, dealing damage based on the target's max health. The attacks are greatly empowered if it collides with an enemy champion, and all collided enemies are slowed while running away from Shen.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ShenQ.png",
          "cooldown": "8/7.25/6.5/5.75/5",
          "cost": "140/130/120/110/100",
          "range": "400"
        },
        {
          "key": "W",
          "name": "Spirit's Refuge",
          "description": "Attacks that would hit Shen or his allies near his spirit blade are blocked.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ShenW.png",
          "cooldown": "18/16.5/15/13.5/12",
          "cost": "40",
          "range": "400"
        },
        {
          "key": "E",
          "name": "Shadow Dash",
          "description": "Shen dashes in a direction, taunting enemies in his path.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ShenE.png",
          "cooldown": "18/16/14/12/10",
          "cost": "150",
          "range": "600"
        },
        {
          "key": "R",
          "name": "Stand United",
          "description": "Shen shields target allied champion from incoming damage, and soon after teleports to their location.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ShenR.png",
          "cooldown": "200/180/160",
          "cost": "0",
          "range": "35000"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "shyvana",
      "name": "Shyvana",
      "fullName": "Shyvana, the Half-Dragon",
      "icon": "🐉",
      "role": "Đấu Sĩ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg",
      "gender": "Nữ",
      "species": "Rồng",
      "age": "25-30 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Dragon Form - Hình rồng",
      "releaseDate": "2011",
      "lore": "Shyvana is a creature with the magic of a rune shard burning within her heart. Though she often appears humanoid, she can take her true form as a fearsome dragon, incinerating her foes with fiery breath. Having saved the life of the crown prince Jarvan IV, Shyvana now serves uneasily in his royal guard, struggling to find acceptance among the suspicious people of Demacia.",
      "fullLore": "Shyvana is a creature with the magic of a rune shard burning within her heart. Though she often appears humanoid, she can take her true form as a fearsome dragon, incinerating her foes with fiery breath. Having saved the life of the crown prince Jarvan IV, Shyvana now serves uneasily in his royal guard, struggling to find acceptance among the suspicious people of Demacia.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Fury of the Dragonborn",
          "description": "Shyvana deals bonus damage to dragons and gains Armor and Magic Resistance. As Shyvana and her allies slay more dragons, she gains more bonus Armor and Magic Resistance.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/ShyvanaReinforcedScales.png"
        },
        {
          "key": "Q",
          "name": "Twin Bite",
          "description": "Shyvana strikes twice on her next attack and grants herself Attack Speed for her next attacks. Basic attacks reduce the cooldown of Twin Bite by 0.5 seconds.Dragon Form: Twin Bite cleaves all units in front of Shyvana.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ShyvanaDoubleAttack.png",
          "cooldown": "8/7.5/7/6.5/6",
          "cost": "0",
          "range": "650"
        },
        {
          "key": "W",
          "name": "Burnout",
          "description": "Shyvana surrounds herself in fire, dealing magic damage per second to nearby enemies and moving faster for 3 seconds, part of this damage is applied again when Shyvana basic attacks an enemy with Burnout active. The Move Speed reduces over the duration of the spell. Basic attacks extend the duration of Burnout. Dragon Form: Burnout grows in size.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ShyvanaImmolationAura.png",
          "cooldown": "12",
          "cost": "0",
          "range": "325"
        },
        {
          "key": "E",
          "name": "Flame Breath",
          "description": "Shyvana unleashes a fireball that deals damage to all enemies it encounters and leaves cinders on the target, marking them for 5 seconds. Shyvana's basic attacks on marked targets deal a percentage of their maximum Health as damage on-hit.Dragon Form: Flame Breath explodes on impact or at target location, dealing bonus damage and scorching the earth for a short duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ShyvanaFireball.png",
          "cooldown": "12/11/10/9/8",
          "cost": "0",
          "range": "925"
        },
        {
          "key": "R",
          "name": "Dragon's Descent",
          "description": "Shyvana transforms into a dragon and takes flight to a target location. Enemies along her path take damage and are knocked toward her target location.Shyvana passively gains Fury per second and gains 2 Fury on basic attack.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ShyvanaTransformCast.png",
          "cooldown": "0",
          "cost": "0",
          "range": "850"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "sion",
      "name": "Sion",
      "fullName": "Sion, The Undead Juggernaut",
      "icon": "💀",
      "role": "Đỡ Đòn",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg",
      "gender": "Nam",
      "species": "Bất Tử",
      "age": "1000+ tuổi",
      "weapon": "Axe",
      "weaponSummary": "Chopper - Rìu khổng lồ",
      "releaseDate": "2009",
      "lore": "A war hero from a bygone era, Sion was revered in Noxus for choking the life out of a Demacian king with his bare hands—but, denied oblivion, he was resurrected to serve his empire even in death. His indiscriminate slaughter claimed all who stood in his way, regardless of allegiance, proving he no longer retained his former humanity. Even so, with crude armor bolted onto rotten flesh, Sion continues to charge into battle with reckless abandon, struggling to remember his true self between the swings of his mighty axe.",
      "fullLore": "A war hero from a bygone era, Sion was revered in Noxus for choking the life out of a Demacian king with his bare hands—but, denied oblivion, he was resurrected to serve his empire even in death. His indiscriminate slaughter claimed all who stood in his way, regardless of allegiance, proving he no longer retained his former humanity. Even so, with crude armor bolted onto rotten flesh, Sion continues to charge into battle with reckless abandon, struggling to remember his true self between the swings of his mighty axe.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Glory in Death",
          "description": "After being killed, Sion will temporarily reanimate with rapidly decaying Health. His attacks become very rapid, heal him, and deal bonus damage based on his target's maximum Health.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Sion_Passive1.png"
        },
        {
          "key": "Q",
          "name": "Decimating Smash",
          "description": "Sion charges a powerful swing in an area in front of himself that will deal damage to enemies when released. If he charges for enough time, enemies hit by the swing will also be knocked up and stunned.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SionQ.png",
          "cooldown": "10/9/8/7/6",
          "cost": "45",
          "range": "10000"
        },
        {
          "key": "W",
          "name": "Soul Furnace",
          "description": "Sion shields himself and can reactivate after 3 seconds to deal Magic Damage to enemies nearby. When Sion kills enemies, he passively gains maximum Health.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SionW.png",
          "cooldown": "15/14/13/12/11",
          "cost": "65/70/75/80/85",
          "range": "500"
        },
        {
          "key": "E",
          "name": "Roar of the Slayer",
          "description": "Sion fires a short range shockwave that damages and slows and reduces the Armor of the first enemy hit. If the shockwave hits a minion or monster, it will be knocked back, damaging, slowing, and reducing the Armor of all enemies that it passes through.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SionE.png",
          "cooldown": "12/11/10/9/8",
          "cost": "35/40/45/50/55",
          "range": "800"
        },
        {
          "key": "R",
          "name": "Unstoppable Onslaught",
          "description": "Sion charges in a direction, ramping up speed over time. He can steer his charge slightly with the mouse cursor location. When he collides with an enemy he deals damage and knocks them up based on the distance he has charged.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SionR.png",
          "cooldown": "140/100/60",
          "cost": "100",
          "range": "7500"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "sona",
      "name": "Sona",
      "fullName": "Sona, Maven of the Strings",
      "icon": "🎵",
      "role": "Hỗ Trợ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg",
      "gender": "Nữ",
      "species": "Con Người",
      "age": "25-30 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Etwahl - Đàn Etwahl",
      "releaseDate": "2010",
      "lore": "Sona is Demacia's foremost virtuoso of the stringed etwahl, speaking only through her graceful chords and vibrant arias. This genteel manner has endeared her to the highborn, though others suspect her spellbinding melodies to actually emanate magic—a Demacian taboo. Silent to outsiders but somehow understood by close companions, Sona plucks her harmonies not only to soothe injured allies, but also to strike down unsuspecting enemies.",
      "fullLore": "Sona is Demacia's foremost virtuoso of the stringed etwahl, speaking only through her graceful chords and vibrant arias. This genteel manner has endeared her to the highborn, though others suspect her spellbinding melodies to actually emanate magic—a Demacian taboo. Silent to outsiders but somehow understood by close companions, Sona plucks her harmonies not only to soothe injured allies, but also to strike down unsuspecting enemies.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Power Chord",
          "description": "Accelerando: Sona gains non-Ultimate ability haste permanently for her basic abilities as she uses her abilities well, up to a cap. Beyond that cap, further successful uses reduce her ultimate's remaining cooldown instead.Power Chord: Every few spell casts, Sona's next attack will deal bonus magic damage in addition to an additional effect based on what basic Ability Sona last activated.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Sona_Passive_Charged.png"
        },
        {
          "key": "Q",
          "name": "Hymn of Valor",
          "description": "Sona plays the Hymn of Valor, sends out bolts of sound, dealing magic damage to two nearby enemies, prioritizing champions and monsters. Sona gains a temporary aura that grants allies tagged by the zone bonus damage on their next attack against enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SonaQ.png",
          "cooldown": "8",
          "cost": "50/55/60/65/70",
          "range": "825"
        },
        {
          "key": "W",
          "name": "Aria of Perseverance",
          "description": "Sona plays the Aria of Perseverance, sending out protective melodies, healing Sona and a nearby wounded ally. Sona gains a temporary aura that grants allies tagged by the zone a temporary shield.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SonaW.png",
          "cooldown": "10",
          "cost": "80/85/90/95/100",
          "range": "1000"
        },
        {
          "key": "E",
          "name": "Song of Celerity",
          "description": "Sona plays the Song of Celerity, granting nearby allies bonus Move Speed. Sona gains a temporary aura that grants allied champions tagged by the zone bonus Move Speed.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SonaE.png",
          "cooldown": "14",
          "cost": "65",
          "range": "430"
        },
        {
          "key": "R",
          "name": "Crescendo",
          "description": "Sona plays her ultimate chord, stunning enemy champions and forcing them to dance and dealing magic damage to them. Each rank reduces the base cooldown of Sona's basic abilities.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SonaR.png",
          "cooldown": "140/120/100",
          "cost": "100",
          "range": "900"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "sylas",
      "name": "Sylas",
      "fullName": "Sylas, the Unshackled",
      "icon": "⛓️",
      "role": "Pháp Sư",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "30-35 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Petricite Chains - Xích đá Petricite",
      "releaseDate": "2019",
      "lore": "Raised in one of Demacia's lesser quarters, Sylas of Dregbourne has come to symbolize the darker side of the Great City. As a boy, his ability to root out hidden sorcery caught the attention of the notorious mageseekers, who eventually imprisoned him for turning those same powers against them. Having now broken free, Sylas lives as a hardened revolutionary, using the magic of those around him to destroy the kingdom he once served… and his band of outcast mage followers seems to grow by the day.",
      "fullLore": "Raised in one of Demacia's lesser quarters, Sylas of Dregbourne has come to symbolize the darker side of the Great City. As a boy, his ability to root out hidden sorcery caught the attention of the notorious mageseekers, who eventually imprisoned him for turning those same powers against them. Having now broken free, Sylas lives as a hardened revolutionary, using the magic of those around him to destroy the kingdom he once served… and his band of outcast mage followers seems to grow by the day.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Petricite Burst",
          "description": "After casting a spell, Sylas stores a charge of Petricite Burst. Sylas's basic attacks will expend a charge and whirl his energized chains around him dealing bonus magic damage to enemies hit. While Sylas has a charge of Petricite Burst, he gains attack speed. ",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/SylasP.png"
        },
        {
          "key": "Q",
          "name": "Chain Lash",
          "description": "Sylas lashes his chains out, intersecting at his targeted location dealing damage to and slowing enemies. After a delay, magical energy explodes from the intersection point dealing damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SylasQ.png",
          "cooldown": "11/10/9/8/7",
          "cost": "55",
          "range": "775"
        },
        {
          "key": "W",
          "name": "Kingslayer",
          "description": "Sylas lunges at an enemy with magical force dealing damage and healing himself against enemy champions.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SylasW.png",
          "cooldown": "12/10.5/9/7.5/6",
          "cost": "50/60/70/80/90",
          "range": "400"
        },
        {
          "key": "E",
          "name": "Abscond / Abduct",
          "description": "Sylas dashes to a location. Sylas can recast the ability to throw his chains out, pulling himself to an enemy he hits.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SylasE.png",
          "cooldown": "13/12/11/10/9",
          "cost": "65",
          "range": "400"
        },
        {
          "key": "R",
          "name": "Hijack",
          "description": "Sylas steals the enemy's ultimate ability and can cast it freely.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SylasR.png",
          "cooldown": "80/55/30",
          "cost": "75",
          "range": "950"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "taric",
      "name": "Taric",
      "fullName": "Taric, the Shield of Valoran",
      "icon": "💎",
      "role": "Hỗ Trợ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg",
      "gender": "Nam",
      "species": "Sinh Vật Hư Không",
      "age": "30-35 tuổi",
      "weapon": "Magic",
      "weaponSummary": "Bravado - Khiên pha lê",
      "releaseDate": "2010",
      "lore": "Taric is the Aspect of the Protector, wielding incredible power as Runeterra's guardian of life, love, and beauty. Shamed by a dereliction of duty and exiled from his homeland Demacia, Taric ascended Mount Targon to find redemption, only to discover a higher calling among the stars. Imbued with the might of ancient Targon, the Shield of Valoran now stands ever vigilant against the insidious corruption of the Void.",
      "fullLore": "Taric is the Aspect of the Protector, wielding incredible power as Runeterra's guardian of life, love, and beauty. Shamed by a dereliction of duty and exiled from his homeland Demacia, Taric ascended Mount Targon to find redemption, only to discover a higher calling among the stars. Imbued with the might of ancient Targon, the Shield of Valoran now stands ever vigilant against the insidious corruption of the Void.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Bravado",
          "description": "Spellcasts empower Taric's next 2 basic attacks to deal bonus magic damage, reduce his spell cooldowns, and attack in quick succession.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Taric_Passive.png"
        },
        {
          "key": "Q",
          "name": "Starlight's Touch",
          "description": "Heals nearby allied champions based on charges stored. Bravado-empowered attacks grant a charge of Starlight's Touch.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TaricQ.png",
          "cooldown": "3",
          "cost": "60",
          "range": "325"
        },
        {
          "key": "W",
          "name": "Bastion",
          "description": "Passively increase the Armor of Taric and any allied champion with Bastion.Actively shields an ally and grants them Bastion for as long as they remain near Taric. Taric's spells also cast off the ally with Bastion.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TaricW.png",
          "cooldown": "15",
          "cost": "60",
          "range": "800"
        },
        {
          "key": "E",
          "name": "Dazzle",
          "description": "Taric readies a beam of starlight that, after a brief delay, deals magic damage and stuns enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TaricE.png",
          "cooldown": "16/15/14/13/12",
          "cost": "40",
          "range": "610"
        },
        {
          "key": "R",
          "name": "Cosmic Radiance",
          "description": "Pulses cosmic energy onto nearby allied champions after a delay, making them invulnerable for a short duration.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/TaricR.png",
          "cooldown": "180/150/120",
          "cost": "100",
          "range": "400"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "vayne",
      "name": "Vayne",
      "fullName": "Vayne, the Night Hunter",
      "icon": "🏹",
      "role": "Xạ Thủ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg",
      "gender": "Nữ",
      "species": "Ác Ma",
      "age": "25-30 tuổi",
      "weapon": "Bow",
      "weaponSummary": "Silver Bolts - Tên bạc",
      "releaseDate": "2011",
      "lore": "Shauna Vayne is a deadly, remorseless Demacian monster hunter, who has dedicated her life to finding and destroying the demon that murdered her family. Armed with a wrist-mounted crossbow and a heart full of vengeance, she is only truly happy when slaying practitioners or creations of the dark arts, striking from the shadows with a flurry of silver bolts.",
      "fullLore": "Shauna Vayne is a deadly, remorseless Demacian monster hunter, who has dedicated her life to finding and destroying the demon that murdered her family. Armed with a wrist-mounted crossbow and a heart full of vengeance, she is only truly happy when slaying practitioners or creations of the dark arts, striking from the shadows with a flurry of silver bolts.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Night Hunter",
          "description": "Vayne ruthlessly hunts evil-doers, gaining 45 Move Speed when moving toward nearby enemy champions.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Vayne_NightHunter.png"
        },
        {
          "key": "Q",
          "name": "Tumble",
          "description": "Vayne tumbles, maneuvering to carefully place her next shot. Her next attack deals bonus damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VayneTumble.png",
          "cooldown": "4/3.5/3/2.5/2",
          "cost": "30",
          "range": "300"
        },
        {
          "key": "W",
          "name": "Silver Bolts",
          "description": "Vayne tips her bolts with a rare metal, toxic to evil things. The third consecutive attack or ability against the same target deals a percentage of the target's max health as bonus true damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VayneSilveredBolts.png",
          "cooldown": "0",
          "cost": "0",
          "range": "750"
        },
        {
          "key": "E",
          "name": "Condemn",
          "description": "Vayne draws a heavy crossbow from her back, and fires a huge bolt at her target, knocking them back and dealing damage. If they collide with terrain, they are impaled, dealing bonus damage and stunning them.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VayneCondemn.png",
          "cooldown": "20/18/16/14/12",
          "cost": "90",
          "range": "550"
        },
        {
          "key": "R",
          "name": "Final Hour",
          "description": "Readying herself for an epic confrontation, Vayne gains increased Attack Damage, Invisibility during Tumble, reduced Tumble cooldown, and more bonus Move Speed from Night Hunter",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/VayneInquisition.png",
          "cooldown": "100/85/70",
          "cost": "80",
          "range": "1"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "xinzhao",
      "name": "Xin Zhao",
      "fullName": "Xin Zhao, the Seneschal of Demacia",
      "icon": "🗡️",
      "role": "Đấu Sĩ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/XinZhao_0.jpg",
      "gender": "Nam",
      "species": "Con Người",
      "age": "Không rõ",
      "weapon": "Spear",
      "weaponSummary": "Three-Talon Spear - Giáo tam trảo",
      "releaseDate": "2011",
      "lore": "Xin Zhao is a resolute warrior loyal to the ruling Lightshield dynasty. Once condemned to the fighting pits of Noxus, he survived countless gladiatorial bouts, but after being freed by Demacian forces, he swore his life and allegiance to these brave liberators. Armed with his favored three-talon spear, Xin Zhao now fights for his adopted kingdom, audaciously challenging any foe, no matter the odds.",
      "fullLore": "Xin Zhao is a resolute warrior loyal to the ruling Lightshield dynasty. Once condemned to the fighting pits of Noxus, he survived countless gladiatorial bouts, but after being freed by Demacian forces, he swore his life and allegiance to these brave liberators. Armed with his favored three-talon spear, Xin Zhao now fights for his adopted kingdom, audaciously challenging any foe, no matter the odds.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Determination",
          "description": "Every third attack deals bonus damage and heals Xin Zhao.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/XinZhaoP.png"
        },
        {
          "key": "Q",
          "name": "Three Talon Strike",
          "description": "Xin Zhao's next 3 standard attacks deal increased damage with the third attack knocking an opponent into the air.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/XinZhaoQ.png",
          "cooldown": "7/6.5/6/5.5/5",
          "cost": "30",
          "range": "375"
        },
        {
          "key": "W",
          "name": "Wind Becomes Lightning",
          "description": "Xin Zhao slashes in front of himself with his spear, then thrusts it forward, slowing affected enemies and marking them as Challenged.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/XinZhaoW.png",
          "cooldown": "12/11/10/9/8",
          "cost": "60/55/50/45/40",
          "range": "1000"
        },
        {
          "key": "E",
          "name": "Audacious Charge",
          "description": "Xin Zhao charges to an enemy, gaining increased Attack Speed and dealing damage to all enemies in the area, slowing them briefly. Audacious Charge gains increased range against Challenged targets.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/XinZhaoE.png",
          "cooldown": "11",
          "cost": "50",
          "range": "650"
        },
        {
          "key": "R",
          "name": "Crescent Guard",
          "description": "Xin Zhao challenges an enemy he damaged recently. Xin Zhao deals damage to nearby enemies based on their current Health and knocks non-challenged targets back, becoming impervious to damage dealt by champions outside of the circle created.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/XinZhaoR.png",
          "cooldown": "120/110/100",
          "cost": "100",
          "range": "500"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "yorick",
      "name": "Yorick",
      "fullName": "Yorick, Shepherd of Souls",
      "icon": "💀",
      "role": "Đấu Sĩ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg",
      "gender": "Nam",
      "species": "Bất Tử",
      "age": "1000+ tuổi",
      "weapon": "Unknown",
      "weaponSummary": "Shovel - Xẻng",
      "releaseDate": "2011",
      "lore": "The last survivor of a long-forgotten religious order, Yorick is both blessed and cursed with power over the dead. Trapped on the Shadow Isles, his only companions are the rotting corpses and shrieking wraiths that he gathers to him. Yorick's monstrous actions belie his noble purpose: to free his home from the curse of the Ruination.",
      "fullLore": "The last survivor of a long-forgotten religious order, Yorick is both blessed and cursed with power over the dead. Trapped on the Shadow Isles, his only companions are the rotting corpses and shrieking wraiths that he gathers to him. Yorick's monstrous actions belie his noble purpose: to free his home from the curse of the Ruination.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Shepherd of Souls",
          "description": "The Cursed Horde: Yorick can summon Mist Walkers to swarm and attack nearby enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Yorick_P.png"
        },
        {
          "key": "Q",
          "name": "Last Rites",
          "description": "Yorick deals bonus damage on his next attack and heals himself. If the target dies a grave will be dug.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/YorickQ.png",
          "cooldown": "7/6.25/5.5/4.75/4",
          "cost": "25",
          "range": "0"
        },
        {
          "key": "W",
          "name": "Dark Procession",
          "description": "Yorick summons a destructible wall at target location that will block enemy movement.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/YorickW.png",
          "cooldown": "20/18/16/14/12",
          "cost": "70",
          "range": "600"
        },
        {
          "key": "E",
          "name": "Mourning Mist",
          "description": "Yorick throws a globule of Black Mist that damages, slows and marks enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/YorickE.png",
          "cooldown": "12/11/10/9/8",
          "cost": "50/55/60/65/70",
          "range": "700"
        },
        {
          "key": "R",
          "name": "Eulogy of the Isles",
          "description": "Yorick summons the Maiden of the Mist that causes Yorick's attacks against the Maiden's target to deal bonus damage. The Maiden will also automatically raise Walkers from dead enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/YorickR.png",
          "cooldown": "160/130/100",
          "cost": "100",
          "range": "600"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "zeri",
      "name": "Zeri",
      "fullName": "Zeri, The Spark of Zaun",
      "icon": "⚔️",
      "role": "Xạ Thủ",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg",
      "gender": "Nữ",
      "species": "Hồn Ma",
      "age": "18-20 tuổi",
      "weapon": "Gun",
      "weaponSummary": "Electric Burst Fire - Súng điện",
      "releaseDate": "2022",
      "lore": "A headstrong, spirited young woman from Zaun's working-class, Zeri channels her electric magic to charge herself and her custom-crafted gun. Her volatile power mirrors her emotions, its sparks reflecting her lightning-fast approach to life. Deeply compassionate toward others, Zeri carries the love of her family and her home into every fight. Though her eagerness to help can sometimes backfire, Zeri believes one truth to be certain: stand up for your community, and it will stand up with you.",
      "fullLore": "A headstrong, spirited young woman from Zaun's working-class, Zeri channels her electric magic to charge herself and her custom-crafted gun. Her volatile power mirrors her emotions, its sparks reflecting her lightning-fast approach to life. Deeply compassionate toward others, Zeri carries the love of her family and her home into every fight. Though her eagerness to help can sometimes backfire, Zeri believes one truth to be certain: stand up for your community, and it will stand up with you.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "Living Battery",
          "description": "Zeri's Attacks deal magic damage and are treated as Abilities. Moving and casting Burst Fire stores up energy in Zeri's Sparkpack. When fully charged her next Attack deals bonus damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/ZeriP.png"
        },
        {
          "key": "Q",
          "name": "Burst Fire",
          "description": "Burst Fire shoots a burst of 7 rounds that deal attack damage to the first enemy hit. This Ability is treated as an Attack.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZeriQ.png",
          "cooldown": "0",
          "cost": "0",
          "range": "700"
        },
        {
          "key": "W",
          "name": "Ultrashock Laser",
          "description": "Zeri fires an electric pulse that slows and damages the first enemy hit. If the pulse hits a wall it expands into a long range laser.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZeriW.png",
          "cooldown": "12/11/10/9/8",
          "cost": "50/60/70/80/90",
          "range": "1150"
        },
        {
          "key": "E",
          "name": "Spark Surge",
          "description": "Zeri dashes a short distance and energizes her next 3 shots of Burst Fire, causing them to pierce through enemies. She will vault and grind over any terrain she touches.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZeriE.png",
          "cooldown": "22/21/20/19/18",
          "cost": "90/85/80/75/70",
          "range": "25000"
        },
        {
          "key": "R",
          "name": "Lightning Crash",
          "description": "Zeri discharges a nova of electricity and overcharges herself, gaining increased damage and stacking Move Speed that refreshes and gets stronger every time she hits an enemy champion. While overcharged, Burst fire becomes a faster triple shot that chains lightning between enemies.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZeriR.png",
          "cooldown": "100/85/70",
          "cost": "100",
          "range": "800"
        }
      ],
      "specialFeatures": []
    },
    {
      "id": "zoe",
      "name": "Zoe",
      "fullName": "Zoe, the Aspect of Twilight",
      "icon": "✨",
      "role": "Pháp Sư",
      "region": "demacia",
      "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg",
      "gender": "Nữ",
      "species": "Thiên Thể",
      "age": "1000+ tuổi",
      "weapon": "Magic",
      "weaponSummary": "Paddle Star - Sao chèo",
      "releaseDate": "2017",
      "lore": "As the embodiment of mischief, imagination, and change, Zoe acts as the cosmic messenger of Targon, heralding major events that reshape worlds. Her mere presence warps the arcane mathematics governing realities, sometimes causing cataclysms without conscious effort or malice. This perhaps explains the breezy nonchalance with which Zoe approaches her duties, giving her plenty of time to focus on playing games, tricking mortals, or otherwise amusing herself. An encounter with Zoe can be joyous and life affirming, but it is always more than it appears and often extremely dangerous.",
      "fullLore": "As the embodiment of mischief, imagination, and change, Zoe acts as the cosmic messenger of Targon, heralding major events that reshape worlds. Her mere presence warps the arcane mathematics governing realities, sometimes causing cataclysms without conscious effort or malice. This perhaps explains the breezy nonchalance with which Zoe approaches her duties, giving her plenty of time to focus on playing games, tricking mortals, or otherwise amusing herself. An encounter with Zoe can be joyous and life affirming, but it is always more than it appears and often extremely dangerous.",
      "loreConnections": [],
      "affiliation": "Không rõ",
      "status": "Hoạt động",
      "notes": "",
      "skills": [
        {
          "key": "Passive",
          "name": "More Sparkles!",
          "description": "Zoe's next basic attack after casting a spell deals bonus magic damage.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/passive/Zoe_P.png"
        },
        {
          "key": "Q",
          "name": "Paddle Star!",
          "description": "Zoe fires a missile that she can redirect in flight. Deals more damage the longer it flies in a straight line.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZoeQ.png",
          "cooldown": "8.5/8/7.5/7/6.5",
          "cost": "40/45/50/55/60",
          "range": "800"
        },
        {
          "key": "W",
          "name": "Spell Thief",
          "description": "Zoe can pick up the remnants of enemy summoner spell and active item casts and cast them once herself. Whenever she casts a summoner spell, she gains 3 missiles that fire at the nearest target.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZoeW.png",
          "cooldown": "0.25",
          "cost": "0",
          "range": "3000/4500/6000/3000/3000"
        },
        {
          "key": "E",
          "name": "Sleepy Trouble Bubble",
          "description": "Causes the target to become drowsy, then fall asleep. While asleep, the target's Magic Resist is reduced. The first source of damage that breaks the sleep is doubled, up to a cap.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZoeE.png",
          "cooldown": "16/15/14/13/12",
          "cost": "80",
          "range": "800"
        },
        {
          "key": "R",
          "name": "Portal Jump",
          "description": "Blink to a nearby position for 1 second. Then blink back.",
          "image": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/ZoeR.png",
          "cooldown": "11/8/5",
          "cost": "40",
          "range": "575"
        }
      ],
      "specialFeatures": []
    }
  ],
  "newChampions": []
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = demaciaData;
}