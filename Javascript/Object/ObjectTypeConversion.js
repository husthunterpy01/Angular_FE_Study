let obj = {};
let num = Number(obj);
console.log(num); //Nan

let date1 = new Date("December 01, 2021 00:00:00");
let date2 = new Date("December 02, 2021 00:00:00");
let delta = date2 - date1;
console.log(delta);

let p1 = { x: 1 };
let p2 = { x: 2 };
console.log(+p1);

let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

// conversions demo:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500


let a2 = String("a");
let a3 = String("a");
console.log(a2 === a3);

let a4 = Symbol("a");
let a5 = Symbol("a");
console.log(a4 === a3);
console.log(a4 === a5);
console.log(a4.toString()); // Print as Symbol(a)
console.log(a4.description); // Print the Symbol content

let user1 = {
    name: "John"
}

let id = Symbol("id");
user1[id] = 5;
console.log(user1[id]);

let user2 = {
    name: "Bob",
    [id]: 123
}
console.log(user2[id]);