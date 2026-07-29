# NexusCM Architecture

> **Version:** 2.0 (Rewrite)
>
> **Status:** Planning
>
> Last Updated: July 2026

---

# Overview

NexusCM is an open-source, self-hosted Matrix platform focused on providing a modern, secure, and easy-to-deploy communication experience.

Rather than simply packaging Matrix components together, NexusCM provides a unified platform with consistent branding, streamlined deployment, centralized configuration, and an integrated administration experience.

## Project Goals

- Modern Matrix deployment
- Security-first
- Easy installation
- Docker-first architecture
- Modular components
- Beautiful UI
- Self-hostable
- Easy to customize
- Production ready

---

# Design Principles

## 1. Linux First

NexusCM is designed primarily for Linux servers.

Supported distributions:

- Ubuntu LTS
- Debian Stable

Windows is supported only for development.

---

## 2. Docker First

Every service runs inside Docker.

Benefits:

- Easy upgrades
- Isolation
- Portability
- Simpler deployment

---

## 3. Configuration Over Modification

NexusCM should avoid modifying upstream projects whenever possible.

Instead of editing application source code, NexusCM should configure and extend services using:

- Configuration files
- Environment variables
- Reverse proxy rules
- Themes
- Branding assets

Forking upstream projects should be considered a last resort.

---

## 4. Modular Architecture

Every major component should be replaceable.

Example:

```
Client
│
├── Cinny
├── (Future Client)
└── Custom Client
```

Nothing outside the client layer should depend on a specific Matrix client.

---

## 5. Security First

Secrets must never be committed.

Examples:

- .env
- Database passwords
- API tokens
- Private keys
- Certificates

Every secret should be generated during installation.

---

# High-Level Architecture

```
                Internet
                    │
             Cloudflare (optional)
                    │
                 HTTPS
                    │
                Caddy Server
                    │
      ┌─────────────┴─────────────┐
      │                           │
   Website                    Matrix API
      │                           │
      │                      Sliding Sync
      │                           │
      │                       Synapse
      │                           │
      ├─────────────┐─────────────┤
      │             │             │
 PostgreSQL       Redis         MAS
                                   │
                              OAuth / Passkeys

                 Element Call
                       │
                   LiveKit
                       │
                    Coturn
```

---

# Repository Layout

```
NexusCM/

apps/
    admin/
    installer/
    website/

branding/
    backgrounds/
    icons/
    logos/
    themes/

configs/
    caddy/
    synapse/
    mas/
    redis/
    postgres/
    coturn/
    livekit/

docker/
    compose/
    images/

docs/

packages/

scripts/

.github/

.env.example

.gitignore

docker-compose.yml

README.md

LICENSE.md

VERSION
```

---

# Core Components

## Reverse Proxy

Software:

- Caddy

Responsibilities:

- HTTPS
- Reverse Proxy
- Automatic certificates
- Security headers
- Compression

---

## Matrix Homeserver

Software:

- Synapse

Responsibilities:

- Federation
- Messaging
- Room management
- User accounts

---

## Database

Software:

- PostgreSQL

Responsibilities:

- Persistent storage

---

## Cache

Software:

- Redis

Responsibilities:

- Performance
- Session cache

---

## Authentication

Software:

- Matrix Authentication Service (MAS)

Features:

- OAuth
- Passkeys
- SSO
- Modern authentication

---

## Matrix Client

Primary Client:

- Cinny

Future support:

- Additional clients
- Custom NexusCM client

---

## Voice & Video

Components:

- Element Call
- LiveKit
- Coturn

---

# Branding System

Branding should be centralized.

```
branding/

logo.svg

icon.png

background.jpg

theme.css

fonts/

colors.json
```

Changing branding should not require editing application source code.

---

# Configuration Philosophy

Every configurable value should exist in one location.

Future goal:

```
config.yaml
```

Example:

```yaml
server:
  domain: example.com

branding:
  name: NexusCM

client:
  default: cinny

voice:
  enabled: true
```

The installer will generate service-specific configuration files automatically.

---

# Installer

Long-term goal:

```
nexus install
```

Responsibilities:

- Generate secrets
- Create configuration
- Configure Docker
- Download required images
- Validate environment

---

# Update System

Long-term goal:

```
nexus update
```

Responsibilities:

- Pull updates
- Migrate configuration
- Restart services safely
- Backup before upgrading

---

# Security Guidelines

Never commit:

- .env
- Certificates
- Private keys
- Database dumps
- Docker volumes

All generated secrets should remain outside version control.

---

# Development Workflow

Feature branches:

```
feature/<name>
```

Bug fixes:

```
fix/<name>
```

Releases:

```
release/<version>
```

Main branch should always be deployable.

---

# Documentation Standards

Every component should include:

- Purpose
- Configuration
- Example
- Troubleshooting
- Upgrade notes

---

# Future Components

Potential additions:

- Native admin dashboard
- Mobile application
- Desktop client
- Plugin system
- Monitoring dashboard
- Automatic backups
- Metrics
- Notifications
- Multi-server management
- Installer GUI

---

# Non-Goals

NexusCM is **not** intended to:

- Replace the Matrix protocol
- Fork Synapse unnecessarily
- Lock users into proprietary software
- Require paid services
- Depend on a specific cloud provider

---

# Vision

NexusCM aims to become the easiest and most modern way to deploy a fully featured Matrix communication platform.

The project focuses on simplicity, security, maintainability, and a polished user experience while remaining completely open source and self-hostable.
