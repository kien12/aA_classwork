Array.prototype.myEach = function(func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

function thing(ele) {
    console.log(ele)
}

Array.prototype.myMap = function(func) {
    // let out = []
    // for (let i = 0; i < this.length; i++) {
    //     out.push(func(this[i]))
    // }
    // return out
    let out = []

    function help(ele) {
        out.push(func(ele))
    }

    this.myEach(help)

    return out
}



function add(i, j) {
    return i + j;
}

function addone(i) {
    return i + 1
}

x = [1,-2,1,-4,3,2,4];
console.log(x.myMap(addone))


Array.prototype.myReduce = function(func, initial_value) {
    var i = 0
    if (initial_value === undefined) {
        initial_value = this[0]
        var i = 1
    }
    for (i; i< this.length; i++) {
        initial_value = func(this[i], initial_value)
    }
    return initial_value
}

console.log(x.myReduce(add))


