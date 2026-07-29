# Installation

## Requirements

Minimum:

- Linux
- Docker Engine
- Docker Compose
- 4 GB RAM
- 2 CPU Cores
- 20 GB Storage

Recommended:

- Ubuntu LTS
- 8 GB RAM
- SSD
- Reverse Proxy
- Public Domain

---

## Current Status

NexusCM v2 is currently under active development.

Installation instructions will be published once the first stable testing release is available.

---

## Planned Installation

```bash
git clone https://github.com/<repo>/NexusCM.git

cd NexusCM

cp .env.example .env

docker compose up -d
```

The installer will automatically configure:

- PostgreSQL
- Synapse
- MAS
- Redis
- Sliding Sync
- LiveKit
- Coturn
- Caddy

---

## Updating

Future releases will include automatic updates through the installer.
