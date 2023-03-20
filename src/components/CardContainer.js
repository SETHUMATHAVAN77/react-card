import React from "react";

import CardItem from "./CardItem";

import { useGlobalContext } from "../Features/Context";

const CardContainer = () => {
  const { card, clearCard, total } = useGlobalContext();
  if (card.length == 0) {
    return (
      <section className="card">
        <header>
          <h2>Your Cart</h2>
          <h4 className="empty-card">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="card">
      <header>
        <h2>Your Cart</h2>
      </header>
      <div>
        {card.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="card-total">
          <h4>
            total <span>${total}.00</span>
          </h4>
        </div>
        <button type="button" className="clear-btn" onClick={clearCard}>
          ClearCart
        </button>
      </footer>
    </section>
  );
};

export default CardContainer;
