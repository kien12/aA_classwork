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
    const that = this;
    const bindArgs = Array.from(arguments).slice(1);
    return function() {
        const callArgs = Array.from(arguments);
        return that.apply(ctx, bindArgs.concat(callArgs));
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
        if (numbers.length === numArgs) {
            func.apply(null, numbers);
        } else {
            return _curried;
        }
    }
    return _curried;
};


Function.prototype.curry2 = function (nArg) {
    const argArray = [];
    const _curriedFn = (arg) => {
        argArray.push(arg);
        if (argArray.length === nArg) {
            // spreading the array into individual arguments
            return this(...argArray);
        } else {
            return _curriedFn;
        }
    };
    return _curriedFn;
};

