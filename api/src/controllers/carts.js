import {
  CartInput,
} from "#schemas/carts.js";
import { findCartByAccountId, createCart } from "#models/carts.js";

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

    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
}
