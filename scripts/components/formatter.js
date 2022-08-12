export class Formatter {

    static format(target, maxLength) {
        target = target.toString()
        if(target.length <= maxLength) return target

        if(target.includes(".") && !target.includes("e")) {
            if(target.split(".")[0].length <= maxLength)
                return this.#roundFraction(target, maxLength)
        }
        return "Too big :("
    }

    static #roundFraction(target, maxLength) {
        let fractionFreeLength =
            maxLength - target.split(".")[0].length - 1
        
        target = Math.round((+target) * 10**fractionFreeLength) /
            (10**fractionFreeLength)
        
        return target
    }
}