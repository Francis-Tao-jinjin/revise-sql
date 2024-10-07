# One to many
===========

When talking about the relationships between _tables_, a one-to-many relationship is probably the most commonly used relationship.

A one-to-many relationship occurs when a single record in one table is related to potentially many records in another table.

_Note: The one->many relation only goes _one way_, a record in the second table can _not_ be related to multiple records in the first table!_

## Examples of one-to-many relationships
-------------------------------------

*   A `customers` table and an `orders` table. Each customer has `0`, `1`, or many orders that they've placed.
*   A `users` table and a `transactions` table. Each `user` has `0`, `1`, or many transactions that they've taken part in.
```sql
    CREATE TABLE customers (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL
    );
    
    CREATE TABLE orders (
        id INTEGER PRIMARY KEY,
        amount INTEGER NOT NULL,
        customer_id INTEGER,
        CONSTRAINT fk_customers
        FOREIGN KEY (customer_id)
        REFERENCES customers(id)
    );
```

## Assignment
----------

It turns out that when we originally designed the CashPal database schema we assumed that users would only have a _single_ country they lived in. With digital nomads becoming a thing, it turns out many users have dual citizenship.

Instead of a single `users` table where each user has a single `country_code`, do the following:

*   Remove the `country_code` field from the `users` table
*   Create a new table called `countries` with 4 fields:
    *   `id`: an integer primary key
    *   `country_code`: a `TEXT`
    *   `name`: a `TEXT`
    *   `user_id`: an integer foreign key to the `users` table's `id` field

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  username TEXT UNIQUE,
  password TEXT NOT NULL,
  is_admin BOOLEAN
);

CREATE TABLE countries (
  id INTEGER PRIMARY KEY,
  country_code TEXT NOT NULL,
  name TEXT NOT NULL,
  user_id INTEGER,
  CONSTRAINT user_country
  FOREIGN KEY (user_id)
  REFERENCES users(id)
);

-- Don't touch below this line --

INSERT INTO users(name, age, username, password, is_admin)
VALUES ('David', 34, 'david.lang', 'secure1234', false);

INSERT INTO users(name, age, username, password, is_admin)
VALUES ('Sam', 12, 'sam-show', 'nasjds134', false);

INSERT INTO users(name, age, username, password, is_admin)
VALUES ('Lane', 19, 'wagslane', '2jk3bAkm', false);

INSERT INTO users(name, age, username, password, is_admin)
VALUES ('Allan', 27, 'allan.jules', '243nldn', false);

INSERT INTO countries(country_code, name, user_id)
VALUES ('US', 'United States', 1);

INSERT INTO countries(country_code, name, user_id)
VALUES ('CA', 'Canada', 1);

INSERT INTO countries(country_code, name, user_id)
VALUES ('IN', 'India', 2);

INSERT INTO countries(country_code, name, user_id)
VALUES ('JP', 'Japan', 3);

INSERT INTO countries(country_code, name, user_id)
VALUES ('BR', 'Brazil', 4);

SELECT * FROM countries
WHERE user_id IN (
    SELECT id FROM users
)
```

| id | country_code | name          | user_id |
|----|--------------|---------------|---------|
| 1  | US           | United States | 1       |
| 2  | CA           | Canada        | 1       |
| 3  | IN           | India         | 2       |
| 4  | JP           | Japan         | 3       |
| 5  | BR           | Brazil        | 4       |
