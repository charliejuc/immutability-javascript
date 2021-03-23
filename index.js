'use strict'

// Referential Transparency

const a = 4
const b = 5

const c = a + b
// const c = 9

const add = (a, b) => a + b

const result = add(2, 1)
// const result = 3
