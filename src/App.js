import './App.css';
import React from 'react';
import './index.css'; // Ensure Tailwind is imported
import { Header } from './componentsFiles/Header';
import { IncomeExpensive } from './componentsFiles/incomeExpensive';
import { Title } from './componentsFiles/Title';
import { History } from './componentsFiles/History';
import { NewTransaction } from './componentsFiles/NewTransaction';
import { AddButton } from './componentsFiles/AddButton';

function App() {
  return (
    <div className="w-full font-sans flex justify-center p-2 items-center flex-col">
      <div className="w-full max-w-xl">
        
        {/* Title Section */}
        <div className="text-center mb-4">
          <Title />
        </div>

        {/* Income and Expense Section */}
        <div className="bg-[#142d45] text-white rounded-2xl p-4 shadow-lg h-[200px] flex flex-col justify-between mb-4">
          <Header />
          <IncomeExpensive />
        </div>

        {/* History Section */}
        <div className="bg-white p-4 rounded-2xl shadow-md mb-4">
          <History />
        </div>

        {/* New Transaction Section */}
        <div className="bg-white p-4 rounded-2xl shadow-md mb-4">
          <NewTransaction />
        </div>

        {/* Add Button */}
        <div className="mt-4 rounded-2xl shadow-md">
          <AddButton />
        </div>

      </div>
    </div>
  );
}

export default App;
