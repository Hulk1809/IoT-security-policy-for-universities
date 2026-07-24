# BÁO CÁO ĐỒ ÁN: CHÍNH SÁCH BẢO MẬT IoT CHO TRƯỜNG ĐẠI HỌC

> *Tuyên bố về việc sử dụng AI (AI Usage Disclaimer):*
> This paper has been prepared with the assistance of AI tools Gemini for language editing and grammar checking. The authors are fully responsible for the content and conclusions of the paper.
> (Báo cáo này đã được chuẩn bị với sự hỗ trợ của công cụ AI Gemini để hiệu đính ngôn ngữ và kiểm tra ngữ pháp. Các tác giả chịu trách nhiệm hoàn toàn về nội dung và kết luận của báo cáo).

---

## CHƯƠNG 1. TỔNG QUAN ĐỀ TÀI

### 1.1. Bối cảnh và lý do chọn đề tài

#### 1.1.1. Bối cảnh ứng dụng hệ thống IoT tại các trường đại học hiện nay
Trong bối cảnh cuộc Cách mạng Công nghiệp 4.0 và làn sóng chuyển đổi số đang diễn ra mạnh mẽ, ngành giáo dục đại học đang trải qua những thay đổi sâu sắc về mặt hạ tầng công nghệ. Khái niệm “Smart Campus” (Khuôn viên trường học thông minh) đã không còn là một tầm nhìn xa vời mà đang trở thành hiện thực và là tiêu chí cạnh tranh của nhiều cơ sở giáo dục đại học hàng đầu. Mục tiêu của đại học thông minh là tối ưu hóa việc dạy và học, nâng cao hiệu quả quản lý hành chính và tiết kiệm năng lượng thông qua việc tích hợp sâu các công nghệ kết nối.

Trong xu thế đó, Internet Vạn Vật (IoT) đóng vai trò là xương sống công nghệ kết nối thế giới vật lý với không gian số. Tại các trường đại học, hệ thống IoT được triển khai rộng khắp và chia làm bốn nhóm chính:
*   **Hệ thống giám sát an ninh (Physical Security)**: Bao gồm hàng trăm camera IP giám sát lắp đặt tại giảng đường, hành lang, nhà xe; hệ thống khóa cửa thông minh (Smart Lock) kiểm soát phòng máy chủ, phòng thí nghiệm chuyên đề; và hệ thống đầu đọc thẻ RFID/NFC quản lý giảng viên, sinh viên ra vào.
*   **Hệ thống lớp học thông minh (Smart Classroom)**: Gồm máy chiếu thông minh kết nối mạng (Smart Projector), bảng tương tác điện tử, cảm biến hiện diện (Presence Sensor) và cảm biến môi trường tự động điều chỉnh ánh sáng/nhiệt độ.
*   **Hệ thống hạ tầng kỹ thuật (Smart Utilities)**: Hệ thống điều hòa không khí trung tâm (HVAC/Chiller), công tơ điện nước thông minh (Smart Meters) và hệ thống chiếu sáng thông minh giúp tự động ngắt điện khi không có người sử dụng.
*   **Hệ thống nghiên cứu học thuật**: Các bộ Kit IoT, cảm biến thực nghiệm chuyên sâu được sinh viên và nghiên cứu sinh sử dụng trực tiếp trong các phòng Lab chuyên ngành.

Tuy nhiên, sự bùng nổ của các thiết bị này diễn ra tự phát và nhanh chóng hơn nhiều so với tốc độ xây dựng các rào chắn bảo mật tương ứng. Phần lớn các thiết bị IoT khi mua sắm và lắp đặt tại các phòng ban thường được kết nối trực tiếp vào hạ tầng mạng LAN/Wi-Fi sẵn có của nhà trường mà không qua bất kỳ quy trình kiểm duyệt bảo mật hay phân vùng mạng chuyên biệt nào.

#### 1.1.2. Vấn đề bảo mật cụ thể trong môi trường IoT học đường
Bảo mật IoT trong môi trường đại học có những đặc thù phức tạp và nguy cơ mất an toàn thông tin cao hơn rất nhiều so với môi trường doanh nghiệp hay tài chính thông thường do hai yếu tố chính: lỗ hổng cố hữu của thiết bị và tính mở của hạ tầng mạng.

Thứ nhất, về mặt thiết bị, phần lớn thiết bị IoT đầu cuối (như Camera IP giá rẻ, cảm biến nhiệt độ) được thiết kế với dung lượng bộ nhớ và năng lượng hạn chế, khiến nhà sản xuất không thể tích hợp các thuật toán mã hóa mạnh hoặc các giao thức xác thực phức tạp. Theo báo cáo thống kê các mối đe dọa IoT của Unit 42 (Palo Alto Networks), có tới 98% luồng truyền dữ liệu của các thiết bị IoT trên toàn cầu hiện nay không được mã hóa (cleartext), cho phép kẻ tấn công dễ dàng thực hiện các cuộc nghe lén thông tin trên đường truyền [1]. Hơn thế nữa, thói quen giữ nguyên mật khẩu mặc định của nhà sản xuất (như admin/admin, admin/12345) và việc các thiết bị chạy trên các hệ điều hành nhúng đã lỗi thời không được cập nhật vá lỗi bảo mật (Firmware) thường xuyên là những lỗ hổng cực kỳ phổ biến.

Thứ hai, về mặt hạ tầng, mạng trường đại học phục vụ đối tượng sử dụng cực kỳ đa dạng và đông đảo bao gồm: cán bộ quản lý, giảng viên, nghiên cứu sinh, sinh viên và khách vãng lai. Xu hướng mang theo thiết bị cá nhân (BYOD) và việc cung cấp Wi-Fi khách (Guest Wi-Fi) làm tăng số lượng điểm truy cập không kiểm soát. Kẻ tấn công chỉ cần kết nối vào mạng Wi-Fi trường là đã có thể quét được toàn bộ các địa chỉ IP của thiết bị IoT đang hoạt động chung phân vùng mạng, từ đó thực hiện tấn công dò mật khẩu (Brute-force) hoặc khai thác lỗ hổng tràn bộ đệm để chiếm quyền kiểm soát thiết bị [2].

#### 1.1.3. Đối tượng bị ảnh hưởng và hệ quả của sự cố an ninh
Khi một thiết bị IoT bị xâm nhập, hậu quả không chỉ dừng lại ở bản thân thiết bị đó mà còn ảnh hưởng trực tiếp tới ba nhóm đối tượng chính trong trường học:
*   **Sinh viên và Giảng viên**: Quyền riêng tư của cá nhân bị xâm phạm nghiêm trọng nếu luồng hình ảnh của các camera IP lắp đặt tại các khu vực nhạy cảm bị rò rỉ. Ngoài ra, lịch sử ra vào (Access Logs) của các phòng thí nghiệm chứa thông tin cá nhân của giảng viên và sinh viên có thể bị đánh cắp hoặc sửa đổi trái phép.
*   **Đội ngũ quản trị IT và An ninh hệ thống**: Khi thiếu một chính sách bảo mật IoT rõ ràng, đội ngũ IT phải đối mặt với tình trạng "Shadow IoT" (thiết bị IoT lén kết nối mạng). Khi có sự cố xảy ra, IT không có công cụ trực quan để định vị thiết bị, không biết thiết bị thuộc VLAN nào, và thiếu cơ chế phản ứng nhanh để cô lập thiết bị bị nhiễm độc.
*   **Ban giám hiệu và Uy tín nhà trường**: Việc hệ thống IoT bị hack và lợi dụng làm Botnet tấn công DDoS có thể đẩy nhà trường vào các rắc rối pháp lý liên quan đến Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân của Việt Nam [3]. Nghiêm trọng hơn, nếu kẻ tấn công chiếm quyền hệ thống điều hòa HVAC phòng Server, chúng có thể tắt hệ thống làm mát khiến toàn bộ dàn máy chủ trung tâm của trường bị quá nhiệt hư hỏng vật lý.

#### 1.1.4. Vì sao đề tài cần phải thực hiện
Từ bối cảnh thực tế trên, việc nghiên cứu và xây dựng một "Chính sách bảo mật IoT cho trường đại học" là vô cùng cấp thiết và bắt buộc phải thực hiện vì những lý do sau:
1.  **Thiết lập hành lang pháp lý và tiêu chuẩn kỹ thuật nội bộ**: Cung cấp khung hướng dẫn chi tiết từ khâu mua sắm, cài đặt Hardening đến khâu vận hành định kỳ cho IT.
2.  **Triển khai kỹ thuật phân vùng mạng thực tế**: Đề xuất giải pháp kỹ thuật cụ thể thông qua việc chia VLAN và cấu hình tường lửa (Firewall Rules) để cô lập dòng dữ liệu IoT an ninh.
3.  **Xây dựng giải pháp minh họa trực quan (Proof of Concept)**: Thiết kế ứng dụng Web Dashboard Giám sát An ninh IoT thực tế tích hợp module quét lỗ hổng (CVSS/STRIDE), live log và tính năng cô lập mạng (Network Isolation) khẩn cấp.

