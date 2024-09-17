import React from "react";

export const History = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl text-[#142d45] font-bold">History</h3>
        <p className="text-blue-500 cursor-pointer hover:underline">See all</p>
      </div>

      {/* History List */}
      <ul className="space-y-2">
        {/* Single History Item */}
        <li className="flex justify-between items-center py-2 border-b">
          <p className="text-gray-700 font-semibold text-base">Market</p>
          <p className="text-green-500 font-semibold">+ $0</p>
        </li>
        {/* Additional history items can be added here */}
      </ul>
    </div>
  );
};
