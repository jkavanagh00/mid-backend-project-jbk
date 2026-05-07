import { z } from "zod";

/**
 * EventListQuery.parse(req.query):
 * - returns a normalized object when the input is valid
 * - throws a ZodError when a type or condition is not met
 */
export const EventListQuery = z.object({
  page: z.coerce.number().int().min(0).default(0),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
  currency: z.string().length(3).optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  search: z.string().trim().optional(),
});

/**
 * EventIdParams.parse(req.params):
 * - returns a normalized object such as { id: 12 } when valid
 * - throws a ZodError if the value cannot be parsed into a positive integer
 */
export const EventIdParams = z.object({
  id: z.coerce.number().int().positive("id must be a positive integer"),
});

/**
 * EventInput.parse(req.body):
 * - returns a validated and normalized object when valid
 * - throws a ZodError when a field is missing, has the wrong type, or fails a rule
 */
export const EventInput = z.object({
  title: z.string().trim().min(1, "title is required"),
  venue: z.string().trim().min(1, "title is required"),
  starts_at: z.string().trim().min(1, "starts_at is required"),
  description: z.string().trim().optional(),
  price: z.coerce.number().min(0, "price must be a non-negative number"),
  currency: z
    .string()
    .trim()
    .toUpperCase()
    .length(3, "currency must be a 3-letter code"),
  total_tickets: z.coerce
    .number()
    .int()
    .positive("total_tickets must be a positive integer"),
});

/**
 * Skeleton-ready body schema for partially updating an event.
 *
 * PATCH routes typically allow partial input, so every field is optional here.
 *
 * EventPatchInput.parse(req.body):
 * - accepts any subset of the EventInput fields
 * - still applies the same type checks and conditions to provided fields
 * - throws a ZodError if any provided field is invalid
 */
export const EventPatchInput = EventInput.partial();

/*
Manual alternatives without a validation library:

export function parseEventListQuery(query) {
    const page = Number(query.page ?? 0);
    const pageSize = Number(query.pageSize ?? 20);

    // Validate the page number before using it for offset calculations.
    if (!Number.isInteger(page) || page < 0) {
        const error = new Error("page must be a non-negative integer");
        error.status = 400;
        throw error;
    }

    // Keep the page size within a simple and predictable range.
    if (!Number.isInteger(pageSize) || pageSize < 1 || pageSize > 100) {
        const error = new Error("pageSize must be an integer between 1 and 100");
        error.status = 400;
        throw error;
    }

    return { page, pageSize };
}

export function parseEventIdParams(params) {
    const id = Number(params.id);

    // Route params are strings by default, so convert before validating.
    if (!Number.isInteger(id) || id < 1) {
        const error = new Error("id must be a positive integer");
        error.status = 400;
        throw error;
    }

    return { id };
}

export function parseEventInput(body) {
    const title = String(body.title ?? "").trim();
    const price = Number(body.price);
    const currency = String(body.currency ?? "").trim().toUpperCase();
    const description = body.description == null
        ? undefined
        : String(body.description).trim();

    // Required string field: reject missing or empty values.
    if (!title) {
        const error = new Error("title is required");
        error.status = 400;
        throw error;
    }

    // Number field: coerce first, then validate the business rule.
    if (!Number.isFinite(price) || price < 0) {
        const error = new Error("price must be a non-negative number");
        error.status = 400;
        throw error;
    }

    // Normalize currency before checking its expected shape.
    if (currency.length !== 3) {
        const error = new Error("currency must be a 3-letter code");
        error.status = 400;
        throw error;
    }

    return {
        title,
        price,
        currency,
        description,
    };
}

export function parseEventPatchInput(body) {
    // Reuse the same normalization logic, but only return fields that were sent.
    const parsed = parseEventInput({
        title: body.title ?? "placeholder",
        price: body.price ?? 0,
        currency: body.currency ?? "XXX",
        description: body.description,
    });

    const result = {};

    if (body.title !== undefined) {
        result.title = parsed.title;
    }

    if (body.price !== undefined) {
        result.price = parsed.price;
    }

    if (body.currency !== undefined) {
        result.currency = parsed.currency;
    }

    if (body.description !== undefined) {
        result.description = parsed.description;
    }

    return result;
}
*/
