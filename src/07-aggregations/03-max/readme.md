# MAX
===

As you may expect, the `max` function retrieves the _largest_ value from a set of values. For example:
```sql
    SELECT max(price)
    FROM products;
```

This query looks through all of the prices in the `products` table and returns the price with the largest price value. Remember it only returns the `price`, not the rest of the record! You always need to specify each field you want a query to return.

## Assignment
----------

Use a `max` aggregation to find the largest amount of money _successfully received_ by Jill (`user_id` of 4). Return her `user_id` and that amount.

Table name: `transactions`

Column names:

*   `id`
*   `user_id`
*   `recipient_id`
*   `sender_id`
*   `note`
*   `amount`
*   `was_successful`

A note on schema
----------------

A transaction can only have a `sender_id` _or_ a `recipient_id`, but not _both_. The presence of one or the other indicates whether money is going _into_ or _out of_ the user's account.

*   The `sender_id` will be present for any transactions where the user in question (`user_id`) is _receiving_ money (from the sender) so the `recipient_id` will be `NULL`.
*   The `recipient_id` will be present for any transactions where the user in question (`user_id`) is _sending_ money (to the recipient) so the `sender_id` will be `NULL`.

This `user_id`, `recipient_id`, `sender_id` schema we've designed is only _one_ way to design a transactions database - there are other valid ways to do it! It's the one we're using, and later we'll talk more about the tradeoffs in different database design options.

```sql
SELECT max(amount), user_id FROM transactions WHERE user_id = 4 and was_successful = true and sender_id is NOT NULL;
```