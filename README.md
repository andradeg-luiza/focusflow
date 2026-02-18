# FocusFlow

FocusFlow is a backend-first project designed to explore **secure authentication flows**, **clean architecture**, and **testable APIs** using modern Node.js tooling.

This repository focuses on **engineering quality**, reproducibility, and scalability from day one.

---

## 🎯 Project Goal

The main goal of FocusFlow is to build a solid backend foundation that supports:

- Secure user registration
- Future authentication flows (JWT, sessions, roles)
- High confidence through automated tests
- Clear separation of concerns

This project is intentionally scoped to emphasize **architecture and quality**, not feature quantity.

---

## 🧱 Tech Stack

- **Node.js**
- **NestJS** — application framework
- **Prisma ORM** — database access & migrations
- **PostgreSQL** — relational database
- **Docker & Docker Compose** — infrastructure
- **Jest + Supertest** — integration (e2e) testing

---

## 📌 Active Version (V2)

The active version of the project is **V2**, located at the repository root:

```
/backend
````

This version represents a full architectural rewrite, focused on maintainability, testability, and production-readiness.

---

## 🐳 Infrastructure

PostgreSQL runs inside a Docker container for both **development** and **testing** environments.

### Development Database
```bash
docker compose up -d
````

### Test Database (isolated)

```bash
npm run test:db:up
npm run test:integration
npm run test:db:down
```

No local PostgreSQL installation is required.

---

## 🔐 User Registration

Currently implemented feature:

* `POST /auth/register`

  * Email uniqueness enforced at database level
  * Password stored **only as a hash**
  * Payload validation via `class-validator`
  * Proper HTTP status handling:

    * `201 Created`
    * `400 Bad Request`
    * `409 Conflict`

No authentication tokens are implemented yet by design.

---

## 🧪 Testing Strategy

* End-to-end tests using **Supertest**
* Isolated PostgreSQL database for tests
* Database reset via Prisma migrations
* Reusable test utilities:

  * App bootstrap
  * Request helpers
  * Test data factories

Run all integration tests with:

```bash
npm run test:integration
```

---

## 🗂️ Legacy Version (V1)

The original version of the project is preserved at:

```
/legacy
```

V1 is kept strictly for historical reference and comparison.
It does not receive new features or fixes.

---

## 📈 Next Steps

* Authentication (login)
* Token-based authorization
* Domain expansion (tasks, focus sessions)