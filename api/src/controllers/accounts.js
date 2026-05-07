import {
  listAccounts,
  countAccounts,
  findAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
} from "#models/accounts.js";
import {
  AccountListQuery,
  AccountIdParams,
  AccountInput,
  AccountPatchInput,
} from "#schemas/accounts.js";

export async function getAccounts(req, res, next) {
  try {
    const { page, pageSize, createdAt, updatedAt, search } =
      AccountListQuery.parse(req.query);
    const offset = page * pageSize;

    const filters = {
      createdAt,
      updatedAt,
      search,
    };

    const data = await listAccounts(filters, {
      limit: pageSize,
      offset,
      orderBy: "id",
      order: "asc",
    });

    const totalItems = await countAccounts(filters);
    const totalPages = Math.ceil(totalItems / pageSize);

    res.json({
      data,
      meta: {
        page,
        pageSize,
        totalItems,
        totalPages,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function getAccountById(req, res, next) {
  try {
    const { id } = AccountIdParams.parse(req.params);
    const account = await findAccountById(id);

    if (!account) {
      return res.status(404).json({
        error: "Account not found",
      });
    }

    res.json({ data: account });
  } catch (error) {
    next(error);
  }
}

export async function postAccount(req, res, next) {
  try {
    // Parse the request body before handing data to the model layer.
    const newAccount = await createAccount(AccountInput.parse(req.body));

    if (!newAccount) {
      return res.status(500).json({
        error: "Failed to create account",
      });
    }

    res.status(201).json({
      data: newAccount,
    });
  } catch (error) {
    next(error);
  }
}

export async function patchAccount(req, res, next) {
  // OPTIONAL TODO: implement this handler only if optional scope is taken on
  try {
    // Validate both the route params and the partial PATCH payload.
    const { id } = AccountIdParams.parse(req.params);
    const accountPatchInput = AccountPatchInput.parse(req.body);

    const updatedAccount = await updateAccount(id, accountPatchInput);

    if (!updatedAccount) {
      return res.status(404).json({
        error: "Account not found",
      });
    }

    return res.status(200).json({ data: updatedAccount });
  } catch (error) {
    next(error);
  }
}

export async function removeAccount(req, res, next) {
  try {
    const { id } = AccountIdParams.parse(req.params);

    const deletedAccount = await deleteAccount(id);

    if (!deletedAccount) {
      return res.status(404).json({
        error: "Account not found",
      });
    }

    return res.status(200).json({ data: deletedAccount });
  } catch (error) {
    next(error);
  }
}
