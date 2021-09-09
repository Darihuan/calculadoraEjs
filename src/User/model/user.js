module.exports  = class User {
    constructor( ultimoResultado, historicoOperaciones,timeStamp,id) {

        this.ultimoResultado = ultimoResultado;
        this.historicoOperaciones = historicoOperaciones;
        this.timeStamp=timeStamp;
        this.id =id;
    }

    addoperacion(operacion) {
       return this.historicoOperaciones += ', ' + operacion;
    }
}
