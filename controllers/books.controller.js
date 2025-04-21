const books = require('../data/books.json');
//Todos los libros
const getAllBooks = (req, res)=>{
    res.json(books);
};

//Primer libro
// Obtener el primer libro
const getFirstBook = (req, res) => {
    
    if (books.length > 0) {
        res.json(books[0]);  // Devuelve solo el primer libro
    } else {
        res.status(404).json({ message: 'No books found' });
    }
};

// Crea una ruta /last para obtener el último libro
const getLastBook = (req, res) => {
   
    if (books.length > 0) {
        res.json(books[books.length - 1]);  // Devuelve solo el último libro
    } else {
        res.status(404).json({ message: 'No books found' });
    }
};

//Crea una ruta /middle para obtener el libro en la mitad (número 50 en el array)
 

//Crea una ruta /author/:author para obtener los libros de un autor específico
const getAuthorBook = (req, res) => {

    console.log(req.params.title);

    if(req.params.title){
        res.status(200).json({
            message:"Has solicitado:"+req.params.title,
            title:req.params.title,
            success:true,
            data:{
                "author": "Marguerite Yourcenar",
                "country": "France/Belgium",
                "imageLink": "images/memoirs-of-hadrian.jpg",
                "language": "French",
                "link": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
                "pages": 408,
                "title": "Memoirs of Hadrian",
                "year": 1951
              }
        });
    }else{
        res.status(404).json({ message: 'No books found' });
    }
}

module.exports = {
    getAllBooks,
    getFirstBook,
    getLastBook,
    getAuthorBook
}