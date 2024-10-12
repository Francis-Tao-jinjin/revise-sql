# Left Join

A `LEFT JOIN` will return every record from `table_a` regardless of whether or not any of those records have a match in `table_b`. A left join will _also_ return any matching records from `table_b`. Here is a Venn diagram to help visualize the effect of a `LEFT JOIN`.

![left-join](https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/JoZYX5L.png)

A small trick you can do to make writing the SQL query easier is define an [alias](https://en.wikipedia.org/wiki/Alias_(SQL)) for each table. Here's an example:

```sql
    SELECT e.name, d.name
    FROM employees e
    LEFT JOIN departments d
    ON e.department_id = d.id;
``` 

 ![Copy icon](/img/copy_icon.svg) 

Notice the simple alias declarations `e` and `d` for `employees` and `departments` respectively.

Some developers do this to make their queries less verbose. That said, I personally _hate it_ because single-letter variables are harder to grok.

## Assignment

The _CashPal_ team needs a report on all the transactions a user has made. Join the `users` and `transactions` tables on `users.id` and `transactions.user_id`.

Your query should return 3 fields:

1.  A user's `name` as `name`
2.  The sum of all of their transaction `amount`s as `sum`
3.  The count of all of their transactions as `count`

*   Be sure to group the data by the user's `id`.
*   Be sure to order the data by the `sum` field in descending order.
*   Be sure to still return user records of users who have no transactions.

## Solution

```sql
SELECT users.name, sum(transactions.amount) as sum, 
                count(transactions.amount) as count
FROM users LEFT JOIN transactions
ON users.id = transactions.user_id
GROUP BY users.id ORDER BY sum DESC;
```

| name     | sum    | count |
|----------|--------|-------|
| Allan    | 305.99 | 5     |
| Samantha | 100    | 1     |
| Lane     | 85.39  | 3     |
| Lance    | 50     | 1     |
| Tiffany  | 47.42  | 1     |
| David    | 10     | 1     |
| Hunter   | 9.56   | 1     |
| John     |        | 0     |
| Ram      |        | 0     |
| Darren   |        | 0     |
| Albert   |        | 0     |
| Alvin    |        | 0     |
| Al       |        | 0     |


# Right Join

A `RIGHT JOIN` is, as you may expect, the opposite of a `LEFT JOIN`. It returns all records from `table_b` regardless of matches, and all matching records between the two tables.

![right-join](https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/Cy2v9q5.png)

*Questions:*
We can retrieve the same records with a RIGHT JOIN and a LEFT JOIN by ... ?

>: We can retrieve the same records with a RIGHT JOIN and a LEFT JOIN by swapping the order of the tables and using the opposite join type.

## Full Join
A `FULL JOIN` combines the result set of the `LEFT JOIN` and `RIGHT JOIN` commands. It returns all records from both from `table_a` and `table_b` regardless of whether or not they have matches.

![Full-join](https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/uAXzpID.png)

*Questions:*
What is the best scenario to use a FULL JOIN?

>: A `FULL JOIN` is best used when you need to retrieve all records from both tables, regardless of whether there is a match between them. This is useful in scenarios where you want to combine datasets and include all possible data points, even if some of them do not have corresponding matches in the other table.


## 请问 INNER JOIN 和 FULL JOIN 是否都可以返回两个表的 所有列？

是的，`INNER JOIN` 和 `FULL JOIN` 都可以返回两个表的所有列，但它们的行为有所不同。

### `INNER JOIN`
`INNER JOIN` 只返回两个表中匹配的记录。如果某一行在其中一个表中没有匹配项，则该行不会出现在结果集中。

```sql
SELECT *
FROM table_a
INNER JOIN table_b
ON table_a.id = table_b.id;
```

### `FULL JOIN`
`FULL JOIN` 返回两个表中的所有记录。如果某一行在其中一个表中没有匹配项，则结果集中该行的另一表的列将包含 `NULL` 值。

```sql
SELECT *
FROM table_a
FULL JOIN table_b
ON table_a.id = table_b.id;
```

### 总结
- `INNER JOIN` 只返回匹配的记录。
- `FULL JOIN` 返回所有记录，包括不匹配的记录，并用 `NULL` 填充缺失的值。

这两种 JOIN 都可以返回两个表的所有列，但返回的行数和内容会有所不同。

## 什么情况下 LEFT JOIN 和 FULL JOIN 的结果会相同呢？假设使用 `SELECT *`

`LEFT JOIN` 和 `FULL JOIN` 的结果会相同的情况是当右表 `table_b`中的每一行在左表`table_a`中都有匹配项时。此时，`FULL JOIN` 不会返回任何额外的行，因为所有的行都已经在 `LEFT JOIN` 的结果中。

### 示例
假设有两个表 `table_a` 和 `table_b`，并且 `table_b` 中的每一行在 `table_a` 中都有匹配项：

```sql
-- table_a
id | name
---|------
1  | Alice
2  | Bob

-- table_b
id | age
---|----
1  | 30
2  | 25
```

### `LEFT JOIN` 查询
```sql
SELECT *
FROM table_a
LEFT JOIN table_b
ON table_a.id = table_b.id;
```

结果：
```
id | name  | id | age
---|-------|----|----
1  | Alice | 1  | 30
2  | Bob   | 2  | 25
```

### `FULL JOIN` 查询
```sql
SELECT *
FROM table_a
FULL JOIN table_b
ON table_a.id = table_b.id;
```

结果：
```
id | name  | id | age
---|-------|----|----
1  | Alice | 1  | 30
2  | Bob   | 2  | 25
```

在这种情况下，`LEFT JOIN` 和 `FULL JOIN` 的结果是相同的，因为 `table_b` 中的每一行在 `table_a` 中都有匹配项。