//task 1
const num1: number = 42;
const str: string = "Hello, TypeScript!";
const isComplete: boolean = true;
const numbers: number[] = [1, 2, 3, 4, 5];
const cities: string[] = ["Minsk", "Warsaw", "London"];
const person: Object = {
    name: "Alice",
    age: 30,
    city: "Minsk"
};
//task 2
type User = {
    name: string,
    age: number,
    email?: string
}

type Grade = 'junior' | 'middle' | 'senior';
//task 3
interface Car {
    brand: string,
    model: string,
    year?: number
};
//task 4
interface Address {
    street: string,
    city: string,
    zipCode: number
};

interface FullAddress extends Address {
    country: string
};
//task 5
type Product = {
    id: number,
    name: string,
    price: number
};

type DiscountedProduct = Product & {
    discount: number
};
//task 6
function calculateDiscount (product: DiscountedProduct): number {
    const calc: number = product.price/100*(100-product.discount)
    return calc;
};
const product: DiscountedProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
    discount: 10
  };

  console.log(calculateDiscount(product));