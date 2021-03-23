'use strict'

// Structural Sharing

const user = {
    id: 1,
    username: 'Mike',
    address: {
        street: 'A street',
        number: 14
    },
    profile: {
        nickname: 'Mikey',
        image: 'bff7a93.jpg'
    }
}

const updatedUser = {
    ...user,
    username: 'mike1234'
}

console.log('user === updatedUser', user === updatedUser)
// address and profile have not been duplicated
console.log('user.address === updatedUser.address', user.address === updatedUser.address)
console.log('user.profile === updatedUser.profile', user.profile === updatedUser.profile)
