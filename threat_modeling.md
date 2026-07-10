# Phân Tích Mối Đe Dọa (STRIDE / OWASP / CVSS)

Tài liệu này trình bày chi tiết về mô hình hóa mối đe dọa (Threat Modeling) cho hệ thống IoT của trường đại học nhằm xác định sớm các lỗ hổng hệ thống và đưa ra các phương án thiết kế bảo mật phù hợp.

---

## 1. Mô Hình STRIDE Cho Hệ Thống IoT Trường Đại Học

Mô hình **STRIDE** phân tích các mối đe dọa thành 6 loại chính:

| Viết Tắt | Mối Đe Dọa | Mục Tiêu Bảo Mật | Kịch Bản Tấn Công Thực Tế Trong Trường Đại Học | Biện Pháp Khắc Phục Sơ Bộ |
| :--- | :--- | :--- | :--- | :--- |
| **S** (Spoofing) | Giả mạo | Authentication (Xác thực) | Kẻ tấn công sao chép thẻ RFID của giảng viên để mở cửa phòng Server hoặc phòng Lab nghiên cứu đề tài bí mật. | Sử dụng thẻ RFID mã hóa (Mifare Desfire) thay vì thẻ RFID tần số thấp (125kHz) dễ sao chép; áp dụng xác thực 2 lớp (MFA). |
| **T** (Tampering) | Can thiệp vật lý/dữ liệu | Integrity (Tính toàn vẹn) | Kẻ tấn công kết nối trực tiếp vào cáp LAN của Camera IP lắp ngoài hành lang để tiêm mã độc hoặc chèn luồng video giả. | Vô hiệu hóa các cổng switch mạng không sử dụng; bật tính năng Port Security (MAC Binding/802.1X) trên switch. |
| **R** (Repudiation) | Chối bỏ | Non-repudiation (Chống chối bỏ) | Kẻ gian phá hoại thiết bị trong Lab nhưng hệ thống không ghi lại nhật ký mở cửa (hoặc nhật ký bị xóa bởi tài khoản bị chiếm đoạt), dẫn đến việc sinh viên chối bỏ trách nhiệm. | Thiết lập ghi nhật ký tập trung (Centralized Logging) qua giao thức syslog mã hóa gửi đến máy chủ log bất biến (Read-only log storage). |
| **I** (Information Disclosure) | Lộ lọt thông tin | Confidentiality (Tính bảo mật) | Dữ liệu video giám sát của camera lắp trong khu vực nhạy cảm (như phòng họp Ban giám hiệu hoặc phòng Ký túc xá) bị truyền tải dưới dạng cleartext (HTTP/RTSP không mã hóa) và bị nghe lén trên mạng Wi-Fi trường. | Bắt buộc mã hóa luồng truyền dữ liệu bằng SRTP hoặc RTSP qua TLS (RTSPS); cấu hình phân vùng mạng VLAN bảo mật. |
| **D** (Denial of Service) | Từ chối dịch vụ | Availability (Tính sẵn sàng) | Kẻ tấn công thực hiện tấn công Syn Flood hoặc UDP Flood vào IP của bộ điều khiển cửa thông minh (Smart Lock Controller), làm tê liệt hệ thống khóa khiến cửa không thể mở/đóng tự động trong trường hợp khẩn cấp. | Triển khai tường lửa biên giới hạn lưu lượng (Rate limiting); sử dụng bộ điều khiển cửa có cơ chế fallback vật lý (khóa cơ dự phòng). |
| **E** (Elevation of Privilege) | Leo thang đặc quyền | Authorization (Ủy quyền) | Kẻ tấn công khai thác lỗ hổng tràn bộ đệm (Buffer Overflow) trong firmware của thiết bị Gateway để từ quyền User thường chiếm quyền Root (quản trị tối cao), điều khiển toàn bộ mạng IoT. | Thường xuyên cập nhật bản vá Firmware (OTA); chạy các dịch vụ trên Gateway dưới quyền user bị hạn chế (Non-root user). |

---

## 2. Ánh Xạ Lên OWASP IoT Top 10

Dưới đây là việc nhận diện và đối chiếu các lỗ hổng của trường đại học với danh sách **OWASP IoT Top 10**:

1. **I1: Weak, Guessable, or Hardcoded Credentials (Mật khẩu yếu, dễ đoán hoặc mã hóa cứng)**
   - *Hiện trạng*: Thiết bị camera IP mua ngoài thị trường thường giữ nguyên mật khẩu mặc định (`admin/admin` hoặc `admin/12345`).
   - *Rủi ro*: Kẻ tấn công quét IP tự động có thể chiếm quyền điều khiển hàng loạt camera trong trường.
2. **I2: Insecure Network Services (Dịch vụ mạng không an toàn)**
   - *Hiện trạng*: Thiết bị IoT mở sẵn các cổng dịch vụ không cần thiết như Telnet (Port 23), FTP (Port 21) hoặc HTTP không mã hóa (Port 80).
   - *Rủi ro*: Dễ bị khai thác từ xa qua mạng nội bộ.
