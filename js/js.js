window.onload=function(){ //Cuando la página se termine de leer, comienza a ejecutar el script

    let contador=5;
    


let abecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"; // Cadena la posición comienza 0
console.log(abecedario.length);

let letraAleatoria=parseInt(Math.random()*27);

console.log(abecedario.charAt(letraAleatoria)); // CharAt nos devuelve el caracter de la posición indicada
let correcta=abecedario.charAt(letraAleatoria);

document.querySelector("#boton").addEventListener("click", ()=>{ //Esto último es una función vacía, en vez de poner funtion
    let letraUser=document.querySelector("#letra").value; // Insertamos el valor que el usuario ha escrito en la variable letraUser
    let salida=document.querySelector("#salida");
    salida.innerHTML="";
    letraUser.toUpperCase()==correcta?salida.innerHTML="Correcto!" : salida.innerHTML="No es Correcto :(";

    // if(letraUser.toUpperCase()==correcta){ // Esto es para ponerlo directamente en mayúscula
    //     salida.innerHTML="Correcto!";
    // }else{
    //     salida.innerHTML="No es correcto :(";
    // }
});

console.log(abecedario.indexOf("F"));
console.log(abecedario.lastIndexOf("F")); // Devuelve la posición buscando de derecha a izquierda

// Termina con endWith() -> true si el parámetro pasado es igual al último o últimos caracteres
console.log(abecedario.endsWith("XYZF"));
let telefonos=["926502151", "958455245", "654987123", "926515487"];

for (let tel = 0; tel < telefonos.length; tel++) {
    if (telefonos[tel].startsWith("926")) {
        console.log("El teléfono " + telefonos[tel] + " es de Ciudad Real");
    }else if (telefonos[tel].startsWith("6")) {
        console.log("El teléfono " + telefonos[tel] + " es un móvil");
    }
}


// Reemplazar un texto por otro
let apellido="Irina Mendez";
apellido=apellido.replace("Mendez", "Medina");
console.log(apellido);



// trim..... solo reemplaza los espacios del principio y del final!!!!!
let nombre= "María ";
let nuevoNombre=nombre.trim();
console.log(nombre);
console.log(nuevoNombre);


// Slice -> extrae de una cadena desde la posición que le indiques hasta la posición que indiques pero la última no se incluye
console.log(apellido.slice(0,5));

apellido=apellido.toLowerCase();
console.log(apellido);


//subStr -> Devuelve los caracteres desde la posición de inicio
console.log(apellido.substring(0,1).toUpperCase()+apellido.substring(1));


// Split -> Convierte una cadena de caracteres en un Array a partir del delimitador indicado
let paises="España-Francia-Italia-Portugal-Alemania";
let todosPaises=paises.split("-");
console.log(todosPaises);
console.log(apellido.split(" "));




}



