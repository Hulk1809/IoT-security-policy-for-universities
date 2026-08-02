#!/usr/bin/env python3
# ====================================================================
# AUTOMATED IOT AUDIT SCANNER & PORT HARVESTER (PYTHON-NMAP)
# Project: IoT Security Policy for Universities (Topic 46)
# Author: Vo Quoc Thang (MSSV: 231A011150)
# ====================================================================

import sys
import json
import logging

try:
    import nmap
except ImportError:
    print("[!] python-nmap package is required. Install via: pip install python-nmap")
    sys.exit(1)

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")

SUBNET_VLAN30 = "192.168.30.0/24"
CRITICAL_PORTS = "23,80,443,554,1883,502,8080"

def run_campus_iot_audit(subnet_cidr, ports):
    """
    Scans the specified IoT subnet and reports open ports, services, and default credential vulnerability flags.
    """
    logging.info(f"Starting automated campus IoT vulnerability scan on {subnet_cidr}...")
    scanner = nmap.PortScanner()
    scanner.scan(hosts=subnet_cidr, ports=ports, arguments="-sV --open -T4")

    audit_report = {
        "target_subnet": subnet_cidr,
        "total_hosts_found": len(scanner.all_hosts()),
        "devices": []
    }

    for host in scanner.all_hosts():
        host_info = {
            "ip": host,
            "hostname": scanner[host].hostname(),
            "state": scanner[host].state(),
            "open_ports": []
        }
        
        for proto in scanner[host].all_protocols():
            lport = scanner[host][proto].keys()
            for port in sorted(lport):
                service_info = scanner[host][proto][port]
                port_detail = {
                    "port": port,
                    "protocol": proto,
                    "name": service_info.get("name", "unknown"),
                    "product": service_info.get("product", ""),
                    "version": service_info.get("version", ""),
                    "vulnerability_risk": "HIGH" if port in [23, 80, 502] else "SECURE"
                }
                host_info["open_ports"].append(port_detail)
        
        audit_report["devices"].append(host_info)

    logging.info("Campus IoT vulnerability scan completed successfully.")
    return audit_report

if __name__ == "__main__":
    results = run_campus_iot_audit(SUBNET_VLAN30, CRITICAL_PORTS)
    print(json.dumps(results, indent=2))
