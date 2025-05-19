function add(x, y) {
    return x + y;
}

const add = (x, y) => {
    console.log('add called');
    return x + y;
};

// const add = (x, y) => { x + y; } // returns undefined - wrong
const add = (x, y) => x + y;

// iterator methods
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// forEach -> simplified for loop
days.forEach(
    (day, idx) => console.log(day, idx)
);

// filter()
const result = days.filter(
    day => day.length === 6
);
console.log(result);

// map()
const mapResult = days.map(
    day => day.length
);
console.log(mapResult);

// Explore: reduce(), find()