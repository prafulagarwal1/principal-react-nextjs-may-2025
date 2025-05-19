function printName(person, getTitle) {
    const title = getTitle(person);
    console.log(`Hello ${title} ${person.name}`);
}

function getEnglishTitle(person) {
    return person.gender === 'male' ? 'Mr.' : 'Ms.';
}

// person -> { ... }
// getTitle -> function (person) { ... }
printName(
    {
        name: 'John',
        age: 32,
        gender: 'male'
    },
    getEnglishTitle
);