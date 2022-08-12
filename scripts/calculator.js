import {Processor} from "./components/processor.js";
import {Keyboard} from "./components/keyboard.js";
import {Field} from "./components/field.js";

export class Calculator {
    constructor(supportedLength = 12) {
        this.processor = new Processor()
        this.field = new Field(supportedLength)
        this.keyboard = new Keyboard(this.field, this.processor)
    }
}