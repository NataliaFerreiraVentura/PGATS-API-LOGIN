// models/userModel.js


class User {
    constructor(login, password, name, email) {
        this.login = login;
        this.password = password;
        this.name = name;
        this.email = email;
    }
}

module.exports = User;
