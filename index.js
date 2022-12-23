//declaración de variables
let nombre
let contraseña
let mail
let edad

//función para crear una cuenta
function registrarte(){
    let i = 0
    let mayor
    //un while que repita para cada opción
    while(i<4){
        i++
        switch (i) {
           case 1:
               nombre = prompt("Indica tu nombre de usuario para registrarte.")
               break;
           case 2:
               contraseña = prompt("Ingresa una contraseña.")
               break;
           case 3:
               mail = prompt("Indica tu mail.")
               break;
           case 4:
               edad = prompt("Ingresa tu edad.")
               break;
        }
        
       }  
       //corrobora si el usuario es mayor de edad con un if
    if (edad >= 18) 
    {
        mayor = true
    }
    else
    {
        mayor = false
    }

       return(mayor)
}

//invoca la función
let esMayor = registrarte()

//le dá un mensaje de bienvenida al usuario en función de si es o no mayor de edad
if (esMayor) { alert("Bienvenido " + nombre + " tenemos las mejores ofertas para ti!")}

else { alert("Bienvenido " + nombre + " a la hora de hacer una compra requeriras permiso de un mayor.") }
