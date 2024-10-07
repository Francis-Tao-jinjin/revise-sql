# Having
======

When we need to filter the results of a `GROUP BY` query even further, we can use the `HAVING` clause. The `HAVING` clause specifies a search condition for a group.

The `HAVING` clause is similar to the `WHERE` clause, but it operates on groups _after_ they've been grouped, rather than rows _before_ they've been grouped.
```sql
    SELECT album_id, count(id) as count
    FROM songs
    GROUP BY album_id
    HAVING count > 5;
``` 

This query returns the `album_id` and count of its songs, but only for albums with more than `5` songs.

## Assignment
----------

A new page in the _CashPal_ app allows users to see how much money they've spent on a specific kind of transaction, and alerts them if that amount is fairly large. Let's write a query that returns the _total_ amount spent by each user on lunch when that balance is greater than `20`.

Your query should:

*   Return a `sender_id` (the person spending money) and a `balance`.
*   The `balance` is the `sum()` of all `amount`s spent _successfully_.
*   Don't return any rows that have a `NULL` `sender_id`.
*   Group by `sender_id`.
*   The `note` must contain the word `lunch` to be a part of the aggregation.
*   The aggregated `balance` must be greater than 20.
*   Order the results by the `balance` in ascending order.

```sql
SELECT sender_id, sum(amount) as balance from transactions
  WHERE sender_id is NOT NULL and note LIKE '%lunch%'
  GROUP BY sender_id HAVING balance > 20 ORDER BY balance;
```