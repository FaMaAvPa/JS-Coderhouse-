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



//ahora habrá una función que permita al usuario comprar productos
//primero crearé un constructor para los productos (que serían objetos)


function Producto(nombre, precio) {
    this.nombre = nombre;;
    this.precio = precio;
}

//array donde se almacnenarán los productos
let productos = []

//función que carga una lista de productos a comprar
function cargarLista(cantProductos)
{
    
   
    for (let index = 1; index <= cantProductos; index++) {
        let nombre = prompt("¿Cual es el producto " + index + " que desea comprar?");
        let precio = Number(prompt("¿A que precio se encuentra?"));
        productos.push(new Producto(nombre, precio));   
    }

}

//función que mostrará el precio final de los productos
function mostrarFinal(lista, cantProductos) 
{
    let precioFinal = 0
    let precio = 0
    for (let index = 0; index < productos.length; index++) 
    {
        Number(precio = productos[index].precio);
        Number(precioFinal = precioFinal + precio);
    }
    alert("Gracias por comprar con nosotros, el precio de su compra será de: $" + precioFinal);
}

//pregunta cuantos prodcutos quiere cargar
i = prompt("¿Cuantos productos quiere cargar?");
//ejecuta la función de cargar lista
cargarLista(i);
//ejecuta la función que mostrará el precio final de la compra
mostrarFinal(productos,i);