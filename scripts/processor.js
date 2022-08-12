import {Formatter} from "./formatter.js";

export class Processor {
    
    operate(field) {
        let statement = field.getStatement().split(" ")
        let operation
        switch (statement[1]) {
            case "+":
                operation = this.#add
                break;
            case "-":
                operation = this.#subtract
                break;
            case "*":
                operation = this.#multiply
                break;
            case "/":
                operation = this.#divide
                break;
        }
        let result = operation(+statement[0], +statement[2])
        
        field.setResult(Formatter.format(result, field.getLength()))
    }

    #add(a, b) {
        return a + b
    }

    #subtract(a, b) {
        return a - b
    }

    #multiply(a, b) {
        return a * b
    }

    #divide(a, b) {
        return a / b
    }
}