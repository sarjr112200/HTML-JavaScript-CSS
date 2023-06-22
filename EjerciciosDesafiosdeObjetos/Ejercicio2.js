let capitales = {
    Argentina: 'Buenos Aires',
    Uruguay: 'Montevideo'
  };
  
  let lugar = 'Uruguay';
  
  console.log(capitales['lugar']); // Devuelve undefined
  // En esta sentencia, 'lugar' es tratado como una cadena literal, no como el valor de la variable lugar.
  // Como no existe una propiedad llamada 'lugar' en el objeto capitales, devuelve undefined.
  
  console.log(capitales.lugar); // Devuelve undefined
  // En esta sentencia, intentamos acceder a la propiedad lugar del objeto capitales usando la notación de punto.
  // Sin embargo, no existe una propiedad llamada lugar en el objeto capitales, por lo que devuelve undefined.
  
  console.log(capitales[lugar]); // Devuelve 'Montevideo'
  // En esta sentencia, accedemos a la propiedad del objeto capitales usando el valor de la variable lugar como clave.
  // Como la variable lugar contiene el valor 'Uruguay' y existe una propiedad llamada 'Uruguay' en el objeto capitales,
  // se devuelve el valor asociado a esa propiedad, que es 'Montevideo'.
  