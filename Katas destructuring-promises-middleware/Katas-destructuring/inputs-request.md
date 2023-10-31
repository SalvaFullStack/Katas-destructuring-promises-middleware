# Inputs del cliente

## Cliente para probar request

- [thunder client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

## req.params

DESDE LA URL

```javascript
// GET /note/4
app.get("/note/:noteId", (req, res) => {
  console.log(req.params); // { noteId: 4}
  console.log(req.params.noteId); // 4
});

// GET /note/platanos
app.get("/note/:title/", (req, res) => {
  console.log(req.params.title); // platanos
});
```

## req.body

Desde el cuerpo http de la respuesta

(desde thunder en pestaña body se envía un json con la data)

### CONFIGURA MIDDLEWARE express.josn()

**ES NECESARIO UNA CONFIGURACIÓN PARA QUE EXPRESS SE PARSEE JSON DE LOS REQUEST**

Sin este paso `req.body` devuelve `undefined`

```javascript
app.use(express.json());
```

```javascript
/**
REQUEST (http):

POST /register/admin

{
	"username": "user1",
	"password": "1234"
}

*/

app.post("/register/:role", (req, res) => {
  console.log(req.params.role); // "admin"
  console.log(req.body); // { username: "user1",password: "1234"}
  console.log(req.body.username); // "user1"
});
```
