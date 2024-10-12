# Namespacing on Tables

When working with multiple tables, you can specify which table a field exists on using a `.`. For example:

`table_name.column_name`

```sql
SELECT students.name, classes.name
FROM students
INNER JOIN classes ON classes.class_id = students.class_id;
```

The above query returns the `name` field from the `students` table and the name field from the `classes` table.

## Assignment

Adjust the query to:

*   Return the `name`, and `age` fields from the `users` table.
*   Return the `name` field from the `countries` table and rename it to `country_name`.
*   Sort by the `country_name` in ascending order.

## Solution:

```sql
SELECT users.name, users.age, countries.name as country_name
FROM users
INNER JOIN countries ON countries.country_code = users.country_code
ORDER BY country_name;
```

| name     | age | country_name  |
|----------|-----|---------------|
| Samantha | 29  | Brazil        |
| Albert   | 55  | Brazil        |
| John     | 39  | Canada        |
| Darren   | 15  | Canada        |
| Ram      | 42  | India         |
| Al       | 39  | Japan         |
| David    | 34  | United States |
| Hunter   | 30  | United States |
| Allan    | 27  | United States |
| Lance    | 20  | United States |
| Tiffany  | 28  | United States |
| Lane     | 27  | United States |
| Alvin    | 27  | United States |