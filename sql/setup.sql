-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    email TEXT,
    username TEXT NOT NULL PRIMARY KEY,
    avatar TEXT,
);