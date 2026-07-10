// --- Quản lý Dữ liệu Thiết bị IoT ---
let devices = [
    {
        id: "HW-01",
        name: "Hệ thống Camera IP (Dahua)",
        vlan: "VLAN 30 (An ninh)",
        vlanId: "vlan30",
        ip: "192.168.30.15",
        mac: "00:1A:2B:3C:4D:5E",
        status: "online", // online, offline, isolated
        security: "critical", // secure, warning, critical
        cvss: 9.8,
        details: "Mật khẩu mặc định chưa thay đổi (admin/admin). Mở cổng Telnet (23)."
    },
    {
        id: "HW-02",
        name: "Khóa cửa thông minh (RFID)",
        vlan: "VLAN 30 (An ninh)",
        vlanId: "vlan30",
        ip: "192.168.30.22",
        mac: "00:1A:2B:3C:4D:6F",
        status: "online",
        security: "warning",
        cvss: 7.5,
        details: "Giao thức truyền HTTP không mã hóa. Nguy cơ bị tấn công phát lại (Replay)."
    },
    {
        id: "HW-03",
        name: "Industrial IoT Gateway",
        vlan: "VLAN 10 (Cơ sở)",
        vlanId: "vlan10",
        ip: "192.168.10.1",
        mac: "00:1A:2B:8E:9F:01",
        status: "online",
        security: "secure",
        cvss: 0.0,
        details: "Firmware cập nhật mới nhất. Toàn bộ cổng giao tiếp được mã hóa và đóng."
    },
    {
        id: "HW-04",
        name: "Máy chiếu giảng đường (Smart)",
        vlan: "VLAN 20 (Học tập)",
        vlanId: "vlan20",
        ip: "192.168.20.104",
        mac: "00:1A:2B:4F:5G:6H",
        status: "online",
        security: "secure",
        cvss: 2.1,
        details: "Thiết bị trong mạng học tập, chỉ cho phép truyền màn hình cục bộ."
    },
    {
        id: "HW-05",
        name: "Bộ điều khiển HVAC phòng Server",
        vlan: "VLAN 10 (Cơ sở)",
        vlanId: "vlan10",
        ip: "192.168.10.45",
        mac: "00:1A:2B:12:34:56",
        status: "online",
        security: "warning",
        cvss: 6.5,
        details: "Bản vá cũ lỗi thời từ năm 2024. Mở cổng dịch vụ Modbus TCP."
    }
];

// Danh sách các lỗi bảo mật phục vụ giả lập quét mạng
const vulnerabilityTemplates = [
    {
        deviceId: "HW-01",
        title: "Sử dụng Mật khẩu Mặc định (Critical)",
        stride: "Spoofing / Elevation of Privilege",
        owasp: "I1: Weak, Guessable, or Hardcoded Credentials",
        cvss: 9.8,
        desc: "Camera IP Dahua vẫn giữ tài khoản quản trị mặc định (admin/admin) cho phép bất kỳ ai đăng nhập từ xa qua mạng.",
        mitigation: "Chính sách: Yêu cầu bắt buộc đổi mật khẩu mặc định phức tạp ngay trong phiên cấu hình ban đầu; Đóng cổng Telnet (23)."
    },
    {
        deviceId: "HW-02",
        title: "Truyền thông không mã hóa (High)",
        stride: "Information Disclosure / Tampering",
        owasp: "I3: Insecure Ecosystem Interfaces",
        cvss: 7.5,
        desc: "Khóa cửa thông minh giao tiếp với server quản lý qua HTTP không mã hóa. Token mở cửa có thể bị bắt và phát lại bởi kẻ tấn công cùng mạng.",
        mitigation: "Chính sách: Kích hoạt SSL/TLS trên Smart Lock; Chuyển cấu hình kết nối từ cổng HTTP (80) sang HTTPS (443)."
    },
    {
        deviceId: "HW-05",
        title: "Firmware Lỗi thời (Medium)",
        stride: "Elevation of Privilege",
        owasp: "I5: Use of Outdated or Insecure Components",
        cvss: 6.5,
        desc: "Hệ điều hành nhúng của HVAC Controller chứa lỗ hổng thực thi mã từ xa chưa được vá kể từ năm 2024.",
        mitigation: "Chính sách: Thực hiện cập nhật Firmware phiên bản v3.4.2 mới nhất; Thiết lập Whitelist IP chỉ cho phép máy chủ điều hành HVAC kết nối."
    }
];

