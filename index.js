'use strict'

let states = {
    undo: [],
    redo: []
}
let state = {
    logged: true,
    premium: false,
    user: {
        id: 1,
        username: 'Anna'
    },
    todos: []
}

const prependState = (kind, states, state) => ({
    ...states,
    [kind]: [state, ...states[kind]]
})
const appendTodo = (state, todo) => ({
    ...state,
    todos: [...state.todos, todo]
})

states = prependState('undo', states, state)
state = appendTodo(state, {
    id: 1,
    message: 'Make the bed'
})

console.log('Save Todo:', state.todos)

states = prependState('undo', states, state)
state = appendTodo(state, {
    id: 2,
    message: 'Record the course'
})

console.log('Save Second Todo:', state.todos)

const stateUndo = (states, index) => ({
    state: states.undo[index],
    states: {
        ...states,
        undo: [...states.undo.slice(index + 1)]
    }
})
const stateRedo = (states, index) => ({
    state: states.redo[index],
    states: {
        ...states,
        redo: [...states.redo.slice(index + 1)]
    }
})

console.log()
console.log('UNDO')
states = prependState('redo', states, state)
;({state, states} = stateUndo(states, 0))

console.log('First Undo', state.todos)

states = prependState('redo', states, state)
;({state, states} = stateUndo(states, 0))

console.log('Second Undo', state.todos)

console.log()
console.log('REDO')
states = prependState('undo', states, state)
;({state, states} = stateRedo(states, 0));

console.log('First Redo', state.todos)

states = prependState('undo', states, state)
;({state, states} = stateRedo(states, 0))

console.log('Second Redo', state.todos)
