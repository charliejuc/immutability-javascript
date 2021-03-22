'use strict'

// these functions depend only on the input or constant values

const num = 1
const addNumberToStringsV1 = (stringArr) => stringArr.map((value) => `${value}-${num}`)

const addNumberToStringsFactory = (num) => (stringArr) => stringArr.map((value) => `${value}-${num}`)
const addNumberToStringsV2 = addNumberToStringsFactory(7)

const addNumberToStringsV3 = (num, stringArr) => stringArr.map((value) => `${value}-${num}`)

const arr = ['hi', 'bye', 'new', 'old', 'change', 'go']

//same input, same output
console.log(arr)
console.log('V1', addNumberToStringsV1(arr))
console.log('V1', addNumberToStringsV1(arr))
console.log('-------------------------.-------------------------')
console.log('V2', addNumberToStringsV2(arr))
console.log('V2', addNumberToStringsV2(arr))
console.log('-------------------------.-------------------------')
console.log('V2 - modified', addNumberToStringsFactory(55)(arr))
console.log('V2 - modified', addNumberToStringsFactory(55)(arr))
console.log('-------------------------.-------------------------')
console.log('V3', addNumberToStringsV3(33, arr))
console.log('V3', addNumberToStringsV3(33, arr))
