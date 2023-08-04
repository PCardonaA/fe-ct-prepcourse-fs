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
capicua(12321);
capicua(1111);
capicua(105217);
capicua(7878700);
