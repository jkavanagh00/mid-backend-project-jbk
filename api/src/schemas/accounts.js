import { z } from "zod";

/**
 * AccountListQuery.parse(req.query)
 * - returns a normalized object when the input is valid
 * - throws a ZodError when type or condition not met
 */
export const AccountListQuery = z.object({
  page: z.coerce.number().int().min(0).default(0),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
  search: z.string().trim().optional(),
});

/**
 * EventIdParams.parse(req.params):
 * - returns a normalized object such as { id: 12 } when valid
 * - throws a ZodError if the value cannot be parsed into a positive integer
 */
export const AccountIdParams = z.object({
  id: z.coerce.number().int().positive("id must be a positive integer"),
});

/**
 * EventInput.parse(req.body):
 * - returns a validated and normalized object when valid
 * - throws a ZodError when a field is missing, has the wrong type, or fails a rule
 */
export const AccountInput = z.object({
  name: z.string().trim().min(3, "name must have at least 3 characters"),
  email: z.string().email(),
  phone: z
    .string()
    .min(5, "phone number must have at least 5 digits")
    .max(15, "phone number must not exceed 15 digits"),
  password: z
    .string()
    .trim()
    .min(8, "password must have at least 8 characters"),
});

/**
 * AccountPatchInput.parse(req.body):
 * - accepts any subset of the AccountInput fields
 * - still applies the same type checks and conditions to provided fields
 * - throws a ZodError if any provided field is invalid
 */
export const AccountPatchInput = AccountInput.partial();

/**
 * AccountOutput.parse(account):
 * - returns a validated and normalized object when valid
 * - throws a ZodError when a field is missing, has the wrong type, or fails a rule
 */
export const AccountOutput = AccountInput.extend({
  id: z.number().int().positive(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
