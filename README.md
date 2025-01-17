# Darpo

Hotel management system using React (Vite), Supabase, and Expo

## Development Setup

### Prerequisites
- Node.js
- pnpm
- Supabase CLI

### Environment Setup
1. Install dependencies:
```bash
npm install
```

2. Configure Supabase:
- Create a project in Supabase
- Copy your project ID from the project settings
- Generate types:
```bash
npm supabase:types
```

3. Set up environment variables:
- Copy `.env.example` to `.env.local` in apps/web
- Add your Supabase credentials

### Database Schema
Manage database schema through Supabase Studio:
1. Navigate to your project's Dashboard
2. Use the Table Editor or SQL Editor to make changes
3. Pull latest changes:
```bash
supabase db pull
```

## Available Scripts
- `pnpm dev` - Start development servers
- `pnpm build` - Build all packages
- `pnpm supabase:types` - Generate Supabase types