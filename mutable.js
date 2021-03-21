'use strict'

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

const randomComparator = (a, b) => Math.random() > .5 ? a - b : b - a
const orderedArr = arr.sort(randomComparator)

arr.push(999)

console.log(arr)
console.log(orderedArr)
