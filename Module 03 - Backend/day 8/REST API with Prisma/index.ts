/** @format */

import express, { Application, NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const app: Application = express();
const PORT = 8000;

const prisma = new PrismaClient();

app.get(
  "/branches",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await prisma.branch.findMany();
      res.send({
        message: "fetch branches",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.get(
  "/branches/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const data = await prisma.branch.findUnique({
        where: { id },
      }); // select * from branches where id =
      res.send({
        message: "fetch branch",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({
    message: error.message,
  });
});

app.listen(PORT, () => {
  console.log("API is running on PORT", PORT);
});
