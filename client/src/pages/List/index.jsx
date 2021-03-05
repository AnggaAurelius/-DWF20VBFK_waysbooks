import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "../../config/axios";
import Navbar from "../../component/Navbar";
import bgw from "../bgw.jpg";

export const Mylist = () => {
  const history = useHistory();
  const [books, setBooks] = useState([]);
  const read = (bookId) => history.push(`/detail/${bookId}`);
  const getBooks = async () => {
    try {
      const books = await API.get("/fav");

      setBooks(books.data.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div className="full bgImage" style={{ backgroundImage: `url( ${bgw})` }}>
      <Navbar />
      <div className="row mylist">
        {books.map((Books) => (
          <div className="col-sm-2 mr-4 pb-4 pt-4">
            <img
              src={`http://localhost:5000/uploads/${Books.thumbnail}`}
              className="book pointer"
              alt=""
              onClick={() => read(Books.id)}
            />
            <h2
              className="bold text-truncate pointer"
              onClick={() => read(Books.id)}
            >
              {Books.title}
            </h2>
            <p className="authorC text-left">{Books.author}</p>
            <p className="priceC text-left">Rp. {Books.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mylist;
