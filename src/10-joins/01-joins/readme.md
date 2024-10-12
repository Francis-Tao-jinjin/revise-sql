# Joins
=====

Joins are one of the most important features that SQL offers. Joins allow us to make use of the relationships we have set up between our tables. In short, joins allow us to query multiple tables at the _same time._

## Inner Join
----------

The simplest and most common type of join in SQL is the `INNER JOIN`. By default, a `JOIN` command is an `INNER JOIN`. An `INNER JOIN` returns all of the records in `table_a` that have matching records in `table_b` as demonstrated by the following Venn diagram.

![inner join](https://storage.googleapis.com/qvault-webapp-dynamic-assets/course_assets/DS7U62Q.png)

## On
--

To perform a table join, we need to tell the database how to "match up" the rows from each table. The `ON` clause specifies the columns from each table that should be compared.

When the same column name exists in both tables, we have to **specify which table each column comes from** using the table name (or an alias) followed by a dot `.` before the column name.

    SELECT *
    FROM employees
    INNER JOIN departments
    ON employees.department_id = departments.id;
    

 ![Copy icon](/img/copy_icon.svg) 

In this query:

*   `employees.department_id` refers to the `department_id` column from the `employees` table.
*   `departments.id` refers to the `id` column from the `departments` table.

The `ON` clause ensures that rows are matched based on these columns, creating a relationship between the two tables.

The query above returns _all_ the fields from _both_ tables. The `INNER` keyword only affects the number of _rows_ returned, not the number of _columns_.

## Why is this important?
----------------------

In many databases, different tables might share the same column names, such as `id`. If you don't specify the table name (or alias) for a column, the database won't know which column to use for the join. For example, writing `ON id = id` won't work because the database can't distinguish between the `id` columns in each table.

## Assignment
----------

Our frontend team is working on a profile page and would like to display a user's country _name_ instead of just the country's two-letter _code_. Let's start by writing a simple join between the `users` table and `countries` table. We will expand on this query more in the next exercise.

*   Write an `INNER JOIN` between `users` and `countries`
*   Return _all_ fields from both tables
*   Join on the `country_code` field

```sql
SELECT *
FROM users INNER JOIN countries
ON users.country_code = countries.country_code;
```

| id | name     | age | country_code | username   | password           | is_admin | id | country_code | name          |
|----|----------|-----|--------------|------------|--------------------|----------|----|--------------|---------------|
| 1  | David    | 34  | US           | DavidDev   | insertPractice     | 0        | 1  | US           | United States |
| 2  | Samantha | 29  | BR           | Sammy93    | addingRecords!     | 0        | 5  | BR           | Brazil        |
| 3  | John     | 39  | CA           | Jjdev21    | welovebootdev      | 0        | 2  | CA           | Canada        |
| 4  | Ram      | 42  | IN           | Ram11c     | thisSQLcourserocks | 0        | 3  | IN           | India         |
| 5  | Hunter   | 30  | US           | Hdev92     | backendDev         | 0        | 1  | US           | United States |
| 6  | Allan    | 27  | US           | Alires     | iLoveB00tdev       | 1        | 1  | US           | United States |
| 7  | Lance    | 20  | US           | LanChr     | b00tdevisbest      | 0        | 1  | US           | United States |
| 8  | Tiffany  | 28  | US           | Tifferoon  | autoincrement      | 1        | 1  | US           | United States |
| 9  | Lane     | 27  | US           | wagslane   | update_me          | 0        | 1  | US           | United States |
| 10 | Darren   | 15  | CA           | Dshan      | found_me           | 0        | 2  | CA           | Canada        |
| 11 | Albert   | 55  | BR           | BertDev    | one_al_name        | 0        | 5  | BR           | Brazil        |
| 12 | Alvin    | 27  | US           | AlvinA27   | easter_egg         | 0        | 1  | US           | United States |
| 13 | Al       | 39  | JP           | quickCoder | snake_case         | 0        | 4  | JP           | Japan         |

