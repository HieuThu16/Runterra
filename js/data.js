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
          fullName:
            "Cho'Gath, Nỗi Kinh Hoàng Hư Không (The Terror of the Void)",
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
          fullName: "Kalista, Tinh Thần Báo Thù (The Spear of Vengeance)",
          icon: "🏹",
          role: "Xạ Thủ",
          region: "shadowisles",
          species:
            "Linh hồn/Ma quái (Specter/Wraith/Undead) - Từng là con người",
          age: "Hơn 1000 năm tuổi (sống cùng thời Viego, chết trong Đại Suy Vong)",
          weapon: "Thương linh hồn (Soul-spears)",
          lore: "Tướng quân cao quý bị phản bội và chết trong Đại Suy Vong, giờ là tinh thần báo thù bất diệt săn lùng những kẻ bội bạc.",
          fullLore:
            "Kalista từng là một tướng quân cao quý và trung thành, phục vụ dưới quyền của vua Viego trên Quần Đảo Phước Lành. Cô là một chiến binh kiên cường và đáng tin cậy, luôn đặt lòng trung thành lên hàng đầu. Tuy nhiên, trong sự kiện Đại Suy Vong, Kalista đã bị phản bội bởi những người mà cô tin tưởng nhất và bị giết chết trong đau đớn.\n\nSự phản bội đã biến đổi linh hồn của Kalista thành một thực thể báo thù bất diệt. Giờ đây, cô không còn là con người mà là một tinh thần ma quái, đại diện cho tâm trí tập thể của những linh hồn báo thù trên Quần Đảo Bóng Đêm. Cô hấp thụ linh hồn của những người bị phản bội để thực hiện lời thề báo thù, trở thành biểu tượng của việc trả thù cho những ai đã bị bội bạc.\n\nSự tồn tại của Kalista chứng minh rằng Quần Đảo Bóng Đêm có khả năng hấp thụ và tập hợp nỗi đau khổ của con người, tạo ra một lực lượng báo thù rộng lớn và mạnh mẽ hơn bao giờ hết.",
          gameplay:
            "Kalista là một xạ thủ với lối chơi độc đáo, tập trung vào sự linh hoạt và khả năng gắn kết với đồng minh. Cô có thể lướt sau mỗi đòn đánh, tạo ra lối chơi năng động và khó dự đoán. Khả năng liên kết với đồng minh (Oathsworn) tạo ra sự phối hợp độc đáo trong giao tranh đội.",
          skills: [
            {
              type: "Passive",
              name: "Phong Thái Quân Nhân (Martial Poise)",
              description:
                "Kalista lướt sau mỗi đòn đánh cơ bản, di chuyển theo hướng con trỏ chuột. Cô không thể hủy bỏ animation đòn đánh.",
            },
            {
              type: "Q",
              name: "Đâm Xuyên (Pierce)",
              description:
                "Kalista ném một thương linh hồn xuyên qua kẻ địch, gây sát thương vật lý. Nếu giết chết mục tiêu, thương sẽ tiếp tục bay và chuyển hiệu ứng Rend sang mục tiêu tiếp theo.",
            },
            {
              type: "W",
              name: "Người Canh Gác (Sentinel)",
              description:
                "(Nội tại) Kalista và Oathsworn gây thêm sát thương khi tấn công cùng mục tiêu. (Kích hoạt) Kalista triệu hồi một linh hồn canh gác di chuyển chậm, cung cấp tầm nhìn và tiết lộ kẻ địch.",
            },
            {
              type: "E",
              name: "Giậy Vò (Rend)",
              description:
                "Kalista rút tất cả thương đã cắm ra khỏi kẻ địch gần đó, gây sát thương vật lý tăng theo số thương. Nếu giết chết ít nhất một mục tiêu, Rend được reset cooldown.",
            },
            {
              type: "R",
              name: "Lời Kêu Gọi Định Mệnh (Fate's Call)",
              description:
                "Kalista kéo Oathsworn về phía mình, khiến họ bất khả xâm phạm. Oathsworn có thể nhấn chuột để lao về phía trước, đẩy lùi kẻ địch trúng phải.",
            },
          ],
          specialFeatures: [
            "Cơ chế lướt sau mỗi đòn đánh là độc nhất trong game, tạo ra lối chơi năng động",
            "Hệ thống liên kết Oathsworn cho phép phối hợp độc đáo với đồng minh",
            "Khả năng cắm và rút thương tạo ra combo sát thương bùng nổ",
            "Là biểu tượng của sự báo thù và phản bội trong lore Runeterra",
            "Thể hiện khía cạnh tâm lý sâu sắc về hậu quả của sự phản bội",
            "Đại diện cho tâm trí tập thể của những linh hồn báo thù trên Quần Đảo Bóng Đêm",
          ],
        },
        {
          id: "hecarim",
          name: "Hecarim",
          fullName: "Hecarim, Bóng Đêm Của Chiến Tranh (The Shadow of War)",
          icon: "🐴",
          role: "Đấu Sĩ",
          region: "shadowisles",
          species:
            "Linh hồn/Ma quái (Spectral fusion of man and beast/Undead) - Từng là con người",
          age: "Hơn 1000 năm tuổi (sống cùng thời Viego, chết trong Đại Suy Vong)",
          weapon:
            "Thương chiến, móng guốc bọc thép, và cơ thể ma quái hợp nhất với ngựa",
          lore: "Kỵ sĩ chiến tranh ma quái dẫn đầu đoàn kỵ binh ma, từng là hiệp sĩ kiêu hãnh bị biến thành thực thể ma quái hợp nhất với ngựa.",
          fullLore:
            "Hecarim từng là một hiệp sĩ kiêu hãnh và tham vọng của Iron Order trên Quần Đảo Phước Lành. Hắn luôn khao khát vinh quang và chiến thắng, coi trọng danh tiếng hơn cả tính mạng của những người dưới quyền. Sự ám ảnh với chiến tranh và quyền lực đã khiến hắn trở thành một nhà lãnh đạo tàn nhẫn và độc đoán.\n\nTrong sự kiện Đại Suy Vong, khi năng lượng ma thuật bị nguyền rủa tràn ngập Quần Đảo, Hecarim đã bị biến đổi một cách ghê rợn. Hắn hợp nhất với con ngựa chiến của mình, trở thành một quái vật ma quái nửa người nửa thú. Sự biến đổi này không chỉ là ngẫu nhiên mà phản ánh trực tiếp bản chất tối tăm bên trong của hắn.\n\nGiờ đây, Hecarim dẫn đầu một đoàn kỵ binh ma quái vĩnh cửu, lướt qua Quần Đảo Bóng Đêm để gieo rắc tàn phá. Hình dạng bị nguyền rủa của hắn trở thành biểu hiện vật lý của sự tăm tối bên trong - một sự công bằng mang tính trớ trêu của Quần Đảo, nơi đặc điểm nổi bật của một người trở thành sự hành hạ và vũ khí vĩnh cửu.",
          gameplay:
            "Hecarim là một đấu sĩ với khả năng cơ động cao, tập trung vào việc lao vào giao tranh và gây sát thương diện rộng. Lối chơi của hắn xoay quanh việc tận dụng tốc độ di chuyển để tăng sát thương và khả năng hồi máu trong combat.",
          skills: [
            {
              type: "Passive",
              name: "Đường Chiến (Warpath)",
              description:
                "Hecarim nhận thêm sát thương vật lý dựa trên tốc độ di chuyển cộng thêm. Hecarim bỏ qua va chạm đơn vị.",
            },
            {
              type: "Q",
              name: "Cuồng Loạn (Rampage)",
              description:
                "Hecarim chém kẻ địch phía trước, gây sát thương vật lý. Sử dụng lại kỹ năng này tăng sát thương và giảm cooldown.",
            },
            {
              type: "W",
              name: "Linh Hồn Nỗi Sợ Hãi (Spirit of Dread)",
              description:
                "Hecarim gây sát thương ma thuật cho kẻ địch xung quanh trong vài giây và hồi máu dựa trên sát thương gây ra.",
            },
            {
              type: "E",
              name: "Vó Ngựa Hủy Diệt (Devastating Charge)",
              description:
                "Hecarim tăng tốc độ di chuyển và đòn đánh tiếp theo sẽ hất tung mục tiêu và gây thêm sát thương dựa trên khoảng cách di chuyển.",
            },
            {
              type: "R",
              name: "Thảm Họa Bóng Đêm (Onslaught of Shadows)",
              description:
                "Hecarim triệu hồi kỵ sĩ ma quái lướt về phía trước, gây sát thương ma thuật và làm hoảng sợ kẻ địch. Hecarim có thể dịch chuyển cùng với kỵ sĩ ma.",
            },
          ],
          specialFeatures: [
            "Sự hợp nhất giữa người và thú tạo ra hình dạng độc đáo trong Runeterra",
            "Khả năng bỏ qua va chạm đơn vị cho phép di chuyển linh hoạt",
            "Tốc độ di chuyển trực tiếp ảnh hưởng đến sát thương, tạo ra lối chơi năng động",
            "Dẫn đầu đoàn kỵ binh ma quái trong chiêu cuối tạo ra moment hùng tráng",
            "Thể hiện sự công bằng trớ trêu của Quần Đảo Bóng Đêm",
            "Biểu tượng của việc đặc điểm cá nhân trở thành lời nguyền vĩnh cửu",
            "Đại diện cho sự ám ảnh với chiến tranh và quyền lực",
          ],
        },
        {
          id: "yorick",
          name: "Yorick",
          fullName: "Yorick, Kẻ Chăn Dắt Linh Hồn (The Shepherd of Souls)",
          icon: "⚰️",
          role: "Đấu Sĩ",
          region: "shadowisles",
          species:
            "Con người bị nguyền rủa/Người sống sót (Cursed Human/Survivor)",
          age: "Hơn 1000 năm tuổi (sống sót sau Đại Suy Vong)",
          weapon:
            "Cây xẻng (spade), Nước Sự Sống (Waters of Life), khả năng triệu hồi Ma Sương và Ma Nữ Sương Đen",
          lore: "Người đào mộ cuối cùng của Quần Đảo Phước Lành, sống sót sau Đại Suy Vong, tìm cách giải thoát linh hồn bị mắc kẹt.",
          fullLore:
            "Yorick là người đào mộ cuối cùng của Quần Đảo Phước Lành, một trong số ít người sống sót sau thảm họa Đại Suy Vong. Hắn sống sót nhờ chiếc vòng cổ chứa Nước Sự Sống - nguồn năng lượng thiêng liêng của hòn đảo. Trong khi hầu hết cư dân khác đã chết hoặc biến thành ma quái, Yorick vẫn giữ được bản chất con người.\n\nKhác với những tướng khác ở Quần Đảo Bóng Đêm, Yorick không chấp nhận số phận bị nguyền rủa. Thay vào đó, hắn chủ động chiến đấu chống lại Đại Suy Vong bằng cách sử dụng chính sức mạnh của nó. Hắn có khả năng điều khiển và triệu hồi Ma Sương - những linh hồn bị mắc kẹt, để giải thoát chúng khỏi sự đau khổ vĩnh cửu.\n\nYorick đại diện cho một tia hy vọng hiếm hoi trong vùng đất tuyệt vọng. Mục đích cao cả của hắn là giải phóng toàn bộ quê hương khỏi lời nguyền, đối lập hoàn toàn với sự độc ác và tuyệt vọng của những ma quái khác. Hắn là biểu tượng của sự kháng cự và ý chí không khuất phục.",
          gameplay:
            "Yorick là một đấu sĩ chuyên về đẩy đường và giao tranh cùng đội quân ma quái. Lối chơi của hắn tập trung vào việc tạo áp lực liên tục thông qua Ma Sương và Ma Nữ Sương Đen, đồng thời có khả năng kiểm soát khu vực mạnh mẽ.",
          skills: [
            {
              type: "Passive",
              name: "Kẻ Chăn Dắt Linh Hồn (Shepherd of Souls)",
              description:
                "Khi kẻ địch chết gần Yorick, chúng để lại một ngôi mộ. Yorick có thể triệu hồi Ma Sương từ các ngôi mộ này để hỗ trợ trong chiến đấu.",
            },
            {
              type: "Q",
              name: "Nghi Thức Cuối Cùng (Last Rites)",
              description:
                "Đòn đánh tiếp theo của Yorick gây thêm sát thương và hồi máu. Nếu giết chết mục tiêu, kỹ năng được reset cooldown.",
            },
            {
              type: "W",
              name: "Lễ Tang Đen Tối (Dark Procession)",
              description:
                "Yorick triệu hồi một bức tường ma quái bao quanh khu vực, chặn đường di chuyển của kẻ địch. Tường có thể bị phá hủy sau một số đòn đánh.",
            },
            {
              type: "E",
              name: "Sương Mù Than Khóc (Mourning Mist)",
              description:
                "Yorick ném một đám sương ma quái, gây sát thương ma thuật, làm chậm và đánh dấu kẻ địch. Ma Sương sẽ nhảy vào mục tiêu bị đánh dấu.",
            },
            {
              type: "R",
              name: "Điệu Hát Ru Của Đảo (Eulogy of the Isles)",
              description:
                "Yorick triệu hồi Ma Nữ Sương Đen để cùng chiến đấu. Ma Nữ tự động tấn công kẻ địch và tạo ra ngôi mộ khi giết chết mục tiêu.",
            },
          ],
          specialFeatures: [
            "Duy nhất ở Quần Đảo Bóng Đêm vì chủ động chống lại lời nguyền",
            "Sử dụng chính sức mạnh của Đại Suy Vong để chiến đấu chống lại nó",
            "Đại diện cho hy vọng và sự kháng cự trong vùng đất tuyệt vọng",
            "Có khả năng giải thoát linh hồn bị mắc kẹt thay vì nô lệ hóa chúng",
            "Lối chơi tập trung vào đẩy đường với đội quân ma quái",
            "Ma Nữ Sương Đen là một trong những summon mạnh nhất trong game",
            "Biểu tượng của ý chí không khuất phục trước nghịch cảnh",
          ],
        },
        {
          id: "maokai",
          name: "Maokai",
          fullName: "Maokai, Người Bảo Vệ Ma Quái (The Twisted Treant)",
          icon: "🌳",
          role: "Đỡ Đòn",
          region: "shadowisles",
          species: "Linh hồn tự nhiên/Cây cổ thụ (Nature Spirit/Treant)",
          age: "Rất cổ xưa, sinh ra cùng với Quần Đảo Phước Lành",
          weapon:
            "Cơ thể cây cổ thụ, khả năng thao túng rễ cây và ném cây con (saplings)",
          lore: "Cây cổ thụ sống bảo vệ tàn tích cuối cùng của Quần Đảo Phước Lành, từ linh hồn tự nhiên hòa bình thành cây giận dữ.",
          fullLore:
            "Maokai từng là một linh hồn tự nhiên hòa bình, hiện thân của sự sống và thiên nhiên trên Quần Đảo Phước Lành. Hắn sinh ra cùng với hòn đảo và chứng kiến sự phát triển rực rỡ của nền văn minh con người. Trong thời kỳ hoàng kim, Maokai sống trong hòa hợp với cư dân, bảo vệ và nuôi dưỡng sự sống.\n\nKhi Đại Suy Vong xảy ra, năng lượng ma thuật bị nguyền rửa đã biến dạng Maokai thành một cây cổ thụ giận dữ và đau khổ. Tuy nhiên, khác với những sinh vật khác, hắn vẫn giữ được ý thức và mục đích ban đầu nhờ Nước Sự Sống còn lại trong lõi cây của mình.\n\nGiờ đây, Maokai là một trong số ít sinh vật còn lại chiến đấu chống lại sự chết chóc trên Quần Đảo Bóng Đêm. Hắn tìm cách xua đuổi những nỗi kinh hoàng phi tự nhiên và khôi phục vẻ đẹp ban đầu của quê hương. Là hiện thân của cuộc đấu tranh tuyệt vọng của thiên nhiên, Maokai không chỉ sống sót mà còn chủ động tìm cách đảo ngược lời nguyền.",
          gameplay:
            "Maokai là một tank/đỡ đòn chuyên về kiểm soát giao tranh và hỗ trợ đội. Lối chơi của hắn tập trung vào việc khởi động giao tranh, bảo vệ đồng minh và gây sát thương ma thuật trong thời gian dài.",
          skills: [
            {
              type: "Passive",
              name: "Ma Thuật Cây (Sap Magic)",
              description:
                "Sau khi sử dụng kỹ năng hoặc bị tấn công, đòn đánh tiếp theo của Maokai sẽ hồi máu cho hắn.",
            },
            {
              type: "Q",
              name: "Bụi Cây Đột Biến (Bramble Smash)",
              description:
                "Maokai đập mạnh xuống đất, gây sát thương ma thuật, hất tung và làm chậm kẻ địch trong một khu vực.",
            },
            {
              type: "W",
              name: "Bước Chân Ma Quái (Twisted Advance)",
              description:
                "Maokai lướt đến mục tiêu, trở thành bất khả xâm phạm và trói chân mục tiêu khi đến nơi.",
            },
            {
              type: "E",
              name: "Ném Chồi Non (Sapling Toss)",
              description:
                "Maokai ném một cây con đến vị trí chỉ định. Cây con sẽ rượt đuổi kẻ địch gần đó và nổ tung, gây sát thương và làm chậm.",
            },
            {
              type: "R",
              name: "Quyền Năng Thiên Nhiên (Nature's Grasp)",
              description:
                "Maokai triệu hồi một tường gai khổng lồ di chuyển chậm về phía trước, làm chậm và trói chân kẻ địch mà nó chạm phải.",
            },
          ],
          specialFeatures: [
            "Hiện thân của cuộc đấu tranh của thiên nhiên chống lại Đại Suy Vong",
            "Một trong số ít sinh vật chủ động tìm cách đảo ngược lời nguyền",
            "Linh hồn tự nhiên cổ xưa nhất còn sống sót trên Quần Đảo",
            "Khả năng hồi máu thụ động giúp duy trì trong giao tranh dài",
            "Cây con (saplings) tạo ra áp lực vùng và kiểm soát khu vực",
            "Chiêu cuối có phạm vi tác động cực lớn trên toàn bản đồ",
            "Biểu tượng của sự kiên cường và hy vọng của thiên nhiên",
            "Đại diện cho việc bảo vệ tàn tích cuối cùng của vẻ đẹp nguyên thủy",
          ],
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