3. **I3: Insecure Ecosystem Interfaces (Giao diện hệ sinh thái không an toàn)**
   - *Hiện trạng*: API kết nối giữa ứng dụng di động quản lý IoT và máy chủ Backend không được xác thực token mạnh, thiếu kiểm tra phân quyền (IDOR).
   - *Rủi ro*: Kẻ tấn công giả mạo request để lấy thông tin của các phòng ban khác.
4. **I4: Lack of Secure Update Mechanism (Thiếu cơ chế cập nhật an toàn)**
   - *Hiện trạng*: Firmware của thiết bị Smart Lock được tải về qua HTTP không mã hóa và không có chữ ký số (Digital Signature).
   - *Rủi ro*: Kẻ tấn công có thể chèn firmware chứa mã độc (Malicious Firmware Update).
5. **I5: Use of Outdated or Insecure Components (Sử dụng thành phần lỗi thời hoặc không an toàn)**
   - *Hiện trạng*: Hệ điều hành của IoT Gateway (Raspberry Pi) chạy phiên bản Linux cũ chứa các lỗ hổng bảo mật đã được công bố (ví dụ: lỗi trong thư viện OpenSSL).
   - *Rủi ro*: Bị khai thác chiếm quyền điều khiển từ xa.
6. **I6: Insufficient Privacy Protection (Bảo vệ quyền riêng tư chưa đầy đủ)**
   - *Hiện trạng*: Dữ liệu định danh sinh viên kết hợp nhật ký ra vào các khu vực lưu trữ dưới dạng bản rõ (Plaintext) không mã hóa.
   - *Rủi ro*: Vi phạm các quy định về bảo vệ dữ liệu cá nhân nếu cơ sở dữ liệu bị rò rỉ.

---

## 3. Bản Nháp Đánh Giá Điểm Số Lỗ Hổng CVSS v3.1

Dưới đây là điểm số CVSS giả định cho 2 lỗ hổng phổ biến nhất trong hệ thống IoT trường đại học để làm căn cứ ưu tiên xử lý sự cố:

### Kịch Bản 1: Sử dụng mật khẩu mặc định / mã hóa cứng trong Firmware Camera IP (HW-01)
* **Vectơ CVSS v3.1**: `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H`
* **Phân tích các thành phần**:
  - *Attack Vector (AV)*: **Network (N)** - Có thể khai thác từ xa qua mạng Internet/Nội bộ.
  - *Attack Complexity (AC)*: **Low (L)** - Khai thác cực kỳ dễ dàng bằng các công cụ quét tự động.
  - *Privileges Required (PR)*: **None (N)** - Không cần tài khoản trước đó để khai thác.
  - *User Interaction (UI)*: **None (N)** - Không cần người dùng tương tác.
  - *Scope (S)*: **Unchanged (U)** - Tác động giới hạn trong camera bị chiếm quyền.
  - *Confidentiality (C)*: **High (H)** - Kẻ tấn công xem được toàn bộ luồng video trực tiếp.
  - *Integrity (I)*: **High (H)** - Có thể chỉnh sửa cấu hình camera, xóa log.
  - *Availability (A)*: **High (H)** - Có thể tắt hoặc khởi động lại camera tùy ý.
* **Điểm CVSS v3.1**: **9.8 (Nghiêm Trọng - Critical)**

### Kịch Bản 2: Truyền dữ liệu mở khóa Smart Lock (HW-02) qua giao thức HTTP không mã hóa
* **Vectơ CVSS v3.1**: `CVSS:3.1/AV:A/AC:H/PR:N/UI:N/S:C/C:H/I:H/A:N`
* **Phân tích các thành phần**:
  - *Attack Vector (AV)*: **Adjacent (A)** - Phải ở trong cùng mạng nội bộ Wi-Fi/LAN của trường mới nghe lén được.
  - *Attack Complexity (AC)*: **High (H)** - Cần kỹ thuật nghe lén mạng (ARP Spoofing) và giải mã giao thức.
  - *Privileges Required (PR)*: **None (N)** - Không cần tài khoản.
  - *User Interaction (UI)*: **None (N)** - Không cần người dùng tương tác.
  - *Scope (S)*: **Changed (C)** - Việc lộ lọt token dẫn đến việc mở khóa vật lý (ảnh hưởng đến an toàn vật lý của phòng Lab).
  - *Confidentiality (C)*: **High (H)** - Lộ mã token mở khóa.
  - *Integrity (I)*: **High (H)** - Có thể replay gói tin để mở cửa bất hợp pháp.
  - *Availability (A)*: **None (N)** - Không làm sập thiết bị khóa.
* **Điểm CVSS v3.1**: **7.5 (Cao - High)**
