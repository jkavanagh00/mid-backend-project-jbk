-- for each event, calculate tickets sold and tickets remaining using total_tickets
SELECT
    e.id,
    e.title,
    SUM(oi.quantity) AS tickets_sold,
    e.total_tickets - SUM(oi.quantity) AS tickets_remaining
FROM
    event e
    JOIN order_item oi ON oi.event_id = e.id
GROUP BY
    e.id,
    e.title
ORDER BY
    tickets_sold desc;

-- find events that are sold out (currently none)
SELECT
    e.id,
    e.title,
    e.total_tickets,
    SUM(oi.quantity) AS tickets_sold
FROM
    event e
    JOIN order_item oi ON e.id = oi.event_id
GROUP BY
    e.id,
    e.title,
    e.total_tickets
HAVING
    SUM(oi.quantity) = e.total_tickets
ORDER BY
    tickets_sold desc;

-- find events with no orders at all (currently none)
SELECT
    e.id,
    e.title,
    SUM(oi.quantity) AS total_orders
FROM
    event e
    LEFT JOIN order_item oi ON e.id = oi.event_id
GROUP BY
    e.id,
    e.title
HAVING
    COUNT(oi.id) = 0;

-- find accounts that have never placed an order (currently none)
SELECT
    a.name,
    a.email,
    COUNT(o.id) AS total_orders
FROM
    account a
    LEFT JOIN "order" o ON a.id = o.account_id
GROUP BY
    a."name",
    a.email
HAVING
    COUNT(o.id) = 0;

-- find accounts with abandoned carts
SELECT
    a.id AS account_id,
    a.name,
    a.email,
    c.id AS cart_id,
    c.status AS cart_status
FROM
    account a
    JOIN cart c ON a.id = c.account_id
WHERE
    c.status = 'abandoned';