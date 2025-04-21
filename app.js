
const express = require("express"); // importar express
const booksRoutes = require("./routes/books.routes")
const books = require('./data/books.json');
const app = express(); // crear el servidor --> Objeto de la clase express
const port = 3000; // puerto donde se ejecuta el servidor

//Rutas;

app.use(express.json()); //enlazado con la linea 1

//Busca todos los libros 
// app.get('/all', (req, res) => {
//   res.json(books);  // Devolver los libros como respuesta JSON
// });
// app.get('/first', (req, res) => {
//   res.json(books);  // Devolver los libros como respuesta JSON
// });
app.use('/', booksRoutes);

app.listen(port, () => {
  console.log(`Running. Funcionando en: http://localhost:${port}`)
})