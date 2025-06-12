// Champions Database
const championsDatabase = {
  regions: [
    {
      id: "void",
      name: "Hư Không",
      icon: "🕳️",
      existingChampions: [
        {
          id: "belveth",
          name: "Bel'Veth",
          icon: "👑",
          role: "Đấu Sĩ",
          region: "void",
          lore: "Nữ hoàng Hư Không, sinh ra từ thành phố bị nuốt chửng, muốn tái tạo Runeterra theo hình ảnh méo mó của mình.",
        },
        {
          id: "kaisa",
          name: "Kai'Sa",
          icon: "🏹",
          role: "Xạ Thủ",
          region: "void",
          lore: "Người sống sót là con người, hòa nhập với lớp vỏ Hư Không sống, chiến đấu chống lại Hư Không nhưng bị coi là quái vật.",
        },
        {
          id: "kassadin",
          name: "Kassadin",
          icon: "⚡",
          role: "Sát Thủ",
          region: "void",
          lore: "Kẻ du hành, tìm cách trả thù Hư Không vì đã nuốt chửng gia đình mình, sử dụng các tạo tác Hư Không.",
        },
        {
          id: "chogath",
          name: "Cho'Gath",
          icon: "👹",
          role: "Đỡ Đòn",
          region: "void",
          lore: "Khủng bố của Hư Không, sinh vật bản năng nguyên thủy, nuốt chửng để phát triển kích thước và sức mạnh.",
        },
        {
          id: "khazix",
          name: "Kha'Zix",
          icon: "🦂",
          role: "Sát Thủ",
          region: "void",
          lore: "Kẻ săn mồi siêu tiến hóa, tiêu thụ con mồi mạnh mẽ nhất để thích nghi và trở nên hoàn hảo hơn.",
        },
        {
          id: "malzahar",
          name: "Malzahar",
          icon: "🔮",
          role: "Pháp Sư",
          region: "void",
          lore: "Tiên tri, tin rằng Hư Không là sự cứu rỗi của Runeterra, truyền bá ảnh hưởng và triệu hồi Sinh vật Hư Không.",
        },
        {
          id: "velkoz",
          name: "Vel'Koz",
          icon: "👁️",
          role: "Pháp Sư",
          region: "void",
          lore: "Con Mắt Hư Không, sinh vật Hư Không cổ xưa nhất, tìm kiếm kiến thức bằng cách hủy diệt và phân tích.",
        },
        {
          id: "reksai",
          name: "Rek'Sai",
          icon: "🐛",
          role: "Đấu Sĩ",
          region: "void",
          lore: "Kẻ đào hang Hư Không, kẻ săn mồi không ngừng, đào hầm để phục kích và nuốt chửng con mồi.",
        },
        {
          id: "kogmaw",
          name: "Kog'Maw",
          icon: "👄",
          role: "Xạ Thủ",
          region: "void",
          lore: "Miệng của Vực Thẳm, sinh vật tò mò, nuốt chửng để hiểu thế giới, sự ngây thơ nguy hiểm.",
        },
      ],
      newChampions: [
        {
          name: "Xylos, Kẻ Gặm Nhấm Ký Ức",
          icon: "🧠",
          role: "Hỗ Trợ/Pháp Sư",
          region: "void",
          lore: "Ký sinh trùng tâm linh từ Biển Oải Hương, tiêu thụ ký ức và bản sắc, để lại sự trống rỗng cho Bel'Veth tái tạo.",
          skills: [
            "Q: Lời Thì Thầm Hư Vô",
            "W: Vùng Đất Quên Lãng",
            "E: Liên Kết Ký Ức",
            "R: Đại Tiệc Ký Ức",
          ],
        },
        {
          name: "Aethel, Hồn Ma Bị Bóp Méo",
          icon: "👻",
          role: "Đỡ Đòn/Đấu Sĩ",
          region: "void",
          lore: "Sinh vật nguyên thủy bị Hư Không biến dạng, lai giữa sự sống và hư vô.",
          skills: [
            "Q: Chấn Động Hư Vô",
            "W: Tái Tạo Vô Định",
            "E: Vết Nứt Kéo Lê",
            "R: Tiếng Vọng Của Sự Hủy Diệt",
          ],
        },
        {
          name: "Umbra, Kẻ Thao Túng Bóng Tối",
          icon: "🌑",
          role: "Sát Thủ/Đấu Sĩ",
          region: "void",
          lore: "Thực thể ý thức từ bóng tối còn sót lại sau khi Bel'Veth tiêu thụ, thao túng bóng tối và nỗi sợ hãi.",
          skills: [
            "Q: Lưỡi Hái Bóng Đêm",
            "W: Vực Thẳm Nỗi Sợ",
            "E: Lướt Bóng",
            "R: Đêm Tận Thế",
          ],
        },
        {
          name: "Chronos, Kẻ Ăn Mòn Thời Gian",
          icon: "⏰",
          role: "Pháp Sư/Kiểm Soát",
          region: "void",
          lore: "Thực thể Hư Không biến dạng từ dòng chảy thời gian, làm suy yếu thời gian của kẻ thù.",
          skills: [
            "Q: Vết Nứt Thời Gian",
            "W: Vòng Lặp Vô Tận",
            "E: Phân Rã Nhanh",
            "R: Thời Khắc Hư Vô",
          ],
        },
        {
          name: "Lithos, Kẻ Biến Dạng Địa Hình",
          icon: "🗿",
          role: "Đấu Sĩ/Đỡ Đòn",
          region: "void",
          lore: "Sinh vật khổng lồ từ sự tiêu thụ và biến dạng của vỏ Runeterra, bóp méo và tái tạo địa hình.",
          skills: [
            "Q: Nắm Đấm Địa Hình",
            "W: Hố Sâu Nuốt Chửng",
            "E: Lướt Địa Hình",
            "R: Biến Đổi Cảnh Quan",
          ],
        },
      ],
    },
    {
      id: "shadowisles",
      name: "Quần Đảo Bóng Đêm",
      icon: "👻",
      existingChampions: [
        {
          id: "thresh",
          name: "Thresh",
          fullName: "Thresh, Cai Ngục Xiềng Xích (The Chain Warden)",
          icon: "⛓️",
          role: "Hỗ Trợ/Đỡ Đòn",
          region: "shadowisles",
          species: "Hồn ma/Thực thể ma quái",
          age: "Nhiều thập kỷ và thế kỷ sau Đại Suy Vong",
          weapon: "Xiềng xích và lồng đèn ma quái",
          lore: "Một linh hồn tàn bạo và xảo quyệt, Thresh từng là một cai ngục độc ác khi còn sống.",
          fullLore:
            "Thresh từng là một người quản ngục khiêm tốn của một hội kín trên Quần Đảo Phước Lành, có nhiệm vụ thu thập và bảo vệ kiến thức huyền bí cùng các hiện vật nguy hiểm. Ngay cả trong vai trò này, xu hướng tàn ác bẩm sinh của hắn đã được đồng nghiệp nhận thấy, dù chưa có bằng chứng rõ ràng về những hành vi giết người.\n\nNhiều năm cô độc trong bóng tối đã khiến Thresh trở nên cay đắng và ghen tị, chỉ có những suy nghĩ oán hận làm bạn. Khi Đại Suy Vong xảy ra, Thresh là một trong những người đầu tiên bị ảnh hưởng bởi thảm họa ma thuật này. Tuy nhiên, thay vì đau khổ như những người khác, hắn lại 'say sưa' trong số phận mới của mình.\n\nHắn săn lùng những linh hồn mà hắn coi là yếu kém hơn, đặc biệt là những người sẽ chịu đựng nhiều nhất từ sự chú ý của hắn. Cái chết không mang lại sự giải thoát, vì hắn xé nát linh hồn của tất cả những kẻ hắn giết, giam cầm chúng trong chiếc lồng đèn bị nguyền rủa của hắn để làm chứng nhân bất đắc dĩ cho những hành vi tàn bạo của hắn mãi mãi.",
          gameplay:
            "Thresh là một tướng hỗ trợ và đỡ đòn với độ khó trung bình. Hắn nổi tiếng với khả năng kiểm soát giao tranh và bảo vệ đồng minh một cách hiệu quả. Lối chơi của Thresh tập trung vào việc gây áp lực lên đối thủ, kéo kẻ địch bằng Án Tử, và tạo lá chắn cho đồng minh bằng Con Đường Tăm Tối.",
          skills: [
            {
              type: "Passive",
              name: "Đọa Đày (Damnation)",
              description:
                "Thresh có thể thu thập linh hồn của kẻ địch bị hạ gục gần hắn, vĩnh viễn tăng Giáp và Sức mạnh Phép Thuật. Các đòn đánh của Thresh tích tụ sức mạnh, gây thêm sát thương dựa trên thời gian chờ giữa hai đòn đánh.",
            },
            {
              type: "Q",
              name: "Án Tử (Death Sentence)",
              description:
                "Thresh trói kẻ địch bằng xiềng xích và kéo chúng về phía mình. Kích hoạt lại kỹ năng này sẽ kéo Thresh đến vị trí kẻ địch.",
            },
            {
              type: "W",
              name: "Con Đường Tăm Tối (Dark Passage)",
              description:
                "Thresh ném ra một chiếc lồng đèn, tạo lá chắn cho đồng minh gần đó. Đồng minh có thể nhấp vào lồng đèn để lướt đến vị trí của Thresh.",
            },
            {
              type: "E",
              name: "Lưỡi Hái Xoáy (Flay)",
              description:
                "(Nội tại) Các đòn đánh của Thresh tích tụ, gây thêm sát thương càng lâu chờ giữa các đòn. (Kích hoạt) Thresh quét xiềng xích, hất văng tất cả kẻ địch trúng phải theo hướng của đòn đánh.",
            },
            {
              type: "R",
              name: "Đóng Hộp (The Box)",
              description:
                "Thresh tạo ra một nhà tù với năm bức tường ma thuật. Kẻ địch chạm vào tường sẽ bị làm chậm và chịu sát thương phép. Mỗi bức tường chỉ có thể bị phá vỡ một lần.",
            },
          ],
          specialFeatures: [
            "Khả năng thu thập linh hồn vĩnh viễn tăng chỉ số là một cơ chế độc đáo",
            "Chiếc lồng đèn (W) là công cụ hỗ trợ vô cùng linh hoạt để cứu đồng đội",
            "Một trong số ít các hồn ma giữ được phần lớn bản thân sau Đại Suy Vong",
            "Nạn nhân bị giam cầm vĩnh viễn trong lồng đèn, trở thành chứng nhân cho hành vi tàn bạo",
          ],
        },
        {
          id: "viego",
          name: "Viego",
          fullName: "Viego, Hắc Diệt Đế Vương (The Ruined King)",
          icon: "👑",
          role: "Đấu Sĩ/Sát Thủ",
          region: "shadowisles",
          species: "Hồn ma/Thực thể ma quái (Hồn ma bất tử)",
          age: "Mất cách đây hơn một ngàn năm - tồn tại dưới dạng hồn ma trong thời gian rất dài",
          weapon:
            "Lưỡi Gươm Suy Vong (Blade of the Ruined King) - thanh kiếm hai lưỡi",
          lore: "Một vị vua bi thảm và đầy thù hận, Viego đã giải phóng Đại Suy Vong.",
          fullLore:
            "Viego từng là người cai trị một vương quốc đã mất từ lâu. Hắn không có ý định lãnh đạo nhưng lại lên ngôi sau cái chết bất ngờ của anh trai. Hắn sống một cuộc đời ích kỷ cho đến khi gặp Isolde, một thợ may nghèo. Say đắm trước vẻ đẹp của nàng, Viego cưới Isolde và dành cả cuộc đời mình cho nàng, hiếm khi rời xa và luôn ban tặng quà cáp.\n\nMột sát thủ định ám sát Viego nhưng lại làm Isolde bị thương bằng một con dao độc. Isolde rơi vào trạng thái hôn mê và qua đời, khiến Viego chìm vào điên loạn. Hắn ẩn mình cùng thi thể nàng, trở nên đầy thù hận và bạo lực, hy sinh mọi của cải của vương quốc để tìm cách cứu nàng.\n\nHắn tìm hiểu về bí mật của Quần Đảo Phước Lành và dòng nước có khả năng chữa lành mọi bệnh tật. Với đội quân hùng mạnh, hắn tấn công vùng đất yên bình này, tàn sát mọi kẻ cản đường để đưa thi thể Isolde vào dòng nước thiêng. Trong một khoảnh khắc, Isolde trở lại, nhưng là một hồn ma đáng sợ của bóng tối và sự phẫn nộ. Trong cơn đau đớn và bối rối, nàng đã đâm thanh kiếm bị nguyền rủa của Viego xuyên qua tim hắn.\n\nSự va chạm giữa ma thuật của dòng nước và thanh kiếm cổ xưa đã tạo ra một vụ nổ năng lượng xé toạc Quần Đảo, giam cầm mọi thứ nó chạm vào trong trạng thái bất tử đau đớn. Đây chính là sự kiện Đại Suy Vong. Viego không nhớ gì về sự kiện này. Hắn biến thành một hồn ma bất tử, bị hành hạ bởi nỗi ám ảnh khao khát nữ hoàng đã chết của mình.\n\nVới tư cách là Hắc Diệt Đế Vương, hắn kiểm soát các Harrowing chết chóc, càn quét Runeterra để tìm kiếm bất cứ thứ gì có thể đưa Isolde trở lại, hủy diệt mọi thứ trên đường đi khi Sương Đen tuôn ra không ngừng từ trái tim tan vỡ của hắn.",
          gameplay:
            "Viego là tướng đấu sĩ/sát thủ với độ khó trung bình. Hắn là một tướng đi rừng xuất sắc, nổi bật với khả năng ngụy trang, giao tranh và thoát khỏi giao tranh, cùng khả năng kiểm soát đám đông. Điểm mạnh nhất của Viego là cơ chế chiếm hữu độc đáo, cho phép hắn tạm thời chiếm hữu thể xác kẻ địch đã chết, sử dụng kỹ năng và trang bị của chúng, và được sử dụng chiêu cuối của mình miễn phí. Khả năng hồi máu tự nhiên từ Q giúp hắn duy trì tốt trong rừng, và hắn là một lực lượng gây rối tuyệt vời trong giao tranh tổng.",
          skills: [
            {
              type: "Passive",
              name: "Thống Trị Tối Cao (Sovereign's Domination)",
              description:
                "Kẻ địch bị hạ gục bởi Viego trở thành hồn ma. Bằng cách tấn công một hồn ma, Viego tạm thời chiếm hữu thể xác kẻ địch đã chết, hồi máu dựa trên phần trăm máu tối đa của mục tiêu và có quyền truy cập vào các kỹ năng cơ bản và trang bị của chúng. Hắn thay thế chiêu cuối của kẻ địch bằng một lần sử dụng chiêu cuối của mình miễn phí. Khi chiếm hữu, Viego nhận thêm tốc độ di chuyển khi di chuyển về phía tướng địch.",
            },
            {
              type: "Q",
              name: "Lưỡi Gươm Suy Vong (Blade of the Ruined King)",
              description:
                "(Nội tại) Đòn đánh của Viego gây thêm sát thương dựa trên phần trăm máu hiện tại của kẻ địch. Nếu tấn công kẻ địch vừa trúng kỹ năng của Viego, đòn đánh đó sẽ tấn công hai lần, đòn thứ hai hút máu thay vì gây sát thương, vẫn áp dụng hiệu ứng đòn đánh và có thể chí mạng. (Kích hoạt) Viego đâm kiếm về phía trước, gây sát thương vật lý lên tất cả kẻ địch trúng chiêu. Kỹ năng này gây thêm sát thương lên quái rừng.",
            },
            {
              type: "W",
              name: "Móng Vuốt Hắc Ám (Spectral Maw / Harrowed Path)",
              description:
                "Viego vận sức, sau đó lướt về hướng chỉ định, phóng ra một làn sương làm choáng và gây sát thương phép lên kẻ địch đầu tiên nó chạm phải. Thời gian choáng và phạm vi bay của làn sương tăng lên theo thời gian vận sức.",
            },
            {
              type: "E",
              name: "Lãnh Thổ Sương Đen (Harrowed Path / Spectral Maw)",
              description:
                "Khi kích hoạt, Viego phát tán một màn sương đen bao bọc lấy một bức tường cạnh đó. Khi ở trong màn sương, Viego được ngụy trang, đồng thời tăng tốc độ đánh và tốc độ di chuyển.",
            },
            {
              type: "R",
              name: "Tuyệt Mệnh (Heartbreaker)",
              description:
                "Viego thoát khỏi thể xác mà hắn đang chiếm hữu và dịch chuyển về phía trước, tấn công tướng địch trong phạm vi có tỉ lệ máu thấp nhất và gây thêm sát thương dựa trên lượng máu đã mất. Những kẻ địch khác trong tầm sẽ bị hất văng đi.",
            },
          ],
          specialFeatures: [
            "Cơ chế chiếm hữu linh hồn độc đáo (Sovereign's Domination) là điểm nổi bật nhất, cho phép Viego thích nghi với mọi tình huống giao tranh bằng cách sử dụng kỹ năng của kẻ địch, tạo ra sự linh hoạt chiến thuật hiếm có",
            "Khả năng ngụy trang và tăng tốc độ trong Sương Đen (E) giúp hắn tiếp cận hoặc thoát khỏi giao tranh hiệu quả, khiến hắn trở thành một mối đe dọa khó lường",
            "Chiêu cuối có khả năng kết liễu và cô lập mục tiêu, tạo ra những pha đột biến trong giao tranh",
            "Viego là nguyên nhân trực tiếp gây ra Đại Suy Vong, khiến hắn trở thành nhân vật trung tâm trong bi kịch của Quần Đảo Bóng Đêm",
            "Không chỉ là một tướng đến từ Quần Đảo Bóng Đêm; hắn là nguyên nhân trực tiếp dẫn đến sự tồn tại của nó như một vùng đất bị nguyền rủa",
            "Tình yêu điên cuồng và ám ảnh của Viego là động lực cho mọi hành động tàn bạo của hắn, thể hiện một ví dụ cực đoan về tình yêu biến thành nỗi ám ảnh hủy diệt",
            "Cốt truyện của Viego là một câu chuyện cảnh báo về cách những cảm xúc cao quý, khi bị đẩy đến cực đoan không lành mạnh, có thể dẫn đến sự tàn phá trên diện rộng",
          ],
        },
        {
          id: "karthus",
          name: "Karthus",
          fullName: "Karthus, Tiếng Ru Tử Thần (The Deathsinger)",
          icon: "💀",
          role: "Pháp Sư",
          region: "shadowisles",
          species: "Hồn ma/Thực thể ma quái (Hồn ma không xương thịt)",
          age: "Không rõ tuổi số học - Sinh ra ở Noxus, biến đổi thành hồn ma khi đã trưởng thành",
          weapon: "Ma thuật tử thần và khúc ca báo hiệu",
          lore: "Một kẻ báo hiệu linh hồn, Karthus coi cái chết không phải là kết thúc mà là một dạng siêu thoát.",
          fullLore:
            "Karthus sinh ra trong nghèo khó ở Noxus, mẹ hắn mất khi sinh hắn, để lại hắn và ba chị em gái sống trong một căn nhà ổ chuột đầy chuột. Lớn lên, hắn chứng kiến cái chết hàng ngày và bị ám ảnh sâu sắc bởi nó. Hắn thường lén lút vào ban đêm để chứng kiến khoảnh khắc linh hồn rời khỏi thể xác, một mong muốn chỉ được thỏa mãn khi các chị em của hắn chết vì bệnh dịch. Trải nghiệm này đã củng cố niềm tin của hắn rằng cái chết không phải là một kết thúc đáng sợ mà là một sự giải thoát, một sự khai sáng.\n\nSau cái chết của các chị em, Karthus gia nhập một hội những người ghi chép số liệu, bắt đầu từ người đào mộ và sau đó là người thu thập xác chết. Những bài hát tang lễ của hắn trở nên nổi tiếng, nói về vẻ đẹp của cái chết và sự chấp nhận cõi vĩnh hằng. Hắn làm việc trong đền thờ, chăm sóc người bệnh trong những giây phút cuối đời, tìm kiếm sự khôn ngoan trong ánh mắt mờ dần của họ.\n\nKarthus kết luận rằng hắn không thể học hỏi thêm từ người phàm; chỉ có người chết mới có thể trả lời câu hỏi của hắn. Tin đồn về Quần Đảo Bóng Đêm, nơi cái chết không phải là dấu chấm hết, đã thu hút hắn. Hắn đến Quần Đảo Bóng Đêm, nơi Sương Đen chảy qua hắn, tàn phá thể xác và linh hồn. Nhưng sức mạnh của mong muốn vượt qua sự hữu tử đã không hủy diệt hắn mà tái tạo hắn thành một 'hồn ma không xương thịt'.\n\nKarthus cảm thấy sự mặc khải, trở thành thứ mà hắn luôn tin rằng mình nên trở thành: một thực thể đứng ở ngưỡng cửa của sự sống và cái chết. Quan điểm độc đáo của Karthus về cái chết—coi đó là 'vẻ đẹp và sự thuần khiết' và 'sự siêu thoát'—đặt hắn khác biệt so với các tướng Quần Đảo Bóng Đêm khác, những người thường bị dày vò bởi sự bất tử của mình. Hắn quyết tâm trở lại Valoran để chia sẻ 'món quà' của sự bất tử với người sống, giải thoát họ khỏi những lo toan trần tục. Karthus trở thành sứ giả của Quần Đảo Bóng Đêm, người báo hiệu sự lãng quên, với những bài ca than vãn là những bài thánh ca ca ngợi vinh quang của cái chết.",
          gameplay:
            "Karthus là một pháp sư với độ khó trung bình. Lối chơi của hắn xoay quanh việc gây sát thương phép diện rộng liên tục và khả năng gây sát thương toàn bản đồ. Hắn đặc biệt hiệu quả trong việc dọn lính nhanh và gây áp lực toàn bản đồ với chiêu cuối Khúc Gọi Hồn (Requiem). Khả năng tiếp tục sử dụng kỹ năng sau khi chết là một điểm độc đáo, cho phép hắn duy trì ảnh hưởng trong giao tranh ngay cả khi bị hạ gục.",
          skills: [
            {
              type: "Passive",
              name: "Vượt Qua Tử Vong (Death Defied)",
              description:
                "Khi chết, Karthus biến thành dạng linh hồn, cho phép hắn tiếp tục sử dụng kỹ năng trong một thời gian ngắn mà không tốn năng lượng.",
            },
            {
              type: "Q",
              name: "Tàn Phá (Lay Waste)",
              description:
                "Karthus gây sát thương phép tại một vị trí mục tiêu. Lượng sát thương tăng gấp đôi nếu chỉ trúng một mục tiêu.",
            },
            {
              type: "W",
              name: "Bức Tường Đau Khổ (Wall of Pain)",
              description:
                "Karthus triệu hồi một bức tường năng lượng làm chậm và giảm kháng phép của kẻ địch chạm vào nó.",
            },
            {
              type: "E",
              name: "Ô Uế (Defile)",
              description:
                "(Nội tại) Hồi lại năng lượng mỗi khi Karthus hạ gục kẻ địch. (Kích hoạt) Vùng xung quanh Karthus gây sát thương phép liên tục cho tất cả kẻ địch trong khu vực, nhưng nhanh chóng tiêu hao năng lượng. Đây là một kỹ năng bật/tắt.",
            },
            {
              type: "R",
              name: "Khúc Gọi Hồn (Requiem)",
              description:
                "Sau một thời gian vận sức ngắn, kỹ năng này gây sát thương phép lên tất cả tướng địch có thể bị nhắm mục tiêu trên bản đồ.",
            },
          ],
          specialFeatures: [
            "Khả năng tiếp tục chiến đấu sau khi chết (Death Defied) là một đặc điểm chiến lược mạnh mẽ, cho phép hắn gây sát thương cuối cùng trong giao tranh tổng",
            "Chiêu cuối toàn bản đồ (Requiem) là công cụ mạnh mẽ để kết liễu kẻ địch yếu máu hoặc hỗ trợ giao tranh từ xa, tạo ra áp lực liên tục lên toàn bản đồ",
            "Sự ám ảnh của hắn với cái chết không phải là nỗi sợ hãi mà là sự 'khai sáng' và 'vẻ đẹp', một quan điểm triết học độc đáo về cõi vĩnh hằng",
            "Dạng linh hồn của hắn được cho là miễn nhiễm với vũ khí thông thường và có thể di chuyển qua tường",
            "Khác biệt với các tướng Quần Đảo Bóng Đêm khác - hắn chấp nhận và ca ngợi cái chết thay vì bị dày vò bởi nó",
            "Nhiệm vụ của hắn là 'mang niềm vui của cái chết đến cho người phàm' như một hành động nhân từ trong tâm trí méo mó của hắn",
          ],
        },
        {
          id: "kalista",
          name: "Kalista",
          icon: "🏹",
          role: "Xạ Thủ",
          region: "shadowisles",
          lore: "Tinh thần báo thù, Kalista bị phản bội và chết, giờ săn lùng những kẻ bội bạc.",
        },
        {
          id: "hecarim",
          name: "Hecarim",
          icon: "🐴",
          role: "Đấu Sĩ",
          region: "shadowisles",
          lore: "Kỵ sĩ chiến tranh ma quái, dẫn đầu đoàn kỵ binh ma trong trận chiến vĩnh cửu.",
        },
        {
          id: "yorick",
          name: "Yorick",
          icon: "⚰️",
          role: "Đấu Sĩ",
          region: "shadowisles",
          lore: "Người đào mộ cuối cùng, cứu rỗi linh hồn bị mắc kẹt trong Màn Sương Đen.",
        },
        {
          id: "maokai",
          name: "Maokai",
          icon: "🌳",
          role: "Đỡ Đòn",
          region: "shadowisles",
          lore: "Cây cổ thụ sống, bảo vệ tàn tích cuối cùng của Quần Đảo Phước Lành.",
        },
      ],
      newChampions: [
        {
          name: "Lyra, Người Dệt Tiếng Vọng",
          icon: "🎶",
          role: "Pháp Sư",
          region: "shadowisles",
          lore: "Nữ thi sĩ bị biến chất bởi Màn Sương Đen, dệt nên những giai điệu ma quái.",
          skills: [
            "Q: Hợp Âm Bất Hòa",
            "W: Mạng Lưới Ký Ức",
            "E: Giai Điệu Vỡ Tan",
            "R: Khúc Bi Tráng",
          ],
        },
        {
          name: "Mortis, Kẻ Thu Hoạch Linh Hồn",
          icon: "💀",
          role: "Sát Thủ",
          region: "shadowisles",
          lore: "Thợ săn linh hồn, thu hoạch nỗi đau khổ để nuôi dưỡng sức mạnh bóng tối.",
          skills: [
            "Q: Lưỡi Hái Linh Hồn",
            "W: Bẫy Ma Quái",
            "E: Bước Nhảy Bóng Tối",
            "R: Thu Hoạch Tuyệt Vọng",
          ],
        },
      ],
    },
    {
      id: "demacia",
      name: "Demacia",
      icon: "⚜️",
      lore: `A. Các Giá Trị Cốt Lõi Của Demacia & Những Sắc Thái Của Chúng\nBản sắc của Demacia ăn sâu vào các giá trị cốt lõi của nó. Công dân "vô cùng tự hào về di sản văn hóa của họ"  và tự coi mình là "kiêu hãnh và công bằng". Quốc gia này đề cao "lòng dũng cảm, sức mạnh và sự chính trực" , được thể hiện qua "sức mạnh quân sự đáng gờm" và "kỷ luật kiên định". Điều này bao gồm sự chấp nhận cái chết một cách kiên cường, vì "một Demacia chân chính sẽ hợp tác với Cừu non vì bất kỳ người Demacia nào cũng sẽ chấp nhận số phận của mình một cách dũng cảm" , một đặc điểm văn hóa có thể bị bóp méo cho những mục đích đen tối hơn. Xã hội được cấu trúc với một "hệ thống phân cấp xã hội phức tạp bao gồm pháp sư, quý tộc và mọi tầng lớp khác" , với các gia đình quý tộc hùng mạnh như Crownguard (Garen, Lux, Jarvan IV) và Laurent (Fiora) nắm giữ ảnh hưởng đáng kể. Bản thân chính phủ "khá độc đoán" , ngụ ý một cấu trúc quyền lực tập trung mạnh mẽ, nơi các mệnh lệnh được tuân thủ không chút nghi ngờ, ngay cả khi chúng mơ hồ về mặt đạo đức.   \n\nSự nhấn mạnh phổ biến vào "công lý"  ở Demacia không nhất thiết là khách quan. Đối với một sát thủ, "công lý" có thể được diễn giải một cách chủ quan là sự loại bỏ những cá nhân mà, mặc dù thoát khỏi sự truy tố pháp lý thông thường, được coi là mối đe dọa đối với sự ổn định hoặc lý tưởng của Demacia. Điều này đặc biệt liên quan khi xem xét "hệ thống phân cấp xã hội phức tạp" , nơi các cá nhân cấp cao hoặc giàu có có thể không bị luật pháp truyền thống chạm tới. Một đặc vụ bí mật, có khả năng được chính phủ "độc đoán"  cho phép, có thể hoạt động như một bàn tay báo thù vô hình, đảm bảo rằng "công lý" được thực thi, ngay cả khi điều đó có nghĩa là hoạt động ngoài nhận thức của công chúng về luật pháp. Điều này hé lộ một mặt tối hơn của "công lý" Demacia—một mặt thực dụng và có khả năng đạo đức giả. Nó cho thấy rằng việc tuân thủ nghiêm ngặt các lý tưởng công khai có thể đòi hỏi một hệ thống bóng tối, nơi các phương tiện ngoài vòng pháp luật được sử dụng để duy trì trật tự và kiểm soát, đặc biệt là trong giới tinh hoa. Điều này tạo ra sự căng thẳng giữa hình ảnh bên ngoài của Demacia và những thực tế ẩn giấu của nó.   \n\n"Nghĩa vụ" là một giá trị cốt lõi của Demacia. Một sát thủ có thể hoạt động dưới một ý thức sâu sắc về "nghĩa vụ" đối với Demacia vượt ra ngoài các luật lệ rõ ràng hoặc các nhiệm vụ công khai. Nghĩa vụ này có thể bắt nguồn từ niềm tin cá nhân của một đặc vụ nổi loạn, hoặc từ một chỉ thị bí mật được ban hành bởi một gia đình quý tộc hùng mạnh  tin rằng hành động của họ là tối quan trọng cho sự sống còn lâu dài của vương quốc, ngay cả khi nhà nước không thể chính thức thừa nhận chúng. "Kỷ luật kiên định" của quân đội  có thể mở rộng đến các đơn vị bí mật, được phân chia cao độ. Khái niệm này mở ra khả năng cho các phe phái nội bộ và các cuộc đấu tranh quyền lực trong Demacia. Các cách diễn giải khác nhau về "nghĩa vụ" có thể dẫn đến các hoạt động bí mật, thậm chí có thể chống lại các Demacia khác bị một nhóm cụ thể coi là mối đe dọa. Nó bổ sung các lớp âm mưu chính trị và sự mơ hồ đạo đức vào động lực nội bộ của vương quốc.   \n\nB. Mệnh Lệnh Chống Ma Thuật\nNền tảng của Demacia được xây dựng trên nỗi sợ hãi và sự cấm đoán ma thuật, được thành lập như một "nơi ẩn náu khỏi ma thuật sau Chiến Tranh Rune". Chính sách chống ma thuật khắt khe này được duy trì bằng cách sử dụng petricite - một loại đá có khả năng hấp thụ ma thuật được sử dụng để xây dựng các tòa thành và pháo đài của Demacia. Những người phù thủy bị phát hiện thường bị giam giữ, trục xuất hoặc tệ hơn. Tuy nhiên, sự thật phức tạp hơn - nhiều công dân Demacia, kể cả trong hoàng gia, bí mật sở hữu năng lực ma thuật và phải che giấu bản chất thật của mình.\n\nC. Xung Đột Nội Bộ & Mối Đe Dọa Bên Ngoài\nMặc dù Demacia trình bày hình ảnh thống nhất, vương quốc này đang phải đối mặt với nhiều thách thức nghiêm trọng. Bên trong, sự chia rẽ xã hội đang gia tăng giữa những người ủng hộ chính sách chống ma thuật cứng rắn và những người muốn cải cách. Các gia đình quý tộc tranh giành ảnh hưởng và quyền lực, tạo ra căng thẳng chính trị. Bên ngoài, Demacia đối mặt với mối đe dọa từ Noxus - kẻ thù truyền kiếp với triết lý hoàn toàn trái ngược, cũng như các lực lượng siêu nhiên và quái vật từ những vùng đất xa xôi.\n\nD. Địa Lý & Xã Hội\nDemacia nằm ở miền trung Valoran, với thủ đô cùng tên được bao quanh bởi những bức tường petricite khổng lồ. Vương quốc này có địa hình đa dạng từ những đồng cỏ xanh tươi, rừng cây cổ thụ đến những dãy núi hùng vĩ. Xã hội Demacia được tổ chức theo hệ thống phong kiến với hoàng gia ở đỉnh cao, tiếp theo là các gia đình quý tộc, hiệp sĩ, và cuối cùng là nông dân. Giáo dục và huấn luyện quân sự được coi trọng, với nhiều học viện danh tiếng đào tạo các hiệp sĩ và chiến binh ưu tú. Kiến trúc Demacia nổi tiếng với những tòa lâu đài và nhà thờ tráng lệ, được xây dựng từ đá trắng và petricite, tạo nên vẻ đẹp uy nghiêm và thiêng liêng.`.trim(),
      existingChampions: [
        {
          id: "garen",
          name: "Garen",
          icon: "🛡️",
          role: "Đấu Sĩ",
          region: "demacia",
          lore: "Một chiến binh cao quý và là biểu tượng của Demacia.",
        },
        {
          id: "lux",
          name: "Lux",
          icon: "✨",
          role: "Pháp Sư",
          region: "demacia",
          lore: "Một pháp sư ánh sáng mạnh mẽ, phải che giấu khả năng của mình.",
        },
        {
          id: "jarvan",
          name: "Jarvan IV",
          icon: "👑",
          role: "Đỡ Đòn",
          region: "demacia",
          lore: "Hoàng tử của Demacia, dẫn đầu quân đội bảo vệ đất nước.",
        },
        {
          id: "shyvana",
          name: "Shyvana",
          icon: "🐉",
          role: "Đấu Sĩ",
          region: "demacia",
          lore: "Nữ rồng nửa người, chiến đấu để chứng minh lòng trung thành với Demacia.",
        },
        {
          id: "fiora",
          name: "Fiora",
          icon: "⚔️",
          role: "Đấu Sĩ",
          region: "demacia",
          lore: "Đấu kiếm gia kiêu hãnh nhất Demacia, tìm kiếm những thử thách xứng đáng.",
        },
      ],
      newChampions: [
        {
          name: "Seraphina, Người Canh Gác Lumina",
          icon: "✨",
          role: "Hỗ Trợ",
          region: "demacia",
          lore: "Pháp sư đã tìm ra cách thanh lọc ma thuật bằng ánh sáng tinh khiết.",
          skills: [
            "Q: Tia Sáng Trói Buộc",
            "W: Hào Quang Bảo Vệ",
            "E: Cột Sáng Phục Hồi",
            "R: Bình Minh Rạng Rỡ",
          ],
        },
      ],
    },
    {
      id: "noxus",
      name: "Noxus",
      icon: "🗡️",
      existingChampions: [
        {
          id: "darius",
          name: "Darius",
          icon: "🪓",
          role: "Đấu Sĩ",
          region: "noxus",
          lore: "Tướng quân không khoan nhượng của Noxus, biểu tượng của sức mạnh và quyết tâm.",
        },
        {
          id: "katarina",
          name: "Katarina",
          icon: "🗡️",
          role: "Sát Thủ",
          region: "noxus",
          lore: "Sát thủ lưỡng dao nguy hiểm nhất của Noxus, nhanh như chớp và tàn nhẫn.",
        },
        {
          id: "swain",
          name: "Swain",
          icon: "🦅",
          role: "Pháp Sư",
          region: "noxus",
          lore: "Thống suất cao cấp của Noxus, sử dụng ma thuật quỷ dữ để thống trị.",
        },
      ],
      newChampions: [
        {
          name: "Vex'thar, Đại Tướng Máu",
          icon: "⚔️",
          role: "Đấu Sĩ",
          region: "noxus",
          lore: "Chiến binh tàn bạo từ vùng biên giới, sử dụng máu kẻ thù để tăng sức mạnh.",
          skills: [
            "Q: Thối Máu",
            "W: Phẫn Nộ Tàn Bạo",
            "E: Lướt Sát Thương",
            "R: Cuồng Máu",
          ],
        },
      ],
    },
    {
      id: "ionia",
      name: "Ionia",
      icon: "🌸",
      existingChampions: [
        {
          id: "yasuo",
          name: "Yasuo",
          icon: "🌪️",
          role: "Đấu Sĩ",
          region: "ionia",
          lore: "Kiếm sĩ bất tài với lời nguyền gió, tìm kiếm sự cứu rỗi và tha thứ.",
        },
        {
          id: "ahri",
          name: "Ahri",
          icon: "🦊",
          role: "Pháp Sư",
          region: "ionia",
          lore: "Hồ ly chín đuôi, tìm kiếm nguồn gốc thật sự của mình giữa hai thế giới.",
        },
        {
          id: "irelia",
          name: "Irelia",
          icon: "💃",
          role: "Đấu Sĩ",
          region: "ionia",
          lore: "Vũ công lưỡi dao, dẫn đầu kháng chiến chống lại sự xâm lược của Noxus.",
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
    },
    {
      id: "piltover",
      name: "Piltover",
      icon: "⚙️",
      existingChampions: [
        {
          id: "jayce",
          name: "Jayce",
          icon: "🔨",
          role: "Đấu Sĩ",
          region: "piltover",
          lore: "Nhà phát minh thiên tài, tạo ra vũ khí biến hình tiên tiến để bảo vệ Piltover.",
        },
        {
          id: "caitlyn",
          name: "Caitlyn",
          icon: "🎯",
          role: "Xạ Thủ",
          region: "piltover",
          lore: "Cảnh sát trưởng Piltover, nổi tiếng với khả năng bắn tỉa hoàn hảo.",
        },
        {
          id: "vi",
          name: "Vi",
          icon: "👊",
          role: "Đấu Sĩ",
          region: "piltover",
          lore: "Cảnh sát hung hãn với đôi găng tay Hextech, thích giải quyết vấn đề bằng nắm đấm.",
        },
      ],
      newChampions: [
        {
          name: "Gearwick, Thợ Máy Thiên Tài",
          icon: "🔧",
          role: "Hỗ Trợ",
          region: "piltover",
          lore: "Nhà phát minh trẻ tuổi, tạo ra các thiết bị Hextech hỗ trợ đồng minh trong chiến đấu.",
          skills: [
            "Q: Rô-bốt Tu Sửa",
            "W: Tháp Pháo Tự Động",
            "E: Tăng Tốc Hextech",
            "R: Máy Móc Đại Chiến",
          ],
        },
      ],
    },
  ],
  specialChampions: {
    apocalypseKnight: {
      id: "apocalypse",
      name: "Kỵ Sĩ Khải Huyền",
      icon: "🐎",
      role: "Lai/Đa Dạng",
      region: "special",
      lore: "Tướng có khả năng biến đổi thành bốn dạng khác nhau: Chiến Tranh (AD), Nạn Đói (AP), Dịch Bệnh (Thích Ứng), Cái Chết (Tank).",
      skills: [
        "Dạng Chiến Tranh - Đấu Sĩ AD",
        "Dạng Nạn Đói - Pháp Sư AP",
        "Dạng Dịch Bệnh - Sát Thương Thích Ứng",
        "Dạng Cái Chết - Tank/Kiểm Soát",
      ],
      special: true,
    },
  },
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = championsDatabase;
}
