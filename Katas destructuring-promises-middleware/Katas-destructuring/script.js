// Destructuring Kata 1

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },

  { name: "Ana", email: "Ana@gmail.com" },

  { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, Ana] = empleados;

console.log(Ana);

// Kata 2

const [Luis, ,] = empleados;
const emailLuis = Luis.email;
console.log(emailLuis);

// Promesas ejercicio 1
