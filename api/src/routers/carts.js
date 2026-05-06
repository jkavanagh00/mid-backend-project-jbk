import express from "express";
import {
    getCartByAccountId,
    addItemToCart,
    updateCartItem,
} from "#controllers/carts.js";
import { authenticateJWT } from "#middlewares/auth.js";

const cartsRouter = express.Router();

cartsRouter.get("/me", authenticateJWT, getCartByAccountId);

cartsRouter.post("/items", authenticateJWT, addItemToCart);

cartsRouter.put("/items/:id", authenticateJWT, updateCartItem);

export default cartsRouter;