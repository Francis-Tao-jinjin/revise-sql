# Subqueries
==========

Sometimes a single query is not enough to retrieve the specific records we need.

It is possible to run a query on the _result set_ of another query - a query within a query! This is called "query-ception"... erm... I mean a "subquery".

Subqueries can be very useful in a number of situations when trying to retrieve specific data that wouldn't be accessible by simply querying a single table.

Retrieving data from multiple tables
------------------------------------

Here is an example of a subquery:
```sql
    SELECT id, song_name, artist_id
    FROM songs
    WHERE artist_id IN (
        SELECT id
        FROM artists
        WHERE artist_name LIKE 'Rick%'
    );
```

In this hypothetical database, the query above selects all of the `id`s, `song_name`s, and `artist_id`s from the `songs` table that are written by artists whose name starts with "Rick". Notice that the subquery allows us to use information from a different table - in this case the `artists` table.

## Subquery syntax
---------------

The only syntax unique to a subquery is the parentheses surrounding the nested query. The `IN` operator could be different, for example, we could use the `=` operator if we expect a single value to be returned.

## Assignment
----------

One of CashPal's customer service representatives needs us to pull all the transactions for a specific user. Trouble is, they only know the user's `name`, not their `id`.

Use a subquery to return all transaction details for the user with the name "David".

### Transactions Table Schema
```
| id | user_id | recipient_id | sender_id | note | amount | was_successful |
```
### Users Table Schema
```
| id | name | age | country_code | username | password | is_admin |
```

```sql
SELECT * FROM transactions
WHERE user_id is (
  SELECT id FROM users
  WHERE name is 'David'
)
```

| id | user_id | recipient_id | sender_id | note                       | amount | was_successful |
|----|---------|--------------|-----------|----------------------------|--------|----------------|
| 1  | 1       |              | 4         | Testing transaction!       | 10.5   | 1              |
| 2  | 1       | 10           |           | Thanks for lunch!          | 9.56   | 1              |
| 3  | 1       |              | 2         | Car problems               | 256.21 | 0              |
| 4  | 1       | 8            |           | Happy birthday!!           | 50     | 1              |
| 9  | 1       |              | 23        | thanks for lunch yesterday | 10     | 1              |
