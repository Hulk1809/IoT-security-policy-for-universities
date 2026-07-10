# Bảng Tài Sản - Rủi Ro - Biện Pháp Giảm Thiểu

Tài liệu này ánh xạ các tài sản IoT được nhận diện trong trường đại học với các rủi ro tương ứng và đưa ra các biện pháp kỹ thuật, quản lý cụ thể nhằm giảm thiểu tối đa các rủi ro này.

---

## Bảng Ánh Xạ Chi Tiết

| ID Tài Sản | Tên Tài Sản | Rủi Ro Bảo Mật Chính | Mức Độ Rủi Ro (Khả năng x Tác động) | Biện Pháp Giảm Thiểu Kỹ Thuật & Chính Sách |
| :--- | :--- | :--- | :--- | :--- |
| **HW-01** | Hệ thống Camera IP | - Bị chiếm quyền điều khiển và biến thành Botnet tấn công DDoS vào hệ thống khác.<br>- Lộ lọt hình ảnh nhạy cảm ra ngoài Internet. | **Cao** | - Thay đổi mật khẩu mặc định ngay khi lắp đặt.<br>- Đặt camera trong phân vùng **VLAN 30 (An ninh)** tách biệt, cấu hình Firewall chặn mọi truy cập từ bên ngoài trừ máy chủ ghi hình (NVR).<br>- Tắt các cổng dịch vụ không dùng như Telnet, FTP, UPnP. |
| **HW-02** | Khóa cửa thông minh & Đầu đọc RFID | - Kẻ gian sao chép thẻ từ RFID tần số thấp để đột nhập phòng máy chủ/Lab.<br>- Khóa cửa bị treo (DDoS) hoặc tự động mở khi có sự cố mạng. | **Cao** | - Nâng cấp thẻ từ lên loại mã hóa **Mifare DESFire EV2/EV3** chống sao chép.<br>- Cấu hình chế độ "Fail-secure" (giữ trạng thái khóa an toàn khi mất điện đột ngột nhưng cho phép thoát hiểm bằng cần gạt cơ từ bên trong).<br>- Tích hợp hệ thống camera chéo đầu cửa để ghi hình khi có sự kiện mở cửa. |
| **HW-03** | IoT Gateway | - Bị can thiệp vật lý vào cổng USB/Console để nạp hệ điều hành độc hại.<br>- Bị nghe lén dữ liệu cảm biến chưa mã hóa truyền về Gateway. | **Trung bình** | - Đóng gói các thiết bị Gateway trong hộp bảo vệ có khóa vật lý.<br>- Vô hiệu hóa cổng USB và giao diện debug (UART/JTAG) trên phần cứng nếu không cần thiết.<br>- Sử dụng giao thức **MQTT qua TLS (MQTTS)** để mã hóa luồng dữ liệu truyền. |
| **HW-05** | Bộ điều khiển HVAC & Chiller | - Kẻ tấn công thay đổi thông số nhiệt độ phòng Server gây cháy nổ hoặc hỏng thiết bị phần cứng do quá nhiệt. | **Cao** | - Phân vùng cách ly VLAN cơ sở vật chất.<br>- Chỉ cho phép các lệnh điều khiển từ dải IP máy chủ quản lý thông qua cơ chế danh sách trắng (Whitelist IP).<br>- Thiết lập hệ thống cảm biến nhiệt độ độc lập (cơ chế Fail-safe) tự động ngắt điện nếu nhiệt độ vượt ngưỡng an toàn. |
| **SW-02** | Phần mềm Quản trị Trung tâm (Dashboard) | - Tài khoản admin bị tấn công brute force hoặc rò rỉ thông tin đăng nhập.<br>- Lỗ hổng SQL Injection hoặc XSS trên trang Web Dashboard cho phép chiếm toàn bộ quyền kiểm soát. | **Chí mạng** | - Bắt buộc áp dụng **xác thực đa yếu tố (MFA)** cho tài khoản quản trị viên.<br>- Cài đặt Web Application Firewall (WAF) để bảo vệ dashboard.<br>- Thực hiện kiểm thử xâm nhập (Penetration Testing) định kỳ và rà quét lỗ hổng mã nguồn ứng dụng web. |
| **DT-02** | Nhật ký ra vào (Access Logs) | - Nhật ký bị chỉnh sửa hoặc xóa để phi tang dấu vết đột nhập.<br>- Dữ liệu cá nhân của giảng viên/sinh viên bị khai thác trái phép. | **Cao** | - Đẩy log thời gian thực về máy chủ SIEM/Syslog Server độc lập với cơ chế **WORM (Write Once, Read Many)**.<br>- Mã hóa dữ liệu log lúc lưu trữ (Encryption at Rest) bằng thuật toán AES-256.<br>- Áp dụng phân quyền truy cập nhật ký theo vai trò (RBAC - Role-Based Access Control). |
| **DT-03** | Cấu hình & Token xác thực | - API key, chứng chỉ TLS/SSL, mật khẩu kết nối cơ sở dữ liệu bị lộ trên các kho lưu trữ mã nguồn mở (Git công khai). | **Chí mạng** | - Không bao giờ mã hóa cứng (hardcode) mật khẩu/token trong mã nguồn.<br>- Sử dụng các dịch vụ quản lý bí mật chuyên nghiệp (như HashiCorp Vault hoặc AWS Secrets Manager).<br>- Quét mã nguồn tự động bằng công cụ GitGuardian để phát hiện rò rỉ token trước khi commit. |

---

## Chính Sách Áp Dụng Chung Cho Trường Đại Học

### 1. Chính sách Phân vùng Mạng (Network Segmentation Policy)
Không cho phép bất kỳ thiết bị IoT đầu cuối nào giao tiếp trực tiếp với nhau hoặc giao tiếp trực tiếp ra mạng Internet công cộng mà không đi qua Firewall hoặc IoT Gateway được cấu hình luật (Rule) cụ thể.

### 2. Chính sách Quản lý Thiết bị (Device Lifecycle Management Policy)
- **Đầu vào**: Mọi thiết bị IoT trước khi mua sắm và lắp đặt phải qua sự phê duyệt của phòng IT về mặt thông số an toàn (có hỗ trợ thay đổi mật khẩu, mã hóa truyền thông, cập nhật firmware).
- **Vận hành**: Thiết lập lịch quét IP định kỳ hàng tháng để phát hiện các thiết bị IoT không rõ nguồn gốc (Shadow IoT) kết nối vào mạng trường.
- **Đầu ra**: Trước khi thanh lý thiết bị IoT cũ, phải thực hiện khôi phục cài đặt gốc (Factory Reset) và xóa sạch các khóa mật mã, dữ liệu cấu hình cũ bên trong chip nhớ.

### 3. Chính sách Quản lý Bản vá (Patch Management Policy)
Định kỳ hàng quý (hoặc ngay khi có cảnh báo bảo mật khẩn cấp từ nhà sản xuất), phòng IT có trách nhiệm cập nhật Firmware mới nhất cho toàn bộ Camera, Smart Lock và IoT Gateways.
