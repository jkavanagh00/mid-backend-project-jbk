import { CartInput } from "#schemas/carts.js";
import { findCartByAccountId } from "#models/carts.js";

export async function getCartByAccountId(req, res, next) {
  try {
    const { id } = req.user;
    const cart = await findCartByAccountId(id);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
}
