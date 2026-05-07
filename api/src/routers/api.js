import express from "express";
import eventsRouter from "#routers/events.js";
import accountsRouter from "#routers/accounts.js";

const apiRouter = express.Router();

apiRouter.use("/events", eventsRouter);
apiRouter.use("/accounts", accountsRouter);

export default apiRouter;
