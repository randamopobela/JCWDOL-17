export interface ITransaction {
    id: number;
    title: string;
    nominal: number;
    typeId: number;
    categoryId: number;
    date?: string; // Optional
}
