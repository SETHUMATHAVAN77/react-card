import CardItem from "../components/CardItem";

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CARD":
      return { ...state, card: [] };
    case "REMOVE_ITEM":
      return {
        ...state,
        card: state.card.filter((CardItem) => CardItem.id !== action.payload),
      };
    case "INCREASE":
      // const itemToIncrease = state.card.find(
      //   (item) => item.id === action.payload
      // );

      // state.card = state.card.map((item) => {
      //   if (itemToIncrease.id === item.id) {
      //     item.amount += 1;
      //   } else {
      //     return { item };
      //   }
      // });

      let incTempCard = state.card.map((cardItem) => {
        if (cardItem.id === action.payload) {
          return { ...cardItem, amount: cardItem.amount + 1 };
        }
        return cardItem;
      });
      return { ...state, card: incTempCard };
    case "DECREASE":
      let decTempCard = state.card
        .map((cardItem) => {
          if (cardItem.id === action.payload) {
            return {
              ...cardItem,
              amount: cardItem.amount - 1,
            };
          }
          return cardItem;
        })
        .filter((cardItem) => cardItem.amount !== 0);
      return {
        ...state,
        card: decTempCard,
      };

    case "CALCULATE_TOTALS":
      // let result = state.card.reduce((acc, cardItem) => {
      //   const { price, amount } = cardItem;
      //   const itemTotal = price * amount;

      //   acc.total += itemTotal;
      //   acc.amount += amount;
      //   return acc;
      // });
      // const { amount, total } = state.card.reduce((acc, cardItem) => {
      //   const itemTotal = cardItem.price * cardItem.amount;
      //   acc.amount = acc.amount + cardItem.amount;
      //   acc.total = acc.total + itemTotal;

      //   return acc;
      // });

      // return { ...state, total, amount };

      let { total, amount } = state.card.reduce(
        (cardTotal, cardItem) => {
          const { price, amount } = cardItem;
          const itemTotal = price * amount;

          cardTotal.total += itemTotal;
          cardTotal.amount += amount;
          return cardTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    default:
      return state;
  }
};

export default reducer;