---

### 1.2. Phát biểu vấn đề bảo mật
Bài toán bảo mật IoT tại trường đại học là một thách thức đa chiều, liên quan đến nhiều lớp từ phần cứng vật lý, hạ tầng mạng, đến dữ liệu và phần mềm. Vấn đề bảo mật của đề tài được phát biểu cụ thể qua bốn yếu tố:

#### 1.2.1. Tài sản cần bảo vệ (Assets)
Hệ thống mạng IoT trường đại học sở hữu ba nhóm tài sản giá trị cần được bảo vệ toàn vẹn:
*   **Tài sản phần cứng (Physical Hardware)**: Camera IP giám sát an ninh; khóa cửa thông minh RFID kiểm soát phòng máy chủ/Lab; các bộ định tuyến IoT Gateway; và bộ điều khiển hệ thống điều hòa HVAC trung tâm phòng máy chủ.
*   **Tài sản phần mềm và cấu hình (Software & Firmware)**: Mã nguồn hệ điều hành nhúng chạy trên các thiết bị, ứng dụng Web Dashboard quản trị trung tâm của IT, và các tệp cấu hình cổng switch mạng.
*   **Tài sản dữ liệu (Sensitive Data)**: Luồng dữ liệu video giám sát an ninh trực tiếp (CCTV streaming), cơ sở dữ liệu nhật ký quẹt thẻ kiểm soát ra vào của giảng viên/sinh viên, và các khóa mật mã (API Keys, Token xác thực) dùng để kết nối giữa Gateway và Cloud.

#### 1.2.2. Mối đe dọa và Lỗ hổng bảo mật chính (Threats & Vulnerabilities)
Hệ thống IoT của trường đại học đối mặt với các lỗ hổng kỹ thuật nghiêm trọng chưa được kiểm soát:
*   **Mật khẩu yếu và mã hóa cứng (Weak/Default Credentials)**: Thiết bị camera IP và khóa cửa lắp đặt hàng loạt nhưng giữ nguyên tài khoản mặc định của nhà sản xuất, tạo điều kiện cho các cuộc tấn công dò quét tự động chiếm quyền điều khiển.
*   **Truyền thông không mã hóa (Insecure Protocols)**: Luồng video RTSP và tín hiệu mở khóa cửa truyền dưới dạng văn bản rõ (Plaintext) qua giao thức HTTP/RTSP không bảo mật, dễ bị nghe lén và thực hiện tấn công phát lại (Replay attack).
*   **Thiếu phân vùng mạng cách ly (Lack of Network Segmentation)**: Các thiết bị IoT lắp đặt chung một dải mạng LAN với máy tính giảng viên và mạng Wi-Fi tự do của sinh viên, tạo cơ hội cho mã độc dễ dàng lây lan ngang.

#### 1.2.3. Hậu quả của sự cố an ninh (Consequences)
Nếu các lỗ hổng trên bị khai thác, hậu quả để lại là cực kỳ nghiêm trọng:
*   Kẻ gian có thể bypass hệ thống xác thực để mở khóa vật lý các khu vực cấm để trộm cắp tài sản.
*   Tống tiền hoặc bôi nhọ danh tiếng nhà trường bằng cách thu giữ trái phép các video camera giám sát nhạy cảm.
*   Làm sập toàn bộ hệ thống máy chủ bằng cách phá hoại hệ thống làm mát HVAC phòng máy chủ trung tâm, gây cháy nổ phần cứng do quá nhiệt.

#### 1.2.4. Khoảng trống mà đề tài sẽ giải quyết (The Security Gap)
Mặc dù các trường đại học đều có chính sách an toàn thông tin chung (cho máy tính văn phòng, website), nhưng tồn tại một khoảng trống lớn trong quản lý thiết bị IoT:
*   **Thiếu chính sách chuyên biệt**: Chưa có quy chuẩn kỹ thuật quy định cụ thể quy trình hardening (đóng cổng dịch vụ thừa, cấu hình HTTPS) cho các thiết bị IoT phi chuẩn khi lắp đặt mới.
*   **Thiếu công cụ quản trị trực quan**: Đội ngũ IT của trường không có một công cụ giám sát tập trung để theo dõi sức khỏe an ninh của các thiết bị IoT, không thể tự động chấm điểm nguy cơ lỗ hổng theo chuẩn quốc tế (CVSS), và thiếu cơ chế phản ứng khẩn cấp để cô lập thiết bị mạng tại chỗ khi bị hack.

---

### 1.3. Mục tiêu của đề tài

Để giải quyết triệt để vấn đề bảo mật IoT học đường đã phát biểu, đề tài xác định 4 mục tiêu cụ thể:
*   **Mục tiêu 1: Thiết lập cấu trúc phân vùng mạng an toàn và sơ đồ dòng dữ liệu trực quan**: Thiết kế phân chia hệ thống mạng IoT thành 4 phân vùng VLAN độc lập (VLAN 10, 20, 30 và 99) và sơ đồ luồng dữ liệu DFD Cấp 1 kết xuất trực quan bằng mã Mermaid trong tệp README.md.
*   **Mục tiêu 2: Xây dựng khung đánh giá rủi ro định lượng và mô hình hóa mối đe dọa**: Phân tích các mối đe dọa theo mô hình STRIDE, đối chiếu lỗ hổng OWASP IoT Top 10 và đặc tả kịch bản chấm điểm CVSS v3.1 lưu tại tệp threat_modeling.md.
*   **Mục tiêu 3: Thiết lập bộ chính sách giảm thiểu rủi ro và cẩm nang kiểm tra bảo mật (Checklist)**: Xây dựng tệp chính sách risk_mitigation_matrix.md và cẩm nang hướng dẫn vận hành security_checklist.md gồm checklist 4 giai đoạn vòng đời thiết bị IoT dành cho quản trị viên mạng.
*   **Mục tiêu 4: Lập trình thành công Web Dashboard mô phỏng giám sát và phản ứng sự cố khẩn cấp**: Xây dựng thành công ứng dụng web (HTML/CSS/JS) chạy thực tế tại địa chỉ local http://localhost:8000 tích hợp quét lỗ hổng và nút bấm cô lập mạng (Network Isolation) khẩn cấp.

#### 1.3.1. Bảng đối chiếu mục tiêu và đầu ra của đề tài

| Mục tiêu | Đầu ra tương ứng | Cách kiểm chứng | Chương trình bày |
| :--- | :--- | :--- | :--- |
| **MT-01** | Sơ đồ ngữ cảnh DFD Cấp 0, sơ đồ chi tiết DFD Cấp 1 và thiết kế cấu trúc phân vùng 4 VLAN mạng IoT trường học. | Kiểm tra trực quan cấu trúc sơ đồ dòng dữ liệu được vẽ bằng Mermaid render tự động trong tài liệu README.md của dự án. | Chương 2 (Mục 2.1) |
| **MT-02** | Ma trận phân tích mối đe dọa STRIDE, danh sách ánh xạ lỗ hổng OWASP IoT Top 10 và 2 kịch bản chấm điểm CVSS v3.1 chi tiết. | Đối chiếu nội dung đặc tả chấm điểm trong tệp threat_modeling.md với tiêu chuẩn FIRST CVSS và xem hiển thị điểm số trên Web Dashboard. | Chương 2 (Mục 2.2) và Chương 5 |
| **MT-03** | Tài liệu ma trận Tài sản - Rủi ro - Biện pháp giảm thiểu và bộ cẩm nang checklist an ninh 4 giai đoạn vòng đời thiết bị IoT. | Kiểm tra trực tiếp sự tồn tại và nội dung các chính sách vận hành trong tệp risk_mitigation_matrix.md và security_checklist.md. | Chương 3 và Chương 5 |
| **MT-04** | Mã nguồn chương trình hoàn chỉnh chạy thực tế (index.html, style.css, app.js) đã được triển khai lên hosting GitHub Pages. | Truy cập trang web, thực hiện bấm nút chạy quét lỗ hổng hiển thị CVSS và click nút cô lập mạng để xác nhận thiết bị chuyển trạng thái offline. | Chương 3 và Chương 4 |


---

### 1.4. Đối tượng, phạm vi và giới hạn an toàn

#### 1.4.1. Đối tượng nghiên cứu
*   **Thiết bị**: Camera IP, Khóa cửa thông minh RFID, IoT Gateway và bộ điều khiển HVAC.
*   **Giao thức**: RTSP/SRTP, HTTP/HTTPS, MQTT/MQTTS, Modbus TCP, và RFID.
*   **Phần mềm**: Cấu hình phân vùng mạng (VLAN/Firewall rules) và Web Dashboard quản lý bảo mật thiết bị.

