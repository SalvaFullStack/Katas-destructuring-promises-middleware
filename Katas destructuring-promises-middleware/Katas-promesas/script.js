const fs = require("fs/promises");
const express = require("express");
const app = express();

// Lista todos los perros

app.get("/breeds", (req, res) =>
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    })
);

// Url random

app.get("/random", (req, res) =>
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    })
);

// Lista con imágenes de la raza

app.get("/hound", (req, res) =>
  fetch("https://dog.ceo/api/breed/hound/images/random/3")
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    })
);

app.listen(4001, () => console.log("Server on..."));
