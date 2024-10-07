# Database normalization
======================

Database normalization is a method for structuring your database schema in a way that helps:

*   Improve data integrity
*   Reduce data redundancy

## First, Second, and Third Normal Forms
[https://www.youtube.com/watch?v=U3L4NYNwb6k]

## What is data integrity?
-----------------------

"Data integrity" refers to the accuracy and consistency of data. For example, if a user's _age_ is stored in a database, rather than their _birthday_, that data becomes incorrect automatically with the passage of time.

It would be better to _store_ a birthday and _calculate_ the age as needed.

## What is data redundancy?
------------------------

"Data redundancy" occurs when the same piece of data is stored in multiple places. For example: saving the same file multiple times to different hard drives.

Data redundancy can be problematic, especially when data in one place is changed such that the data is no longer consistent across all copies of that data.