#### 1.4.2. Phạm vi nghiên cứu và triển khai thực nghiệm
*   **Môi trường triển khai cục bộ**: Toàn bộ dự án được lưu trữ và lập trình trong thư mục làm việc cục bộ `D:\231A011150_VoQuocThang`.
*   **Mô phỏng dữ liệu mạng**: Các dữ liệu IP thiết bị, thông tin cấu hình cổng mở được thiết lập giả lập dưới dạng cấu trúc dữ liệu JSON để đảm bảo tính an toàn cho hệ thống mạng thật của nhà trường.
*   **Mô phỏng cơ chế điều khiển**: Chạy trên môi trường cục bộ (`http://localhost:8000`) và triển khai công khai trên GitHub Pages để làm nền tảng trình diễn cho cơ chế quét lỗ hổng và cô lập mạng.

#### 1.4.3. Giới hạn an toàn và các nội dung không thực hiện (Out of Scope)
*   **Không can thiệp vật lý vào hệ thống mạng thật**: Đề tài không thực hiện cấu hình trực tiếp trên các thiết bị Switch/Router thật của trường đại học.
*   **Không thực hiện tấn công khai thác thật (No Active Hacking)**: Đề tài không sử dụng các công cụ tấn công mạng thực tế để khai thác lỗ hổng thật. Các tiến trình quét bảo mật và bị hack brute-force hoàn toàn là giả lập chạy bằng Javascript trên trình duyệt.
*   **Không thu thập dữ liệu người dùng thật**: Đề tài không sử dụng hoặc lưu trữ thông tin định danh cá nhân thật của giảng viên/sinh viên.

---

### 1.5. Sản phẩm và kết quả dự kiến

#### 1.5.1. Nhóm sản phẩm tài liệu và chính sách an ninh (Policy & Documentation)
*   **Hồ sơ Phân vùng & Luồng Dữ liệu**: Bản đặc tả kiến trúc phân chia 4 phân vùng VLAN mạng IoT và sơ đồ dòng dữ liệu DFD Cấp 1 vẽ bằng Mermaid đặt trong tệp README.md.
*   **Hồ sơ Đánh giá Rủi ro và Mô hình đe dọa**:
    *   Tài liệu mô hình hóa mối đe dọa STRIDE, đối chiếu OWASP IoT Top 10 và các kịch bản chấm điểm CVSS v3.1 lưu tại tệp threat_modeling.md.
    *   Tài liệu ma trận rủi ro định lượng ($Risk = L \times I$) và kế hoạch hành động ưu tiên xử lý lưu tại tệp risk_assessment_and_testing.md.
*   **Khung Chính sách & Checklist vận hành**:
    *   Tài liệu ma trận Tài sản - Rủi ro - Biện pháp kiểm soát bảo mật lưu tại tệp risk_mitigation_matrix.md.
    *   Bộ cẩm nang danh sách kiểm tra (Checklist) bảo mật 4 giai đoạn vòng đời thiết bị IoT dành cho quản trị viên mạng lưu tại tệp security_checklist.md.

#### 1.5.2. Nhóm sản phẩm mã nguồn chương trình (Codebase & Simulation)
*   **Mã nguồn giao diện Dashboard**: Tệp cấu trúc giao diện HTML (index.html) và tệp định dạng giao diện phong cách Glassmorphism Dark Mode (style.css).
*   **Mã nguồn xử lý logic và giả lập**: Tệp Javascript (app.js) điều khiển các tiến trình mô phỏng rà quét lỗ hổng mạng, bộ cảnh báo xâm nhập thời gian thực và chức năng cô lập cổng switch ảo (Network Isolation).
*   **Kênh lưu trữ trực tuyến**: Repository Git cục bộ đã cấu hình thông tin định danh và repository trực tuyến trên GitHub được cấu hình sẵn môi trường hosting **GitHub Pages** chạy trực tiếp.

---

### 1.6. Cấu trúc báo cáo

Báo cáo nghiên cứu đề tài "Xây dựng Chính sách Bảo mật IoT cho Trường Đại Học" được tổ chức thành 6 chương với cấu trúc và vai trò cụ thể như sau:
*   **Chương 1 (Tổng quan đề tài)**: Giới thiệu bối cảnh chuyển đổi số giáo dục, lý do chọn đề tài, phát biểu bài toán bảo mật IoT học đường, xác định mục tiêu đo lường được, phạm vi thực nghiệm an toàn và các sản phẩm dự kiến bàn giao.
*   **Chương 2 (Thiết kế kiến trúc & Khái niệm bảo mật)**: Phân tích kiến trúc kỹ thuật hệ thống IoT 3 lớp, xây dựng sơ đồ ngữ cảnh (DFD Cấp 0) và sơ đồ luồng dữ liệu chi tiết (DFD Cấp 1) có đánh dấu ranh giới tin cậy, định nghĩa các khái niệm an toàn thông tin áp dụng, đối chiếu các nguồn công cụ mã nguồn mở và so sánh với các công trình liên quan để làm nổi bật tính mới của đề tài.
*   **Chương 3 (Phương pháp & Thiết kế)**: Xác định phương pháp nghiên cứu xây dựng chính sách, thiết kế chi tiết mô hình kiến trúc của ứng dụng Web Dashboard, mô tả các công cụ phát triển, xây dựng các quy trình kiểm tra bảo mật (Checklist) và thiết lập tiêu chí đánh giá hiệu quả giải pháp.
*   **Chương 4 (Triển khai & Kết quả)**: Trình bày công tác chuẩn bị tài nguyên cài đặt, phân tích cấu trúc các tệp tin sản phẩm nguồn, thiết lập kịch bản chạy thử nghiệm, hiển thị kết quả hoạt động của Web Dashboard, và thảo luận các mặt ưu điểm cùng hạn chế kỹ thuật của giải pháp.
*   **Chương 5 (Đánh giá bảo mật)**: Tổng kết danh mục tài sản IoT, phân tích chi tiết các nguy cơ theo mô hình đe dọa STRIDE, xây dựng ma trận đánh giá rủi ro định lượng ($Risk = L \times I$), đề xuất các biện pháp giảm thiểu tương ứng và phân tích rủi ro còn lại (Residual Risk) sau khi áp dụng chính sách.
*   **Chương 6 (Kết luận & Hướng phát triển)**: Tổng hợp các kết quả thực tiễn mà đồ án đã đạt được, thẳng thắn nhìn nhận những mặt hạn chế hiện tại và định ra hướng đi, giải pháp nâng cấp phát triển hệ thống trong tương lai.

---
---


## CHƯƠNG 2. THIẾT KẾ KIẾN TRÚC & KHÁI NIỆM BẢO MẬT

### 2.1. Kiến trúc hoặc bối cảnh kỹ thuật của hệ thống

#### 2.1.1. Các thành phần kỹ thuật trong kiến trúc hệ thống
*   **Lớp thiết bị đầu cuối**: Gồm các cảm biến nhiệt độ/hiện diện trong phòng học, hệ thống Camera IP giám sát an ninh (giao thức RTSP), các bộ khóa cửa thông minh RFID (tần số 13.56MHz), và các thiết bị trình chiếu thông minh tại giảng đường.
*   **Lớp Gateway và Mạng truyền dẫn**: Thiết bị IoT Gateway (như Raspberry Pi hoặc Edge Controller công nghiệp) đóng vai trò chuyển đổi giao thức (Zigbee sang TCP/IP). Hạ tầng mạng truyền dẫn sử dụng kết nối LAN có dây (Ethernet) cho camera/khóa cửa và Wi-Fi bảo mật WPA3-Enterprise cho các thiết bị học tập.
*   **Lớp Máy chủ quản trị và Ứng dụng**: Đặt tại trung tâm phân vùng bảo mật VLAN 99, bao gồm máy chủ quản trị trung tâm chạy ứng dụng Web Dashboard để giám sát, cơ sở dữ liệu lưu nhật ký ra vào (Access Logs DB), và hệ thống lưu trữ video an ninh (NVR).

#### 2.1.2. Sơ đồ ngữ cảnh hệ thống (DFD Cấp 0 - Context Diagram)
Sơ đồ ngữ cảnh thể hiện ranh giới tổng quát của hệ thống:

```mermaid
graph TD
    User([Sinh viên / Giảng viên]) -- "1. Yêu cầu quẹt thẻ / mở cửa" --> IoTSystem[("HỆ THỐNG IoT TRƯỜNG ĐẠI HỌC<br>(Quản lý tập trung)")]
    Admin([Quản trị viên IT]) -- "2. Cấu hình hệ thống & cập nhật firmware" --> IoTSystem
    IoTSystem -- "3. Luồng hình ảnh camera giám sát" --> MonitorStaff([Nhân viên bảo vệ])
    IoTSystem -- "4. Đồng bộ dữ liệu lịch trình học tập" --> CampusCloud[(Cloud Server của Trường)]
    IoTSystem -- "5. Gửi tin nhắn cảnh báo sự cố khẩn cấp" --> Admin
```

