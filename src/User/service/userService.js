const User = require("../model/user");
const express = require("express");
let users = {};
let times = new Timer(users);
function calculadora(id, operator, number) {
    primera=false;
    if (users[id] === undefined) {
        users[id] = new User("","",Date.now());

        primera=true;
    }
    const usuario = users[id];
    let todasOperaciones = "";


    if(!primera){
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
                users[id]=undefined;
                const reset=true;
                const idReset=id;
                return {operacion:"reset", todasOperaciones:"reset", id}

        }
        if (operacion != '')
        todasOperaciones = usuario.addoperacion(operacion);
    }
    else{
        operacion = number
        usuario.ultimoResultado = parseInt(number)
        todasOperaciones = usuario.addoperacion(number)

    }




    return {operacion, todasOperaciones, id}


}


module.exports = {calculadora};