# Random Code Generator

## Description

Random Code Generator is an npm package that provides a simple and flexible way to generate random invite codes consisting of numbers, letters, or a combination of both. This library is particularly useful for applications that require the generation and validation of random codes, such as invitation systems, voucher generation, or security token creation.

## Installation

You can install the Random Code Generator package via npm:

```bash
npm install alex-random-code-generator
```

## Usage

To use the Random Code Generator in your project, you need to import the `CodeGenerator` class and the `CodeTypes` enum from the package as follows:

```javascript
import { CodeGenerator, CodeTypes } from 'alex-random-code-generator';
```

### Creating a CodeGenerator Instance

You can create a `CodeGenerator` instance by specifying the desired code type (Numbers, Letters, or NumbersAndLetters) and an optional length (default is 6):

```javascript
const generator = new CodeGenerator(CodeTypes.NumbersAndLetters, 8);
```

### Generating Random Codes

Use the `generate` method to generate a random code based on the chosen type and length:

```javascript
const randomCode = generator.generate();
console.log(randomCode); // Example output: "3a7b9d2c"
```

### Validating Codes

You can also validate a code to ensure it matches the chosen type. Use the `validate` method to check if a code is valid:

```javascript
const isValid = generator.validate("3a7b9d2c");
console.log(isValid); // Example output: true
```

## Examples

### Generating a Code with Numbers Only

```javascript
const generator = new CodeGenerator(CodeTypes.Numbers, 6);
const code = generator.generate();
console.log(code); // Example output: "573812"
```

### Generating a Code with Letters Only

```javascript
const generator = new CodeGenerator(CodeTypes.Letters, 8);
const code = generator.generate();
console.log(code); // Example output: "abcdEFGH"
```

### Generating a Code with Numbers and Letters

```javascript
const generator = new CodeGenerator(CodeTypes.NumbersAndLetters, 10);
const code = generator.generate();
console.log(code); // Example output: "a1B2c3D4e5"
```

## Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request on the [GitHub repository](https://github.com/alexthegreat194/final-assignment).

## License

This package is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

Thank you for using the Random Code Generator package! We hope it simplifies your code generation and validation needs in your projects. If you have any questions or need further assistance, please don't hesitate to reach out.