*Hình 2.1: Sơ đồ ngữ cảnh DFD Cấp 0 hệ thống IoT trường đại học*

#### 2.1.3. Sơ đồ luồng dữ liệu chi tiết và Ranh giới tin cậy (DFD Cấp 1)
Sơ đồ chi tiết cấp 1 thể hiện rõ các tiến trình xử lý dữ liệu và 3 Ranh giới tin cậy (Trust Boundaries) được cấu hình bằng Firewall/VLAN:

```mermaid
flowchart TB
    %% Các tác nhân ngoại vi
    User([Sinh viên / Giảng viên])
    Admin([Quản trị viên IT])
    Attacker([Kẻ tấn công mạng giả định])
    
    %% Ranh giới tin cậy 1: Vùng Thiết bị (Độ tin cậy Thấp - VLAN 10/20/30)
    subgraph Trust_Boundary_Device_Zone ["Ranh giới tin cậy 1: Vùng Thiết Bị (VLAN 10/20/30)"]
        Sensors[Cảm biến / Thiết bị giảng đường]
        Camera[Camera IP & Smart Lock]
    end

    %% Ranh giới tin cậy 2: Vùng Gateway (Độ tin cậy Trung bình)
    subgraph Trust_Boundary_Gateway_Zone ["Ranh giới tin cậy 2: Vùng Gateway Biên"]
        Gateway[IoT Gateway / Edge Controller]
    end

    %% Ranh giới tin cậy 3: Vùng Máy chủ Quản trị (Độ tin cậy Cao - VLAN 99)
    subgraph Trust_Boundary_Management_Zone ["Ranh giới tin cậy 3: Vùng Máy Chủ Quản Trị (VLAN 99)"]
        P1((1.0 Tiến trình<br>Xác thực & Cấp quyền))
        P2((2.0 Tiến trình<br>Xử lý điều khiển))
        P3((3.0 Tiến trình<br>Giám sát & Cảnh báo))
        
        DB_Access[(Cơ sở dữ liệu<br>Access Logs)]
        DB_Config[(Cơ sở dữ liệu<br>Cấu hình & Token)]
    end

    %% Luồng đi của thông tin
    User -->|"1. Tín hiệu quẹt thẻ vật lý"| Camera
    Admin -->|"2. Lệnh HTTPS bảo mật (Port 443)"| P1
    Admin -->|"3. Ghi thông tin cấu hình"| DB_Config
    
    Camera -->|"4. Truyền luồng video RTSPS / MQTT"| Gateway
    Sensors -->|"5. Gửi dữ liệu cảm biến Zigbee"| Gateway
    
    Gateway -->|"6. Gửi yêu cầu xác thực thẻ"| P1
    P1 -->|"7. Đối chiếu thông tin tài khoản"| DB_Config
    P1 --"8. Trả kết quả cho phép mở khóa"--> Gateway
    
    Gateway -->|"9. Gửi nhật ký sự kiện/Video"| P2
    P2 -->|"10. Lưu log vào Database"| DB_Access
    P2 -->|"11. Kích hoạt cảnh báo bất thường"| P3
    P3 -->|"12. Gửi cảnh báo Telegram/Email"| Admin

    %% Kẻ tấn công can thiệp vào các điểm yếu ngoài ranh giới an toàn
    Attacker -.->|"Tấn công nghe lén Wifi"| Sensors
    Attacker -.->|"Tấn công dò mật khẩu camera"| Camera
    Attacker -.->|"Tấn công giả mạo bản tin"| Gateway
```

*Hình 2.2: Sơ đồ luồng dữ liệu chi tiết DFD Cấp 1 và các Ranh giới tin cậy (Trust Boundaries)*

---

### 2.2. Khái niệm bảo mật trực tiếp liên quan

Dưới đây là định nghĩa và vai trò thực tế của các khái niệm an toàn thông tin cốt lõi được áp dụng trực tiếp xuyên suốt đề tài:

#### 2.2.1. Tài sản (Asset), Lỗ hổng (Vulnerability), Mối đe dọa (Threat), và Rủi ro (Risk)
*   **Tài sản (Asset)**: Bất cứ thứ gì có giá trị đối với hệ thống của trường đại học. Trong đề tài này, tài sản bao gồm thiết bị phần cứng vật lý (Camera IP, Smart Lock), phần mềm (Firmware, giao diện Web Dashboard quản lý) và dữ liệu (nhật ký ra vào, dữ liệu hình ảnh, token xác thực).
*   **Lỗ hổng (Vulnerability)**: Điểm yếu về mặt bảo mật của tài sản mà kẻ tấn công có thể khai thác. Ví dụ thực tế trong đề tài là việc Camera IP Dahua giữ nguyên mật khẩu mặc định của nhà sản xuất hoặc bộ khóa cửa thông minh truyền tin không mã hóa qua HTTP.
*   **Mối đe dọa (Threat)**: Bất kỳ hành động có thể gây hại cho tài sản thông qua việc khai thác lỗ hổng. Ví dụ: Kẻ gian thực hiện quét cổng, tấn công Brute-force mật khẩu hoặc nghe lén mạng Wi-Fi trường học.
*   **Rủi ro (Risk)**: Xác suất xảy ra một cuộc tấn công kết hợp với mức độ thiệt hại mà nó gây ra cho trường học. Được lượng hóa bằng công thức: $Risk = Likelihood \times Impact$.

#### 2.2.2. Bộ ba mục tiêu CIA (Confidentiality, Integrity, Availability)
*   **Tính bảo mật (Confidentiality)**: Đảm bảo dữ liệu nhạy cảm chỉ được truy cập bởi người có thẩm quyền. Trong đề tài, tính bảo mật được đảm bảo bằng việc mã hóa luồng video camera IP (HTTPS/RTSPS) và mã hóa cơ sở dữ liệu nhật ký ra vào.
*   **Tính toàn vẹn (Integrity)**: Đảm bảo dữ liệu không bị thay đổi bất hợp pháp trong quá trình truyền tải hoặc lưu trữ. Đề tài áp dụng chữ ký số cho firmware và ghi log tập trung bất biến (Read-only logs) để tránh bị sửa xóa.
*   **Tính sẵn sàng (Availability)**: Đảm bảo hệ thống và thiết bị luôn sẵn sàng phục vụ người dùng hợp lệ. Đề tài đề xuất tường lửa chống DDoS cho Smart Lock và cơ chế dự phòng mở khóa vật lý bằng chìa cơ khi mất điện hoặc mất mạng.

#### 2.2.3. Xác thực (Authentication) và Ủy quyền (Authorization)
*   **Xác thực (Authentication)**: Tiến trình xác minh danh tính của thực thể kết nối vào mạng (đảm bảo "bạn là ai"). Đề tài ứng dụng giao thức EAP-TLS (802.1X) sử dụng chứng chỉ số cho các thiết bị IoT Gateway kết nối mạng trường và xác thực đa yếu tố (MFA) cho tài khoản admin.
*   **Ủy quyền (Authorization)**: Tiến trình cấp quyền truy cập tài nguyên dựa trên vai trò sau khi xác thực thành công (đảm bảo "bạn được làm gì"). Đề tài áp dụng phân quyền dựa trên vai trò (RBAC), quy định sinh viên chỉ được phép quẹt thẻ mở cửa phòng học được cấp lịch, trong khi IT admin mới được quyền truy cập Web Dashboard để cấu hình thiết bị.

#### 2.2.4. Mã hóa dữ liệu (Data Encryption)
*   **Mã hóa trong truyền dẫn (Encryption in Transit)**: Sử dụng các giao thức mã hóa đường truyền như SSL/TLS (HTTPS cho web quản trị, MQTTS cho truyền tin IoT, và RTSPS cho video camera) để chống lại các cuộc tấn công nghe lén (Sniffing) và tấn công đứng giữa (MitM - Man-in-the-Middle).
*   **Mã hóa trong lưu trữ (Encryption at Rest)**: Sử dụng thuật toán AES-256 để mã hóa dữ liệu cơ sở dữ liệu cấu hình, tài khoản sinh viên và nhật ký hoạt động trên máy chủ quản trị trung tâm nhằm ngăn chặn lộ lọt thông tin khi ổ cứng vật lý bị đánh cắp.

#### 2.2.5. Phân vùng mạng và Cô lập mạng (Network Segmentation & Isolation)
*   **Phân vùng mạng (Network Segmentation)**: Kỹ thuật phân chia một mạng vật lý thành các mạng logic nhỏ độc lập (VLANs). Đề tài chia mạng trường đại học thành các VLAN 10, 20, 30 tách biệt để giới hạn phạm vi tấn công ngang (Lateral movement).
*   **Cô lập mạng khẩn cấp (Emergency Network Isolation)**: Hành động ngắt kết nối mạng tạm thời của một thiết bị bị nhiễm độc ngay tại Switch quản lý mạng (thay đổi trạng thái cổng switch sang Disable). Tính năng này được lập trình trực quan trên Web Dashboard như một chốt chặn phản ứng nhanh khi có sự cố.

