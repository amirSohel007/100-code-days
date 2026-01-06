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


