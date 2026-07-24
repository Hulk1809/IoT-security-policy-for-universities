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

    // Thiết lập sự kiện cho các hộp kiểm tuân thủ bảo mật
    const chkPassword = document.getElementById("chk-password");
    const chkEncryption = document.getElementById("chk-encryption");
    const chkFirewall = document.getElementById("chk-firewall");
    const chkVlan = document.getElementById("chk-vlan");

    if (chkPassword) chkPassword.addEventListener("change", handleChecklistChange);
    if (chkEncryption) chkEncryption.addEventListener("change", handleChecklistChange);
    if (chkFirewall) chkFirewall.addEventListener("change", handleChecklistChange);
    if (chkVlan) chkVlan.addEventListener("change", handleChecklistChange);

    // Thiết lập sự kiện cho các thẻ Code Module Tab
    const codeTabBtns = document.querySelectorAll(".code-tab-btn");
    const codePreviewArea = document.getElementById("code-preview-content");
    if (codeTabBtns && codePreviewArea) {
        codeTabBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                codeTabBtns.forEach(b => b.classList.remove("active"));
                e.target.classList.add("active");
                const tabKey = e.target.getAttribute("data-tab");
                if (codeSnippets[tabKey]) {
                    codePreviewArea.textContent = codeSnippets[tabKey];
                }
            });
        });
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

// --- Xử lý Thay Đổi Bảng Kiểm Bảo Mật (Checklist) ---
function handleChecklistChange(e) {
    const chkId = e.target.id;
    const isChecked = e.target.checked;

    if (chkId === "chk-password") {
        const camera = devices.find(d => d.id === "HW-01");
        if (camera) {
            if (isChecked) {
                camera.security = "secure";
                camera.cvss = 0.0;
                camera.details = "Mật khẩu đã đổi sang cấu trúc phức tạp. Cổng Telnet (23) đã đóng.";
                addConsoleLog("MẬT KHẨU: Đã đổi mật khẩu mặc định Camera HW-01 thành công. Loại bỏ nguy cơ Giả mạo.", "success");
            } else {
                camera.security = "critical";
                camera.cvss = 9.8;
                camera.details = "Mật khẩu mặc định chưa thay đổi (admin/admin). Mở cổng Telnet (23).";
                addConsoleLog("MẬT KHẨU: Đặt lại camera về mặc định. Cảnh báo lỗ hổng bảo mật nghiêm trọng (CVSS 9.8)!", "danger");
            }
        }
    } else if (chkId === "chk-encryption") {
        const lock = devices.find(d => d.id === "HW-02");
        if (lock) {
            if (isChecked) {
                lock.security = "secure";
                lock.cvss = 0.0;
                lock.details = "Đường truyền dữ liệu đã được mã hóa bằng HTTPS/TLS.";
                addConsoleLog("MÃ HÓA: Đã mã hóa đường truyền Smart Lock HW-02 thành công (Port 443).", "success");
            } else {
                lock.security = "warning";
                lock.cvss = 7.5;
                lock.details = "Giao thức truyền HTTP không mã hóa. Nguy cơ bị tấn công phát lại (Replay).";
                addConsoleLog("MÃ HÓA: Hủy kích hoạt mã hóa Smart Lock. Dữ liệu truyền dưới dạng plaintext!", "warning");
            }
        }
    } else if (chkId === "chk-firewall") {
        const hvac = devices.find(d => d.id === "HW-05");
        if (hvac) {
            if (isChecked) {
                hvac.security = "secure";
                hvac.cvss = 0.0;
                hvac.details = "Firmware đã cập nhật v3.4.2. Cấu hình Whitelist IP điều khiển thành công.";
                addConsoleLog("TƯỜNG LỬA: Đã chặn cổng Modbus TCP của HVAC, chỉ chấp nhận truy cập từ dải IP máy chủ.", "success");
            } else {
                hvac.security = "warning";
                hvac.cvss = 6.5;
                hvac.details = "Bản vá cũ lỗi thời từ năm 2024. Mở cổng dịch vụ Modbus TCP.";
                addConsoleLog("TƯỜNG LỬA: Gỡ bỏ whitelist. HVAC mở rộng kết nối cổng 502 với mọi địa chỉ IP!", "warning");
            }
        }
    } else if (chkId === "chk-vlan") {
        if (isChecked) {
            addConsoleLog("PHÂN VÙNG: Thiết lập phân chia 4 phân vùng VLAN thành công. Cô lập luồng dữ liệu IoT.", "success");
        } else {
            addConsoleLog("PHÂN VÙNG: Hủy phân vùng mạng. Thiết bị IoT đang hoạt động chung với Wi-Fi sinh viên!", "danger");
        }
    }

    updateComplianceScore();
    updateDashboardStats();
    renderDevices();
    
    // Nếu màn hình kết quả quét đang hiển thị, render lại danh sách lỗ hổng
    const vulnList = document.getElementById("vulnerabilities-list");
    if (vulnList && vulnList.style.display !== "none") {
        renderVulnerabilities();
    }
}

