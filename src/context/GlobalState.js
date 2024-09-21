import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer"; // Ensure AppReducer is correctly implemented

// Initialize transactions from localStorage if they exist, or default to an empty array
const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || []
};

// Create the context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Sync state with localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  // Actions
  function deleteTransactions(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function addTransactions(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
