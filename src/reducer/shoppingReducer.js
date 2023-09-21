import { TYPES } from "@/actions/shoppingActions";

/* Estado inicial useReducer */
export const shoppingInitialState = {
  products: [
    {
      id: 1,
      imageSource: "/images/marcosAurelio.jpg",
      title: "Meditaciones",
      price: 3000,
    },
    {
      id: 2,
      imageSource: "/images/filonDeAlejandria.jpg",
      title: "Todo hombre bueno es libre",
      price: 4720,
    },
    {
      id: 3,
      imageSource: "/images/seneca.jpg",
      title: "Cartas de un estoico",
      price: 3350,
    },
    {
      id: 4,
      imageSource: "/images/epicteto.jpg",
      title: "Equiridion",
      price: 3800,
    },
  ],
  cart: [],
};

/* Definición del useReducer */
export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const newItem = state.products.find(
        (product) => product.id === action.payload
      );
      const itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_PRODUCT: {
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload
      );
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemToDelete.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== itemToDelete.id),
          };
    }
    case TYPES.REMOVE_ALL_PRODUCT: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return shoppingInitialState;
    }
    default:
      return state;
  }
}
