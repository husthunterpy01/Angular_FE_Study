let user = {
    name: "John"
};
let admin = {
    name: "New admin"
};

function sayHi() {
    console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;
user.f();
admin.f();
user['f']();

function User(name) {
    this.name = name;
    return { name: "Joe" };
}

console.log(new User("Quagmire").name);