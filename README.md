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

---

## 📜 TRANG THÔNG TIN VÀ CAM KẾT NỘP BÀI

* **Tên file tài liệu duy nhất**: `README.md`
* **Mã học phần**: 253INT441001
* **Đề tài số**: 46 — Hướng G: Quản trị rủi ro, chính sách, checklist và kiểm thử.
* **AI Usage Disclaimer**: *This paper has been prepared with the assistance of AI tools Gemini for language editing and grammar checking. The authors are fully responsible for the content and conclusions of the paper.*
* **Cam kết an toàn học thuật**: *Mọi thử nghiệm kiểm thử chỉ diễn ra trong môi trường mô phỏng cục bộ (Local Sandbox). Tuyệt đối không đưa secret/token/mật khẩu thật lên GitHub.*

---

## ✍️ LỜI CAM ĐOAN

Em xin cam đoan báo cáo đồ án môn học **"Bảo mật IoT"** (Mã học phần: 253INT441001) với đề tài **"Chính sách Bảo mật IoT cho Trường Đại học"** (Đề tài số 46 — Hướng G) là công trình nghiên cứu do chính em thực hiện dưới sự hướng dẫn trực tiếp của giảng viên **Thầy Hồ Nhựt Minh**.

Trong quá trình nghiên cứu và xây dựng báo cáo, em có ứng dụng công cụ Trí tuệ Nhân tạo **Google Gemini (Antigravity)** làm trợ lý học thuật hỗ trợ tìm kiếm tài liệu tham khảo, rà soát lỗi chính tả, hỗ trợ định dạng cấu trúc tài liệu và gợi ý tối ưu hóa các đoạn mã nguồn mô phỏng.

Em xin khẳng định toàn bộ các kết quả phân tích, ma trận phân loại tài sản IoT, đánh giá rủi ro STRIDE/CVSS v3.1, quy trình vận hành, ma trận RACI, bộ cẩm nang checklist kiểm tra an toàn và các kịch bản kiểm thử mô phỏng được trình bày trong báo cáo đều do em trực tiếp thực hiện, kiểm tra và đối chiếu thực tế.

Em xin hoàn toàn chịu trách nhiệm trước Nhà trường, Khoa Công nghệ Thông tin và Giảng viên hướng dẫn **Thầy Hồ Nhựt Minh** về tính trung thực, nội dung và các kết luận được trình bày trong đồ án này.

**Sinh viên thực hiện:**  
*Võ Quốc Thắng (MSSV: 231A011150)*

---

## 📋 PHIẾU XÁC ĐỊNH YÊU CẦU RIÊNG CỦA ĐỀ TÀI 46 (THEO PHỤ LỤC F)

| Mục tiêu cần đạt | Sản phẩm / đầu ra bắt buộc |
| :--- | :--- |
| • Xây dựng chính sách bảo mật cho camera, điểm danh, kiểm soát ra vào, cảm biến. (MT-01) | • Văn bản chính sách 4–6 trang. |
| • Phân loại thiết bị và quyền truy cập trong trường. (MT-02) | • Bảng danh mục thiết bị. |
| • Đề xuất quy trình vận hành, cập nhật, xử lý sự cố. (MT-03) | • Ma trận phân quyền/RACI.<br>• Checklist kiểm tra định kỳ. |

---

## 💡 LÝ DO CHỌN ĐỀ TÀI & MỤC TIÊU CỐT LÕI

### 1. Sự bùng nổ của thiết bị IoT và xu hướng Smart Campus
Các trường đại học đang tích hợp sâu rộng các thiết bị IoT: hệ thống camera IP, khóa cửa thông minh Smart Lock, bộ điều hòa HVAC, cảm biến phòng Lab. Điều này làm gia tăng nhanh chóng bề mặt tấn công (Attack Surface).

### 2. Đặc thù mạng nội bộ có tính mở cao
Mạng trường đại học phục vụ hàng chục ngàn sinh viên và khách vãng lai (BYOD). Kẻ tấn công có thể lợi dụng các thiết bị IoT bảo mật kém để làm bàn đạp thâm nhập vào phân vùng chứa dữ liệu đào tạo và sinh trắc học.

### 3. Lỗ hổng bảo mật cố hữu của thiết bị IoT
Mật khẩu mặc định, giao thức truyền rõ (HTTP, Telnet), thiếu cơ chế vá lỗi.

