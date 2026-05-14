import { zodToJsonSchema } from "zod-to-json-schema";
import {
  AccountListQuery,
  AccountIdParams,
  AccountInput,
  AccountPatchInput,
  AccountOutput,
} from "#schemas/accounts.js";
import { LoginParams } from "#schemas/auth.js";
import { CartInput, CartIdParams, CartOutput } from "#schemas/carts.js";
import { CartItemIdParams, CartItemInput, CartItemUpdateInput } from "#schemas/cart_items.js";
import { BookingOutput, BookingsListOutput, BookingIdParams } from "#schemas/bookings.js";
import { BookingItemIdParams, BookingItemInput, BookingItemUpdateInput } from "#schemas/booking_items.js";
import {
  EventListQuery,
  EventIdParams,
  EventInput,
  EventPatchInput,
  EventOutput,
} from "#schemas/events.js";

const schemas = {
  AccountListQuery: zodToJsonSchema(AccountListQuery, "AccountListQuery").definitions.AccountListQuery,
  AccountIdParams: zodToJsonSchema(AccountIdParams, "AccountIdParams").definitions.AccountIdParams,
  AccountInput: zodToJsonSchema(AccountInput, "AccountInput").definitions.AccountInput,
  AccountPatchInput: zodToJsonSchema(AccountPatchInput, "AccountPatchInput").definitions.AccountPatchInput,
  AccountOutput: zodToJsonSchema(AccountOutput, "AccountOutput").definitions.AccountOutput,
  LoginParams: zodToJsonSchema(LoginParams, "LoginParams").definitions.LoginParams,
  CartInput: zodToJsonSchema(CartInput, "CartInput").definitions.CartInput,
  CartIdParams: zodToJsonSchema(CartIdParams, "CartIdParams").definitions.CartIdParams,
  CartOutput: zodToJsonSchema(CartOutput, "CartOutput").definitions.CartOutput,
  CartItemIdParams: zodToJsonSchema(CartItemIdParams, "CartItemIdParams").definitions.CartItemIdParams,
  CartItemInput: zodToJsonSchema(CartItemInput, "CartItemInput").definitions.CartItemInput,
  CartItemUpdateInput: zodToJsonSchema(CartItemUpdateInput, "CartItemUpdateInput").definitions.CartItemUpdateInput,
  BookingIdParams: zodToJsonSchema(BookingIdParams, "BookingIdParams").definitions.BookingIdParams,
  BookingItemIdParams: zodToJsonSchema(BookingItemIdParams, "BookingItemIdParams").definitions.BookingItemIdParams,
  BookingItemInput: zodToJsonSchema(BookingItemInput, "BookingItemInput").definitions.BookingItemInput,
  BookingItemUpdateInput: zodToJsonSchema(BookingItemUpdateInput, "BookingItemUpdateInput").definitions.BookingItemUpdateInput,
  EventListQuery: zodToJsonSchema(EventListQuery, "EventListQuery").definitions.EventListQuery,
  EventIdParams: zodToJsonSchema(EventIdParams, "EventIdParams").definitions.EventIdParams,
  EventInput: zodToJsonSchema(EventInput, "EventInput").definitions.EventInput,
  EventPatchInput: zodToJsonSchema(EventPatchInput, "EventPatchInput").definitions.EventPatchInput,
  EventOutput: zodToJsonSchema(EventOutput, "EventOutput").definitions.EventOutput,
};

export default schemas;