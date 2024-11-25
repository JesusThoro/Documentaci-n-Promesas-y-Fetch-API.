# Fetch en JavaScript

## Concepto y Definición
La función **fetch()** en JavaScript se utiliza para realizar solicitudes HTTP a servidores. Permite enviar y recibir datos de forma asíncrona, reemplazando a `XMLHttpRequest`.

## Ejemplo Básico
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
