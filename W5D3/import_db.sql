PRAGMA foreign_keys = ON;

DROP TABLE if exists question_likes;
DROP TABLE if exists replies; 
DROP TABLE if exists questions;
DROP TABLE if exists users; 

CREATE TABLE users (
  id INTEGER PRIMARY KEY, 
  fname VARCHAR(255) NOT NULL, 
  lname VARCHAR(255) NOT NULL
); 

INSERT INTO 
  users(fname, lname) 
VALUES 
  ("David", "Ross"),
  ("Kien", "Nguyen");


CREATE TABLE questions (
  id INTEGER PRIMARY KEY, 
  title VARCHAR(255) NOT NULL, 
  body TEXT NOT NULL,
  author_id INTEGER NOT NULL,

  FOREIGN KEY (author_id) REFERENCES users(id) 
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY, 
  question_id INTEGER NOT NULL,  --foreign key references questions 
  parent_id INTEGER,             --self referential foreign key (no not null constraint because reply can have no parent)
  body TEXT NOT NULL,           -- text because not fixed length 
  author_id INTEGER NOT NULL,

  FOREIGN KEY (author_id) REFERENCES user(id),
  FOREIGN KEY (question_id) REFERENCES questions(id), 
  FOREIGN KEY (parent_id) REFERENCES replies(id) 
); 

CREATE TABLE question_likes ( 
  id INTEGER PRIMARY KEY, 
  users_id INTEGER NOT NULL, 
  question_id INTEGER NOT NULL, 

  FOREIGN KEY (users_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
); 

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  question_id INTEGER,
  user_id INTEGER,
  
  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);