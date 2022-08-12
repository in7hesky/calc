export class Keyboard {
    constructor(field, processor) {
        this.dot = document.querySelector(".dot")
        this.reset = document.querySelector(".reset")
        this.digits = document.querySelectorAll(".digit")
        this.operators = document.querySelectorAll(".operator")
        this.equals = document.querySelector(".equals")
        this.#initButtons(field, processor)
    }

    #initButtons(field, processor) {
            this.digits.forEach( digit => {
                digit.addEventListener("click", e => {
                    field.sendKey(e.target.value)
                })
            })
            this.dot.addEventListener("click", (e) => {
                field.sendKey(e.target.value)
            })
            this.operators.forEach(operator => {
                operator.addEventListener("click", e => {
                    field.sendOperator(e.target.value)
                })
            })
            this.equals.addEventListener("click", () => {
                processor.operate(field)
            })
            this.reset.addEventListener("click", () => {
                field.resetAll()
            })
    }
}