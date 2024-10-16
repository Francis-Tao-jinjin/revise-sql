# 3rd Normal Form (3NF)
=====================

A table in [3rd normal form](https://en.wikipedia.org/wiki/Third_normal_form) follows all the rules of 2nd normal form, and one _additional_ rule:

*   All columns that aren't part of the primary key are dependent _solely_ on the primary key.

Notice that this is only _slightly_ different from second normal form. In second normal form we can't have a column completely dependent on a _part_ of the primary key, and in third normal form we can't have a column that is entirely dependent on _anything_ that isn't the entire primary key.

## Example of 2nd NF, but not 3rd NF
---------------------------------

In this table, the primary key is simply the `id` column.

| id | name    | first_initial | email                  |
|----|---------|---------------|------------------------|
| 1  | Lane    | l             | lane.works@example.com |
| 2  | Breanna | b             | breanna@example.com    |
| 3  | Lane    | l             | lane.right@example.com |

This table _is_ in 2nd normal form because `first_initial` is _not_ dependent on a part of the primary key. However, because it _is_ dependent on the `name` column it doesn't adhere to 3rd normal form.

## Example of 3rd normal form
--------------------------

The way to convert the table above to 3NF is to add a new table that maps a `name` directly to its `first_initial`. Notice how similar this solution is to 2NF.

| id | name    | email                  |
|----|---------|------------------------|
| 1  | Lane    | lane.works@example.com |
| 2  | Breanna | breanna@example.com    |
| 3  | Lane    | lane.right@example.com |

| name    | first_initial |
|---------|---------------|
| Lane    | l             |
| Breanna | b             |

## 3NF is _usually_ a good idea
----------------------------

The same exact rule of thumb applies to the second and third normal forms.

> Optimize for data integrity and data de-duplication _first_ by adhering to 3NF. If you have speed issues, de-normalize accordingly.

## Assignment
----------

This rollout of business accounts is really causing some headaches for our development team. The `companies` table has been a disaster. Our database architect pointed out that the idea behind the `size` field is _redundant_. If a company has more than `100` employees, we consider it "large", otherwise we consider it "small". That's something we can _calculate_ from the `employees` field, rather than storing it separately.

1.  Remove the `size` column from the `companies` table by modifying the `CREATE TABLE` statement.
2.  Alter the `SELECT` statement to _calculate_ a `size` field in the result set that works the same way. Return the other fields as normal.

Tip
---

Remember the [IIF function](https://www.sqlitetutorial.net/sqlite-functions/sqlite-iif/) and the `AS` clause.

## Solutions

```sql
CREATE TABLE companies (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  num_employees INTEGER NOT NULL
);

-- Don't touch between these comments --

INSERT INTO companies(name, num_employees)
  VALUES ('Pfizer', 10000);
INSERT INTO companies(name, num_employees)
  VALUES ('WorldBanc', 80);
INSERT INTO companies(name, num_employees)
  VALUES ('Fantasy Quest', 30);
INSERT INTO companies(name, num_employees)
  VALUES ('Walmart', 1000);

-- Don't touch between these comments --

SELECT *, IIF(num_employees > 100, 'large', 'small') AS size
  FROM companies;
```

| id | name          | num_employees | size  |
|----|---------------|---------------|-------|
| 1  | Pfizer        | 10000         | large |
| 2  | WorldBanc     | 80            | small |
| 3  | Fantasy Quest | 30            | small |
| 4  | Walmart       | 1000          | large |
