// console.log("Start...")

enum CodeTypes {
    Numbers,
    Letters,
    NumbersAndLetters
}

const letters = Array.from('abcdefghijklmnopqrstuvwxyz');
const numbers = Array.from('0123456789');

class CodeGenerator {
    type: CodeTypes;
    length: number;

    constructor(type: CodeTypes, length: number = 6) {
        this.type = type;
        this.length = length;
    }

    generate(): string {
        let result = '';

        switch(this.type) {
            case CodeTypes.Numbers:
                for (let i = 0; i < this.length; i+=1) {
                    result += numbers[Math.floor(Math.random() * numbers.length)];
                }
                break; 

            case CodeTypes.Letters:
                for (let i = 0; i < this.length; i+=1) {
                    result += letters[Math.floor(Math.random() * letters.length)];
                }
                break; 

            case CodeTypes.NumbersAndLetters:
                for (let i = 0; i < this.length; i+=1) {
                    if (Math.random() < 0.5) {
                        result += numbers[Math.floor(Math.random() * numbers.length)];
                    } else {
                        result += letters[Math.floor(Math.random() * letters.length)];
                    }
                }
                break; 
        }

        return result;
    }

    validate(input:string) {
        let arr: string[] = Array.from(input)
        switch(this.type) {
            case CodeTypes.Numbers:
                for (let i = 0; i < input.length; i++) {
                    if (!numbers.includes(arr[i])) { return false }
                }
                break;
            case CodeTypes.Letters:
                for (let i = 0; i < input.length; i++) {
                    if (!letters.includes(arr[i])) { return false }
                }
                break;
            case CodeTypes.NumbersAndLetters:
                for (let i = 0; i < input.length; i++) {
                    if ( !letters.includes(arr[i]) && !numbers.includes(arr[i]) )  { 
                        // console.log(arr[i])
                        return false 
                    }
                }
                break;
        }
        return true
    }
}

export { CodeGenerator, CodeTypes }