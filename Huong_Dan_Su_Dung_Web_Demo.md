# HƯỚNG DẪN SỬ DỤNG WEB DEMO GIÁM SÁT & CÔ LẬP AN NINH IoT TRƯỜNG ĐẠI HỌC

> **Đồ án môn học**: Bảo mật IoT (Mã HP: 253INT441001)  
> **Đề tài 46**: Chính sách Bảo mật IoT cho Trường Đại học (Hướng G)  
> **Giảng viên hướng dẫn**: Thầy Hồ Nhựt Minh  
> **Sinh viên thực hiện**: Võ Quốc Thắng (MSSV: 231A011150)  
> **Trường**: Đại học Văn Hiến — Khoa Công nghệ Thông tin  
> **Link Repository GitHub**: [https://github.com/Hulk1809/IoT-security-policy-for-universities](https://github.com/Hulk1809/IoT-security-policy-for-universities)  
> **Link Web Demo Trực Tuyến (GitHub Pages)**: [https://Hulk1809.github.io/IoT-security-policy-for-universities/](https://Hulk1809.github.io/IoT-security-policy-for-universities/)

---

## 📌 1. TỔNG QUAN VỀ ỨNG DỤNG WEB DEMO (`Campus-Secure IoT`)

Ứng dụng Web Demo **`Campus-Secure IoT Dashboard`** là công cụ mô phỏng kỹ thuật trực quan giúp kiểm chứng 100% các chính sách bảo mật, quy trình kiểm thử (TC-01 đến TC-05), ma trận phân quyền RACI và cơ chế cô lập mạng khẩn cấp được đề xuất trong đồ án.

### 🛠️ Kiến trúc Công nghệ:
* **Frontend Core**: HTML5 Semantic Structure, CSS3 Vanilla (Thiết kế Modern Glassmorphism, Dark Mode, Responsive Layout).
* **Logic Engine**: JavaScript Native ES6+ (Chạy 100% trên trình duyệt Client-side, không phụ thuộc Server Node.js/Backend).
* **Typography & UI**: Google Fonts (`Inter`, `JetBrains Mono`), FontAwesome Icons.
* **Tốc độ thực thi**: Đáp ứng thao tác cô lập cổng Switch khẩn cấp chỉ trong **2.4 giây**.

---

## 💻 2. BA CÁCH TRUY CẬP VÀ KHỞI CHẠY WEB DEMO

Bạn có thể chạy ứng dụng Web Demo bằng 1 trong 3 cách cực kỳ đơn giản dưới đây:

### 🔹 Cách 1: Mở trực tiếp file `index.html` (Nhanh nhất & Không cần Internet)
1. Tải toàn bộ thư mục kho lưu trữ (Repo) về máy tính.
2. Tìm đến file **`index.html`** trong thư mục dự án.
3. **Click đúp chuột** vào file `index.html` (hoặc nhấp chuột phải chọn *Open with* ➔ chọn trình duyệt **Google Chrome**, **Microsoft Edge**, **Mozilla Firefox**, **Brave**).

### 🔹 Cách 2: Chạy qua Extension Live Server trong Visual Studio Code
1. Mở thư mục dự án bằng trình soạn thảo **VS Code**.
2. Mở file `index.html`.
3. Nhấp chuột phải chọn **Open with Live Server** (hoặc bấm tổ hợp phím `Alt + L, Alt + O`). Trình duyệt sẽ khởi chạy tại địa chỉ local: `http://127.0.0.1:5500`.

### 🔹 Cách 3: Truy cập trực tuyến qua GitHub Pages (Không cần tải code)
* Mở trình duyệt và truy cập liên kết công khai chính thức:  
  👉 [https://Hulk1809.github.io/IoT-security-policy-for-universities/](https://Hulk1809.github.io/IoT-security-policy-for-universities/)

---

## 🗺️ 3. SƠ ĐỒ GIAO DIỆN & BỐ TRÍ KHU VỰC CHỨC NĂNG

Giao diện Web Demo được tổ chức thành 7 khu vực chính tương ứng với các chương trong báo cáo đồ án:

```
+-----------------------------------------------------------------------------------------+
|                        CAMPUS-SECURE IoT MONITORING DASHBOARD                           |
+-----------------------------------------------------------------------------------------+
| [STATS GRID]  Tổng thiết bị (5) | An toàn (Secure) | Cảnh báo (Warning) | Nguy hiểm (Critical) |
+--------------------------------------------+--------------------------------------------+
| [QUẢN LÝ THIẾT BỊ & PHÂN VÙNG VLAN]        | [NHẬT KÝ SỰ CỐ & SIMULATE HACK EVENT]      |
|  - Lọc VLAN 10, VLAN 20, VLAN 30, VLAN 99  |  - Ghi log thời gian thực (Console Log)   |
|  - Nút "Cô Lập Mạng" & "Khôi Phục"         |  - Nút giả lập tấn công Brute-force/RTSP   |
+--------------------------------------------+--------------------------------------------+
| [TRÌNH QUÉT LỖ HỔNG (CVSS SCANNER)]        | [BẢNG KIỂM TUÂN THỦ (COMPLIANCE CHECKLIST)]|
|  - Nút "Khởi Chạy Quét Mạng"               |  - 4 ô Checkbox tuân thủ chính sách        |
|  - Điểm CVSS 9.8, ma trận STRIDE/OWASP     |  - Thanh tiến trình mượt 0% ➔ 100%         |
+--------------------------------------------+--------------------------------------------+
| [SECURITY AS CODE MODULES]                 | [MA TRẬN STRIDE THAM CHIẾU]                |
|  - Python Audit, Cisco ACL, Snort, AWS     |  - Phân loại Spoofing, Tampering,...       |
+--------------------------------------------+--------------------------------------------+
| [MA TRẬN PHÂN QUYỀN RACI INTERACTIVE]      | [SỔ ĐĂNG KÝ RỦI RO (RISK REGISTER 1-5)]    |
|  - Lọc theo IT Admin, CISO, Bảo vệ, SV     |  - Thang điểm R-01..R-06 từ 1 đến 25 điểm  |
+-----------------------------------------------------------------------------------------+
```

---

## ⚙️ 4. HƯỚNG DẪN CHI TIẾT CÁCH VẬN HÀNH VÀ CÁC KỊCH BẢN THAO TÁC (TC-01 ➔ TC-05)

### 🔴 Kịch bản 1: Quản lý danh mục tài sản IoT & Bộ lọc VLAN (Mục 3.1 & Bảng 3.3)
* **Thao tác**: Nhấp chọn các nút lọc `Tất Cả`, `VLAN 10 (Cơ Sở)`, `VLAN 20 (Học Tập)`, `VLAN 30 (An Ninh)`, `VLAN 99 (Quản Trị)`.
* **Kết quả quan sát**:
  * Danh sách thiết bị tự động lọc hiển thị đúng các thiết bị thuộc phân vùng mạng tương ứng.
  * Thiết bị hiển thị rõ Địa chỉ IP, MAC, Phiên bản Firmware, Trạng thái an toàn C-I-A và Cổng kết nối.

### 🔴 Kịch bản 2: Khởi chạy Trình quét Lỗ hổng Bảo mật (Kịch bản TC-01 & CVSS v3.1 Scanner)
* **Thao tác**: Cuộn xuống khu vực *Trình Quét Lỗ Hổng Bảo Mật*, nhấn nút **"Khởi Chạy Quét Mạng"**.
* **Kết quả quan sát**:
  1. Thanh tiến trình (Scan Progress) chạy từ `0%` đến `100%`.
  2. Bảng kết quả xuất hiện danh sách các lỗ hổng an ninh được phát hiện trên thiết bị:
     * **HW-01 (Camera IP)**: Mật khẩu mặc định (`admin/admin`), mở Telnet cổng 23 $\rightarrow$ **Điểm CVSS: 9.8 (Critical)**, thuộc mã **OWASP I1 (Weak Passwords)**.
     * **HW-02 (Smart Lock)**: Giao thức mở cửa HTTP không mã hóa $\rightarrow$ **Điểm CVSS: 7.5 (High)**.
     * **HW-05 (HVAC)**: Cổng Modbus 502 mở công khai không có ACL $\rightarrow$ **Điểm CVSS: 6.5 (Medium)**.
  3. Live Console bên cạnh ghi nhận nhật ký quét mạng chi tiết.

### 🔴 Kịch bản 3: Giả lập Sự cố Tấn công An ninh (Kịch bản TC-02 & Brute-force Simulation)
* **Thao tác**: Tại thẻ *Nhật Ký Sự Cố Thời Gian Thực*, nhấn nút **"Simulate Hack Event"**.
* **Kết quả quan sát**:
  1. Thiết bị `HW-01` (Camera IP) trên danh sách lập tức chuyển sang màu đỏ chớp nháy với trạng thái **Nguy Hiểm (Critical)**.
  2. Live Console hiển thị liên tiếp các dòng thông báo màu đỏ cảnh báo phát hiện cuộc tấn công Brute-force từ IP lạ `192.168.100.80` và hành vi tràn bộ đệm RTSP stream.
  3. Thống kê tổng quan chỉ số **Nguy Hiểm** tăng lên.

### 🔴 Kịch bản 4: Thực thi Cô lập Mạng Khẩn cấp (Kịch bản TC-03 & Emergency Isolation)
* **Thao tác**: Tìm đến dòng thiết bị `HW-01` (Camera IP) bị tấn công, nhấn nút **"Cô Lập Mạng"**.
* **Kết quả quan sát**:
  1. Cổng Switch ảo bị vô hiệu hóa (Disable port) chỉ trong **2.4 giây**.
  2. Trạng thái thiết bị `HW-01` chuyển sang **Isolated (Đã cô lập)** màu xám xám, loại bỏ hoàn toàn khả năng lây nhiễm mã độc sang các phân vùng VLAN khác.
  3. Live Console ghi nhận log: `[EMERGENCY] Đã vô hiệu hóa cổng Switch cô lập thành công HW-01 trong 2.4 giây.`.
  4. Sau khi kiểm tra an toàn, nhấn nút **"Khôi Phục"** để đưa thiết bị trở lại mạng hoạt động bình thường.

### 🔴 Kịch bản 5: Bảng kiểm Tuân thủ & Động cơ Tính % Tiến trình (Kịch bản TC-04 & Compliance Checklist)
* **Thao tác**: Cuộn đến thẻ *Bảng Kiểm Tuân Thủ Chính Sách Bảo Mật*, lần lượt tích chọn 4 ô chính sách:
  * ☑️ *Quy định 1: Đã đổi mật khẩu mặc định 100% thiết bị (>= 12 ký tự).*
  * ☑️ *Quy định 2: Bắt buộc mã hóa đường truyền SSL/TLS (HTTPS, RTSPS).*
  * ☑️ *Quy định 3: Cách ly phân vùng VLAN & Cấu hình Cisco Extended ACL.*
  * ☑️ *Quy định 4: Bật tính năng ngắt kết nối cô lập cổng Switch khẩn cấp.*
* **Kết quả quan sát**:
  1. Thanh tiến trình **Compliance Progress Bar** tăng mượt mà từ **0% ➔ 25% ➔ 50% ➔ 75% ➔ 100%**.
  2. Điểm rủi ro lỗ hổng CVSS tự động kéo giảm xuống **0.0 (Secure)**.
  3. Thống kê chỉ số **An Toàn** nhảy lên 100%.

### 🔴 Kịch bản 6: Ma trận RACI Interactive & Mã Lệnh Security-as-Code (Kịch bản TC-05)
* **Thao tác 1 (Ma trận RACI)**: Nhấn thử các nút lọc vai trò `IT Admin`, `CISO`, `Bảo Vệ`, `Giảng Viên / Sinh Viên`. Giao diện sẽ bôi sáng các ô phân quyền trách nhiệm **R (Responsible)**, **A (Accountable)**, **C (Consulted)**, **I (Informed)** tương ứng.
* **Thao tác 2 (Security-as-Code)**: Chuyển đổi các tab trong khung mã lệnh để xem các kịch bản cấu hình thực tế:
  * Tab **Python Audit**: Mã script rà quét port tự động (`python-nmap`).
  * Tab **Cisco ACL**: Mã CLI cấu hình Extended ACL trên Router Cisco.
  * Tab **Mosquitto MQTT**: Cấu hình phân quyền X.509 Certificate & ACLs cho IoT Broker.
  * Tab **Snort NIDS**: Bộ luật phát hiện tấn công tràn bộ đệm luồng RTSP Camera.
  * Tab **AWS Lambda/Cedar**: Chính sách phân quyền đám mây ABAC.

---

## 📋 5. BẢNG ĐỐI CHIẾU KỊCH BẢN KIỂM THỬ VÀ THAO TÁC TRÊN DEMO

| Mã TC | Kịch Bản Kiểm Thử | Thao Tác Thực Hiện Trên Demo | Kết Quả Đạt Được | Minh Chứng Trực Quan |
| :---: | :--- | :--- | :--- | :--- |
| **TC-01** | Rà quét cổng mở & CVSS | Nhấn nút **"Khởi Chạy Quét Mạng"** | Xuất điểm CVSS 9.8 (Critical) | Khung CVSS Scanner (`app.js`) |
| **TC-02** | Mô phỏng Hack Brute-force | Nhấn nút **"Simulate Hack Event"** | Console hiện dòng chữ đỏ cảnh báo | Live Console Log (`index.html`) |
| **TC-03** | Cô lập Mạng Khẩn cấp | Nhấn nút **"Cô Lập Mạng"** tại HW-01 | Ngắt cổng switch ảo trong 2.4s | Log cô lập & Trạng thái Isolated |
| **TC-04** | Kiểm tra Tuân thủ | Tích chọn 4 checkbox chính sách | Compliance Progress đạt 100% | Thanh tiến trình Progress Bar 100% |
| **TC-05** | Chặn kết nối chéo VLAN | Chuyển tab mã **Cisco ACL** | Hiển thị cấu hình Extended ACL | Khung Security-as-Code Tabs |

---

## 🏆 6. KẾT LUẬN VÀ GIÁ TRỊ THỰC TIỄN CỦA WEB DEMO

Ứng dụng Web Demo **`Campus-Secure IoT Dashboard`** đã chứng minh tính thực tiễn cao của đồ án:
1. Trực quan hóa toàn bộ văn bản chính sách bảo mật IoT khô khan thành một hệ thống giám sát sinh động.
2. Giúp Ban Giám hiệu, CISO và Đội ngũ IT của nhà trường có cái nhìn tổng thể về bề mặt tấn công IoT.
3. Cung cấp công cụ phản ứng nhanh cho phép **cô lập thiết bị bị hack trong 2.4 giây**, ngăn chặn nguy cơ lây nhiễm mã độc toàn trường.

---

*Hồ Chí Minh, tháng 08 năm 2026*  
**Sinh viên thực hiện:** Võ Quốc Thắng (MSSV: 231A011150)
