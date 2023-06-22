function totalArticulos(ecommerce) {
    let resultado = [];
  
    for (let i = 0; i < ecommerce.length; i++) {
      let producto = ecommerce[i];
      let valorTotal = producto.precio * producto.articulos;
      let objetoResultado = {
        [producto.nombre]: valorTotal
      };
      resultado.push(objetoResultado);
    }
  
    return resultado;
  }
  
  let ecommerce = [
    { nombre: 'Samsung TV', precio: 60000, articulos: 10 },
    { nombre: 'DELL notebook', precio: 120000, articulos: 30 },
    { nombre: 'Auriculares Sony', precio: 1500, articulos: 15 },
    { nombre: 'Monitor Philips', precio: 12000, articulos: 20 },
    { nombre: 'Teclado Logitech', precio: 3000, articulos: 5 }
  ];
  
  console.log(totalArticulos(ecommerce));
  