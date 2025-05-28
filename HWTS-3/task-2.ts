interface Iperson {
    name: string;
    surname: string;
    experienceYears: number;
    getDetails(): string;
}

abstract class Employee implements Iperson {
    protected salary: number = 0;
    protected abstract calculateSalary(experienceYears: number): number;
    constructor(public name: string, public surname: string, public experienceYears: number, calculateSalary: (experienceYears: number) => number) {}
    getDetails(): string {
        throw new Error("Method not implemented.");
    }

}

class Manager extends Employee {
    constructor(name: string, surname: string, experienceYears: number, private prefered: 'scrum' | 'kanban') {
        super(name, surname, experienceYears, Manager.prototype.calculateSalary);
    }
    calculateSalary(experienceYears: number): number {
        return this.salary = experienceYears * 500;
    }
    getDetails(): string {
        return `My name is ${this.name} ${this.surname},I am manager with ${this.experienceYears} years of experience in ${this.prefered} and ${this.calculateSalary(this.experienceYears)}$ salary`;
    }
}

class Developer extends Employee {
        constructor(name: string, surname: string, experienceYears: number,  private programmingLanguage: 'js' | 'ts' | 'java' | 'python') {
        super(name, surname, experienceYears, Developer.prototype.calculateSalary);
        
    }
    calculateSalary(experienceYears: number): number {
        return this.salary = experienceYears * 1000;
    }
    getDetails(): string {
        return `My name is ${this.name} ${this.surname},I am developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.calculateSalary(this.experienceYears)}$ salary`;
    }
}

const Manager1 = new Manager('Anton', 'Dorov', 3, 'scrum');
const Developer1 = new Developer('Elena', 'JSovna', 5, 'js');

console.log(Manager1.getDetails());
console.log(Developer1.getDetails());
