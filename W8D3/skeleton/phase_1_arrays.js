Array.prototype.uniq = function() {
    let out = []
    for(let i = 0; i < this.length; i += 1) {
        if (!out.includes(this[i])) {
            out.push(this[i]);
        }
    }
    return out;
}

Array.prototype.twoSum = function() {
    let out = []
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                out.push([i, j]);
            }
        }
    }
    return out;
}


Array.prototype.transpose = function() {
    let out = new Array(this[0].length).fill(0).map(() => new Array(this.length).fill(0))
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[0].length; j++) {
            out[j][i] = this[i][j];
        }
    }
    return out;
}
x = [1,-2,1,-4,3,2,4];
// console.log(x.uniq());

// x = [[1,2,3,4,5],[5,2,7,2,7],[2,6,2,1,6]]

// console.log(x.twoSum());
// console.log(x.twoSum()[0], x.twoSum()[1]);
