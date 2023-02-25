//En esta función se encuentra un saludo y una bienvenida a la página.

function saludar() {
    var nombre = prompt("Como te llamas?");
    alert ("Hola " + nombre);
    alert ("Bienvenido a mi cv online");

    console.log("Bienvenido a las herramientas DEV");
}

//sieve para mostrar y ocultar la función del botón ver más. 

function verMas(){
    var experiencia = document.getElementsByClassName("parrafo");
    for (let index = 0; index < experiencia.length; index++) {
        if (experiencia[index].style.display=='none'){ 
            experiencia[index].style.display='block';
           } else{
            experiencia[index].style.display='none'
           }
               
    }
}
