let personas = [
    { nombre: "mateo", edad: 40 },
    { nombre: "julian", edad: 60 },
    { nombre: "alba", edad: 15 },
    { nombre: "fabri", edad: 25 }
    
  ];
  
  // Ordenar el array de objetos por edad
  personas.sort((a, b) => a.edad - b.edad);
  
  // Agregar la propiedad "posicion" en cada objeto
  personas.forEach((persona, index) => {
    persona.posicion = index + 1;
  });
  
  console.log(personas);
  