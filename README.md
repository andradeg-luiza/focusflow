# 🌟 FocusFlow — Productivity Reinvented

FocusFlow is a modern productivity web application designed to help people with difficulty maintaining routines, staying focused, and completing long-term tasks.  
It combines **Kanban**, **time tracking**, **alerts**, **rewards**, and **cross-device synchronization** into a single, elegant experience.

This repository contains the **full-stack monorepo** for FocusFlow:

- **Frontend:** Vue 3 + Vite + TypeScript  
- **Backend:** Fastify + TypeScript  
- **Database:** SQLite (via Prisma ORM)  
- **Auth:** JWT  
- **Testing:** Vitest + Playwright  
- **CI/CD:** GitHub Actions  
- **Deploy:** Vercel (front) + Railway/Render (back)

---

## Features

### Authentication
- User registration  
- Login with JWT  
- Secure password hashing  
- Session persistence  
- Logout  

### Kanban Board
- Four task states:
  - **To Do**
  - **Doing**
  - **Paused**
  - **Done**
- Drag & drop between columns  
- Real-time UI updates  

### Smart Timer
- Automatically starts when task enters **Doing**  
- Pauses when moved to **Paused**  
- Stops when moved to **Done**  
- Accumulates time across days  
- Fully synced across devices  

### Alerts
- Configurable alert intervals per task  
- Sound notifications while task is active  
- Pauses automatically  

### Rewards System
- Rewards per task  
- Rewards per group of tasks  
- Motivational animations  

### Categories & Groups
- Organize tasks by category  
- Group tasks into projects  
- Unlock group rewards when all tasks are completed  

---

## Architecture Overview

```
[ Browser ]
     |
     |  Vue 3 + Vite + TypeScript
     |
[ Fastify API ] --- Prisma ORM --- [ SQLite ]
```

### Backend Structure
```
backend/
  src/
    application/
    domain/
    infrastructure/
    presentation/
    middlewares/
    tests/
  prisma/
```

### Frontend Structure
```
frontend/
  src/
    components/
    router/
    store/
    assets/
```

---

## Database Schema (Simplified)

### User
```ts
id: string
name: string
email: string
passwordHash: string
createdAt: Date
```

### Task
```ts
id: string
userId: string
title: string
description?: string
priority: 'low' | 'medium' | 'high'
alertInterval: number
reward?: string
status: 'todo' | 'doing' | 'paused' | 'done'
timeSpent: number
timerStartedAt?: Date
categoryId?: string
groupId?: string
createdAt: Date
```

### Category
```ts
id: string
userId: string
name: string
```

### Group
```ts
id: string
userId: string
name: string
description?: string
reward?: string
```

### GroupTask
```ts
groupId: string
taskId: string
```

---

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/focusflow.git
cd focusflow
```

---

## Backend Setup

### 2. Install dependencies
```bash
cd backend
npm install
```

### 3. Create environment file
```bash
cp .env.example .env
```

### 4. Run Prisma migrations
```bash
npx prisma migrate dev
```

### 5. Start backend
```bash
npm run dev
```

Backend runs at:  
**http://localhost:3333**

---

## Frontend Setup

### 1. Install dependencies
```bash
cd frontend
npm install
```

### 2. Start development server
```bash
npm run dev
```

Frontend runs at:  
**http://localhost:5173**

---

## Testing

### Unit tests
```bash
npm run test
```

### End-to-end tests
```bash
npm run test:e2e
```

---

## CI/CD Pipeline

GitHub Actions pipeline includes:

- Lint  
- Unit tests  
- E2E tests  
- Build frontend  
- Build backend  
- Deploy to:
  - **Vercel** (frontend)
  - **Railway/Render** (backend)

---

## Roadmap

### **Version 1.0 — MVP**
- Login  
- CRUD tasks  
- Kanban  
- Basic timer  
- Persistence  

### **Version 1.5 — Alerts**
- Configurable alert intervals  
- Sound notifications  

### **Version 2.0 — Rewards**
- Rewards per task  
- Motivational animations  

### **Version 2.5 — Groups & Categories**
- Group tasks  
- Group rewards  
- Categories  

### **Version 3.0 — Quality**
- Full test suite  
- CI/CD  
- Performance improvements  

---

## Contributing

1. Fork the project  
2. Create a feature branch  
3. Commit your changes  
4. Open a Pull Request  

---

## License

⚠️ This repository is proprietary. Viewing is allowed, but copying, modification, or redistribution is strictly prohibited.

---

## Acknowledgements

FocusFlow is built with love to help people stay focused, motivated, and in control of their time.

