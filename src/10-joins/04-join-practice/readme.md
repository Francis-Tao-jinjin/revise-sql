# Join Practice

Joins take some time to get used to, but the key to understanding them and using them effectively is _practice_!

## Multiple Joins

To incorporate data from more than _two_ tables, you can utilize multiple joins to execute more complex queries!

    SELECT *
    FROM employees
    LEFT JOIN departments
    ON employees.department_id = departments.id
    INNER JOIN regions
    ON departments.region_id = regions.id
    

 ![Copy icon](/img/copy_icon.svg) 

## Assignment

Our front-end team is finalizing the _profile_ page for _CashPal_. We need to write a query that returns all the `user` data they need for an individual user's profile. The query needs to return the following fields:

1.  The user's `id`
2.  The user's `name`
3.  The user's `age`
4.  The user's `username`
5.  The user's country name, renamed to `country_name`
6.  The sum of the _successful_ transactions from the user, renamed to `balance`

Return only a single user record - specifically the one with `id=6`.

```sql
SELECT users.id,
       users.name,
       users.age,
       users.username,
       countries.name as country_name,
       SUM(transactions.amount) as balance
FROM users
LEFT JOIN transactions
ON transactions.user_id = users.id
INNER JOIN countries
ON users.country_code = countries.country_code
WHERE transactions.was_successful GROUP BY users.id; 
-- WHERE users.id = 6 AND transactions.was_successful;
```

| id | name     | age | username  | country_name  | balance |
|----|----------|-----|-----------|---------------|---------|
| 1  | David    | 34  | DavidDev  | United States | 10      |
| 2  | Samantha | 29  | Sammy93   | Brazil        | 100     |
| 5  | Hunter   | 30  | Hdev92    | United States | 9.56    |
| 6  | Allan    | 27  | Alires    | United States | 37.56   |
| 7  | Lance    | 20  | LanChr    | United States | 50      |
| 8  | Tiffany  | 28  | Tifferoon | United States | 47.42   |
| 9  | Lane     | 27  | wagslane  | United States | 35.39   |