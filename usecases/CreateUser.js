const User = require('../entities/User')

class CreateUser {
    createUser(request){
        return new User(request)
    }
}

module.exports = CreateUser