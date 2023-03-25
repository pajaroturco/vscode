export function saludar(nombre) {
  console.log("Hola mundo " + nombre);
}

export function fecha() {
  let fecha = new Date();
  console.log(fecha.toLocaleDateString());
}

let apellido = "Garcia";

apellido.replace("a", "e");

apellido.trim();

console.log(apellido);

/* 
*este programa hace tal cosa 
! esta funcion no se debe usar
*/