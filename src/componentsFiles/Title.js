import React, { useState, useRef, useEffect } from "react";
import SaudiArabiaFlag from '../ImageApp/saudi-arabia.png';
import USFlag from '../ImageApp/united-states.png';
import TrFlag from '../ImageApp/turkey.png';
import RuFlag from '../ImageApp/russia.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Alert, Snackbar } from '@mui/material';  // Import Alert and Snackbar

export const Title = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false); // State to manage the alert visibility
  const dropdownRef = useRef(null);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
    setAlertOpen(true); // Show alert when a language is clicked
  };

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close alert after some time or manually
  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  // Flag and label mapping based on the selected language
  const flagMapping = {
    en: { img: USFlag, label: "En" },
    ar: { img: SaudiArabiaFlag, label: "Ar" },
    tr: { img: TrFlag, label: "Tr" },
    ru: { img: RuFlag, label: "Ru" }
  };

  return (
    <div className="flex justify-between  items-center my-4 px-2">
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#142d45] bg-gradient-to-r from-[#103c66] to-teal-400 text-transparent bg-clip-text    transition-transform duration-300 ease-in-out">
  Expense Tracker
</h2>


      <div className="relative inline-block text-left" ref={dropdownRef}>
        <div
          className="flex items-center px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={flagMapping[selectedLanguage].img}
            alt={flagMapping[selectedLanguage].label}
            className="w-5 h-5 mr-2"
          />
          <span className="text-md font-medium">
            {flagMapping[selectedLanguage].label}
          </span>
          <FontAwesomeIcon icon={faChevronDown} className="ml-3 text-xs" />
        </div>

        {isOpen && (
          <div className="absolute mt-1 w-[100%] bg-white border border-gray-300 rounded-md shadow-lg">
            <div
              className="flex items-center hover:rounded-t-md px-2 py-1 hover:bg-gray-100 cursor-pointer transition ease-in-out duration-150"
              onClick={() => handleLanguageChange("en")}
            >
              <img src={USFlag} alt="En" className="w-5 h-5 mr-2" />
              <span className="text-md">En</span>
            </div>
            <div
              className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer transition ease-in-out duration-150"
              onClick={() => handleLanguageChange("ar")}
            >
              <img src={SaudiArabiaFlag} alt="Ar" className="w-5 h-5 mr-2" />
              <span className="text-md">Ar</span>
            </div>
            <div
              className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer transition ease-in-out duration-150"
              onClick={() => handleLanguageChange("tr")}
            >
              <img src={TrFlag} alt="Tr" className="w-5 h-5 mr-2" />
              <span className="text-md">Tr</span>
            </div>
            <div
              className="flex items-center px-2 py-1 hover:rounded-b-md hover:bg-gray-100 cursor-pointer transition ease-in-out duration-150"
              onClick={() => handleLanguageChange("ru")}
            >
              <img src={RuFlag} alt="Ru" className="w-5 h-5 mr-2" />
              <span className="text-md">Ru</span>
            </div>
          </div>
        )}
      </div>

      {/* Alert component */}
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="warning" sx={{ width: '100%' }}>
        This part is not complete yet.
        </Alert>
      </Snackbar>
    </div>
  );
};
