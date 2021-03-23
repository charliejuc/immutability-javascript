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

const stateUserWasUpdated = ((state) => (currentState) => {
    if (state.user !== currentState.user) {
        state = currentState
        return true
    }

    return false
})(state)
const stateTodosWasUpdated = ((state) => (currentState) => {
    if (state.todos !== currentState.todos) {
        state = currentState
        return true
    }

    return false
})(state)

console.log('State user updated:', stateUserWasUpdated(state))
console.log('State todos updated:', stateTodosWasUpdated(state))

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
console.log('State user updated:', stateUserWasUpdated(state))
console.log('State todos updated:', stateTodosWasUpdated(state))
console.log('State todos updated:', stateTodosWasUpdated(state))

statesHistory = prependState('undo', statesHistory, state)
state = appendTodo(state, {
    id: 2,
    message: 'Record the course'
})

console.log('Save Second Todo:', state.todos)
console.log('State user updated:', stateUserWasUpdated(state))
console.log('State todos updated:', stateTodosWasUpdated(state))
