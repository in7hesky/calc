export class Field {
    constructor(maxChars = 11) {
        this._length = maxChars
        this.buffer = document.querySelector(".buffer")
        this.input = document.querySelector(".input")
    }
    
    getLength() {
        return this._length
    } 
    
    setResult(result) {
        this.#resetBuffer()
        this.input.textContent = result
        if (this.input.textContent.includes(":("))
            setTimeout(() => {this.resetAll()}, 400)
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
        if (key === "." && this.input.textContent.includes(".") 
            || this.input.textContent.length === this._length) return
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