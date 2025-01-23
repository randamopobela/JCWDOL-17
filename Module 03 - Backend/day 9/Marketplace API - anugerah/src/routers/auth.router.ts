/** @format */

import { Router } from "express";
import authController from "../controllers/auth.controller";

export const authRouter = () => {
    const router = Router();

    router.post("/new", authController.signUp);
    router.post("/", authController.signIn);
    router.patch("/", authController.updateUser);

    return router;
};