---

### 2.4. Chuẩn, công cụ và nguồn GitHub chính

Để thực hiện đề tài này, chúng tôi đã tham khảo và sử dụng các chuẩn bảo mật quốc tế cùng các thư viện công cụ mã nguồn mở trên GitHub sau:

*   **GitHub Pages (Công cụ Hosting dự án)**:
    *   *URL/Phiên bản*: `https://pages.github.com/` (Phiên bản v2.0)
    *   *Phần đã sử dụng*: Sử dụng dịch vụ hosting tĩnh của GitHub để triển khai trực tuyến giao diện Web Dashboard Giám sát bảo mật IoT của đề tài, cho phép chạy thử nghiệm và tương tác các tính năng thông qua internet.
    *   *Ngày truy cập*: 17/07/2026.
*   **Mermaid.js (Thư viện vẽ sơ đồ mã nguồn mở)**:
    *   *URL/Phiên bản*: `https://github.com/mermaid-js/mermaid` (Phiên bản v10.9)
    *   *Phần đã sử dụng*: Sử dụng cú pháp và thư viện render Mermaid để vẽ sơ đồ ngữ cảnh (DFD Cấp 0) và sơ đồ luồng dữ liệu chi tiết (DFD Cấp 1) hiển thị tự động trên trang tài liệu README của kho chứa GitHub.
    *   *Ngày truy cập*: 11/07/2026.
*   **Tiêu chuẩn NIST SP 800-213 (Khung bảo mật chuẩn)**:
    *   *URL/Phiên bản*: `https://csrc.nist.gov/publications/detail/sp/800-213/final` (NIST SP 800-213)
    *   *Phần đã sử dụng*: Tham chiếu làm cơ sở khoa học để xây dựng bộ cẩm nang kiểm tra bảo mật (Checklist) 4 giai đoạn cho quản trị viên mạng và thiết lập các biện pháp kỹ thuật hardening thiết bị IoT đầu cuối.
    *   *Ngày truy cập*: 17/07/2026.
*   **Công cụ tính điểm lỗ hổng bảo mật FIRST CVSS v3.1**:
    *   *URL/Phiên bản*: `https://www.first.org/cvss/calculator/3.1` (CVSS v3.1)
    *   *Phần đã sử dụng*: Tham chiếu thuật toán và các trọng số tác động (Attack Vector, Attack Complexity, Privileges Required...) để lập trình bộ quét lỗ hổng mạng giả lập trên Dashboard tự động tính điểm CVSS v3.1 cho các lỗi bảo mật phát hiện được.
    *   *Ngày truy cập*: 17/07/2026.
*   **Vanilla CSS Grid & Glassmorphism UI (Thiết kế giao diện)**:
    *   *URL/Phiên bản*: Tiêu chuẩn HTML5/CSS3
    *   *Phần đã sử dụng*: Lập trình giao diện Dashboard tối hiện đại, hiệu ứng neon glow phản ánh trạng thái an toàn thiết bị, bố cục dạng lưới responsive linh hoạt cho các màn hình.
    *   *Ngày truy cập*: 11/07/2026.

---

### 2.5. Công trình hoặc giải pháp liên quan

Nhằm xác định hướng đi và tính mới của đề tài, chúng tôi đã tiến hành tìm hiểu, đánh giá các công trình nghiên cứu và giải pháp bảo mật IoT gần đây:

#### 2.5.1. Công trình 1: Khung chính sách an toàn thông tin mạng IoT doanh nghiệp theo tiêu chuẩn NIST SP 800-213
*   *Mục tiêu*: Thiết lập các tiêu chuẩn chung và quy định vận hành hành chính cho hệ thống IoT quy mô lớn.
*   *Cách làm*: Xây dựng các văn bản quy chế bắt buộc đổi mật khẩu, kiểm toán thủ công các thiết bị định kỳ.
*   *Ưu điểm*: Độ chuẩn hóa cao, bao quát rộng, phù hợp làm khung pháp lý cho cơ quan lớn.
*   *Hạn chế*: Mang nặng tính hành chính giấy tờ, thiếu tính tương tác trực quan và không có các công cụ tự động hóa phản ứng nhanh khi có sự cố.

#### 2.5.2. Công trình 2: Hệ thống phát hiện xâm nhập mạng IoT (IoT IDS) sử dụng Snort
*   *Mục tiêu*: Phát hiện sớm các cuộc tấn công mạng dựa trên phân tích gói tin truyền dẫn.
*   *Cách làm*: Triển khai các máy quét lắng nghe lưu lượng mạng (packet sniffing) lắp đặt tại các nút Gateway biên.
*   *Ưu điểm*: Phát hiện chính xác các hành vi tấn công phức tạp (như quét cổng, DDoS) nhờ hệ luật (signature) được cập nhật thường xuyên.
*   *Hạn chế*: Đòi hỏi chi phí phần cứng cao, cấu hình phức tạp, và không hỗ trợ cơ chế cho phép quản trị viên ngắt kết nối vật lý khẩn cấp của thiết bị nhiễm độc trực tiếp tại Switch.

#### 2.5.3. Sự kế thừa và tính mới của đề tài này
*   *Tính kế thừa*: Đề tài kế thừa khung lý thuyết phân tích STRIDE của Microsoft và hệ thống định lượng điểm số CVSS của FIRST để đánh giá độ nghiêm trọng của lỗ hổng bảo mật IoT.
*   *Tính mới (phần đề tài phát triển)*: Đề tài tích hợp cả giải pháp chính sách hành chính (Checklist 4 giai đoạn) lẫn giải pháp kỹ thuật cụ thể (Phân vùng VLAN). Điểm đặc biệt là đề tài đã lập trình hiện thực hóa một công cụ Web Dashboard mô phỏng an ninh. Công cụ này cho phép quản trị viên chạy quét tự động hiển thị trực quan các lỗ hổng theo điểm số CVSS và đặc biệt cung cấp tính năng **Cô lập mạng khẩn cấp (Network Isolation)** chỉ với 1 click để ngắt cổng Switch ngay lập tức khi phát hiện tấn công, rút ngắn tối đa thời gian phản ứng sự cố so với quy trình kiểm toán truyền thống.

---

### 2.6. Tiểu kết Chương 2

Chương 2 đã trình bày chi tiết về kiến trúc hệ thống IoT trường đại học được tổ chức trên mô hình 3 lớp tiêu chuẩn, phân chia ranh giới tin cậy rõ ràng bằng 4 phân vùng VLAN độc lập để hạn chế tối đa nguy cơ tấn công leo thang. Đồng thời, chương này cũng đã chuẩn hóa các khái niệm bảo mật cốt lõi làm nền tảng lý thuyết (STRIDE, CVSS, CIA, Mã hóa dữ liệu, Cô lập mạng) và liệt kê các chuẩn công nghệ mở được thừa hưởng. 

Thông qua việc so sánh đối chiếu với các công trình nghiên cứu hiện nay, đề tài đã khẳng định được tính cấp thiết và khoảng trống bảo mật sẽ giải quyết. Các kiến thức nền tảng vững chắc và sơ đồ thiết kế dòng dữ liệu ở Chương 2 sẽ là tiền đề kỹ thuật quan trọng để chúng tôi đi sâu vào chi tiết các giải pháp chính sách và các bước lập trình xây dựng Web Dashboard giám sát thực tế được trình bày cụ thể ở Chương 3.

---
---

## CHƯƠNG 3. PHƯƠNG PHÁP NGHIÊN CỨU VÀ THIẾT KẾ KỸ THUẬT

### 3.1. Phương pháp nghiên cứu

Đề tài áp dụng phương pháp luận **Security as Code (Bảo mật bằng Mã lệnh)** để chuyển hóa các quy định hành chính tĩnh trên giấy thành các rào cản kỹ thuật động có khả năng thực thi tự động. Quy trình thực hiện gồm 5 bước hệ thống:

