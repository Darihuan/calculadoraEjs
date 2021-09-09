module.exports  = class User {
    constructor( ultimoResultado, historicoOperaciones,timeStamp) {

        this.ultimoResultado = ultimoResultado;
        this.historicoOperaciones = historicoOperaciones;
        this.timeStamp=timeStamp;
    }

    addoperacion(operacion) {
       return this.historicoOperaciones += ', ' + operacion;
    }
}
