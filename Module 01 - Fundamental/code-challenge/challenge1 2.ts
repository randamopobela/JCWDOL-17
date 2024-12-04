// Return Length of Arguments Passed - Code Challenge 1
const argumentsLength = (...args: any) => {
    return args.length;
};

console.log(
    `Return Length of Arguments Passed: `,
    argumentsLength({}, null, "3")
);

// -------------------------------------------------

// Create Hello World Function - Code Challenge 1
function createHelloWorld() {
    return function (...args: any[]): string {
        args = ["Hello World"];
        return args[0];
    };
}

const f = createHelloWorld();
console.log(`Create Hello World Function: `, f(["", {}, 3]));

// -------------------------------------------------

// Counter 2 - Code Challenge 1
type TCounter = {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
};

function createCounter(init: number): TCounter {
    let current: number = init;

    return {
        increment() {
            return ++init;
        },
        decrement() {
            return --init;
        },
        reset() {
            return (init = current);
        },
    };
}

const counter = createCounter(5);

console.log(`Counter 2: `, counter.increment());
console.log(`Counter 2: `, counter.reset());
console.log(`Counter 2: `, counter.decrement());

// -------------------------------------------------

// Sleep - Code Challenge 1
// async function sleep(millis: number): Promise<void> {
//     let t = Date.now();
//     sleep(100).then(() => {
//         console.log(Date.now() - t);
//     });
// }

async function sleep(millis: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, millis));
}

// Penggunaan fungsi sleep
(async () => {
    let t = Date.now();
    await sleep(2000); // Tunggu selama 100 ms
    console.log(`Sleep: `, Date.now() - t); // Cetak waktu yang telah berlalu
})();

// -------------------------------------------------

// Array Prototype Last - Code Challenge 1
interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function () {
    return this.length > 0 ? this[this.length - 1] : undefined;
};

const arr = [1, 2, 3];
console.log(`Array Prototype Last: `, arr.last());

// -------------------------------------------------

// Chunk Array - Code Challenge 1
// type JSONValue =
//     | null
//     | boolean
//     | number
//     | string
//     | JSONValue[]
//     | { [key: string]: JSONValue };
// type Obj = Record<string, JSONValue> | Array<JSONValue>;

// function chunk(arr: Obj[], size: number): Obj[][] {
//     let result: Obj[][] = [];
//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));
//     }
//     return result;
// }

// const chunkArr: number[] = [1, 2, 3, 4, 5];
// console.log(`Chank Array: `, chunk(chunkArr, 3));

// -------------------------------------------------

// Apply Transform Over Each Element in Array - Code Challenge 1
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    // arr menerima data, fn menerima callback
    const result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}

const numbersMap: number[] = [1, 2, 3]; // sebagai data
const square = (n: number) => n * n; // sebagai callback
console.log(
    `Apply Transform Over Each Element in Array: `,
    map(numbersMap, square)
);

// -------------------------------------------------

// To Be Or Not To Be - Code Challenge 1
// type ToBeOrNotToBe = {
//     toBe: (val: any) => boolean;
//     notToBe: (val: any) => boolean;
// };

// function expect(val: any): ToBeOrNotToBe {
//     return {
//         toBe: (equal: any) => {
//             if (val === equal) {
//                 return true;
//             } else {
//                 throw new Error("Not Equal");
//             }
//         },
//         notToBe: (equal: any) => {
//             if (val !== equal) {
//                 return true;
//             } else {
//                 throw new Error("Equal");
//             }
//         },
//     };
// }

// console.log(`To Be Or Not To Be: `, expect(5).toBe(3));
// console.log(`To Be Or Not To Be: `, expect(5).notToBe(3));

// -------------------------------------------------

// Function Composition - Code Challenge 1
type F = (x: number) => number;

function compose(functions: F[]): F {
    return function (x: number): number {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
}

const fn = compose([(x) => 1 + x, (x) => 2 * x]);
console.log(`Function Composition: `, fn(4));

// -------------------------------------------------

// Array Wrapper - Code Challenge 1
class ArrayWrapper {
    nums: number[];
    constructor(nums: number[]) {
        this.nums = nums;
    }

    valueOf(): number {
        let result = 0;
        for (let i = 0; i < this.nums.length; i++) {
            result += this.nums[i];
        }
        return result;
    }

    toString(): string {
        return `[${this.nums}]`;
    }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(`Array Wrapper: `, obj1.valueOf() + obj2.valueOf()); // "10"
console.log(`Array Wrapper: `, String(obj1)); // "[1,2]"
console.log(`Array Wrapper: `, String(obj2)); // "[3,4]"

// -------------------------------------------------

// Generate Fibonacci Sequence - Code Challenge 1
function* fibGenerator(): Generator<number, any, number> {
    let current = 0;
    let next = 1;
    while (true) {
        yield current;
        [current, next] = [next, current + next];
    }
}

const gen = fibGenerator();
console.log(`Generate Fibonacci Sequence: `, gen.next().value); // 0
console.log(`Generate Fibonacci Sequence: `, gen.next().value); // 1
console.log(`Generate Fibonacci Sequence: `, gen.next().value); // 1
console.log(`Generate Fibonacci Sequence: `, gen.next().value); // 1

// -------------------------------------------------

// Memoize - Code Challenge 1
type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
    const cache = new Map<string, number>(); // Map untuk menyimpan hasil sebelumnya

    return function (...args: number[]): number {
        const key = args.join(","); // Buat kunci unik berdasarkan argumen
        if (cache.has(key)) {
            // Jika hasil sudah ada di cache, langsung dikembalikan
            return cache.get(key)!;
        }
        const result = fn(...args); // Hitung hasil menggunakan fungsi asli
        cache.set(key, result); // Simpan hasil ke dalam cache
        return result; // Kembalikan hasil
    };
}

// Contoh Penggunaan
const add = (a: number, b: number): number => a + b;
const memoizedAdd = memoize(add);

console.log(`Memoize: `, memoizedAdd(1, 2)); // Output: 3 (dihitung)
console.log(`Memoize: `, memoizedAdd(1, 2)); // Output: 3 (dari cache)
console.log(`Memoize: `, memoizedAdd(2, 3)); // Output: 5 (dihitung)
console.log(`Memoize: `, memoizedAdd(2, 3)); // Output: 5 (dari cache)

// -------------------------------------------------

// Join Two Arrays by ID - Code Challenge 1
