# 📊 Hướng Dẫn Hệ Thống Thống Kê & Phân Tích

## Tổng Quan

Hệ thống thống kê và phân tích cho Runeterra Games Hub cung cấp hai chức năng chính:

### 📊 **Thống Kê (Statistics)**

- Hiển thị dữ liệu chi tiết về champions và regions
- Phân tích phân bố theo nhiều tiêu chí
- Giao diện trực quan với biểu đồ và số liệu

### 🔍 **Phân Tích (Analytics)**

- Phân tích chất lượng dữ liệu
- Phát hiện các khoảng trống trong dữ liệu
- Đưa ra gợi ý tướng mới dựa trên phân tích
- Tạo báo cáo chi tiết

---

## 🚀 Cách Sử Dụng

### Truy Cập Hệ Thống

1. Mở ứng dụng Runeterra Games Hub
2. Click vào tab **"📊 Thống Kê"** hoặc **"🔍 Phân Tích"**

### Thống Kê (Statistics)

#### **Tổng Quan**

- **Tổng số tướng**: Champions hiện có trong database
- **Số vùng đất**: Regions được hỗ trợ
- **Loại vũ khí**: Đa dạng weapons
- **Vai trò phổ biến**: Role xuất hiện nhiều nhất

#### **Các Tab Thống Kê**

##### 📍 **Vùng Đất (Regions)**

- Phân bố champions theo từng region
- Tỷ lệ official vs creative champions
- Click vào region card để xem chi tiết
- Modal hiển thị:
  - Danh sách champions trong region
  - Phân bố roles, weapons, species
  - Thống kê completion rate

##### 🎭 **Vai Trò (Roles)**

- Phân bố champions theo vai trò
- Biểu đồ số lượng cho mỗi role
- Hover để xem danh sách champions

##### ⚔️ **Vũ Khí (Weapons)**

- Thống kê theo loại vũ khí
- Supports multiple weapons per champion
- Chi tiết weapons được sử dụng nhiều nhất

##### 👤 **Giới Tính (Gender)**

- Phân bố theo giới tính
- Simplification: Nam/Nữ/Không xác định/Khác

##### 🧬 **Loài (Species)**

- Phân loại theo species
- Từ Con người đến Yordle, Hồn ma, v.v.

##### 📅 **Năm Phát Hành (Release Year)**

- Timeline phát hành champions
- Phân tích xu hướng theo năm

### Phân Tích (Analytics)

#### **💡 Thông Tin Chính (Insights)**

- Key insights về dữ liệu
- Xu hướng và patterns
- Highlights quan trọng

#### **🎯 Thiếu Sót (Data Gaps)**

- Phát hiện regions thiếu champions
- Roles chưa được represent đủ
- Missing data fields (images, lore, skills)
- Prioritized list of gaps to fill

#### **✨ Gợi Ý Tướng Mới (Champion Suggestions)**

- AI-generated champion ideas
- Dựa trên analysis của existing data
- Unique combinations của region + role + weapon
- Click **"Tạo Tướng"** để mở form tạo champion mới

#### **📈 Chất Lượng Dữ Liệu (Data Quality)**

- Health score cho database
- Completion rates cho từng field
- Data consistency analysis
- Duplicate detection
- Quality indicators:
  - 🟢 **Excellent** (90-100%)
  - 🔵 **Good** (70-89%)
  - 🟡 **Fair** (50-69%)
  - 🔴 **Poor** (<50%)

---

## 🔧 Tính Năng Nâng Cao

### **Caching System**

- Intelligent caching với 5-minute expiry
- Auto-refresh khi data thay đổi
- Performance optimization

### **Export Functionality**

- **📤 Xuất Báo Cáo**: Export analytics report as JSON
- Backup statistics data
- Share insights với team

### **Responsive Design**

- Mobile-friendly interface
- Adaptive layouts
- Touch-optimized interactions

### **Real-time Updates**

- Auto-refresh statistics khi add/edit champions
- Live data synchronization
- Instant feedback

---

## 🎨 Giao Diện Người Dùng

### **Navigation**

- Tab-based navigation cho easy switching
- Color-coded categories
- Intuitive icons và labels

### **Interactive Elements**

- Click region cards để xem details
- Hover effects cho additional info
- Modal popups cho detailed views

### **Visual Design**

- Dark theme với accent colors
- Progress bars cho completion rates
- Charts và graphs cho data visualization
- Smooth animations và transitions

---

## 🔍 Technical Details

### **Architecture**

```
📁 js/
├── statistics.js        # Core statistics engine
├── analytics.js         # Advanced analytics & AI suggestions
├── statistics-ui.js     # UI rendering cho statistics
└── analytics-ui.js      # UI rendering cho analytics
```

### **Key Classes**

- **StatisticsManager**: Data processing & caching
- **AnalyticsManager**: Advanced analysis & insights
- **StatisticsUI**: Statistics visualization
- **AnalyticsUI**: Analytics interface

### **Integration**

- Seamlessly integrated với existing app
- Uses ChampionsDB cho data access
- Event-driven architecture
- Error handling & fallbacks

---

## 🚨 Troubleshooting

### **Common Issues**

#### **Statistics không load**

- Check browser console cho errors
- Verify tất cả JS files đã loaded
- Clear browser cache

#### **Data không accurate**

- Statistics sử dụng cached data (5 min)
- Click refresh hoặc reload page
- Check localStorage cho data corruption

#### **Performance Issues**

- Large datasets có thể slow
- Caching system should help
- Consider pagination for large lists

### **Debug Mode**

```javascript
// Enable debug logging
localStorage.setItem("debug_statistics", "true");

// Clear statistics cache
app.statisticsManager.clearCache();

// Refresh data
app.refreshStatistics();
```

---

## 🔮 Future Enhancements

### **Planned Features**

- 📊 Interactive charts (Chart.js integration)
- 🤖 Machine learning suggestions
- 📱 Mobile app version
- 🌐 Multi-language support expansion
- 📈 Historical data tracking
- 🎯 Custom analytics queries
- 📋 Template system cho champion creation

### **Data Sources**

- Integration với LoL official API
- Community data imports
- User-generated content analysis
- Cross-platform compatibility

---

## 📞 Support

Nếu có issues hoặc suggestions:

1. Check console logs cho technical errors
2. Verify data integrity
3. Report bugs với detailed steps
4. Feature requests welcome!

---

**🎮 Happy analyzing!**

_Phát triển bởi Runeterra Games Hub team_
