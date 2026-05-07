import { zodToJsonSchema } from "zod-to-json-schema";
import {
  AccountListQuery,
  AccountIdParams,
  AccountInput,
  AccountPatchInput,
} from "./accounts";
import { LoginParams } from "./auth";
import { CartInput, CartItemInput, CartItemUpdateInput } from "./carts";
import {
  EventListQuery,
  EventIdParams,
  EventInput,
  EventPatchInput,
} from "./events";

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