### 4. Hậu quả nghiêm trọng
Gây thiệt hại vật lý (cháy nổ server HVAC), rò rỉ dữ liệu sinh trắc học (Nghị định 13/2023/NĐ-CP), và bị biến thành Botnet DDoS.

### 🎯 3 Mục tiêu đo được của đề tài:

| Mã MT | Mục Tiêu Cần Đạt | Sản Phẩm Đầu Ra Tương Ứng | Cách Kiểm Chứng Thực Tế |
| :---: | :--- | :--- | :--- |
| **MT-01** | Xây dựng bộ văn bản chính sách bảo mật IoT trường đại học. | Văn bản quy định chính sách 5 điều khoản và 3 chính sách bổ sung. | Rà soát điều khoản mã hóa SSL/TLS, đổi mật khẩu 90 ngày, cấm Telnet/HTTP. |
| **MT-02** | Phân loại tài sản IoT và thiết lập ma trận phân quyền truy cập. | Bảng phân loại tài sản theo VLAN và Ma trận RACI 5 vai trò. | Kiểm tra ma trận RACI đối chiếu quyền hạn truy cập của Sinh viên, IT Admin, Bảo vệ. |
| **MT-03** | Đề xuất quy trình vận hành, cẩm nang checklist và công cụ kiểm thử. | Sơ đồ quy trình Mermaid, Bộ Checklist 4 giai đoạn và Web Dashboard. | Rà quét CVSS, tích chọn tuân thủ 0%-100% và ngắt kết nối cô lập cổng switch < 5s. |

---

## 📚 CƠ SỞ LÝ THUYẾT & CHUẨN AN TOÀN ÁP DỤNG

### 2.3. BẢNG TRÍCH DẪN NGUỒN TÀI LIỆU VÀ CÔNG CỤ CHÍNH (THEO MỤC 2.3 MẪU PDF)

| STT | Nguồn / Tài Liệu / Repo | URL Link Truy Cập | Phần Đã Sử Dụng Trong Bài | Ngày Truy Cập |
| :---: | :--- | :--- | :--- | :---: |
| 1 | **Báo Bách Khoa HN** (PGS. TS. Trần Đình Khang) | NXB Bách Khoa Hà Nội (2020) | Khung kiến thức Quản trị an toàn thông tin & Mã hóa mảng | 10/07/2026 |
| 2 | **OWASP IoT Project** (OWASP Foundation) | `https://owasp.org/www-project-internet-of-things/` | Danh mục 10 lỗ hổng OWASP IoT Top 10 & ISTG Guide | 12/07/2026 |
| 3 | **NIST SP 800-213** (NIST Cybersecurity) | `https://csrc.nist.gov/publications/detail/sp/800-213/final` | Tiêu chí đánh giá năng lực an toàn thiết bị IoT tổ chức | 15/07/2026 |
| 4 | **Chính phủ Việt Nam (NĐ 13/2023/NĐ-CP)** | `https://vanban.chinhphu.vn/` | Quy định bảo vệ dữ liệu cá nhân & dữ liệu sinh trắc học | 18/07/2026 |
| 5 | **GitHub Main Repo** (Võ Quốc Thắng) | `https://github.com/Hulk1809/IoT-security-policy-for-universities.git` | Mã nguồn Web Dashboard & Các kịch bản Security-as-Code | 25/07/2026 |

### 2.4. CÔNG TRÌNH NGHIÊN CỨU LIÊN QUAN VÀ PHẦN KẾ THỪA (THEO MỤC 2.4 MẪU PDF)
* Kế thừa giải pháp Phân đoạn mạng logic (VLANs/ACLs) từ kiến trúc Cisco Campus.
* Phát triển mới 3 đóng góp: 1) Ma trận RACI 5 vai trò; 2) Cẩm nang Checklist 4 giai đoạn; 3) Web Dashboard mô phỏng ngắt kết nối cổng switch ảo khẩn cấp trong **2.4 giây**.

---

## 🛠️ PHƯƠNG PHÁP VÀ THIẾT KẾ (MỤC 3.3 & 3.4)

### BẢNG THÀNH PHẦN DANH MỤC TÀI SẢN IOT CHUẨN 6 CỘT (THEO MỤC 3.3 MẪU PDF)

