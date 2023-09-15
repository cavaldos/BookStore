const Book = require("../models/book");

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
      res.json({ message: "find" });
    } catch (error) {
      console.log(error);
    }
  },
  create: async (req, res) => {
    try {
      res.json({ message: "create" });
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      res.json({ message: "delete" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      res.json({ message: "update" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = bookController;
