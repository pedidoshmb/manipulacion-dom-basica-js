// Sale error al momento de ejecutar este codigo, pasa el hoisting llamamos una variable q no esta inicializada
//Javascript la inicializa con undefined
console.log (miNombre);

 var miNombre = "mauricio";

**************************************

 hey();

 function hey() {
    console.log("HOla"  + miNombre);
 }

 var miNombre = "mauricio";

 //Resultado es
     // Hola Unidefined   // porque las variables y las funciones se ejecutan antes que el codigo

     // por buenas practicas las variables y funciones  deben declararse antes del codigo

     
