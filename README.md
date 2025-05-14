# Alma LegalTech Frontend Assessment Project

---

## Table of Contents

- [Setup Guide](#setup-guide)
- [Design Document](#design-document)
  - [Overview](#overview)
  - [Architecture](#architecture)
  - [Design Choices](#design-choices)
  - [Folder Structure](#folder-structure)
  - [Future Improvements](#future-improvements)
- [License](#license)

---

## Setup Guide

To run the app locally:

```bash
pnpm run dev
```

1. Public Lead Form (`/`)

Open [http://localhost:3000](http://localhost:3000).

2. Internal Lead Management UI

Open [http://localhost:3000/admin/leads](http://localhost:3000), you should be redirected to `/login`. To simplify, I just added a username field, anything different from `admin` should throw an error.

Vercel links:

1. https://alma-smoky.vercel.app/
2. https://alma-smoky.vercel.app/admin/leads

## Design Document

### Overview

To get close to the provided mockups, I leveraged Tailwind to quickly create components.

### Architecture

- Frontend: Next.js with React 18
- Styling: Tailwind CSS for reusable UI components
- Forms: React Hook Form + Zod for schema validation
- Authentication: NextAuth.js
- File Uploads: N/A
- State Management: local component state
- Routing: App Router (Next.js 13+)
- API: Built-in API routes

### Design Choices

- App Router over Pages Router: Chosen for enhanced routing capabilities and more modern approach
- Mocked auth with a `token` cookie for simplicity's sake. This shouldn't ever hit production, but it's simple enough to get the job done here

### Future Improvements

- Implement real authentication with NextAuth.js
- Add React Hook Form for better performance and integrate with zod for schema-based validation
- Add unit and integration tests (Jest + React Testing Library)
- Handle file upload via API routes to cloud storage (e.g., S3 or Cloudinary)
