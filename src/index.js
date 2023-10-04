"use strict";
// console.log("Start...")
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTypes = exports.CodeGenerator = void 0;
var CodeTypes;
(function (CodeTypes) {
    CodeTypes[CodeTypes["Numbers"] = 0] = "Numbers";
    CodeTypes[CodeTypes["Letters"] = 1] = "Letters";
    CodeTypes[CodeTypes["NumbersAndLetters"] = 2] = "NumbersAndLetters";
})(CodeTypes || (exports.CodeTypes = CodeTypes = {}));
var letters = Array.from('abcdefghijklmnopqrstuvwxyz');
var numbers = Array.from('0123456789');
var CodeGenerator = /** @class */ (function () {
    function CodeGenerator(type, length) {
        if (length === void 0) { length = 6; }
        this.type = type;
        this.length = length;
    }
    CodeGenerator.prototype.generate = function () {
        var result = '';
        switch (this.type) {
            case CodeTypes.Numbers:
                for (var i = 0; i < this.length; i += 1) {
                    result += numbers[Math.floor(Math.random() * numbers.length)];
                }
                break;
            case CodeTypes.Letters:
                for (var i = 0; i < this.length; i += 1) {
                    result += letters[Math.floor(Math.random() * letters.length)];
                }
                break;
            case CodeTypes.NumbersAndLetters:
                for (var i = 0; i < this.length; i += 1) {
                    if (Math.random() < 0.5) {
                        result += numbers[Math.floor(Math.random() * numbers.length)];
                    }
                    else {
                        result += letters[Math.floor(Math.random() * letters.length)];
                    }
                }
                break;
        }
        return result;
    };
    CodeGenerator.prototype.validate = function (input) {
        var arr = Array.from(input);
        switch (this.type) {
            case CodeTypes.Numbers:
                for (var i = 0; i < input.length; i++) {
                    if (!numbers.includes(arr[i])) {
                        return false;
                    }
                }
                break;
            case CodeTypes.Letters:
                for (var i = 0; i < input.length; i++) {
                    if (!letters.includes(arr[i])) {
                        return false;
                    }
                }
                break;
            case CodeTypes.NumbersAndLetters:
                for (var i = 0; i < input.length; i++) {
                    if (!letters.includes(arr[i]) && !numbers.includes(arr[i])) {
                        // console.log(arr[i])
                        return false;
                    }
                }
                break;
        }
        return true;
    };
    return CodeGenerator;
}());
exports.CodeGenerator = CodeGenerator;
