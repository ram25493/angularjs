"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(speed, rpm, brand) {
        if (rpm === void 0) { rpm = 20; }
        this.speed = speed;
        this.rpm = rpm;
        this.brand = brand;
    }
    Car.prototype.speedUp = function (speed) {
        if (speed === void 0) { speed = 10; }
        this.speed = speed + (this.rpm += 10);
        console.log(speed);
    };
    Car.prototype.whatsBrand = function () {
        return this.brand;
    };
    return Car;
}());
exports.Car = Car;
var cr = new Car();
