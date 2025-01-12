// import { readFileSync, writeFileSync } from "fs";
// import { IExpense } from "../interfaces/expenses.interface";

// export const getData = () => {
//     const data = JSON.parse(
//         readFileSync(__dirname + "/../../db.json", "utf-8")
//     );
//     return data.transactions as IExpense[];
// };

// export const addExpense = (newData: IExpense) => {
//     const data: { transactions: IExpense[] } = {
//         transactions: getData(),
//     };

//     data.transactions.push(newData);

//     writeFileSync(__dirname + "/../../db.json", JSON.stringify(data));
// };

import { readFileSync, writeFileSync } from "fs";
import { ITransaction } from "../interfaces/transactions.interface";
import { ITypes } from "../interfaces/types.interface";
import { ICategory } from "../interfaces/categories.interface";

export const getData = () => {
    const data = JSON.parse(
        readFileSync(__dirname + "/../../db.json", "utf-8")
    );
    return data;
};

export const getExpensesWithDetails = () => {
    const data = getData();

    const transactions = data.transactions.map((transaction: ITransaction) => ({
        ...transaction,
        type: data.types.find((type: ITypes) => type.id === transaction.typeId)
            ?.type,
        category: data.categories.find(
            (category: ICategory) => category.id === transaction.categoryId
        )?.type,
    }));

    return transactions;
};

export const addExpense = (newData: ITransaction) => {
    const data = getData();
    data.transactions.push(newData); // Tambahkan data baru ke array transaksi

    writeFileSync(__dirname + "/../../db.json", JSON.stringify(data, null, 2)); // Simpan data ke file
    return newData;
};
