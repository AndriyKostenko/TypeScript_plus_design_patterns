"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let new_variable = 'hello';
const new_obj = {
    name: "Andriy",
    age: 31,
};
// Optional parameter
function calculate_area(length = 24, width = 10) {
    if (width === undefined) {
        width = 10;
    }
    return length * width;
}
// Rest parameters
function addAll(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i] ?? 0;
    }
    return result;
}
// Arrow function
const addWithArrow = (num1, num2) => {
    return num1 + num2;
};
// anonymous function
const add = function (num1, num2) {
    return num1 + num2;
};
// return type void means that the function does not return anything
function greet(name) {
    console.log(`Hello, ${name}`);
}
function neverReturns() {
    throw new Error('This function never returns');
}
// Union types
let myVar = 'rid';
// Literal types
let direction = "left";
// Nullable types
function greetUser(username) {
    if (username === null) {
        console.log("Hello, guest!");
    }
    else {
        console.log(`Hello, ${username}!`);
    }
}
function repeatOperation(operation, times, value) {
    let result = value;
    for (let i = 0; i < times; i++) {
        result = operation(result);
    }
    return result;
}
const double = (n) => n * 2;
const Andriy = {
    name: "Andriy",
    age: 31,
    position: "Developer"
};
const combinedObj = {
    propA: "Hello",
    propB: 42,
    propC: true,
    propD: ["TypeScript", "JavaScript"]
};
let fruits = ["Apple", "Banana", "Cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["Hello", 42, "World", 100];
// Tuple
let tuple = ["Andriy", 31, true];
// Enum
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
const today = Days.Wednesday;
const person = {
    name: "Andriy",
    age: 31,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
const userSettings = {
    theme: true,
    font: "Arial",
    sidebar: false
};
// Class for product representation
class Product {
    // private for internal use only
    secret;
    id;
    // public for access from outside the class
    name;
    price;
    // protected for access in this class and subclasses
    category;
    _discount;
    static nextId = 1;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = "Electronics";
        this.secret = "InitialSecret";
        this._discount = 0;
    }
    getProductInfo() {
        return `Product [ID: ${this.id}, Name: ${this.name}, Price: $${this.price}, Category: ${this.category}]`;
    }
    modifyTheSecret(newSecret) {
        this.secret = newSecret;
        console.log(`Secret modified to: ${this.secret}`);
    }
    get discount() {
        return this._discount;
    }
    set discount(value) {
        if (value < 0 || value > 100) {
            throw new Error("Discount must be between 0 and 100");
        }
        this._discount = value;
    }
    static generateId() {
        return Product.nextId++;
    }
}
// Abstract class for common item properties
class AbstractItem {
    id;
    name;
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateId() {
        return AbstractItem.nextId++;
    }
}
// Subclass of AbstractItem for specific item type
class Item extends AbstractItem {
    price;
    constructor(id, name, price) {
        super(id, name);
        this.price = price;
    }
    getItemInfo() {
        return `Item [ID: ${this.id}, Name: ${this.name}, Price: $${this.price}]`;
    }
}
// Generic function for returning the same type as input
function returnType(value) {
    return value;
}
// Generic class for user representation, with default type string for ID
class User {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    show(msg) {
        console.log(`User [ID: ${this.id}, Name: ${this.name}] says: ${msg}`);
    }
}
// Generic class for collection of items
class Collection {
    data = [];
    add(item) {
        this.data.push(item);
    }
}
const getFullName2 = (firstname, lastname) => {
    return `${firstname} ${lastname}`;
};
console.log(getFullName2('Bob', "Bobovich"));
const bookCollection = new Collection();
bookCollection.add({ title: "TypeScript Basics", author: "Andriy", pages: 250 });
console.log(bookCollection.data);
console.log(returnType("Hello, TypeScript!"));
console.log(returnType(42));
console.log(returnType(true));
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
greet("Andriy");
console.log(new_variable);
console.log(new_obj);
console.log(calculate_area(3, 4));
console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(addWithArrow(5, 10));
console.log(add(5, 10));
console.log(greetUser(null));
//# sourceMappingURL=index.js.map