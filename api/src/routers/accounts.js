import express from "express";
import {
  getAccounts,
  getAccountById,
  postAccount,
  patchAccount,
  removeAccount,
} from "#controllers/accounts.js";
import { showOwnAccount } from "#controllers/auth.js";
import { authenticateJWT } from "#middlewares/auth.js";

const accountsRouter = express.Router();

accountsRouter.use(authenticateJWT);

accountsRouter.get("/", getAccounts);

accountsRouter.get("/me", showOwnAccount);

accountsRouter.get("/:id", getAccountById);

accountsRouter.post("/", postAccount);

accountsRouter.patch("/:id", patchAccount);

accountsRouter.delete("/:id", removeAccount);

export default accountsRouter;
