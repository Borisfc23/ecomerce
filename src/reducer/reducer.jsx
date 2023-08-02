import products from "../assets/api/products-api.js";
export const initialState = {
  products: products,
  cart: window.localStorage.getItem("cart")
    ? JSON.parse(window.localStorage.getItem("cart"))
    : [],
};
export const actionType = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_ITEM_TO_CART: "REMOVE_ITEM_TO_CART",
  REMOVE_ONE_ITEM: "REMOVE_ONE_ITEM",
};
export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      let newItem = state.products.find(({ id }) => id == action.item.id);
      let itemInCart = state.cart.find(({ id }) => id == newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((el) =>
              el.id == newItem.id
                ? { ...el, quantity: action.item.quantity }
                : el
            ),
          }
        : {
            ...state,
            cart: [
              ...state.cart,
              { ...newItem, quantity: action.item.quantity },
            ],
          };
    case "REMOVE_ITEM_TO_CART":
      return { ...state, cart: state.cart.filter(({ id }) => id != action.id) };
    case "REMOVE_ONE_ITEM":
      let itemToDelete = state.cart.find(({ id }) => id == action.id);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id == action.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : { ...state, cart: state.cart.filter(({ id }) => id != action.id) };
    default:
      return state;
  }
}
