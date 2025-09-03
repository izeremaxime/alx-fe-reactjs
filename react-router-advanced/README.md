# React Router Demo

## Features
- Nested routes (`/profile/details`, `/profile/settings`)
- Dynamic routes (`/blog/:id`)
- Protected routes (only logged-in users can access `/profile`)

## Testing
1. Visit `/profile` without logging in → redirected to `/login`.
2. Sign in → redirected to `/profile`.
3. Navigate to `/profile/details` and `/profile/settings` → content loads correctly.
4. Visit `/blog/1`, `/blog/2` → dynamic blog posts displayed.
5. Logout → redirected back to `/login` on protected routes.
