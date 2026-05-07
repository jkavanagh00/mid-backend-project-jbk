import { json } from "body-parser";
import jsonwebtoken from "jsonwebtoken";
import crypto from "crypto";

const JWT_SECRET = process.env.JWT_SECRET;

export function authenticateJWT(req, res, next) {
    const token = extractToken(req);

    if (!token) return res.status(401).json({ error: "Missing or invalid Authorization header" });

    try {
        const decoded = verifyToken(token);
        if (!decoded) return res.status(401).json({ error: "Invalid or expired token" });
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
}

export function identifyUserOrGuest(req, res, next) {
    let token = extractToken(req);
    if (!token) {
        const guestId = crypto.randomUUID();
        const guestToken = jsonwebtoken.sign({ guestId }, JWT_SECRET, { expiresIn: "7d" });
        return res.status(200).json({ token: guestToken, guest: true });
    }

    try {
        const decoded = verifyToken(token);
        if (!decoded) {
            return res.status(401).json({ error: "Invalid or expired token" });
        }
        req.user = decoded;
    } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
    next();
}

// helper functions

function extractToken(req) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return null;
    }
    return authHeader.split(" ")[1];
}

function verifyToken(token) {
    try {
        return jsonwebtoken.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}