// Trạng thái bộ lọc và quét hiện tại
let currentFilter = "all";
let isScanning = false;

// --- Khởi tạo và Thiết lập Sự kiện ---
document.addEventListener("DOMContentLoaded", () => {
    // Cập nhật đồng hồ thời gian hệ thống
    updateClock();
    setInterval(updateClock, 1000);

    // Tính toán thống kê và render thiết bị ban đầu
    updateDashboardStats();
    renderDevices();

    // Thiết lập sự kiện cho các nút lọc VLAN
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentFilter = e.target.getAttribute("data-filter");
            renderDevices();
        });
    });

    // Thiết lập sự kiện nút quét mạng
    const btnScan = document.getElementById("btn-scan");
    if (btnScan) {
        btnScan.addEventListener("click", runVulnerabilityScan);
    }

    // Thiết lập sự kiện nút mô phỏng tấn công
    const btnTriggerThreat = document.getElementById("btn-trigger-threat");
    if (btnTriggerThreat) {
        btnTriggerThreat.addEventListener("click", triggerMockAttack);
    }

    // Thêm các log hệ thống khởi tạo đầu tiên vào Console
    addConsoleLog("Hệ thống giám sát an ninh CAMPUS-SECURE khởi động thành công.", "success");
    addConsoleLog("Mạng nội bộ trường học hoạt động bình thường. 4 phân vùng VLAN đang được bảo vệ.", "info");
    addConsoleLog("Chính sách bảo mật IoT phiên bản 1.0 đang áp dụng.", "system");
});

// --- Hàm Cập Nhật Đồng Hồ ---
function updateClock() {
    const timeSpan = document.getElementById("system-time");
    if (timeSpan) {
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        const secs = String(now.getSeconds()).padStart(2, '0');
        const date = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        timeSpan.textContent = `${hrs}:${mins}:${secs} - ${date}/${month}/${year}`;
    }
}

// --- Hàm Cập Nhật Thống Kê Dashboard ---
function updateDashboardStats() {
    const valTotal = document.getElementById("val-total");
    const valSecure = document.getElementById("val-secure");
    const valWarning = document.getElementById("val-warning");
    const valCritical = document.getElementById("val-critical");

    if (valTotal && valSecure && valWarning && valCritical) {
        // Chỉ đếm các thiết bị chưa bị cô lập (online) hoặc tính toán linh hoạt
        const total = devices.length;
        const secure = devices.filter(d => d.status === "online" && d.security === "secure").length;
        const warning = devices.filter(d => d.status === "online" && d.security === "warning").length;
        const critical = devices.filter(d => d.status === "online" && d.security === "critical").length;
        
        // Các thiết bị bị cô lập (isolated) được coi là an toàn do đã ngắt kết nối mạng vật lý
        const isolated = devices.filter(d => d.status === "isolated").length;

        valTotal.textContent = total;
        valSecure.textContent = secure + isolated; // Cô lập thành công làm tăng số lượng an toàn
        valWarning.textContent = warning;
        valCritical.textContent = critical;
    }
}

