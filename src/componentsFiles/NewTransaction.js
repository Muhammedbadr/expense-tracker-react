import React, {useState} from "react";

export const NewTransaction = () => {
  const [text,setText] = useState("")
  const [Amount,setAmount] = useState(0)
  return (
    <>
      <div>
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl text-[#142d45] font-bold">Add New Transaction</h3>
        </div>

        {/* Form Inputs */}
        <div>
          {/* Transaction Text */}
          <label htmlFor="text" className="block text-sm font-medium text-gray-700">
            Text
          </label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border-2 border-gray-300 p-2 w-full rounded-md mt-1"
            placeholder="Enter transaction text"
          />

          {/* Amount */}
          <label htmlFor="amount" className="block mt-4 text-sm font-medium text-gray-700">
            Amount <br />
            <span className="text-sm text-gray-500">(negative - expense, positive - income)</span>
          </label>
          <input
            type="number"
            id="amount"
            value={Amount}
            onChange={(e) => setAmount(e.target.valueAsNumber)}
            className="border-2 border-gray-300 p-2 w-full rounded-md mt-1"
            placeholder="Enter amount"
          />
        </div>
      </div>
    </>
  );
};
