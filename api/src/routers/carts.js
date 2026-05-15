import express from "express";
import {
  getCartByAccountId,
  addItemToCart,
  updateCartItem,
} from "#controllers/carts.js";
import { authenticateJWT, identifyUserOrGuest } from "#middlewares/auth.js";

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
 *                   type: integer
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

export default cartsRouter;
