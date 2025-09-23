var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var new_variable = 'hello';
var new_obj = {
    name: "Andriy",
    age: 31,
};
// Optional parameter
function calculate_area(length, width) {
    if (length === void 0) { length = 24; }
    if (width === void 0) { width = 10; }
    if (width === undefined) {
        width = 10;
    }
    return length * width;
}
// Rest parameters
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
// Arrow function
var addWithArrow = function (num1, num2) {
    return num1 + num2;
};
// anonymous function
var add = function (num1, num2) {
    return num1 + num2;
};
// return type void means that the function does not return anything
function greet(name) {
    console.log("Hello, ".concat(name));
}
function neverReturns() {
    throw new Error('This function never returns');
}
// Union types
var myVar = 'rid';
// Literal types
var direction = "left";
// Nullable types
function greetUser(username) {
    if (username === null) {
        console.log("Hello, guest!");
    }
    else {
        console.log("Hello, ".concat(username, "!"));
    }
}
function repeatOperation(operation, times, value) {
    var result = value;
    for (var i = 0; i < times; i++) {
        result = operation(result);
    }
    return result;
}
var double = function (n) { return n * 2; };
var Andriy = {
    name: "Andriy",
    age: 31,
    position: "Developer"
};
var combinedObj = {
    propA: "Hello",
    propB: 42,
    propC: true,
    propD: ["TypeScript", "JavaScript"]
};
var fruits = ["Apple", "Banana", "Cherry"];
var numbers = [1, 2, 3, 4, 5];
var mixed = ["Hello", 42, "World", 100];
// Tuple
var tuple = ["Andriy", 31, true];
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
var today = Days.Wednesday;
var person = {
    name: "Andriy",
    age: 31,
    greet: function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    }
};
var userSettings = {
    theme: true,
    font: "Arial",
    sidebar: false
};
// Class for product representation
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = "Electronics";
        this.secret = "InitialSecret";
        this._discount = 0;
    }
    Product.prototype.getProductInfo = function () {
        return "Product [ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this.price, ", Category: ").concat(this.category, "]");
    };
    Product.prototype.modifyTheSecret = function (newSecret) {
        this.secret = newSecret;
        console.log("Secret modified to: ".concat(this.secret));
    };
    Object.defineProperty(Product.prototype, "discount", {
        get: function () {
            return this._discount;
        },
        set: function (value) {
            if (value < 0 || value > 100) {
                throw new Error("Discount must be between 0 and 100");
            }
            this._discount = value;
        },
        enumerable: false,
        configurable: true
    });
    Product.generateId = function () {
        return Product.nextId++;
    };
    Product.nextId = 1;
    return Product;
}());
// Abstract class for common item properties
var AbstractItem = /** @class */ (function () {
    function AbstractItem(id, name) {
        this.id = id;
        this.name = name;
    }
    AbstractItem.generateId = function () {
        return AbstractItem.nextId++;
    };
    AbstractItem.nextId = 1;
    return AbstractItem;
}());
// Subclass of AbstractItem for specific item type
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(id, name, price) {
        var _this = _super.call(this, id, name) || this;
        _this.price = price;
        return _this;
    }
    Item.prototype.getItemInfo = function () {
        return "Item [ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this.price, "]");
    };
    return Item;
}(AbstractItem));
// Generic function for returning the same type as input
function returnType(value) {
    return value;
}
// Generic class for user representation, with default type string for ID
var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    User.prototype.show = function (msg) {
        console.log("User [ID: ".concat(this.id, ", Name: ").concat(this.name, "] says: ").concat(msg));
    };
    return User;
}());
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    Collection.prototype.add = function (item) {
        this.data.push(item);
    };
    return Collection;
}());
var bookCollection = new Collection();
bookCollection.add({ title: "TypeScript Basics", author: "Andriy", pages: 250 });
console.log(bookCollection.data);
console.log(returnType("Hello, TypeScript!"));
console.log(returnType(42));
console.log(returnType(true));
var item1 = new Item(1, "Smartphone", 699.99);
console.log(item1.getItemInfo());
var product1 = new Product(1, "Laptop", 999.99);
console.log(product1.getProductInfo());
product1.modifyTheSecret("TopSecret123");
product1.discount = 15;
console.log("Discount set to: ".concat(product1.discount, "%"));
var newProductId = Product.generateId();
console.log("New product ID generated: ".concat(newProductId));
var newProductId2 = Product.generateId();
console.log("New product ID generated: ".concat(newProductId2));
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
