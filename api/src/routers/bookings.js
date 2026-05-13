import express from "express";
import { getBookings, getBookingById } from "#controllers/bookings.js";
import { authenticateJWT, requireRegisteredUser } from "#middlewares/auth.js";
const bookingsRouter = express.Router();
bookingsRouter.use(authenticateJWT);
bookingsRouter.use(requireRegisteredUser);

bookingsRouter.get("/", getBookings);

bookingsRouter.get("/:id", getBookingById);

export default bookingsRouter;
