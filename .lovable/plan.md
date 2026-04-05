## Plan: CommPass Account & Verified Reviews

### Database Setup
1. **profiles table** — `id (uuid, FK auth.users)`, `display_name`, `created_at`
2. **RLS policies** — users can read all profiles, update only their own

### Auth UI
3. **AuthModal component** — sign up/login with email OR phone, display name field
4. **Auth context/hook** — track current user session

### Gating & Verification Badge
5. **Gate "Add Resource" form** behind auth — show login prompt if not logged in
6. **Gate review submission** behind auth — show login prompt if not logged in
7. **Verified badge** — show ✓ checkmark next to display name for logged-in reviewers; anonymous/unverified users get asterisks

### Header
8. **Add login/logout button** to the nav/header area
