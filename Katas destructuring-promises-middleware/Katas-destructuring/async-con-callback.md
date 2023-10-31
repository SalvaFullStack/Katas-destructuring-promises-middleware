# Callback asincronia

```javascript
// Events

setTimeout(callback, 1000);
setInterval(callback, 1000);

document.addEventListener("click", eventHandler);

function eventHandler(event) {}

http.createServer(requestListener);

function requestListener(req, res) {}

server.listen(port, onReady);

function onReady() {
  console.log("Server on");
}

fs.readFile(path, callback);

function callback(err, data) {}

// Callbacks
```
