const {CodeGenerator, CodeTypes} = require("../src"); 

// console.log(CodeGenerator);

var g1 = new CodeGenerator(CodeTypes.Numbers);
var g2 = new CodeGenerator(CodeTypes.Letters);
var g3 = new CodeGenerator(CodeTypes.NumbersAndLetters);

var results = [];

test("Generate", () => {
    expect(g1.generate().length).toBe(6);
    expect(g2.generate().length).toBe(6);
    expect(g3.generate().length).toBe(6);

    results.push(g1.generate());
    results.push(g2.generate());
    results.push(g3.generate());
})

test("Validate", () => {
    expect(g1.validate("123456")).toBe(true);
    expect(g2.validate("abcdef")).toBe(true);
    expect(g3.validate("123abc")).toBe(true);

    expect(g1.validate(results[0])).toBe(true);
    expect(g2.validate(results[1])).toBe(true);
    expect(g3.validate(results[2])).toBe(true);
});