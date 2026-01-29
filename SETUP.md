# Websoft Blog Setup Guide

## Prerequisites

- Node.js 18+ installed
- Clerk account (for authentication)
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Clerk Authentication

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application or use an existing one
3. Go to API Keys section
4. Copy your Publishable Key and Secret Key

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here

# App URL (for API calls in server components)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database (already configured for SQLite)
DATABASE_URL="file:./dev.db"

# Newsletter (optional – welcome email via Resend)
# RESEND_API_KEY=re_xxxxx
# NEWSLETTER_FROM_EMAIL=newsletter@yourdomain.com
```

### 4. Newsletter (Optional)

Newsletter signups are stored in the database. To send a welcome/confirmation email when someone subscribes:

1. Create an account at [Resend](https://resend.com/) and get an API key.
2. Add `RESEND_API_KEY=re_xxxxx` to `.env.local`.
3. Optionally set `NEWSLETTER_FROM_EMAIL` to a verified domain (e.g. `newsletter@yourdomain.com`). If unset, Resend’s test address is used.

Without `RESEND_API_KEY`, signups are still saved; no email is sent.

### 5. Set Up Google OAuth (Optional)

1. In Clerk Dashboard, go to "User & Authentication" > "Social Connections"
2. Enable Google OAuth
3. Configure your Google OAuth credentials

### 6. Initialize Database

```bash
npx prisma generate
npx prisma migrate dev
```

### 7. Create Admin User

To create an admin user, you'll need to:

1. Sign up through the app (this creates a user in the database)
2. Manually update the user's role in the database:

```bash
npx prisma studio
```

Then in Prisma Studio:
- Find your user
- Change `role` from `"user"` to `"admin"`

Or use SQL:

```sql
UPDATE User SET role = 'admin' WHERE email = 'your-email@example.com';
```

### 8. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application.

## Features

- ✅ Full blog system with CRUD operations
- ✅ Comments and nested replies
- ✅ Image uploads for blog posts
- ✅ Clerk authentication with Google OAuth
- ✅ Protected admin dashboard
- ✅ AOS animations throughout
- ✅ Responsive design

## Project Structure

```
websoft-web/
├── app/
│   ├── admin/          # Admin dashboard (protected)
│   ├── api/            # API routes
│   ├── blog/           # Blog pages
│   ├── contact/        # Contact page
│   └── sign-in/        # Clerk sign-in page
├── components/
│   ├── admin/          # Admin components
│   ├── blog/           # Blog components
│   └── sections/       # Homepage sections
├── lib/                # Utility functions
├── prisma/             # Database schema
└── types/              # TypeScript types
```

## Making a User Admin

After signing up, update the user role in the database:

```bash
# Using Prisma Studio (recommended)
npx prisma studio

# Or using SQL
sqlite3 prisma/dev.db "UPDATE User SET role = 'admin' WHERE email = 'your-email@example.com';"
```

## Troubleshooting

### Middleware Errors

If you see middleware errors, make sure your `.env.local` file has the correct Clerk keys.

### Database Errors

Run migrations:
```bash
npx prisma migrate dev
```

### Image Upload Issues

Make sure the `public/uploads` directory exists and is writable.

## Next Steps

- Configure email service for contact form
- Add more blog features (tags, categories)
- Deploy to production
