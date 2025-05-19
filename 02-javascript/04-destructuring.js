// ES6 - ES2015
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// const first = days[0], second = days[1], fifth = days[4];
const [first, second, , , fifth] = days;

console.log(first, second, fifth);

const john = {
    name: 'John',
    age: 32,
    gender: 'male',
    emails: [
        'john@gmail.com',
        'john@principal.com'
    ],
    address: {
        region: 'Baner',
        city: 'Pune'
    }
};

// const name = john.name, age = john.age, officialEmail = john.emails[1], region = john.address.region, city = john.address.city;

const {
    name,
    age,
    emails: [, officialEmail],
    address: {
        region: location,
        city
    }
} = john;

console.log(name, age, officialEmail, location, city);