function range(s, e) {
    if (s == e) {
        return [s]
    }
    result = [s]
    return result.concat(range(s + 1, e))
}

// console.log(range(2,9))
// console.log([2,3,4,5])
// range(3, 5) => [3,4,5]

function sumRec(arr) {
    if (arr.length == 0) {
        return 0
    }
    return arr[0] + sumRec(arr.slice(1,arr.length))
}

// console.log(sumRec([1,2,3,4,5]))

function exponent(base, exp) {
    if (exp == 0) {
        return 1
    }
    return base * exponent(base, exp - 1)
}

// console.log(exponent(3, 4))

function fibonacci(n) {
    if (n == 1) {
        return [1]
    } else if (n == 2) {
        return [1,1]
    } else {
        let tmp = fibonacci(n - 1)
        tmp.push(tmp[tmp.length - 1] + tmp[tmp.length - 2])
        return tmp
    }
}

// console.log(fibonacci(5))

function deepDup(arr) {
    if (arr.length == 0) {
        return arr
    }
    return [arr[0]].concat(deepDup(arr.slice(1, arr.length)))
}


function bsearch(arr, target) {
    if (arr.length == 0) {
        return -1
    }
    let mid = Math.floor(arr.length / 2)
    if (arr[mid] == target) {
        return mid
    } else if (arr[mid] < target) {
        let pos = bsearch(arr.slice(mid + 1, arr.length), target)
        if (pos == -1) {
            return -1
        }
        return mid + pos + 1
    } else {
        let pos = bsearch(arr.slice(0, mid), target)
        if (pos == -1) {
            return -1
        } 
        return pos
    }
}

// x = [1,2,3,6,8,16,234]
// console.log(bsearch(x, 234))
// function merge(arr1, arr2) {
//     const merged = [];

//     while (left.length > 0 && right.length > 0) {
//       let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
//       merged.push(nextItem);
//     }
  
//     return merged.concat(left, right);
// }

// function mergeSort(array) {
//     if (array.length <= 1) {
//         return array;
//     } else {
//         const middle = Math.floor(array.length / 2);

//         const left = mergeSort(array.slice(0, middle));
//         const right = mergeSort(array.slice(middle));
//         return merge(left, right);
//     }
// }

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        const middle = Math.floor(array.length / 2);

        const left = mergeSort(array.slice(0, middle));
        const right = mergeSort(array.slice(middle));

        return merge(left, right);
    }
}


console.log(mergeSort([6,1,76,87,2,46,2,6,8]))