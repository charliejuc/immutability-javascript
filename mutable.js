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
const size = 100

const randomInteger = (num) => Math.floor(Math.random() * num)
const arr = genNumberArray(size, (_, index) => index + 1)

const indexOfMemoized = memoize(arr.indexOf.bind(arr))

const numToFind = randomInteger(size) + 1

console.log('Index: ', indexOfMemoized(numToFind))

// if we allow array mutation we can't use memoization
if (arr[indexOfMemoized(numToFind)] in arr) {
    arr[indexOfMemoized(numToFind)] = Math.floor(arr[indexOfMemoized(numToFind)] / 2)
}

console.log({numToFind})
console.log()
console.log('Found:', `"${arr[indexOfMemoized(numToFind)]}" instead of "${numToFind}" for "${indexOfMemoized(numToFind)}" index`)
