// Define the first promise
let promise1 = new Promise(function(resolve) {
    setTimeout(() => resolve([1, 2]), 6000);
});

// Define the second promise
let promise2 = new Promise(function(resolve) {
    setTimeout(() => resolve([3, 4]), 2000);
});


Promise.all([promise1, promise2])
    .then(function(arr1) {
        console.log(arr1[0]);
    });


let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { // (*)
        results.forEach((result, num) => {
            if (result.status == "fulfilled") {
                console.log(`${urls[num]}: ${result.value.status}`);
            }
            if (result.status == "rejected") {
                console.log(`${urls[num]}: ${result.reason}`);
            }
        });
    });

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log()); // 1