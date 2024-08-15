function makeCounter(name) {
    let count = 0; // `count` is a private variable

    return function() {
        count++; // `count` is accessible within this inner function
        console.log(name);
        return count;
    };
}

const counter = makeCounter("Josh");

console.log(counter()); //Josh, 1
console.log(counter()); //Josh, 2
console.log(counter()); //Josh, 3