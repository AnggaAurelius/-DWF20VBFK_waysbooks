const { Book } = require("../../models");

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    res.send({
      status: "success",
      data: {
        books,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};
exports.getBooksById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!book) {
      return res.send({
        status: "success",
        message: `Book with id ${id} Not Existed`,
      });
    }

    res.send({
      data: {
        book,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};
exports.addBook = async (req, res) => {
  const { files } = req;

  const {
    title,
    publicationDate,
    pages,
    author,
    ISBN,
    description,
    price,
  } = req.body;

  try {
    const book = await Book.create({
      title,
      publicationDate,
      pages,
      author,
      ISBN,
      price,
      description,
      thumbnail: files.thumbnail[0].filename,
      bookAttachment: files.bookAttachment[0].filename,
    });

    res.send({
      message: "Book Successfully Created",
      data: {
        book,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};
