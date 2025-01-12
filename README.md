# Darpo - Hotel Management System

A modern hotel management system built with Next.js, Supabase, and Expo using a monorepo structure.

## Project Structure

```
.
├── apps/
│   ├── web/          # Next.js application
│   └── mobile/       # Expo application
└── packages/
    └── shared/       # Shared utilities and types
```

## Prerequisites

- Node.js >= 18
- npm >= 9
- Supabase account
- Expo account (for mobile development)

## Development Setup

1. Install dependencies:
```bash
# Install root dependencies
npm install
```

2. Environment Setup:

```bash
# apps/web/.env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# apps/mobile/.env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Run development servers:
```bash
# Run all apps
npm run dev

# Run specific app
npm run dev --filter=web  # For Next.js
npm run dev --filter=mobile  # For Expo
```

## Deployment

### Web Application (Next.js)

1. Deploy to Vercel:
```bash
# From the root directory
vercel

# Or configure GitHub integration in Vercel dashboard
# Set root directory to: apps/web
```

2. Environment Variables in Vercel:
- Add all variables from `.env.local`
- Set `VERCEL_PROJECT_DIRECTORY=apps/web`

### Mobile Application (Expo)

1. Configure EAS:
```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure builds
cd apps/mobile
eas build:configure
```

2. Build and Submit:
```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Submit to stores
eas submit -p ios
eas submit -p android
```

### Supabase

1. Local Development:
```bash
# Install Supabase CLI
npm install -g supabase

# Start local Supabase
supabase start

# Push migrations
supabase db push
```

2. Production Deployment:
```bash
# Link to your project
supabase link --project-ref your-project-ref

# Push migrations to production
supabase db push
```

## Development Notes

### Package Management

1. Adding dependencies:
```bash
# Add to web app
npm install package-name --filter=web

# Add to mobile app
npm install package-name --filter=mobile

# Add to shared package
npm install package-name --filter=shared
```

2. Running Scripts:
```bash
# Lint all packages
npm run lint

# Build all packages
npm run build

# Format code
npm run format
```

### Type Generation

1. Supabase Types:
```bash
# Generate types from Supabase
supabase gen types typescript --local > packages/shared/src/types/supabase.ts
```

### Debugging

1. Web Application:
- Use Chrome DevTools
- Next.js debugging in VS Code

2. Mobile Application:
- Use Expo Dev Tools
- React Native Debugger

3. Supabase:
- Supabase Dashboard
- Local Dashboard: http://localhost:54323

## Useful Commands

```bash
# Clean all node_modules
npm run clean

# Reset Supabase local instance
supabase db reset

# Generate new migration
supabase migration new migration-name
```

## Contributing

1. Create a new branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

MIT
