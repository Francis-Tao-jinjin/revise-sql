# No Tables
=========

When working on a back-end application, this doesn't come up often, but it's important to remember that **SQL is a full programming language**. We usually use it to interact with data stored in tables, but it's quite flexible and powerful.

For example, you can `SELECT` information that's simply calculated, with no tables necessary.
```sql
    SELECT 5 + 10 as sum;
```

## Assignment
----------

Finance has found that people who have lived longer than `40` years need to start thinking about retirement. Write a query that returns all the `users` who are more than `40` years old. Unfortunately, this table awkwardly stores age in _days_ in the `age_in_days` field.

Use a subquery to convert `40 years -> days` and filter on that. Assume every year has `365` days.

```sql
SELECT id, name, (age_in_days / 365) as age, country_code, username FROM users WHERE age > 40;
```