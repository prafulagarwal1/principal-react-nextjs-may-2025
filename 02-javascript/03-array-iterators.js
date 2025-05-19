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
    function (day, idx) { // iterator function
        console.log(day, idx);
        // console.log('called');
    }
);

// filter()
const result = days.filter(
    function (day) {
        return day.length === 6;
    }
);
console.log(result);

// map()
const mapResult = days.map(
    function (day) {
        return day.length;
    }
);
console.log(mapResult);

// Explore: reduce(), find()