type Person = {
    name: string;
    readonly age: number;
    spouse?: string;
    // address: {
    //     area: string,
    //     city: string
    // }
};

let john: Person;

// age is readonly and after john is assigned, it cannot be changed
john = {
    name: "John",
    age: 32,
    spouse: "Jane", // spouse present - ok
};

const jane: Person = {
    name: "Jane",
    age: 28,
    // spouse: "John", // spouse not present - ok
};

jane.spouse = "John";
// jane.emails = [ 'jane@gmail.com'];

// readonly prevents property value change
// john.age++; // error

// const as such allows property value change
jane.name = "Janette";
// jane = {
//     name: 'Janette'
// }
