'use strict'

let num = 1
const increaseNumber = () => num += 1

const addNumberToStrings = (stringArr) => stringArr.map((value) => `${value}-${num}`)

const arr = ['hi', 'bye', 'new', 'old', 'change', 'go']

console.log(arr)
console.log(addNumberToStrings(arr))

// we need to track when we updated "num"
increaseNumber()
increaseNumber()
console.log(addNumberToStrings(arr))
