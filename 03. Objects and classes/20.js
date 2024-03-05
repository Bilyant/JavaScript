function solve() {

    class Vehicle {
        constructor (type, model, parts, fuel) {
            this.type = type;    // string
            this.model = model;  // string
            this.parts = parts;  // obj ( engine(num), power(num), quality(engine*power) )
            this.fuel = fuel;    // num
            this.parts.quality = this.parts.engine * this.parts.power
        }

        drive(fuelLoss) {
            this.fuel -= fuelLoss;
        }
    }

    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);

    // let parts = {engine: 9, power: 500};
    // let vehicle = new Vehicle('l', 'k', parts, 840);
    // vehicle.drive(20);
    // console.log(vehicle.fuel);

};

solve();