function updateComplianceScore() {
    const chkItems = document.querySelectorAll(".chk-item");
    const pctSpan = document.getElementById("compliance-pct");
    const fill = document.getElementById("compliance-fill");
    
    if (!chkItems || !pctSpan || !fill) return;

    let checkedCount = 0;
    chkItems.forEach(item => {
        if (item.checked) checkedCount++;
    });

    const percent = Math.round((checkedCount / chkItems.length) * 100);
    pctSpan.textContent = `${percent}%`;
    fill.style.width = `${percent}%`;

    if (percent === 100) {
        pctSpan.style.color = "var(--color-secure)";
        addConsoleLog("CHÚC MỪNG: Toàn bộ tiêu chuẩn bảo mật chính sách trường học đã đạt tuân thủ 100%!", "success");
    } else if (percent >= 50) {
        pctSpan.style.color = "var(--color-warning)";
    } else {
        pctSpan.style.color = "var(--color-danger)";
    }
}

// --- Các Đoạn Mã Mẫu Bảo Mật (Security as Code Snippets) ---
const codeSnippets = {
    python: `# Python Audit Script (python-nmap)
import nmap, json

def run_campus_iot_audit(subnet_cidr):
    scanner = nmap.PortScanner()
    scanner.scan(hosts=subnet_cidr, ports='23,80,443,554,1883,502', arguments='-sV --open')
    return json.dumps(scanner.all_hosts(), indent=4)

print(run_campus_iot_audit("192.168.30.0/24"))`,

    cisco: `! Cisco IOS Extended ACL (VLAN 99 IoT Isolation)
ip access-list extended ACL_PROTECT_CAMPUS_IOT
 permit tcp 10.0.99.0 0.0.0.255 host 10.0.100.5 eq 1883
 permit tcp 10.0.99.0 0.0.0.255 host 10.0.100.10 eq 554
 deny ip 10.0.99.0 0.0.0.255 10.0.10.0 0.0.0.255
 deny ip 10.0.99.0 0.0.0.255 any
 permit ip any any

interface Vlan99
 ip access-group ACL_PROTECT_CAMPUS_IOT in`,

    mqtt: `# Eclipse Mosquitto MQTT Topic ACL
per_listener_settings true
allow_anonymous false
use_identity_as_username true

user admin_campus
topic readwrite university/#

user sensor_lab01
topic write university/buildingA/lab01/telemetry

user student_guest
topic read university/public/#
deny topic write university/#`,

    snort: `# Snort IDS Rule: Detect Camera RTSP Buffer Overflow
alert tcp $EXTERNAL_NET any -> $IOT_VLAN 554 ( \\
    msg:"[CAMPUS-SECURE-IDS] RTSP Buffer Overflow Attack"; \\
    flow:to_server,established; \\
    content:"SETUP"; depth:10; \\
    content:"User-Agent|3A|"; distance:0; \\
    byte_test:4,>,1024,0,relative; \\
    classtype:attempted-admin; \\
    sid:100001; rev:1; \\
)`,

    aws: `# AWS Lambda Python Remediation Script (Boto3)
import json, boto3
def lambda_handler(event, context):
    iot = boto3.client('iot')
    device_id = event['thingName']
    iot.detach_security_profile(securityProfileName='StandardIoTProfile', securityProfileTarget=f'arn:aws:iot:us-east-1:12345:thing/{device_id}')
    iot.add_thing_to_thing_group(thingGroupName='QuarantineGroup', thingName=device_id)
    return {'statusCode': 200, 'body': 'Device Isolated!'}

// Cedar Policy (ABAC)
permit (
    principal is Campus::User::"TeachingAssistant",
    action in [Campus::Action::"OperateRobot"],
    resource in Campus::DeviceGroup::"RoboticsLab"
) when { context.currentTime.hour >= 8 && context.currentTime.hour <= 17 };`
};

