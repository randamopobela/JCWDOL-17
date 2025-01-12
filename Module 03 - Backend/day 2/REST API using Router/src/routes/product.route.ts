import { Router, Request, Response } from "express";
import { addProduct, getData } from "../helpers/products";
import { IProduct } from "../interfaces/products.interface";

const router = Router();
// mengarah ke localhost:8000/products karena mengikuti route awal di /products pada index.ts
// router.get("/", (req: Request, res: Response) => {
//     res.send({
//         message: "fetching products",
//         data: products,
//     });
// });

router.get("/", (req: Request, res: Response) => {
    const products = getData();
    res.send({
        message: "fetching products",
        data: products,
    });
});

// router.get("/:id", (req: Request, res: Response) => {
//     const { id } = req.params;
//     const products = getData();
//     const data = products.find((products) => products.id === Number(id));

//     res.send({
//         message: `Fetching product id ${id}`,
//         data,
//     });
// });

router.get("/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const products = getData();
    const data = products.find((products) => products.id == Number(id));
    res.send({
        message: "fetching product id " + id,
        data,
    });
});

// router.post("/", (req: Request, res: Response) => {
//     addProduct(req.body as IProduct);
//     res.send({
//         message: "New product has been added",
//     });
// });

router.post("/", (req: Request, res: Response) => {
    const products = getData();
    const id = products[products.length - 1].id + 1;
    const { productName, price, categoryId } = req.body;
    const newData = { id, productName, price, categoryId };
    addProduct(newData);

    res.send({
        message: "New product has been added",
    });
});

export default router;
