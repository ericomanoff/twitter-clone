class User {
    constructor(request){
        this.username = request.username
        this.password = request.password
        this.about = request.about
    }
}

module.exports = User