function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   console.log(arrayOfStrings[1].length);
   arrayOfStrings.sort((a,b) =>{
      return a.length - b.length;
   })
   console.log(arrayOfStrings);
   //var Contar = {};
   //for (var i=0; i < arrayOfStrings.length; i++){
      //var longitud = arrayOfStrings[i].length;
      //Contar[arrayOfStrings[i]] = longitud;
   //}
   //var LaMasLarga=0;
   //var Definitiva={};
   //for (var prop in Contar ){
      //if (Contar[prop] > LaMasLarga){
         //LaMasLarga = Contar[prop];
      //}
   //}
   //console.log(LaMasLarga);
   //console.log(Contar.beautiful);
   
}

sortArray(["holacomoestas", "are", "beautiful", "looking"]);