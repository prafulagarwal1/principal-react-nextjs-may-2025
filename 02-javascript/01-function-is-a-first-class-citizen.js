function sum(a, b) {
    console.log('i was called');

    const result = a + b;

    return result;
}

const add = sum; // not called. instead add also now refers to sum function

add(); // calling the sum / add function

const multiply = function (x, y) {
    return x * y;
};

console.log(multiply(2, 3));