import express from "express";
import eventsRouter from "#routers/events.js";
import accountsRouter from "#routers/accounts.js";
import cartsRouter from "#routers/carts.js";

const apiRouter = express.Router();

apiRouter.use("/events", eventsRouter);
apiRouter.use("/accounts", accountsRouter);
apiRouter.use("/carts", cartsRouter);

export default apiRouter;
