import express from "express";
import {
    getCartByAccountId,
} from "#controllers/carts.js";
import { authenticateJWT } from "#middlewares/auth.js";

const cartsRouter = express.Router();

cartsRouter.get("/me", authenticateJWT, getCartByAccountId);

export default cartsRouter;