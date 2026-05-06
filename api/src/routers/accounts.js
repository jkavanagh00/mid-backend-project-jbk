import express from "express";
import {
    getAccounts,
    getAccountById,
    postAccount,
    patchAccount,
    removeAccount,
} from "#controllers/accounts.js";

const accountsRouter = express.Router();

accountsRouter.get("/", getAccounts);

accountsRouter.get("/:id", getAccountById);

accountsRouter.post("/", postAccount);

accountsRouter.patch("/:id", patchAccount);

accountsRouter.delete("/:id", removeAccount);

export default accountsRouter;