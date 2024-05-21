// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
const toyota = new Car("Toyota", 150);
const honda = new Car("Honda", 200);
// 'brake' multiple times on each of them

toyota.accelerate();
toyota.accelerate();
toyota.accelerate();
honda.brake();
honda.brake();
honda.brake();

// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
