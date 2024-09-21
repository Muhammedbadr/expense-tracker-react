import React, { useContext } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Example icons
// import "./IncomeExpensive.css"; // Import your custom CSS file
import {GlobalContext} from '../context/GlobalState'
export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const income = amounts.filter(item => item > 0).reduce((acc, curr) => acc + curr, 0).toFixed(2);
  const expenses = ( amounts.filter(item => item < 0).reduce((acc, curr) => acc + curr, 0) * -1 ).toFixed(2);
  return (
    <div className="container">
      <div className="income-expense-wrapper flex justify-between">
        {/* Income Section */}
        <div className="">
          <div className="flex items-center gap-1 " >
          <div className=" p-1 rounded-full bg-slate-600">
            <FaArrowUp className="icon income-icon text-sm" /> {/* Income icon */}

            </div>
            <p className="label font-normal text-lg">Income</p>
          </div>
          <div>
            <p className="amount text-xl ">
              $<span>{income}</span>
            </p>
          </div>
        </div>

        {/* Expenses Section */}
        <div className="expense-section">
          <div className="flex items-center  gap-1">
            <div className=" p-1 rounded-full bg-slate-600">
            <FaArrowDown className="icon expense-icon text-sm" /> {/* Expenses icon */}
            </div>
            <p className="label font-normal text-lg">Expenses</p>
          </div>
          <div className="text-end">
            <p className="amount text-xl">
              $<span>{expenses}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
