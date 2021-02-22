import React from "react";
import { Book1 } from "./Book1";
import { Book2 } from "./Book2";
import { Book3 } from "./Book3";

export const PromoteBook = () => {
  return (
    <div className="row">
      <Book1 />
      <Book2 />
      <Book3 />
    </div>
  );
};
