import express from "express";
import { getBookings, getBookingById } from "#controllers/bookings.js";
import { authenticateJWT, requireRegisteredUser } from "#middlewares/auth.js";
const bookingsRouter = express.Router();
bookingsRouter.use(authenticateJWT);
bookingsRouter.use(requireRegisteredUser);

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Get all bookings for the authenticated user
 *     tags:
 *       - Bookings
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of bookings
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookingsListOutput'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
bookingsRouter.get("/", getBookings);

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     summary: Get a booking by ID
 *     tags:
 *       - Bookings
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/BookingIdParams'
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 booking:
 *                   $ref: '#/components/schemas/BookingOutput'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
bookingsRouter.get("/:id", getBookingById);

export default bookingsRouter;
