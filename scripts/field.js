export class Field {
    constructor() {
        this.buffer = document.querySelector(".buffer")
        this.input = document.querySelector(".input")
    }
    
    setResult(result) {
        this.#resetBuffer()
        this.input.textContent = result
    }
    
    getStatement() {
        return `${this.buffer.textContent} ${this.input.textContent}`
    }
    
    sendOperator(operator) {
        this.buffer.textContent = `${this.input.textContent} ${operator}`
        this.#resetInput()
    }
    
    sendKey(key) {
        if (this.input.textContent === "0" && key !== ".") this.#clearInput()
        this.#append(key)
    }
    
    resetAll() {
        this.#resetBuffer()
        this.#resetInput()
    }
    
    bufferIsBlank () {
        return !this.buffer.textContent
    }
    
    #resetInput() {this.input.textContent = "0"}
    
    #resetBuffer() {this.buffer.textContent = ""}

    #clearInput() {this.input.textContent = ""}
    
    #append(key) {this.input.textContent += key}
    
    
}