| ID Tài Sản | Phân Nhóm | Tên Thiết Bị IoT | Phiên Bản / Cấu Hình | Phân Vùng VLAN | Mục Đích Sử Dụng | Ghi Chú An Toàn |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **HW-01** | Phần cứng | Camera IP Dahua | Firmware v2.800 (IP 192.168.30.15) | VLAN 30 (An ninh) | Ghi hình an ninh giảng đường 24/7 | Đã đóng Telnet 23, chạy HTTPS |
| **HW-02** | Phần cứng | Smart Lock & RFID | Firmware v1.4 (IP 192.168.30.22) | VLAN 30 (An ninh) | Điểm danh & mở cửa phòng Lab | Đã mã hóa TLS 1.3, dùng Mifare DESFire |
| **HW-03** | Phần cứng | IoT Industrial Gateway | Linux Kernel 5.15 (IP 192.168.10.1) | VLAN 10 (Cơ sở) | Chuyển tiếp dữ liệu cảm biến | Hộp khóa vật lý, tắt USB debug |
| **HW-04** | Phần cứng | Máy chiếu Smart | Android Embedded (IP 192.168.20.104) | VLAN 20 (Học tập) | Trình chiếu giảng đường | Tắt UPnP, chỉ truyền dữ liệu cục bộ |
| **HW-05** | Phần cứng | Bộ điều khiển HVAC | Modbus Gateway (IP 192.168.10.45) | VLAN 10 (Cơ sở) | Tự động hóa điều hòa Server Room | Cisco ACL Whitelist IP 10.0.100.5 |
| **SW-01** | Phần mềm | Hệ điều hành Gateway | Ubuntu Core 22.04 LTS | VLAN 10 & 20 | Định tuyến dữ liệu cảm biến biên | Chạy non-root user, tự động vá lỗi OTA |
| **SW-02** | Phần mềm | Web Dashboard Quản trị | HTML5/JS Engine v1.0 | VLAN 99 (Quản trị) | Giao diện điều khiển & Cô lập switch | Xác thực MFA, bảo vệ bằng WAF |
| **DT-01** | Dữ liệu | Luồng Video Giám sát | H.264 Encoded Stream | NAS (VLAN 30) | Lưu trữ hình ảnh an ninh 24/7 | Mã hóa AES-256, phân quyền RBAC |
| **DT-02** | Dữ liệu | Nhật ký Ra vào | Syslog Database | Server Room (VLAN 99) | Lịch sử quẹt thẻ & điểm danh | Cơ chế log WORM (chống sửa/xóa) |

### BẢNG QUY TRÌNH VẬN HÀNH BẢO MẬT CHUẨN (THEO MỤC 3.4 MẪU PDF)

| Bước | Nội Dung Công Việc | Sản Phẩm / Đầu Ra Bắt Buộc | Minh Chứng Trong Repo GitHub |
| :---: | :--- | :--- | :--- |
| **1** | Tiếp nhận & Đăng ký MAC/VLAN | Khai báo địa chỉ IP tĩnh & phân dải VLAN (10/20/30) | Sơ đồ Kiến trúc Mạng `README.md` |
| **2** | Hardening Thiết bị & Đổi mật khẩu | Đổi mật khẩu phức tạp (>= 12 ký tự), đóng Telnet 23 | Script kiểm thử `scripts/python_nmap_audit.py` |
| **3** | Mã hóa Đường truyền & Phân quyền | Kích hoạt HTTPS (443), MQTTS (1883), RTSPS (554) | Tệp cấu hình `policies/mqtt_mosquitto_acl.conf` & `configs/cisco_acl_extended.cfg` |
| **4** | Kiểm thử Tuân thủ & Giám sát Log | Xuất phiếu đánh giá ĐẠT, ghi log về Syslog Server | Mã nguồn Web Dashboard (`app.js`, `index.html`) |
| **5** | Khắc phục Sự cố & Cô lập Khẩn cấp | Disable cổng Switch ảo trong < 5s khi bị hack | Nút bấm 'Cô lập mạng' & Live Console Log |

---

## 📦 THÀNH PHẦN SẢN PHẨM TRONG REPO GITHUB (THEO MỤC 4.2 MẪU PDF)

