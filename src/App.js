import './App.css';
import React from 'react';
import './index.css'; // Ensure Tailwind is imported
import { Header } from './componentsFiles/Header';
import { IncomeExpensive } from './componentsFiles/IncomeExpensive'; // Ensure case matches the file name
import { Title } from './componentsFiles/Title';
import { History } from './componentsFiles/History';
import { NewTransaction } from './componentsFiles/NewTransaction';
import { TextFootter } from './componentsFiles/TextFootter';
import { GlobalProvider } from './context/GlobsStat'; // Ensure the correct file name is used

function App() {
  return (
    <GlobalProvider>
      <div className="w-full font-sans flex justify-center p-2 items-center flex-col">
        <div className="w-full max-w-xl">
          
          {/* Title Section */}
          <div className=" mb-4">
            <Title />
          </div>

          {/* Income and Expense Section */}
          <div className="bg-gradient-to-r from-[#103c66] to-teal-500 bg-transparent bg-clip text-white rounded-2xl p-4 shadow-lg h-[200px] flex flex-col justify-between mb-4">
            <Header />
            <IncomeExpensive />
          </div>

          {/* History Section */}
          <div className="bg-white p-4 rounded-2xl shadow-md mb-4">
            <History />
          </div>

          {/* New Transaction Section */}
          <div className="bg-white p-4 rounded-2xl shadow-md mb-2">
            <NewTransaction />
          </div>

          {/* Add Button */}
          <div className="mt-1 rounded-2xl focus:ring focus:ring-blue-300">
            <TextFootter/>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
