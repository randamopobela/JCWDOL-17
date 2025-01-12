import express, { Application, Request, Response } from "express";
import expenseRoute from "./routes/expense.route";

const app: Application = express();

const PORT = 8000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to my API");
});

app.use("/expenses", expenseRoute);

app.listen(PORT, () => console.log(`API is running on port ${PORT}`));
