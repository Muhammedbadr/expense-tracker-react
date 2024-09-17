import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Example icons
// import "./IncomeExpensive.css"; // Import your custom CSS file

export const IncomeExpensive = () => {
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
            <p className="amount text-xl">
              $<span>0</span>
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
              $<span>0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
