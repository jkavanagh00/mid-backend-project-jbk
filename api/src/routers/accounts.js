import express from "express";
import {
  getAccounts,
  getAccountById,
  patchAccount,
  removeAccount,
} from "#controllers/accounts.js";
import { showOwnAccount } from "#controllers/auth.js";
import { authenticateJWT, requireRegisteredUser } from "#middlewares/auth.js";

const accountsRouter = express.Router();


/**
 * @swagger
 * /api/accounts:
 *   get:
 *     summary: Get paginated list of accounts
 *     description: Returns a paginated list of accounts. Pagination is zero-based.
 *     tags:
 *       - Accounts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 0
 *           default: 0
 *         required: false
 *         description: Page number (zero-based)
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 20
 *         required: false
 *         description: Number of items per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         required: false
 *         description: Search term for account name or email
 *       - in: query
 *         name: createdAt
 *         schema:
 *           type: string
 *           format: date-time
 *         required: false
 *         description: Filter by creation date
 *       - in: query
 *         name: updatedAt
 *         schema:
 *           type: string
 *           format: date-time
 *         required: false
 *         description: Filter by last update date
 *     responses:
 *       200:
 *         description: Paginated list of accounts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/AccountOutput'
 *                 meta:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                       example: 0
 *                     pageSize:
 *                       type: integer
 *                       example: 5
 *                     totalItems:
 *                       type: integer
 *                       example: 245
 *                     totalPages:
 *                       type: integer
 *                       example: 49
 *       400:
 *         description: Invalid query parameters
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
accountsRouter.get("/", getAccounts); // No auth for listing accounts?

/**
 * @swagger
 * /api/accounts/me:
 *   get:
 *     summary: Get the authenticated user's account
 *     description: Returns the account details for the currently authenticated user.
 *     tags:
 *       - Accounts
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The authenticated user's account
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 account:
 *                   $ref: '#/components/schemas/AccountOutput'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Account not found
 *       500:
 *         description: Server error
 */
accountsRouter.get("/me",authenticateJWT, requireRegisteredUser, showOwnAccount);

/**
 * @swagger
 * /api/accounts/{id}:
 *   get:
 *     summary: Get account by ID
 *     tags:
 *       - Accounts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/AccountIdParams'
 *         description: Account ID
 *     responses:
 *       200:
 *         description: Account found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 account:
 *                   $ref: '#/components/schemas/AccountOutput'
 *       404:
 *         description: Account not found
 */
accountsRouter.get("/:id",authenticateJWT, requireRegisteredUser, getAccountById);

/**
 * @swagger
 * /api/accounts/{id}:
 *   patch:
 *     summary: Update an account
 *     tags:
 *       - Accounts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/AccountIdParams'
 *         description: Account ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AccountPatchInput'
 *     responses:
 *       200:
 *         description: Account updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/AccountOutput'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Account not found
 *       500:
 *         description: Server error
 */
accountsRouter.patch("/:id", authenticateJWT, requireRegisteredUser, patchAccount);

/**
 * @swagger
 * /api/accounts/{id}:
 *   delete:
 *     summary: Delete an account
 *     tags:
 *       - Accounts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/AccountIdParams'
 *         description: Account ID
 *     responses:
 *       200:
 *         description: Account deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/AccountOutput'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Account not found
 *       500:
 *         description: Server error
 */
accountsRouter.delete("/:id",authenticateJWT, requireRegisteredUser, removeAccount);

export default accountsRouter;
