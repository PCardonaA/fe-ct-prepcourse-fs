/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var nuevoArreglo=[];
   for (var par in objeto){
      nuevoArreglo.push([par,objeto[par]]);
   };
   return nuevoArreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var stringSeparado = string.split('');
   var stringOrdenAlfabetico = stringSeparado.sort();
   var objetoNuevo ={};
   while (stringOrdenAlfabetico.length > 0){
       objetoNuevo[stringOrdenAlfabetico[0]] = 1;
       for (var i=1; i < stringOrdenAlfabetico.length; i++){
           if (stringOrdenAlfabetico[0] === stringOrdenAlfabetico[i]){
               objetoNuevo[stringOrdenAlfabetico[0]]= objetoNuevo[stringOrdenAlfabetico[0]] + 1;
           };
       };
       stringOrdenAlfabetico.splice(0,objetoNuevo[stringOrdenAlfabetico[0]]);
   };
   return(objetoNuevo);
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arregloMayuscula=[];
   var arregloMinuscula=[];
   var arreglo = string.split('');
   for(var i=0; i < arreglo.length; i++){
      if(arreglo[i]===arreglo[i].toUpperCase()){
         arregloMayuscula.push(arreglo[i]);
      }else{
       arregloMinuscula.push(arreglo[i]);
      };
   };
   var arregloEnOrden = arregloMayuscula.join('')+ arregloMinuscula.join('')
   return (arregloEnOrden);
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var fraseSeparada = frase.split(' ');
   var alreves =[];
   for (var i = 0; i < fraseSeparada.length; i++){
       var elemento = [];
       for(var u =0; u< fraseSeparada[i].length; u++){
           elemento.unshift(fraseSeparada[i][u]);
       };
       var palabraJunta = elemento.join('');
       alreves.push(palabraJunta);
   };
   return(alreves.join(' '));
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroEnArray = String(numero);
   var capicua = 'Es capicua';
   for (var i =0; i<= ((numeroEnArray.length/2)+1); i++){
       if(numeroEnArray[i]!==numeroEnArray[numeroEnArray.length-(i+1)]){
           capicua = 'No es capicua'
           return(capicua);
           break;
       }else{
         continue;
      };
   };
   return(capicua);
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
