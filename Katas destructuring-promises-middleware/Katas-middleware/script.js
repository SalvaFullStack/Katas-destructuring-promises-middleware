const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

const pets = [
  { name: "Lassie", type: "dog" },
  { name: "Felix", type: "cat" },
  { name: "Garfield", type: "cat" },
  { name: "Peter", type: "rabbit" },
];
