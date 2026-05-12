import {
  CartInput,
  CartItemInput,
  CartItemUpdateInput,
  CartItemIdParams,
} from "#schemas/carts.js";
import { findCartByAccountId } from "#models/carts.js";
import { insertCartItem, updateCartItemQuantity } from "#models/cart_items.js";
import { findEventById } from "#models/events.js";

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

export async function addItemToCart(req, res, next) {
  try {
    const addItemRequest = CartItemInput.parse(req.body);
    const id = req.user.id ?? req.user.guestId;
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

    await insertCartItem(
      cart.id,
      eventId,
      addItemRequest.quantity,
      addItemRequest.unitPrice,
    );

    res
      .status(201)
      .json({ message: "Item added to cart", item: addItemRequest });
  } catch (error) {
    next(error);
  }
}

export async function updateCartItem(req, res, next) {
  try {
    const updateRequest = CartItemUpdateInput.parse(req.body);
    const itemIdParam = CartItemIdParams.parse(req.params);
    const cartItemId = itemIdParam.id;
    const id = req.user.id ?? req.user.guestId;
    const cart = await findCartByAccountId(id);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const item = cart.items.find((item) => item.id === cartItemId);
    if (!item) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    await updateCartItemQuantity(cartItemId, updateRequest.quantity);
    res.status(200).json({ message: "Cart item quantity updated" });
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
