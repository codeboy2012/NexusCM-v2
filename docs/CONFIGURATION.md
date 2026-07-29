# Configuration

NexusCM uses environment variables and service-specific configuration files.

## Environment

```
.env
```

Contains:

- Domains
- Secrets
- SMTP
- Database credentials

---

## Service Configurations

configs/

- caddy/
- synapse/
- postgres/
- redis/
- mas/
- livekit/
- coturn/
- sliding-sync/

Each service should be configured independently.

Avoid editing generated files manually whenever possible.
