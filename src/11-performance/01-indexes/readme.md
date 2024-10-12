# SQL Indexes

An index is an in-memory structure that ensures that queries we run on a database are _performant_, that is to say, they run _quickly_. If you can remember back to the data structures course, most database indexes are just [binary trees](https://en.wikipedia.org/wiki/Binary_tree) or [B-trees](https://en.wikipedia.org/wiki/B-tree)! The binary tree can be stored in [ram](https://en.wikipedia.org/wiki/Random-access_memory) as well as on [disk](https://en.wikipedia.org/wiki/Computer_data_storage), and it makes it easy to lookup the location of an entire row.

`PRIMARY KEY` columns are indexed by default, ensuring you can look up a row by its `id` very quickly. However, if you have other columns that you want to be able to do quick lookups on, you'll need to _index_ them.

## CREATE INDEX
```sql
    CREATE INDEX index_name ON table_name (column_name);
```

It's fairly common to name an index after the column it's created on with a suffix of `_idx`.

## Assignment

As it turns out, the front-end frequently finds itself in a state where it knows a user's `email` but not their `id`. Let's add an index to the `email` field called `email_idx`.

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    email TEXT,
    name TEXT,
    age INTEGER
);

-- ? --
CREATE INDEX email_idx ON users(email);

-- TEST SUITE, DON'T TOUCH BELOW THIS LINE --

SELECT name
FROM sqlite_master
WHERE type = 'index';
```

# Index Review

As we discussed, an index is a data structure that can perform quick lookups. By indexing a column, we create a new in-memory structure, usually a binary-tree, where the values in the indexed column are sorted into the tree to keep lookups fast. In terms of Big-O complexity, a binary tree index ensures that lookups are [O(log(n))](https://en.wikipedia.org/wiki/Big_O_notation).

## Shouldn't we index everything? We can make the database ultra-fast!

While indexes make specific kinds of lookups much faster, they also add performance overhead - they can slow down a database in other ways. Think about it, if you index every column, you could have hundreds of binary trees in memory! That needlessly bloats the memory usage of your database. It also means that each time you _insert_ a record, that record needs to be added to _many_ trees - slowing down your insert speed.

The rule of thumb is simple:

> Add an index to columns you know you'll be doing frequent lookups on. Leave everything else un-indexed. You can always add indexes later.