// --- Hàm Hiển Thị Danh Sách Thiết Bị ---
function renderDevices() {
    const listBody = document.getElementById("device-list");
    if (!listBody) return;

    listBody.innerHTML = "";

    const filtered = devices.filter(d => {
        if (currentFilter === "all") return true;
        return d.vlanId === currentFilter;
    });

    filtered.forEach(dev => {
        const tr = document.createElement("tr");
        
        // Class bảo mật cho chữ
        let secClass = "text-secure";
        let secLabel = "An toàn";
        if (dev.security === "warning") {
            secClass = "text-warning";
            secLabel = `Cảnh báo (${dev.cvss})`;
        } else if (dev.security === "critical") {
            secClass = "text-critical";
            secLabel = `Nguy hiểm (${dev.cvss})`;
        }

        // Trạng thái mạng
        let statusBadge = "";
        if (dev.status === "online") {
            statusBadge = `<span class="status-indicator"><span class="status-dot online"></span>Trực tuyến</span>`;
        } else if (dev.status === "offline") {
            statusBadge = `<span class="status-indicator"><span class="status-dot offline"></span>Ngoại tuyến</span>`;
        } else if (dev.status === "isolated") {
            statusBadge = `<span class="status-indicator"><span class="status-dot offline"></span>CÔ LẬP MẠNG</span>`;
            secClass = "text-secure";
            secLabel = "Đã ngắt mạng";
        }

        // Cấu hình nút Hành động
        let actionBtn = "";
        if (dev.status === "isolated") {
            actionBtn = `<button class="btn btn-success btn-xs" onclick="toggleIsolation('${dev.id}')">Kết nối lại</button>`;
        } else {
            actionBtn = `<button class="btn btn-danger btn-xs" onclick="toggleIsolation('${dev.id}')">Cô lập mạng</button>`;
        }

        tr.innerHTML = `
            <td>
                <strong>${dev.id}</strong><br>
                <span style="font-size: 0.75rem; color: var(--text-secondary);">${dev.name}</span>
            </td>
            <td><span class="badge badge-vlan">${dev.vlan}</span></td>
            <td>
                <span style="font-family: 'JetBrains Mono', monospace;">${dev.ip}</span><br>
                <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--text-secondary);">${dev.mac}</span>
            </td>
            <td>${statusBadge}</td>
            <td><span class="security-tier ${secClass}">${secLabel}</span></td>
            <td>${actionBtn}</td>
        `;

        listBody.appendChild(tr);
    });
}

// --- Hàm Thay Đổi Trạng Thái Cô Lập ---
function toggleIsolation(id) {
    const dev = devices.find(d => d.id === id);
    if (!dev) return;

    if (dev.status === "isolated") {
        dev.status = "online";
        addConsoleLog(`Thiết bị ${dev.id} (${dev.name}) đã được cấp quyền kết nối lại switch mạng.`, "info");
    } else {
        dev.status = "isolated";
        addConsoleLog(`[CÔ LẬP BẢO MẬT] Thiết bị ${dev.id} đã bị ngắt kết nối cổng switch tại ${dev.vlan}.`, "warning");
    }

    updateDashboardStats();
    renderDevices();
    
    // Nếu có chạy quét mạng, ta render lại danh sách lỗ hổng vì thiết bị cô lập sẽ không quét thấy nữa
    if (document.getElementById("vulnerabilities-list").style.display === "flex") {
        renderVulnerabilities();
    }
}

// --- Hàm Ghi Log Vào Console ---
function addConsoleLog(message, type = "info") {
    const consoleLogs = document.getElementById("console-logs");
    if (!consoleLogs) return;

    const entry = document.createElement("div");
    entry.className = "console-entry";

    const now = new Date();
    const timeStr = `[${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}]`;

    entry.innerHTML = `<span class="console-time">${timeStr}</span><span class="console-text ${type}">${message}</span>`;
    
    consoleLogs.appendChild(entry);
    consoleLogs.scrollTop = consoleLogs.scrollHeight; // Tự động cuộn xuống dưới cùng
}

// --- Mô Phỏng Quét Lỗ Hổng Bảo Mật ---
function runVulnerabilityScan() {
    if (isScanning) return;

    isScanning = true;
    const progressContainer = document.getElementById("scan-progress-container");
    const scanFill = document.getElementById("scan-fill");
    const scanPercent = document.getElementById("scan-percent");
    const scanStatusText = document.getElementById("scan-status-text");
    const emptyState = document.getElementById("scan-empty-state");
    const vulnList = document.getElementById("vulnerabilities-list");

    emptyState.style.display = "none";
    vulnList.style.display = "none";
    progressContainer.style.display = "flex";

    let percent = 0;
    addConsoleLog("Bắt đầu quá trình quét bảo mật hệ thống mạng IoT trường đại học...", "info");

    const interval = setInterval(() => {
        percent += 5;
        scanFill.style.width = `${percent}%`;
        scanPercent.textContent = `${percent}%`;

        if (percent === 10) {
            scanStatusText.textContent = "Đang quét các dải IP hoạt động...";
            addConsoleLog("Đang thực hiện ARP ping quét các địa chỉ IP trong VLAN 10, 20, 30...", "system");
        } else if (percent === 35) {
            scanStatusText.textContent = "Đang rà quét cổng dịch vụ mở (Port Scanning)...";
            addConsoleLog("Phát hiện cổng 23 (Telnet), 80 (HTTP) và 502 (Modbus) đang mở trên một số thiết bị.", "warning");
        } else if (percent === 60) {
            scanStatusText.textContent = "Kiểm tra mật khẩu mặc định (Credential Auditing)...";
            addConsoleLog("Mô phỏng thử đăng nhập tài khoản mặc định của camera IP và smart lock...", "system");
        } else if (percent === 85) {
            scanStatusText.textContent = "Kiểm tra phiên bản firmware (Version check)...";
            addConsoleLog("Truy vấn phiên bản firmware thiết bị từ cơ sở dữ liệu nhà sản xuất.", "info");
        } else if (percent >= 100) {
            clearInterval(interval);
            isScanning = false;
            scanStatusText.textContent = "Hoàn thành quét bảo mật!";
            addConsoleLog("Quá trình quét hoàn tất. Phát hiện lỗ hổng bảo mật nghiêm trọng!", "danger");
            
            // Hiển thị danh sách lỗ hổng
            progressContainer.style.display = "none";
            renderVulnerabilities();
        }
    }, 150);
}

