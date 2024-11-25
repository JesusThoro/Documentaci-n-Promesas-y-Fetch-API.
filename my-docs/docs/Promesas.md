# Promesas en JavaScript

## Concepto y Definición
Una **promesa** en JavaScript es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. Básicamente, una promesa puede tener tres estados:
- **Pendiente**: Estado inicial, ni cumplido ni rechazado.
- **Cumplido (Fulfilled)**: Significa que la operación se completó con éxito.
- **Rechazado (Rejected)**: Significa que la operación falló.

## Ejemplo Básico
```javascript
const promesa = new Promise((resolve, reject) => {
  const exito = true;
  if (exito) {
    resolve("Operación exitosa");
  } else {
    reject("Operación fallida");
  }
});

promesa
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error));
