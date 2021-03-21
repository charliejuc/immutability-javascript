'use strict'

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

const randomComparator = (a, b) => Math.random() > .5 ? a - b : b - a
const orderedArr = arr.sort(randomComparator)

console.log({firstValueAfterOrder: orderedArr[0]})
console.log({firstValueBeforeOrder: arr[0]})

console.log(orderedArr)

console.log('orderedArr === arr:', orderedArr === arr)
console.log('arr === arr.slice():', arr === arr.slice())
