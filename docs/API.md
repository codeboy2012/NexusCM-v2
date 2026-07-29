# API

## Overview

NexusCM provides a unified API layer for interacting with the platform.

The API is intended for:

- Web Dashboard
- Admin Panel
- Installer
- Future Desktop Applications
- Mobile Applications
- Third-party Integrations
- Automation

The API does **not** replace the Matrix Client-Server API.

Instead, it extends the platform with NexusCM-specific functionality.

---

# Planned Features

- User Management
- Server Status
- Health Checks
- Service Management
- Configuration Management
- Backup Management
- Update Management
- Notification System

---

# Authentication

Authentication methods planned include:

- Matrix Access Tokens
- MAS Authentication
- API Keys
- OAuth 2.0 (Future)

---

# Versioning

The API will use semantic versioning.

Example:

/api/v1/

/api/v2/

Breaking changes will only occur between major versions.

---

# Response Format

Successful responses

```json
{
    "success": true,
    "data": {}
}
```

Errors

```json
{
    "success": false,
    "error": {
        "code": "SERVICE_OFFLINE",
        "message": "Sliding Sync is unavailable."
    }
}
```

---

# Planned Endpoints

## System

GET /api/v1/system

GET /api/v1/version

GET /api/v1/status

---

## Services

GET /api/v1/services

POST /api/v1/services/restart

POST /api/v1/services/start

POST /api/v1/services/stop

---

## Users

GET /api/v1/users

POST /api/v1/users

DELETE /api/v1/users/{id}

---

## Settings

GET /api/v1/settings

PUT /api/v1/settings

---

## Future

- Webhooks
- Plugins
- Extensions
- Metrics API
