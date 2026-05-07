import { zodToJsonSchema } from "zod-to-json-schema";
import {
  AccountListQuery,
  AccountIdParams,
  AccountInput,
  AccountPatchInput,
  AccountOutput,
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
  AccountListQuery: zodToJsonSchema(AccountListQuery, "AccountListQuery").definitions.AccountListQuery,
  AccountIdParams: zodToJsonSchema(AccountIdParams, "AccountIdParams").definitions.AccountIdParams,
  AccountInput: zodToJsonSchema(AccountInput, "AccountInput").definitions.AccountInput,
  AccountPatchInput: zodToJsonSchema(AccountPatchInput, "AccountPatchInput").definitions.AccountPatchInput,
  AccountOutput: zodToJsonSchema(AccountOutput, "AccountOutput").definitions.AccountOutput,
  LoginParams: zodToJsonSchema(LoginParams, "LoginParams").definitions.LoginParams,
  CartInput: zodToJsonSchema(CartInput, "CartInput").definitions.CartInput,
  CartItemInput: zodToJsonSchema(CartItemInput, "CartItemInput").definitions.CartItemInput,
  CartItemUpdateInput: zodToJsonSchema(CartItemUpdateInput, "CartItemUpdateInput").definitions.CartItemUpdateInput,
  EventListQuery: zodToJsonSchema(EventListQuery, "EventListQuery").definitions.EventListQuery,
  EventIdParams: zodToJsonSchema(EventIdParams, "EventIdParams").definitions.EventIdParams,
  EventInput: zodToJsonSchema(EventInput, "EventInput").definitions.EventInput,
  EventPatchInput: zodToJsonSchema(EventPatchInput, "EventPatchInput").definitions.EventPatchInput,
};

export default schemas;