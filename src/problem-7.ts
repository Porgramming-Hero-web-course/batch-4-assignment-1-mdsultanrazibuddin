//  Problem 7 :
// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

   
class car {
    constructor(
        public make: string,
        public model: string,
        public year: number
    ) {}
    getCarAge(): number {
        const carAge = new Date().getFullYear() - this.year;
        return carAge
    }
}

// const getAge = new car("Honda", "Civic", 2018);
// console.log(getAge.getCarAge());

