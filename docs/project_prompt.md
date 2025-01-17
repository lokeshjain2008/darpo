
repo: https://github.com/lokeshjain2008/darpo

this is a monorepo using turbo repo
.
├── README.md
├── apps
│   ├── mobile
│   └── web
├── package-lock.json
├── package.json
├── packages
│   └── shared
├── tsconfig.json
└── turbo.json

apps/web is a react(vite) project using 
    - shadcn/ui
    - zod + rect-hook-forms
    - react-router v7
    - @tanstack/query
    - shared code
apps/mobile
    - expo // mobile app will be used by hotel staff 
    - shared code for Supbase 
packages/shared
    - code & type that can be shared across web and mobile project