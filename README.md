# TBlog — Blogging Platform API

A RESTful backend API for a blogging platform built as a portfolio project to demonstrate backend development skills using Node.js, Express and PostgreSQL.

---

## About the Project

TBlog is a full-featured blogging platform API that allows users to create accounts, write and publish blog posts, interact with other writers through comments and likes, follow other users and track their writing streaks. The project was built to demonstrate real world backend development patterns including authentication, role-based access control, middleware and database design.

---

## Features

- User registration and login with JWT authentication
- Password hashing with bcrypt
- Role-based access control (user and admin roles)
- Create, read, update and delete blog posts
- Draft and publish functionality
- Categories and tags for posts
- Comments on posts
- Like and unlike posts
- Follow and unfollow other users
- Writing streak tracking
- Pagination on post listings
- Admin panel functionality
- Consistent API response format using sendResponse helper
- Winston logging for error and activity tracking
- Input validation and error handling throughout

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| PostgreSQL | Database |
| JWT | Authentication |
| bcrypt | Password hashing |
| Winston | Logging |
| dotenv | Environment variable management |

---

## Database Schema

The API is built around 9 tables:

- **users** — stores user accounts and profile information
- **posts** — blog posts with draft and published status
- **categories** — post categories
- **tags** — post tags
- **post_tags** — many to many relationship between posts and tags
- **comments** — user comments on posts
- **likes** — post likes
- **follows** — user follow relationships
- **streaks** — writing streak tracking per user

---

## Architecture

The project follows a clean three layer architecture:

```
Route → Controller → Service
```

- **Routes** handle incoming HTTP requests and pass them to controllers
- **Controllers** handle request validation and call the appropriate service
- **Services** contain the business logic and database queries

---

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/register | Register a new user |
| POST | /auth/login | Login and receive JWT token |

### Posts
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /posts | Create a new post |
| GET | /posts | Get all published posts with pagination |
| GET | /posts/:id | Get a single post |
| PATCH | /posts/:id | Update a post |
| DELETE | /posts/:id | Delete a post |

### Comments
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /posts/:id/comments | Add a comment to a post |
| GET | /posts/:id/comments | Get all comments on a post |
| DELETE | /comments/:id | Delete a comment |

### Likes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /posts/:id/like | Like a post |
| DELETE | /posts/:id/like | Unlike a post |

### Follows
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /users/:id/follow | Follow a user |
| DELETE | /users/:id/follow | Unfollow a user |

### Admin
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /admin/users | Get all users |
| DELETE | /admin/users/:id | Delete a user |
| DELETE | /admin/posts/:id | Delete any post |

---

## Getting Started

### Prerequisites
- Node.js v18 or higher
- PostgreSQL

### Installation

1. Clone the repository
```bash
git clone https://github.com/Sefinah/tblog.git
cd tblog
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory
```env
PORT=3000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
```

4. Run the database migrations
```bash
psql -U your_user -d your_database -f migrations/schema.sql
```

5. Start the server
```bash
npm start
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Port the server runs on |
| DATABASE_URL | PostgreSQL connection string |
| JWT_SECRET | Secret key for JWT signing |

---

## What I Learned

This was my first backend project. Building TBlog taught me how to structure a Node.js API properly, design a relational database, implement secure authentication with JWT and bcrypt, write reusable middleware and handle errors consistently across an application. Everything I learned here was applied and expanded in my next project, SponsorMe.

---

## Author

**Sefinat Hussein**
- GitHub: [@Sefinah](https://github.com/Sefinah)
- LinkedIn: [linkedin.com/in/sefinat-hussein](https://linkedin.com/in/sefinat-hussein)

---

