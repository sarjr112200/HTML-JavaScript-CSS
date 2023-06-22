// Crear el arreglo de películas
var películas = [
    {
  
   
  titulo: "Pelicula 1", rating: 5, loHasVisto: true},
    {
    
   
  titulo: "Pelicula 2", rating: 4, loHasVisto: false},
    {
   
  titulo: "Pelicula 3", rating: 5, loHasVisto: true},
    {
    
  titulo: "Pelicula 4", rating: 4, loHasVisto: false},
    {
   
  titulo: "Pelicula 5", rating: 5, loHasVisto: true}
  ];
  
  // Iterar sobre el arreglo y mostrar el resultado en la consola
  for (var i = 0; i < películas.length; i++) {
    
   
  var película = películas[i];
    
   
  var estado = película.loHasVisto ? "Visto" : "no Visto";
    
   
  var estrellas = "★".repeat(película.rating); // Usamos el símbolo ★ para representar las estrellas
  
  
  console.log(estado + ' "' + película.titulo + '" - ' + estrellas);
  }