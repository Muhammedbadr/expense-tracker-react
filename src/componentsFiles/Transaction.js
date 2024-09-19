import {GlobalContext} from '../context/GlobsStat';
import React, { useContext } from "react";
// import {GlobalContext} from '../context/GlobsStat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';



export const Transaction = ({ transaction }) => {
  const { deleteTransactions } = useContext(GlobalContext)

  // Determine if the transaction is income or expense
  const sign = transaction.amount < 0 ? '-' : '+';
  const amountClass = transaction.amount < 0 ? 'text-red-500' : 'text-green-500';

  return (
    <li className="flex justify-between items-center py-2 border-t group">
      {/* Transaction Description */}
      <p className="text-gray-700 font-semibold text-base">{transaction.text}</p>

      {/* Transaction Amount and Delete Button */}
      <div className="flex items-center space-x-4 group">
  {/* Transaction Amount (smoothly move to the left on hover) */}
  <p className={`transform transition-transform duration-1000 ease-in-out ${amountClass} font-semibold group-hover:-translate-x-1`}>
    {sign}${Math.abs(transaction.amount)}
  </p>

  {/* Delete Button (smooth fade-in and scale effect on hover) */}
  <button 
    onClick={() => deleteTransactions(transaction.id)} 
    className="text-red-500 hover:text-red-700 font-bold text-xs opacity-0 scale-75 transition-all duration-500 ease-out hidden group-hover:block group-hover:opacity-100 group-hover:scale-100"
  >
    <FontAwesomeIcon icon={faXmark} />
  </button>
</div>








    </li>
  );
};
