class CumulativeSum {
    constructor(initialValue = 0) {
        this.sum = initialValue
    }
    add(value) {
        this.sum += value;
        return this;
    }
}

const sum1 = new CumulativeSum()
console.log(sum1.add(10).add(2).add(50).sum)