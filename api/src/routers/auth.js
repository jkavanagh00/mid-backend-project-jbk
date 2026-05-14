import express from "express";
import { registerNewAccount, login } from "#controllers/auth.js";

const authRouter = express.Router();


/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new account
 *     description: Creates a new user account with the provided details.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AccountInput'
 *     responses:
 *       201:
 *         description: Account created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid input
 *       409:
 *         description: Email is already in use
 *       500:
 *         description: Server error
 */
authRouter.post("/register", registerNewAccount);


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in to an account
 *     description: Authenticates a user and returns a JWT token if credentials are valid.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginParams'
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */
authRouter.post("/login", login);

export default authRouter;