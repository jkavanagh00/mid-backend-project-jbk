import express from "express";
import {
    getCartByAccountId,
    addItemToCart,
} from "#controllers/carts.js";
import { authenticateJWT } from "#middlewares/auth.js";

const cartsRouter = express.Router();

cartsRouter.get("/me", authenticateJWT, getCartByAccountId);

cartsRouter.put("/items", authenticateJWT, addItemToCart);

export default cartsRouter;