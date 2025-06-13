// Ionia Region Data
const ioniaData = {
  id: "ionia",
  name: "Ionia",
  icon: "🌸",
  existingChampions: [
    {
      id: "yasuo",
      name: "Yasuo",
      role: "Đấu Sĩ",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
      lore: "Kiếm sĩ bất tài với lời nguyền gió, tìm kiếm sự cứu rỗi và tha thứ.",
      releaseDate: "13/12/2013",
      loreConnections: ["Yone", "Taliyah"],
      weaponSummary: "Kiếm",
      gender: "Nam",
      species: "Người",
    },
    {
      id: "ahri",
      name: "Ahri",
      role: "Pháp Sư",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
      lore: "Hồ ly chín đuôi, tìm kiếm nguồn gốc thật sự của mình giữa hai thế giới.",
      releaseDate: "14/12/2011",
      loreConnections: ["Không có liên kết trực tiếp được liệt kê"],
      weaponSummary: "Ma thuật",
      gender: "Nữ",
      species: "Hồ Ly",
    },
    {
      id: "irelia",
      name: "Irelia",
      role: "Đấu Sĩ",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg",
      lore: "Vũ công lưỡi dao, dẫn đầu kháng chiến chống lại sự xâm lược của Noxus.",
      releaseDate: "16/11/2010",
      loreConnections: ["Karma", "Syndra"],
      weaponSummary: "Kiếm",
      gender: "Nữ",
      species: "Người",
    },
    {
      id: "akali",
      name: "Akali",
      fullName: "Akali, Sát Thủ Đơn Độc (The Rogue Assassin)",
      role: "Sát Thủ",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
      gender: "Nữ",
      species: "Người",
      age: "Trưởng thành (được đào tạo từ năm 14 tuổi, sau đó rời bỏ hội)",
      weapon: "Kama và Kunai (liềm cầm tay và dao găm ném)",
      releaseDate: "11/05/2010",
      loreConnections: ["Shen", "Kennen", "Zed"],
      weaponSummary: "Kama, Kunai",
      lore: "Akali sinh ra trong Hội Kinkou, được đào tạo để duy trì sự cân bằng của Ionia. Bực bội vì sự thiếu hành động của Kinkou trước các mối đe dọa, đặc biệt là sau cuộc xâm lược của Noxus, cô đã rời bỏ hội để chiến đấu trực tiếp với tư cách là một sát thủ đơn độc.",
      fullLore:
        "Akali Jhomen Tethi được nuôi dưỡng trong Hội Kinkou dưới sự lãnh đạo của Đại Sư Kusho và con trai ông, Shen. Cô là một chiến binh tài năng, thành thạo kama và kunai, và được kỳ vọng sẽ kế nhiệm mẹ mình trở thành Nắm Đấm Bóng Tối. Tuy nhiên, cô dần cảm thấy không yên và đặt câu hỏi về cách tiếp cận thụ động của Kinkou trong việc duy trì sự cân bằng, đặc biệt khi Ionia phải chịu đựng cuộc xâm lược của Noxus.\n\nCô công khai chỉ trích sự bất lực của họ và rời bỏ hội, cống hiến mình để loại bỏ các mối đe dọa trực tiếp trong thế giới vật chất, trở thành một sát thủ không có chủ nhân. Sự rời bỏ của Akali khỏi Hội Kinkou do sự 'thiếu hành động' của họ và niềm tin của cô vào 'hành động trực tiếp' là một sự chia rẽ tư tưởng rõ ràng. Điều này phản ánh cuộc nổi dậy trước đó của Zed chống lại Kusho và Shen.",
      gameplay:
        "Akali là một sát thủ có tính cơ động cao, sử dụng các kỹ năng của mình để lao vào và thoát khỏi giao tranh, gây sát thương dồn dập và trở nên không thể bị nhắm mục tiêu trong màn khói của cô. Lối chơi của cô tập trung vào sự chính xác, nhanh nhẹn và các đòn tấn công cơ hội.",
      skills: [
        {
          type: "Passive",
          name: "Đọa Đày (Assassin's Mark)",
          description:
            "Gây sát thương kỹ năng lên tướng địch tạo ra một vòng năng lượng xung quanh chúng. Rời khỏi vòng đó sẽ cường hóa đòn đánh thường tiếp theo của Akali với tầm đánh và sát thương cộng thêm.",
        },
        {
          type: "Q",
          name: "Ngũ Đẳng Liên Hoàn (Five Point Strike)",
          description:
            "Akali ném năm phi tiêu, gây sát thương dựa trên sát thương vật lý cộng thêm và sức mạnh phép thuật của cô, đồng thời làm chậm.",
        },
        {
          type: "W",
          name: "Bom Khói (Twilight Shroud)",
          description:
            "Akali thả một màn khói và tăng tốc độ di chuyển trong thời gian ngắn. Khi ở trong màn khói, Akali trở nên vô hình và không thể bị chọn làm mục tiêu bởi các phép và đòn tấn công của kẻ địch. Tấn công hoặc sử dụng kỹ năng sẽ khiến cô bị lộ diện trong thời gian ngắn.",
        },
        {
          type: "E",
          name: "Phi Hồ Liên Hoàn (Shuriken Flip)",
          description:
            "Lộn ngược ra sau và bắn một phi tiêu về phía trước, gây sát thương phép. Kẻ địch hoặc đám khói đầu tiên trúng phải sẽ bị đánh dấu. Tái kích hoạt kỹ năng để lướt đến mục tiêu bị đánh dấu, gây thêm sát thương.",
        },
        {
          type: "R",
          name: "Sát Chiêu Hoàn Hảo (Perfect Execution)",
          description:
            "Akali lao theo một hướng, gây sát thương cho kẻ địch trúng phải. Tái kích hoạt: Akali lướt theo một hướng, kết liễu tất cả kẻ địch trúng phải.",
        },
      ],
      specialFeatures: [
        "Từng là thành viên của Hội Kinkou, được đào tạo bởi Shen và Kennen",
        "Tin vào hành động trực tiếp, gây chết người để bảo vệ Ionia",
        "Triết lý 'không chủ nhân' là đặc điểm nổi bật",
        "Phản ánh cuộc xung đột nội bộ sâu sắc trong Ionia",
        "Đại diện cho sự chia rẽ tư tưởng trong Hội Kinkou",
        "Cuộc đấu tranh giữa phương pháp truyền thống và thực dụng",
        "Thể hiện tác động của cuộc xâm lược Noxus lên tư tưởng Ionia",
        "Sự chọn lựa giữa cân bằng thụ động và hành động trực tiếp",
      ],
    },
    {
      id: "ivern",
      name: "Ivern",
      fullName: "Ivern, Người Bạn Của Rừng Già (The Green Father)",
      icon: "🌳",
      role: "Hỗ Trợ/Pháp Sư",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg",
      species: "Nửa người, nửa cây (người đã biến đổi)",
      age: "Cổ đại (từ 'Vorrijaard cổ đại,' 'nhiều thế kỷ trước')",
      gender: "Nam (he/him)",
      weapon:
        "Mối liên kết với thiên nhiên và người bạn đồng hành được triệu hồi, Daisy",
      releaseDate: "05/10/2016",
      loreConnections: ["Lillia"],
      weaponSummary: "Cây",
      lore: "Từng là chiến binh hung tợn Ivern Tàn Bạo, ông tìm kiếm nguồn gốc của tất cả ma thuật ở Ionia. Khi tấn công Cây Thần-Liễu huyền thoại, ông đã bị hủy diệt và tái sinh thành một sinh vật nửa người, nửa cây kỳ lạ, tràn đầy sự ăn năn và tình yêu sâu sắc với thiên nhiên.",
      fullLore:
        "Ivern Tàn Bạo, một lãnh chúa từ Vorrijaard cổ đại, đã đi thuyền về phía đông đến Ionia để tìm kiếm nguồn gốc của tất cả ma thuật. Ông và lực lượng của mình đã chiến đấu với các sinh vật lai cho đến khi họ đến Cây Thần-Liễu linh thiêng. Khi ông tấn công cây, ông ngay lập tức bị hủy diệt và biến đổi thành một sinh vật bằng vỏ cây và lá, được truyền năng lượng bởi ma thuật của cây.\n\nVượt qua sự ăn năn về bạo lực trong quá khứ, ông trở thành Bramblefoot, Người Cha Xanh. Ông đã phát triển tình bạn sâu sắc với tất cả các sinh vật, bao gồm một golem đá mà ông đặt tên là Daisy, và giờ đây lang thang, làm phong phú thêm các khu rừng và chia sẻ trí tuệ, buồn bã trước sự bất cẩn của con người. Cốt truyện của Ivern là một ví dụ điển hình về ma thuật của Ionia có tác động sâu sắc, biến đổi cá nhân, không chỉ về sức mạnh mà còn về đạo đức.",
      gameplay:
        "Ivern là một tướng đi rừng/hỗ trợ độc đáo, không thể trực tiếp tấn công các quái vật không phải quái vật lớn. Thay vào đó, ông giải phóng chúng khỏi các khu rừng ma thuật. Lối chơi của ông xoay quanh việc kiểm soát các bãi quái rừng, che chắn cho đồng minh, tạo bụi cây để có lợi thế chiến thuật và triệu hồi Daisy để chiến đấu.",
      skills: [
        {
          type: "Passive",
          name: "Người Bạn Của Rừng Già (Friend of the Forest)",
          description:
            "Ivern không thể tấn công hoặc bị tấn công bởi các quái vật không phải quái vật lớn. Ivern có thể tạo ra các khu rừng ma thuật trên các bãi quái rừng, chúng sẽ phát triển theo thời gian. Khi khu rừng phát triển hoàn toàn, Ivern có thể giải phóng các quái vật để nhận vàng và kinh nghiệm.",
        },
        {
          type: "Q",
          name: "Rễ Trói (Rootcaller)",
          description:
            "Ivern tạo ra một dây leo, gây sát thương phép và trói chân kẻ địch trúng phải. Đồng minh của Ivern có thể lướt đến mục tiêu bị trói chân.",
        },
        {
          type: "W",
          name: "Kiến Tạo Bụi (Brushmaker)",
          description:
            "Trong bụi cây, các đòn tấn công của Ivern và đồng minh gần đó gây thêm sát thương phép. Ivern có thể kích hoạt kỹ năng này để tạo ra một bụi cây.",
        },
        {
          type: "E",
          name: "Hạt Hư Hỏng (Triggerseed)",
          description:
            "Ivern đặt một lá chắn lên một đồng minh, lá chắn này sẽ nổ sau một thời gian ngắn, làm chậm và gây sát thương cho kẻ địch. Lá chắn sẽ được làm mới nếu không trúng kẻ địch nào.",
        },
        {
          type: "R",
          name: "Daisy! (Daisy!)",
          description:
            "Ivern triệu hồi người bạn Sentinel của mình, Daisy, để chiến đấu cùng ông. Kích hoạt lại để ra lệnh cho Daisy tấn công hoặc di chuyển.",
        },
      ],
      specialFeatures: [
        "Cơ chế đi rừng 'hòa bình' độc đáo",
        "Sự biến đổi từ lãnh chúa tàn bạo thành linh hồn thiên nhiên nhân từ",
        "Daisy, người bạn golem là phần cốt lõi trong bản sắc",
        "Thể hiện ma thuật Ionia có tác động biến đổi sâu sắc",
        "Đại diện cho sự thay đổi đạo đức qua ma thuật",
        "Ma thuật Ionia như lực lượng sống, có tri giác",
        "Sức mạnh đến từ sự hòa hợp với bản chất tự nhiên",
        "Câu hỏi về ý chí tự do so với định mệnh trong tâm linh Ionia",
      ],
    },
    {
      id: "jhin",
      name: "Jhin",
      fullName: "Jhin, Nghệ Sĩ Tử Thần (The Virtuoso)",
      icon: "🎭",
      role: "Xạ Thủ/Pháp Sư",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg",
      species: "Con người",
      age: "Không rõ, nhưng đã hoạt động 'trong nhiều năm' trước khi bị bắt, sau đó 'nhiều năm' trôi qua trong tù. Có thể là người trưởng thành",
      gender: "Nam (he/him)",
      weapon: "Whisper (súng cầm tay/đại bác gắn vai)",
      releaseDate: "01/02/2016",
      loreConnections: ["Shen", "Zed", "Akali", "Hwei"],
      weaponSummary: "Súng",
      lore: "Khada Jhin, được biết đến với cái tên 'Quỷ Vàng,' là một kẻ tâm thần tội phạm tỉ mỉ, coi giết người là nghệ thuật. Hắn bị Hội Kinkou giam cầm nhưng sau đó được giải thoát bởi các yếu tố bí ẩn trong hội đồng cầm quyền của Ionia để phục vụ như một sát thủ của họ.",
      fullLore:
        "Trong nhiều năm, Jhin, khi đó được biết đến với cái tên 'Quỷ Vàng,' đã hoành hành ở các ngọn núi phía nam Ionia, để lại những màn trình diễn xác chết bị vặn vẹo. Hắn bị Đại Sư Kusho, Shen và Zed truy lùng, cuối cùng được tiết lộ là một người dàn cảnh tên là Khada Jhin. Kusho đã chọn giam cầm hắn ở Tuula thay vì hành quyết, tin rằng điều đó sẽ làm suy yếu văn hóa Ionia.\n\nJhin bị giam cầm trong nhiều năm, xuất sắc trong nhiều loại hình nghệ thuật nhưng không bao giờ mất đi sự ám ảnh bệnh hoạn của mình. Hắn sau đó được giải thoát sau cuộc chiến tranh Noxus, có thể bởi các yếu tố cấp tiến của Ionia, và giờ đây hoạt động như một sát thủ của họ, sử dụng khẩu súng Whisper của mình để tạo ra 'sự tàn bạo nghệ thuật'. Việc Jhin được giải thoát bởi 'các yếu tố bí ẩn trong hội đồng cầm quyền của Ionia' cho thấy sự xói mòn đáng kể các giá trị cốt lõi của Ionia.",
      gameplay:
        "Jhin là một xạ thủ độc đáo với tốc độ tấn công cố định và một khẩu súng cầm tay bốn viên. Lối chơi của hắn xoay quanh các phát bắn chính xác, có tác động cao, đặt bẫy và kết liễu tầm xa, thường lên đến đỉnh điểm là chiêu cuối Sân Khấu Tử Thần.",
      skills: [
        {
          type: "Passive",
          name: "Lời Thì Thầm (Whisper)",
          description:
            "Súng cầm tay của Jhin, Whisper, bắn với tốc độ cố định và chỉ có bốn viên đạn. Jhin truyền năng lượng cho viên đạn cuối cùng để chí mạng và gây thêm sát thương kết liễu. Bất cứ khi nào Whisper chí mạng, nó sẽ truyền cảm hứng cho Jhin một lượng lớn Tốc Độ Di Chuyển.",
        },
        {
          type: "Q",
          name: "Lựu Đạn Nhảy Múa (Dancing Grenade)",
          description:
            "Jhin phóng một hộp đạn ma thuật vào kẻ địch. Nó có thể trúng tối đa bốn mục tiêu và tăng sát thương mỗi khi tiêu diệt được mục tiêu.",
        },
        {
          type: "W",
          name: "Nét Hoa Mĩ (Deadly Flourish)",
          description:
            "Jhin vung gậy, bắn một phát bắn duy nhất với tầm xa đáng kinh ngạc. Nó xuyên qua lính và quái vật, nhưng dừng lại ở tướng đầu tiên trúng phải. Nếu mục tiêu gần đây bị đồng minh của Jhin, bẫy hoa sen hoặc bị Jhin gây sát thương, chúng sẽ bị trói chân.",
        },
        {
          type: "E",
          name: "Cạm Bẫy Nghệ Sĩ (Captive Audience)",
          description:
            "Jhin đặt một bẫy hoa sen vô hình sẽ nở ra khi bị giẫm lên. Nó làm chậm kẻ địch gần đó trước khi gây sát thương bằng một vụ nổ cánh hoa răng cưa. Sắc Đẹp Trong Cái Chết - Khi Jhin tiêu diệt một tướng địch, một bẫy hoa sen sẽ nở ra gần xác chết của chúng.",
        },
        {
          type: "R",
          name: "Sân Khấu Tử Thần (Curtain Call)",
          description:
            "Jhin vận sức, biến Whisper thành một khẩu đại bác gắn vai. Nó có thể bắn 4 siêu phát bắn ở tầm cực xa xuyên qua lính và quái vật, nhưng dừng lại ở tướng đầu tiên trúng phải. Whisper làm suy yếu kẻ địch trúng phải, làm chậm chúng và gây sát thương kết liễu. Phát bắn thứ 4 được chế tạo hoàn hảo, cực kỳ mạnh mẽ và chắc chắn chí mạng.",
        },
      ],
      specialFeatures: [
        "Một 'kẻ tâm thần tội phạm' coi giết người là 'nghệ thuật'",
        "Được giải thoát bởi 'các yếu tố bí ẩn' ở Ionia",
        "Thể hiện khía cạnh đen tối, thực dụng của cấu trúc quyền lực Ionia",
        "Bị Kusho, Shen và Zed bắt giữ - sự kiện then chốt",
        "Đại diện cho sự xói mòn giá trị cốt lõi của Ionia",
        "Sự tham nhũng hoặc tuyệt vọng sâu sắc sau cuộc xâm lược Noxus",
        "Sử dụng bởi các phe phái Ionia cho mục đích đáng ngờ",
        "Tiềm năng dẫn đến một Ionia 'đen tối' hơn",
      ],
    },
    {
      id: "karma",
      name: "Karma",
      fullName: "Karma, Linh Hồn Thăng Hoa (The Enlightened One)",
      icon: "🌸",
      role: "Pháp Sư/Hỗ Trợ",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg",
      species: "Con người (linh hồn Ionia cổ đại tái sinh)",
      age: "Darha (hiện thân hiện tại) 12 tuổi, nhưng linh hồn là 'cổ đại'",
      gender: "Nữ (she/her)",
      weapon: "Năng lượng linh hồn, sức mạnh của linh hồn tổ tiên",
      releaseDate: "01/02/2011",
      loreConnections: ["Irelia", "Syndra"],
      weaponSummary: "Ma thuật",
      lore: "Karma là hiện thân sống của một linh hồn Ionia cổ đại, tái sinh qua nhiều thế hệ để dẫn dắt người dân của mình. Hiện thân hiện tại, Darha, vật lộn với những lời dạy hòa bình truyền thống của các Karma trước đây, đặc biệt là sau cuộc xâm lược của Noxus.",
      fullLore:
        "Darha, một cô bé 12 tuổi, bắt đầu trải qua những hình ảnh kỳ lạ về kiếp trước, mà các nhà sư từ Bàn Thờ Vĩnh Cửu nhận ra là dấu hiệu của Karma tiếp theo. Cô đã đến Bàn Thờ, học cách kết nối với linh hồn cổ đại của mình và giao tiếp với hàng ngàn kiếp trước, những người đã ủng hộ hòa bình và hài hòa.\n\nTuy nhiên, cuộc xâm lược của Noxus đã buộc Darha phải đối mặt với thực tế chiến tranh và đặt câu hỏi về những nguyên tắc này. Bất chấp tiếng nói của quá khứ, cô đã giải phóng cơn thịnh nộ thần thánh của mình lên một tàu chiến Noxus, phá hủy nó. Hành động này, dù được nhiều người Ionia ca ngợi, lại bị các nhà sư coi là một sai lầm.\n\nKarma, được dẫn dắt bởi Tinh Thần Ionia trong trái tim mình, giờ đây tìm cách dẫn dắt người dân của mình đến hòa bình khi có thể và hành động khi cần thiết, thừa nhận rằng trí tuệ thực sự nằm ở việc chấp nhận sự thay đổi.",
      gameplay:
        "Karma là một pháp sư/hỗ trợ đa năng, có thể tạo lá chắn, trói chân và gây sát thương. Kỹ năng độc đáo của cô, Nội Lực (Mantra), cường hóa phép thuật tiếp theo của cô, cho phép cô thích nghi với nhiều tình huống chiến đấu khác nhau.",
      skills: [
        {
          type: "Passive",
          name: "Hỏa Châu (Gathering Fire)",
          description:
            "Sau khi sử dụng 5 phép hoặc đòn đánh, kỹ năng tiếp theo của Karma sẽ được cường hóa.",
        },
        {
          type: "Q",
          name: "Nội Hỏa (Inner Flame)",
          description:
            "Karma phóng ra một quả cầu năng lượng linh hồn nổ tung và gây sát thương phép khi trúng một đơn vị địch. Mantra Bonus: Ngoài vụ nổ, Mantra tăng sức mạnh hủy diệt của Nội Hỏa, tạo ra một trận đại hồng thủy gây sát thương sau một thời gian ngắn.",
        },
        {
          type: "W",
          name: "Chuyên Tâm (Focused Resolve)",
          description:
            "Karma tạo ra một sợi dây liên kết giữa bản thân và một kẻ địch được chọn làm mục tiêu, gây sát thương và tiết lộ vị trí của chúng. Nếu sợi dây không bị đứt, kẻ địch sẽ bị trói chân và bị sát thương lần nữa. Mantra Bonus: Karma tăng cường liên kết, hồi máu cho bản thân và kéo dài thời gian trói chân.",
        },
        {
          type: "E",
          name: "Linh Giáp (Inspire)",
          description:
            "Karma triệu hồi một lá chắn bảo vệ hấp thụ sát thương nhận vào và tăng tốc độ di chuyển của đồng minh được bảo vệ. Mantra Bonus: Năng lượng tỏa ra từ mục tiêu của cô, tăng cường lá chắn ban đầu và áp dụng Inspire cho các tướng đồng minh gần đó.",
        },
        {
          type: "R",
          name: "Nội Lực (Mantra)",
          description:
            "Karma cường hóa kỹ năng tiếp theo của mình để có thêm hiệu ứng. Mantra có sẵn ở cấp độ 1 và không yêu cầu điểm kỹ năng.",
        },
      ],
      specialFeatures: [
        "Hiện thân của một linh hồn Ionia cổ đại, mang theo ký ức của các kiếp trước",
        "Cuộc xung đột nội tâm giữa chủ nghĩa hòa bình truyền thống và sự hung hãn cần thiết",
        "Thủ lĩnh tinh thần của Ionia",
        "Tâm linh Ionia đang tích cực phát triển để đáp ứng các áp lực bên ngoài",
        "Tinh Thần Ionia thúc đẩy hành động, thể hiện khía cạnh nguyên thủy hơn",
        "Sự thay đổi tiềm tàng trong các niềm tin nền tảng của khu vực",
        "Hướng tới một tâm linh chủ động hơn, thậm chí mang tính quân sự",
        "Khả năng dẫn đến các dạng ma thuật Ionia mới hoặc giải thích mới về lời tiên tri cổ đại",
      ],
    },
    {
      id: "kayn",
      name: "Kayn",
      fullName: "Kayn, Tử Thần Bóng Tối (The Shadow Reaper)",
      icon: "🌙",
      role: "Đấu Sĩ/Sát Thủ",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg",
      species: "Con người (biến đổi bởi Darkin)",
      age: "Lính trẻ con trong cuộc xâm lược Noxus, sau đó được Zed huấn luyện. Có thể là người trưởng thành trẻ tuổi",
      gender: "Nam (he/him)",
      weapon: "Rhaast (lưỡi hái Darkin có tri giác)",
      releaseDate: "12/07/2017",
      loreConnections: ["Aatrox", "Varus", "Zed"],
      weaponSummary: "Lưỡi hái",
      lore: "Shieda Kayn, một cựu lính trẻ con Noxus, được Zed nhận nuôi và huấn luyện, thành thạo ma thuật bóng tối. Anh ta sử dụng lưỡi hái Darkin có tri giác Rhaast, chiến đấu để giành quyền kiểm soát nó.",
      fullLore:
        "Sinh ra ở Noxus, Kayn bị bắt làm lính trẻ con. Trong cuộc xâm lược Ionia của Noxus, anh ta được Zed tìm thấy sau một trận chiến và được đưa vào Hội Bóng Tối. Kayn nhanh chóng thành thạo tất cả các loại vũ khí, coi mình là vũ khí tối thượng. Sự kiêu ngạo của anh ta ngày càng tăng, tin rằng mình sẽ vượt qua Zed.\n\nThử thách cuối cùng của anh ta là lấy một vũ khí Darkin, Rhaast, từ Noxus. Thay vì phá hủy nó, Kayn đã lấy lưỡi hái sống đó cho mình, bắt đầu một cuộc đấu tranh để giành quyền kiểm soát. Rhaast tìm cách nuốt chửng anh ta và tàn phá Runeterra, nhưng Kayn chống lại, nhằm mục đích làm chủ vũ khí và trở về Ionia với tư cách là thủ lĩnh mới của Hội Bóng Tối.\n\nCốt truyện của Kayn là một hệ quả trực tiếp của việc Zed theo đuổi sức mạnh bị cấm, khởi xướng một cuộc chiến tranh giành quyền kiểm soát theo đúng nghĩa đen. Điều này làm nổi bật chủ đề lặp đi lặp lại ở Ionia: sự hấp dẫn và nguy hiểm của sức mạnh to lớn từ các nguồn đen tối hoặc cổ xưa.",
      gameplay:
        "Kayn là một tướng độc đáo, biến đổi trong trận đấu dựa trên tương tác của anh ta với các tướng địch. Anh ta có thể trở thành Sát Thủ Bóng Tối (sát thương dồn dập cơ động) hoặc Darkin (đấu sĩ bền bỉ), mỗi dạng có bộ kỹ năng và lối chơi riêng biệt.",
      skills: [
        {
          type: "Passive",
          name: "Lưỡi Hái Darkin (The Darkin Scythe)",
          description:
            "Kayn sử dụng một vũ khí cổ xưa và chiến đấu với Rhaast, Darkin bên trong nó, để giành quyền kiểm soát. Darkin: Hồi máu bằng một phần trăm sát thương kỹ năng gây ra cho tướng. Sát Thủ Bóng Tối: Trong vài giây đầu tiên giao tranh với tướng địch, gây thêm sát thương.",
        },
        {
          type: "Q",
          name: "Trảm (Reaping Slash)",
          description: "Kayn lướt đi, sau đó chém. Cả hai đều gây sát thương.",
        },
        {
          type: "W",
          name: "Phá Hoại (Blade's Reach)",
          description:
            "Kayn gây sát thương và làm chậm mục tiêu theo một đường thẳng.",
        },
        {
          type: "E",
          name: "Bước Nhảy Bóng Tối (Shadow Step)",
          description: "Kayn có thể đi xuyên địa hình.",
        },
        {
          type: "R",
          name: "Nhập (Umbral Trespass)",
          description:
            "Kayn ẩn mình trong cơ thể kẻ địch, gây sát thương lớn khi anh ta thoát ra.",
        },
      ],
      specialFeatures: [
        "Cơ chế biến hình độc đáo là tính năng cốt lõi trong lối chơi và cốt truyện",
        "Cuộc đấu tranh nội tâm với Rhaast đại diện cho trận chiến vì linh hồn và định mệnh",
        "Học trò cá nhân của Zed, được coi là tương lai của Hội Bóng Tối",
        "Hệ quả trực tiếp của việc Zed theo đuổi sức mạnh bị cấm",
        "Thể hiện sự hấp dẫn và nguy hiểm của sức mạnh từ nguồn đen tối",
        "Khám phá khái niệm bản sắc - con người, ma thuật bóng tối, hay Darkin",
        "Sự hiện diện của Darkin cho thấy Ionia dễ bị tổn thương trước thế lực cổ xưa",
        "Cuộc đấu tranh kiểm soát như mô hình thu nhỏ cho đấu tranh lớn hơn của Ionia",
      ],
    },
    {
      id: "kennen",
      name: "Kennen",
      fullName: "Kennen, Trái Tim Của Bão Tố (The Heart of the Tempest)",
      icon: "⚡",
      role: "Pháp Sư/Xạ Thủ",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg",
      species: "Yordle",
      age: "Hàng thiên niên kỷ",
      gender: "Nam (he/him)",
      weapon: "Phi tiêu, năng lượng điện",
      lore: "Kennen là thành viên lâu đời nhất của Hội Kinkou và là Trái Tim của Bão Tố đầu tiên và duy nhất. Một yordle rời Thành Phố Bandle để tìm kiếm sự cân bằng, giờ đây anh ta làm việc với Shen để duy trì sự cân bằng ở Ionia.",
      fullLore:
        "Kennen, một yordle, đã rời Thành Phố Bandle hàng thiên niên kỷ trước để tìm kiếm sự hài hòa, cuối cùng định cư ở Ionia. Anh ta bị cuốn hút bởi những nỗ lực của con người để bảo vệ sự cân bằng và phát hiện ra Hội Kinkou, trở thành Trái Tim của Bão Tố đầu tiên, tạo thành một bộ ba với Mắt Hoàng Hôn (Kusho, sau đó là Shen) và Nắm Đấm Bóng Tối (Mayym, sau đó là Akali).\n\nAnh ta đóng vai trò là người phân xử, truyền đạt các phán quyết của hội, và thực thi chúng bằng vũ lực khi cần thiết. Trong cuộc xâm lược của Noxus và hậu quả của nó, anh ta phản đối việc tham gia kháng chiến, thay vào đó dẫn dắt Hội Kinkou bị chia cắt cùng với Shen sau cuộc đảo chính của Zed. Anh ta đã huấn luyện Akali từ nhỏ và thúc giục Mayym coi cô là người kế nhiệm, mặc dù Akali cuối cùng đã rời bỏ hội.\n\nViệc Kennen là một yordle từ Thành Phố Bandle đến Ionia để tìm kiếm sự cân bằng làm nổi bật rằng ý nghĩa tâm linh và ma thuật của Ionia vượt ra ngoài biên giới của nó.",
      gameplay:
        "Kennen là một pháp sư tầm xa xuất sắc trong việc mở giao tranh bằng chiêu cuối của mình, Bão Sấm Sét, làm choáng nhiều kẻ địch. Các kỹ năng của anh ta áp dụng các điểm cộng dồn 'Dấu Ấn Sấm Sét', dẫn đến các hiệu ứng làm choáng.",
      skills: [
        {
          type: "Passive",
          name: "Dấu Ấn Sấm Sét (Mark of the Storm)",
          description:
            "Kennen làm choáng kẻ địch bị anh ta trúng 3 lần bằng kỹ năng của mình.",
        },
        {
          type: "Q",
          name: "Phi Tiêu Sét (Thundering Shuriken)",
          description:
            "Kennen ném một phi tiêu di chuyển nhanh về một vị trí, gây sát thương và thêm Dấu Ấn Sấm Sét cho bất kỳ đối thủ nào trúng phải.",
        },
        {
          type: "W",
          name: "Giật Sét (Electrical Surge)",
          description:
            "Kennen gây thêm sát thương phép và thêm Dấu Ấn Sấm Sét vào mục tiêu của mình sau mỗi vài đòn tấn công, và anh ta có thể kích hoạt kỹ năng này để gây sát thương và thêm một Dấu Ấn Sấm Sét khác cho các mục tiêu đã bị đánh dấu.",
        },
        {
          type: "E",
          name: "Tốc Độ Sấm Sét (Lightning Rush)",
          description:
            "Kennen biến thành dạng sét, cho phép anh ta đi xuyên qua các đơn vị và áp dụng Dấu Ấn Sấm Sét. Kennen tăng tốc độ di chuyển khi vào dạng này và tốc độ tấn công khi rời khỏi nó.",
        },
        {
          type: "R",
          name: "Bão Sấm Sét (Slicing Maelstrom)",
          description:
            "Kennen triệu hồi một cơn bão tấn công các tướng địch gần đó gây sát thương phép.",
        },
      ],
      specialFeatures: [
        "Một yordle, khiến anh ta trở thành một trong số ít các tướng không phải người ở Ionia",
        "Thành viên lâu đời nhất của Hội Kinkou",
        "Vai trò 'Trái Tim của Bão Tố' bao gồm cả việc truyền đạt và thực thi sự cân bằng",
        "Ý nghĩa tâm linh và ma thuật của Ionia vượt ra ngoài biên giới",
        "Thu hút các sinh vật từ các khu vực khác tìm kiếm đặc tính độc đáo",
        "Số phận của Ionia có ý nghĩa rộng lớn hơn đối với Runeterra",
        "Sự cân bằng của Ionia là thành phần quan trọng của sự ổn định thế giới",
        "Tiềm năng trở thành trung tâm của các động lực liên khu vực",
      ],
    },
    {
      id: "leesin",
      name: "Lee Sin",
      fullName: "Lee Sin, Thầy Tu Mù (The Blind Monk)",
      icon: "🥋",
      role: "Đấu Sĩ/Sát Thủ",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
      species: "Con người",
      age: "Không rõ, nhưng là một cậu bé khi đến tu viện Shojin, sau đó 'nhiều năm trôi qua'. Có thể là người trưởng thành",
      gender: "Nam (he/him)",
      weapon: "Nắm đấm rực lửa, những cú đá xoay người rực lửa, tinh thần rồng",
      lore: "Lee Sin là một nhà sư mù và bậc thầy võ thuật Ionia, người truyền năng lượng tinh thần rồng. Từng kiêu ngạo, anh ta vô tình làm tê liệt người hướng dẫn của mình, dẫn đến việc bị trục xuất và một cuộc tìm kiếm sự chuộc tội.",
      fullLore:
        "Lee Sin đến tu viện Shojin khi còn là một cậu bé, tuyên bố rằng con rồng đã chọn anh ta. Mặc dù tài năng, sự kiêu ngạo liều lĩnh của anh ta đã khiến anh ta giải phóng cơn thịnh nộ của con rồng trong một buổi học chiến đấu, làm tê liệt người hướng dẫn của mình. Bị trục xuất, anh ta lang thang, giúp đỡ người khác, và gặp Udyr ở Freljord.\n\nKhi trở về Ionia trong cuộc xâm lược Noxus, anh ta đã bảo vệ tu viện Hirana bằng cách triệu hồi tinh thần rồng, điều này đã làm anh ta mù nhưng lại ban cho anh ta sức mạnh để làm tê liệt những kẻ xâm lược. Nhận ra rằng không một người phàm nào có thể hoàn toàn kiểm soát tinh thần, anh ta ở lại để xây dựng lại tu viện, cống hiến mình cho sự giác ngộ và bảo vệ Ionia.\n\nCốt truyện của Lee Sin là một câu chuyện rõ ràng về sự kiêu ngạo dẫn đến hậu quả, sau đó là con đường chuộc tội và hy sinh. Chủ đề hy sinh vì lợi ích lớn hơn này ăn sâu vào các câu chuyện Ionia, thể hiện la bàn đạo đức coi trọng sự vị tha và sự sám hối.",
      gameplay:
        "Lee Sin là một đấu sĩ/sát thủ có tính cơ động cao, phụ thuộc vào kỹ năng định hướng, nổi tiếng với khả năng gây áp lực sớm trong trận đấu, giới hạn kỹ năng cao và khả năng tạo ra những pha đột biến bằng các cú đá của mình.",
      skills: [
        {
          type: "Passive",
          name: "Nộ Long Cước (Flurry)",
          description:
            "Sau khi Lee Sin sử dụng một kỹ năng, 2 đòn đánh thường tiếp theo của anh ta sẽ được tăng Tốc Độ Đánh và hồi Năng Lượng.",
        },
        {
          type: "Q",
          name: "Sóng Âm / Vô Ảnh Cước (Sonic Wave / Resonating Strike)",
          description:
            "Sóng Âm: Lee Sin phóng ra một làn sóng âm thanh lạc điệu để định vị kẻ địch, gây sát thương vật lý cho kẻ địch đầu tiên trúng phải. Vô Ảnh Cước: Lee Sin lướt đến kẻ địch bị Sóng Âm trúng, gây sát thương vật lý dựa trên lượng máu đã mất của mục tiêu.",
        },
        {
          type: "W",
          name: "Hộ Thể / Kiên Định (Safeguard / Iron Will)",
          description:
            "Hộ Thể: Lee Sin lao đến đồng minh được chọn làm mục tiêu, tạo lá chắn cho bản thân khỏi sát thương. Kiên Định: Lee Sin được tăng Hút Máu và Hút Phép trong 4 giây.",
        },
        {
          type: "E",
          name: "Địa Chấn / Dư Chấn (Tempest / Cripple)",
          description:
            "Địa Chấn: Lee Sin đập xuống đất, tạo ra một làn sóng xung kích gây sát thương phép và tiết lộ các đơn vị địch trúng phải. Dư Chấn: Lee Sin làm suy yếu kẻ địch gần đó, giảm Tốc Độ Di Chuyển của chúng trong 4 giây.",
        },
        {
          type: "R",
          name: "Nộ Long Cước (Dragon's Rage)",
          description:
            "Lee Sin thực hiện một cú đá xoay người mạnh mẽ, đẩy lùi mục tiêu của mình, gây sát thương vật lý cho mục tiêu và bất kỳ kẻ địch nào chúng va chạm. Kẻ địch bị mục tiêu va chạm sẽ bị hất tung lên không trong thời gian ngắn.",
        },
      ],
      specialFeatures: [
        "Sự mù lòa là kết quả của sự hy sinh và biểu tượng cho hành trình tâm linh",
        "Truyền năng lượng tinh thần rồng, một thực thể được tôn kính ở Ionia",
        "Cốt truyện chuộc tội là trọng tâm của nhân vật",
        "Thể hiện la bàn đạo đức coi trọng sự vị tha và sự sám hối",
        "Sự kiêu ngạo dẫn đến hậu quả, sau đó là con đường chuộc tội",
        "Khả năng phục hồi tinh thần được xây dựng dựa trên sự hy sinh cá nhân",
        "Sức mạnh thực sự đến từ kỷ luật nội tâm và sự tự chủ",
        "Đạt được thông qua gian khổ và sự cống hiến cho lợi ích chung",
      ],
    },
    {
      id: "lillia",
      name: "Lillia",
      fullName: "Lillia, Nụ Hoa Ngại Ngùng (The Bashful Bloom)",
      icon: "🦌",
      role: "Đấu Sĩ/Pháp Sư",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg",
      species: "Hươu thần (Fae fawn)",
      age: "Không rõ, sinh ra từ một nụ hoa mơ ước",
      gender: "Nữ (she/her)",
      weapon: "Cành cây ma thuật",
      lore: "Lillia là một hươu thần nhút nhát sinh ra từ một giấc mơ của Cây Mơ Ước cổ đại ở Ionia. Cô học về loài người thông qua những giấc mơ của họ nhưng bị đe dọa bởi bản chất bí ẩn của họ.",
      fullLore:
        "Lillia sinh ra khi một trong những giấc mơ của Cây Mơ Ước (mọc từ Cây Thần-Liễu) rơi xuống đất dưới dạng một nụ. Cô chăm sóc các nụ mơ ước khác, học về loài người thông qua chúng. Khi chiến tranh lan rộng và những giấc mơ giảm dần, Cây Mơ Ước trở nên ốm yếu.\n\nKhi các chiến binh vào rừng của cô và làm gãy một cành cây chứa giấc mơ chưa thành hiện thực của chính cô, Lillia hoảng sợ và khiến họ ngủ thiếp đi, nhận ra sự khác biệt giữa những người phàm cô nghĩ mình biết và những người đầy sợ hãi và 'rối rắm' cô gặp. Một giấc mơ sau đó đã đi vào cành cây bị gãy của cô, khiến nụ hoa của cô bung nở và ma thuật xoáy quanh cô.\n\nCô quyết định mang những giấc mơ của cây đến cho con người, giờ đây đi khắp thế giới để giúp mọi người hiện thực hóa những mong muốn sâu sắc nhất của họ. Sự tồn tại của Lillia nhấn mạnh sự kết nối sâu sắc giữa thế giới linh hồn và thế giới vật chất của Ionia.",
      gameplay:
        "Lillia là một pháp sư có tính cơ động cao, gây sát thương theo thời gian và có thể khiến kẻ địch ngủ thiếp đi bằng chiêu cuối của mình. Lối chơi của cô liên quan đến việc thả diều kẻ địch và sử dụng kỹ năng để duy trì tốc độ di chuyển của mình.",
      skills: [
        {
          type: "Passive",
          name: "Cành Cây Mộng Mị (Dream-Laden Bough)",
          description:
            "Đánh trúng tướng hoặc quái vật bằng kỹ năng sẽ gây thêm sát thương phép theo thời gian dựa trên máu tối đa.",
        },
        {
          type: "Q",
          name: "Đòn Đánh Hoa Lệ (Blooming Blows)",
          description:
            "Nội tại: Lillia nhận thêm tốc độ di chuyển cộng dồn khi đánh trúng kẻ địch bằng phép. Kích hoạt: Gây sát thương phép cho kẻ địch gần đó, gây thêm sát thương chuẩn ở rìa.",
        },
        {
          type: "W",
          name: "Cẩn Thận! Eep! (Watch Out! Eep!)",
          description:
            "Lillia gây sát thương trong một khu vực gần đó, gây sát thương lớn ở trung tâm.",
        },
        {
          type: "E",
          name: "Hạt Xoáy (Swirlseed)",
          description:
            "Lillia ném một hạt giống gây sát thương và làm chậm những kẻ địch nó chạm vào. Nếu không trúng gì, nó sẽ tiếp tục lăn cho đến khi trúng tường hoặc mục tiêu.",
        },
        {
          type: "R",
          name: "Khúc Ru Rừng Xanh (Lilting Lullaby)",
          description:
            "Lillia khiến tất cả kẻ địch có Bụi Mơ trên người trở nên Buồn Ngủ trước khi chìm vào giấc ngủ. Những kẻ địch đó sẽ nhận thêm sát thương khi bị đánh thức một cách cưỡng bức.",
        },
      ],
      specialFeatures: [
        "Sinh ra từ một giấc mơ, kết nối trực tiếp với Cây Mơ Ước và Cây Thần-Liễu",
        "Tương tác độc đáo của cô với giấc mơ và nỗi sợ hãi của con người",
        "Sự nhút nhát của cô đối lập với sứ mệnh của cô",
        "Thể hiện sự kết nối sâu sắc giữa thế giới linh hồn và vật chất của Ionia",
        "Sức khỏe của Cây Mơ Ước gắn liền với giấc mơ của con người",
        "Bạo lực của thế giới tác động trực tiếp đến cảnh quan tinh thần",
        "Các sự kiện vật chất có tác động hữu hình đến tinh thần Ionia",
        "Khôi phục cân bằng đòi hỏi giải quyết cả mối đe dọa vật lý và hạnh phúc tinh thần",
      ],
    },
    {
      id: "masteryi",
      name: "Master Yi",
      fullName: "Master Yi, Bậc Thầy Wuju (The Wuju Bladesman)",
      icon: "⚔️",
      role: "Sát Thủ/Đấu Sĩ",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg",
      species: "Con người",
      age: "Không rõ, nhưng là một cậu bé, sau đó 'nhiều năm trôi qua'. Có thể là người trưởng thành",
      gender: "Nam (he/him)",
      weapon: "Kiếm, phong cách Wuju",
      lore: "Master Yi là một trong những người thực hành cuối cùng của võ thuật Wuju Ionia. Làng của ông và văn hóa Wuju đã bị Noxus phá hủy. Đau buồn, ông đã luyện tập trong ẩn dật cho đến khi gặp Wukong, người mà ông đã huấn luyện.",
      fullLore:
        "Yi lớn lên trong khu định cư trên núi Wuju ở Ionia, học kiếm thuật. Làng của ông bị cô lập, nghệ thuật thiêng liêng của họ không được chia sẻ. Khi các đội quân Noxus xâm lược, Yi và các đệ tử Wuju khác đã bảo vệ Ionia. Đáp lại, các chỉ huy Noxus đã phá hủy ngôi làng bằng lửa hóa học, xóa sổ người dân và văn hóa của họ.\n\nYi trở về chỉ thấy những tàn tích, trở thành đệ tử sống sót duy nhất. Đau buồn, ông luyện tập một cách ám ảnh trong ẩn dật, nghi ngờ liệu một mình ông có thể bảo tồn toàn bộ di sản hay không. Sau đó, ông gặp Kong (Wukong), một vastaya đã thách thức ông hàng ngày, làm sống lại tinh thần Wuju trong Yi.\n\nYi đã huấn luyện Kong, tặng ông một cây gậy ma thuật và danh hiệu 'Wukong', tìm thấy mục đích của mình trong việc truyền lại các phương pháp Wuju. Sự phá hủy ngôi làng bằng 'lửa hóa học' là một chi tiết đặc biệt tàn bạo, làm nổi bật sự tàn nhẫn của Noxus.",
      gameplay:
        "Master Yi là một sát thủ/đấu sĩ cận chiến nổi tiếng với tốc độ tấn công cao, khả năng không thể bị nhắm mục tiêu trong Tuyệt Kĩ Alpha, và khả năng đặt lại thời gian hồi chiêu khi tiêu diệt mục tiêu. Lối chơi của ông tập trung vào việc nhanh chóng loại bỏ mục tiêu và tạo lợi thế.",
      skills: [
        {
          type: "Passive",
          name: "Song Liên Kích (Double Strike)",
          description:
            "Cứ sau vài đòn đánh thường liên tiếp, Master Yi sẽ tấn công hai lần.",
        },
        {
          type: "Q",
          name: "Tuyệt Kĩ Alpha (Alpha Strike)",
          description:
            "Master Yi dịch chuyển khắp chiến trường với tốc độ chóng mặt, gây sát thương vật lý cho nhiều đơn vị trên đường đi, đồng thời trở nên không thể bị nhắm mục tiêu. Đòn đánh thường giảm thời gian hồi chiêu của Tuyệt Kĩ Alpha.",
        },
        {
          type: "W",
          name: "Thiền (Meditate)",
          description:
            "Master Yi làm trẻ hóa cơ thể bằng cách tập trung tâm trí, hồi máu và giảm sát thương nhận vào trong thời gian ngắn. Master Yi sẽ nhận các điểm cộng dồn của Song Liên Kích và tạm dừng thời gian còn lại của các kỹ năng khác.",
        },
        {
          type: "E",
          name: "Võ Thuật Wuju (Wuju Style)",
          description: "Tăng thêm sát thương chuẩn cho đòn đánh thường.",
        },
        {
          type: "R",
          name: "Tuyệt Kĩ Highlander (Highlander)",
          description:
            "Master Yi di chuyển với sự nhanh nhẹn vô song, tạm thời tăng Tốc Độ Di Chuyển và Tốc Độ Đánh cũng như khiến anh ta miễn nhiễm với tất cả các hiệu ứng làm chậm. Tiêu diệt tướng hoặc hỗ trợ kéo dài thời gian của kỹ năng.",
        },
      ],
      specialFeatures: [
        "Một trong những người thực hành cuối cùng của võ thuật Wuju",
        "Vai trò của ông là người cố vấn cho Wukong",
        "Ngôi làng bị phá hủy bởi 'lửa hóa học' - hình thức chiến tranh tàn khốc của Noxus",
        "Thể hiện chủ đề về khả năng phục hồi và sự bảo tồn di sản văn hóa",
        "Sự tiếp nối truyền thống ngay cả khi đối mặt với sự hủy diệt gần như hoàn toàn",
        "Tinh thần của Ionia không dễ bị phá vỡ",
        "Sức mạnh nằm ở các truyền thống văn hóa và tinh thần",
        "Khả năng truyền lại và thích nghi truyền thống sau những mất mát thảm khốc",
      ],
    },
    {
      id: "rakan",
      name: "Rakan",
      fullName: "Rakan, Kẻ Lôi Cuốn (The Charmer)",
      icon: "✨",
      role: "Hỗ Trợ",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg",
      species: "Vastaya (bộ tộc Lhotlan)",
      age: "Không rõ, nhưng đã biểu diễn 'nhiều năm'. Có thể là người trưởng thành",
      gender: "Nam (he/him)",
      weapon: "Sức hút, nhào lộn, lông vũ ma thuật",
      lore: "Rakan là một vũ công chiến đấu vastaya thất thường và kẻ gây rối, người đã tìm thấy mục đích khi tham gia cùng người yêu của mình, Xayah, trong cuộc nổi dậy của cô để giải phóng ma thuật hoang dã của Ionia và khôi phục quyền thừa kế của vastaya.",
      fullLore:
        "Rakan sinh ra trong bộ tộc Lhotlan đang suy tàn, quan sát các khu định cư của con người lấn chiếm đất đai vastaya và chặn dòng ma thuật hoang dã của Ionia. Ban đầu, anh ta tin rằng mình có thể thuyết phục con người đánh giá cao ma thuật thông qua các màn trình diễn của mình nhưng nhận ra rằng mình chỉ là một sự giải trí.\n\nMục đích của anh ta đã thay đổi sau khi gặp Xayah, một người nổi loạn Lhotlan. Bị cuốn hút bởi khả năng miễn nhiễm với sức hút của cô, anh ta đã tìm hiểu về lý tưởng của cô và tham gia cùng cô. Phong cách chiến đấu của họ hài hòa một cách kỳ lạ, với những pha nhào lộn của Rakan làm phân tâm kẻ địch trong khi Xayah tấn công.\n\nCốt truyện của Rakan làm nổi bật hoàn cảnh khó khăn của Vastaya ở Ionia. Đất đai của họ bị lấn chiếm, và ma thuật hoang dã của họ bị 'chặn' bởi các khu định cư của con người. Đây không chỉ là về Noxus; đó là một cuộc xung đột nội bộ trong Ionia giữa con người và vastaya.",
      gameplay:
        "Rakan là một hỗ trợ mở giao tranh có tính cơ động cao, có thể lướt đến đồng minh, hất tung kẻ địch và quyến rũ kẻ thù bằng chiêu cuối của mình. Lối chơi của anh ta được đặc trưng bởi những pha mở đầu táo bạo và bảo vệ đối tác của mình.",
      skills: [
        {
          type: "Passive",
          name: "Lông Vũ Ma Thuật (Fey Feathers)",
          description: "Rakan định kỳ nhận được một lá chắn.",
        },
        {
          type: "Q",
          name: "Phi Tiêu Ma Thuật (Gleaming Quill)",
          description:
            "Phóng một chiếc lông vũ ma thuật gây sát thương phép. Đánh trúng tướng hoặc quái vật lớn cho phép Rakan hồi máu cho đồng minh của mình.",
        },
        {
          type: "W",
          name: "Vũ Điệu Nhập Môn (Grand Entrance)",
          description:
            "Lướt đến một vị trí, hất tung kẻ địch gần đó khi đến nơi.",
        },
        {
          type: "E",
          name: "Vũ Điệu Chiến Đấu (Battle Dance)",
          description:
            "Bay đến một tướng đồng minh, cấp cho họ một lá chắn. Có thể tái kích hoạt miễn phí trong thời gian ngắn.",
        },
        {
          type: "R",
          name: "Bộ Pháp Thần Tốc (The Quickness)",
          description:
            "Tăng tốc độ di chuyển, quyến rũ và gây sát thương phép cho kẻ địch chạm phải.",
        },
      ],
      specialFeatures: [
        "Mối quan hệ với Xayah là trọng tâm của nhân vật và lối chơi",
        "Được biết đến là 'vũ công chiến đấu vĩ đại nhất' trong lịch sử Lhotlan",
        "Sức hút và khả năng đọc cảm xúc bổ sung cho sự thẳng thắn của Xayah",
        "Thể hiện hoàn cảnh khó khăn của Vastaya ở Ionia",
        "Đất đai bị lấn chiếm và ma thuật hoang dã bị chặn bởi con người",
        "Cuộc xung đột nội bộ giữa con người và vastaya về tài nguyên",
        "Vastaya đang mất đi 'quyền thừa kế' và buộc phải nổi dậy",
        "Mối đe dọa nội bộ đáng kể đối với sự ổn định của Ionia",
      ],
    },
    {
      id: "sett",
      name: "Sett",
      fullName: "Sett, Ông Trùm Đấu Trường (The Boss)",
      icon: "🥊",
      role: "Đấu Sĩ/Đỡ Đòn",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg",
      species: "Nửa vastaya",
      age: "Không rõ, nhưng là một đứa trẻ khi cha anh ta biến mất, sau đó 'lớn nhanh'. Có thể là người trưởng thành",
      gender: "Nam (he/him)",
      weapon: "Nắm đấm",
      lore: "Sinh ra là một kẻ bị ruồng bỏ nửa vastaya, Sett vươn lên từ những khởi đầu khiêm tốn trong các đấu trường ở Ionia. Bị người cha đấu sĩ bỏ rơi, anh ta nhanh chóng nổi tiếng với sức mạnh hoang dã và khả năng phục hồi, cuối cùng giành quyền kiểm soát để trở thành ông trùm của thế giới ngầm tội phạm Ionia.",
      fullLore:
        "Sett, một 'nửa quái thú' sinh ra từ một vastaya Ionia và một con người Noxus, là một kẻ bị ruồng bỏ. Người cha đấu sĩ của anh ta đã bỏ rơi anh ta và mẹ anh ta, khiến Sett trở nên chai sạn và sử dụng nắm đấm của mình để dập tắt những lời lăng mạ. Anh ta bí mật vào các đấu trường Noxus ở Ionia, hy vọng tìm thấy cha mình.\n\nAnh ta nhanh chóng trở thành một hiện tượng nhờ sức mạnh và sự hung dữ nguyên thủy của mình, giành được danh hiệu 'Vua Đấu Trường'. Nhận ra sức mạnh thực sự nằm ở việc sở hữu đấu trường, anh ta đã đối đầu một cách bạo lực với người môi giới Noxus và tay chân của hắn, giành quyền kiểm soát đấu trường sau một cuộc chạm trán bạo lực.\n\nSự vươn lên nắm quyền lực của Sett là một hệ quả trực tiếp của sự chiếm đóng của Noxus và sự hỗn loạn mà nó mang đến Ionia. Cuộc xâm lược không chỉ mang đến chiến tranh; nó còn tạo ra một khoảng trống quyền lực và nhu cầu mới về giải trí tàn bạo.",
      gameplay:
        "Sett là một đấu sĩ hạng nặng xuất sắc trong chiến đấu tầm gần, gây sát thương lớn bằng những cú đấm của mình và hấp thụ sát thương bằng Grit của mình. Chiêu cuối của anh ta cho phép anh ta mang kẻ địch và đập chúng xuống đất, mở giao tranh.",
      skills: [
        {
          type: "Passive",
          name: "Lì Đòn (Pit Grit)",
          description:
            "Các đòn đánh thường của Sett luân phiên giữa cú đấm trái và cú đấm phải. Cú đấm phải mạnh hơn và nhanh hơn một chút. Sett cũng ghét thua cuộc, nhận thêm hồi máu dựa trên lượng máu đã mất của mình.",
        },
        {
          type: "Q",
          name: "Cú Đấm Quyền Vương (Knuckle Down)",
          description:
            "Hai đòn đánh tiếp theo của Sett gây thêm sát thương dựa trên máu tối đa của mục tiêu. Sett cũng tăng tốc độ di chuyển khi di chuyển về phía tướng địch.",
        },
        {
          type: "W",
          name: "Cuồng Thú Quyền (Haymaker)",
          description:
            "Nội tại: Sett tích trữ sát thương nhận vào dưới dạng Grit. Khi kích hoạt, Sett tiêu hao tất cả Grit đã tích trữ để nhận một lá chắn và đấm vào một khu vực, gây sát thương chuẩn ở trung tâm và sát thương vật lý ở các cạnh.",
        },
        {
          type: "E",
          name: "Song Phiên Thiết Quyền (Facebreaker)",
          description:
            "Sett kéo tất cả kẻ địch ở hai phía đối diện của mình vào, gây sát thương và làm choáng chúng. Nếu kẻ địch chỉ ở một phía, chúng sẽ bị làm chậm thay vì bị làm choáng.",
        },
        {
          type: "R",
          name: "Hủy Diệt Đấu Trường (The Show Stopper)",
          description:
            "Sett mang một tướng địch qua không khí và đập chúng xuống đất, gây sát thương và làm chậm tất cả kẻ địch gần nơi chúng hạ cánh.",
        },
      ],
      specialFeatures: [
        "Di sản 'nửa vastaya' khiến anh ta trở thành kẻ bị ruồng bỏ trong cả cộng đồng",
        "Sự vươn lên nắm quyền lực là hệ quả trực tiếp của sự chiếm đóng Noxus",
        "Thể hiện sự suy thoái xã hội đáng kể trong Ionia",
        "Các giá trị truyền thống được thay thế bằng thói hư tật xấu",
        "Sự tồn tại của thế giới ngầm tội phạm đang phát triển mạnh",
        "Sự phục hồi của Ionia còn lâu mới hoàn chỉnh",
        "Các hình thức tham nhũng nội bộ mới đang nổi lên",
        "Tiềm năng xung đột giữa phe phái truyền thống và yếu tố tội phạm mới",
      ],
    },
    {
      id: "shen",
      name: "Shen",
      fullName: "Shen, Mắt Hoàng Hôn (The Eye of Twilight)",
      icon: "👁️",
      role: "Đỡ Đòn",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg",
      species: "Con người",
      age: "Không rõ, nhưng lớn lên cùng Zed. Có thể là người trưởng thành",
      gender: "Nam (he/him)",
      weapon: "Linh kiếm",
      lore: "Shen là thủ lĩnh của Hội Kinkou, Mắt Hoàng Hôn, có nhiệm vụ duy trì sự cân bằng giữa thế giới linh hồn và thế giới vật chất. Anh ta phấn đấu cho sự phán xét vô tư, ngay cả sau cái chết của cha mình và sự phản bội của Zed.",
      fullLore:
        "Sinh ra trong một gia đình được tôn kính ở Navori, Shen được định sẵn là Mắt Hoàng Hôn, kế nhiệm cha mình, Đại Sư Kusho. Anh ta là một tấm gương trong việc học tập, tập trung vào việc duy trì sự cân bằng. Người bạn thân nhất của anh ta là Zed, và họ là những học trò triển vọng nhất của Kinkou.\n\nHọ đã săn lùng Quỷ Vàng (Jhin), người mà Kusho đã giam cầm thay vì hành quyết, một quyết định mà Shen chấp nhận bất chấp mong muốn của chính anh ta về một hình phạt khắc nghiệt hơn. Trong cuộc xâm lược của Noxus, Shen đã miễn cưỡng ủng hộ sự thiếu hành động của Kusho, tập trung vào sự hài hòa tâm linh.\n\nKhi vắng mặt, Zed đã dàn dựng một cuộc đảo chính, chiếm giữ ngôi đền và giết Kusho. Đè nén nỗi đau khổ của mình, Shen đã dẫn dắt những người còn lại của Kinkou đến nơi an toàn, tiếp quản linh kiếm và danh hiệu của cha mình. Anh ta đã xây dựng lại hội, huấn luyện các tân binh như Akali, thường thúc giục sự kiềm chế.",
      gameplay:
        "Shen là một tướng đỡ đòn có khả năng di chuyển toàn bản đồ, có thể tạo lá chắn cho đồng minh và dịch chuyển qua bản đồ bằng chiêu cuối của mình để bảo vệ họ. Lối chơi của anh ta liên quan đến việc định vị chiến thuật, khiêu khích kẻ địch và chặn các đòn tấn công bằng linh kiếm của mình.",
      skills: [
        {
          type: "Passive",
          name: "Rào Chắn Ki (Ki Barrier)",
          description:
            "Sau khi sử dụng một kỹ năng, Shen nhận được một lá chắn. Ảnh hưởng đến các tướng khác làm giảm thời gian hồi chiêu của hiệu ứng này.",
        },
        {
          type: "Q",
          name: "Công Kích Hoàng Hôn (Twilight Assault)",
          description:
            "Shen triệu hồi linh kiếm của mình để tấn công, gây sát thương phép dựa trên máu tối đa của mục tiêu. Các đòn tấn công được cường hóa rất nhiều nếu nó va chạm với một tướng địch, và tất cả kẻ địch bị va chạm sẽ bị làm chậm khi chạy trốn khỏi Shen.",
        },
        {
          type: "W",
          name: "Nơi Nương Tựa Tinh Thần (Spirit's Refuge)",
          description:
            "Các đòn tấn công lẽ ra sẽ trúng Shen hoặc đồng minh của anh ta gần linh kiếm của anh ta sẽ bị chặn.",
        },
        {
          type: "E",
          name: "Vô Ảnh Bộ (Shadow Dash)",
          description:
            "Shen lao theo một hướng, khiêu khích kẻ địch trên đường đi của mình.",
        },
        {
          type: "R",
          name: "Nhất Thống (Stand United)",
          description:
            "Shen tạo lá chắn cho tướng đồng minh được chọn làm mục tiêu khỏi sát thương nhận vào, và ngay sau đó dịch chuyển đến vị trí của họ.",
        },
      ],
      specialFeatures: [
        "Thủ lĩnh của Hội Kinkou",
        "Sự phán xét vô tư là một nguyên tắc cốt lõi, ngay cả trong bi kịch cá nhân",
        "Mối thù và lịch sử với Zed là trọng tâm của cốt truyện",
        "Gánh nặng duy trì lý tưởng 'phán xét vô tư' và 'cân bằng' của Kinkou",
        "Đè nén nỗi đau khổ và vật lộn với lòng căm thù để duy trì nhiệm vụ",
        "Việc duy trì sự cân bằng truyền thống phải trả giá đắt cho các nhà lãnh đạo",
        "Vai trò lãnh đạo ở Ionia là trách nhiệm nặng nề, thường cô đơn",
        "Sự cân bằng của khu vực được duy trì bởi ý chí mạnh mẽ và sự hy sinh to lớn",
      ],
    },
    {
      id: "syndra",
      name: "Syndra",
      fullName: "Syndra, Nữ Chúa Bóng Tối (The Dark Sovereign)",
      icon: "🔮",
      role: "Pháp Sư",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg",
      species: "Con người",
      age: "Không rõ, nhưng là một 'đứa trẻ,' sau đó 'nhiều năm' trôi qua, sau đó 'vĩnh cửu' trong giấc ngủ. Có thể là cổ đại do giấc ngủ",
      gender: "Nữ (she/her)",
      weapon: "Các quả cầu năng lượng tối",
      lore: "Syndra là một pháp sư Ionia đáng sợ với sức mạnh thô sơ phi thường. Khi còn nhỏ, ma thuật hoang dã của cô đã làm phiền các trưởng lão. Được gửi đi để học cách kiểm soát, cô phát hiện ra người cố vấn của mình đang kìm hãm khả năng của cô.",
      fullLore:
        "Khi còn nhỏ ở Navori, ma thuật hoang dã của Syndra đã gây rắc rối, khiến cô bị đổ lỗi và sợ hãi. Cô được gửi đến một ẩn sĩ, Konigen, trên đảo Fae'lor để học cách kiểm soát. Trong nhiều năm, ma thuật của cô dường như yếu đi, và cô phát hiện ra Konigen cố tình kìm hãm sức mạnh của mình để đảm bảo an toàn.\n\nCảm thấy bị phản bội, cơn giận của cô bùng nổ, và cô đã giết ông ta bằng những quả cầu tối, khiến ngôi đền sụp đổ và hút cạn ma thuật từ hòn đảo. Tinh Thần Ionia đã kéo cô xuống một hang động dưới lòng đất, giam cầm cô trong một giấc ngủ ma thuật dường như vĩnh cửu. Cô được đánh thức trong cuộc chiến tranh Noxus bởi những kẻ tìm cách giết hoặc lợi dụng cô.\n\nCốt truyện của Syndra minh họa trực tiếp những nguy hiểm của việc kìm nén tài năng ma thuật tự nhiên, đặc biệt là ở một khu vực như Ionia nơi ma thuật là bẩm sinh. Việc Ionia theo đuổi 'sự hài hòa' đôi khi có thể dẫn đến những hậu quả không mong muốn.",
      gameplay:
        "Syndra là một pháp sư gây sát thương dồn dập, người thao túng các quả cầu tối để gây sát thương cao, làm choáng kẻ địch và kết liễu các mục tiêu yếu máu bằng chiêu cuối Bùng Nổ Sức Mạnh của mình.",
      skills: [
        {
          type: "Passive",
          name: "Sức Mạnh Tuyệt Đối (Transcendent)",
          description:
            "Syndra thu thập Mảnh Vỡ Thịnh Nộ từ việc lên cấp và gây sát thương cho kẻ địch, nâng cấp kỹ năng của cô.",
        },
        {
          type: "Q",
          name: "Quả Cầu Bóng Tối (Dark Sphere)",
          description:
            "Syndra triệu hồi một Quả Cầu Bóng Tối gây sát thương phép. Quả cầu vẫn còn và có thể được thao túng bởi các sức mạnh khác của cô.",
        },
        {
          type: "W",
          name: "Ý Chí Bất Khuất (Force of Will)",
          description:
            "Syndra nhặt và ném một Quả Cầu Bóng Tối hoặc lính địch, gây sát thương phép và làm chậm Tốc Độ Di Chuyển của kẻ địch.",
        },
        {
          type: "E",
          name: "Lực Đẩy Kháng Cự (Scatter the Weak)",
          description:
            "Syndra đẩy lùi kẻ địch và Quả Cầu Bóng Tối, gây sát thương phép. Kẻ địch bị Quả Cầu Bóng Tối đánh trúng sẽ bị làm choáng.",
        },
        {
          type: "R",
          name: "Bùng Nổ Sức Mạnh (Unleashed Power)",
          description:
            "Syndra bắn phá một tướng địch bằng tất cả các Quả Cầu Bóng Tối của cô.",
        },
      ],
      specialFeatures: [
        "Sở hữu sức mạnh ma thuật thô sơ khổng lồ, không thể kiểm soát",
        "Câu chuyện về sự phản bội và khao khát mãnh liệt về sự tự quyết",
        "Giấc ngủ ma thuật dài và sự thức tỉnh trong cuộc chiến tranh Noxus",
        "Minh họa nguy hiểm của việc kìm nén tài năng ma thuật tự nhiên",
        "Nỗ lực 'kiềm chế' khả năng đã phản tác dụng thảm khốc",
        "Những nỗ lực 'kiểm soát' hoặc 'cân bằng' ma thuật có thể phản tác dụng",
        "Việc theo đuổi 'sự hài hòa' đôi khi dẫn đến hậu quả không mong muốn",
        "Đặt ra câu hỏi về sự khôn ngoan của những cách cũ",
      ],
    },
    {
      id: "varus",
      name: "Varus",
      fullName: "Varus, Mũi Tên Báo Thù (The Arrow of Retribution)",
      icon: "🏹",
      role: "Xạ Thủ/Pháp Sư",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg",
      species: "Darkin (hợp nhất với hai con người)",
      age: "Cổ đại (một trong những 'Darkin cổ đại,' bị giam cầm 'hàng thế kỷ')",
      gender: "Nam (he/him) - thực thể hợp nhất",
      weapon: "Cung pha lê",
      lore: "Varus, một Darkin cổ đại, là một cung thủ Shurima bị lòng báo thù nuốt chửng, sau đó bị giam cầm trong cây cung pha lê của mình. Hàng thế kỷ sau, hai thợ săn Ionia, Valmar và Kai, vô tình giải thoát hắn, trở thành vật chủ bất đắc dĩ của hắn.",
      fullLore:
        "Varus là một cung thủ Shurima trung thành bị lòng báo thù nuốt chửng chống lại Icathia và Hư Không. Hắn trở thành một trong những Thăng Hoa, sau đó là một Darkin, một kẻ giết người chết chóc. Hắn cuối cùng bị dồn vào đường cùng ở Valoran và bị giam cầm trong cây cung pha lê của mình bởi những người săn trăng vastaya và các pháp sư con người.\n\nMột nữ hoàng chiến binh áo vàng của Valoran sau đó đã sử dụng vũ khí chết chóc này, hy sinh bản thân để chôn sống nó trong một cái giếng không ánh sáng sâu dưới một ngôi đền trên núi ở Ionia. Hàng thế kỷ sau, trong cuộc xâm lược của Noxus, hai thợ săn Ionia, Valmar và Kai, đã bị sức mạnh của cây cung nuốt chửng, cơ thể họ hợp nhất thành một sinh vật mới.\n\nViệc Varus bị giam cầm ở Ionia và việc hắn vô tình được giải thoát do cuộc xâm lược của Noxus làm nổi bật vai trò lịch sử của Ionia như một khu vực giam giữ các thực thể mạnh mẽ, nguy hiểm. Cuộc xâm lược của Noxus đã vô tình làm tổn hại đến sự giam giữ này.",
      gameplay:
        "Varus là một xạ thủ tầm xa có thể cấu rỉa kẻ địch từ xa bằng Mũi Tên Xuyên Phá của mình, áp dụng các điểm cộng dồn Blight bằng các đòn đánh thường, và làm bất động nhiều mục tiêu bằng chiêu cuối Sợi Xích Tội Lỗi của mình.",
      skills: [
        {
          type: "Passive",
          name: "Sống Sót (Living Vengeance)",
          description:
            "Khi tiêu diệt hoặc hỗ trợ, Varus tạm thời tăng Tốc Độ Đánh. Phần thưởng này lớn hơn nếu kẻ địch là tướng.",
        },
        {
          type: "Q",
          name: "Mũi Tên Xuyên Phá (Piercing Arrow)",
          description:
            "Varus chuẩn bị và sau đó bắn một phát bắn mạnh mẽ tăng tầm và sát thương càng lâu anh ta chuẩn bị bắn.",
        },
        {
          type: "W",
          name: "Tên Độc (Blighted Quiver)",
          description:
            "Nội tại: Các đòn đánh thường của Varus gây thêm sát thương phép và áp dụng Blight. Các kỹ năng khác của Varus kích hoạt Blight, gây sát thương phép dựa trên máu tối đa của mục tiêu. Kích hoạt: Varus cường hóa Mũi Tên Xuyên Phá tiếp theo của mình.",
        },
        {
          type: "E",
          name: "Mưa Tên (Hail of Arrows)",
          description:
            "Varus bắn một trận mưa tên gây sát thương vật lý và làm ô uế mặt đất. Mặt đất bị ô uế làm chậm Tốc Độ Di Chuyển của kẻ địch và giảm khả năng tự hồi máu và hồi phục của chúng.",
        },
        {
          type: "R",
          name: "Sợi Xích Tội Lỗi (Chain of Corruption)",
          description:
            "Varus phóng ra một xúc tu tham nhũng gây sát thương làm bất động tướng địch đầu tiên trúng phải và sau đó lan rộng đến các tướng chưa bị nhiễm bệnh gần đó, làm bất động chúng khi tiếp xúc.",
        },
      ],
      specialFeatures: [
        "Một Darkin, đại diện cho thế lực cổ xưa, hủy diệt từ Shurima",
        "Hình dạng hiện tại là sự hợp nhất của ba thực thể: Darkin Varus và hai thợ săn Ionia",
        "Cuộc đấu tranh nội tâm giữa lòng căm thù của Darkin và tình yêu của con người",
        "Ionia có vai trò lịch sử như khu vực giam giữ các thực thể mạnh mẽ, nguy hiểm",
        "Ma thuật tự nhiên của Ionia được sử dụng để phong ấn các mối đe dọa",
        "Biến Ionia thành vị trí chiến lược quan trọng cho toàn bộ Runeterra",
        "Cuộc xâm lược Noxus vô tình giải phóng các mối đe dọa tiềm ẩn khác",
        "Một số 'sự cân bằng' của Ionia là kết quả của việc tích cực trấn áp các lực lượng hỗn loạn",
      ],
    },
    {
      id: "wukong",
      name: "Wukong",
      fullName: "Wukong, Vua Khỉ (The Monkey King)",
      icon: "🐒",
      role: "Đấu Sĩ/Đỡ Đòn",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Wukong_0.jpg",
      species: "Vastaya (bộ tộc Shimon)",
      age: "Không rõ, nhưng là một 'vastaya giống khỉ tò mò' khi gặp Master Yi. Có thể là người trưởng thành",
      gender: "Nam (he/him)",
      weapon: "Gậy ma thuật",
      lore: "Kong, một vastaya lừa đảo từ bộ tộc Shimon, là một kẻ bị ruồng bỏ vì tính bốc đồng của mình. Anh ta tìm đến Master Yi, bậc thầy Wuju cuối cùng, và thông qua những thử thách kiên trì, đã thuyết phục Yi huấn luyện mình.",
      fullLore:
        "Kong, một vastaya lừa đảo từ bộ tộc Shimon, bốc đồng và dễ chán nản, khiến anh ta bị coi là kẻ bị ruồng bỏ. Anh ta tự xưng là 'Vua Khỉ' và thách đấu con người. Sau khi chứng kiến sự tàn bạo của Noxus ở Ionia, anh ta tìm đến các bậc thầy chiến đấu Wuju huyền thoại.\n\nAnh ta tìm thấy Master Yi, bậc thầy Wuju cuối cùng, và sau khi liên tục không đánh bại được ông, đã cầu xin được học hỏi. Yi đã huấn luyện Kong, biến sự liều lĩnh của anh ta thành một phong cách chiến đấu nhanh nhẹn và bất ngờ. Thông qua một trận đấu tập mà Kong đã đánh lừa Yi, anh ta đã biết được nỗi ám ảnh của Yi về sự hủy diệt của Wuju bởi Noxus.\n\nVai trò của Wukong với tư cách là học trò của Master Yi rất quan trọng đối với sự tiếp nối của phong cách Wuju sau khi nó gần như bị tuyệt chủng. Đây không chỉ là việc truyền lại kỹ năng; đó là việc thích nghi một truyền thống cổ xưa, cứng nhắc cho một thế hệ mới và một bối cảnh mới.",
      gameplay:
        "Wukong là một đấu sĩ có tính cơ động cao, có thể tạo ra một bản sao để đánh lừa kẻ địch, lướt đến mục tiêu và hất tung nhiều kẻ địch bằng chiêu cuối Lốc Xoáy của mình.",
      skills: [
        {
          type: "Passive",
          name: "Thiết Giáp (Stone Skin)",
          description:
            "Wukong nhận thêm giáp và hồi máu tối đa khi chiến đấu với tướng và quái vật.",
        },
        {
          type: "Q",
          name: "Thiết Bảng Ngàn Cân (Crushing Blow)",
          description:
            "Đòn đánh tiếp theo của Wukong tăng tầm đánh, gây thêm sát thương và giảm giáp của mục tiêu trong vài giây.",
        },
        {
          type: "W",
          name: "Chiến Binh Tinh Quái (Warrior Trickster)",
          description:
            "Wukong trở nên Vô Hình và lướt theo một hướng, để lại một bản sao sẽ tấn công kẻ địch gần đó.",
        },
        {
          type: "E",
          name: "Cân Đẩu Vân (Nimbus Strike)",
          description:
            "Wukong lướt đến một kẻ địch được chọn làm mục tiêu và gửi các hình ảnh tấn công kẻ địch gần mục tiêu của mình, gây sát thương cho mỗi kẻ địch trúng phải.",
        },
        {
          type: "R",
          name: "Lốc Xoáy (Cyclone)",
          description:
            "Wukong kéo dài cây gậy của mình và xoay nó liên tục, tăng Tốc Độ Di Chuyển. Kẻ địch trúng phải nhận sát thương và bị hất tung.",
        },
      ],
      specialFeatures: [
        "Lấy cảm hứng từ nhân vật thần thoại Tôn Ngộ Không",
        "Học trò và bạn đồng hành duy nhất của Master Yi",
        "Bản chất lừa đảo là một đặc điểm nổi bật",
        "Quan trọng đối với sự tiếp nối của phong cách Wuju sau khi gần như tuyệt chủng",
        "Thích nghi truyền thống cổ xưa, cứng nhắc cho thế hệ mới và bối cảnh mới",
        "Sự 'liều lĩnh' được chuyển hóa thành phong cách chiến đấu nhanh nhẹn và bất ngờ",
        "Các truyền thống Ionia không phải là bất biến, có thể phát triển",
        "Đảm bảo khả năng phục hồi tinh thần và võ thuật của khu vực",
      ],
    },
    {
      id: "xayah",
      name: "Xayah",
      fullName: "Xayah, Nữ Chúa Nổi Loạn (The Rebel)",
      icon: "🦅",
      role: "Xạ Thủ",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg",
      species: "Vastaya (bộ tộc Lhotlan)",
      age: "Không rõ, nhưng là một 'đứa trẻ' khi sự xâm lấn của con người bắt đầu. Có thể là người trưởng thành",
      gender: "Nữ (she/her)",
      weapon: "Lông vũ sắc bén/lông vũ chết người",
      lore: "Xayah là một nhà cách mạng vastaya chết chóc và chính xác, chiến đấu để đòi lại quyền thừa kế của người dân mình và giải phóng ma thuật hoang dã của Ionia khỏi sự xâm lấn của con người. Cô dẫn dắt các cuộc nổi dậy của vastaya, sử dụng lông vũ sắc bén của mình.",
      fullLore:
        "Khi còn nhỏ thuộc bộ tộc Lhotlan, Xayah chứng kiến sự xâm lấn của con người làm gián đoạn vùng đất và ma thuật vastaya, dẫn đến các hiệp ước bị phá vỡ. Bực bội vì sự rút lui của bộ tộc mình, cô trở thành một chiến binh tự do, sử dụng lông vũ chết người của mình để giải phóng ma thuật hoang dã và giành được biệt danh 'Kẻ Nổi Loạn Tím'.\n\nCô tham gia các cuộc nổi dậy của vastaya chống lại con người. Cuộc đời cô thay đổi khi gặp Rakan, người có sức hút và khả năng đánh lạc hướng đã chứng tỏ là vô giá. Mặc dù tính cách trái ngược nhau, họ trở nên không thể tách rời, điểm mạnh của họ bổ sung cho nhau. Cùng nhau, họ trở thành những chiến binh vastaya đáng gờm.\n\nCốt truyện của Xayah mô tả rõ ràng 'sự xâm lấn của con người' vào vùng đất vastaya và việc 'chặn' ma thuật hoang dã của Ionia, dẫn đến các hiệp ước bị phá vỡ. Đây là một cuộc xung đột nội bộ lâu dài trong Ionia, có trước và tách biệt với cuộc xâm lược của Noxus.",
      gameplay:
        "Xayah là một xạ thủ tầm xa sử dụng lông vũ của mình để gây sát thương và trói chân kẻ địch. Cơ chế độc đáo của cô liên quan đến việc triệu hồi lông vũ để trói chân mục tiêu, và chiêu cuối của cô cho phép cô trở nên không thể bị nhắm mục tiêu trong khi ném ra một quạt lông vũ.",
      skills: [
        {
          type: "Passive",
          name: "Nhát Cắt Sạch Sẽ (Clean Cuts)",
          description:
            "Sau khi sử dụng một kỹ năng, các đòn đánh thường tiếp theo của Xayah sẽ trúng tất cả các mục tiêu trên đường đi của chúng và để lại một Lông Vũ.",
        },
        {
          type: "Q",
          name: "Phi Dao Đôi (Double Daggers)",
          description:
            "Xayah ném hai dao găm gây sát thương cũng để lại Lông Vũ mà cô có thể triệu hồi.",
        },
        {
          type: "W",
          name: "Bộ Lông Tàn Sát (Deadly Plumage)",
          description:
            "Xayah tạo ra một cơn bão lưỡi kiếm tăng Tốc Độ Đánh và sát thương của cô, đồng thời tăng Tốc Độ Di Chuyển nếu cô tấn công một tướng.",
        },
        {
          type: "E",
          name: "Triệu Hồi Lông Vũ (Bladecaller)",
          description:
            "Xayah triệu hồi tất cả các Lông Vũ đã rơi của mình, gây sát thương và trói chân kẻ địch.",
        },
        {
          type: "R",
          name: "Bão Tố Nổi Loạn (Featherstorm)",
          description:
            "Xayah nhảy lên không trung, trở nên không thể bị nhắm mục tiêu và ném ra một quạt dao găm, để lại Lông Vũ mà cô có thể triệu hồi.",
        },
      ],
      specialFeatures: [
        "Mối quan hệ với Rakan là yếu tố cốt lõi trong bản sắc và lối chơi",
        "Thủ lĩnh trong cuộc nổi dậy của vastaya chống lại sự xâm lấn của con người",
        "'Lông vũ sắc bén' là độc đáo và chết chóc",
        "Mô tả rõ ràng cuộc xung đột nội bộ lâu dài trong Ionia",
        "'Sự hài hòa' của Ionia chủ yếu là lý tưởng lấy con người làm trung tâm",
        "Vastaya không chỉ là đồng minh mà còn là nhóm bị áp bức",
        "Cuộc nổi dậy đại diện cho cuộc đấu tranh quyền lực nội bộ đáng kể",
        "Có khả năng định hình lại cảnh quan chính trị và xã hội của khu vực",
      ],
    },
    {
      id: "yone",
      name: "Yone",
      fullName: "Yone, Kẻ Về Từ Cõi Chết (The Unforgotten)",
      icon: "👻",
      role: "Đấu Sĩ/Sát Thủ",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg",
      species: "Con người (tái sinh/liên kết linh hồn)",
      age: "Không rõ, nhưng là anh em cùng cha khác mẹ của Yasuo. Đã chết, sau đó được tái sinh",
      gender: "Nam (he/him)",
      weapon:
        "Kiếm của Azakana (linh kiếm) và kiếm thép của chính anh ta (song kiếm)",
      lore: "Yone, anh em cùng cha khác mẹ của Yasuo và một kiếm sĩ nổi tiếng, đã bị Yasuo giết. Anh ta tỉnh dậy trong thế giới linh hồn, bị một thực thể độc ác tên là azakana săn đuổi, mà anh ta đã đánh bại bằng chính thanh kiếm của nó. Giờ đây bị nguyền rủa phải đeo chiếc mặt nạ quỷ của nó, anh ta không ngừng săn lùng các sinh vật như vậy để hiểu trạng thái mới của mình và tìm ra kẻ mà tiếng cười của nó vẫn ám ảnh anh ta.",
      fullLore:
        "Khi còn sống, Yone là anh em cùng cha khác mẹ kiên nhẫn và kỷ luật của Yasuo, một học trò nổi tiếng của trường kiếm thuật làng họ. Anh ta bị Yasuo giết, người bị buộc tội sai về vụ giết sư phụ của họ. Yone tỉnh dậy trong thế giới linh hồn, bị một thực thể độc ác tên là azakana truy đuổi. Anh ta đã đánh bại nó bằng chính thanh kiếm của nó, nhưng giờ đây bị nguyền rủa phải đeo chiếc mặt nạ quỷ của nó, điều này cho phép anh ta nhìn thấy các azakana khác.\n\nAnh ta không ngừng săn lùng các sinh vật này, những kẻ ăn mòn sự tiêu cực, để hiểu mình đã trở thành gì và để tìm ra azakana mà tiếng cười của nó vẫn ám ảnh anh ta, hy vọng tìm được tên của nó để biến nó thành một chiếc mặt nạ không hoạt động.\n\nCốt truyện của Yone mô tả rõ ràng sự thức tỉnh của anh ta trong 'thế giới linh hồn' và khả năng tương tác với 'azakana', những thực thể độc ác ăn mòn sự tiêu cực. Đây là một biểu hiện trực tiếp, hữu hình của ảnh hưởng của thế giới linh hồn đối với thế giới vật chất và đối với các cá nhân.",
      gameplay:
        "Yone là một đấu sĩ/sát thủ cận chiến sử dụng song kiếm, kết hợp sát thương vật lý và phép thuật. Anh ta có thể lướt, tạo lá chắn và tạm thời rời khỏi cơ thể để gây sát thương, sau đó quay trở lại, lặp lại một phần sát thương đã gây ra.",
      skills: [
        {
          type: "Passive",
          name: "Con Đường Thợ Săn (Way of the Hunter)",
          description:
            "Yone gây sát thương phép với mỗi đòn đánh thứ hai. Ngoài ra, tỷ lệ chí mạng của anh ta được tăng lên.",
        },
        {
          type: "Q",
          name: "Tử Kiếm (Mortal Steel)",
          description:
            "Đâm về phía trước, gây sát thương vật lý cho tất cả kẻ địch theo một đường thẳng. Khi trúng, nhận một điểm cộng dồn của Bão Tố. Với 2 điểm cộng dồn, Tử Kiếm đẩy Yone về phía trước với một luồng gió hất tung kẻ địch.",
        },
        {
          type: "W",
          name: "Linh Hồn Chia Cắt (Spirit Cleave)",
          description:
            "Chém về phía trước, gây sát thương vật lý và phép thuật theo hình nón. Cấp một lá chắn cho Yone, giá trị được tăng lên theo số lượng tướng bị trúng đòn chém. Thời gian hồi chiêu và thời gian vận sức của Linh Hồn Chia Cắt tăng theo tốc độ tấn công.",
        },
        {
          type: "E",
          name: "Giải Thoát Linh Hồn (Soul Unbound)",
          description:
            "Linh hồn của Yone rời khỏi cơ thể, tăng tốc độ di chuyển. Khi kỹ năng này kết thúc, linh hồn của Yone bị buộc quay trở lại cơ thể và anh ta lặp lại một phần sát thương đã gây ra khi còn là linh hồn.",
        },
        {
          type: "R",
          name: "Định Mệnh Triệu Hồi (Fate Sealed)",
          description:
            "Yone dịch chuyển tức thời phía sau tướng cuối cùng theo một đường thẳng với một cú chém mạnh mẽ đến mức kéo tất cả kẻ địch trúng phải về phía anh ta.",
        },
      ],
      specialFeatures: [
        "Sự hồi sinh và biến đổi sau cái chết",
        "Mối liên hệ với thế giới linh hồn và khả năng nhìn/săn azakana",
        "Mối quan hệ bi thảm với anh em cùng cha khác mẹ Yasuo",
        "Biểu hiện trực tiếp của ảnh hưởng thế giới linh hồn đối với thế giới vật chất",
        "Vượt ra ngoài 'sự cân bằng' của Kinkou",
        "Khía cạnh đen tối, mang tính săn mồi của cõi tâm linh",
        "Thực thể nguy hiểm, ký sinh săn mồi cảm xúc con người",
        "Trận chiến thường xuyên, vô hình ảnh hưởng đến hạnh phúc cảm xúc và tinh thần người Ionia",
      ],
    },
    {
      id: "zed",
      name: "Zed",
      fullName: "Zed, Chúa Tể Bóng Tối (The Master of Shadows)",
      icon: "👤",
      role: "Sát Thủ",
      region: "ionia",
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
      species: "Con người",
      age: "Không rõ, nhưng là một 'cậu bé' được Kusho nhận nuôi, lớn lên cùng Shen. Có thể là người trưởng thành",
      gender: "Nam (he/him)",
      weapon: "Ma thuật bóng tối, phi tiêu, lưỡi kiếm",
      releaseDate: "13/11/2012",
      loreConnections: [
        "Akali",
        "Shen",
        "Kennen",
        "Jhin",
        "Kayn",
        "Nocturne",
        "Gangplank",
        "Hwei",
      ],
      weaponSummary: "Dao găm",
      lore: "Zed là người bạn thân nhất và đối thủ của Shen trong Hội Kinkou. Bực bội vì sự thiếu hành động của họ, anh ta đã khám phá ra ma thuật bóng tối bị cấm trong một chiếc hộp đen, sử dụng nó để dàn dựng một cuộc đảo chính, giết chết sư phụ Kusho, và thành lập Hội Bóng Tối. Giờ đây anh ta tàn nhẫn quân sự hóa các truyền thống của Ionia để trục xuất những kẻ xâm lược và đảm bảo sự thống trị của Ionia.",
      fullLore:
        "Zed được Đại Sư Kusho của Hội Kinkou nhận nuôi, nhanh chóng xuất sắc nhưng cảm thấy bị Shen che khuất. Họ như anh em. Họ đã săn lùng Khada Jhin, người mà Kusho đã chọn giam cầm. Zed oán giận sự thiếu hành động này và, tìm kiếm sức mạnh lớn hơn, đã khám phá ra ma thuật bóng tối bị cấm trong một chiếc hộp đen trong hầm mộ của ngôi đền.\n\nBóng tối đã nuôi dưỡng sự cay đắng của anh ta, cho anh ta thấy sự khinh thường đối với kẻ yếu. Anh ta trở về ngôi đền, đối mặt với Kusho, và giết ông ta, sau đó chiếm lấy ngôi đền cho Hội Bóng Tối của mình, huấn luyện các tân binh trong bóng tối. Anh ta tin rằng sự hài hòa tâm linh ít quan trọng hơn việc đảm bảo chiến thắng của Ionia, tàn nhẫn loại bỏ các mối đe dọa và nhận Kayn làm học trò cá nhân của mình.\n\nQuyết định của Zed chấp nhận ma thuật bóng tối bị cấm và giết sư phụ của mình được thúc đẩy bởi niềm tin rằng 'sự hài hòa tâm linh ít quan trọng hơn việc đảm bảo chiến thắng của Ionia.' Đây là một ví dụ rõ ràng về một nhân vật biện minh cho các phương tiện đen tối vì một lợi ích lớn hơn được nhận thức.",
      gameplay:
        "Zed là một sát thủ cận chiến dựa trên năng lượng, nổi tiếng với sát thương dồn dập cao, khả năng thao túng bóng tối và khả năng đánh dấu mục tiêu để kết liễu chậm. Lối chơi của anh ta liên quan đến việc sử dụng bóng tối một cách khéo léo để di chuyển, đánh lừa và tăng sát thương.",
      skills: [
        {
          type: "Passive",
          name: "Khinh Thường Kẻ Yếu (Contempt for the Weak)",
          description:
            "Các đòn đánh thường của Zed chống lại các mục tiêu yếu máu gây thêm sát thương phép.",
        },
        {
          type: "Q",
          name: "Phi Tiêu Sắc Lẻm (Razor Shuriken)",
          description:
            "Zed và các bóng của anh ta ném phi tiêu, gây sát thương vật lý.",
        },
        {
          type: "W",
          name: "Phân Thân Bóng Tối (Living Shadow)",
          description:
            "Nội tại: Zed nhận năng lượng bất cứ khi nào anh ta và các bóng của anh ta đánh trúng kẻ địch bằng cùng một kỹ năng. Năng lượng chỉ có thể nhận được một lần mỗi kỹ năng sử dụng. Kích hoạt: Bóng của Zed lướt về phía trước, ở lại vị trí trong vài giây. Tái kích hoạt Phân Thân Bóng Tối sẽ khiến Zed đổi vị trí với bóng này.",
        },
        {
          type: "E",
          name: "Đường Kiếm Bóng Tối (Shadow Slash)",
          description:
            "Zed và các bóng của anh ta chém, gây sát thương vật lý cho kẻ địch gần đó. Mỗi tướng địch bị chém bởi Zed giảm thời gian hồi chiêu của Phân Thân Bóng Tối đi 3 giây. Kẻ địch bị trúng nhiều nhát chém không nhận thêm sát thương nhưng hiệu ứng làm chậm được tăng thêm 50%.",
        },
        {
          type: "R",
          name: "Dấu Ấn Tử Thần (Death Mark)",
          description:
            "Zed trở nên không thể bị nhắm mục tiêu và lướt đến một tướng địch, đánh dấu chúng. Sau 3 giây, dấu ấn kích hoạt, lặp lại một phần sát thương vật lý mà Zed đã gây ra cho mục tiêu khi dấu ấn còn hiệu lực.",
        },
      ],
      specialFeatures: [
        "Người sáng lập và lãnh đạo Hội Bóng Tối",
        "Thành thạo ma thuật bóng tối bị cấm",
        "Sự phản bội Hội Kinkou và vụ giết Kusho là sự kiện then chốt",
        "Phản ứng trực tiếp đối với sự 'thiếu hành động' được nhận thức của Hội Kinkou",
        "Sự thay đổi tư tưởng nguy hiểm trong Ionia",
        "Mục đích biện minh cho phương tiện",
        "Thách thức trực tiếp đối với các giá trị truyền thống của Ionia",
        "Thành công trong việc thu hút những người theo dõi như Kayn",
        "Đại diện cho tương lai nơi khu vực mạnh mẽ nhưng bị tổn hại về mặt đạo đức",
      ],
    },
  ],
  newChampions: [
    {
      name: "Kenshin, Thiền Sư Kiếm Đạo",
      icon: "🧘",
      role: "Đấu Sĩ",
      region: "ionia",
      lore: "Kiếm sĩ tu tâm, cân bằng giữa tĩnh tâm và chiến đấu quyết liệt.",
      skills: [
        "Q: Thiền Định",
        "W: Kiếm Khí",
        "E: Bước Nhảy Linh Hoạt",
        "R: Thần Kiếm Vô Ngã",
      ],
    },
  ],
};
