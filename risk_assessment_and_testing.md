# Đánh Giá Rủi Ro, Ưu Tiên Xử Lý & Minh Chứng Kiểm Tra

Tài liệu này cung cấp phương pháp đánh giá rủi ro định lượng, lập kế hoạch ưu tiên khắc phục sự cố, và kịch bản chạy thử nghiệm thực tế (kiểm thử bảo mật) bằng công cụ Web Dashboard để làm minh chứng báo cáo giảng viên.

---

## 1. Khung Đánh Giá Rủi Ro Định Lượng (Risk Assessment Framework)

Mức độ rủi ro của từng mối đe dọa đối với tài sản IoT được tính toán dựa trên tích số giữa **Khả năng xảy ra** (Likelihood) và **Mức độ tác động** (Impact):

$$\text{Mức độ Rủi ro (Risk Score)} = \text{Khả năng xảy ra (L)} \times \text{Mức độ tác động (I)}$$

### Tiêu chí phân cấp giá trị (Thang điểm 1 - 3):
*   **Khả năng xảy ra (L)**: 1 (Thấp - Khó xảy ra), 2 (Trung bình - Có thể xảy ra), 3 (Cao - Rất dễ xảy ra nếu không có cấu hình bảo vệ).
*   **Mức độ tác động (I)**: 1 (Thấp - Ảnh hưởng cục bộ, không mất mát dữ liệu), 2 (Trung bình - Ảnh hưởng một phân vùng mạng, rò rỉ dữ liệu thường), 3 (Cao - Ảnh hưởng toàn mạng, hỏng hóc thiết bị vật lý, rò rỉ dữ liệu chí mạng).

### Ma trận xếp hạng rủi ro (Risk Matrix):
*   🔴 **Điểm 7 - 9**: **Rủi ro Cao (High)** $\rightarrow$ Bắt buộc phải ưu tiên xử lý ngay lập tức để bảo vệ hệ thống.
*   🟡 **Điểm 4 - 6**: **Rủi ro Trung bình (Medium)** $\rightarrow$ Cần lập kế hoạch khắc phục trong thời gian ngắn/trung hạn.
*   🟢 **Điểm 1 - 3**: **Rủi ro Thấp (Low)** $\rightarrow$ Chấp nhận rủi ro hoặc theo dõi định kỳ.

---

## 2. Bảng Đánh Giá Rủi Ro Tài Sản IoT Chi Tiết

Dưới đây là bảng đánh giá rủi ro cho các thiết bị IoT chính trong trường học khi chưa áp dụng chính sách bảo mật:

| ID Tài Sản | Tên Thiết Bị | Mối Đe Dọa Chính | Khả Năng (L) | Tác Động (I) | Điểm Rủi Ro (L x I) | Xếp Hạng |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| **HW-01** | Hệ thống Camera IP | Bị dò quét mật khẩu mặc định, chiếm quyền điều khiển luồng video an ninh. | 3 | 3 | **9** | 🔴 **Rủi ro Cao** |
| **HW-02** | Khóa cửa thông minh RFID | Sao chép thẻ từ RFID tần số thấp hoặc replay token mở cửa để đột nhập phòng Server/Lab. | 2 | 3 | **6** | 🟡 **Rủi ro Trung bình** |
| **HW-05** | Bộ điều khiển HVAC | Tấn công gửi lệnh Modbus TCP giả mạo thay đổi nhiệt độ phòng máy chủ gây cháy nổ/hỏng phần cứng. | 2 | 3 | **6** | 🟡 **Rủi ro Trung bình** |
| **HW-03** | IoT Gateway | Khai thác lỗ hổng OS nhúng để biến Gateway thành bàn đạp tấn công sang mạng VLAN quản trị. | 1 | 3 | **3** | 🟢 **Rủi ro Thấp** |
| **HW-04** | Máy chiếu giảng đường | Chiếm quyền điều khiển mạng để trình chiếu nội dung nhạy cảm, phá hoại buổi học. | 2 | 1 | **2** | 🟢 **Rủi ro Thấp** |

---

## 3. Kế Hoạch Ưu Tiên Xử Lý (Treatment & Prioritization Plan)

Dựa trên bảng điểm rủi ro trên, trường đại học áp dụng lịch trình ưu tiên xử lý như sau:

```
  🔴 ƯU TIÊN 1: Khẩn Cấp (48h)  -->  🟡 ƯU TIÊN 2: Ngắn Hạn (1-2 tuần)  -->  🟢 ƯU TIÊN 3: Trung Hạn (1 tháng)
  - Đổi mật khẩu camera HW-01        - Chuyển Smart Lock sang HTTPS       - Cài whitelist IP Modbus cho HVAC
  - Cách ly camera vào VLAN 30       - Nâng cấp thẻ từ DESFire mã hóa    - Cập nhật bản vá Gateway Linux
  - Vô hiệu hóa Telnet/FTP           - Tích hợp ghi hình chéo đầu cửa    - Cấu hình xác thực 802.1X mạng Wi-Fi
```

