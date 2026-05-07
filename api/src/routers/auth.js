import express from "express";
import { registerNewAccount, login } from "#controllers/auth.js";

const authRouter = express.Router();

authRouter.post("/register", registerNewAccount);

authRouter.post("/login", login);

export default authRouter;