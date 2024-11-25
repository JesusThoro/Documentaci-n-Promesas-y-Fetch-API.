# Ejercicios sobre Promesas en JavaScript

## Ejercicio 1: Crear una promesa que se resuelva después de 2 segundos

```javascript
const esperarDosSegundos = new Promise((resolve) => {
  setTimeout(() => resolve("Resuelto después de 2 segundos"), 2000);
});

esperarDosSegundos.then(console.log);
