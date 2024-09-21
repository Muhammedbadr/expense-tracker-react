// App.js
import './App.css';
import React from 'react';
import './index.css'; // Ensure Tailwind is imported
import { Header } from './componentsFiles/Header';
import { IncomeExpense } from './componentsFiles/IncomeExpense';

import { Title } from './componentsFiles/Title';
import { History } from './componentsFiles/History';
import { NewTransaction } from './componentsFiles/NewTransaction';
import { TextFooters } from './componentsFiles/TextFooters'; // Ensure correct name
import { GlobalProvider } from './context/GlobalState'; // Ensure the correct file name is used

function App() {
  return (
    <GlobalProvider>
      <div className="w-full font-sans flex justify-center p-2 items-center flex-col">
        <div className="w-full max-w-xl">
          {/* Title Section */}
          <div className="mb-4">
            <Title />
          </div>

          {/* Income and Expense Section */}
          <div className="bg-gradient-to-r from-[#103c66] to-teal-500 text-white rounded-2xl p-4 shadow-lg h-[200px] flex flex-col justify-between mb-4">
            <Header />
            <IncomeExpense />
          </div>

          {/* History Section */}
          <div className="bg-white p-4 rounded-2xl shadow-md mb-4">
            <History />
          </div>

          {/* New Transaction Section */}
          <div className="bg-white p-4 rounded-2xl shadow-md mb-1">
            <NewTransaction />
          </div>

          {/* Footer Section */}
          <div className="rounded-2xl focus:ring focus:ring-blue-300">
            <TextFooters />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
