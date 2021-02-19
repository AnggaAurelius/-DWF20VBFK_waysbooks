import React from "react";
import attach from "./AttacheTransaction.png";
import trash from "./trash.png";
import buku1 from "../LandingPage/buku1.png";
import { API } from "../../config/axios";
import Navbar from "../../component/Navbar";

export const Cart = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mCart text-left">
        <p className="timesNew fs-25 mb-4">My Cart</p>
        <div className="row">
          <div className="order fs-18 ml-3">
            Review Your Order
            <hr className="line2 mr-5" />
            <div className="row mb-5">
              <img src={buku1} alt="" className="imgOrder" />
              <div className=" ml-1 detailOr">
                <p className="timesNew fs-25">
                  Title Title Title Title Title Title Title
                </p>
                <p className=" gray authorOr">Author</p>
                <p className="priceOr">Rp. 10000</p>
              </div>
              <img src={trash} alt="" className="trash" />
            </div>
          </div>
          <div className="subTotal">
            <hr className="line2 mt-5" />
            <div className="row ml-1">
              <p>Subtotal</p>
              <p className="total">Rp. 10000</p>
            </div>
            <div className="row ml-1">
              <p>Qty</p>
              <p className="total">23</p>
            </div>
            <hr className="line2 mb-3" />
            <div className="row ml-1">
              <p>Total</p>
              <p className="total">Rp. 10000</p>
            </div>
            <div className=" ml-1">
              <img src={attach} alt="" className="float-right mt-5" />
              <button className="float-right blackBtn pay">Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
