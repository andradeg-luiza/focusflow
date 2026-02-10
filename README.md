# FocusFlow

FocusFlow is a full‑stack monorepo designed to provide a clean, scalable foundation for building a modern productivity application.

## 📁 Project Structure

```
backend/   → Fastify API (TypeScript)
frontend/  → Vue 3 + Vite (TypeScript)
docs/      → Documentation (architecture, design, tests, etc.)
```

## 🛠️ Core Technologies

- **Frontend:** Vue 3, Vite, TypeScript  
- **Backend:** Fastify, TypeScript  
- **ORM:** Prisma  
- **Database:** SQLite (development)  
- **Quality Tools:** ESLint, Prettier, Husky  
- **Monorepo:** Organized for scalability and maintainability

## 🚀 Getting Started

### 1. Install root dependencies
```bash
npm install
```

### 2. Create environment file
```bash
cp .env.example .env
```

### 3. Install backend dependencies
```bash
cd backend
npm install
```

### 4. Install frontend dependencies
```bash
cd frontend
npm install
```

## 📚 Documentation

Detailed documentation is available in:

```
docs/
```

Including:
- Architecture  
- Design  
- Testing  
- Technical decisions (ADR)

## 📝 Useful Scripts

```bash
npm run lint   # Run ESLint
```

## 📄 License
Proprietary project. Restricted use.