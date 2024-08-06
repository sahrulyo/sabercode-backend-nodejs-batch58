"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../utils/env");
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
    const [prefix, accessToken] = token.split(" ");
    if (prefix !== "Bearer" || !accessToken) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
    try {
        const user = jsonwebtoken_1.default.verify(accessToken, env_1.SECRET);
        if (!user) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }
        req.user = {
            id: user.id,
            role: user.role,
            roles: user.roles,
        };
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
};
exports.default = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map