class MemoryRepository{

    constructor(){
        this.users = []
    }

    getUser(username){
        return this.users[username]
    }

    addUser(user){
        return this.users[user.username] = user
    }
}

module.exports = MemoryRepository