import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { API } from "../../config/axios";
import { createBrowserHistory } from "history";

export const Book3 = () => {
  const history = useHistory();
  const history2 = createBrowserHistory();
  const path = history2.location.pathname;
  const id = 16;

  const [texta, setTexta] = useState(
    " iudicaretur. Cras mattis iudicium purus sit amet fermentum iAmbitioni  scripsisse iudicaretur. Cras mattis iudicium purus "
  );
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [text, setText] = useState(
    "The product is successfully added to the cart"
  );
  const handleClose = () => {
    setShow(false);
    history.push(`/loading${path}`);
  };
  const [book, setBook] = useState([]);

  const getBook = async () => {
    try {
      setLoading(true);
      const findBook = await API.get(`/book/${id}`);
      setBook(findBook.data.data.book);
      checkBook();

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const [cek, sett] = useState([]);
  const checkBook = async () => {
    try {
      const findBook = await API.get(`/checkBook/${id}`);
      sett(findBook.data.data.book);
    } catch (error) {
      console.log(error);
    }
  };
  let qty = 0;
  const [cart, setCart] = useState([]);
  const getCart = async () => {
    try {
      const carts = await API.get("/Cart");
      setCart(carts.data.data.carts);
    } catch (error) {
      console.log(error);
    }
  };

  const addCart = async () => {
    try {
      const body = JSON.stringify({
        bookId: id,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const check = await API.post("/addCart", body, config);
      if (check.data.status === "wait") {
        setText("Please wait 1 x 24 hours to verify your order");
        setShow(true);
      } else if (check.data.status === "error") {
        setText("Book already added to cart");
        setShow(true);
      } else {
        getCart();
        setShow(true);
        const item = await API.get("/getsum");

        if (item.data.status === "error") {
          const create = JSON.stringify({
            qty: 1,
            pay: book.price,
          });
          await API.post("/addsum", create, config);
        } else if (item.data.status === "success") {
          const data = item.data.data.sum;
          const edit = JSON.stringify({
            qty: data.qty + 1,
            pay: data.pay + book.price,
          });
          await API.patch("/editsum", edit, config);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBook();
    getCart();
  }, []);
  return (
    <div className="popularBook mt-5 ml-3 col-md-5">
      <Link to={`/detail/${id}`} as={Link} className="">
        <img
          src={`http://localhost:5000/uploads/${book.thumbnail}`}
          className="float-left  mr-2 pr-1 imgCover "
          alt=""
        />
      </Link>
      <div className="text-left ">
        <p className="title"> {book.title}</p>
        <p className="gray author">{book.author}</p>
        <p className="description ">{`${texta.substring(0, 100)}
        ...`}</p>
        <p className="price">Rp. {book.price}</p>
        <button className="tombol blackBtn btnCart" onClick={() => addCart()}>
          Add to Cart
        </button>
        {cek.map((Cek) => (
          <div className="" key={Cek.id}>
            <a
              href={`http://localhost:5000/uploads/${Cek.book.bookAttachment}`}
              className=""
              target="_blank"
            >
              <button className="tombol blackBtn btnCart2 ">Download</button>
            </a>
          </div>
        ))}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        className="pt-5 mt-5 fs-20 green avenir"
      >
        <Modal.Body className="center">{text}</Modal.Body>
      </Modal>
    </div>
  );
};
