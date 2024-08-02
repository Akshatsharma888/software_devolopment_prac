export class Car {
  #brand;
  #model;
  speed;

  constructor() {
    this.brand = 'tesla';
    this.model = 'model3';
    this.speed = 0;
  }

  displayInfo() {
    console.log(`${this.brand}, ${this.model}`);
  }

  
  displayInfo2() {
    console.log(`${this.brand}, ${this.model},${this.speed} km/h`);
  }

  go(){
    this.speed+=5
    console.log(`${this.speed}`);
  }
  Break(){
    this.speed-=5
    console.log(`${this.speed}`);
  }
}

const car = new Car();
console.log(car);
car.displayInfo();
car.go();
car.go();
car.go();
car.Break();
car.displayInfo2();