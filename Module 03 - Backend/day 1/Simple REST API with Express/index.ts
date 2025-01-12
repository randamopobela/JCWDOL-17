import express, { Application, Request, Response } from "express";
import { products } from "./data.json";

const app: Application = express();

// app.use(express.json()); //menangkap req.body

const PORT = 8000;

// Akses GET ke route /
app.get("/", (req: Request, res: Response) => {
    res.status(200).send({
        message: "Welcome to my API",
    });
});

//  Akses GET ke route /products
app.get("/products", (req: Request, res: Response) => {
    res.status(200).send({
        message: "fetching products",
        data: products,
    });
});

// Mencari product berdasarkan product_name
app.get("/search", (req: Request, res: Response) => {
    const { product_name } = req.query;
    let data = [...products];

    if (product_name) {
        data = data.filter((product) =>
            product.product_name
                .toLowerCase()
                .includes(String(product_name).toLowerCase())
        );
    }

    res.status(200).send({
        message: "fetching products",
        data,
    });
});

app.post("/products", (req: Request, res: Response) => {
    try {
        const id = products[products.length - 1].id + 1;
        const { product_name, price } = req.body;
        if (!product_name || !price)
            throw new Error("Product name and price is required");

        const newProduct = {
            id,
            product_name,
            price,
        };

        products.push(newProduct);

        res.send({
            message: "Product has been added",
            data: newProduct,
        });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send({
                message: error.message,
            });
        }
    }
});

// Masih error di bagian method patch
app.patch("/products/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { product_name, price } = req.body;
        const idx = products.findIndex((product) => product.id === Number(id));

        if (idx === -1) throw new Error("Product not found");
        if (product_name) products[idx].product_name = product_name;
        if (price) products[idx].price = price;
        // products[idx] = { ...products[idx], ...req.body };

        res.send({
            message: `product ${id} has been updated`,
        });
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).send({
                message: error.message,
            });
        }
    }
});

// Menghapus product
app.delete("/products/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const idx = products.findIndex((product) => product.id === Number(id));

    if (idx === -1) {
        res.status(404).send({
            message: "Product not found",
        });
    } else {
        products.splice(idx, 1);
        res.status(200).send({
            message: `Product with id ${id} has been deleted`,
        });
    }
});

// Mencari product berdasarkan id
app.get("/products/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const data = products.find((product) => product.id === Number(id));

    if (!data) {
        res.status(404).send({
            message: "Product not found",
        });
    } else {
        res.status(200).send({
            message: "fetching product",
            data,
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
