export class Processor {
    
    operate(field) {
        let statement = field.getStatement().split(" ")
        let operation
        switch (statement[1]) {
            case "+":
                console.log("+")
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
        }
        field.setResult(operation(+statement[0], +statement[2]))
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