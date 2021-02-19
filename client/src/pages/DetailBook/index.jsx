import React, { useState, useEffect } from "react";
import buku1 from "../LandingPage/buku1.png";
import cart from "./wCart.png";
import { useParams, useHistory } from "react-router-dom";
import { API } from "../../config/axios";
import Navbar from "../../component/Navbar";

export const Detailbook = () => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const getBook = async () => {
    try {
      setLoading(true);
      const findBook = await API.get(`/book/${id}`);

      console.log(findBook);
      setBook(findBook.data.data.book);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBook();
  }, []);

  //   const readEpub = () => history.push(`/read/${id}`);

  return loading ? (
    <h1>loading</h1>
  ) : (
    <div className="">
      <Navbar />
      <div className="mp-10 pt-60 text-left ml-270">
        <img
          className="cover  float-left mr-5"
          src={`http://localhost:5000/uploads/${book.thumbnail}`}
          alt=""
        />
        <p className="mt-5 pt-5 timesNew fs-50 titleDetail">{book.title}</p>
        <h1 className="gray fs-25">{book.author}</h1>
        <div className="mt-5">
          <h3 className="bold">Publication date</h3>
          <p className="gray">{book.publicationDate}</p>
          <h3 className="mt-4 bold">Pages</h3>
          <p className="gray">{book.pages}</p>
          <h3 className="mt-4 red bold">ISBN</h3>
          <p className="gray">{book.isbn}</p>
          <h3 className="mt-4 bold">Price</h3>
          <p className="price">{book.price}</p>
        </div>
        <br />
        <h2 className="detxt timesNew mb-4">About this book</h2>
        <p className="gray text-justify pb-5">{book.description}</p>
        <br />
        <button className="blackBtn detailCart float-right ">
          Add Cart <img className="imgMini ml-3 mb-1" src={cart} alt="" />
        </button>
        <br />
      </div>
    </div>
  );
};

export default Detailbook;
