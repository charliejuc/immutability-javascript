'use strict'

const users = [
    {
        id: 1,
        username: 'Mike'
    },
    {
        id: 2,
        username: 'Ana'
    },
    {
        id: 3,
        username: 'Jane'
    }
]
const usersInIds = (ids) => new Promise(
    (resolve) => setTimeout(
        () => resolve(users.filter((user) => ids.includes(user.id))),
        100)
)

const ids = [1]
usersInIds(ids).then(console.log)

const fullIds = [
    ...ids,
    3
]

usersInIds(fullIds).then(console.log)
