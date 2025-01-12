import { Router, Request, Response } from "express";
import { getData } from "../helpers/expenses";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    const expenses = getData();

    res.send({
        message: "fetching expenses",
        data: expenses,
    });
});

export default router;
