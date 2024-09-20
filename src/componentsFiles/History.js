import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const History = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-0 border-b pb-3">
        <h3 className="text-base md:text-xl text-[#142d45] font-bold">History</h3>
        <p className="text-blue-500 cursor-pointer hover:underline">See all</p>
      </div>
      {/* Conditionally render the "Empty Yet" message */}
      {transactions.length === 0 && (
        <div className="text-gray-400 font-normal py-4 text-center">
          Empty Yet
        </div>
      )}
      {/* History List */}
      <ul className={`space-y-2 ${transactions.length === 0 ? 'hidden' : ''}`}>
        {transactions.map(transaction => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ul>
    </div>
  );
};
