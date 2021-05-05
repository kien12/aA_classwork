Array.prototype.bubbleSort = function() {
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                let tmp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = tmp;
                sorted = false
            }
        }
    }
    return this
}

x = [1,-2,1,-4,3,2,4];
console.log(x.bubbleSort());

String.prototype.substrings = function() {
    let out = []
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length + 1; j++) {
            out.push(this.slice(i, j))
        }
    }
    return out
}

x = "hello"
a = x.substrings()
a.forEach(element => {
    console.log(element)   
});