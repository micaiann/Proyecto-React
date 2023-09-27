import { createContext, useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "@/reducer/shoppingReducer";

//Paso 1 - Crear el contexto
export const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {

  //Paso 2 - Definir props a exportar
  /*** Uso de useReducer ***/
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  //Paso 3 - Proveer el contexto
  const data = [state, dispatch];
  return <BooksContext.Provider value={data}>{children}</BooksContext.Provider>;
};

export default BooksContextProvider;
