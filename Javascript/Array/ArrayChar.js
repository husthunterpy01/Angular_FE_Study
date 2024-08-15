let game = ["Contra", "Rambo", "GTA_V"]
game.splice(2, 0, "Batman Arkham", "Lego Dimension");
console.log(game);

let abc = [1, 4, 3, 8, 6];
abc.reverse();
console.log(abc)


// Override the original sorting method
let d2 = [1, 12, 8, 25, 2];
d2.slice(0, 2)
d2.sort(function(a, b) {
    return a - b;
});
console.log(d2);


["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
})

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "N" },
    { id: 3, name: "B" }
];

users = users.find(x => x.id >= 2);
console.log(users.name)


)