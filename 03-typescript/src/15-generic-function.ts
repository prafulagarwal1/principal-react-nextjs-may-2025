const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// map()
// [ 6, 7, 9, 8, 6 ]
const mapResult = days.map(
    function (day) {
        return day.length;
    }
);
console.log(mapResult);

// implement our own map() function - generic one in TS
type MapperFunction<T, U> = ( item : T ) => U;

const map = <T, U>(arr : T[], mapper : MapperFunction<T, U>) => {
    const result = [];

    for( let i = 0; i < arr.length; ++i ) {
        const mappedItem = mapper( arr[i] );
        result.push( mappedItem );
    }

    return result;
};

// explicitly specify T and U bindings
const numCharsInDays = map<string, number>(
    days,
    function (day) {
        return day.length;
    }
);

console.log( numCharsInDays );

const primes = [ 2, 3, 5, 7, 11 ];

console.log( map( primes, x => x * x ) );