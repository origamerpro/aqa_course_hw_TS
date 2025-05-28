interface Ivehicle {
    getDetails(): string;
    start(): string;
}//1
abstract class Vehicle implements Ivehicle {
    constructor(public make: string, public model: string) {}
    start(): string {
        return `The vehicle ${this.make} ${this.model} is starting.`;
    }
    abstract getDetails(): string;
}//2
class Cars extends Vehicle {
    constructor(public make: string, public model: string, public year: number) {
        super(make, model);
    }
    getDetails(): string {
        return `${this.make} ${this.model}, ${this.year}`;
    }
}//3

const car1 = new Cars("BYD", "Seagull", 2024);
console.log(car1.start());
console.log(car1.getDetails());//4