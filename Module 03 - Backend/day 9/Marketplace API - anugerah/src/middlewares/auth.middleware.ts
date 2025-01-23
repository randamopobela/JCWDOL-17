import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { jwt_secret } from "../config";
import { UserLogin } from "../interfaces/user.interface";
import { ErrorHandler } from "../helpers/response.handler";

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { authorization } = req.headers;
        const token = String(req.headers.authorization || "").split(
            "Bearer "
        )[1];
        const verifiedUser = verify(token, jwt_secret);
        if (!verifiedUser) throw new ErrorHandler("Unauthorized", 401);
        req.user = verifiedUser as UserLogin;
        next();
    } catch (error) {
        next(error);
    }
};
