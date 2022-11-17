// import React, { createContext, useReducer } from "react";

// export const productContext = createContext();

// // ! INIT_STATE -начальное состояние. State-измененное состояние. Dispatch - это то, через что будет передаваться action
// const INIT_STATE = {
//   todos: [],
// };

// const reducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case "GET_TODOS":
//       return { ...state, todos: action.payload };
//     default:
//       return state;
//   }
// };

// const ProductContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);
//   return <productContextProvider>{children}</productContextProvider>;
// };

// export default ProductContextProvider;
