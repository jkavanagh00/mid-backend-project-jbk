-- for each order, show account name, event title, and order status
SELECT
    a.name,
    e.title,
    o.status
FROM
    "order" o
    JOIN account a ON o.account_id = a.id
    JOIN event e ON o.event_id = e.id;

-- for each cart item, show cart id, account name, event title, quantity, and unit price
SELECT
    c.id AS cart_id,
    a.name,
    e.title,
    ci.quantity,
    ci.unit_price
FROM
    cart_item ci
    JOIN cart c ON ci.cart_id = c.id
    JOIN account a ON c.account_id = a.id
    JOIN event e ON ci.event_id = e.id;

-- list all orders for one specific account email
SELECT
    *
FROM
    "order" o
    JOIN account a ON o.account_id = a.id
WHERE
    a.email = 'trillian@heartofgold.org';

-- list all cart items for one specific cart
SELECT
    *
FROM
    cart_item ci
WHERE
    ci.cart_id = 3;

-- show events that currently appear in at least one cart
SELECT DISTINCT
    *
FROM
    event e
    JOIN cart_item ci ON ci.event_id = e.id;