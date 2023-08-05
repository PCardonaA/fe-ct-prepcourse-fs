function deleteAbc(string) {
    // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
    // Retorna el string sin estas letras.
    // Tu código:
    var arregloPalabra = string.split('');
    var i = 0;
    if(arregloPalabra.includes('a')||arregloPalabra.includes('b')|| arregloPalabra.includes('c')){
       while(i < arregloPalabra.length){
          if(arregloPalabra[i]==='a'||arregloPalabra[i]==='b'||arregloPalabra[i]==='c'){
             arregloPalabra.splice(i,1);
             i = i;
          }else{
            i=i+1;
          }
       };
    };
    var palabraJunta = arregloPalabra.join('');
    console.log(palabraJunta);
}

deleteAbc('abchola');
deleteAbc('balon');