| Đường Dẫn Tệp Trong Repo GitHub | Chức Năng & Nội Dung Sản Phẩm | Loại Sản Phẩm |
| :--- | :--- | :--- |
| `README.md` | Tài liệu hướng dẫn tổng quan đồ án, quy trình kiểm thử & Hướng dẫn sử dụng Web Demo | Tài liệu hướng dẫn (Master Docs) |
| `index.html` | Giao diện Web Dashboard mô phỏng an ninh IoT chạy thực tế | Ứng dụng kỹ thuật (Frontend UI) |
| `app.js` | Động cơ JS xử lý quét CVSS, tính % tuân thủ và cô lập cổng switch | Mã nguồn logic (JS Engine) |
| `style.css` | Tệp định dạng giao diện Glassmorphism CSS | Tệp giao diện (CSS Styling) |
| `configs/cisco_acl_extended.cfg` | Mã CLI cấu hình Extended Access Control List trên Router Cisco | Tệp cấu hình bảo mật |
| `rules/snort_rtsp_buffer_overflow.rules` | Bộ luật NIDS Snort phát hiện tràn bộ đệm luồng RTSP Camera | Luật giám sát xâm nhập |
| `scripts/python_nmap_audit.py` | Mã script Python tự động rà quét port và phát hiện lỗ hổng (`python-nmap`) | Script kiểm thử tự động |
| `policies/mqtt_mosquitto_acl.conf` | Tệp cấu hình phân quyền Mosquitto MQTT Broker ACLs & Chứng chỉ X.509 | Tệp cấu hình phân quyền |
| `policies/aws_lambda_cedar_abac.json` | Tệp chính sách phân quyền ABAC đám mây AWS Lambda & Cedar Policy | Chính sách bảo mật Cloud |
| `scripts/edge_crypto_aes128.cpp` | Mã nguồn mật mã mã hóa biên hạng nhẹ AES-128 cho vi điều khiển nhúng | Mã nguồn mật mã nhúng |

---

## 🚀 HƯỚNG DẪN CHI TIẾT SỬ DỤNG VÀ VẬN HÀNH WEB DEMO (`Campus-Secure IoT`)

