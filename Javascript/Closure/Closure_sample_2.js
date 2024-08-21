function createCar(brand = "Mustang") {
    var fuel = 2;

    return function() {
        fuel++;
        console.log(`The car with brand ${brand} has the fuel of ${fuel} `);
    }
}

var carFactory = createCar("Honda");
carFactory();