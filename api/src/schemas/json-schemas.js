import { zodToJsonSchema } from "zod-to-json-schema";
import {
  AccountListQuery,
  AccountIdParams,
  AccountInput,
  AccountPatchInput,
} from "#schemas/accounts.js";
import { LoginParams } from "#schemas/auth.js";
import { CartInput, CartItemInput, CartItemUpdateInput } from "#schemas/carts.js";
import {
  EventListQuery,
  EventIdParams,
  EventInput,
  EventPatchInput,
} from "#schemas/events.js";

const schemas = {
  AccountListQuery: zodToJsonSchema(AccountListQuery, "AccountListQuery"),
  AccountIdParams: zodToJsonSchema(AccountIdParams, "AccountIdParams"),
  AccountInput: zodToJsonSchema(AccountInput, "AccountInput"),
  AccountPatchInput: zodToJsonSchema(AccountPatchInput, "AccountPatchInput"),
  LoginParams: zodToJsonSchema(LoginParams, "LoginParams"),
  CartInput: zodToJsonSchema(CartInput, "CartInput"),
  CartItemInput: zodToJsonSchema(CartItemInput, "CartItemInput"),
  CartItemUpdateInput: zodToJsonSchema(CartItemUpdateInput, "CartItemUpdateInput"),
  EventListQuery: zodToJsonSchema(EventListQuery, "EventListQuery"),
  EventIdParams: zodToJsonSchema(EventIdParams, "EventIdParams"),
  EventInput: zodToJsonSchema(EventInput, "EventInput"),
  EventPatchInput: zodToJsonSchema(EventPatchInput, "EventPatchInput"),
};

export default schemas;