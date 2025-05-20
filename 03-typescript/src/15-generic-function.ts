const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// map()
const mapResult = days.map(
    function (day) {
        return day.length;
    }
);
console.log(mapResult);

// implement our own map() function - generic one in TS
