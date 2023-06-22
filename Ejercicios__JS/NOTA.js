// Definir la lista de estudiantes con sus notas actuales
var estudiantes = [
    { nombre: "Julian", nota: 5 },
    { nombre: "Sebastian", nota: 9 },
    { nombre: "Serena", nota: 2 },
    { nombre: "Agustin", nota: 6 }
  ];
  
  // Recorrer la lista de estudiantes
  for (var i = 0; i < estudiantes.length; i++) {
    var estudiante = estudiantes[i];
  
    // Verificar si la nota es mayor a 5
    if (estudiante.nota >= 5) {
      // Aumentar la nota en 2 puntos
      estudiante.nota += 2;
  
      // Verificar si la nota supera el valor de 10
      if (estudiante.nota > 10) {
        estudiante.nota = 10; // Limitar la nota a 10
      }
    }
  
    // Imprimir el resultado para cada estudiante
    console.log("El nuevo desempeño académico de " + estudiante.nombre + " es: " + estudiante.nota);
  }
  