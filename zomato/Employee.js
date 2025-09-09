"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    // either  only  once constructor , default or paramterized constructor
    function Employee(name, age, color) {
        this.id = Date.now() + Math.floor(Math.random() * 1000);
        if (name)
            this.name = name !== null && name !== void 0 ? name : '';
        if (age)
            this.age = age !== null && age !== void 0 ? age : null;
        if (color !== undefined)
            this.color = color;
    }
    Employee.prototype.getObject = function () { return this; };
    ;
    Employee.maker = Date.now.toString();
    return Employee;
}());
exports.default = Employee;
