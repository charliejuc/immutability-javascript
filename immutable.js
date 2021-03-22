'use strict'

const num = 1
const addNumberToStringsV1 = (stringArr) => stringArr.map((value) => `${value}-${num}`)

const addNumberToStringsFactory = (num) => (stringArr) => stringArr.map((value) => `${value}-${num}`)
const addNumberToStringsV2 = addNumberToStringsFactory(7) // (stringArr) => stringArr.map((value) => `${value}-7`)

const addNumberToStringsV3 = (num, stringArr) => stringArr.map((value) => `${value}-${num}`)

const arr = ['hi', 'bye', 'new', 'old', 'change', 'go']

// we can EASILY! predict the outcome result
console.log(arr)
console.log('V1', addNumberToStringsV1(arr)[0] === `${arr[0]}-1`)
console.log('V2', addNumberToStringsV2(arr)[0] === `${arr[0]}-7`)
console.log('V2 - modified', addNumberToStringsFactory(55)(arr)[0] === `${arr[0]}-55`)
console.log('V3', addNumberToStringsV3(33, arr)[0] === `${arr[0]}-33`)
