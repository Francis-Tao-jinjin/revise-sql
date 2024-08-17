CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  country_code TEXT NOT NULL,
  username TEXT UNIQUE,
  password TEXT NOT NULL,
  is_admin BOOLEAN
);

INSERT INTO users(name, age, country_code, username, password, is_admin)
VALUES ('David', 34, 'US', 'DavidDev', 'insertPractice', false);

INSERT INTO users(name, age, country_code, username, password, is_admin)
VALUES ('Samantha', 29, 'BR', 'Sammy93', 'addingRecords!', false);

INSERT INTO users(name, age, country_code, username, password, is_admin)
VALUES ('John', 39, 'CA', 'Jjdev21', 'welovebootdev', false);

INSERT INTO users(name, age, country_code, username, password, is_admin)
VALUES ('Ram', 42, 'IN', 'Ram11c', 'thisSQLcourserocks', false);

INSERT INTO users(name, age, country_code, username, password, is_admin)
VALUES ('Hunter', 30, 'US', 'Hdev92', 'backendDev', false);

INSERT INTO users(name, age, country_code, username, password, is_admin)
VALUES ('Allan', 27, 'US', 'Alires', 'iLoveB00tdev', true);

INSERT INTO users(name, age, country_code, username, password, is_admin)
VALUES ('Lance', 20, 'US', 'LanChr', 'b00tdevisbest', false);

INSERT INTO users(name, age, country_code, username, password, is_admin)
VALUES ('Tiffany', 28, 'US', 'Tifferoon', 'autoincrement', true);