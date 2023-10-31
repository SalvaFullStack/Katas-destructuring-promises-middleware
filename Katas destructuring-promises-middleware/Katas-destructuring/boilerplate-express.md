## Boilerplate express

1. Instalar express

```bash
npm install express

# simplificada

npm i express
```

Comprobad node_modules y package.json

2. Incluir express

```javascript
const express = require("express");
```

3.  Crear instancia de la app que representa el servidor web

```javascript
const app = express();
```

4.  Crear primera definición de rutas

- Metodos de respuesta

1. res.send()

```javascript
app.get("/", (req, res) => {
  res.send("Hola mundo");
});
```

5. Poner a la escucha el server en un puerto

```javascript
app.listen(4001, () => console.log("Server on..."));
```
