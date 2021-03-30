export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REOMOVE = "REOMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";

export const removeItem = (id) => ({ type: REOMOVE, payload: { id } });
export const increase = (id) => ({ type: INCREASE, payload: { id } });
export const decrease = (id, amount) => ({ type: DECREASE, payload: { id, amount } });
export const toggle = (id) => ({type: TOGGLE_AMOUNT, payload: {id, toggle}});
