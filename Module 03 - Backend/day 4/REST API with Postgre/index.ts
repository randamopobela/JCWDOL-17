import { config } from "dotenv";
import { resolve } from "path";
import { Pool } from "pg";
import express, { Application, Request, Response } from "express";

const app: Application = express();
config({ path: resolve(__dirname, "./.env") });

const PORT = process.env.PORT || 8000;
app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});

pool.connect((err, client, release) => {
    if (err) {
        console.error("Error connecting to database", err.stack);
    } else {
        console.log("Connected to database");
        release();
    }
});

app.get("/employees", async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM employees");

        res.send({
            message: "fetching employees",
            data: result.rows,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(PORT, () => console.log(`API is running on port ${PORT}`));
