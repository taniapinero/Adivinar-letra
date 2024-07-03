window.onload=function(){ //Cuando la página se termine de leer, comienza a ejecutar el script

    let contador=5;
    


let abecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"; // Cadena la posición comienza 0
console.log(abecedario.length);

let letraAleatoria=parseInt(Math.random()*27);

console.log(abecedario.charAt(letraAleatoria)); // CharAt nos devuelve el caracter de la posición indicada
let correcta=abecedario.charAt(letraAleatoria);

document.querySelector("#boton").addEventListener("click", ()=>{ //Esto último es una función vacía, en vez de poner funtion
    let letraUser=document.querySelector("#letra").value.trim(); // Insertamos el valor que el usuario ha escrito en la variable letraUser
    let salida=document.querySelector("#salida");
    salida.innerHTML="";
    // letraUser.toUpperCase()==correcta?salida.innerHTML="Correcto!" : salida.innerHTML="No es Correcto :(";

    if(letraUser.toUpperCase()==correcta){ // Esto es para ponerlo directamente en mayúscula
        salida.innerHTML="Correcto!";
    }else{
        salida.innerHTML="No es correcto :(";
        contador--;
    }
    document.querySelector("#contador").innerHTML="Intentos= " + contador;

    if (contador==0) {
        salida.innerHTML="Has perdido";
        document.querySelector("#letra").setAttribute("disabled", "true");
        document.querySelector("#boton").setAttribute("disabled", "disabled");
    }
});


}