# 👥 Team Structure & Branch Assignments

---

## Project Leader – Jarom Bustillo

### Branches:
- `leader/repo-setup` – Initial repository structure, `.gitignore`, `README.md`, and boilerplate setup.
- `leader/integration-review` – Reviews pull requests, resolves conflicts, and merges features into `main`.
- `leader/final-docs` – Final testing reports, documentation polishing, and project cleanup.

---

## Member 1 – Backend Developer (Auth & Email) - Jarom Bustillo

### Branch:
- `backend/signup-auth`

### Responsibilities:
- Implement `/accounts/register`
- Implement `/accounts/verify-email`
- Implement `/accounts/authenticate`

---

## Member 2 – Backend Developer (Roles, Reset, CRUD) - John Rey Ancero

### Branch:
- `backend/roles-crud`

### Responsibilities:
- Implement `/accounts/forgot-password`
- Implement `/accounts/reset-password`
- Implement CRUD: `/accounts`, `/accounts/:id`
- Handle role-based authorization

---

##  Member 3 – Frontend Developer (Email Sign-Up, Verification, and Authentication) - Client Daguplo

### Branch:
- `frontend-signup-auth`

### Responsibilities:
- Build sign-up/login/verification UI
- Implement the sign-up, verification, and login components in the Angular boilerplate

---

## Member 4 - Frontend Developer (Profile Management, Admin Dashboard, and Fake Backend) - Hubert Nile Daanton

### Branch
- `frontend-profile-admin-fake-backend`

### Responsibilities:
- Implement profile management (view/edit)
- Build Admin Dashboard
- Integrate fake backend for development/testing

## Testing Branches (Optional)

If testing is distributed among members:

### `testing/functional-tests`
- Focus: Functional testing of full user flow
- Use case: Registration → Verification → Login → Profile → Admin panel

### `testing/security-tests`
- Focus: Test for vulnerabilities
- Includes: SQL injection, XSS, unauthorized access attempts
---

 Keep all branches up to date with `main`  
 Pull regularly and resolve conflicts  
 Push work frequently with meaningful commit messages  
 Collaborate using GitHub Issues or Discussions