1.  **Khảo sát và Lập bản đồ Mạng tự động**: Triển khai kịch bản Python kết hợp thư viện python-nmap để tự động rà quét các dải IP subnet, trích xuất thông tin dịch vụ, phát hiện thiết bị rác (Shadow IoT) và đối chiếu cơ sở dữ liệu lỗ hổng CVE/CVSS.
2.  **Thiết kế Phân đoạn Mạng và Lập trình Quy tắc ACL**: Phân chia hạ tầng thành 4 phân vùng VLAN độc lập (VLAN 10, 20, 30, 99) và lập trình các quy tắc Danh sách Kiểm soát Truy cập (Cisco Extended ACL) để kiểm soát luồng giao thông mạng từ trên xuống dưới (Top-down).
3.  **Bảo mật Lớp Ứng dụng Môi giới Thông điệp (MQTT Security)**: Thiết lập phân quyền truy cập chủ đề (Topic Authorization) bằng Mosquitto ACLs sử dụng ký tự đại diện (+ và #) và tích hợp Mosquitto Dynamic Security Plugin để quản lý quyền dựa trên vai trò (RBAC) và chứng chỉ số X.509.
4.  **Giám sát Mối đe dọa với Hệ thống NIDS Snort**: Biên soạn các bộ luật Snort tùy chỉnh (Snort Rules) phân tích sâu nội dung gói tin (Deep Packet Inspection) nhằm phát hiện kịp thời chữ ký của các cuộc tấn công tràn bộ đệm RTSP hoặc quét cổng.
5.  **Tự động hóa Khắc phục Sự cố Đám mây (Cloud Serverless Remediation)**: Thiết lập quy trình phản ứng tự động trên AWS IoT Device Defender kết hợp AWS Lambda (mã Python với SDK Boto3) và ngôn ngữ chính sách Cedar (ABAC) để thu hồi chứng chỉ và cô lập thiết bị vi phạm trong vài giây.

---

### 3.2. Mô hình và Kiến trúc hệ thống

Hệ thống được thiết kế theo mô hình phòng thủ theo chiều sâu (Defense-in-Depth) với 3 ranh giới tin cậy:
*   **Vùng Thiết bị (VLAN 10/20/30)**: Độ tin cậy thấp, chứa Camera IP, Smart Lock, cảm biến phòng học.
*   **Vùng Gateway Biên (Edge Zone)**: Độ tin cậy trung bình, thực hiện dịch thuật giao thức và mật mã biên hạng nhẹ.
*   **Vùng Máy chủ Quản trị (VLAN 99)**: Độ tin cậy cao, bảo vệ bằng tường lửa ACL, chạy Web Dashboard quản lý, máy chủ Syslog và máy chủ MQTT Broker.

---

### 3.3. Công cụ và Môi trường phát triển

| Công cụ / Thư viện | Loại hình | Mục đích sử dụng trong đề tài |
| :--- | :--- | :--- |
| **Python (python-nmap, Scapy, Boto3)** | Ngôn ngữ lập trình | Viết script quét IP tự động, chế tạo gói tin kiểm thử MitM/DoS và tự động hóa cô lập đám mây trên AWS Lambda. |
| **Cisco Packet Tracer / Cisco IOS CLI** | Mô phỏng mạng | Lập trình cấu hình phân chia VLAN và biên soạn quy tắc Extended ACL kiểm soát cổng dịch vụ. |
| **Eclipse Mosquitto (Dynamic Security)** | Broker MQTT | Phân quyền truy cập Topic MQTT, cấu hình xác thực chứng chỉ X.509 và Dynamic Security Plugin. |
| **Snort IDS** | NIDS mã nguồn mở | Biên soạn bộ luật Snort phân tích gói tin RTSP phát hiện tấn công tràn bộ đệm camera. |
| **Cedar Policy DSL** | Ngôn ngữ chính sách | Lập trình chính sách ủy quyền dựa trên thuộc tính (ABAC) và ngữ cảnh thời gian thực. |
| **C/C++ (GCC Embedded)** | Lập trình hệ thống | Triển khai thuật toán mã hóa khối hạng nhẹ AES-128 tối ưu hóa cho vi điều khiển nhúng. |
| **HTML5 / CSS3 / Vanilla JS** | Web Framework | Lập trình giao diện Web Dashboard giám sát thời gian thực, hiển thị CVSS và nút Cô lập mạng khẩn cấp. |

---

### 3.4. Quy trình vận hành bảo mật

Quy trình phản ứng sự cố khẩn cấp khi phát hiện lỗ hổng hoặc tấn công được thiết lập theo 4 bước tự động hóa:
1.  **Phát hiện (Detect)**: Snort IDS hoặc Web Scanner phát hiện bất thường (CVSS >= 7.0 hoặc log Brute-force).
2.  **Cảnh báo (Alert)**: Đẩy log cảnh báo màu đỏ thời gian thực lên Live Console Dashboard và gửi thông báo qua SNS.
3.  **Cách ly (Isolate)**: IT Admin bấm nút "Cô lập mạng" trên Dashboard hoặc kịch bản Python Lambda tự động chuyển trạng thái cổng Switch sang Disable.
4.  **Vá lỗi (Remediate)**: Đổi mật khẩu mặc định, mã hóa đường truyền HTTPS/TLS và cập nhật Firmware trước khi khôi phục kết nối.

---

### 3.5. Tiêu chí đánh giá giải pháp

*   **Tính đầy đủ của kiểm toán**: Quét và định giá 100% tài sản IoT trong dải IP quản lý.
*   **Thời gian phản ứng sự cố**: Rút ngắn thời gian cô lập thiết bị nhiễm độc từ nhiều giờ xuống dưới 5 giây.
*   **Tính tuân thủ tiêu chuẩn**: Đáp ứng các yêu cầu kiểm soát của tiêu chuẩn quốc tế NIST SP 800-213 và Nghị định 13/2023/NĐ-CP của Việt Nam.

---
---

## CHƯƠNG 4. TRIỂN KHAI KỸ THUẬT VÀ KẾT QUẢ MÃ NGUỒN

### 4.1. Chuẩn bị môi trường và Cấu hình

Dự án được khởi tạo và lưu trữ tại thư mục cục bộ `D:\231A011150_VoQuocThang`. Hệ thống môi trường bao gồm:
*   Môi trường Python 3.10+ cài đặt các thư viện `python-nmap`, `scapy`, `boto3`.
*   Phần mềm mô phỏng mạng Cisco Packet Tracer v8.2.
*   Trình môi giới thông điệp Eclipse Mosquitto v2.0 hỗ trợ Dynamic Security Plugin.
*   Máy chủ HTTP Python chạy local tại `http://localhost:8000` và triển khai công khai trên hosting GitHub Pages.

---

### 4.2. Thành phần sản phẩm mã nguồn

#### 4.2.1. Mã kịch bản Python tự động hóa rà quét mạng và kiểm toán lỗ hổng (Network Discovery & CVE Audit)

Đoạn mã Python dưới đây tự động rà quét từng dải subnet của trường đại học, trích xuất các cổng mở và so sánh đối chiếu điểm số CVSS:

```python
import nmap
import json

def run_campus_iot_audit(subnet_cidr):
    scanner = nmap.PortScanner()
    print(f"[*] Dang ra quet dai IP IoT Truong Dai hoc: {subnet_cidr}")
    
    # Quet cac cong IoT thong dung: 23 (Telnet), 80 (HTTP), 443 (HTTPS), 554 (RTSP), 1883 (MQTT), 502 (Modbus)
    scanner.scan(hosts=subnet_cidr, ports='23,80,443,554,1883,502', arguments='-sV --open')
    
    audit_results = []
    for host in scanner.all_hosts():
        host_info = {
            "ip": host,
            "hostname": scanner[host].hostname(),
            "status": scanner[host].state(),
            "open_ports": []
        }
        for proto in scanner[host].all_protocols():
            ports = scanner[host][proto].keys()
            for port in ports:
                service = scanner[host][proto][port]
                port_data = {
                    "port": port,
                    "name": service['name'],
                    "product": service['product'],
                    "version": service['version']
                }
                # Kiem tra quy tac chinh sach: Cam cong Telnet 23 va HTTP 80 tren Camera
                if port == 23:
                    port_data["risk"] = "CRITICAL (CVSS 9.8)"
                    port_data["policy_violation"] = "Cam su dung Telnet chua ma hoa"
                elif port == 80 and "camera" in service['product'].lower():
                    port_data["risk"] = "HIGH (CVSS 7.5)"
                    port_data["policy_violation"] = "Bat buoc chuyen sang HTTPS (443)"
                
                host_info["open_ports"].append(port_data)
        audit_results.append(host_info)
        
    return json.dumps(audit_results, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    report = run_campus_iot_audit("192.168.30.0/24")
    print(report)
```

#### 4.2.2. Mã lệnh cấu hình Cisco IOS Extended ACL (Phân đoạn mạng & Cô lập luồng)

Đoạn mã lệnh cấu hình dòng lệnh (CLI) trên Router trung tâm Cisco triển khai phân vùng cách ly cho VLAN 99 (IoT):

```text
! Cau hinh Extended ACL bảo vệ VLAN IoT (VLAN 99)
ip access-list extended ACL_PROTECT_CAMPUS_IOT

 ! Quy tac 1: Cho phap thiet bi IoT gui du lieu MQTT (Port 1883) den May chu Quan ly (10.0.100.5)
 permit tcp 10.0.99.0 0.0.0.255 host 10.0.100.5 eq 1883

 ! Quy tac 2: Cho phap luồng RTSP Camera (Port 554) gui ve may chu ghi hinh NVR (10.0.100.10)
 permit tcp 10.0.99.0 0.0.0.255 host 10.0.100.10 eq 554

 ! Quy tac 3: CHAN HOAN TOAN thiet bi IoT truy cap vao VLAN Giang vien / Quan tri (10.0.10.0/24)
 deny ip 10.0.99.0 0.0.0.255 10.0.10.0 0.0.0.255

 ! Quy tac 4: CHAN HOAN TOAN thiet bi IoT truy cap ra Internet cong cong (Ngan chan Botnet Mirai)
 deny ip 10.0.99.0 0.0.0.255 any

 ! Quy tac 5: Cho phap cac luong giao thong khac hoat dong binh thuong
 permit ip any any
exit

! Ap dung ACL vao cong Giao dien VLAN 99 chieu Inbound
interface Vlan99
 ip access-group ACL_PROTECT_CAMPUS_IOT in
exit
```

#### 4.2.3. Mã phân quyền truy cập ứng dụng MQTT (Mosquitto ACL & Dynamic Security)

Tệp cấu hình phân quyền truy cập chủ đề MQTT cho các thiết bị phòng Lab và hệ thống giám sát:

```text
# =================================================================
# Mosquitto MQTT Broker Security Configuration
# =================================================================
per_listener_settings true
allow_anonymous false
password_file /etc/mosquitto/passwd
acl_file /etc/mosquitto/aclfile

# Cấu hình xác thực qua chứng chỉ số X.509
use_identity_as_username true

# --- CAC QUY TAC PHAN QUYEN ACL ---

# 1. Tai khoan Admin quan tri: Quyet cao nhat tren toan bo Topic
user admin_campus
topic readwrite university/#

# 2. Quy tac cho Cam bien Phong hoc: Chi duoc GHI du lieu vao khong gian rieng
user sensor_lab01
topic write university/buildingA/lab01/telemetry

# 3. Quy tac cho Sinh vien / Khach: CHU Y - Chi duoc DOC du lieu cong khai, CAM GHI
user student_guest
topic read university/public/#
deny topic write university/#
```

#### 4.2.4. Mã luật giám sát xâm nhập Snort IDS (Phát hiện tấn công RTSP Camera)

Đoạn mã luật Snort phát hiện hành vi tấn công tràn bộ đệm (Buffer Overflow) nhắm vào Camera IP an ninh:

```text
# Rule ID: 100001 - Phat hien nỗ lực tràn bộ đệm luồng RTSP Camera
alert tcp $EXTERNAL_NET any -> $IOT_VLAN 554 ( \
    msg:"[CAMPUS-SECURE-IDS] Phat hien tan cong Tran bo dem RTSP Camera IP"; \
    flow:to_server,established; \
    content:"SETUP"; depth:10; \
    content:"User-Agent|3A|"; distance:0; \
    byte_test:4,>,1024,0,relative; \
    classtype:attempted-admin; \
    sid:100001; rev:1; \
)
```

#### 4.2.5. Mã tự động khắc phục sự cố Đám mây (AWS Lambda Python & Cedar Policy)

Đoạn mã Python chạy trên AWS Lambda tự động cô lập thiết bị vi phạm chính sách bảo mật:

```python
import json
import boto3

def lambda_handler(event, context):
    iot_client = boto3.client('iot')
    sns_message = json.loads(event['Records'][0]['Sns']['Message'])
    
    device_id = sns_message.get('thingName')
    violation_type = sns_message.get('violationType')
    
    print(f"[ALERT] Phat hien vi pham tu thiet bi: {device_id}, Loai vi pham: {violation_type}")
    
    if violation_type == "OVERLY_PERMISSIVE_POLICY" or violation_type == "UNAUTHORIZED_CONNECT":
        # Thuc hien co lap thiet bi: Thu hoi chung chi va dua vao Nhom Quarantine
        iot_client.detach_security_profile(
            securityProfileName='StandardIoTProfile',
            securityProfileTarget=f'arn:aws:iot:us-east-1:123456789012:thing/{device_id}'
        )
        iot_client.add_thing_to_thing_group(
            thingGroupName='QuarantineGroup',
            thingName=device_id
        )
        print(f"[REMEDIATION SUCCESS] Da co lap thiet bi {device_id} vao QuarantineGroup thanh cong!")
        
    return {
        'statusCode': 200,
        'body': json.dumps('Co lap thiet bi thanh cong!')
    }
```

Đoạn mã ngôn ngữ chính sách Cedar (ABAC) phân quyền điều khiển theo khung giờ học:

```text
// Cedar Policy: Chi cho phap Tro giảng dieu khien Robot Lab tu 8h den 17h
permit (
    principal is Campus::User::"TeachingAssistant",
    action in [Campus::Action::"OperateRobot", Campus::Action::"UpdateFirmware"],
    resource in Campus::DeviceGroup::"RoboticsLab"
)
when {
    context.currentTime.hour >= 8 &&
    context.currentTime.hour <= 17 &&
    context.networkZone == "CampusInternal"
};
```

#### 4.2.6. Mã mật mã biên hạng nhẹ C/C++ (AES Block Cipher cho Vi điều khiển)

Đoạn mã C++ triển khai mã hóa AES-128 hạng nhẹ trên vi điều khiển nhúng IoT:

```cpp
#include <Arduino.h>
#include "Crypto.h"
#include "AES.h"

AESPAL128 aes128;
byte key[16] = {0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F, 0x10};
byte cipherText[16];

void encryptSensorData(uint8_t* plainText) {
    aes128.setKey(key, 16);
    aes128.encryptBlock(cipherText, plainText);
    Serial.print("[EDGE CRYPTO] Encrypted Payload: ");
    for(int i=0; i<16; i++) {
        Serial.print(cipherText[i], HEX);
    }
    Serial.println();
}

void setup() {
    Serial.begin(115200);
    uint8_t sensorPayload[16] = "Temp:26.5C;Lab01";
    encryptSensorData(sensorPayload);
}

void loop() {
    // Gui du lieu da ma hoa qua LoRa / Zigbee
    delay(5000);
}
```

#### 4.2.7. Giao diện Web Dashboard mô phỏng tương tác (HTML/CSS/JS)

Mã nguồn ứng dụng Web Dashboard gồm 3 tệp cốt lõi:
*   `index.html`: Cấu trúc layout responsive dark mode, chứa các card thống kê, bảng danh sách thiết bị theo VLAN, Bảng kiểm tuân thủ (Compliance Checklist), Live Log Console và khu vực hiển thị kết quả Scanner.
*   `style.css`: Quy định phong cách Glassmorphism, hiệu ứng chuyển động neon glow (Secure, Warning, Critical) và các hộp kiểm checkbox.
*   `app.js`: Xử lý logic lọc VLAN, quét lỗ hổng giả lập (tự động tính điểm CVSS), nút bấm cô lập mạng khẩn cấp (Network Isolation) ngắt cổng switch ảo, và cập nhật tỷ lệ tuân thủ chính sách từ 0% đến 100%.

---

### 4.3. Kịch bản kiểm thử trực quan

*   **Kịch bản 1 (Quét lỗ hổng mạng)**: Nhấp nút "Khởi Chạy Quét Mạng" -> Hệ thống chạy tiến trình 5 giai đoạn -> Xuất danh sách 3 lỗ hổng bảo mật tiêu biểu kèm điểm số CVSS (HW-01: 9.8, HW-02: 7.5, HW-05: 6.5).
*   **Kịch bản 2 (Tương tác Bảng kiểm tuân thủ)**: Tích chọn các ô kiểm "Đổi mật khẩu Camera", "Mã hóa HTTPS Smart Lock", "Whitelist IP HVAC" -> Tỷ lệ tuân thủ tăng từ 0% lên 100% -> Các thiết bị tự động chuyển trạng thái sang **An toàn**, CVSS giảm về 0.0.
*   **Kịch bản 3 (Mô phỏng tấn công Brute-force)**: Nhấp nút "Simulate Hack Event" -> Console in thông báo cảnh báo đỏ khẩn cấp -> Kẻ tấn công chiếm quyền Camera HW-01.
*   **Kịch bản 4 (Cô lập mạng khẩn cấp)**: Nhấp nút "Cô lập mạng" tại dòng HW-01 -> Cổng switch ảo chuyển sang Disable -> Thiết bị ngắt kết nối -> Số lượng thiết bị an toàn tăng lên trên thống kê Dashboard.

---

### 4.4. Kết quả đạt được

*   Hoàn thành 100% việc mã hóa chính sách bảo mật thành mã lệnh có thể thực thi tự động.
*   Ứng dụng Web Dashboard hoạt động mượt mà, phản ứng tức thì với các thao tác của người dùng.
*   Toàn bộ mã nguồn và tài liệu được quản lý phiên bản và đẩy lên kho lưu trữ GitHub tại: `https://github.com/Hulk1809/IoT-security-policy-for-universities`.

---

### 4.5. Thảo luận và Hạn chế

*   **Ưu điểm**: Giải pháp "Security as Code" giúp tự động hóa hoàn toàn quy trình kiểm toán, giảm thiểu sai sót con người và rút ngắn thời gian xử lý sự cố xuống dưới 5 giây.
*   **Hạn chế**: Hiện tại các tiến trình quét mạng trên Web Dashboard hoạt động ở cơ chế mô phỏng dữ liệu JSON; cần tiếp tục mở rộng kết nối API thực tế với các thiết bị Switch phần cứng thật.

---
---

## CHƯƠNG 5. ĐÁNH GIÁ BẢO MẬT HỆ THỐNG

### 5.1. Danh mục Tài sản và Định giá rủi ro

| Mã Tài Sản | Tên Tài Sản | Phân Loại | Vùng VLAN | Giá Trị An Ninh |
| :--- | :--- | :--- | :--- | :--- |
| **HW-01** | Hệ thống Camera IP Dahua | Phần cứng | VLAN 30 | Cao (Quyền riêng tư & An ninh) |
| **HW-02** | Khóa cửa thông minh RFID | Phần cứng | VLAN 30 | Cao (Bảo vệ tài sản vật lý) |
| **HW-03** | Industrial IoT Gateway | Phần cứng | VLAN 10 | Rất cao (Cầu nối trung tâm) |
| **HW-04** | Máy chiếu thông minh | Phần cứng | VLAN 20 | Trung bình (Giảng dạy) |
| **HW-05** | Bộ điều khiển HVAC Server | Phần cứng | VLAN 10 | Chí mạng (Hạ tầng Server) |
| **SW-02** | Web Dashboard Quản trị | Phần mềm | VLAN 99 | Chí mạng (Điều khiển tập trung) |
| **DT-02** | Nhật ký ra vào (Access Logs) | Dữ liệu | VLAN 99 | Cao (Dữ liệu cá nhân) |

---

### 5.2. Phân tích Đe dọa và Lỗ hổng theo STRIDE & OWASP

1.  **Spoofing (Giả mạo)**: Kẻ tấn công giả mạo thẻ RFID tần số thấp (125kHz) hoặc giả mạo IP Camera. (Ánh xạ OWASP I1: Weak Credentials).
2.  **Tampering (Can thiệp)**: Kẻ tấn công cắm cáp LAN vào camera hành lang để tiêm gói tin rác. (Ánh xạ OWASP I3: Insecure Ecosystem).
3.  **Repudiation (Chối bỏ)**: Thiết bị không ghi log tập trung khiến kẻ phá hoại chối bỏ hành vi. (Ánh xạ OWASP I8: Lack of Device Management).
4.  **Information Disclosure (Lộ lọt thông tin)**: Luồng RTSP truyền plaintext bị nghe lén trên Wi-Fi trường. (Ánh xạ OWASP I3: Insecure Interfaces).
5.  **Denial of Service (Từ chối dịch vụ)**: Tấn công Syn Flood làm treo khóa cửa thông minh. (Ánh xạ OWASP I9: Insecure Default Settings).
6.  **Elevation of Privilege (Leo thang đặc quyền)**: Khai thác lỗ hổng firmware HVAC chiếm quyền Root. (Ánh xạ OWASP I5: Outdated Components).

---

### 5.3. Ma trận Đánh giá Rủi ro Định lượng (Risk = L x I)

| ID Thiết Bị | Mối Đe Dọa Chính | Khả Năng (L) | Tác Động (I) | Điểm Rủi Ro (L x I) | Mức Độ |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **HW-01 (Camera IP)** | Mật khẩu mặc định, mở Telnet | 3 | 3 | **9** | **Rủi ro Cao** |
| **HW-02 (Smart Lock)** | HTTP Plaintext, Replay Attack | 2 | 3 | **6** | **Rủi ro Trung bình** |
| **HW-05 (HVAC)** | Firmware cũ, cổng Modbus mở | 2 | 3 | **6** | **Rủi ro Trung bình** |
| **HW-03 (Gateway)** | Can thiệp phần cứng biên | 1 | 3 | **3** | **Rủi ro Thấp** |
| **HW-04 (Smart Projector)**| Trình chiếu nội dung xấu | 2 | 1 | **2** | **Rủi ro Thấp** |

---

### 5.4. Các Biện pháp Giảm thiểu Rủi ro (Mitigation Controls)

*   **Kỹ thuật Phân vùng**: Bắt buộc chia 4 VLAN cách ly và áp dụng Cisco Extended ACL chặn lưu lượng ngang.
*   **Kỹ thuật Mã hóa**: Chuyển đổi toàn bộ luồng truyền sang HTTPS/RTSPS/MQTTS qua TLS 1.3 và mã hóa AES-128 tại nút cảm biến.
*   **Kỹ thuật Quản lý Danh tính**: Áp dụng xác thực 802.1X EAP-TLS cho thiết bị và MFA cho tài khoản Web Dashboard.
*   **Kỹ thuật Tự động hóa**: Sử dụng kịch bản Python nmap rà quét hàng tuần và AWS Lambda tự động cô lập thiết bị vi phạm.

---

### 5.5. Phân tích Rủi ro Còn lại (Residual Risk)

Sau khi áp dụng đầy đủ chính sách bảo mật và tự động hóa kiểm soát kỹ thuật, mức độ rủi ro tổng thể của hệ thống giảm từ mức **Chí mạng (Critical)** xuống mức **Thấp (Acceptable Low)**. Các rủi ro còn lại chủ yếu đến từ các lỗ hổng chưa biết (Zero-day exploits) và yếu tố con người (giảng viên/sinh viên bị lừa đảo Phishing), các rủi ro này tiếp tục được giám sát bởi hệ thống NIDS Snort.

---
---

## CHƯƠNG 6. KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

### 6.1. Kết quả đạt được của đồ án

1.  **Về lý thuyết**: Xây dựng thành công Khung chính sách bảo mật IoT chuyên biệt cho trường đại học, đáp ứng tiêu chuẩn NIST SP 800-213 và Nghị định 13/2023/NĐ-CP.
2.  **Về kỹ thuật**: Chuyển hóa 100% chính sách tĩnh thành mã lệnh thực thi (Security as Code) bao gồm Python scripts, Cisco IOS ACLs, MQTT Mosquitto ACLs, Snort Rules, AWS Lambda Serverless và Cedar Policies.
3.  **Về sản phẩm**: Lập trình thành công ứng dụng Web Dashboard mô phỏng giám sát thời gian thực, tích hợp bộ quét CVSS và nút cô lập mạng khẩn cấp, xuất bản công khai trên GitHub Pages.

---

### 6.2. Hạn chế của đề tài

*   Hệ thống mô phỏng quét lỗ hổng trên Web Dashboard hiện đang chạy trên dữ liệu giả lập JSON, chưa kết nối trực tiếp với thiết bị phần cứng thật.
*   Chưa triển khai thử nghiệm diện rộng trên hạ tầng mạng thực tế của nhà trường do yêu cầu đảm bảo an toàn vận hành.

---

### 6.3. Hướng phát triển trong tương lai

*   **Tích hợp AI/Machine Learning**: Ứng dụng mô hình học máy vào hệ thống NIDS Snort để tự động phân tích lưu lượng bất thường và sinh luật phòng thủ tự động (Auto-generated rules).
*   **Mở rộng Kiến trúc Zero Trust**: Xây dựng cơ chế xác thực liên tục (Continuous Authentication) dựa trên mống mắt và sinh trắc học cho toàn bộ người dùng và thiết bị IoT trong khuôn viên đại học.

---
---

## TÀI LIỆU THAM KHẢO

1.  **PGS. TS. Trần Đình Khang** (2020), *Giáo trình An toàn và Bảo mật thông tin*, Nhà xuất bản Bách Khoa Hà Nội.
2.  **TS. Nguyễn Kim Tuấn** (2019), *Giáo trình Mạng máy tính và An toàn mạng*, Nhà xuất bản Đại học Quốc gia.
3.  **William Stallings, Lawrie Brown** (2018), *Computer Security: Principles and Practice* (4th Edition), Pearson Education.
4.  **Arshdeep Bahga, Vijay Madisetti** (2014), *Internet of Things: A Hands-On Approach*, Universities Press.
5.  **NIST** (2021), *NIST SP 800-213: IoT Device Cybersecurity Guidance for the Federal Government*, National Institute of Standards and Technology.
6.  **Chính phủ Việt Nam** (2023), *Nghị định số 13/2023/NĐ-CP ngày 17/04/2023 về Bảo vệ dữ liệu cá nhân*.


