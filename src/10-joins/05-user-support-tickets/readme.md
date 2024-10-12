# User Support Tickets

CashPal has a system in which users can submit support tickets to get help with their accounts. This data is stored in a table named `support_tickets`. You may or may not have written some bad code that led to an influx of "Account Access" related tickets. You've fixed the bug but the new influx of tickets is overshadowing other types of user concerns.

The Customer Support department wants to triage the situation by first focusing on customers who have experienced multiple issues. They've asked you to write a query that will help remove the new "Account Access" issues to filter through the noise.

## Challenge

Write an SQL statement that includes an `INNER JOIN` and returns the following:

*   The user's `name`
*   The user's `username`
*   The count of support tickets attributed to that user labeled as `support_ticket_count`

Exclude any tickets that have `"Account Access"` as the `issue_type` and only return records for users who have more than 1 support ticket of another type. Finally, sort the records by users with the most support tickets at the top.

```sql
SELECT users.id, users.name, users.username, COUNT(support_tickets.id) as support_ticket_count
FROM users
INNER JOIN support_tickets
ON users.id = support_tickets.user_id
WHERE support_tickets.issue_type != 'Account Access'
GROUP BY users.id
HAVING support_ticket_count > 1
ORDER BY support_ticket_count DESC;
```

| id | name   | username | support_ticket_count |
|----|--------|----------|----------------------|
| 3  | John   | Jjdev21  | 4                    |
| 11 | Albert | BertDev  | 3                    |
| 7  | Lance  | LanChr   | 2                    |

## What are the differences between the WHERE and HAVING clauses in SQL?

The `WHERE` and `HAVING` clauses in SQL are both used to filter records, but they are used in different contexts and have distinct purposes:

### `WHERE` Clause
- **Purpose**: Filters rows before any groupings are made.
- **Usage**: Applied to individual rows in the table.
- **Context**: Used with `SELECT`, `UPDATE`, `DELETE`, etc.
- **Example**:
  ```sql
  SELECT *
  FROM support_tickets
  WHERE issue_type = 'Account Access';
  ```

### `HAVING` Clause
- **Purpose**: Filters groups after the `GROUP BY` clause has been applied.
- **Usage**: Applied to the results of aggregate functions.
- **Context**: Used with `GROUP BY`.
- **Example**:
  ```sql
  SELECT user_id, COUNT(*) AS ticket_count
  FROM support_tickets
  GROUP BY user_id
  HAVING COUNT(*) > 1;
  ```

### Key Differences
1. **Filtering Stage**:
   - `WHERE` filters rows before grouping.
   - `HAVING` filters groups after grouping.

2. **Scope**:
   - `WHERE` cannot use aggregate functions directly.
   - `HAVING` can use aggregate functions.

3. **Usage Context**:
   - `WHERE` is used in general queries.
   - `HAVING` is specifically used with `GROUP BY`.

### Example Combining Both
```sql
SELECT user_id, COUNT(*) AS ticket_count
FROM support_tickets
WHERE issue_type <> 'Account Access' 
GROUP BY user_id
HAVING COUNT(*) > 1;
```
- **`WHERE` Clause**: Filters out rows where `issue_type` is 'Account Access' before grouping.
- **`HAVING` Clause**: Filters groups to include only those with more than one ticket.