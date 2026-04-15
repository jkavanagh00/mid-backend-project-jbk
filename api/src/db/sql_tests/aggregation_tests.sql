-- count how many orders exist per status
SELECT
    status,
    COUNT(*) AS total_orders
FROM
    "order"
GROUP BY
    status
ORDER BY
    total_orders desc;

-- count how many carts exist per status
SELECT
    status,
    COUNT(*) AS total_carts
FROM
    cart
GROUP BY
    status
ORDER BY
    total_carts desc;

-- calculate total monetary value of each order from order_item
SELECT
    order_id,
    SUM(unit_price * quantity)
FROM
    order_item
GROUP BY
    order_id;

-- calculate total monetary value of each cart from cart_item
SELECT
    cart_id,
    SUM(unit_price * quantity)
FROM
    cart_item
GROUP BY
    cart_id;

-- find the top three events by number of tickets sold
SELECT
    e.id,
    e.title,
    SUM(oi.quantity) AS tickets_sold
FROM
    event e
    JOIN order_item oi ON oi.event_id = e.id
GROUP BY
    e.id,
    e.title
ORDER BY
    tickets_sold desc
LIMIT
    3;