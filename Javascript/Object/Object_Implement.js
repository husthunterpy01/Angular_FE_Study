let car = {
    color: "red",
    brand: "Mustang",
    origin: "USA"
};

console.log(car.origin);

let computer = new Object();
computer.brand = "Dell";
computer.type = "Laptop";
computer.price = "1000";
console.log(computer);

function Student(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
}
student = new Student(123, "John", 12);
console.log(student);