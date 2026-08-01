# TRƯỜNG ĐẠI HỌC VĂN HIẾN — KHOA CÔNG NGHỆ THÔNG TIN
## BÁO CÁO ĐỒ ÁN MÔN HỌC: BẢO MẬT IoT (INT4410)
### **ĐỀ TÀI 46: CHÍNH SÁCH BẢO MẬT IoT CHO TRƯỜNG ĐẠI HỌC**
*(Hướng G: Quản trị rủi ro, chính sách, checklist và kiểm thử)*

---

## 📌 THÔNG TIN ĐỒ ÁN & THÀNH VIÊN THỰC HIỆN

* **Giảng viên hướng dẫn**: Hồ Nhựt Minh
* **Lớp học phần**: 253INT441001 (HK03, 2025–2026)
* **Sinh viên thực hiện**: Võ Quốc Thắng
* **Mã số sinh viên**: 231A011150
* **Link Repository GitHub**: [https://github.com/Hulk1809/IoT-security-policy-for-universities](https://github.com/Hulk1809/IoT-security-policy-for-universities)
* **Website Demo Trực tuyến (GitHub Pages)**: [https://Hulk1809.github.io/IoT-security-policy-for-universities/](https://Hulk1809.github.io/IoT-security-policy-for-universities/)
* **Tệp văn bản báo cáo chính thức**: `231A011150_VoQuocThang_46_baocao.docx`

---

## 🚀 GIỚI THIỆU WEB MÔ PHỎNG DEMO (`Campus-Secure IoT`)

Đây là ứng dụng Web Dashboard giám sát và điều khiển an ninh IoT trực quan được xây dựng nhằm mô phỏng thực tế các giải pháp quản trị chính sách bảo mật trình bày trong đồ án.

### 🛠️ Công nghệ sử dụng:
* **Frontend**: HTML5 Semantic, CSS3 Vanilla (Thiết kế Modern Glassmorphism, Dark Mode, Responsive), JavaScript ES6+ Native.
* **Fonts**: Google Fonts (`Inter`, `JetBrains Mono`).
* **Tính độc lập**: Chạy hoàn toàn trên Client-side, không yêu cầu cài đặt Server/Backend phức tạp.

---

## 💻 HƯỚNG DẪN CÁCH TRUY CẬP WEB DEMO

Bạn có thể chạy ứng dụng Web Demo bằng một trong 3 cách đơn giản sau:

### 🔹 Cách 1: Mở trực tiếp file `index.html` (Nhanh nhất)
1. Tải hoặc Clone kho lưu trữ này về máy tính của bạn.
2. Mở thư mục dự án, tìm file `index.html`.
3. **Click đúp chuột** vào file `index.html` (hoặc nhấp chuột phải chọn **Open with** -> chọn trình duyệt web như **Google Chrome**, **Microsoft Edge**, **Mozilla Firefox**, **Brave**,...).

### 🔹 Cách 2: Chạy qua Live Server trong Visual Studio Code
1. Mở thư mục dự án bằng **VS Code**.
2. Cài đặt Extension **Live Server** (nếu chưa có).
3. Nhấp chuột phải vào file `index.html` -> Chọn **Open with Live Server**. Trình duyệt sẽ tự động mở địa chỉ `http://127.0.0.1:5500`.

### 🔹 Cách 3: Truy cập trực tiếp qua GitHub Pages
* Bạn chỉ cần mở trình duyệt và truy cập liên kết công khai: [https://Hulk1809.github.io/IoT-security-policy-for-universities/](https://Hulk1809.github.io/IoT-security-policy-for-universities/)

---

## 📖 HƯỚNG DẪN CHI TIẾT CÁCH SỬ DỤNG VÀ THAO TÁC TRÊN WEB DEMO

Giao diện Web Demo được chia làm các khu vực chức năng chính tương ứng với các chương trong báo cáo:

```
+-----------------------------------------------------------------------------------+
|                            CAMPUS-SECURE IoT DASHBOARD                            |
+-----------------------------------------------------------------------------------+
|  [STATS GRID] Tổng thiết bị | An toàn | Cảnh báo | Nguy hiểm                     |
+-----------------------------------------+-----------------------------------------+
| [DANH SÁCH THIẾT BỊ & PHÂN VÙNG VLAN]   | [NHẬT KÝ SỰ CỐ & SIMULATE HACK EVENT]   |
|  - Lọc theo VLAN 10, VLAN 20, VLAN 30   |  - Ghi log thời gian thực               |
|  - Nút "Cô Lập Mạng" / "Khôi Phục"      |  - Nút giả lập tấn công                 |
+-----------------------------------------+-----------------------------------------+
| [TRÌNH QUÉT LỖ HỔNG (SECURITY SCANNER)] | [BẢNG KIỂM TUÂN THỦ (CHECKLIST)]        |
|  - Khởi chạy quét mạng (STRIDE/OWASP)   |  - Tích chọn tiêu chí & tính điểm %     |
+-----------------------------------------+-----------------------------------------+
| [SECURITY AS CODE MODULES]              | [MA TRẬN STRIDE REFERENCE]              |
|  - Python Audit, Cisco ACL, Snort, AWS  |  - Giải thích Spoofing, Tampering,...   |
+-----------------------------------------+-----------------------------------------+
| [MA TRẬN TRÁCH NHIỆM RACI]              | [SỔ ĐĂNG KÝ RỦI RO (RISK REGISTER)]     |
+-----------------------------------------------------------------------------------+
```

### 1️⃣ Bảng Thống Kê Tổng Quan (Stats Grid)
* Hiển thị số lượng thiết bị IoT đang kết nối trong toàn trường theo 4 trạng thái: **Tổng Thiết Bị**, **An Toàn** (Màu xanh), **Cảnh Báo** (Màu vàng) và **Nguy Hiểm** (Màu đỏ).
* Số liệu này sẽ tự động cập nhật thời gian thực khi bạn thực hiện các thao tác quét lỗ hổng hoặc cô lập thiết bị.

### 2️⃣ Danh Sách Thiết Bị & Thao Tác Cô Lập Mạng (Device Inventory & VLAN Isolation)
* **Bộ lọc VLAN**: Sử dụng các nút `Tất cả`, `VLAN 10 (Cơ sở)`, `VLAN 20 (Học tập)`, `VLAN 30 (An ninh)` để xem danh sách thiết bị thuộc từng phân vùng mạng.
* **Nút "Cô Lập Mạng" / "Khôi Phục"**: 
  * Khi phát hiện thiết bị bị cảnh báo hoặc xâm nhập, nhấn **Cô Lập Mạng** để ngắt kết nối mạng của thiết bị đó (mô phỏng chuyển sang VLAN Quarantine/Drop rule).
  * Nhấn **Khôi Phục** sau khi đã vá lỗ hổng để đưa thiết bị trở lại mạng hoạt động bình thoại.

### 3️⃣ Trình Quét Lỗ Hổng Bảo Mật Giả Lập (Security Audit Tool)
* Nhấn nút **"Khởi Chạy Quét Mạng"**.
* Thanh tiến trình quét (Progress Bar) sẽ chạy từ `0%` đến `100%`.
* Hệ thống sẽ liệt kê các lỗ hổng an ninh phát hiện được trên các thiết bị IoT (ví dụ: Camera dùng mật khẩu mặc định, Smart Lock truyền dữ liệu chưa mã hóa, cổng Modbus HVAC mở công khai). Each vulnerability details:
  * Mã thiết bị & IP.
  * Phân loại mối đe dọa theo ma trận **STRIDE** & **OWASP IoT Top 10**.
  * Điểm rủi ro **CVSS v3.1** (Critical, Warning).
  * Biện pháp khắc phục khuyến nghị.

### 4️⃣ Mã Lệnh Thực Thi Bảo Mật (Security as Code Modules)
* Cho phép xem các kịch bản mã nguồn cấu hình thực tế được tích hợp trong chính sách:
  * **Python Audit Script**: Kịch bản tự động rà quét port (`python-nmap`).
  * **Cisco IOS Extended ACL**: Mã cấu hình tường lửa phân vùng VLAN 10/20/30.
  * **Mosquitto MQTT ACL**: Cấu hình phân quyền Broker MQTT IoT.
  * **Snort IDS Rule**: Luật phát hiện xâm nhập mạng cho NIDS.
  * **AWS Lambda & Cedar**: Chính sách kiểm soát truy cập Cloud IoT.

### 5️⃣ Nhật Ký Sự Cố & Giả Lập Tấn Công (Live Log Console & Threat Trigger)
* **Console Log**: Hiển thị dòng sự kiện bảo mật theo dạng dòng lệnh thời gian thực (`[INFO]`, `[WARN]`, `[ALERT]`).
* **Nút "Simulate Hack Event"**: Nhấn nút này để kích hoạt giả lập cuộc tấn công mạng ngẫu nhiên (ví dụ: DDoS SYN Flood, Brute-force SSH, RFID Spoofing) và quan sát cách hệ thống cảnh báo và phản ứng.

### 6️⃣ Bảng Kiểm Tuân Thủ Bảo Mật (Compliance Checklist)
* Đánh dấu tick vào các hạng mục tuân thủ (thay đổi mật khẩu mặc định, bật mã hóa TLS, whitelist IP Modbus, phân chia VLAN).
* Điểm **Compliance Score (%)** sẽ tăng/giảm tương ứng với số mục hoàn thành.

### 7️⃣ Ma Trận RACI & Sổ Đăng Ký Rủi Ro (Risk Register)
* **Ma trận RACI**: Tra cứu phân công trách nhiệm bảo mật giữa IT Admin, CISO, Bảo vệ, Giảng viên và Sinh viên. Nhấn các nút lọc vai trò để xem nhiệm vụ tương ứng.
* **Risk Register**: Tra cứu danh sách các mã rủi ro trọng yếu (`RISK-01`, `RISK-02`, `RISK-03`), điểm tác động, lộ trình ưu tiên xử lý và chủ sở hữu rủi ro (Risk Owner).

---

## 🖼️ SƠ ĐỒ KIẾN TRÚC VÀ RANH GIỚI TIN CẬY ĐÍNH KỀM

Các sơ đồ kiến trúc hệ thống phục vụ báo cáo được lưu trữ trực tiếp trong repository:
* 🟢 **Sơ đồ phân vùng VLAN IoT**: [`diagram_vlan_architecture.jpg`](file:///d:/231A011150_VoQuocThang/diagram_vlan_architecture.jpg)
* 🔴 **Sơ đồ Luồng Dữ liệu & Ranh giới Tin cậy (DFD & Trust Boundaries)**: [`diagram_dfd_trust_boundaries.jpg`](file:///d:/231A011150_VoQuocThang/diagram_dfd_trust_boundaries.jpg)

---

## 📑 LƯU Ý VỀ TÀI LIỆU BÁO CÁO HỌC THUẬT

Toàn bộ nội dung báo cáo lý thuyết, cơ sở pháp lý, quy trình thẩm định 8 chương chi tiết của Đồ án được trình bày đầy đủ trong tệp văn bản Word chính thức:
📄 **`231A011150_VoQuocThang_46_baocao.docx`**

---
*© 2026 Võ Quốc Thắng — Trường Đại Học Văn Hiến*
