import { readFileSync, writeFileSync } from "fs";
import { IProduct } from "../interfaces/products.interface";

export const getData = () => {
    const data = JSON.parse(
        readFileSync(__dirname + "/../../db.json", "utf-8")
    );
    return data.products as IProduct[];
};

export const addProduct = (newData: IProduct) => {
    const products = getData().push(newData);

    writeFileSync(__dirname + "/../../db.json", JSON.stringify(products));
};
