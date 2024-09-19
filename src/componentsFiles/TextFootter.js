import React from "react";
import "./AnimatedButton.css"; // Import your custom CSS file

export const TextFootter = () => {
  return (
    <div className="mt-1 footer">

      <div className=" flex items-center justify-center space-x-1">
        <p className="text-sm text-gray-500">Developed by</p>
        <a href="https://github.com/Muhammedbadr" className="text-blue-500 hover:underline">
          Mukhammad Badr
        </a>
      </div>
    </div>
  );
};
