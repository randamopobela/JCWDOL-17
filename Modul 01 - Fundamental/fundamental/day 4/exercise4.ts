// Exercise 1
// Create a function that can create a triangle pattern according to the height we provide like the
// following:
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// ● Parameters : height → triangle height

function triangle(height: number) {
    let counter = 1;

    for (let index = 0; index < height; index++) {
        let hasil = "";

        for (let j = 0; j <= index; j++) {
            if (counter > 9) {
                hasil += `${counter}`;
            } else {
                hasil += `0${counter} `;
            }

            counter++;
        }

        console.log(hasil);
    }
}

triangle(4);

// Exercise 2
// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz"
// , multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz"
// .
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

function fizzBuzz(numbers: number) {
    let hasil = "";

    for (let index = 1; index <= numbers; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            hasil += `FizzBuzz `;
        } else if (index % 3 == 0) {
            hasil += `Fizz `;
        } else if (index % 5 == 0) {
            hasil += `Buzz `;
        } else {
            hasil += `${index} `;
        }
    }

    console.log(hasil);
}

fizzBuzz(15);

// Exeercise 3
// Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return“less weight”
// ○ 18.5 - 24.9 return“ideal”
// ○ 25.0 - 29.9 return“overweight”
// ○ 30.0 - 39.9 return“very overweight”
// ○ > 39.9 return“obesity”z

function calculateBMI(weight: number, height: number) {
    let bmi = weight / height ** 2;

    if (bmi < 18.5) {
        return `Less weight`;
    } else if (bmi >= 18.5 || bmi <= 24.9) {
        return `Ideal`;
    } else if (bmi >= 25.0 || bmi <= 29.9) {
        return `Overweight`;
    } else if (bmi >= 30.0 || bmi <= 39.9) {
        return `Very overweight`;
    } else {
        return `Obesity`;
    }
}

console.log(calculateBMI(71, 1.73));

//Exercise 4
// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

function filterOddNumber(numbers: number[]) {
    let oddNumber = numbers.filter((num) => num % 2 == 0);

    console.log(oddNumber);
}

filterOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Exercise 5
// Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]

function splitWord(words: string) {
    const hasil = words.split(" ");
    return console.log(hasil);
}

splitWord("Hello World");
