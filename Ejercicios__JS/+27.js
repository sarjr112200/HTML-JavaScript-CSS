// Arreglo de objetos que representa a cada persona
var personas = [
    { 
   
  nombre: 'Juan', edad: 30 },
    { 
   
  nombre: 'María', edad: 25 },
    { 
   
  nombre: 'Carlos', edad: 29 },
    { 
   
  nombre: 'Ana', edad: 31 },
    { 
   
  nombre: 'Pedro', edad: 26 }
  ];
  
  // Filtrar personas mayores de 27 años
  var personasMayores = personas.filter(function(persona) {
    
   
  return persona.edad > 27;
  });
  
  // Imprimir el nuevo arreglo con las personas mayores de 27 años
  console.log(personasMayores);