'use strict'

let statesHistory = {
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

const stateWasUpdated = ((state) => (currentState) => {
    if (state !== currentState) {
        state = currentState
        return true
    }

    return false
})(state)

console.log('State updated:', stateWasUpdated(state))

const prependState = (kind, statesHistory, state) => ({
    ...statesHistory,
    [kind]: [state, ...statesHistory[kind]]
})
const appendTodo = (state, todo) => ({
    ...state,
    todos: [...state.todos, todo]
})

statesHistory = prependState('undo', statesHistory, state)
state = appendTodo(state, {
    id: 1,
    message: 'Make the bed'
})

console.log('Save Todo:', state.todos)
console.log('State updated:', stateWasUpdated(state))
console.log('State updated:', stateWasUpdated(state))

statesHistory = prependState('undo', statesHistory, state)
state = appendTodo(state, {
    id: 2,
    message: 'Record the course'
})

console.log('Save Second Todo:', state.todos)
console.log('State updated:', stateWasUpdated(state))