// Hiển thị các lỗi bảo mật phát hiện được
function renderVulnerabilities() {
    const vulnList = document.getElementById("vulnerabilities-list");
    if (!vulnList) return;

    vulnList.innerHTML = "";
    vulnList.style.display = "flex";

    // Chỉ hiển thị các lỗ hổng đối với các thiết bị vẫn đang kết nối mạng (chưa bị cô lập)
    const activeVulns = vulnerabilityTemplates.filter(v => {
        const dev = devices.find(d => d.id === v.deviceId);
        return dev && dev.status === "online";
    });

    if (activeVulns.length === 0) {
        vulnList.innerHTML = `
            <div class="empty-state" style="border: none; background: transparent;">
                <p class="text-secure">🎉 Toàn bộ thiết bị có nguy cơ đã được cô lập. Mạng nội bộ hiện thời an toàn!</p>
            </div>
        `;
        return;
    }

    activeVulns.forEach(vuln => {
        const div = document.createElement("div");
        div.className = "vuln-item";

        let scoreClass = "warning";
        if (vuln.cvss >= 7.0) {
            scoreClass = "critical";
        }

        div.innerHTML = `
            <div class="vuln-meta">
                <span class="vuln-title">${vuln.title} (Thiết bị: ${vuln.deviceId})</span>
                <span class="vuln-badge ${scoreClass}">CVSS ${vuln.cvss}</span>
            </div>
            <div class="vuln-desc">
                <strong>Chi tiết:</strong> ${vuln.desc}<br>
                <strong>Mục STRIDE:</strong> <code>${vuln.stride}</code> | <strong>OWASP:</strong> <code>${vuln.owasp}</code>
            </div>
            <div class="vuln-remediation">
                <strong>Đề xuất khắc phục:</strong> ${vuln.mitigation}
            </div>
        `;

        vulnList.appendChild(div);
    });
}

// --- Mô phỏng Cuộc tấn công mạng đột xuất ---
function triggerMockAttack() {
    // Tìm thiết bị camera (HW-01) để mô phỏng hack
    const camera = devices.find(d => d.id === "HW-01");
    if (!camera) return;

    if (camera.status === "isolated") {
        addConsoleLog("Thiết bị camera HW-01 đã bị cô lập từ trước. Cuộc tấn công brute-force bị chặn hoàn toàn tại cổng switch!", "success");
        return;
    }

    addConsoleLog("[CẢNH BÁO KHẨN CẤP] Phát hiện 15 yêu cầu đăng nhập thất bại liên tục từ IP lạ 192.168.100.80 vào Camera HW-01!", "danger");
    addConsoleLog("Mô phỏng tấn công Brute-force mật khẩu mặc định (Dấu hiệu: Tấn công Spoofing/Elevation of Privilege).", "danger");
    
    // Tự động chuyển đổi giao diện camera sang trạng thái khẩn cấp trong console
    setTimeout(() => {
        if (camera.status !== "isolated") {
            addConsoleLog("[SỰ CỐ] Đăng nhập thành công! Kẻ tấn công đã chiếm quyền quản trị Camera IP HW-01 và đang xuất hình ảnh camera.", "danger");
            addConsoleLog("Khuyến nghị IT Admin: Click nút 'Cô lập mạng' của thiết bị HW-01 ngay lập tức để ngắt kết nối vật lý!", "warning");
        }
    }, 2000);
}
