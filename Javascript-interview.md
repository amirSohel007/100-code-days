# 1️⃣ Create custom debounce Method

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
```

# 2️⃣ Merge all nested Array

```js
function mergeArray(arr) {
const arr = [1,2,[3,4,[5,6,[7,8,[9,10]]]]]
const flatArr = arr.flat(Infinity)
return flatArr
}
```

# 3️⃣ Create custom memoize function

```js
const memoize = (fun) => {
    const memory = {}
    console.log(memory)
    return (...args) => {
        const key = args[0]
        // check if value already in memory
        if (key in memory)
            return memory[key]
        else {
            const result = fun(...args)
            memory[key] = result;
            return result
        }
    }
}
```

# 4. Custom polyfill methods

```js
// Pollyfill for Map
Array.prototype.myMap = function (callback) {
    const newArr = [];
    for (let i = 0; i < this.length; i++)
        newArr.push(callback(this[i], i, this))
    return newArr
}

// Pollyfill for Filter
Array.prototype.myFilter = function (callback) {
    const newArr = [];
    for (let i = 0; i < this.length; i++)
        if (callback(this[i], i, this))
            newArr.push(this[i])
    return newArr
}

// Pollyfill for Reduce
Array.prototype.myReduce = function (callback, initalValue) {
    let acc = initalValue;
    for (let i = 0; i < this.length; i++)
        acc = acc ? callback(acc, this[i], i, this) : this[0]
    return acc
}

// Pollyfill for Call
Function.prototype.myCall = function (context = {}, ...args) {
    // Error handling
    if (typeof this !== 'function') new Error(this + 'is not callable')
    context.fun = this;
    context.fun(...args)
}

// Pollyfill for Apply
Function.prototype.myApply = function (context = {}, arrayList = []) {
    // Error handling
    if (typeof this !== 'function') new Error(this + 'is not callable')
    if (!Array.isArray(arrayList)) new Error(arrayList + 'is not ittriable')
    context.fun = this;
    context.fun(...arrayList)
}

// Pollyfill for bind
Function.prototype.myBind = function(context={}, ...args){
    // Error handling
    if (typeof this !== 'function') new Error(this + 'is not callable');
    context.fun = this
    return function(...args2){
        return context.fun(...args, ...args2)
    }
}
```


