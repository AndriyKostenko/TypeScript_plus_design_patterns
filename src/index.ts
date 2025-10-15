let new_variable: string = 'hello';

const new_obj :{
    name: string,
    age: number,
    title?: string
} = {
    name: "Andriy",
    age: 31,
}

// Optional parameter
function calculate_area(length: number =24, width: number = 10): number {
    if (width === undefined) {
        width = 10
    }
    
    return length * width
}

// Rest parameters
function addAll(...nums: number[]): number {
    let result: number = 0;
    for (let i = 0; i< nums.length; i++) {
        result += nums[i] ?? 0;
    }
    return result;
}

// Arrow function
const addWithArrow = (num1: number, num2: number): number => {
    return num1 + num2
}
// anonymous function
const add = function (num1: number, num2: number): number {
    return num1 + num2
}
// return type void means that the function does not return anything
function greet(name: string): void {
    console.log(`Hello, ${name}`)
}

function neverReturns(): never {
    throw new Error('This function never returns')
}
// Union types
let myVar: string | number = 'rid';

// Literal types
let direction: "left" | "right" | "up" | "down" = "left";

// Nullable types
function greetUser(username: string | null) {
    if (username === null) {
        console.log("Hello, guest!");
    } else {
        console.log(`Hello, ${username}!`);
    }
}

function repeatOperation(operation: (x: number) => number, times: number, value: number): number {
    let result = value;
    for (let i=0; i<times; i++) {
        result = operation(result);
    }
    return result;
}

const double = (n: number) => n*2;


type Employee = {
    name: string;
    age: number;
    position?: string;
}

const Andriy: Employee = {
    name: "Andriy",
    age: 31,
    position: "Developer"
}

type FirstType = {
    propA: string;
    propB: number;
}

type SecondType = {
    propC: boolean;
    propD: string[];
}

// Intersection type
type CombinedType = FirstType & SecondType;

const combinedObj: CombinedType = {
    propA: "Hello",
    propB: 42,
    propC: true,
    propD: ["TypeScript", "JavaScript"]
}


let fruits: string[] = ["Apple", "Banana", "Cherry"];
let numbers: Array<number> = [1, 2, 3, 4, 5];
let mixed: (string | number)[] = ["Hello", 42, "World", 100];

// Tuple
let tuple: readonly [string, number, boolean] = ["Andriy", 31, true];

// Enum
enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

const today: Days = Days.Wednesday;

// interface for object structure
interface Person {
    name: string;
    age: number;
    greet(): void;
}

const person: Person = {
    name: "Andriy",
    age: 31,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// interface merging
interface Settings {
    readonly theme: boolean;
    font: string;
}

interface Settings {
    sidebar: boolean;
}

const userSettings: Settings = {
    theme: true,
    font: "Arial",
    sidebar: false
}


// Class for product representation
class Product {
    // private for internal use only
    private secret: string;
    id: number;
    // public for access from outside the class
    public name: string;
    price: number;
    // protected for access in this class and subclasses
    protected category: string;
    private _discount: number;
    private static nextId: number = 1;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = "Electronics";
        this.secret = "InitialSecret";
        this._discount = 0;
    }

    getProductInfo(): string {
        return `Product [ID: ${this.id}, Name: ${this.name}, Price: $${this.price}, Category: ${this.category}]`;
    }

    modifyTheSecret(newSecret: string): void {
        this.secret = newSecret;
        console.log(`Secret modified to: ${this.secret}`);
    }

    get discount(): number {
        return this._discount;
    }

    set discount(value: number) {
        if (value < 0 || value > 100) {
            throw new Error("Discount must be between 0 and 100");
        }
        this._discount = value;
    }

    static generateId(): number {
        return Product.nextId++;
    }

}

// Abstract class for common item properties
abstract class AbstractItem {
    private static nextId: number = 1;

    constructor(public id: number, public name: string) {}

    static generateId(): number {
        return AbstractItem.nextId++;
    }

    abstract getItemInfo(): string;
}

