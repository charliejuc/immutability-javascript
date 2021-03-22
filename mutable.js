'use strict'

let num = 1
const increaseNumber = () => num += 1

const addNumberToStrings = (stringArr) => stringArr.map((value) => `${value}-${num}`)

const arr = ['hi', 'bye', 'new', 'old', 'change', 'go']

console.log(arr)
// outcome result depends of "num" value, this value is not available outside this file
console.log(addNumberToStrings(arr)[0] === `${arr[0]}-1`)

increaseNumber()
increaseNumber()
// "num" could have been updated N times in our code, how do we know current value to test if it is working properly?
console.log(addNumberToStrings(arr)[0] === `${arr[0]}-???`)
