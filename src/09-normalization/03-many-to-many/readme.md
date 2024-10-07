# Many to many
============

A many-to-many relationship occurs when multiple records in one table can be related to multiple records in another table.

## Examples of many-to-many relationships
--------------------------------------

*   A `products` table and a `suppliers` table - Products may have `0` to many suppliers, and suppliers can supply `0` to many products.
*   A `classes` table and a `students` table - Students can take potentially many classes and classes can have many students enrolled.

## Joining table
-------------

Joining tables help define many-to-many relationships between data in a database. As an example when defining the relationship above between products and suppliers, we would define a joining table called `products_suppliers` that contains the primary keys from the tables to be joined.

Then, when we want to see if a supplier supplies a specific product, we can look in the joining table to see if the ids share a row.

## Unique Constraint across 2 fields
---------------------------------

When enforcing specific schema constraints we may need to enforce the `UNIQUE` constraint across two different fields.
```sql
    CREATE TABLE product_suppliers (
      product_id INTEGER,
      supplier_id INTEGER,
      UNIQUE(product_id, supplier_id)
    );
```

This ensures that we _can_ have multiple rows with the same `product_id` or `supplier_id`, but we can't have two rows where _both_ the `product_id` and `supplier_id` are the same.

## Assignment
----------

We have _another_ issue with our current user<->country relationship! In the current schema, a user can have many countries associated with it, but there are duplicate records! If two users are associated with the United States, we're creating two `countries` records.

It would be better if each country only had a single record. That way, when a country changes its metadata (for example, it decides to rename itself) we only have to update _one_ record.

Use a joining table to de-deduplicate country data.

*   Remove the `user_id` field from the `countries` table
*   Create a new table called `users_countries`. It should have two fields:
    *   `country_id`
    *   `user_id`
*   Add a "unique together" constraint on those id fields

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
  country_code TEXT,
  name TEXT
);

CREATE TABLE users_countries (
  country_id INTEGER,
  user_id INTEGER,
  UNIQUE(country_id, user_id)
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

INSERT INTO countries(country_code, name)
VALUES ('US', 'United States');

INSERT INTO countries(country_code, name)
VALUES ('CA', 'Canada');

INSERT INTO countries(country_code, name)
VALUES ('IN', 'India');

INSERT INTO countries(country_code, name)
VALUES ('JP', 'Japan');

INSERT INTO countries(country_code, name)
VALUES ('BR', 'Brazil');

INSERT INTO users_countries(country_id, user_id)
VALUES (1, 1);

INSERT INTO users_countries(country_id, user_id)
VALUES (1, 2);

INSERT INTO users_countries(country_id, user_id)
VALUES (2, 2);

INSERT INTO users_countries(country_id, user_id)
VALUES (2, 3);

INSERT INTO users_countries(country_id, user_id)
VALUES (3, 3);

INSERT INTO users_countries(country_id, user_id)
VALUES (4, 3);

SELECT * FROM countries
WHERE id IN (
    SELECT country_id FROM users_countries
)
```

| id | country_code | name          |
|----|--------------|---------------|
| 1  | US           | United States |
| 2  | CA           | Canada        |
| 3  | IN           | India         |
| 4  | JP           | Japan         |
