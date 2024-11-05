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
