import React, { useState, useEffect } from "react";
import "./table.css";
import aksi from "./aksi.png";
import { API } from "../../../config/axios";
import { Button, Modal } from "react-bootstrap";
import Navbar from "../../../component/Navbar";

export const List = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [image, setImg] = useState("");
  const handleShow = (img) => {
    setImg(img);
    setShow(true);
  };
  let no = 1;
  const [loading, setLoading] = useState(true);
  const [transactions, serTransactions] = useState([]);
  const getTransaction = async () => {
    try {
      setLoading(true);
      const transactions = await API.get("/transactions");
      setLoading(false);
      serTransactions(transactions.data.data.transactions);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTransaction();
  }, []);

  const payment = async (id, action) => {
    try {
      const body = JSON.stringify({
        paymentStatus: action,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      setLoading(true);

      await API.patch(`/transaction/${id}`, body, config);

      setLoading(false);

      getTransaction();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bgt minBG">
      <Navbar />
      <div className="mlr ">
        <h1 className="mbot timesNew">Incoming Transaction</h1>
        <table className="w00 content-table ">
          <thead>
            <tr className="red">
              <th scope="co">No</th>
              <th scope="col">Name</th>
              <th scope="col">Evidence of Transfer</th>
              <th scope="col">Product Purchased</th>
              <th scope="col">Total Payment</th>
              <th scope="col">Status Payment</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((Transaction) => (
              <tr key={Transaction.id}>
                <th scope="row">{no++}</th>
                <td>{Transaction.users.fullName}</td>
                <td>
                  <Button
                    className="ml-3"
                    variant="success"
                    onClick={() => handleShow(Transaction.transferProof)}
                  >
                    Image
                  </Button>
                </td>
                <td>{Transaction.remainingActive}</td>
                <td
                  className={`${
                    Transaction.userStatus === "active" ? "approve" : "red"
                  }`}
                >
                  {Transaction.userStatus}
                </td>
                <td
                  className={`${
                    Transaction.paymentStatus === "Approve"
                      ? "approve"
                      : Transaction.paymentStatus === "Cancel"
                      ? "red"
                      : "text-warning"
                  }`}
                >
                  {Transaction.paymentStatus}
                </td>
                <td>
                  <div className="dropdown aksi">
                    <img className="" src={aksi} alt="" />
                    <div className="dropdown-content">
                      <div className="">
                        <p
                          className="approve bold center "
                          onClick={() => payment(Transaction.id, "Approve")}
                        >
                          Approved
                        </p>
                      </div>
                      <div className="">
                        <p
                          className="red bold center"
                          onClick={() => payment(Transaction.id, "Cancel")}
                        >
                          Cancel
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="center">
            <img
              src={`http://localhost:5000/uploads/${image}`}
              className=" trsfProof"
              alt=""
            />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default List;
