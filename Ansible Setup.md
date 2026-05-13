# Post-Installation System Guide

This document describes the state of the infrastructure after running the `site.yml` Ansible playbook and outlines the necessary steps to configure and access the administrative panels for CrowdSec, Netdata, and Dokploy.

## System Overview

After the Ansible playbook completes, the servers are configured with:

- **OS Hardening**:
  - Unnecessary ports closed via UFW.
  - SSH hardened (Root login disabled, Password auth disabled, Max retries limited).
  - `dokploy` sudo user created with SSH key authentication.
- **Networking**:
  - **Wireguard VPN**: A mesh network is established on the `10.10.0.0/24` range for secure internal communication.
  - **Firewall Rules**:
    - **SSH**: Port `22` (Open).
    - **Wireguard**: Port `51820` UDP (Open).
    - **Manager Nodes**: Ports `80`, `443`, `3000` (Open).
    - **Database Nodes**: Database ports (e.g., `3306`, `6379`) restricted to internal VPN traffic.
- **Observability & Security**:
  - **CrowdSec**: Installed and active (detecting attacks).
  - **Netdata**: Installed and active (monitoring performance).

---

## 1. Accessing the Servers

You can access the servers using the SSH key generated during the setup.

**Command:**
```bash
ssh -i ansible-keys/yaride_prod dokploy@<server_ip>
```

> **Note**: Verify you can connect to all nodes. If you are locked out, check if the `at` safety net restored the previous configuration (wait 15 minutes).

---

## 2. CrowdSec Setup (Security Panel)

CrowdSec is installed and running locally. To view the dashboard and manage alerts centrally, you must enroll the instance in the CrowdSec Console.

1.  **Create an Account**: Go to [app.crowdsec.net](https://app.crowdsec.net) and sign up.
2.  **Get Enrollment Key**: Create a new Security Engine in the console to get an enrollment key.
3.  **Enroll Instance**: SSH into the server and run:
    ```bash
    sudo cscli console enroll <your_enrollment_key>
    ```
4.  **Restart**:
    ```bash
    sudo systemctl restart crowdsec
    ```
5.  **Verify**: The instance should appear "Online" in the web console.

---

## 3. Netdata Setup (Monitoring Panel)

Netdata runs on port `19999`. By default, this port is **not** exposed publicly for security reasons.

### Option A: Cloud Claiming (Recommended)
Claim the node to Netdata Cloud to view it in a centralized, secure dashboard without exposing ports.

1.  **Create Account**: Go to [app.netdata.cloud](https://app.netdata.cloud).
2.  **Get Claim Command**: Click "Add Nodes" and copy the command (it usually starts with `sudo netdata-claim.sh ...`).
3.  **Run Command**: Execute the command on each server via SSH.

### Option B: SSH Tunnel (Local Access)
To view the dashboard temporarily without Netdata Cloud:

1.  **Open Tunnel**:
    ```bash
    ssh -L 19999:localhost:19999 -i ansible-keys/yaride_prod dokploy@<server_ip>
    ```
2.  **Access**: Open your browser to `http://localhost:19999`.

---

## 4. Dokploy Setup (Deployment Panel)

The Ansible playbook prepares the server for Dokploy (creates user, opens port 3000), but the actual installation of the Dokploy platform requires a manual step or a separate script if not included in the main run.

**If Dokploy is not yet running:**

1.  **Install Dokploy**: SSH into your **Manager** node and run the installation command:
    ```bash
    curl -sSL https://dokploy.com/install.sh | sh
    ```
2.  **Access Panel**:
    - Open your browser to `http://<manager_ip>:3000`.
    - Create your admin account.

**Configuration**:
- Once inside Dokploy, configure your projects and services.
- Dokploy will manage Docker and deployments on the node.

---

## 5. Verification

Run the verification script to ensure all services are healthy:

```bash
./verify_setup.sh
```

Check `test_results.md` for a report on:
- SSH connectivity
- Service status (CrowdSec, Netdata)
- Wireguard mesh connectivity
