Tables
1. Users
id
role
firstname
lastname
username
email
password
created_at

2. Genre
id
name
created_at

3. books
id
user_id
title
genre_id
description
cover_image
content
status(draft, publish)
created_at
published_at

4. views
id
book_id
user_id
created_at

5. likes
id
book_id
user_id
created_at

6. comment
id
book_id
user_id
created_at
comment

7. followers
id
follower_id
following_id
created_at

8. Bookmark
id
user_id
book_id
created_at

9. streaks
id
user_id
streak_count
created_at