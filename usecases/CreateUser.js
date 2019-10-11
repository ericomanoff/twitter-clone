const User = require('../entities/User')

class CreateUser {
    createUser(request){
        const user = new User(request)
        const persistedUser = Context.repository.addUser(user)
        return persistedUser
    }
}

module.exports = CreateUser