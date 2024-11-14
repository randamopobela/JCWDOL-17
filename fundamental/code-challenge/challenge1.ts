// Return Length of Arguments Passed - Code Challenge 1

const argumentsLength = (...args: any) => {
    return args.length;
};

console.log(argumentsLength({}, null, "3"));

// -------------------------------------------------

// Create Hello World Function - Code Challenge 1

function createHelloWorld() {
    return function (...args: any[]): string {
        args = ["Hello World"];
        return args[0];
    };
}

const f = createHelloWorld();
console.log(f(["", {}, 3]));

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

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
