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
  AccountListQuery: zodToJsonSchema(AccountListQuery, "AccountListQuery").definitions,
  AccountIdParams: zodToJsonSchema(AccountIdParams, "AccountIdParams").definitions,
  AccountInput: zodToJsonSchema(AccountInput, "AccountInput").definitions,
  AccountPatchInput: zodToJsonSchema(AccountPatchInput, "AccountPatchInput").definitions,
  LoginParams: zodToJsonSchema(LoginParams, "LoginParams").definitions,
  CartInput: zodToJsonSchema(CartInput, "CartInput").definitions,
  CartItemInput: zodToJsonSchema(CartItemInput, "CartItemInput").definitions,
  CartItemUpdateInput: zodToJsonSchema(CartItemUpdateInput, "CartItemUpdateInput").definitions,
  EventListQuery: zodToJsonSchema(EventListQuery, "EventListQuery").definitions,
  EventIdParams: zodToJsonSchema(EventIdParams, "EventIdParams").definitions,
  EventInput: zodToJsonSchema(EventInput, "EventInput").definitions,
  EventPatchInput: zodToJsonSchema(EventPatchInput, "EventPatchInput").definitions,
};

export default schemas;