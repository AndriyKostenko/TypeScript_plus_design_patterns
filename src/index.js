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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    var _a;
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += (_a = nums[i]) !== null && _a !== void 0 ? _a : 0;
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
// Generic class for collection of items
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    Collection.prototype.add = function (item) {
        this.data.push(item);
    };
    return Collection;
}());
var getFullName2 = function (firstname, lastname) {
    return "".concat(firstname, " ").concat(lastname);
};
// array
var someArray = ['dsd', 'dsd'];
// tuples in typescript
var skills = [1, "fdf"];
// same protected tuple using generics
var newSkills = [2, 4, 5, 6];
// enums for fixed set of constants
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["SUCCESS"] = 1] = "SUCCESS";
    StatusCodes[StatusCodes["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    StatusCodes[StatusCodes["FAILED"] = 3] = "FAILED";
})(StatusCodes || (StatusCodes = {}));
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus["PUBLISHED"] = "published";
    QuestionStatus["DRAFT"] = "draft";
    QuestionStatus["DELETED"] = "deleted";
})(QuestionStatus || (QuestionStatus = {}));
// parametrized function with return type
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('/faqs', {
                        method: 'POST',
                        body: JSON.stringify(req)
                    })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function multiply(a, b) {
    if (!b) {
        return a * a;
    }
    return a * b;
}
function testPass(user) {
    var _a;
    // optional chaining to safely access nested properties
    var password = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
    // nullish coalescing to provide a default value if password is null or undefined
    return password !== null && password !== void 0 ? password : 'no password';
}
var f1 = function () {
};
var f2 = function () {
    return true;
};
// unknown type
var input;
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch('')];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    if (error_1 instanceof Error) {
                        console.log(error_1.message);
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function generateError(message) {
    throw new Error(message);
}
function processAction(action) {
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
            var exhaustiveCheck = action;
            throw new Error("Unhandled action: ".concat(exhaustiveCheck));
    }
}
console.log(getFullName2('Bob', "Bobovich"));
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
