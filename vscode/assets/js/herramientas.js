export function saludar(nombre) {
  console.log("Hola mundo " + nombre);
}

export function fecha() {
  let fecha = new Date();
  console.log(fecha.toLocaleDateString());
}