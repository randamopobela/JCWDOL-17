// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

function getNum(arr: number[]) {
    let lowest: number = arr[0];
    let highest: number = arr[0];
    let sum: number = 0;

    for (const num of arr) {
        if (num < lowest) lowest = num;
        if (num > highest) highest = num;
        sum += num;
    }

    const average = sum / arr.length;

    return {
        lowest,
        highest,
        average,
    };
}

let arr: number[] = [12, 5, 23, 18, 4, 45, 32];

console.log(getNum(arr));

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

function joinWords(arrString: string[]): string {
    const word = arrString.slice(0, -1).join(",");
    const lastWord = arrString[arrString.length - 1];

    return `${word}, and ${lastWord}`;
}

let arrString: string[] = ["apple", "banana", "cherry", "date", "watermelon"];

console.log(joinWords(arrString));

// 3. Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

function smallSecondNum(numbers: number[]) {
    for (const num of numbers) {
        // belum selesai
    }
}

let numbers: number[] = [5, 3, 1, 7, 2, 6];

console.log(smallSecondNum(numbers));
