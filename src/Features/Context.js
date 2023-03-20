import React, { useState, useContext, useReducer, useEffect } from "react";

import reducer from "../reducers/reducer";

// import the data
import cardItems from "../data";
// create a AppContext
const AppContext = React.createContext();
// create a AppProvider function - which send value to All the Components

const initialState = {
  card: cardItems,
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  // const [card, setCard] = useState(cardItems);

  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCard = () => {
    dispatch({ type: "CLEAR_CARD" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTALS" });
  }, [state.card]);
  return (
    <AppContext.Provider
      value={{ ...state, clearCard, remove, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  );
};
// consumer function
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
