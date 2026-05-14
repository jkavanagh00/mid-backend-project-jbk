import express from "express";
import { getCartByAccountId, deleteCart } from "#controllers/carts.js";
import { addItemToCart, updateCartItem, removeCartItem } from "#controllers/cart_items.js";
import { authenticateJWT, identifyUserOrGuest, requireRegisteredUser } from "#middlewares/auth.js";
import { checkoutCart } from "#controllers/bookings.js";

const cartsRouter = express.Router();
cartsRouter.use(identifyUserOrGuest);

/**
 * @swagger
 * /api/carts/me:
 *   get:
 *     summary: Get the authenticated user's cart
 *     description: Returns the cart for the currently authenticated user (by account or guest).
 *     tags:
 *       - Carts
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The user's cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 account_id:
 *                   type: integer
 *                   nullable: true
 *                 guest_token:
 *                   type: string
 *                   nullable: true
 *                 items:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/CartItemInput'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
cartsRouter.get("/me", getCartByAccountId);

/**
 * @swagger
 * /api/carts/items:
 *   post:
 *     summary: Add an item to the cart
 *     description: Adds an event item to the authenticated user's cart. If the item exists, increments its quantity.
 *     tags:
 *       - Carts
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CartItemInput'
 *     responses:
 *       201:
 *         description: Item added to cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 item:
 *                   $ref: '#/components/schemas/CartItemInput'
 *       200:
 *         description: Cart item quantity updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Cart or event not found
 *       500:
 *         description: Server error
 */
cartsRouter.post("/items", addItemToCart);

/**
 * @swagger
 * /api/carts/items/{id}:
 *   put:
 *     summary: Update a cart item quantity
 *     description: Updates the quantity of a specific item in the authenticated user's cart.
 *     tags:
 *       - Carts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Cart item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CartItemUpdateInput'
 *     responses:
 *       200:
 *         description: Cart item quantity updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Cart or cart item not found
 *       500:
 *         description: Server error
 */
cartsRouter.put("/items/:id", updateCartItem);

/**
 * @swagger
 * /api/carts:
 *   delete:
 *     summary: Delete the authenticated user's cart
 *     tags:
 *       - Carts
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Cart deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
cartsRouter.delete("/", deleteCart);

/**
 * @swagger
 * /api/carts/items/{id}:
 *   delete:
 *     summary: Remove an item from the cart
 *     tags:
 *       - Carts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Cart item ID
 *     responses:
 *       200:
 *         description: Cart item deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Cart or cart item not found
 *       500:
 *         description: Server error
 */
cartsRouter.delete("/items/:id", removeCartItem);

/**
 * @swagger
 * /api/carts/checkout:
 *   post:
 *     summary: Checkout the cart and create a booking
 *     description: Converts the authenticated user's active cart into a booking. Requires a registered (non-guest) account.
 *     tags:
 *       - Carts
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Booking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 booking:
 *                   $ref: '#/components/schemas/BookingOutput'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Guests cannot checkout
 *       404:
 *         description: Cart not found
 *       422:
 *         description: Cart is empty
 *       500:
 *         description: Server error
 */
cartsRouter.post("/checkout", authenticateJWT, requireRegisteredUser, checkoutCart);

export default cartsRouter;
