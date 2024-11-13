// Exercise 10

// Soal 1
// ● Create a function to convert Excel sheet column title to its corresponding column number.
// ● Example :
//  A -> 1
//  B -> 2
//  C -> 3
//  ...
//  Z -> 26
//  AA -> 27
//  AB -> 28
//  …
// ● Example :
//  ○ Input : AB
//  ○ Output : 28

const convertExcel = (str: string): Number => {
    let row = 0;

    for (let i = 0; i < str.length; i++) {
        let charASCII = str.charCodeAt(i) - 64;
        row = row * 26 + charASCII;
    }
    return row;
};

let input: string = "A";
let input2: string = "XD";

console.log(convertExcel(input2));

// Soal 3
// ● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// ● Example 1:
// ○ Input: s = "anagram", t = "nagaram"
// ○ Output: true
// ● Example 2:
// ○ Input: s = "rat", t = "car"
// ○ Output: false

const anagram = (strS: string, strT: string): Boolean => {
    let s = strS.split("").sort().join("");
    let t = strT.split("").sort().join("");

    return s == t ? true : false;
};

let s: string = "anagram";
let t: string = "nagaram";

console.log("Hasil soal 3:", anagram(s, t));

// Soal 4
// ● You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
// steps. In how many distinct ways can you climb to the top?
// ● Example 1:
//  ○ Input: n = 2
//  ○ Output: 2
//  ○ Explanation: There are two ways to climb to the top.
//   ■ 1. 1 step + 1 step
//   ■ 2. 2 steps
// ● Example 2:
//  ○ Input: n = 3
//  ○ Output: 3
//  ○ Explanation: There are three ways to climb to the top.
//   ■ 1. 1 step + 1 step + 1 step
//   ■ 2. 1 step + 2 steps
//   ■ 3. 2 steps + 1 step

// const climbing = (num: number): Number => {

// };

// let n: number = 2;

// console.log(climbing(n));
