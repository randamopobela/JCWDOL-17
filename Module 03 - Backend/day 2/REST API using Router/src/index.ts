import express, { Application, Request, Response } from "express";
import productRoute from "./routes/product.route";

const app: Application = express();
const PORT = 8000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to my API");
});

app.use("/products", productRoute);

app.listen(PORT, () => console.log(`API is running on port ${PORT}`));
