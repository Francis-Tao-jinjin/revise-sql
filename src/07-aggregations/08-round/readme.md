# Round
=====

Sometimes we need to [round](https://en.wikipedia.org/wiki/Rounding) some numbers, particularly when working with the results of an aggregation. We can use the `ROUND()` function to get the job done.

The SQL `round()` function allows you to specify both the value you wish to round and the precision to which you wish to round it:
```sql
    round(value, precision)
```

If no precision is given, SQL will round the value to the nearest _whole_ value:
```sql
    select song_name, round(avg(song_length), 1)
    from songs
```

This query returns the average `song_length` from the `songs` table, rounded to a single decimal point.

## Assignment
----------

1.  Fix the query so that it returns a [whole number](https://en.wikipedia.org/wiki/Whole_number).
2.  Rename the result column to `round_age`

```sql
SELECT round(avg(age))
FROM users
WHERE country_code = 'US';
```