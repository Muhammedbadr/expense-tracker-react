import React from "react";
import "./AnimatedButton.css"; // Import your custom CSS file

export const TextFooters = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 space-y-2 sm:space-y-0">
        <p className="text-zinc-400">&copy; 2024 Expense Tracker. All rights reserved.</p>
        
        <div className="flex items-center">
          <p className="pr-2 text-zinc-400">Developed by</p>
          <a href="https://github.com/Muhammedbadr" className="text-blue-500 hover:underline font-semibold">
            Mukhammad Badr
          </a>
        </div>
      </div>
    </div>
  );
  
  
};
