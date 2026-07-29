# Troubleshooting

## Overview

This document covers common issues and recommended solutions.

---

# Docker won't start

Check Docker status.

```bash
docker ps
```

If Docker is stopped:

```bash
sudo systemctl start docker
```

---

# Containers keep restarting

View logs.

```bash
docker compose logs
```

Check for:

- Missing environment variables
- Invalid configuration
- Port conflicts

---

# Cannot access the website

Verify:

- DNS
- Reverse Proxy
- Firewall
- Docker Containers

---

# Matrix login fails

Check:

- Synapse
- MAS
- PostgreSQL

Confirm all containers are running.

---

# Email is not working

Verify:

- SMTP credentials
- Firewall
- Port 587 or 465
- DNS records

---

# Federation issues

Check:

- Port 443
- TLS certificates
- DNS
- Server Name

Useful tool:

https://federationtester.matrix.org/

---

# Sliding Sync offline

Verify:

- Redis
- Sliding Sync
- Synapse

Restart affected containers if necessary.

---

# Voice or Video doesn't work

Verify:

- LiveKit
- Coturn
- Public IP
- UDP ports

---

# Debugging

Container status

```bash
docker compose ps
```

Logs

```bash
docker compose logs
```

Restart

```bash
docker compose restart
```

Rebuild

```bash
docker compose up -d --build
```

---

# Getting Help

Before reporting an issue, include:

- Operating System
- Docker Version
- NexusCM Version
- Relevant Logs
- Steps to Reproduce
- Screenshots (if applicable)

Providing complete information helps reproduce and resolve issues more quickly.
