let student = {
    name: "John",
    department: {
        Id: 1.5,
        DepartmentName: "School of IT"
    }
};
let a = JSON.stringify(student);
console.log(a);
console.log(JSON.parse(a));