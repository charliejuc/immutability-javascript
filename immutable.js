'use strict'

const memoize = (fn) => {
    const cache = {}
    return (...args) => {
        const key = JSON.stringify(args)

        cache[key] = key in cache ? cache[key] : fn(...args)

        return cache[key]
    }
}

const genNumberArray = (arrayLength, cb) => Array.from(Array(arrayLength), cb)
const size = 20_000_000

console.time('Fill Array')
const randomInteger = (num) => Math.floor(Math.random() * num)
const arr = genNumberArray(size, () => randomInteger(size))
console.timeEnd('Fill Array')

const indexOfMemoized = memoize(arr.indexOf.bind(arr))

const numToFind = randomInteger(size)

console.time('indexOf - no cached')
console.log('Index Found: ', indexOfMemoized(numToFind))
console.timeEnd('indexOf - no cached')

console.log()

console.time('indexOf - cached')
console.log('Index Found: ', indexOfMemoized(numToFind))
console.timeEnd('indexOf - cached')

console.log()

if (indexOfMemoized(numToFind) !== -1) {
    console.log('Found: ', arr[indexOfMemoized(numToFind)])
} else {
    console.log(`"${numToFind}" Not Found`)
}
