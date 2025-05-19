const arr1 = [1, 2, 3], arr2 = [4, 5, 6];

const arr3 = [...arr1, 3.5, 3.75, ...arr2]; // [ 1, 2, 3 ]

console.log(arr3);

const john = {
    name: 'John',
    age: 32, // primitives are copied by value
    address: { // non-primitives are copied by reference
        region: 'Baner',
        city: 'Pune'
    }
};

const johnPrincipal = {
    name: 'Jonathan',
    company: 'Principal',
    role: 'Accountant',
    dept: 'Finance'
};

const johnMasterDetails = {
    ...john, // primitives (like name, age) are copied by value. non-primitves (like address) are copied by reference
    selfInsured: true,
    ...johnPrincipal,
};

console.log(johnMasterDetails);

++johnMasterDetails.age; // this will not affect john.age
johnMasterDetails.address.region = 'Hinjewadi'; // this will not affect john.age

// What is logged for age and region in john?
console.log(john); // age = 32 / 33, region = Baner / Hinjewadi

// Explore: Deep and shallow copy of objects