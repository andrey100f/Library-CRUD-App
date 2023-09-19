const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const BookService = {
    getAllBooks: async (req, res) => {
        try {
            const books = await prisma.books.findMany();

            if (!books) {
                return res.status(404).json({ error: 'No Books Found...' });
            }

            return res.status(200).json(books);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error...' });
        }
    },

    saveBook: async (req, res) => {
        try {
            const title = req.body.title;
            const description = req.body.description;
            const cover = req.body.cover;
            const price = req.body.price;

            const bookData = {
                title: title,
                description: description,
                cover: cover,
                price: price
            };

            const book = await prisma.books.create({
                data: bookData
            });

            return res.status(200).json(book);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error...' });
        }
    },

    deleteBook: async (req, res) => {
        try {
            const bookId = parseInt(req.params.id);

            const bookDeleted = await prisma.books.delete({
                where: {
                    id: bookId
                }
            });

            if (!bookDeleted) {
                return res.status(404).json('No Books Found...');
            }

            return res.status(200).json(bookDeleted);
        }
        catch (error) {
            return res.status(500).json({ error: error });
        }
    },

    updateBook: async (req, res) => {
        try {
            const bookId = parseInt(req.params.id);
            const title = req.body.title;
            const description = req.body.description;
            const cover = req.body.cover;
            const price = parseInt(req.body.price);

            const bookData = {
                title: title,
                description: description,
                cover: cover,
                price: price
            }

            const bookUpdated = await prisma.books.update({
                where: {
                    id: bookId
                },
                data: bookData
            });

            return res.status(200).json(bookUpdated);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error...' });
        }
    },
};

module.exports = BookService;