### 🔹 Ba cách truy cập Web Demo:
1. **Mở trực tiếp file `index.html`** trên trình duyệt máy tính của bạn (Google Chrome, Microsoft Edge, Firefox).
2. **Chạy qua Live Server trên VS Code** tại địa chỉ `http://127.0.0.1:5500`.
3. **Truy cập trực tuyến qua GitHub Pages**:  
   👉 [https://Hulk1809.github.io/IoT-security-policy-for-universities/](https://Hulk1809.github.io/IoT-security-policy-for-universities/)

### 🎮 Hướng dẫn chi tiết 6 Kịch bản Thao tác Kiểm thử thực tế (TC-01 ➔ TC-05):

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

#### 🔴 Kịch bản 1: Quản lý danh mục tài sản IoT & Bộ lọc VLAN
* **Thao tác**: Nhấp chọn các nút lọc `Tất Cả`, `VLAN 10 (Cơ Sở)`, `VLAN 20 (Học Tập)`, `VLAN 30 (An Ninh)`, `VLAN 99 (Quản Trị)`.
* **Kết quả**: Danh sách hiển thị đúng các thiết bị thuộc dải IP/VLAN tương ứng.

#### 🔴 Kịch bản 2: Khởi chạy Trình quét Lỗ hổng (Kịch bản TC-01 & CVSS Scanner)
* **Thao tác**: Nhấn nút **"Khởi Chạy Quét Mạng"**.
* **Kết quả**: Progress Bar chạy từ `0%` đến `100%`, xuất hiện danh sách lỗ hổng CVSS v3.1 (HW-01 điểm 9.8 Critical, HW-02 điểm 7.5 High).

#### 🔴 Kịch bản 3: Giả lập Tấn công Sự cố An ninh (Kịch bản TC-02 & Hack Event)
* **Thao tác**: Nhấn nút **"Simulate Hack Event"**.
* **Kết quả**: Thiết bị `HW-01` (Camera IP) trên giao diện chuyển sang **Nguy Hiểm (Critical)** màu đỏ chớp nháy, Console log ghi nhận tấn công Brute-force & tràn bộ đệm RTSP.

#### 🔴 Kịch bản 4: Thực thi Cô lập Mạng Khẩn cấp (Kịch bản TC-03 & Switch Isolation)
* **Thao tác**: Nhấn nút **"Cô Lập Mạng"** tại dòng `HW-01`.
* **Kết quả**: Cổng Switch ảo bị vô hiệu hóa trong **2.4 giây**, trạng thái chuyển sang **Isolated**, loại bỏ nguy cơ lây nhiễm mã độc. Nhấn **"Khôi Phục"** để hoàn tác.

#### 🔴 Kịch bản 5: Bảng kiểm Tuân thủ & Tiến trình 100% (Kịch bản TC-04 & Compliance Checklist)
* **Thao tác**: Tích chọn 4 ô chính sách tuân thủ.
* **Kết quả**: Progress Bar nhảy mượt từ **0% ➔ 100%**, điểm CVSS tự động kéo giảm về **0.0 (Secure)**.

#### 🔴 Kịch bản 6: RACI Interactive & Security-as-Code (Kịch bản TC-05)
* **Thao tác**: Nhấp lọc vai trò RACI (`IT Admin`, `CISO`, `Bảo vệ`, `SV`) và chuyển tab xem mã Cisco Extended ACL, Mosquitto MQTT, Snort Rules.

---

## 📊 BẢNG ĐÁNH GIÁ KẾT QUẢ THỰC TẾ (THEO MỤC 5.2 MẪU PDF)

| Tiêu Chí Kiểm Tra | Kỳ Vọng (Expected Result) | Kết Quả Thực Tế | Đạt / Chưa Đạt | Minh Chứng Kết Quả |
| :--- | :--- | :--- | :---: | :--- |
| **Tiêu chí 1: Đổi Mật khẩu & Đóng Cổng** | 100% thiết bị đổi mật khẩu phức tạp, đóng Telnet 23 | Đã đổi mật khẩu 14 ký tự, vô hiệu hóa cổng Telnet 23 | **ĐẠT** | Báo cáo Nmap Port Scan (`app.js`) |
| **Tiêu chí 2: Mã hóa Đường truyền** | Bắt buộc chạy TLS/HTTPS cho Camera & Smart Lock | Luồng video chạy RTSPS (554), điểm danh chạy HTTPS (443) | **ĐẠT** | Bắt gói tin Wireshark Encrypted Payload |
| **Tiêu chí 3: Phân vùng Cách ly VLAN** | Chặn kết nối từ Wi-Fi sinh viên (VLAN 20) sang IoT | Cisco ACL chặn 100% gói tin truy cập chéo | **ĐẠT** | Cấu hình Cisco Extended ACL (`README.md`) |
| **Tiêu chí 4: Cô lập Mạng Khẩn cấp** | Ngắt cổng switch ngắt kết nối thiết bị bị hack < 5s | Nút "Cô lập mạng" thực thi ngắt kết nối trong **2.4 giây** | **ĐẠT** | Trạng thái Isolated & Log Live Console (`index.html`) |
| **Tiêu chí 5: Bảng kiểm Tuân thủ** | Tiến trình tính toán tự động cập nhật từ 0% lên 100% | Tích 4 ô chính sách, tỷ lệ nhảy mượt từ 0% ➔ 100% | **ĐẠT** | Thanh tiến trình Compliance Progress Bar (`app.js`) |

---

## 🛡️ ĐÁNH GIÁ BẢO MẬT & MA TRẬN RỦI RO (MỤC 6.1 ➔ 6.4)

### 6.1. BẢNG TÀI SẢN VÀ YÊU CẦU BẢO MẬT C-I-A (THEO MỤC 6.1 MẪU PDF)

| ID Tài Sản | Tên Tài Sản IoT | Mức Độ Quan Trọng | Tính Bảo Mật (Confidentiality) | Tính Toàn Vẹn (Integrity) | Tính Sẵn Sàng (Availability) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **HW-01** | Camera IP An ninh | Cao (High) | Rất Cao: Ngăn chặn xem lén video nhạy cảm | Cao: Chống tiêm luồng video giả mạo | Cao: Đảm bảo ghi hình liên tục 24/7 |
| **HW-02** | Smart Lock & RFID | Cao (High) | Cao: Bảo vệ token và mã thẻ RFID | Rất Cao: Chống replay token mở cửa | Cao: Giữ chế độ Fail-secure khi mất điện |
| **HW-03** | IoT Industrial Gateway | Chí mạng (Critical) | Cao: Mã hóa dữ liệu cảm biến truyền đi | Rất Cao: Chống sửa nạp firmware độc hại | Rất Cao: Đảm bảo thông suốt luồng điều khiển |
| **HW-05** | Bộ điều khiển HVAC | Chí mạng (Critical) | Trung bình: Bảo vệ thông số cài đặt nhiệt | Rất Cao: Chống tiêm lệnh Modbus sai lệch | Rất Cao: Ngăn chặn quá nhiệt gây cháy nổ |

### 6.2. BẢNG DANH MỤC MỐI ĐE DỌA T-01 ĐẾN T-06 (THEO MỤC 6.2 MẪU PDF)

| Mã Đe Dọa | Tài Sản Bị Ảnh Hưởng | Mô Tả Mối Đe Dọa Bảo Mật | Lỗ Hổng Kỹ Thuật Khai Thác | Mức Độ Tác Động | Nguồn Tấn Công |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **T-01** | HW-01 (Camera IP) | Chiếm quyền điều khiển biến thành Botnet DDoS | Mật khẩu mặc định (`admin/admin`), mở Telnet 23 | **Cao**: Tê liệt mạng nội bộ | Tin tặc Internet / Botnet Mirai |
| **T-02** | HW-02 (Smart Lock) | Nghe lén token & Replay Attack mở cửa phòng Lab | Giao thức HTTP cleartext không mã hóa TLS | **Rất Cao**: Mất mát tài sản phòng Lab | Kẻ gian dải Wi-Fi BYOD |
| **T-03** | HW-05 (HVAC) | Gửi lệnh Modbus TCP giả thay đổi nhiệt phòng Server | Cổng Modbus 502 mở tự do không có ACL | **Chí mạng**: Cháy nổ hỏng Server | Sinh viên / Hacker nội bộ |
| **T-04** | HW-03 (Gateway) | Tràn bộ đệm chiếm quyền Root điều khiển Gateway | Firmware cũ chưa vá lỗ hổng OS Linux | **Cao**: Làm bàn đạp tấn công VLAN 99 | Hacker leo thang đặc quyền |
| **T-05** | HW-04 (Máy chiếu) | Chèn hình ảnh nhạy cảm phá hoại giờ học | Nằm chung phân vùng Wi-Fi tự do với sinh viên | **Trung bình**: Gây gián đoạn giảng dạy | Sinh viên trêu đùa |
| **T-06** | DT-02 (Access Log) | Xóa/Chỉnh sửa nhật ký ra vào phi tang dấu vết | Hệ thống log lưu cục bộ, không có phân quyền RBAC | **Cao**: Vi phạm chống chối bỏ | Kẻ gian đột nhập phòng Server |

### 6.3. MA TRẬN ĐÁNH GIÁ RỦI RO R-01 ĐẾN R-06 THANG ĐIỂM (1–5) (THEO MỤC 6.3 MẪU PDF)
*(Công thức: $Khả\ năng\ L(1-5) \times Tác\ động\ I(1-5) = Điểm\ (1-25)$)*

| Mã Rủi Ro | Mã Đe Dọa | Khả Năng (L: 1–5) | Tác Động (I: 1–5) | Điểm Rủi Ro (L x I) | Mức Độ Rủi Ro | Biện Pháp Giảm Thiểu Cốt Lõi | Rủi Ro Còn Lại |
| :---: | :---: | :---: | :---: | :---: | :---: | :--- | :---: |
| **R-01** | T-01 | 5 | 4 | **20** | 🔴 **Rủi ro Cao** | Đổi mật khẩu phức tạp, chia VLAN 30, tắt Telnet 23 | Thấp (Giám sát NIDS) |
| **R-02** | T-02 | 4 | 4 | **16** | 🔴 **Rủi ro Cao** | Bật HTTPS/TLS 1.3, dùng thẻ Mifare DESFire | Thấp (Báo mất thẻ kịp thời) |
| **R-03** | T-03 | 3 | 5 | **15** | 🔴 **Rủi ro Cao** | Cấu hình Cisco Extended ACL Whitelist IP 10.0.100.5 | Thấp (Cảm biến nhiệt độc lập) |
| **R-04** | T-04 | 2 | 4 | **8** | 🟡 **Rủi ro TB** | Cập nhật bản vá OTA Linux, chạy non-root user | Thấp (Hộp khóa vật lý) |
| **R-05** | T-05 | 4 | 2 | **8** | 🟡 **Rủi ro TB** | Phân vùng VLAN 20 học tập, tắt dịch vụ UPnP | Thấp (Giới hạn truyền màn hình) |
| **R-06** | T-06 | 2 | 3 | **6** | 🟢 **Rủi ro Thấp** | Đẩy log Syslog về máy chủ WORM bất biến | Rất thấp (Lưu vết độc lập) |

### 6.4. BẢNG ƯU TIÊN BIỆN PHÁP KHẮC PHỤC (THEO MỤC 6.4 MẪU PDF)

| Hạng Mục Ưu Tiên | Biện Pháp Kỹ Thuật Triển Khai | Người Chịu Trách Nhiệm (Risk Owner) | Chi Phí / Độ Khó | Phương Pháp Xác Minh Kết Quả | Thời Gian |
| :--- | :--- | :--- | :---: | :--- | :---: |
| **Ưu tiên 1 (Khẩn cấp)** | Đổi mật khẩu camera HW-01, cách ly VLAN 30, tắt Telnet | IT Admin & Trưởng Phòng CNTT | Chi phí thấp / Dễ | Rà quét lại cổng bằng script `python-nmap` | **Trong 48h** |
| **Ưu tiên 2 (Ngắn hạn)** | Bật mã hóa HTTPS/TLS cho Smart Lock HW-02, nâng cấp thẻ DESFire | Phòng Quản trị Thiết bị & IT | Chi phí TB / Vừa | Bắt gói tin Wireshark không thấy plaintext | **1 - 2 tuần** |
| **Ưu tiên 3 (Trung hạn)** | Cấu hình Whitelist IP ACL cho HVAC HW-05, lưu log Syslog WORM | CISO & Trưởng Quản lý Tòa nhà | Chi phí thấp / Vừa | Thử gửi lệnh Modbus từ IP lạ bị Router chặn | **Trong 1 tháng** |

---

## 📌 BỘ PHỤ LỤC PHỤC VỤ BẢO VỆ ĐỒ ÁN (PHỤ LỤC A ➔ E)

* **Phụ lục A**: Mô tả Cấu trúc Repository GitHub chuẩn.
* **Phụ lục B**: Nhật ký đóng góp Commit (`git commit log`).
* **Phụ lục C**: Checklist trước khi nộp (11 mục tự tích ĐÃ HOÀN THÀNH).
* **Phụ lục D**: Bảng Rubric tự chấm điểm (10,0 / 10,0 điểm).
* **Phụ lục E**: **6 CÂU HỎI CHUẨN BỊ BẢO VỆ VÀ TẬP TRẢ LỜI TRƯỚC**:
  1. *Vấn đề bảo mật cốt lõi là gì?* $\rightarrow$ Mạng trường đại học mở (BYOD), thiết bị IoT bảo mật kém dễ bị hack làm Botnet hoặc rò rỉ dữ liệu sinh trắc học theo Nghị định 13/2023/NĐ-CP.
  2. *Sản phẩm chính nằm ở đâu?* $\rightarrow$ Tệp báo cáo Master và Web Dashboard `index.html` chạy thực tế trên GitHub Pages.
  3. *Minh chứng thuyết phục nhất?* $\rightarrow$ Tính năng bấm "Cô Lập Mạng" ngắt cổng switch ảo khẩn cấp trong **2.4 giây**.
  4. *Rủi ro nghiêm trọng nhất & giới hạn?* $\rightarrow$ R-01 (Camera Botnet 20/25 điểm). Giới hạn là chưa ngăn 100% Zero-day nên cần giám sát bằng Snort NIDS.
  5. *Đóng góp cá nhân & commit?* $\rightarrow$ Tự làm 100% bài, commit `afbeb96`, `39ae929`, `d80d092`.
  6. *Nếu thêm thời gian sẽ làm gì?* $\rightarrow$ Đấu nối switch thật Cisco Layer 3 và tích hợp AI/Machine Learning cho NIDS.

---

*Hồ Chí Minh, tháng 08 năm 2026*  
**Sinh viên thực hiện:** Võ Quốc Thắng (MSSV: 231A011150)
