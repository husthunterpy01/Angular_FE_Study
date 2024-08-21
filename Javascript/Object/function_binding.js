let user = {
    name: "John",
    sayHi() {
        console.log(`Hello, ${this.name} is here`);
    }
}

setTimeout(function() { user.sayHi() }, 3000);