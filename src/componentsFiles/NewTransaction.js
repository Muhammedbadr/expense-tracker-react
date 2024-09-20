import React, { useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
import './AnimatedButton.css';

export const NewTransaction = () => {
  const { addTransactions } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (!text || !amount) {
      alert("Please enter text and amount!");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: parseFloat(amount) // Ensure amount is a number
    };

    addTransactions(newTransaction);
    setText("");
    setAmount("");
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;

    // This regex allows:
    // - An optional '+' or '-' at the beginning
    // - Digits
    // - An optional decimal point and digits after it
    if (/^[-+]?\d*\.?\d*$/.test(value)) {
      setAmount(value); // Only update if the value is valid
    }
  };

  return (
    <>
      <div>
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-lg md:text-xl text-[#142d45] font-bold">Add New Transaction</h3>
        </div>

        {/* Form Inputs */}
        <form onSubmit={onSubmit}>
          {/* Transaction Text */}
          <label htmlFor="text" className="block text-sm font-medium text-gray-700">
            Text
          </label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border-2 border-gray-300 p-2 w-full rounded-md mt-1 
                       focus:outline-none focus:ring-0 focus:border-gradient"
            placeholder="Enter transaction text"
          />

          {/* Amount */}
          <label htmlFor="amount" className="block mt-4 text-sm font-medium text-gray-700">
            Amount <br />
            <span className="text-sm text-gray-500">(negative - expense, positive - income)</span>
          </label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="border-2 border-gray-300 p-2 w-full rounded-md mt-1 
                       focus:outline-none focus:ring-0 focus:border-gradient "
            placeholder="Enter amount"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 gradient-button text-white py-2 px-4 rounded-lg shadow-md w-full"
          >
            Add Transaction
          </button>
        </form>
      </div>
    </>
  );
};
