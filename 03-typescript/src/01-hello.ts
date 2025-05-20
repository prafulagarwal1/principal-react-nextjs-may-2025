let message /*: any*/;

message = "Hello World!!!";
console.log(message);

message = 100;

message = {
    name: "John",
};

// #2: string
let greeting: string;
greeting = "Good morning";
// greeting = 100; // error

// #3: boolean
let isPresent: boolean;
isPresent = true;
// isPresent = 1;

// #4: number
let total: number;
total = 100;
total = 100.5;
// total = "Hundred";

// #5: null, undefined
// we do not use null type and undefined type on their own
let employee: null;
employee = null;
// employee = { // error
//     name: "John",
//     role: "Frontend dev",
// };
// employee = 123;

export {};
