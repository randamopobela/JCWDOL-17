// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

let arr: number[] = [12, 5, 23, 18, 4, 45, 32];
let lowest: number = arr[0];
let highest: number = arr[0];
let average: number = arr[0];

function getNum(arr: number[]) {
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

console.log(getNum(arr));

// // Write a function that takes an array of words and returns a string by concatenating the words in the array,
// // separated by commas and - the last word - by an 'and'.
// // a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

let arrString: string[] = ["apple", "banana", "cherry", "date", "watermelon"];

function joinWords(arrString: string[]): string {
  const word = arrString.slice(0, -1).join(",");
  const lastWord = arrString[arrString.length - 1];

  return `${word}, and ${lastWord}`;
}

console.log(joinWords(arrString));
