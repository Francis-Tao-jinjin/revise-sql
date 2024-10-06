# Logical Operators

## AND
We often need to use multiple conditions to retrieve the exact information we want. We can begin to structure much more complex queries by using multiple conditions together to narrow down the search results of our query.

The logical AND operator can be used to narrow down our result sets even more!
```sql
AND operator
SELECT product_name, quantity, shipment_status
    FROM products
    WHERE shipment_status = 'pending'
    AND quantity BETWEEN 0 and 10;
```

This only retrieves records where both the shipment_status is "pending" AND the quantity is between 0 and 10.

### Equality operators
All of the following operators are supported in SQL. The = is the main one to watch out for, it's not == like in many other languages! SQLite does allow for == but it's not a good habit to get into, as other dialects of SQL will not recognize == as valid syntax.

<ul>
 <li> = </li>
 <li> < </li>
 <li> > </li>
 <li> <= </li>
 <li> >= </li>
</ul>

### Assignment
The legal restrictions in Canada have changed! The way we have to handle Canadian minors' CashPal transactions is more strict. We need to find all of those users, so we can see how many users this change affects!

Write a query that retrieves all of the fields from the users table who are from Canada (CA), and are under the age of 18.


## OR
As you've probably guessed, if the logical AND operator is supported, the OR operator is probably supported as well.

```sql
SELECT product_name, quantity, shipment_status
    FROM products
    WHERE shipment_status = 'out of stock'
    OR quantity BETWEEN 10 and 100;
```

This query retrieves records where either the shipment_status condition OR the quantity condition are met.

### Order of operations
You can group logical operations with parentheses to specify the order of operations.

```sql
(this AND that) OR the_other
```
### Assignment
The laws have changed again! Now we need to see how many affected users meet this criteria:

Users who are from the United States or Canada, and are under 18

Write a query that retrieves the count of every user (renamed as just junior_count) that matches the conditions above.