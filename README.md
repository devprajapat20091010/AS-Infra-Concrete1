# Heritage Readymix Jaipur

Heritage Readymix Jaipur is a responsive company website for ready-mix concrete solutions across Rajasthan. It presents the company, plant, team, vision, projects, gallery, testimonials, and contact options in a bilingual Next.js experience.

## Features

- Responsive landing page with company overview and service highlights
- About pages for the plant, team, and company vision
- Projects, gallery, blog, testimonials, and contact pages
- Language provider for the site's multilingual experience
- WhatsApp contact shortcut and contact form
- Firebase Authentication, Firestore, and Storage integration
- Admin dashboard with order, contact, analytics, and security views

## Tech Stack

- Next.js 15 with the App Router
- React 19 and TypeScript
- Tailwind CSS and CSS Modules
- Firebase Authentication, Firestore, and Storage
- Lucide React icons and Recharts

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Main company website |
| `/about/plant` | Plant information |
| `/about/team` | Team information |
| `/about/vision` | Company vision |
| `/projects` | Project showcase |
| `/gallery` | Image gallery |
| `/blog` | Company blog |
| `/contact` | Contact page and form |
| `/admin/dashboard` | Protected administration dashboard |
| `/admin/security-test` | Firebase security testing view |

## Getting Started

### Requirements

- Node.js 18.18 or newer
- npm or pnpm
- Firebase project credentials for authentication and data-backed features

### Installation

```bash
npm install
```

Create a `.env.local` file in the project root with the Firebase web-app configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Serve the production build
npm run lint     # Run the Next.js linter
```

Run `npm run build` before `npm run start` because the production server requires a completed build.

## Project Structure

```text
app/        Next.js routes and layouts
components/ Reusable UI sections and admin components
contexts/   Authentication, language, contacts, and orders state
lib/        Firebase and shared utilities
public/     Logos, gallery images, and other static assets
styles/     Shared styles
```

## Security

Environment files are excluded from Git. Keep Firebase credentials and any administrative configuration in local environment files or your deployment provider's secret settings. Configure Firebase Authentication and Firestore/Storage security rules before deploying admin features.

## Deployment

Build the application with `npm run build`, then serve it with `npm run start`, or deploy it to a Next.js-compatible hosting provider such as Vercel. Add the Firebase environment variables to the hosting provider before starting the deployed application.