// Subclass of AbstractItem for specific item type
class Item extends AbstractItem {
    constructor(id: number, name: string, public price: number) {
        super(id, name);
    }

    getItemInfo(): string {
        return `Item [ID: ${this.id}, Name: ${this.name}, Price: $${this.price}]`;
    }
}

// Generic function for returning the same type as input
function returnType<T>(value: T): T {
    return value;
}

// Generic class for user representation, with default type string for ID
class User<T = string> {
    constructor(public id: T, public name: string) {}

    show(msg: T): void {
        console.log(`User [ID: ${this.id}, Name: ${this.name}] says: ${msg}`);
    }
}
// Example interface for book
interface Book {
    title: string;
    author: string;
    pages: number;
}
// Generic class for collection of items
class Collection<T> {
    public data: T[] = [];

    add(item: T): void {
        this.data.push(item);
    }
}

const getFullName2 = (firstname: string, lastname: string): string => {
    return `${firstname} ${lastname}`
}



// array
const someArray: string[] = ['dsd', 'dsd']

// tuples in typescript
const skills: readonly [number, string] = [1, "fdf"]

// same protected tuple using generics
const newSkills: ReadonlyArray<number> = [2,4,5,6]


// enums for fixed set of constants
enum StatusCodes {
    SUCCESS = 1,
    IN_PROGRESS = 2,
    FAILED = 3
}

enum QuestionStatus {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}


// parametrized function with return type
async function getFaqs( req: {
    topicId: number;
    status: QuestionStatus;
}) : Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status?: QuestionStatus;
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });

    const data: any = await res.json();
    return data;
}


function multiply(a: number, b: number): number {
    if (!b) {
        return a * a;
    }
    return a * b;
}

interface UserProfile {
    login : string;
    password?: {
        type: 'oauth' | 'email';
    }
}

function testPass(user: UserProfile): string {
    // optional chaining to safely access nested properties
    const password = user.password?.type;
    // nullish coalescing to provide a default value if password is null or undefined
    return password ?? 'no password';
}

type voidFunc = () => void;

const f1: voidFunc = () => {

}

const f2: voidFunc = () => {
    return true
}

// unknown type
let input: unknown;


async function getData(){
    try {
        await fetch('')
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

function generateError(message: string): never {
    throw new Error(message);
}

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            console.log("Processing refund...");
            break;
        case 'checkout':
            console.log("Processing checkout...");
            break;
        case 'reject':
            console.log("Processing rejection...");
            break;
        default:
            // Using never type to ensure all cases are handled
            const exhaustiveCheck: never = action;
            throw new Error(`Unhandled action: ${exhaustiveCheck}`);
    }
}

function isString(x: string | number): boolean {
    if (typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    }
}

console.log(getFullName2('Bob', "Bobovich"))
const bookCollection = new Collection<Book>();
bookCollection.add({title: "TypeScript Basics", author: "Andriy", pages: 250});
console.log(bookCollection.data);

console.log(returnType<string>("Hello, TypeScript!"));
console.log(returnType<number>(42));
console.log(returnType<boolean>(true));


const item1 = new Item(1, "Smartphone", 699.99);
console.log(item1.getItemInfo());

const product1 = new Product(1, "Laptop", 999.99);
console.log(product1.getProductInfo());
product1.modifyTheSecret("TopSecret123");
product1.discount = 15;
console.log(`Discount set to: ${product1.discount}%`);
const newProductId = Product.generateId();
console.log(`New product ID generated: ${newProductId}`);
const newProductId2 = Product.generateId();
console.log(`New product ID generated: ${newProductId2}`);

console.log(userSettings.font);
console.log(person.greet());
console.log(repeatOperation(double, 3, 5)); // Output: 40
greet("Andriy")
console.log(new_variable)
console.log(new_obj)
console.log(calculate_area(3,4))
console.log(addAll(1,2,3,4,5,6,7,8,9,10))
console.log(addWithArrow(5,10))
console.log(add(5,10))
console.log(greetUser(null))