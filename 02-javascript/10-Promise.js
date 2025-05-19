// a function that does something asynchronous can share the result using callback / Promises
const sum = (x, y) => {
    return new Promise(
        (resolve, reject) => { // fn
            // console.log('fn called by Promise constructor');

            setTimeout(
                () => resolve(x + y),
                3000
            )
        }
    );
};

// then(), catch()
sum(12, 13)
    .then(
        (result1) => {
            console.log(result1);

            return sum(result1, 14);
        }
    )
    .then(
        (result2) => {
            console.log(result2);

            return sum(result2, 15);
        }
    )
    .then(
        (result3) => {
            console.log(result3);
        }
    )

