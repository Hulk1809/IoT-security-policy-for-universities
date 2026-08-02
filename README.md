# TRƯỜNG ĐẠI HỌC VĂN HIẾN — KHOA CÔNG NGHỆ THÔNG TIN
## BÁO CÁO ĐỒ ÁN MÔN HỌC: BẢO MẬT IoT (INT4410)
### **ĐỀ TÀI 46: CHÍNH SÁCH BẢO MẬT IoT CHO TRƯỜNG ĐẠI HỌC**
*(Hướng G: Quản trị rủi ro, chính sách, checklist và kiểm thử)*

---

## 📌 THÔNG TIN ĐỒ ÁN & THÀNH VIÊN THỰC HIỆN

* **Giảng viên hướng dẫn**: Thầy Hồ Nhựt Minh
* **Lớp học phần**: 253INT441001 (HK03, 2025–2026)
* **Sinh viên thực hiện**: Võ Quốc Thắng
* **Mã số sinh viên**: 231A011150
* **Link Repository GitHub**: [https://github.com/Hulk1809/IoT-security-policy-for-universities](https://github.com/Hulk1809/IoT-security-policy-for-universities)
* **Website Demo Trực tuyến (GitHub Pages)**: [https://Hulk1809.github.io/IoT-security-policy-for-universities/](https://Hulk1809.github.io/IoT-security-policy-for-universities/)
* **Tệp báo cáo Word chính thức**: `231A011150_VoQuocThang_46_baocao.docx`
* **Tệp hướng dẫn chi tiết Web Demo**: [Huong_Dan_Su_Dung_Web_Demo.md](file:///d:/231A011150_VoQuocThang/Huong_Dan_Su_Dung_Web_Demo.md)

---

## 🚀 GIỚI THIỆU WEB MÔ PHỎNG DEMO (`Campus-Secure IoT`)

Đây là ứng dụng Web Dashboard giám sát và điều khiển an ninh IoT trực quan được xây dựng nhằm mô phỏng thực tế các giải pháp quản trị chính sách bảo mật trình bày trong đồ án.

### 🛠️ Công nghệ sử dụng:
* **Frontend Core**: HTML5 Semantic, CSS3 Vanilla (Thiết kế Modern Glassmorphism, Dark Mode, Responsive), JavaScript ES6+ Native.
* **Fonts & Icons**: Google Fonts (`Inter`, `JetBrains Mono`), FontAwesome Icons.
* **Tính độc lập**: Chạy 100% trên Client-side, không yêu cầu cài đặt Server/Backend phức tạp.

---

## 📖 CÁC CÁCH TRUY CẬP VÀ VẬN HÀNH WEB DEMO

Bạn có thể tham khảo chi tiết hướng dẫn vận hành 6 kịch bản thao tác (TC-01 đến TC-05) tại tệp:  
👉 **[Huong_Dan_Su_Dung_Web_Demo.md](Huong_Dan_Su_Dung_Web_Demo.md)**

### Quick Start (Truy cập nhanh):
1. **Truy cập trực tuyến**: [https://Hulk1809.github.io/IoT-security-policy-for-universities/](https://Hulk1809.github.io/IoT-security-policy-for-universities/)
2. **Hoặc mở trực tiếp file `index.html`** trên trình duyệt máy tính của bạn.

---

## 🏆 CÁC TÍNH NĂNG CHÍNH CỦA DEMO

1. **Quản lý Tài sản IoT & Phân vùng VLAN**: Lọc xem 5 thiết bị thuộc VLAN 10, 20, 30, 99.
2. **Trình Quét Lỗ Hổng CVSS Scanner (TC-01)**: Nhấn "Khởi Chạy Quét Mạng" xuất điểm rủi ro CVSS 9.8.
3. **Giả Lập Tấn Công (TC-02)**: Nhấn "Simulate Hack Event" phát tín hiệu Brute-force/RTSP cảnh báo đỏ.
4. **Cô Lập Mạng Khẩn Cấp (TC-03)**: Nhấn "Cô Lập Mạng" ngắt kết nối cổng switch ảo cho HW-01 trong **2.4 giây**.
5. **Bảng Kiểm Tuân Thủ (TC-04)**: Tích 4 ô checkbox tuân thủ, tiến trình nhảy từ **0% ➔ 100%**.
6. **Ma Trận RACI & Security-as-Code (TC-05)**: Lọc phân quyền 5 vai trò và xem mã CLI Cisco ACL, Mosquitto MQTT, Snort Rules.
