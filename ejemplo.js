/**
 * Prueba de API
 * @module API
 * @author Adrian Luis Prieto Hernández <alprietoh01@iescastelar.com>
 */
 
/** API Class description */
class MiClase {
    /**
     * Constructor de clase
     * @param {Objeto} config ejemplo de descripción
     */
     constructor( config ){
         /** @private */
         this.uno = config;
         /** @public */
         this.dos = "ejemplo";
     }

     /**
      * Otro método chulo
      * @param {cadena} dice hola mundo
      */
      holaMundo( cadena ){
        console.log( "Hola" + cadena);
      }
}
module.exports = MiClase;
// prueba de cambios
