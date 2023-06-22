// Paso 1: Iterar actoresPrincipales y llevar a actoresVocales aquellos cuyo nombre o apellido comience con una vocal.
let actoresPrincipales = ["Tom Hanks", "Leonardo DiCaprio", "Brad Pitt", "Natalie Portman"];
let actoresVocales = [];

for (let i = 0; i < actoresPrincipales.length; i++) {
  let actor = actoresPrincipales[i];
  let nombreCompleto = actor.toLowerCase().split(" ");
  let nombre = nombreCompleto[0];
  let apellido = nombreCompleto[1] || "";

  if (/^[aeiou]/i.test(nombre) || /^[aeiou]/i.test(apellido)) {
    actoresVocales.push(actor);
  }
}

console.log("Actores Vocales:", actoresVocales);

// Paso 2: Iterar sobre el Objeto actoresPrincipalesPorPelicula y agregar sus nombres y apellidos al Arreglo actoresPrincipales.
let actoresPrincipalesPorPelicula = {
  "Pulp Fiction": ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
  "Titanic": ["Leonardo DiCaprio", "Kate Winslet"],
  "Fight Club": ["Brad Pitt", "Edward Norton"],
};

for (let pelicula in actoresPrincipalesPorPelicula) {
  actoresPrincipales = actoresPrincipales.concat(actoresPrincipalesPorPelicula[pelicula]);
}

console.log("Actores Principales:", actoresPrincipales);

// Paso 3: Iterar sobre el Objeto actoresPrincipalesPorPelicula y agregar los nombres de las películas en el Arreglo peliculas.
let peliculas = Object.keys(actoresPrincipalesPorPelicula);
console.log("Películas:", peliculas);

// Paso 4: Crear un Objeto vacío llamado peliculaPorActor y agregar propiedades donde la clave sea el nombre del actor y el valor sea la película.
let peliculaPorActor = {};

for (let pelicula in actoresPrincipalesPorPelicula) {
  let actores = actoresPrincipalesPorPelicula[pelicula];
  for (let i = 0; i < actores.length; i++) {
    let actor = actores[i];
    if (peliculaPorActor[actor]) {
      peliculaPorActor[actor].push(pelicula);
    } else {
      peliculaPorActor[actor] = [pelicula];
    }
  }
}

console.log("Película por Actor:", peliculaPorActor);
