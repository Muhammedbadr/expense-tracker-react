// // src/context/TranslationContext.js
// import React, { createContext, useState, useContext } from 'react';

// const TranslationContext = createContext();

// export const TranslationProvider = ({ children }) => {
//   const [language, setLanguage] = useState('en');
// // 
//   const translations = {
//     en: {
//       addToCart: 'Add to Cart',
//       desserts: 'Desserts',
//       // Add other translations here
//     },
//     ar: {
//       addToCart: 'أضف إلى السلة',
//       desserts: 'الحلويات',
//       // Add other translations here
//     },
//     // Add other languages here
//   };

//   const translate = (key) => translations[language][key] || key;

//   return (
//     <TranslationContext.Provider value={{ translate, setLanguage }}>
//       {children}
//     </TranslationContext.Provider>
//   );
// };

// export const useTranslation = () => useContext(TranslationContext);
