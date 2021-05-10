function sum(arguments) {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result; 
}

function sum(...arguments) {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

Function.prototype.myBind = function(ctx) {
    const func = this;
    const bindArgs = Array.from(arguments).slice(1);
    return function _bound() {
        const callArgs = Array.from(arguments);
        return func.apply(ctx, bindArgs.concat(callArgs));
    };
};

Function.prototype.myBind2 = function(ctx, ...bindArgs) {
    return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

function curriedSum(numArgs) {
    const numbers = [];

    function _curriedSum(num) {
        numbers.push(num);

        if (numbers.length === numArgs) {
            let total = 0;

            numbers.forEach((ele) => { total += ele;});
            return total;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

Function.prototype.currySpread = function(numArgs) {
    const numbers = [];
    const func = this;

    function _curried(num) {
        numbers.push(num);

        if (numbers.length === numArgs) {
            return func(...numbers);
        } else {
            return _curried;
        }
    }
    return _curried;
};

Function.prototype.curryApply = function(numArgs) {
    const numbers = [];
    const func = this;

    function _curried(num) {
        numbers.push(num);
        if (numberes.length === numArgs) {
            func.apply(null, numbers);
        } else {
            return _curried;
        }
    }
    return _curried;
};

