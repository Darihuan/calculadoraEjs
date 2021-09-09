const User = require("../model/user");
const Timer = require("../model/timer");
let users = [];
let times = new Timer(users);

function calculadora(id, operator, number) {
    primera = false;
    if (users[id] === undefined) {
        times.addUser(new User("", "", Date.now(), id), id);
        primera = true;
    } else if (times.nextusuarioeliminar.id == id) {
        let stamp = Date.now();
        users[id].timeStamp = stamp;
        times.nextusuarioeliminar.timeStamp = stamp;
    }
    const usuario = users[id]
    let todasOperaciones = "";


    if (!primera) {
        switch (operator) {
            case "sumar" :
                operacion = usuario.ultimoResultado + "+" + number + "="
                usuario.ultimoResultado = parseInt(usuario.ultimoResultado) + parseInt(number);
                operacion += "" + usuario.ultimoResultado;
                break;
            case "restar" :
                operacion = usuario.ultimoResultado + "-" + number + "="
                usuario.ultimoResultado = usuario.ultimoResultado - number;
                operacion += "" + usuario.ultimoResultado;
                break;
            case "multiplicar" :
                operacion = usuario.ultimoResultado + "*" + number + "="
                usuario.ultimoResultado = usuario.ultimoResultado * number;
                operacion += "" + usuario.ultimoResultado;
                break;
            case "dividir" :
                if (number == 0) {
                    res.render('errorCero');
                    break;
                }
                operacion = usuario.ultimoResultado + "/" + number + "="
                usuario.ultimoResultado = usuario.ultimoResultado / number;
                operacion += "" + usuario.ultimoResultado;
                break;

            case "reset":
                users[id] = undefined;
                const reset = true;
                const idReset = id;
                times.eliminarultimo();
                times.nextusuarioeliminar();
                return {operacion: "reset", todasOperaciones: "reset", id}
                break;

        }
        if (operacion != '')

            todasOperaciones = usuario.addoperacion(operacion);
    } else {
        operacion = number
        usuario.ultimoResultado = parseInt(number)
        todasOperaciones = usuario.addoperacion(number)


    }


    return {operacion, todasOperaciones, id}


}

function eliminar() {
    timeStamp = Date.now();
    if (times.nextusuarioeliminar != undefined) {
        if (timeStamp >= times.nextusuarioeliminar.timeStamp + 6000) {

            times.eliminarultimo();

            times.getNextUserEliminar();

            console.log(times.nextusuarioeliminar)
        }
    }

}


module.exports = {calculadora, eliminar};