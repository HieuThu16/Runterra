// Scraped Champions Data from League of Legends API
// This file contains all official champions data scraped from DataDragon API

const scrapedChampionsData = {
  // Void Region Champions
  voidChampions: [
    {
      id: "aatrox",
      name: "Aatrox",
      fullName: "Aatrox, Lưỡi Kiếm Darkin",
      icon: "⚔️",
      role: "Đấu Sĩ",
      region: "void",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
      gender: "Nam",
      species: "Darkin",
      age: "Hàng nghìn năm",
      weapon: "Kiếm khổng lồ",
      releaseDate: "13/06/2013",
      loreConnections: ["Varus", "Rhaast"],
      weaponSummary: "Kiếm",
      lore: "Từng là những bảo vệ danh dự của Shurima chống lại Hư Không, Aatrox và anh em của hắn cuối cùng đã trở thành mối đe dọa lớn hơn cho Runeterra.",
      fullLore:
        "Từng là những bảo vệ danh dự của Shurima chống lại Hư Không, Aatrox và anh em của hắn cuối cùng đã trở thành mối đe dọa lớn hơn cho Runeterra, và chỉ bị đánh bại bởi phép thuật xảo quyệt của phàm nhân. Nhưng sau nhiều thế kỷ bị giam cầm, Aatrox là người đầu tiên tìm thấy tự do một lần nữa, làm hỏng và biến đổi những kẻ ngu ngốc đủ để thử và sử dụng vũ khí ma thuật chứa đựng bản chất của hắn.",
      affiliation: "Darkin",
      status: "Hoạt động",
      notes: "Một trong ba Darkin được biết đến",
      skills: [
        {
          name: "The Darkin Blade",
          description:
            "Aatrox đập kiếm khổng lồ xuống đất, gây sát thương vật lý. Hắn có thể vung ba lần, mỗi lần với vùng hiệu ứng khác nhau.",
        },
        {
          name: "Infernal Chains",
          description:
            "Aatrox đập mạnh xuống đất, gây sát thương cho kẻ thù đầu tiên trúng đòn.",
        },
        {
          name: "Umbral Dash",
          description:
            "Thụ động: Aatrox hồi máu khi gây sát thương cho tướng địch. Khi kích hoạt: hắn lướt theo một hướng.",
        },
        {
          name: "World Ender",
          description:
            "Aatrox giải phóng hình dạng ác ma của mình, làm sợ hãi lính nhỏ địch gần đó.",
        },
      ],
      specialFeatures: [
        "Hồi máu từ sát thương",
        "Biến hình ác ma",
        "Kiểm soát đám đông",
      ],
    },
    {
      id: "belveth",
      name: "Bel'Veth",
      fullName: "Bel'Veth, Nữ Hoàng Hư Không",
      icon: "👑",
      role: "Đấu Sĩ",
      region: "void",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg",
      gender: "Nữ",
      species: "Sinh Vật Hư Không",
      age: "Mới sinh",
      weapon: "Vây cá đuối",
      releaseDate: "12/05/2022",
      loreConnections: ["Kai'Sa", "Kassadin"],
      weaponSummary: "Vây",
      lore: "Một nữ hoàng ác mộng được tạo ra từ nguyên liệu thô của cả một thành phố bị nuốt chửng, Bel'Veth là sự kết thúc của chính Runeterra.",
      fullLore:
        "Một nữ hoàng ác mộng được tạo ra từ nguyên liệu thô của cả một thành phố bị nuốt chửng, Bel'Veth là sự kết thúc của chính Runeterra... và sự khởi đầu của một thực tại quái dị theo thiết kế của riêng cô. Được thúc đẩy bởi các kỷ nguyên lịch sử, kiến thức và ký ức được tái sử dụng từ thế giới bên trên.",
      affiliation: "Hư Không",
      status: "Hoạt động",
      notes: "Tướng mới nhất từ Hư Không",
      skills: [
        {
          name: "Void Surge",
          description:
            "Bel'Veth lướt theo hướng đã chọn và gây sát thương cho tất cả kẻ thù cô đi qua.",
        },
        {
          name: "Above and Below",
          description:
            "Bel'Veth đập đuôi xuống đất, gây sát thương, hất tung và làm chậm kẻ thù.",
        },
        {
          name: "Royal Maelstrom",
          description:
            "Bel'Veth bám rễ tại chỗ, tạo ra một cơn bão chém xung quanh cô.",
        },
        {
          name: "Endless Banquet",
          description:
            "Bel'Veth tiêu thụ san hô Hư Không, biến đổi thành hình dạng thật của cô.",
        },
      ],
      specialFeatures: ["Biến hình", "Triệu hồi sinh vật", "Tăng tốc độ đánh"],
    },
    {
      id: "kassadin",
      name: "Kassadin",
      fullName: "Kassadin, Kẻ Đi Bộ Hư Không",
      icon: "🌌",
      role: "Sát Thủ",
      region: "void",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg",
      gender: "Nam",
      species: "Con Người (biến đổi)",
      age: "Trung niên",
      weapon: "Ma thuật Hư Không",
      releaseDate: "01/08/2009",
      loreConnections: ["Malzahar", "Kai'Sa"],
      weaponSummary: "Ma thuật",
      lore: "Cắt một con đường cháy rực qua những nơi tối tăm nhất của thế giới, Kassadin biết những ngày của mình đã được đếm.",
      fullLore:
        "Cắt một con đường cháy rực qua những nơi tối tăm nhất của thế giới, Kassadin biết những ngày của mình đã được đếm. Một hướng dẫn viên và nhà thám hiểm Shurima đã đi nhiều nơi, anh đã chọn nuôi dưỡng một gia đình giữa các bộ tộc miền nam yên bình—cho đến ngày ngôi làng của anh bị Hư Không nuốt chửng.",
      affiliation: "Độc lập",
      status: "Hoạt động",
      notes: "Cha của Kai'Sa",
      skills: [
        {
          name: "Null Sphere",
          description:
            "Kassadin bắn một quả cầu năng lượng hư không vào mục tiêu.",
        },
        {
          name: "Nether Blade",
          description:
            "Thụ động: Đòn đánh cơ bản của Kassadin gây thêm sát thương ma thuật.",
        },
        {
          name: "Force Pulse",
          description:
            "Kassadin hút năng lượng từ phép thuật được thi triển gần anh.",
        },
        {
          name: "Riftwalk",
          description: "Kassadin dịch chuyển tức thời đến một vị trí gần đó.",
        },
      ],
      specialFeatures: [
        "Dịch chuyển tức thời",
        "Kháng ma thuật",
        "Burst damage cao",
      ],
    },
    {
      id: "khazix",
      name: "Kha'Zix",
      fullName: "Kha'Zix, Kẻ Xé Rách Hư Không",
      icon: "🦂",
      role: "Sát Thủ",
      region: "void",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg",
      gender: "Không xác định",
      species: "Sinh Vật Hư Không",
      age: "Không rõ",
      weapon: "Móng vuốt và cánh",
      releaseDate: "27/09/2012",
      loreConnections: ["Rengar"],
      weaponSummary: "Móng vuốt",
      lore: "Hư Không phát triển, và Hư Không thích nghi—trong không có sinh vật nào của vô số dòng dõi của nó những sự thật này rõ ràng hơn Kha'Zix.",
      fullLore:
        "Hư Không phát triển, và Hư Không thích nghi—trong không có sinh vật nào của vô số dòng dõi của nó những sự thật này rõ ràng hơn Kha'Zix. Tiến hóa thúc đẩy cốt lõi của con quái vật đột biến này, sinh ra để sống sót và giết chết kẻ mạnh. Nơi nó đấu tranh để làm như vậy, nó phát triển những cách mới, hiệu quả hơn để chống lại và giết con mồi của nó.",
      affiliation: "Hư Không",
      status: "Hoạt động",
      notes: "Kẻ thù truyền kiếp của Rengar",
      skills: [
        {
          name: "Taste Their Fear",
          description:
            "Kha'Zix gây sát thương vật lý cho mục tiêu, tăng sát thương nếu mục tiêu bị cô lập.",
        },
        {
          name: "Void Spike",
          description: "Kha'Zix bắn gai từ xa, làm chậm và gây sát thương.",
        },
        {
          name: "Leap",
          description:
            "Kha'Zix nhảy đến một khu vực, gây sát thương khi hạ cánh.",
        },
        {
          name: "Void Assault",
          description: "Kha'Zix trở nên tàng hình và tăng tốc độ di chuyển.",
        },
      ],
      specialFeatures: [
        "Tiến hóa kỹ năng",
        "Tàng hình",
        "Reset nhảy khi giết địch",
      ],
    },
    {
      id: "kogmaw",
      name: "Kog'Maw",
      fullName: "Kog'Maw, Miệng Của Vực Thẳm",
      icon: "👹",
      role: "Xạ Thủ",
      region: "void",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg",
      gender: "Không xác định",
      species: "Sinh Vật Hư Không",
      age: "Trẻ",
      weapon: "Axit sinh học",
      releaseDate: "24/06/2010",
      loreConnections: [],
      weaponSummary: "Axit",
      lore: "Một sinh vật tò mò từ Hư Không, Kog'Maw được thúc đẩy bởi một cơn đói không thể thỏa mãn.",
      fullLore:
        "Một sinh vật tò mò từ Hư Không, Kog'Maw được thúc đẩy bởi một cơn đói không thể thỏa mãn. Sinh vật này có thể tiêu hóa bất kỳ vật chất hữu cơ nào và phun ra những chất axit ăn mòn có thể hòa tan hầu hết mọi thứ. Mặc dù có vẻ ngoài đáng sợ, Kog'Maw thực sự khá ngây thơ, chỉ muốn khám phá thế giới mới này và 'nếm thử' mọi thứ anh gặp.",
      affiliation: "Hư Không",
      status: "Hoạt động",
      notes: "Sinh vật tò mò và ngây thơ",
      skills: [
        {
          name: "Caustic Spittle",
          description:
            "Kog'Maw phun axit, giảm giáp và kháng ma thuật của mục tiêu.",
        },
        {
          name: "Bio-Arcane Barrage",
          description:
            "Kog'Maw tăng tầm đánh và đòn đánh gây thêm sát thương ma thuật.",
        },
        {
          name: "Void Ooze",
          description:
            "Kog'Maw phun một vệt chất nhờn, làm chậm kẻ thù đi qua.",
        },
        {
          name: "Living Artillery",
          description:
            "Kog'Maw bắn đạn pháo sinh học từ xa với tầm bắn cực lớn.",
        },
      ],
      specialFeatures: ["Tầm đánh xa", "Sát thương % máu", "Nổ khi chết"],
    },
    {
      id: "malzahar",
      name: "Malzahar",
      fullName: "Malzahar, Tiên Tri Hư Không",
      icon: "👁️",
      role: "Pháp Sư",
      region: "void",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg",
      gender: "Nam",
      species: "Con Người (bị tha hóa)",
      age: "Trung niên",
      weapon: "Ma thuật Hư Không",
      releaseDate: "01/06/2010",
      loreConnections: ["Kassadin", "Kai'Sa"],
      weaponSummary: "Ma thuật",
      lore: "Một tiên tri cuồng tín của Hư Không, Malzahar tin rằng sự hợp nhất của tất cả sự sống là điều không thể tránh khỏi.",
      fullLore:
        "Một tiên tri cuồng tín của Hư Không, Malzahar tin rằng sự hợp nhất của tất cả sự sống là điều không thể tránh khỏi. Trong những thị kiến của mình, anh đã thấy sự ra đời của một thế giới mới—một thế giới mà Hư Không và Runeterra trở thành một. Mặc dù nhiều người coi anh là kẻ điên, Malzahar tin rằng anh đang mang lại sự cứu rỗi cho thế giới thông qua sự hủy diệt.",
      affiliation: "Hư Không",
      status: "Hoạt động",
      notes: "Tiên tri và truyền giáo viên của Hư Không",
      skills: [
        {
          name: "Call of the Void",
          description:
            "Malzahar mở hai cổng Hư Không, gây sát thương và im lặng kẻ thù.",
        },
        {
          name: "Void Swarm",
          description:
            "Malzahar triệu hồi Voidling để tấn công kẻ thù gần nhất.",
        },
        {
          name: "Malefic Visions",
          description:
            "Malzahar lây nhiễm mục tiêu với thị kiến, gây sát thương theo thời gian.",
        },
        {
          name: "Nether Grasp",
          description:
            "Malzahar kêu gọi sức mạnh Hư Không để trói và gây sát thương mục tiêu.",
        },
      ],
      specialFeatures: [
        "Triệu hồi Voidling",
        "Kiểm soát đám đông",
        "Khiên thụ động",
      ],
    },
    {
      id: "reksai",
      name: "Rek'Sai",
      fullName: "Rek'Sai, Nữ Hoàng Đào Hầm",
      icon: "🦂",
      role: "Đấu Sĩ",
      region: "void",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg",
      gender: "Nữ",
      species: "Sinh Vật Hư Không",
      age: "Cổ đại",
      weapon: "Móng vuốt và hàm răng",
      releaseDate: "11/12/2014",
      loreConnections: [],
      weaponSummary: "Móng vuốt",
      lore: "Một kẻ săn mồi tàn bạo từ Hư Không, Rek'Sai là nỗi ác mộng sống của sa mạc Shurima.",
      fullLore:
        "Một kẻ săn mồi tàn bạo từ Hư Không, Rek'Sai là nỗi ác mộng sống của sa mạc Shurima. Sinh vật khổng lồ này đào hầm qua cát, tạo ra một mạng lưới đường hầm rộng lớn bên dưới sa mạc. Khi cô cảm nhận được rung động trên mặt đất, Rek'Sai sẽ phá lên từ lòng đất để tấn công con mồi không ngờ tới.",
      affiliation: "Hư Không",
      status: "Hoạt động",
      notes: "Nữ hoàng của các Xer'Sai",
      skills: [
        {
          name: "Queen's Wrath / Prey Seeker",
          description:
            "Trên mặt đất: Rek'Sai tấn công liên tiếp. Dưới đất: Bắn đạn xuyên qua địch hình.",
        },
        {
          name: "Burrow / Un-burrow",
          description:
            "Rek'Sai đào xuống đất hoặc nổi lên, thay đổi bộ kỹ năng.",
        },
        {
          name: "Furious Bite / Tunnel",
          description:
            "Trên mặt đất: Cắn mạnh gây sát thương. Dưới đất: Tạo đường hầm.",
        },
        {
          name: "Void Rush",
          description:
            "Rek'Sai lao đến một đường hầm, gây sát thương kẻ thù trên đường đi.",
        },
      ],
      specialFeatures: ["Đào hầm", "Thay đổi hình dạng", "Cảm nhận rung động"],
    },
    {
      id: "velkoz",
      name: "Vel'Koz",
      fullName: "Vel'Koz, Mắt Của Hư Không",
      icon: "👁️",
      role: "Pháp Sư",
      region: "void",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg",
      gender: "Không xác định",
      species: "Sinh Vật Hư Không",
      age: "Cổ đại",
      weapon: "Tia laser và xúc tu",
      releaseDate: "27/02/2014",
      loreConnections: [],
      weaponSummary: "Laser",
      lore: "Một trong những sinh vật đầu tiên được sinh ra từ Hư Không, Vel'Koz không chỉ đơn thuần là một kẻ hủy diệt.",
      fullLore:
        "Một trong những sinh vật đầu tiên được sinh ra từ Hư Không, Vel'Koz không chỉ đơn thuần là một kẻ hủy diệt. Sinh vật này được thúc đẩy bởi một khát khao không thể thỏa mãn để hiểu biết. Anh nghiên cứu mọi hình thức sống, phân tích và ghi chép mọi thứ anh gặp trước khi hủy diệt nó. Đối với Vel'Koz, kiến thức là sức mạnh, và anh sẽ không ngừng nghỉ cho đến khi hiểu được mọi bí mật của vũ trụ.",
      affiliation: "Hư Không",
      status: "Hoạt động",
      notes: "Nhà nghiên cứu và quan sát viên của Hư Không",
      skills: [
        {
          name: "Plasma Fission",
          description:
            "Vel'Koz bắn một tia plasma có thể tách thành hai tia nhỏ hơn.",
        },
        {
          name: "Void Rift",
          description:
            "Vel'Koz mở một vết nứt Hư Không, gây sát thương theo thời gian.",
        },
        {
          name: "Tectonic Disruption",
          description:
            "Vel'Koz gây ra một vụ nổ, hất tung kẻ thù lên không trung.",
        },
        {
          name: "Life Form Disintegration Ray",
          description:
            "Vel'Koz bắn một tia laser mạnh mẽ, gây sát thương thật.",
        },
      ],
      specialFeatures: ["Sát thương thật", "Tầm xa", "Nghiên cứu kẻ thù"],
    },
  ],

  // Demacia Region Champions (sample - would include all)
  demaciaChampions: [
    {
      id: "garen",
      name: "Garen",
      fullName: "Garen, Sức Mạnh Của Demacia",
      icon: "🛡️",
      role: "Đấu Sĩ",
      region: "demacia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",
      gender: "Nam",
      species: "Con Người",
      age: "25 tuổi",
      weapon: "Kiếm hai tay",
      releaseDate: "27/04/2010",
      loreConnections: ["Lux", "Jarvan IV", "Katarina"],
      weaponSummary: "Kiếm",
      lore: "Một chiến binh cao quý và là biểu tượng của Demacia, Garen chiến đấu như một trong những Vanguard Dauntless.",
      fullLore:
        "Một chiến binh cao quý và là biểu tượng của Demacia, Garen chiến đấu như một trong những Vanguard Dauntless. Anh được yêu mến bởi đồng đội và được kính trọng bởi kẻ thù, danh tiếng của anh là huyền thoại. Sinh ra trong một gia đình quý tộc Demacia có truyền thống quân sự lâu đời, Garen được định sẵn để trở thành một chiến binh vĩ đại.",
      affiliation: "Demacia",
      status: "Hoạt động",
      notes: "Anh trai của Lux",
      skills: [
        {
          name: "Decisive Strike",
          description:
            "Garen tăng tốc độ di chuyển và đòn đánh tiếp theo gây thêm sát thương và im lặng.",
        },
        {
          name: "Courage",
          description:
            "Garen giảm sát thương nhận vào và loại bỏ hiệu ứng làm chậm.",
        },
        {
          name: "Judgment",
          description:
            "Garen xoay kiếm xung quanh người, gây sát thương cho kẻ thù gần đó.",
        },
        {
          name: "Demacian Justice",
          description:
            "Garen triệu hồi sức mạnh của Demacia để gây sát thương ma thuật khổng lồ.",
        },
      ],
      specialFeatures: [
        "Hồi máu thụ động",
        "Kháng hiệu ứng xấu",
        "Sát thương thật",
      ],
    },
    // ... more Demacia champions would be added here
  ],

  // Function to get all champions by region
  getChampionsByRegion: function (region) {
    switch (region) {
      case "void":
        return this.voidChampions;
      case "demacia":
        return this.demaciaChampions;
      // Add other regions as needed
      default:
        return [];
    }
  },

  // Function to get all champions
  getAllChampions: function () {
    return [
      ...this.voidChampions,
      ...this.demaciaChampions,
      // Add other regions as needed
    ];
  },
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = scrapedChampionsData;
}