1.  **Ưu tiên 1 (Khẩn cấp - Trong vòng 48 giờ)**:
    *   Thực hiện đổi mật khẩu mặc định của toàn bộ hệ thống Camera IP (**HW-01**).
    *   Tách biệt hoàn toàn Camera IP sang phân vùng **VLAN 30 (An ninh)** và chặn truy cập từ mạng Wi-Fi sinh viên/khách.
    *   Vô hiệu hóa cổng Telnet (23) trên các thiết bị.
2.  **Ưu tiên 2 (Ngắn hạn - Trong vòng 1 - 2 tuần)**:
    *   Cấu hình truyền thông HTTPS/TLS cho Smart Lock (**HW-02**).
    *   Nâng cấp thẻ từ của cán bộ giảng viên từ RFID thường sang thẻ mã hóa **Mifare DESFire EV2** để chống sao chép thẻ vật lý.
3.  **Ưu tiên 3 (Trung hạn - Trong vòng 1 tháng)**:
    *   Cấu hình danh sách trắng (Whitelist IP) tại Switch quản trị, chỉ cho phép máy chủ điều hòa gửi lệnh Modbus TCP tới HVAC (**HW-05**).
    *   Chạy chương trình cập nhật bản vá lỗ hổng hệ điều hành cho các thiết bị IoT Gateway (**HW-03**).

---

## 4. Minh Chứng Kiểm Tra Bảo Mật (Testing Evidence & Verification)

Để chứng minh chính sách bảo mật hoạt động hiệu quả, chúng tôi thực hiện các kịch bản kiểm thử trực quan trên giao diện **Web Dashboard**:

### 🧪 Kiểm Thử 1: Rà Quét Phát Hiện Lỗ Hổng Bảo Mật (Vulnerability Auditing)
*   **Mục tiêu**: Kiểm tra xem hệ thống giám sát có phát hiện đúng các thiết bị có nguy cơ cao trong mạng trường học hay không.
*   **Các bước thực hiện**:
    1.  Tại giao diện Dashboard, nhấn nút **"Khởi Chạy Quét Mạng"**.
    2.  Hệ thống chạy tiến trình quét (0% đến 100%) mô phỏng việc quét cổng (Port Scan) và kiểm tra mật khẩu.
*   **Minh chứng kết quả (Evidence)**:
    *   Dashboard xuất báo cáo phát hiện **3 lỗ hổng**: Lỗi mật khẩu mặc định của Camera IP (CVSS 9.8 - Nguy hiểm), lỗi truyền HTTP không mã hóa của Smart Lock (CVSS 7.5 - Cảnh báo), và lỗi Firmware cũ của HVAC (CVSS 6.5 - Cảnh báo).
    *   Hệ thống hiển thị rõ mục phân loại **STRIDE** và khuyến nghị sửa đổi chính sách bảo mật cho từng thiết bị.

### 🧪 Kiểm Thử 2: Phát Hiện Tấn Công Đột Nhập Định Kỳ (Threat Intrusion Detection)
*   **Mục tiêu**: Kiểm tra tính năng cảnh báo thời gian thực khi có hành vi hack thiết bị.
*   **Các bước thực hiện**:
    1.  Tại góc phải của Dashboard, nhấn nút **"Simulate Hack Event"** (Mô phỏng sự cố hack).
*   **Minh chứng kết quả (Evidence)**:
    *   Hộp nhật ký hệ thống (Live Log Console) lập tức chuyển sang dòng chữ đỏ chớp nháy cảnh báo nguy hiểm:
        `[CẢNH BÁO KHẨN CẤP] Phát hiện 15 yêu cầu đăng nhập thất bại liên tục từ IP lạ 192.168.100.80 vào Camera HW-01!`
    *   Tiếp sau đó là log hệ thống ghi nhận xâm nhập thành công:
        `[SỰ CỐ] Đăng nhập thành công! Kẻ tấn công đã chiếm quyền quản trị Camera IP HW-01...`

### 🧪 Kiểm Thử 3: Cô Lập Bảo Mật Khẩn Cấp (Emergency Network Isolation)
*   **Mục tiêu**: Kiểm tra khả năng ứng phó sự cố - cô lập thiết bị để bảo vệ toàn hệ thống khỏi bị lây lan mã độc (Malware propagation control).
*   **Các bước thực hiện**:
    1.  Sau khi phát hiện Camera **HW-01** bị hack ở kiểm thử 2, Quản trị viên IT tìm đến dòng Camera HW-01 trên bảng thiết bị.
    2.  Nhấn nút **"Cô lập mạng"**.
*   **Minh chứng kết quả (Evidence)**:
    *   Trạng thái mạng của Camera **HW-01** đổi từ `Trực tuyến` sang `CÔ LẬP MẠNG` (màu xám tắt kết nối).
    *   Điểm bảo mật của Camera chuyển về trạng thái an toàn tạm thời (`Đã ngắt mạng`), đồng thời ô số lượng thiết bị an toàn tăng lên và ô nguy hiểm giảm về `0`.
    *   Nhật ký Console ghi nhận hành động: `[CÔ LẬP BẢO MẬT] Thiết bị HW-01 đã bị ngắt kết nối cổng switch tại VLAN 30`. Điều này chứng minh lỗ hổng đã được cô lập vật lý thành công.
