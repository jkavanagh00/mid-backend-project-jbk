import {
  createAccount,
  findAccountByEmail,
  findAccountById,
} from "#models/accounts.js";
import { AccountInput, AccountIdParams } from "#schemas/accounts.js";
import { LoginParams } from "#schemas/auth.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export async function registerNewAccount(req, res, next) {
  try {
    const newAccount = AccountInput.parse(req.body);
    const { name, phone, email, password } = newAccount;

    const existingAccount = await findAccountByEmail(email);
    if (existingAccount) {
      return res.status(409).json({ error: "Email is already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    newAccount["password"] = hashedPassword;

    const createdAccount = await createAccount(newAccount);

    if (!createdAccount) {
      return res.status(500).json({
        error: "Failed to create account",
      });
    }
    res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const loginAttempt = LoginParams.parse(req.body);
    const { email, password } = loginAttempt;

    const account = await findAccountByEmail(email);
    const isMatch = account
      ? await bcrypt.compare(password, account.password)
      : false;

    if (!account || !isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const payload = { id: account.id, email: account.email };
    const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    next(error);
  }
}

export async function showOwnAccount(req, res, next) {
  try {
    const { id } = req.user;
    const account = await findAccountById(id);
    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }
    const { password, ...safeAccount } = account;
    res.json({ account: safeAccount });
  } catch (error) {
    next(error);
  }
}
