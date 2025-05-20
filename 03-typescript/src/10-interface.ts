interface IPerson {
    name: string;
    age: number;
    spouse?: string;
    celebrateBirthday: (inc: number) => void;
}

// #1: to give the data type for an object
const john: IPerson = {
    name: "John Doe",
    age: 32,
    spouse: "Jane Doe", // even if we remove this, it's ok
    celebrateBirthday: function (inc: number) {
        this.age += inc;
        // return this.age; // is ok
    },
};

// #2: Enforce contract on a class
class Person implements IPerson {
    name: string;
    age: number;
    spouse?: string = "";

    constructor(name: string, age: number, spouse?: string) {
        this.name = name;
        this.age = age;
        this.spouse = spouse;
    }

    celebrateBirthday(inc: number) {
        this.age += inc;
    }
}

const jane: Person = new Person("Jane Doe", 32, "John Doe");

export {
    IPerson as default, // main export (only 1 per file)
    Person, // named export
};

export {}