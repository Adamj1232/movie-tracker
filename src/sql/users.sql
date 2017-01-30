DROP DATABASE IF EXISTS users;
CREATE DATABASE users;

\c users;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR (123) NOT NULL,
  password VARCHAR (123) NOT NULL,
  email VARCHAR (123) NOT NULL
);

CREATE TABLE favorites (
  id SERIAL NOT NULL PRIMARY KEY,
  movie_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  title VARCHAR (123) NOT NULL,
  poster_path VARCHAR (250) NOT NULL,
  release_date VARCHAR (123) NOT NULL,
  vote_average VARCHAR (123) NOT NULL,
  overview VARCHAR NOT NULL
);

CREATE UNIQUE INDEX email ON users (email);


INSERT INTO users (name, password, email)
  VALUES ('Taylor', 'password', 'tman2272@aol.com');
