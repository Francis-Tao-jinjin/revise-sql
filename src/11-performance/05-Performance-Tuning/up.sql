CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    country_id INTEGER NOT NULL,
    username TEXT UNIQUE,
    password TEXT NOT NULL,
    is_admin BOOLEAN
);

CREATE TABLE countries (
  id INTEGER PRIMARY KEY,
  country_code TEXT,
  name TEXT NOT NULL
);

INSERT INTO users (id, name, age, country_id, username, password, is_admin)
VALUES (1, 'Alice', 30, 1, 'alice', 'myLuggag3', true);

INSERT INTO users (id, name, age, country_id, username, password, is_admin)
VALUES (2, 'Cheshire Cat', 40, 1, 'chcat', 'whichwa7', false);

INSERT INTO users (id, name, age, country_id, username, password, is_admin)
VALUES (3, 'Mad Hatter', 50, 2, 'madhatter', 'teatime', false);

INSERT INTO users (id, name, age, country_id, username, password, is_admin)
VALUES (4, 'Queen of Hearts', 60, 2, 'queen', 'offw1th3r', true);

INSERT INTO users (id, name, age, country_id, username, password, is_admin)
VALUES (5, 'White Rabbit', 70, 1, 'rabbit', 'lat3f0r3v3r', false);

INSERT INTO users (id, name, age, country_id, username, password, is_admin)
VALUES (6, 'Tweedle Dee', 80, 2, 'tweedledee', 'dum', false);

INSERT INTO countries (id, country_code, name)
VALUES (1, 'KH', 'Kingdom of Hearts');

INSERT INTO countries (id, country_code, name)
VALUES (2, 'WL', 'Wonderland');