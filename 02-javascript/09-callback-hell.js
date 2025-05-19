// If a function exits without explicitly returning a value, it returns undefined
const sum = (x, y, callback) => {
    setTimeout(
        () => callback(x + y),
        3000
    );
};

// Easily understandable
sum(12, 13, (result1) => {
    console.log('callback called');
    console.log('result1 = ', result1);

    // ...more code to make use of result
    sum(result1, 14, (result2) => {
        console.log('result2 = ', result2);

        sum(result2, 15, (result3) => {
            console.log('result3 = ', result3);
        });
    });
});