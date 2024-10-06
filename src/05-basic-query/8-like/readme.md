# Like
Sometimes we don't have the luxury of knowing exactly what it is we need to query. Have you ever wanted to look up a song or a video but you only remember part of the name? SQL provides us an option for when we're in situations LIKE this.

The LIKE keyword allows for the use of the `%` and `_` wildcard operators. Let's focus on `%` first.

## % Operator
The `%` operator will match zero or more characters. We can use this operator within our query string to find more than just exact matches depending on where we place it.

### Product starts with "banana":
```sql
SELECT * FROM products
WHERE product_name LIKE 'banana%';
```
### Product ends with "banana":
```sql
SELECT * FROM products
WHERE product_name LIKE '%banana';
```
### Product contains "banana":
```sql
SELECT * FROM products
WHERE product_name LIKE '%banana%';
```
## Assignment
Our HR team is dealing with a ticket from one of our users but they are having trouble pulling up their record in the database. They are pretty sure the user's name starts with Al.

Write a query that returns all the fields for records where the user's name starts with Al.

## Underscore Operator
As discussed, the % wildcard operator matches zero or more characters. Meanwhile, the _ wildcard operator only matches a single character.
```sql
SELECT * FROM products
    WHERE product_name LIKE '_oot';
```
The query above matches products like:

boot
root
foot

```sql
SELECT * FROM products
    WHERE product_name LIKE '__oot';
```
The query above matches products like:

shoot
groot

### Assignment
HR has been able to narrow down their query further! They want a report of all user data for users whose names start with Al and are exactly 5 characters long.