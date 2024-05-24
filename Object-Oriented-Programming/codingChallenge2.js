// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
class Carcl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
  // by 1.6)
  get speedUs() {
    console.log(this.speed / 1.6);
  }

  // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
  // converts it to km/h before storing the value, by multiplying the input by 1.6)
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
const ford = new Carcl("Ford", 120);
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
// GOOD LUCK
ford.speedUs;
ford.accelerate();
ford.brake();
