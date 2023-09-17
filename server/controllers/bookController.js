const Book = require('../models/book');

const bookController = {
  getall: async (req, res) => {
    try {
      const users = await Book.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  find: async (req, res) => {
    try {
      const bookId = req.params.id;
      console.log(bookId);
      const book = await Book.findOne({ _id: bookId });
      if (!book) {
        return res.status(404).json({
          message: 'Book not found',
        });
      }
      res.status(200).json({
        message: 'Success',
        data: book,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  create: async (req, res) => {
    try {
      res.json({ message: 'create' });
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
     try {
       const data = req.body;
       const maso = data.ID;
       console.log(maso);
       const users = await Book.deleteOne({ ID: maso });
       console.log(users);
       res.status(200).json(users);
     } catch (err) {
       res.status(500).json({
         message: err.message,
       });
     }
  },
  update: async (req, res) => {
    try {
      const data = req.body;
      const maxId = await User.findOne({}, { ID: 1 })
        .sort({ ID: -1 })
        .limit(1)
        .exec();
      const result = await Book.updateOne(
        { ID: maxId.ID },
        {
          $set: {
            ID: data.ID,
            Image: data.Image,
            Tittle: data.Tittle,
            Author: data.Author,
            Rating: data.Rating,
            Price: data.Price,
            ISBN: data.ISBN,
            Genre: data.Genre,
            Publish_Year: data.Publish_Year,
            Publisher: data.Publisher,
            Description: data.Description,
            quantity: data.quantity,
          },
        },
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  getbook: async (req, res) => {
    try {
      const { page = 1, pageSize = 12 } = req.query;
      console.log(page, pageSize);
      const pageNumber = parseInt(page);
      const pageSizeNumber = parseInt(pageSize);
      // Calculate the number of documents to skip based on the page number and page size.
      const skipDocuments = pageSizeNumber * (pageNumber - 1);
      // Fetch books with pagination from the database.
      const totalBooks = await Book.countDocuments();
      const totalPages = Math.ceil(totalBooks / pageSizeNumber);
      const books = await Book.find().skip(skipDocuments).limit(pageSizeNumber);
      // Generate an array of page numbers [1, 2, 3, ...]
      const pageNumbersArray = Array.from(
        { length: totalPages },
        (_, i) => i + 1,
      );
      res.status(200).json({
        books,
        totalPages,
        currentPage: pageNumber,
        pageNumbers: pageNumbersArray,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
};

module.exports = bookController;
