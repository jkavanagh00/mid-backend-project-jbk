import { CartInput } from "#schemas/carts.js";
import { findCartByAccountId } from "#models/carts.js";
import { insertCartItem, updateCartItemQuantity } from "#models/cart_items.js";
import { findEventById } from "#models/events.js";

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

export async function addItemToCart(req, res, next) {
  try {
    const addItemRequest = CartItemInput.parse(req.body);
    const { id } = req.user;
    const cart = await findCartByAccountId(id);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    if (cart.items.some((item) => item.event_id === addItemRequest.eventId)) {
      const i = cart.items.findIndex(
        (item) => item.event_id === addItemRequest.eventId,
      );
      cart.items[i].quantity += addItemRequest.quantity;
      await updateCartItemQuantity(cart.items[i].id, cart.items[i].quantity);
      return res.status(200).json({ message: "Cart item quantity updated" });
    }

    const { eventId } = addItemRequest;
    const event = await findEventById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const { eventId } = addItemRequest;
    const event = await findEventById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    await insertCartItem(cart.id, eventId, addItemRequest.quantity, addItemRequest.unitPrice);
    
    res.status(201).json({ message: "Item added to cart", item: addItemRequest });
  } catch (error) {
    next(error);
  }
}
