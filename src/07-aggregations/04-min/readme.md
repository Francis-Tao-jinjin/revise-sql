# Min
===

The `min` function works the same as the `max` function but finds the _lowest_ value instead of the _highest_ value.

```sql
    SELECT product_name, min(price)
    FROM products;
```

This query returns the `product_name` and the `price` fields of the record with the lowest `price`.

## Assignment
----------

Use a `min` aggregation to find only the `age` of our youngest _CashPal_ user in the United States in the `users` table. The `country_code` of the United States is `US`.

Users table
-----------
```
    | id | name | age | country_code | username | password | is_admin |
``` 

```sql
SELECT min(age) from users WHERE country_code = 'US';
```