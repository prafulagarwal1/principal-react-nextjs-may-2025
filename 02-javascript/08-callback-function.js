// If a function exits without explicitly returning a value, it returns undefined
const sum = (x, y, callback) => {
    setTimeout(
        () => {
            const result = x + y;

            // return result;
            callback(result);
        },
        3000
    );

    // return undefined;
};

console.log(
    sum(
        "Twelve",
        "Thirteen",
        (result) => {
            console.log('callback called');
            console.log('result = ', result);

            // ...more code to make use of result
        }
    )
);



















// function foo() {

// }

// console.log(foo());

// // console.log(undefined);