// What setTimeout does: It "requests" the Node JS / browser to execute f AFTER 5 seconds. It takes negligible time (it is ONLY a request)
// Who executes f AFTER 5 seconds? - Node JS / browser
// a timer for 5 seconds is started
setTimeout(
    () => { // f
        console.log(1);
    },
    5000
);

// a timer for 2 seconds is started
setTimeout(
    () => { // g
        console.log(2);
    },
    2000
);

// asynchronous non-blocking functions
setTimeout(
    () => { // h
        console.log(3);
    },
    0
);

// Event queue
// [ h ]

console.log(4);

// nothing to do - runtime is free -> picks up functions from the evnt queue and executes them
// h()

// AFTER 2 seconds,
// [ g ]
// g()

// AFTER 5 seconds,
// [ f ]
// f()