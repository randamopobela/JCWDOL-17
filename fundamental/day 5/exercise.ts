// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

let arr: number[] = [12, 5, 23, 18, 4, 45, 32];
let lowest = arr[0];
let highest = arr[0];
let average = arr[0];

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

//
