import React, { useState, useEffect } from "react";
import buku1 from "./buku1.png";
import { useHistory } from "react-router-dom";
import { API } from "../../config/axios";

export const ShowBooks = () => {
  const [text, setText] = useState(
    " Ambiti onid edisse scripsisse iudica retur. Cras mattis iudicium purus sit amet fermentum. Donec sed odiAmbitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odiAmbitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate f"
  );
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const read = (bookId) => history.push(`/detail/${bookId}`);
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    try {
      setLoading(true);
      const books = await API.get("/books");
      setLoading(false);
      setBooks(books.data.data.books);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);
  return loading ? (
    <h1>loading</h1>
  ) : (
    <div className="showBooks">
      <p className="fs-45">With us, you can shop online & help</p>
      <p className="fs-45">save your high street at the same time</p>
      <div className="row">
        <div className="popularBook mt-5 ml-3 col-md-5">
          <img src={buku1} className="float-left mr-4 pr-1 imgCover " alt="" />
          <div className="text-left ">
            <p className="title">
              Tit it it leTitl leTi tlle Titl leTi tleT itle
            </p>
            <p className="gray author">author</p>
            <p className="description ">{`${text.substring(0, 100)}...`}</p>
            <p className="price">Rp. 10.000</p>
            <button className="tombol blackBtn btnCart">Add to Cart</button>
          </div>
        </div>
        <div className="popularBook mt-5 ml-3 col-md-5">
          <img src={buku1} className="float-left mr-4 pr-1 imgCover " alt="" />
          <div className="text-left ">
            <p className="title">
              Tit it it leTitl leTi tlle Titl leTi tleT itle
            </p>
            <p className="gray author">author</p>
            <p className="description ">{`${text.substring(0, 100)}...`}</p>
            <p className="price">Rp. 10.000</p>
            <button className="tombol blackBtn btnCart">Add to Cart</button>
          </div>
        </div>
      </div>
      <p className="fs-35 mt-5 text-left listBook pl-3 timesNew">List Book</p>
      <div className="">
        <div className="listBook row">
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
              <p className="authorC">{Books.author}</p>
              <p className="priceC text-left">Rp. {Books.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
