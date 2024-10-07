CREATE TABLE transactions (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    recipient_id INTEGER,
    sender_id INTEGER,
    note TEXT,
    amount INTEGER,
    was_successful BOOLEAN
);

INSERT INTO transactions (user_id, recipient_id, note, amount, was_successful)
VALUES (4, 9, 'Testing transaction!', 10.50, true);

INSERT INTO transactions (user_id, sender_id, note, amount, was_successful)
VALUES (5, 10, 'Thanks for lunch!', 9.56, true);

INSERT INTO transactions (user_id, recipient_id, note, amount, was_successful)
VALUES (2, 9, 'Car problems', 256.21, true);

INSERT INTO transactions (user_id, recipient_id, note, amount, was_successful)
VALUES (8, 6, 'Happy birthday!!', 50, true);

INSERT INTO transactions (user_id, recipient_id, note, amount, was_successful)
VALUES (11, 9, 'MTG Draft', 50, false);

INSERT INTO transactions (user_id, recipient_id, note, amount, was_successful)
VALUES (4, 6, 'lunch with the friends', 12.56, true);

INSERT INTO transactions (user_id, recipient_id, note, amount, was_successful)
VALUES (12, 6, 'paying ya back for lunch', 12.22, true);

INSERT INTO transactions (user_id, recipient_id, note, amount, was_successful)
VALUES (6, 9, 'lunch break', 24.89, true);

INSERT INTO transactions (user_id, sender_id, note, amount, was_successful)
VALUES (1, 23, 'thanks for lunch yesterday', 10.00, true);

INSERT INTO transactions (user_id, recipient_id, note, amount, was_successful)
VALUES (14, 9, '5 buck pizza for lunch', 5.00, true);

INSERT INTO transactions (user_id, sender_id, note, amount, was_successful)
VALUES (2, 9, 'lunch was goooood thanks, man!', 47.42, true);

INSERT INTO transactions (user_id, sender_id, note, amount, was_successful)
VALUES (4, 6, 'lunch meetup, lets get together again soon.', 16.91, true);

INSERT INTO transactions (user_id, sender_id, note, amount, was_successful)
VALUES (5, 4, 'not sure how much lunch was, heres 20', 20.00, true);

INSERT INTO transactions (user_id, recipient_id, note, amount, was_successful)
VALUES (1, 13, 'Happy birthday, sis! Lets get lunch soon.', 100.00, true);
