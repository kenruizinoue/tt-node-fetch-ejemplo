const fetch = require("node-fetch");

fetch("https://swapi.co/api/people/3")
  .then(promesaFetch => promesaFetch.json())
  .then(contenido => console.log(contenido));
