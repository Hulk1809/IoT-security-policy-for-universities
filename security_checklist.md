# Checklist Kiểm Tra Bảo Mật IoT (Dành Cho Quản Trị Viên)

Bảng checklist này là hướng dẫn thực hành từng bước giúp đội ngũ IT và An ninh thông tin của trường đại học kiểm tra, đánh giá mức độ an toàn trước, trong và sau khi triển khai bất kỳ thiết bị IoT mới nào vào hệ thống mạng.

---

## 1. Giai Đoạn Mua Sắm & Lựa Chọn Thiết Bị (Procurement & Design)

*Trước khi đặt mua thiết bị IoT cho trường học, hãy đảm bảo thiết bị đáp ứng các tiêu chuẩn tối thiểu:*

- [ ] **Thay đổi thông tin đăng nhập**: Thiết bị có cho phép (hoặc bắt buộc) thay đổi mật khẩu mặc định ngay lần đầu đăng nhập không? *(Không mua thiết bị mã hóa cứng mật khẩu).*
- [ ] **Mã hóa truyền thông**: Thiết bị có hỗ trợ các giao thức mã hóa an toàn không? (Ví dụ: HTTPS thay vì HTTP, MQTTS thay vì MQTT, RTSPS/SRTP thay vì RTSP).
- [ ] **Hỗ trợ cập nhật Firmware**: Nhà sản xuất có cam kết phát hành các bản vá bảo mật định kỳ và hỗ trợ cập nhật Firmware từ xa một cách an toàn không?
- [ ] **Tính năng IEEE 802.1X**: Thiết bị có khả năng xác thực mạnh bằng chứng chỉ số hoặc giao thức EAP-TLS để kết nối vào mạng LAN/Wi-Fi doanh nghiệp không?
- [ ] **Không sử dụng dịch vụ đám mây công cộng bên thứ ba không rõ nguồn gốc**: Thiết bị có thể hoạt động hoàn toàn trong mạng nội bộ (On-premises) hoặc kết nối qua Cloud riêng của trường mà không phụ thuộc vào máy chủ lạ ở nước ngoài không?

---

## 2. Giai Đoạn Cài Đặt & Cấu Hình (Installation & Hardening)

*Khi tiến hành cấu hình thiết bị để đưa vào hoạt động:*

### A. Cấu Hình Thiết Bị Đầu Cuối (Device Hardening)
- [ ] **Đổi mật khẩu mặc định**: Đặt mật khẩu quản trị phức tạp (tối thiểu 12 ký tự gồm chữ hoa, chữ thường, số và ký tự đặc biệt).
- [ ] **Cập nhật Firmware lên bản mới nhất**: Tải và cài đặt phiên bản phần sụn (Firmware) mới nhất từ trang chủ của nhà sản xuất trước khi kết nối mạng.
- [ ] **Vô hiệu hóa các cổng dịch vụ không dùng**: Tắt các cổng dịch vụ có tính bảo mật kém như Telnet (Port 23), FTP (Port 21), HTTP (Port 80), UPnP, SSDP.
- [ ] **Cấu hình mã hóa dữ liệu**: Kích hoạt chứng chỉ SSL/TLS trên thiết bị để đảm bảo giao tiếp quản trị luôn qua cổng HTTPS (Port 443).

### B. Cấu Hình Mạng & Định Tuyến (Network Security)
- [ ] **Gán VLAN phù hợp**: Gán địa chỉ IP tĩnh hoặc cấu hình DHCP Reservation để đưa thiết bị vào đúng phân vùng VLAN của nó (VLAN 10, 20 hoặc 30). *Tuyệt đối không để thiết bị IoT chung phân vùng với mạng chứa máy tính của sinh viên hoặc hệ thống kế toán.*
- [ ] **Cấu hình Firewall chặn lưu lượng (ACL - Access Control List)**:
  - [ ] Chặn mọi truy cập từ ngoài Internet vào thiết bị IoT.
  - [ ] Chỉ cho phép thiết bị IoT kết nối đến máy chủ điều khiển (VLAN 99) theo các cổng dịch vụ tối thiểu.
  - [ ] Chặn giao tiếp trực tiếp giữa các thiết bị IoT trong cùng một mạng LAN (Client Isolation).
- [ ] **Bật tính năng bảo vệ cổng trên Switch (Port Security)**: Ràng buộc địa chỉ MAC của thiết bị với cổng switch vật lý tương ứng để tránh kẻ gian rút cáp mạng cắm máy tính khác vào.

---

## 3. Giai Đoạn Vận Hành & Giám Sát (Operations & Monitoring)

*Các hoạt động cần thực hiện định kỳ trong suốt quá trình vận hành:*

- [ ] **Quét tìm thiết bị lạ (Shadow IoT discovery)**: Sử dụng các công cụ quét mạng tự động (như Nmap hoặc các giải pháp IDS) hàng tháng để phát hiện các thiết bị IoT kết nối trái phép vào mạng trường.
- [ ] **Giám sát lưu lượng mạng bất thường**: Thiết lập cảnh báo nếu một camera IP đột nhiên gửi dung lượng dữ liệu lớn ra ngoài Internet (dấu hiệu bị lợi dụng để tấn công DDoS hoặc rò rỉ dữ liệu).
- [ ] **Ghi nhật ký và phân tích Log**: Cấu hình chuyển tiếp Log (Syslog) của các thiết bị IoT và IoT Gateways về máy chủ quản lý log tập trung. Thiết lập cảnh báo khi có sự kiện đăng nhập sai liên tục (Brute force).
- [ ] **Đánh giá lỗ hổng định kỳ**: Thực hiện rà quét lỗ hổng bảo mật của các thiết bị IoT ít nhất 2 lần/năm bằng các công cụ quét chuyên dụng (ví dụ: Nessus, OpenVAS).

---

## 4. Giai Đoạn Ứng Phó Sự Cố (Incident Response Checklist)

*Khi phát hiện thiết bị IoT (ví dụ: Camera) bị hack hoặc hoạt động bất thường:*

- [ ] **Bước 1 - Cách ly mạng**: Ngắt ngay lập tức kết nối mạng của thiết bị bị ảnh hưởng (cách ly cổng switch hoặc khóa MAC trên Wi-Fi Controller) để tránh mã độc lây lan sang các máy chủ khác. *Không tắt nguồn thiết bị để giữ lại dữ liệu trong bộ nhớ RAM phục vụ điều tra.*
- [ ] **Bước 2 - Phân tích nhật ký**: Kiểm tra log truy cập trên máy chủ Syslog để xác định địa chỉ IP nguồn thực hiện cuộc tấn công và lỗ hổng bị khai thác.
- [ ] **Bước 3 - Vá lỗi & Reset**: Cập nhật bản vá firmware mới nhất khắc phục lỗ hổng, thực hiện khôi phục cài đặt gốc (Factory Reset) để xóa mã độc.
- [ ] **Bước 4 - Khôi phục dịch vụ**: Thay đổi toàn bộ mật khẩu, token xác thực liên quan đến thiết bị đó trước khi kết nối trở lại mạng.
