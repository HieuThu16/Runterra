// Void Region Data - Hư Không
const voidData = {
  id: "void",
  name: "Hư Không",
  icon: "🕳️",
  existingChampions: [
    {
      id: "belveth",
      name: "Bel'Veth",
      fullName: "Bel'Veth, Nữ Hoàng Hư Không (The Empress of the Void)",
      icon: "👑",
      role: "Đấu Sĩ",
      region: "void",
      species: "Thực thể Hư Không (Voidborn / Alien creature)",
      age: "Hàng thiên niên kỷ (untold millennia), là một trong những thực thể Hư Không cổ xưa nhất",
      gender: "Nữ (được gọi là 'Nữ hoàng,' 'she/her')",
      weapon:
        "Bản thân cô ta là một sinh vật quái dị có khả năng biến đổi. Có thể chuyển đổi giữa dạng người thích nghi và hình dạng quái vật khổng lồ với đôi cánh lớn. Điều khiển Biển Oải Hương và triệu hồi Remora",
      lore: "Bel'Veth là Nữ hoàng Hư Không, một thực thể kinh hoàng sinh ra từ ký ức, kinh nghiệm và cảm xúc tổng hợp của toàn bộ một thành phố cảng bị nuốt chửng cùng đại dương xung quanh.",
      fullLore:
        "Bel'Veth là Nữ hoàng Hư Không, một thực thể kinh hoàng sinh ra từ ký ức, kinh nghiệm và cảm xúc tổng hợp của toàn bộ một thành phố cảng bị nuốt chửng cùng đại dương xung quanh. Cô ta được mô tả như một dạng 'ung thư đen' đã di căn vào trung tâm của Hư Không, với khao khát tái tạo toàn bộ Runeterra theo hình ảnh méo mó của riêng mình.\n\nTrí tuệ của cô ta gần như toàn tri, chứa đựng hàng triệu năm kiến thức được bảo tồn hoàn hảo, cho phép cô ta chuẩn bị cho sự hủy diệt cả Runeterra và lãnh địa của những kẻ tạo ra cô ta, các Giám Hộ. Sự xuất hiện của Bel'Veth như một 'ung thư đen' di căn trong Hư Không và khả năng tái sử dụng các thành phố bị nuốt chửng thành 'Biển Oải Hương' cho thấy một hình thức biến chất Hư Không độc đáo, không chỉ là hủy diệt mà còn là đồng hóa và sáng tạo méo mó.\n\nKhả năng kiểm soát Biển Oải Hương như một phần mở rộng của ý chí cô ta càng củng cố điều này, cho thấy một ý thức tập thể và sự kiểm soát mà các sinh vật Hư Không khác không có. Điều này đánh dấu một sự tiến hóa đáng kể của mối đe dọa Hư Không, chuyển từ những quái vật vô tri thành một thực thể chiến lược, thông minh và có khả năng biến đổi.",
      gameplay:
        "Lối chơi của Bel'Veth tập trung vào tốc độ đánh và hiệu ứng đòn đánh. Cô ta có khả năng tăng tốc độ đánh vĩnh viễn khi hạ gục quái vật lớn và tướng, đồng thời nhận tốc độ đánh tạm thời sau khi sử dụng kỹ năng. Khả năng tăng sức mạnh thông qua việc hạ gục mục tiêu và biến hình trực tiếp phản ánh cốt truyện của cô ta về việc tiêu thụ và phát triển, củng cố vai trò của cô ta như một 'Nữ hoàng' chỉ huy các sinh vật cấp thấp hơn.",
      skills: [
        {
          type: "Passive",
          name: "Tử Vong trong Biển Oải Hương (Death in Lavender Sea)",
          description:
            "Bel'Veth tăng tốc độ đánh vĩnh viễn khi hạ gục tướng địch hoặc quái vật lớn. Sau khi sử dụng kỹ năng, cô ta nhận tốc độ đánh tạm thời.",
        },
        {
          type: "Q",
          name: "Lướt Vượt (Void Surge)",
          description:
            "Bel'Veth lướt nhanh về một hướng, gây sát thương cho kẻ địch trên đường đi. Có thể sử dụng nhiều lần liên tiếp.",
        },
        {
          type: "W",
          name: "Đòn Đuôi Trên Cao (Above and Below)",
          description:
            "Bel'Veth hất tung kẻ địch bằng đòn đánh đuôi, gây sát thương và làm chậm. Kẻ địch bị hất tung sẽ nhận thêm sát thương khi rơi xuống.",
        },
        {
          type: "E",
          name: "Gió Hoàng Gia (Royal Maelstrom)",
          description:
            "Bel'Veth tạo ra một cơn lốc xung quanh mình, giảm sát thương nhận vào, hút máu từ kẻ địch và tăng tốc độ đánh.",
        },
        {
          type: "R",
          name: "Tiền Thân Vô Hạn (Endless Banquet)",
          description:
            "Bel'Veth biến hình thành dạng thật của mình, tăng máu tối đa, tầm đánh, tốc độ đánh và có thể triệu hồi các Remora để tấn công kẻ địch.",
        },
      ],
      specialFeatures: [
        "Nữ hoàng Hư Không với trí tuệ gần như toàn tri",
        "Khả năng biến đổi giữa dạng người và dạng quái vật khổng lồ",
        "Điều khiển Biển Oải Hương như phần mở rộng của ý chí",
        "Triệu hồi Remora - những sinh vật Hư Không nhỏ",
        "Đại diện cho sự tiến hóa của mối đe dọa Hư Không",
        "Ung thư đen' di căn vào trung tâm Hư Không",
        "Khao khát tái tạo Runeterra theo hình ảnh méo mó",
        "Thể hiện sự đồng hóa và sáng tạo méo mó thay vì chỉ hủy diệt",
      ],
    },
    {
      id: "kaisa",
      name: "Kai'Sa",
      fullName: "Kai'Sa, Con Gái Của Hư Không (Daughter of the Void)",
      icon: "🏹",
      role: "Xạ Thủ",
      region: "void",
      species:
        "Con người được tăng cường/biến đổi bởi Hư Không (Enhanced Human / Human-Void symbiosis)",
      age: "Khoảng 20 tuổi (bị nuốt chửng khi 10 tuổi và sống sót trong Hư Không gần một thập kỷ)",
      gender: "Nữ (được gọi là 'Cô gái,' 'she/her')",
      weapon:
        "Lớp vỏ Hư Không sống (living Void carapace) cho phép tạo ra các vụ nổ năng lượng Hư Không (plasma blasts) từ vai và tay, cũng như tạo ra rào chắn năng lượng",
      lore: "Kai'Sa là một người sống sót từ Shurima, bị Hư Không nuốt chửng khi còn nhỏ. Cô đã sống sót nhờ sự kiên cường và ý chí mạnh mẽ, hình thành mối quan hệ cộng sinh với một sinh vật Hư Không sống.",
      fullLore:
        "Kai'Sa là một người sống sót từ Shurima, bị Hư Không nuốt chửng khi còn nhỏ. Cô đã sống sót nhờ sự kiên cường và ý chí mạnh mẽ, hình thành mối quan hệ cộng sinh với một sinh vật Hư Không sống, biến nó thành một lớp vỏ sinh học bảo vệ. Giờ đây, cô chiến đấu chống lại Hư Không nhưng lại bị chính thế giới mà cô bảo vệ coi là quái vật.\n\nKai'Sa đại diện cho một sự đối lập độc đáo trong các tướng Hư Không: cô là một người sống sót là con người đã thích nghi với Hư Không thay vì bị biến chất hoàn toàn hoặc sinh ra từ nó. Mối quan hệ cộng sinh này cho phép cô giữ lại nhân tính trong khi có được sức mạnh Hư Không, dẫn đến việc cô bị gọi là 'Con gái của Hư Không' nhưng cũng phải vật lộn để được chấp nhận bởi thế giới mà cô cố gắng bảo vệ.\n\nSự tồn tại của cô thể hiện khả năng thích nghi và sự kiên cường của con người trước mối đe dọa vũ trụ, đồng thời cũng cho thấy cái giá phải trả khi phải hy sinh một phần nhân tính để có được sức mạnh cần thiết để chiến đấu với cái ác.",
      gameplay:
        "Lối chơi của Kai'Sa tập trung vào việc gây sát thương phép cộng thêm từ đòn đánh thường (Nội tại: Plasma) và nâng cấp kỹ năng cơ bản thông qua mua trang bị. Cô có khả năng thích nghi với nhiều tình huống khác nhau thông qua các bản nâng cấp kỹ năng, từ gây sát thương đến hỗ trợ và cơ động.",
      skills: [
        {
          type: "Passive",
          name: "Plasma Thứ Hai (Second Skin)",
          description:
            "Đòn đánh và kỹ năng của Kai'Sa đánh dấu kẻ địch bằng Plasma. Khi đạt đủ số lượng, Plasma sẽ nổ gây sát thương phép. Kỹ năng của Kai'Sa có thể tiến hóa dựa trên chỉ số trang bị.",
        },
        {
          type: "Q",
          name: "Mưa Icathia (Icathian Rain)",
          description:
            "Kai'Sa bắn một loạt tên lửa tìm mục tiêu gần nhất. Số lượng tên lửa tăng theo cấp độ. Tiến hóa: Tăng số lượng tên lửa.",
        },
        {
          type: "W",
          name: "Tia Truy Kích Hư Không (Void Seeker)",
          description:
            "Kai'Sa bắn một tia năng lượng tầm xa, gây sát thương và đánh dấu Plasma cho kẻ địch đầu tiên trúng đòn. Tiến hóa: Giảm thời gian hồi và tăng sát thương.",
        },
        {
          type: "E",
          name: "Tích Tụ Năng Lượng (Supercharge)",
          description:
            "Kai'Sa tích lũy năng lượng, tăng tốc độ di chuyển và sau một thời gian ngắn sẽ tăng tốc độ đánh. Tiến hóa: Trở nên tàng hình trong thời gian ngắn.",
        },
        {
          type: "R",
          name: "Bản Năng Sát Thủ (Killer Instinct)",
          description:
            "Kai'Sa lướt nhanh đến gần tướng địch bị đánh dấu Plasma, nhận một lá chắn lớn. Chỉ có thể sử dụng khi kẻ địch ở gần và bị đánh dấu Plasma.",
        },
      ],
      specialFeatures: [
        "Người sống sót duy nhất từ Hư Không vẫn giữ được nhân tính",
        "Mối quan hệ cộng sinh độc đáo với sinh vật Hư Không",
        "Khả năng tiến hóa kỹ năng thông qua trang bị",
        "Đại diện cho sự thích nghi và kiên cường của con người",
        "Bị thế giới coi là quái vật dù cố gắng bảo vệ",
        "Cân bằng giữa nhân tính và sức mạnh Hư Không",
        "Biểu tượng của hy sinh cá nhân vì lợi ích chung",
        "Thể hiện cái giá phải trả để có được sức mạnh chống lại cái ác",
      ],
    },
    {
      id: "kassadin",
      name: "Kassadin",
      fullName: "Kassadin, Kẻ Du Hành Hư Không (The Void Walker)",
      icon: "⚡",
      role: "Sát Thủ/Pháp Sư",
      region: "void",
      species: "Con người (Human - đã bị biến đổi bởi Hư Không)",
      age: "Khoảng 40-50 tuổi (ước tính lớn hơn Kai'Sa khoảng 20-30 tuổi)",
      gender: "Nam (he/him)",
      weapon: "Lưỡi Kiếm Hư Không (Void Blade) và Đá Hư Không (Void Stone)",
      lore: "Kassadin là một kẻ du hành và nhà thám hiểm Shurima, từng có một gia đình yên bình.",
      fullLore:
        "Kassadin là một kẻ du hành và nhà thám hiểm Shurima, từng có một gia đình yên bình. Tuy nhiên, làng của ông đã bị Hư Không nuốt chửng, khiến ông thề sẽ trả thù. Ông đã kết hợp nhiều tạo tác arcane và công nghệ bị cấm để chuẩn bị cho cuộc chiến phía trước, sẵn sàng đối mặt với bất kỳ sinh vật Hư Không nào trong cuộc tìm kiếm nhà tiên tri tự xưng của chúng, Malzahar.\n\nĐộng lực của Kassadin hoàn toàn là sự trả thù Hư Không vì mất mát cá nhân, điều này trái ngược hoàn toàn với sự sùng bái Hư Không cuồng nhiệt của Malzahar. Sự đối lập này tạo ra một cuộc xung đột trực tiếp giữa hai nhân vật con người đều đã bị Hư Không thay đổi sâu sắc, nhưng theo những cách đối lập nhau, làm nổi bật các phản ứng đa dạng của con người trước một mối đe dọa vũ trụ.",
      gameplay:
        "Lối chơi của Kassadin tập trung vào khả năng gây sát thương phép lớn và cơ động cao ở giai đoạn cuối game, trong khi giai đoạn đầu game của anh ta khá yếu. Anh ta có khả năng giảm sát thương phép và bỏ qua va chạm đơn vị, bắn cầu năng lượng gây sát thương và tạo khiên phép, tăng sát thương đòn đánh thường, gây sát thương diện rộng, và dịch chuyển tầm ngắn với khả năng sử dụng liên tục khi đạt cấp độ cao.",
      skills: [
        {
          type: "Passive",
          name: "Đá Hư Không (Void Stone)",
          description:
            "Kassadin giảm 15% sát thương phép và bỏ qua va chạm đơn vị khi di chuyển qua kẻ địch.",
        },
        {
          type: "Q",
          name: "Quả Cầu Hư Không (Null Sphere)",
          description:
            "Kassadin bắn một quả cầu năng lượng gây sát thương phép và câm lặng mục tiêu, đồng thời tạo ra một lá chắn phép thuật cho bản thân.",
        },
        {
          type: "W",
          name: "Lưỡi Kiếm Năng Lượng (Nether Blade)",
          description:
            "Đòn đánh tiếp theo của Kassadin gây thêm sát thương phép và khôi phục năng lượng. Nếu đánh trúng tướng địch, thời gian hồi của kỹ năng này sẽ được giảm.",
        },
        {
          type: "E",
          name: "Xung Kích Năng Lượng (Force Pulse)",
          description:
            "Kassadian phóng một làn sóng năng lượng theo hình nón, gây sát thương phép và làm chậm kẻ địch. Kỹ năng này chỉ có thể sử dụng sau khi các kỹ năng khác được dùng gần Kassadin một số lần nhất định.",
        },
        {
          type: "R",
          name: "Dịch Chuyển Hư Không (Riftwalk)",
          description:
            "Kassadin dịch chuyển tức thời đến vị trí mục tiêu, gây sát thương phép cho kẻ địch xung quanh điểm đến. Mỗi lần sử dụng liên tiếp trong thời gian ngắn sẽ tăng chi phí năng lượng và sát thương.",
        },
      ],
      specialFeatures: [
        "Khả năng dịch chuyển tức thời với khoảng cách ngắn giúp Kassadin có độ cơ động cao",
        "Kỹ năng cuối có thể sử dụng liên tục ở giai đoạn cuối game khi có đủ năng lượng",
        "Khả năng chống phép thuật tự nhiên giúp chống lại các pháp sư",
        "Là biểu tượng của sự trả thù và quyết tâm chống lại Hư Không",
        "Đại diện cho phản ứng của con người trước mối đe dọa từ Hư Không",
        "Cuộc xung đột cá nhân với Malzahar thể hiện hai cách tiếp cận trái ngược về Hư Không",
      ],
    },
    {
      id: "chogath",
      name: "Cho'Gath",
      fullName: "Cho'Gath, Nỗi Kinh Hoàng Hư Không (The Terror of the Void)",
      icon: "👹",
      role: "Đỡ Đòn/Pháp Sư",
      region: "void",
      species: "Sinh vật Hư Không (Voidborn / Alien creature)",
      age: "Sinh vật cổ xưa từ Hư Không, tồn tại hàng thiên niên kỷ",
      gender: "Không xác định rõ ràng, thường được gọi là 'nó' hoặc 'hắn'",
      weapon:
        "Cơ thể chuyển hóa - có thể biến vật chất thành cơ bắp hoặc lớp vỏ cứng như kim cương",
      lore: "Cho'Gath là một nỗi kinh hoàng của Hư Không, một sinh vật bản năng nguyên thủy bị thúc đẩy bởi cơn đói khát không đáy.",
      fullLore:
        "Cho'Gath là một nỗi kinh hoàng của Hư Không, một sinh vật bản năng nguyên thủy bị thúc đẩy bởi cơn đói khát không đáy. Hắn là một biểu hiện thuần túy của khao khát tiêu thụ mọi sự sống của Hư Không, liên tục nuốt chửng để phát triển kích thước và sức mạnh.\n\nCho'Gath thể hiện cơn đói nguyên thủy, không thể thỏa mãn của Hư Không. Cơ chế lối chơi 'Nuốt Chửng' của hắn trực tiếp chuyển hóa cốt truyện này thành một hệ thống tiến triển cốt lõi, nơi việc tiêu thụ dẫn đến sự phát triển thể chất và sức mạnh. Mối liên hệ trực tiếp giữa cốt truyện và cơ chế này là một yếu tố chủ đề mạnh mẽ.",
      gameplay:
        "Lối chơi của Cho'Gath xoay quanh việc tăng kích thước và máu tối đa bằng cách ăn thịt kẻ địch bằng kỹ năng cuối 'Feast' (Nuốt Chửng). Hắn có khả năng hồi máu và năng lượng khi hạ gục mục tiêu, hất tung và làm chậm kẻ địch, câm lặng kẻ địch, và gây sát thương/làm chậm bằng gai.",
      skills: [
        {
          type: "Passive",
          name: "Ăn Thịt (Carnivore)",
          description:
            "Khi hạ gục một đơn vị, Cho'Gath khôi phục máu và năng lượng. Lượng hồi phục tăng theo cấp độ.",
        },
        {
          type: "Q",
          name: "Rạn Nứt (Rupture)",
          description:
            "Sau một khoảng thời gian trì hoãn, đất tại vị trí mục tiêu sẽ nổ tung, hất tung và gây sát thương cho kẻ địch trong khu vực, đồng thời làm chậm họ.",
        },
        {
          type: "W",
          name: "Tiếng Hét Hoang Dã (Feral Scream)",
          description:
            "Cho'Gath phát ra một tiếng hét, gây sát thương phép và câm lặng tất cả kẻ địch trong một hình nón phía trước.",
        },
        {
          type: "E",
          name: "Gai Xoắn Ốc (Vorpal Spikes)",
          description:
            "Những cú đánh của Cho'Gath và kỹ năng sẽ phóng ra những chiếc gai, gây sát thương phép cho kẻ địch trong một đường thẳng và làm chậm họ.",
        },
        {
          type: "R",
          name: "Nuốt Chửng (Feast)",
          description:
            "Cho'Gath gây sát thương thực sự khổng lồ cho một kẻ địch. Nếu kỹ năng này hạ gục mục tiêu, Cho'Gath sẽ tăng kích thước và máu tối đa vĩnh viễn. Sát thương tăng dựa trên máu tối đa của Cho'Gath.",
        },
      ],
      specialFeatures: [
        "Khả năng tăng kích thước và máu tối đa vĩnh viễn thông qua kỹ năng cuối",
        "Cơ chế 'Nuốt Chửng' phản ánh trực tiếp bản chất tiêu thụ trong cốt truyện",
        "Sự kết hợp mạnh mẽ giữa lối chơi và cốt truyện",
        "Biểu tượng của cơn đói không đáy của Hư Không",
        "Khả năng kiểm soát đám đông với multiple CC abilities",
        "Sức mạnh tăng theo thời gian thông qua việc 'ăn thịt' kẻ địch",
      ],
    },
    {
      id: "khazix",
      name: "Kha'Zix",
      fullName: "Kha'Zix, Kẻ Săn Mồi Tiến Hóa (The Voidreaver)",
      icon: "🦂",
      role: "Sát Thủ",
      region: "void",
      species: "Sinh vật Hư Không (Voidborn / Alien predator)",
      age: "Không rõ, nhưng được mô tả là một sinh vật Hư Không cổ xưa",
      gender: "Nam (he/him)",
      weapon: "Cơ thể tự tiến hóa - móng vuốt sắc bén và khả năng bắn gai",
      lore: "Kha'Zix là một kẻ săn mồi siêu tiến hóa, xâm nhập Valoran để tiêu thụ những sinh vật mạnh mẽ nhất.",
      fullLore:
        "Kha'Zix là một kẻ săn mồi siêu tiến hóa, xâm nhập Valoran để tiêu thụ những sinh vật mạnh mẽ nhất của vùng đất và hấp thụ sức mạnh của chúng, đặc biệt là Rengar, kẻ mà hắn coi là đối thủ ngang tài. Hắn không ngừng thích nghi và trở nên hoàn hảo hơn qua mỗi lần tiêu thụ con mồi.\n\n'Cuộc chạy đua vũ trang tiến hóa' của Kha'Zix và sự tập trung vào 'mục tiêu bị cô lập' trong lối chơi trực tiếp phản ánh cốt truyện của hắn như một kẻ săn mồi hoàn hảo, thích nghi bằng cách tiêu thụ những kẻ mạnh nhất. Điều này tạo ra một vòng lặp lối chơi chiến lược, nơi người chơi phải xác định và khai thác những kẻ địch bị cô lập, phản ánh bản chất săn mồi của hắn.",
      gameplay:
        "Lối chơi của Kha'Zix tập trung vào khả năng ám sát mục tiêu bị cô lập (isolated targets) và tiến hóa kỹ năng để thích nghi với từng trận đấu. Hắn có khả năng tàng hình và tăng tốc độ di chuyển, gây sát thương vật lý bằng móng vuốt, bắn gai hồi máu, và nhảy xa.",
      skills: [
        {
          type: "Passive",
          name: "Chủ Nghĩa Vô Hình (Unseen Threat)",
          description:
            "Khi Kha'Zix không hiển thị với đội địch, đòn đánh tiếp theo của hắn sẽ gây thêm sát thương phép và làm chậm mục tiêu.",
        },
        {
          type: "Q",
          name: "Nếm Mùi Sợ Hãi (Taste Their Fear)",
          description:
            "Kha'Zix tấn công bằng móng vuốt, gây sát thương vật lý. Sát thương tăng đáng kể nếu mục tiêu bị cô lập (không có đồng minh nào gần đó).",
        },
        {
          type: "W",
          name: "Gai Hư Không (Void Spike)",
          description:
            "Kha'Zix bắn gai theo một đường thẳng, gây sát thương vật lý và làm chậm kẻ địch. Nếu Kha'Zix ở trong tầm đánh, hắn sẽ được hồi máu.",
        },
        {
          type: "E",
          name: "Nhảy (Leap)",
          description:
            "Kha'Zix nhảy đến vị trí mục tiêu, gây sát thương vật lý cho kẻ địch trong khu vực hạ cánh. Nếu hạ gục tướng địch, thời gian hồi của kỹ năng này sẽ được thiết lập lại.",
        },
        {
          type: "R",
          name: "Đột Kích Hư Không (Void Assault)",
          description:
            "Kha'Zix trở nên tàng hình trong một thời gian ngắn và tăng tốc độ di chuyển. Kỹ năng này có thể sử dụng tối đa 3 lần trong mỗi lần kích hoạt.",
        },
      ],
      evolutionOptions: [
        "Tiến hóa Q: Tăng sát thương và phạm vi đánh",
        "Tiến hóa W: Bắn 3 gai thay vì 1, tăng phạm vi và hiệu ứng",
        "Tiến hóa E: Tăng phạm vi nhảy và thiết lập lại khi hạ gục đồng minh",
        "Tiến hóa R: Thêm 1 lần sử dụng và giảm thời gian hiển thị khi tấn công",
      ],
      specialFeatures: [
        "Hệ thống tiến hóa độc đáo cho phép nâng cấp kỹ năng theo lựa chọn",
        "Chuyên săn mục tiêu bị cô lập, phản ánh bản chất kẻ săn mồi",
        "Khả năng thiết lập lại kỹ năng E khi hạ gục tướng địch",
        "Cơ chế tàng hình giúp tiếp cận và thoát khỏi giao tranh",
        "Biểu tượng của sự thích nghi và tiến hóa liên tục",
        "Mối quan hệ đối địch kinh điển với Rengar tạo ra dynamic gameplay",
      ],
    },
    {
      id: "malzahar",
      name: "Malzahar",
      fullName: "Malzahar, Nhà Tiên Tri Hư Không (The Prophet of the Void)",
      icon: "🔮",
      role: "Pháp Sư",
      region: "void",
      species:
        "Con người bị biến đổi bởi Hư Không (Human / Void-corrupted human)",
      age: "Không rõ, nhưng là người Shurima từ thời hiện đại hơn (không phải cổ đại)",
      gender: "Nam (he/him)",
      weapon:
        "Phép thuật Hư Không để triệu hồi các sinh vật Hư Không nhỏ (Voidlings) và gây ra các hiệu ứng ma thuật khác",
      lore: "Malzahar là một nhà tiên tri Shurima, người đã bị Hư Không biến đổi sau khi nhìn vào vực thẳm Icathia.",
      fullLore:
        "Malzahar là một nhà tiên tri Shurima, người đã bị Hư Không biến đổi sau khi nhìn vào vực thẳm Icathia. Giờ đây, hắn tin rằng Hư Không là sự cứu rỗi cho Runeterra và tìm cách đẩy nhanh sự diệt vong của thế giới, truyền bá ảnh hưởng của mình và triệu hồi các sinh vật Hư Không.\n\nSự biến đổi của Malzahar từ một nhà tiên tri thành một kẻ cuồng tín tin rằng Hư Không là 'sự cứu rỗi' làm nổi bật sự biến chất về mặt tâm lý và ý thức hệ mà Hư Không có thể gây ra, chứ không chỉ là biến đổi vật lý. Điều này cho thấy Hư Không không chỉ đơn thuần là một lực lượng hủy diệt mà còn có khả năng thao túng niềm tin và tư tưởng, tạo ra một mối đe dọa phức tạp hơn.",
      gameplay:
        "Lối chơi của Malzahar tập trung vào sát thương theo thời gian (DoT), khả năng đẩy đường nhanh, kiểm soát mục tiêu đơn lẻ bằng chiêu cuối khống chế cứng, và triệu hồi Voidlings để gây sát thương và chặn kỹ năng.",
      skills: [
        {
          type: "Passive",
          name: "Dịch Chuyển Hư Không (Void Shift)",
          description:
            "Malzahar có khả năng miễn nhiễm khống chế và giảm sát thương tạm thời khi không bị tấn công trong một thời gian.",
        },
        {
          type: "Q",
          name: "Tiếng Gọi Hư Không (Call of the Void)",
          description:
            "Malzahar mở hai cánh cửa Hư Không, gây sát thương ma thuật và câm lặng kẻ địch ở giữa chúng.",
        },
        {
          type: "W",
          name: "Bầy Bọ Hư Không (Void Swarm)",
          description:
            "Malzahar triệu hồi Voidlings để tấn công kẻ địch gần đó. Voidlings sẽ tập trung tấn công mục tiêu bị ảnh hưởng bởi Ám Ảnh Kinh Hoàng.",
        },
        {
          type: "E",
          name: "Ám Ảnh Kinh Hoàng (Malefic Visions)",
          description:
            "Malzahar gây sát thương ma thuật theo thời gian cho mục tiêu. Khi mục tiêu chết, kỹ năng sẽ truyền sang kẻ địch gần đó và khôi phục năng lượng cho Malzahar.",
        },
        {
          type: "R",
          name: "Âm Ti Trói Buộc (Nether Grasp)",
          description:
            "Malzahar trấn áp mục tiêu, gây sát thương ma thuật theo thời gian và tạo ra một vùng Hư Không gây sát thương cho kẻ địch xung quanh.",
        },
      ],
      specialFeatures: [
        "Khả năng miễn nhiễm khống chế tạm thời với passive Void Shift",
        "Triệu hồi Voidlings để hỗ trợ trong chiến đấu và đẩy đường",
        "Sát thương theo thời gian mạnh mẽ với khả năng lây lan",
        "Chiêu cuối trấn áp mục tiêu là công cụ khống chế mạnh nhất game",
        "Thể hiện sự biến chất tâm lý của Hư Không thay vì chỉ biến đổi vật lý",
        "Đại diện cho khả năng thao túng niềm tin và tư tưởng của Hư Không",
      ],
    },
    {
      id: "velkoz",
      name: "Vel'Koz",
      fullName: "Vel'Koz, Con Mắt Hư Không (The Eye of the Void)",
      icon: "👁️",
      role: "Pháp Sư",
      region: "void",
      species: "Sinh vật Hư Không (Voidborn / Alien creature)",
      age: "Hàng ngàn năm tuổi, là một trong những sinh vật Hư Không cổ xưa nhất",
      gender: "Nam (he/him)",
      weapon:
        "Không sử dụng vũ khí vật lý; khả năng của hắn là năng lượng plasma chết người và khả năng thao túng cấu trúc thế giới",
      lore: "Vel'Koz là Con Mắt Hư Không, một trong những sinh vật Hư Không cổ xưa nhất.",
      fullLore:
        "Vel'Koz là Con Mắt Hư Không, một trong những sinh vật Hư Không cổ xưa nhất. Hắn được tạo ra bởi các Giám Hộ để khám phá và phân tích Runeterra nhằm tìm kiếm điểm yếu để Hư Không khai thác, với mục đích 'hiểu bằng cách hủy diệt'. Hắn đã âm thầm quan sát các nền văn minh trỗi dậy, suy tàn, và thậm chí nghiên cứu các chuyển động của các vì sao.\n\nMục tiêu của Vel'Koz là 'hiểu bằng cách hủy diệt', điều này mang lại một khía cạnh khoa học, phân tích và chiến lược cho mối đe dọa Hư Không, vượt ra ngoài sự tiêu thụ đơn thuần. Điều này ngụ ý rằng Hư Không không chỉ là một lực lượng hỗn loạn mà còn có một trí tuệ đáng sợ tiềm ẩn hướng dẫn sự bành trướng của nó.",
      gameplay:
        "Lối chơi của Vel'Koz tập trung vào sát thương chuẩn, kỹ năng định hướng tầm xa, và khả năng cấu rỉa/kiểm soát khu vực. Hắn áp dụng hiệu ứng 'Phân Tích Hữu Cơ' (Organic Deconstruction) lên kẻ địch, gây sát thương chuẩn khi đủ 3 điểm cộng dồn.",
      skills: [
        {
          type: "Passive",
          name: "Phân Tích Hữu Cơ (Organic Deconstruction)",
          description:
            "Kỹ năng của Vel'Koz đánh dấu kẻ địch. Sau 3 lần đánh dấu, mục tiêu sẽ chịu sát thương thực sự dựa trên máu tối đa.",
        },
        {
          type: "Q",
          name: "Phân Hạch Plasma (Plasma Fission)",
          description:
            "Vel'Koz bắn một tia plasma có thể phân tách thành hai tia nhỏ hơn khi kích hoạt lại hoặc khi chạm phải kẻ địch đầu tiên.",
        },
        {
          type: "W",
          name: "Vết Nứt Hư Không (Void Rift)",
          description:
            "Vel'Koz tạo ra một vết nứt, gây sát thương một lần rồi phát nổ sau một khoảng thời gian để gây sát thương lần hai.",
        },
        {
          type: "E",
          name: "Phá Vỡ Kết Cấu (Tectonic Disruption)",
          description:
            "Vel'Koz làm nứt đất theo một đường thẳng, gây sát thương và hất tung kẻ địch sau một khoảng thời gian trì hoãn.",
        },
        {
          type: "R",
          name: "Tia Phân Hủy Sự Sống (Life Form Disintegration Ray)",
          description:
            "Vel'Koz bắn một tia hủy diệt liên tục, gây sát thương ma thuật và làm chậm kẻ địch. Kẻ địch có đầy đủ đánh dấu sẽ chịu sát thương chuẩn.",
        },
      ],
      specialFeatures: [
        "Sát thương chuẩn thông qua Organic Deconstruction",
        "Kỹ năng skillshot tầm xa với khả năng kiểm soát khu vực tuyệt vời",
        "Chiêu cuối có thể xoay hướng và gây sát thương cực lớn",
        "Thể hiện khía cạnh khoa học và phân tích của Hư Không",
        "Biểu tượng của trí tuệ và chiến lược trong việc khám phá để hủy diệt",
        "Mục tiêu 'hiểu bằng cách hủy diệt' tạo ra cách tiếp cận độc đáo",
      ],
    },
    {
      id: "reksai",
      name: "Rek'Sai",
      fullName: "Rek'Sai, Kẻ Đào Hang Hư Không (The Void Burrower)",
      icon: "🐛",
      role: "Đấu Sĩ",
      region: "void",
      species: "Sinh vật Hư Không (Voidborn / Alien creature)",
      age: "Rất cổ xưa, hàng ngàn năm tuổi (được nhắc đến trong các câu chuyện Shurima cổ)",
      gender:
        "Nữ (she/her), mặc dù hành vi thuần túy quái vật của cô ta khiến giới tính không rõ ràng trong mắt nhiều người",
      weapon:
        "Rek'Sai sử dụng móng vuốt sắc nhọn và khả năng đào hầm cùng cảm nhận chấn động để săn mồi",
      lore: "Rek'Sai là Kẻ Đào Hang Hư Không, một kẻ săn mồi đỉnh cao không ngừng nghỉ.",
      fullLore:
        "Rek'Sai là Kẻ Đào Hang Hư Không, một kẻ săn mồi đỉnh cao không ngừng nghỉ. Cô ta đào hầm dưới lòng đất để phục kích và nuốt chửng con mồi, và cơn đói khát không đáy của cô đã tàn phá các vùng đất rộng lớn của Shurima, khiến chúng trở nên không thể ở được đối với con người.\n\nRek'Sai được mô tả là một 'kẻ săn mồi tàn nhẫn' với 'cơn đói khát không đáy'. Lối chơi của cô ta nhấn mạnh 'khả năng đào hầm và cảm nhận chấn động', cho phép cô ta phục kích. Điều này làm nổi bật ảnh hưởng của Hư Không lên cảnh quan vật lý và sự biến đổi của nó thành một bãi săn, một hậu quả trực tiếp từ sự hiện diện của Rek'Sai.",
      gameplay:
        "Lối chơi của Rek'Sai tập trung vào khả năng cơ động cao dưới lòng đất thông qua hệ thống đường hầm, phục kích kẻ địch, và gây sát thương vật lý. Cô ta có hai dạng: dưới đất (burrowed) và trên mặt đất (unburrowed) với bộ kỹ năng khác nhau.",
      skills: [
        {
          type: "Passive",
          name: "Cơn Thịnh Nộ của Xer'Sai (Fury of the Xer'Sai)",
          description:
            "Rek'Sai tạo nộ khi tấn công. Khi ở dưới đất, nộ sẽ hồi phục máu cho cô ta thay vì tiêu hao theo thời gian.",
        },
        {
          type: "Q (Unburrowed)",
          name: "Nữ Hoàng Cuồng Nộ (Queen's Wrath)",
          description:
            "Rek'Sai tấn công với 3 đòn đánh nhanh liên tiếp, đòn cuối gây sát thương lớn hơn.",
        },
        {
          type: "Q (Burrowed)",
          name: "Truy Kích Con Mồi (Prey Seeker)",
          description:
            "Rek'Sai bắn một dải năng lượng Hư Không, gây sát thương và tiết lộ kẻ địch đầu tiên trúng phải.",
        },
        {
          type: "W (Unburrowed)",
          name: "Đào Hầm (Burrow)",
          description:
            "Rek'Sai đào xuống dưới đất, tăng tốc độ di chuyển và cảm nhận được kẻ địch di chuyển trên mặt đất.",
        },
        {
          type: "W (Burrowed)",
          name: "Trồi Lên (Un-burrow)",
          description:
            "Rek'Sai trồi lên từ dưới đất, hất tung và gây sát thương cho kẻ địch xung quanh.",
        },
        {
          type: "E (Unburrowed)",
          name: "Cắn Xé Cuồng Bạo (Furious Bite)",
          description:
            "Rek'Sai cắn mục tiêu, gây sát thương thực sự dựa trên máu hiện tại của mục tiêu.",
        },
        {
          type: "E (Burrowed)",
          name: "Đường Hầm (Tunnel)",
          description:
            "Rek'Sai tạo ra một đường hầm có thể sử dụng lại để di chuyển nhanh chóng giữa các vị trí.",
        },
        {
          type: "R",
          name: "Tốc Biến Hư Không (Void Rush)",
          description:
            "Rek'Sai đánh dấu một kẻ địch bị trúng kỹ năng, sau đó có thể lướt đến họ từ một khoảng cách xa để gây sát thương lớn.",
        },
      ],
      specialFeatures: [
        "Hai dạng chiến đấu khác nhau với bộ kỹ năng riêng biệt",
        "Hệ thống đường hầm độc đáo cho phép di chuyển nhanh qua bản đồ",
        "Khả năng cảm nhận chấn động khi ở dưới đất",
        "Lối chơi phục kích và săn mồi độc đáo",
        "Thể hiện ảnh hưởng của Hư Không lên địa hình vật lý",
        "Biến môi trường thành bãi săn cho kẻ săn mồi Hư Không",
      ],
    },
    {
      id: "kogmaw",
      name: "Kog'Maw",
      fullName: "Kog'Maw, Miệng của Vực Thẳm (The Mouth of the Abyss)",
      icon: "👄",
      role: "Xạ Thủ",
      region: "void",
      species: "Sinh vật Hư Không non trẻ (Young Voidborn / Alien larva)",
      age: "Rất trẻ theo tiêu chuẩn Hư Không, mới được sinh ra (trong vài năm gần đây)",
      gender: "Không xác định rõ ràng, thường được gọi là 'nó' (it/its)",
      weapon:
        "Không sử dụng vũ khí vật lý; cơ thể tự nhiên có khả năng bắn acid và chất lỏng ăn mòn từ miệng",
      lore: "Kog'Maw là Miệng của Vực Thẳm, một sinh vật Hư Không non trẻ với tò mò vô tận về thế giới Runeterra.",
      fullLore:
        "Kog'Maw là Miệng của Vực Thẳm, một sinh vật Hư Không non trẻ với tò mò vô tận về thế giới Runeterra. Không giống như những sinh vật Hư Không khác được thúc đẩy bởi sự hủy diệt thuần túy, Kog'Maw được dẫn dắt bởi một khao khát ngây thơ nhưng nguy hiểm muốn 'hiểu' mọi thứ bằng cách nuốt chửng chúng.\n\nTrái ngược với sự ác độc có chủ ý của những sinh vật Hư Không khác, tính cách ngây thơ nhưng cực kỳ nguy hiểm của Kog'Maw tạo ra một loại mối đe dọa khác biệt. Nó không hành động vì ác ý mà vì tò mò, điều này khiến nó trở nên khó lường và nguy hiểm theo một cách khác. Sự ngây thơ này không làm giảm mối đe dọa mà thực sự làm tăng thêm nét đáng sợ của nó.\n\nKog'Maw đại diện cho khía cạnh 'khám phá bằng cách tiêu thụ' của Hư Không, nhưng được thực hiện qua lăng kính của sự tò mò trẻ thơ. Điều này tạo ra một sự tương phản mạnh mẽ với những động cơ phức tạp hơn của các sinh vật Hư Không khác, đồng thời vẫn duy trì bản chất nguy hiểm cốt lõi của Hư Không.",
      gameplay:
        "Lối chơi của Kog'Maw tập trung vào sát thương tầm xa với khả năng xuyên giáp và sát thương % máu, đặc biệt mạnh chống lại mục tiêu có máu cao. Nó có thể bắn projectile tầm xa, tăng tốc độ đánh và tầm đánh, và có khả năng nổ tung khi chết để gây sát thương cho kẻ địch xung quanh.",
      skills: [
        {
          type: "Passive",
          name: "Bản Năng Icathian (Icathian Surprise)",
          description:
            "Khi chết, Kog'Maw sẽ trở thành một quả bom sống trong 4 giây, tăng tốc độ di chuyển và nổ tung để gây sát thương thực sự cho kẻ địch xung quanh.",
        },
        {
          type: "Q",
          name: "Chất Nhờn Ăn Mòn (Caustic Spittle)",
          description:
            "Kog'Maw bắn một quả cầu acid gây sát thương ma thuật và giảm giáp và kháng ma thuật của mục tiêu. Đồng thời, tốc độ đánh của Kog'Maw được tăng lên.",
        },
        {
          type: "W",
          name: "Acid Sinh Học (Bio-Arcane Barrage)",
          description:
            "Kog'Maw kích hoạt để tăng tầm đánh và đòn đánh thường gây thêm sát thương ma thuật dựa trên % máu tối đa của mục tiêu.",
        },
        {
          type: "E",
          name: "Bùn Hư Không (Void Ooze)",
          description:
            "Kog'Maw phun ra một đường thẳng bùn ăn mòn, gây sát thương ma thuật và làm chậm kẻ địch. Khu vực bị phun sẽ còn lại một thời gian và tiếp tục gây hiệu ứng làm chậm.",
        },
        {
          type: "R",
          name: "Pháo Binh Sống (Living Artillery)",
          description:
            "Kog'Maw phóng một quả đạn sống tầm xa đến vị trí mục tiêu, gây sát thương ma thuật trong một khu vực. Sát thương tăng dựa trên máu đã mất của mục tiêu. Mỗi lần sử dụng liên tiếp sẽ tăng chi phí năng lượng.",
        },
      ],
      specialFeatures: [
        "Khả năng nổ tung khi chết tạo ra áp lực tâm lý cho kẻ địch",
        "Sát thương % máu làm cho nó hiệu quả chống lại mục tiêu có máu cao",
        "Tầm đánh cực xa khi kích hoạt W, cho phép an toàn trong teamfight",
        "Kỹ năng cuối có thể spam để kiểm soát khu vực",
        "Thể hiện sự tò mò ngây thơ nhưng nguy hiểm của một sinh vật Hư Không trẻ",
        "Đại diện cho khía cạnh 'khám phá bằng cách tiêu thụ' với góc nhìn trẻ thơ",
        "Tương phản mạnh mẽ với động cơ ác độc của các sinh vật Hư Không khác",
      ],
    },
  ],
  newChampions: [
    {
      name: "Xylos, Kẻ Gặm Nhấm Ký Ức",
      icon: "🧠",
      role: "Hỗ Trợ/Pháp Sư",
      region: "void",
      species: "Ký sinh trùng tâm linh (Psychic Parasite / Voidborn)",
      age: "Không rõ (mới xuất hiện sau khi Bel'Veth tiêu thụ)",
      gender: "Không xác định (ký sinh trùng)",
      weapon: "Khả năng tâm linh, thao túng ký ức",
      lore: "Một ký sinh trùng tâm linh từ Biển Oải Hương, Xylos tiêu thụ ký ức và bản sắc, để lại sự trống rỗng cho Bel'Veth tái tạo.",
      fullLore:
        "Xylos là một sản phẩm phụ của quá trình 'tái tạo' của Bel'Veth, sinh ra từ những mảnh vỡ ký ức còn sót lại trong Biển Oải Hương. Không giống như các sinh vật Hư Không khác tập trung vào hủy diệt vật lý, Xylos chuyên môn về việc xóa sổ bản sắc và ký ức của các nạn nhân.\n\nCốt truyện của Xylos liên kết trực tiếp với 'Biển Oải Hương' của Bel'Veth và mục tiêu 'tái tạo Runeterra' của cô ta. Hành động 'tiêu thụ ký ức và bản sắc' và để lại 'sự trống rỗng cho Bel'Veth tái tạo' là một mối quan hệ nhân quả trực tiếp, cho thấy cách các tướng Hư Không mới có thể phục vụ các mục tiêu tổng thể của các tướng hiện có. Điều này ngụ ý một cấu trúc phân cấp và chuyên môn hóa trong Hư Không đang phát triển của Bel'Veth.",
      gameplay:
        "Xylos hoạt động như một support đặc biệt, có khả năng làm suy yếu kẻ địch bằng cách 'ăn mòn' ký ức và khả năng của họ, đồng thời hỗ trợ đồng minh bằng cách chia sẻ kiến thức thu được.",
      skills: [
        "Q: Lời Thì Thầm Hư Vô - Gây sát thương tâm lý và giảm khả năng thi triển kỹ năng",
        "W: Vùng Đất Quên Lãng - Tạo khu vực làm chậm và mù mờ ký ức",
        "E: Liên Kết Ký Ức - Kết nối với đồng minh để chia sẻ thông tin và buff",
        "R: Đại Tiệc Ký Ức - Tiêu thụ lượng lớn ký ức từ khu vực, reset cooldown và tăng sức mạnh",
      ],
    },
    {
      name: "Aethel, Hồn Ma Bị Bóp Méo",
      icon: "👻",
      role: "Đỡ Đòn/Đấu Sĩ",
      region: "void",
      species:
        "Sinh vật nguyên thủy bị biến dạng (Distorted Primordial Being / Void-corrupted)",
      age: "Không rõ",
      gender: "Không xác định",
      weapon: "Khả năng gây chấn động, tái tạo, vết nứt",
      lore: "Một sinh vật nguyên thủy bị Hư Không biến dạng, là sự lai tạo giữa sự sống và hư vô.",
      fullLore:
        "Aethel là một thí nghiệm sống của quá trình biến chất của Hư Không. Không hoàn toàn bị tiêu thụ như những nạn nhân khác, nó đã trở thành một dạng sống lai ghép giữa thực tại và hư vô. Aethel là một 'lai tạo giữa sự sống và hư vô', cho thấy sự biến chất của Hư Không không phải lúc nào cũng là sự hủy diệt tuyệt đối, mà có thể tạo ra những hình thái mới kỳ quái pha trộn sự sống hiện có với năng lượng của chính nó. Điều này bổ sung thêm một lớp cho khả năng biến đổi của Hư Không.",
      gameplay:
        "Aethel là một tank/fighter với khả năng tái tạo và biến dạng không gian xung quanh. Nó có thể hấp thụ sát thương và chuyển hóa thành năng lượng để tấn công ngược lại.",
      skills: [
        "Q: Chấn Động Hư Vô - Gây sát thương và bóp méo không gian",
        "W: Tái Tạo Vô Định - Hồi máu và thay đổi hình dạng cơ thể",
        "E: Vết Nứt Kéo Lê - Tạo vết nứt thực tại và di chuyển kẻ địch",
        "R: Tiếng Vọng Của Sự Hủy Diệt - Giải phóng năng lượng hủy diệt trong khu vực lớn",
      ],
    },
    {
      name: "Umbra, Kẻ Thao Túng Bóng Tối",
      icon: "🌑",
      role: "Sát Thủ/Đấu Sĩ",
      region: "void",
      species: "Thực thể ý thức (Sentient Entity / Voidborn byproduct)",
      age: "Không rõ (sinh ra sau khi Bel'Veth tiêu thụ)",
      gender: "Không xác định",
      weapon: "Thao túng bóng tối và nỗi sợ hãi",
      lore: "Một thực thể ý thức từ bóng tối còn sót lại sau khi Bel'Veth tiêu thụ, thao túng bóng tối và nỗi sợ hãi.",
      fullLore:
        "Umbra sinh ra từ những bóng tối còn sót lại sau quá trình tiêu thụ của Bel'Veth. Nguồn gốc của Umbra như một 'thực thể ý thức từ bóng tối còn sót lại sau khi Bel'Veth tiêu thụ' cho thấy rằng hành động của Bel'Veth có những sản phẩm phụ có ý thức. Điều này gợi ý một phản ứng dây chuyền của sự sáng tạo trong Hư Không, nơi sự tiêu thụ của một thực thể mạnh mẽ dẫn đến sự xuất hiện của những mối đe dọa mới, chuyên biệt.",
      gameplay:
        "Umbra là một assassin tập trung vào việc thao túng bóng tối để tàng hình và tấn công. Nó có thể di chuyển qua bóng tối và sử dụng nỗi sợ hãi như một vũ khí.",
      skills: [
        "Q: Lưỡi Hái Bóng Đêm - Tấn công từ bóng tối với sát thương cao",
        "W: Vực Thẳm Nỗi Sợ - Tạo khu vực nỗi sợ làm giảm sát thương của địch",
        "E: Lướt Bóng - Di chuyển tức thời qua bóng tối",
        "R: Đêm Tận Thế - Bao phủ khu vực trong bóng tối tuyệt đối",
      ],
    },
    {
      name: "Chronos, Kẻ Ăn Mòn Thời Gian",
      icon: "⏰",
      role: "Pháp Sư/Kiểm Soát",
      region: "void",
      species: "Thực thể Hư Không biến dạng (Distorted Void Entity / Voidborn)",
      age: "Không rõ",
      gender: "Không xác định",
      weapon: "Thao túng thời gian",
      lore: "Một thực thể Hư Không biến dạng từ dòng chảy thời gian, có khả năng làm suy yếu thời gian của kẻ thù.",
      fullLore:
        "Chronos là một hiện tượng độc đáo trong số các sinh vật Hư Không - một thực thể được sinh ra không từ vật chất mà từ chính dòng chảy thời gian bị Hư Không bóp méo. Chronos, một 'thực thể Hư Không bị biến dạng từ dòng chảy thời gian', giới thiệu một khía cạnh mới cho mối đe dọa của Hư Không: thao túng thời gian. Điều này vượt ra ngoài sự tiêu thụ vật lý sang một mối nguy hiểm trừu tượng hơn, bẻ cong thực tại, ngụ ý rằng Hư Không có thể làm biến chất các lực lượng cơ bản của sự tồn tại.",
      gameplay:
        "Chronos có khả năng thao túng thời gian trong combat, làm chậm hoặc tăng tốc thời gian cho các mục tiêu khác nhau. Đây là một mage/support với focus vào crowd control độc đáo.",
      skills: [
        "Q: Vết Nứt Thời Gian - Tạo vùng bóp méo thời gian gây sát thương theo thời gian",
        "W: Vòng Lặp Vô Tận - Làm cho mục tiêu bị mắc kẹt trong vòng lặp thời gian",
        "E: Phân Rã Nhanh - Tăng tốc quá trình lão hóa của mục tiêu",
        "R: Thời Khắc Hư Vô - Dừng thời gian trong khu vực, chỉ Chronos có thể hành động",
      ],
    },
    {
      name: "Lithos, Kẻ Biến Dạng Địa Hình",
      icon: "🗿",
      role: "Đấu Sĩ/Đỡ Đòn",
      region: "void",
      species: "Sinh vật Hư Không khổng lồ (Colossal Void Creature / Voidborn)",
      age: "Không rõ",
      gender: "Không xác định",
      weapon: "Thao túng địa hình",
      lore: "Sinh vật khổng lồ từ sự tiêu thụ và biến dạng của vỏ Runeterra, có khả năng bóp méo và tái tạo địa hình.",
      fullLore:
        "Lithos là kết quả của việc Hư Không không chỉ tiêu thụ sinh vật mà còn chính cả cấu trúc địa chất của Runeterra. Lithos, sinh ra từ 'sự tiêu thụ và biến dạng của vỏ Runeterra', biểu thị khả năng của Hư Không trong việc tác động trực tiếp và định hình lại thế giới vật lý trên quy mô lớn. Đây là một mối đe dọa hữu hình và trực tiếp hơn đối với môi trường so với sự biến chất tinh vi.",
      gameplay:
        "Lithos là một tank/bruiser khổng lồ có khả năng thay đổi địa hình chiến trường. Nó có thể tạo ra các cấu trúc địa hình mới và sử dụng chúng như vũ khí.",
      skills: [
        "Q: Nắm Đấm Địa Hình - Đấm đất tạo ra sóng chấn động",
        "W: Hố Sâu Nuốt Chửng - Tạo hố sâu nuốt chửng kẻ địch",
        "E: Lướt Địa Hình - Di chuyển qua đất đá như trong nước",
        "R: Biến Đổi Cảnh Quan - Thay đổi hoàn toàn địa hình khu vực chiến đấu",
      ],
    },
  ],
};
