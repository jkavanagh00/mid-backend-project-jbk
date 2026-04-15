-- confirm that seeds were successful by checking that every table contains exactly 8 rows
SELECT
    (
        SELECT
            COUNT(*)
        FROM
            account
    ) AS total_accounts,
    (
        SELECT
            COUNT(*)
        FROM
            event
    ) AS total_events,
    (
        SELECT
            COUNT(*)
        FROM
            cart
    ) AS total_carts,
    (
        SELECT
            COUNT(*)
        FROM
            cart_item
    ) AS total_cart_items,
    (
        SELECT
            COUNT(*)
        FROM
            "order"
    ) AS total_orders,
    (
        SELECT
            COUNT(*)
        FROM
            order_item
    ) AS total_order_items;

-- select all events
SELECT
    *
FROM
    event;

-- select event by id
SELECT
    *
FROM
    event e
WHERE
    e.id = 3;

-- list events ordered by start_time (soonest first)
SELECT
    *
FROM
    event e
ORDER BY
    starts_at asc;

-- list accounts ordered by alphabetically by name
SELECT
    *
FROM
    account a
ORDER BY
    name;

-- show all orders with status pending
SELECT
    *
FROM
    "order" o
WHERE
    o.status = 'pending';

-- show all carts with status active
SELECT
    *
FROM
    cart c
WHERE
    c.status = 'active';