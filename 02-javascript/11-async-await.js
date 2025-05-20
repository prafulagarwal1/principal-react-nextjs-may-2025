// a function that does something asynchronous can share the result using callback / Promises
const sum = (x, y) => {
    return new Promise(
        (resolve, reject) => { // fn
            // console.log('fn called by Promise constructor');

            setTimeout(
                () => {
                    if (typeof x !== 'number' || typeof y !== 'number') {
                        reject(new Error('Both arguments must be numbers'));
                        return;
                    }

                    resolve(x + y);
                },
                3000
            )
        }
    );
};

const doSomething = async () => {
    console.log(3);

    try {
        const result1 = await sum(12, 13);
        console.log(result1);
        const result2 = await sum(result1, 14);
        console.log(result2);
        const result3 = await sum(result2, 15);
        console.log(result3);

        return result3;
    } catch (error) {
        console.log(error.message);
    }

    console.log(4);
}

console.log(1);

doSomething()
    .then(
        finalResult => console.log(finalResult)
    )
    .catch(
        error => console.log(error.message)
    );

console.log(2);

// nothing else to do...
// now the execution is resumed from the "await line"