# 🏰 Runeterra Champions Database

Hệ thống chuẩn hóa dữ liệu tướng Runeterra với khả năng cào dữ liệu từ API, phân loại theo vùng đất, tránh lặp, và lưu trữ bền vững.

## ✨ Tính năng chính

- 🚀 **Cào dữ liệu tự động**: Lấy dữ liệu tất cả tướng từ Riot API
- 🎯 **Không lặp tướng**: Logic chặt chẽ để tránh duplicate
- 📍 **Phân loại region**: Tự động phân loại tướng theo vùng đất dựa trên lore
- 💾 **Lưu trữ bền vững**: Lưu dữ liệu vào database, không cần cào lại mỗi lần
- 📁 **Xuất file tự động**: Tạo file JS cho từng region + database tổng hợp
- 🔍 **Tìm kiếm & lọc**: Giao diện thân thiện để tìm kiếm và lọc tướng
- 📊 **Thống kê chi tiết**: Hiển thị phân bố tướng theo region

## 📂 Cấu trúc hệ thống

### Files chính (sau khi chuẩn hóa):

- `main.html` - **FILE CHÍNH** để sử dụng
- `database/final-crawler.js` - Crawler không lặp, mapping region chuẩn
- `database/auto-writer.js` - Tự động tạo và download file database
- `database/app.js` - Ứng dụng load dữ liệu từ database
- `test-anti-duplicate.html` - Test hệ thống chống lặp

## 🚀 Hướng dẫn sử dụng

### 1. Lần đầu sử dụng

1. Mở `main.html` trong trình duyệt
2. Click **"🚀 Cào Dữ Liệu"** để cào từ API
3. Click **"📁 Tạo & Download Files"** để tạo file database
4. Dữ liệu được lưu bền vững, không cần cào lại

### 2. Lần sau sử dụng

1. Mở `main.html`
2. Click **"💾 Load Database"** - Tải dữ liệu đã lưu
3. Không cần cào lại!

## 🗂️ Files đã được dọn dẹp

### ✅ Files đã xóa (dư thừa):

- `champion-crawler.js` → Thay thế bằng `database/final-crawler.js`
- `region-generator.js` → Thay thế bằng `database/auto-writer.js`
- `app-new.js` → Thay thế bằng `database/app.js`
- `enhanced-auto-crawl.js` → Tích hợp vào `final-crawler.js`
- `js/api-crawler.js` → Không cần thiết
- `init-enhanced.js` → Không cần thiết

### ✅ Hệ thống mới:

- **Không lặp tướng**: Logic chặt chẽ với nhiều lớp kiểm tra
- **Phân loại chuẩn**: Mapping region dựa trên lore chính thức
- **Lưu trữ bền vững**: Không cần cào lại mỗi lần sử dụng
- **Tự động hóa**: Auto tạo file, download, copy code

---

**🎮 Hệ thống chuẩn hóa cho Runeterra Champions Database**
