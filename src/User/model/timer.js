module.exports  = class Timer {
    constructor(Users) {
        this.Users=users;
        this.nextusuarioeliminar=undefined;
    }

    addUser(user){
        this.Users.add(user);
        if(this.nextusuarioeliminar==undefined)
            this.nextusuarioeliminar=user;
    }
    eliminarultimo() {
       this.Users.splice(Users.indexOf(this.nextusuarioeliminar),1);

    }
    getNextUserEliminar(){
        let userEliminar =Users[1];
        this.Users.forEach(user=>{
            if(user.timeStamp<userEliminar)
                userEliminar = user;
        });
        this.nextusuarioeliminar=userEliminar;
    }



}