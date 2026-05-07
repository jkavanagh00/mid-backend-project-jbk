import express from "express";
import eventsRouter from "#routers/events.js";
import accountsRouter from "#routers/accounts.js";
import cartsRouter from "#routers/carts.js";
import authRouter from "#routers/auth.js";

const apiRouter = express.Router();

apiRouter.use("/events", eventsRouter);
apiRouter.use("/accounts", accountsRouter);
apiRouter.use("/carts", cartsRouter);
apiRouter.use("/auth", authRouter);

export default apiRouter;
