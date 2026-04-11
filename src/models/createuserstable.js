export const userTable = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    role VARCHAR(100) DEFAULT 'reader' CHECK (role IN ('admin', 'writer', 'reader')),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    user_name VARCHAR(100) UNIQUE,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`

export const genreTable = `
CREATE TABLE IF NOT EXISTS genre (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`

export const bookTable = `
CREATE TABLE IF NOT EXISTS books (
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id) ON DELETE CASCADE,
title VARCHAR(100),
genre_id INT REFERENCES genre(id) ON DELETE SET NULL,
description TEXT,
cover_image TEXT,
content TEXT,
status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`

export const viewTable = `
CREATE TABLE IF NOT EXISTS views (
id SERIAL PRIMARY KEY,
book_id INT REFERENCES books(id),
user_id INT REFERENCES users(id),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`

export const likeTable = `
CREATE TABLE IF NOT EXISTS likes (
id SERIAL PRIMARY KEY,
book_id INT REFERENCES books(id),
user_id INT REFERENCES users(id),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`

export const commentTable = `
CREATE TABLE IF NOT EXISTS comments (
id SERIAL PRIMARY KEY,
book_id INT REFERENCES books(id),
user_id INT REFERENCES users(id),
comment VARCHAR(100)
)
`

export const followerTable = `
CREATE TABLE IF NOT EXISTS followers (
id SERIAL PRIMARY KEY,
followers_id INT REFERENCES users(id),
following_id INT REFERENCES users(id),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`

export const bookmarkTable = `
CREATE TABLE IF NOT EXISTS bookmarks (
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id),
book_id INT REFERENCES books(id),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`

export const streakTable = `
CREATE TABLE IF NOT EXISTS streaks (
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id),
streak_count INT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`
