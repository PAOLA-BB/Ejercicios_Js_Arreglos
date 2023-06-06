/*
//EJERCICIO 1
let numeros = [];
let i;

for (i = 0; i < 10; i++) {
  let numero = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
  numeros.push(numero); // Agrega los números generados al azar en el array vacio
}
console.log(numeros);


//EJERCICIO 2
let palabra = prompt("Ingrese palabras separadas por coma:");
var palabras = [];

if (palabra !== null) {
  palabras = palabra.split(",");
}
console.log(palabras);
*/

//EJERCICIO 3
let arreglo = [10, 40, 30, 20, 15, 5];

arreglo.sort(function(a, b) { // Ordenar el arreglo de menor a mayor
  return a - b;
});

alert(`Arreglo ordenado de menor a mayor: ${arreglo}`); // Muestra el arreglo ordenado
alert(`Número menor: ${arreglo[0]}`); // Mostrar el número menor
alert(`Número mayor: ${arreglo[arreglo.length - 1]}`); // Mostrar el número mayor, 
//arreglo.length - 1 se usa para obtener el índice del último elemento, independientemente de la longitud del arreglo.