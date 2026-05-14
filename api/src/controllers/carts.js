import {
  CartInput,
    
} from "#schemas/carts.js";
import { findCartByAccountId, createCart, deleteCartById } from "#models/carts.js";

export async function getCartByAccountId(req, res, next) {
  try {
    const id = req.user.id ?? req.user.guestId;
    const cart = await findCartByAccountId(id);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
}

export async function postCart(req, res, next) {
  try {
    const newCartInput = CartInput.parse(req.body);
    const user = req.user.id
      ? { id: req.user.id, guest: false }
      : { id: req.user.guestId, guest: true };

    const cart = await createCart(user);
    if (!cart) {
      return res.status(500).json({ message: "Failed to create cart" });
    }
    const responseData = {
      data: cart,
      message: "Cart created successfully",
    }
    if (req.guestToken) {
      response.guestToken = req.guestToken;
    }
    res.status(201).json(responseData);
  } catch (error) {
    next(error);
  }
}

export async function deleteCart(req, res, next) {
  try {
    const id = req.user.id ?? req.user.guestId;
    const cart = await findCartByAccountId(id);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    await deleteCartById(cart.id);
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    next(error);
  }
}

