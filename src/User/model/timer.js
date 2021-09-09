const User = require("./user");
module.exports = class Timer {
    constructor(users) {
        this.Users = users;
        this.nextusuarioeliminar = undefined;
    }

    addUser(user, id) {
        this.Users[id] = user;
        if (this.nextusuarioeliminar == undefined)
            this.nextusuarioeliminar = user;
    }

    eliminarultimo() {

        this.Users[this.nextusuarioeliminar.id] = undefined;

    }

    getNextUserEliminar() {
        let userEliminar = new User("", "", Date.now(), 100000);
        let undefinedvar = false;
        if (this.Users.length != 0) {
            for (let i = 0; i < this.Users.length; i++) {
                if (this.Users[i] == undefined) {
                    undefinedvar = true;
                    break;
                }
                if (this.Users[i].timeStamp < userEliminar.timeStamp) {
                    userEliminar = this.Users[i];
                }

            }
        }

        if (undefinedvar)
            this.nextusuarioeliminar = undefined;
        else
            this.nextusuarioeliminar = userEliminar;

    }


}