# Banking Relationships
=====================

Someone added new columns to CashPal's `users` table that include information on the user's banking institution. Unfortunately, the developer that made these changes had assumed that a user could only have a single banking institution.

We know that a user can be a member of multiple banks and banks can service a great deal of CashPal users. You've been tasked with cleaning up the `users` table and creating any additional tables to properly support a many-to-many relationship between banks and users.

## Challenge
---------

Given what you've learned about normalization and many-to-many relationships, do the following:

*   Create a new table called `banks` that contains any bank-related columns that were incorrectly added to the `users` table.
*   Create a joining table named `users_banks` with `user_id` and `bank_id` columns. Add any constraints such that there is never a duplicate row with the same `user_id` and `bank_id` combination.

```sql
CREATE TABLE banks(
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  routing_number INTEGER
);

CREATE TABLE users_banks(
  user_id INTEGER,
  bank_id INTEGER,
  UNIQUE(user_id, bank_id)
);

-- Don't touch below this line --
INSERT INTO banks(id, name, routing_number)
VALUES (1, 'Central Savings', 123456789);

INSERT INTO banks(id, name, routing_number)
VALUES (2, 'Bank of Boots', 987654321);

INSERT INTO banks(id, name, routing_number)
VALUES (3, 'Metro Trust Bank', 456789123);

INSERT INTO users_banks(user_id, bank_id)
VALUES (1, 1);

INSERT INTO users_banks(user_id, bank_id)
VALUES (1, 2);

INSERT INTO users_banks(user_id, bank_id)
VALUES (2, 2);

INSERT INTO users_banks(user_id, bank_id)
VALUES (2, 3);

INSERT INTO users_banks(user_id, bank_id)
VALUES (3, 3);

INSERT INTO users_banks(user_id, bank_id)
VALUES (4, 3);

SELECT * FROM banks
WHERE id IN (
    SELECT bank_id FROM users_banks
)
```

| id | name             | routing_number |
|----|------------------|----------------|
| 1  | Central Savings  | 123456789      |
| 2  | Bank of Boots    | 987654321      |
| 3  | Metro Trust Bank | 456789123      |
