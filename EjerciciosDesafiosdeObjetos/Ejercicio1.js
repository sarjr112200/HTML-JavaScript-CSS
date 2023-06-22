let objeto_demo = {
    uno: 1,
    dos: 2,
    tres: 3
  };
  
  let uno = 'tres';
  
  console.log(objeto_demo['dos']); // Devuelve 2
  console.log(objeto_demo [uno]); // Cuando ejecutas Devuelve 3

  
  //En cuanto al código objeto_demo[uno], debería devolver 3. 
  //Aunque la variable uno tiene asignado el valor 'uno', al utilizarla dentro de los corchetes [] 
  //para acceder a las propiedades del objeto objeto_demo, se evalúa su contenido como una cadena de texto. 
  //al ejecutar objeto_demo[uno] obtendrás el valor asociado a esa propiedad, que es 3.
  //esto se debe a que javascript lee paso por paso

