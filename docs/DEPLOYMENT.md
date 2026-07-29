# Deployment

## Overview

NexusCM is designed to be deployed using Docker Compose.

Future releases may also support Kubernetes.

---

# Supported Platforms

- Ubuntu
- Debian
- Fedora
- Arch Linux
- Rocky Linux

Other Linux distributions may also work.

Windows is supported for development only.

---

# Deployment Modes

## Development

Local testing.

Single machine.

Minimal services.

---

## Testing

Near-production environment.

Used before upgrades.

---

## Production

Public-facing deployment.

Includes all supported services.

---

# Recommended Stack

Internet

↓

Cloudflare (Optional)

↓

Caddy

↓

Synapse

↓

PostgreSQL

↓

Redis

↓

MAS

↓

Sliding Sync

↓

LiveKit

↓

Coturn

---

# Networking

Services communicate through Docker networks.

Only necessary ports should be exposed.

---

# Storage

Persistent data should be stored using Docker volumes.

Configuration should be backed up regularly.

---

# Updates

Updates should follow this order:

1. Backup
2. Pull latest changes
3. Update containers
4. Verify services
5. Remove unused images

---

# Monitoring

Future releases may support:

- Prometheus
- Grafana
- Loki
- Uptime Kuma

---

# Scaling

Future deployments may include:

- Multiple Synapse workers
- High Availability
- Database replication
- Load balancing
