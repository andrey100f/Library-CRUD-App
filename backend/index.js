const express = require('express');
const cors = require('cors');

const BookController = require('./controllers/BookController');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/books', BookController);

app.listen(8800, () => {
    console.log("REST API Server ready at: http://localhost:8800");
})