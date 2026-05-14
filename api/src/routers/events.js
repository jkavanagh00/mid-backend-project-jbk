import express from "express";
import {
  getEvents,
  getEventById,
  postEvent,
  patchEvent,
  removeEvent,
} from "#controllers/events.js";
import { authenticateJWT, requireRegisteredUser } from "#middlewares/auth.js";

const eventsRouter = express.Router();

/**
 * Events router (MVC example)
 *
 * This router demonstrates how HTTP routes are mapped to controller handlers
 * within the MVC structure used in this backend skeleton.
 *
 * Only some routes are required for the base trainee assignment.
 * Additional routes are included as OPTIONAL placeholders to illustrate
 * how the API structure may grow (for example with admin functionality).
 *
 * Optional routes should only be implemented if the trainee decides to
 * extend the project beyond the required scope.
 */

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Get paginated list of events
 *     description: Returns a paginated list of events. Pagination is zero-based.
 *     tags:
 *       - Events
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
 *         name: currency
 *         schema:
 *           type: string
 *           minLength: 3
 *           maxLength: 3
 *         required: false
 *         description: Filter by currency code
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *         required: false
 *         description: Minimum price filter
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         required: false
 *         description: Maximum price filter
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         required: false
 *         description: Search term for event title or description
 *     responses:
 *       200:
 *         description: Paginated list of events
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/EventOutput'
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
 *       500:
 *         description: Server error
 */
eventsRouter.get("/", getEvents);

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     summary: Get event by ID
 *     tags:
 *       - Events
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/EventIdParams'
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/EventOutput'
 *       404:
 *         description: Event not found
 */
eventsRouter.get("/:id", getEventById);

/**
 * OPTIONAL ROUTE PLACEHOLDER
 *
 * Example of a "create event" endpoint (typically admin functionality).
 *
 * @swagger
 * /api/events:
 *   post:
 *     summary: Create event (optional/admin)
 *     tags:
 *       - Events
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EventInput'
 *     responses:
 *       201:
 *         description: Event created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/EventOutput'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
eventsRouter.post("/", authenticateJWT, requireRegisteredUser, postEvent);

/**
 * OPTIONAL ROUTE PLACEHOLDER
 *
 * Example of an "update event" endpoint.
 *
 * @swagger
 * /api/events/{id}:
 *   patch:
 *     summary: Update event (optional/admin)
 *     tags:
 *       - Events
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/EventIdParams'
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EventPatchInput'
 *     responses:
 *       200:
 *         description: Event updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/EventOutput'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
eventsRouter.patch("/:id", authenticateJWT, requireRegisteredUser, patchEvent);

/**
 * OPTIONAL ROUTE PLACEHOLDER
 *
 * Example of a "delete event" endpoint.
 *
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     summary: Delete event (optional/admin)
 *     tags:
 *       - Events
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/EventIdParams'
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/EventOutput'
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
eventsRouter.delete("/:id", authenticateJWT, requireRegisteredUser, removeEvent);

export default eventsRouter;
