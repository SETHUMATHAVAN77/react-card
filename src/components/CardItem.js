import React from "react";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import { useGlobalContext } from "../Features/Context";
const CardItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <article className="card-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="price">${price}</h4>
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div className="arrow">
        <button className="amount-btn" onClick={() => increase(id)}>
          <FaArrowUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-down" onClick={() => decrease(id)}>
          <FaArrowDown />
        </button>
      </div>
    </article>
  );
};

export default CardItem;
