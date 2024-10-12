# Performance Tuning

Some of CashPal's users are complaining that certain pages on the site have become painfully slow.

Your manager has done some investigation and found that a `JOIN` to the countries table is causing some slowness. They've determined that **denormalizing country data is a necessary risk for some performance benefits**.

## Assignment

Run a migration to speed up future performance:

1.  Add `country_code` and `country_name` columns to the `users` table (these are not optional fields, you'll need a [default](https://sentry.io/answers/how-do-i-add-a-column-with-a-default-value-to-an-existing-table-in-sql-server/)).
2.  Update the `users` table to include the data from the `country_code` and `country_name` columns.
3.  Move the data from the `countries` table to the `users` table.

**Bonus**:

*   Index the `country_code` column (`country_code_idx`) so that users can quickly be looked up by country.
*   Get rid of the countries table.

```sql
ALTER TABLE users
  ADD country_code TEXT;
ALTER TABLE users
  ADD country_name TEXT NOT NULL DEFAULT 'Unknown';

UPDATE users
SET country_code = countries.country_code,
    country_name = countries.name
FROM countries
WHERE users.country_id = countries.id;

CREATE INDEX country_code_idx ON users (country_code);

DROP TABLE countries;
-- TEST SUITE, DON'T TOUCH BELOW THIS LINE --

SELECT * FROM users;
```

| id | name            | age | country_id | username   | password    | is_admin | country_code | country_name      |
|----|-----------------|-----|------------|------------|-------------|----------|--------------|-------------------|
| 1  | Alice           | 30  | 1          | alice      | myLuggag3   | 1        | KH           | Kingdom of Hearts |
| 2  | Cheshire Cat    | 40  | 1          | chcat      | whichwa7    | 0        | KH           | Kingdom of Hearts |
| 3  | Mad Hatter      | 50  | 2          | madhatter  | teatime     | 0        | WL           | Wonderland        |
| 4  | Queen of Hearts | 60  | 2          | queen      | offw1th3r   | 1        | WL           | Wonderland        |
| 5  | White Rabbit    | 70  | 1          | rabbit     | lat3f0r3v3r | 0        | KH           | Kingdom of Hearts |
| 6  | Tweedle Dee     | 80  | 2          | tweedledee | dum         | 0        | WL           | Wonderland        |