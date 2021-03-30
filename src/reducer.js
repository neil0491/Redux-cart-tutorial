import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REOMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from "./action";
import cartItems from "./cart-items";

// initialState
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

// reducer
function reducer(state = initialStore, action) {
  switch (action.type) {
    case DECREASE:
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });

      return { ...state, cart: tempCart };
    case INCREASE:
      let tempCart1 = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart1 };
    case CLEAR_CART:
      return { ...state, cart: [] };
    case REOMOVE:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case GET_TOTALS: {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          let { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      // total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    }

    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.toggle === "inc") {
              return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
            }
            if (action.payload.toggle === "dec") {
              return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
            }
          }
          return cartItem;
        }),
      };
    default:
      return state;
  }
}

export default reducer;
