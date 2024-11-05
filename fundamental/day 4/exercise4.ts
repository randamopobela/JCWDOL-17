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

    for (let index = 0; index <= numbers; index++) {
        if (index % 3 == 0) {
            hasil += `Fizz`;
        } else if (index % 5 == 00) {
            hasil += `Buzz`;
        } else if ((index % 3 == (0 % index) % 5) == 0) {
            hasil += `FizzBuzz`;
        } else {
            hasil += `${index} `;
        }

        console.log(hasil);
    }
}

fizzBuzz(15);
