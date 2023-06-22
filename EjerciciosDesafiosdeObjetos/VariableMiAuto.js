// 1. Crear una Variable llamada miAuto y asignarle un Objeto vacío.
let miAuto = {};

// 2. Asignarle a miAuto una Propiedad marca que contenga un String.
miAuto.marca = "Toyota";

// 3. Agregar una Propiedad año que contenga un número entero.
miAuto.año = 2022;

// 4. Agregar una Propiedad nuevo que contenga un booleano.
miAuto.nuevo = true;

// 5. Crear una Variable llamada propertyKey y asignarle el String "modelo".
let propertyKey = "modelo";

// 6. Agregar la Propiedad modelo al Objeto miAuto usando la variable propertyKey.
miAuto[propertyKey] = "Corolla";

// 7. Crear una Variable llamada anotherPropertyKey y asignarle el valor "precio".
let anotherPropertyKey = "precio";

// 8. Cuantificar el valor de tu auto usando la variable anotherPropertyKey.
miAuto[anotherPropertyKey] = 25000;

// 9. Asignar la String "color" a una Variable nueva llamada nextProperty.
let nextProperty = "color";

// 10. Usar la variable nextProperty para añadir el color a tu auto.
miAuto[nextProperty] = "rojo";

// 11. Usar el loop for...in para iterar sobre el Objeto miAuto y mostrar en la consola el key y el value de cada Propiedad.
for (let key in miAuto) {
  console.log(`Propiedad: ${key}, Valor: ${miAuto[key]}`);
}
