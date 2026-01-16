import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

// Load cart from localStorage
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || []
};

// Reducer (Redux-style)
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const exist = state.cart.find(item => item.id === action.payload.id);

      if (exist) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }]
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case "UPDATE_QTY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        )
      };

    case "CLEAR":
      return { cart: [] };

    default:
      return state;
  }
};

// Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => useContext(CartContext);
