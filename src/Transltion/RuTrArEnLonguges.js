// import React from "react";
// import { Header } from './componentsFiles/Header';
// import { IncomeExpensive } from './componentsFiles/IncomeExpensive'; // Ensure case matches the file name
// import { Title } from './componentsFiles/Title';
// import { History } from './componentsFiles/History';
// import { NewTransaction } from './componentsFiles/NewTransaction';
// import { TextFootter } from './componentsFiles/TextFootter';
// import { GlobalProvider } from './context/GlobsStat'; // Ensure the correct file name is used

// // Import the necessary components
// export const translations = () => {
//     function toggleDirection(lang) {
//         localStorage.setItem('languageDirection', lang);
    
          
//             // Translate text
//             document.getElementById('yourCard').innerText = translations[lang].addToCart;
//             document.getElementById('title').innerText = translations[lang].desserts;
//             const elements1 = document.querySelectorAll('#addcard');
//             elements1.forEach(element => {
//                 element.innerText = translations[lang].addToCart;
//             });
//             const elements2 = document.querySelectorAll('#Baklava');
//             elements2.forEach(element => {
//                 element.innerText = translations[lang].baklava;
//             });
//             document.getElementById('brownie').innerText = translations[lang].brownie;
//             document.getElementById('brownies').innerText = translations[lang].brownies;
//             document.getElementById('cake').innerText = translations[lang].cake;
//             document.getElementById('cake2').innerText = translations[lang].cake2;
//             document.getElementById('cremebrulee').innerText = translations[lang].cremeBrulee;
//             document.getElementById('cremebrulee2').innerText = translations[lang].cremeBrulee2;
//             document.getElementById('macaron').innerText = translations[lang].macaron;
//             document.getElementById('macaron2').innerText = translations[lang].macaron2;
//             document.getElementById('pannaCotta').innerText = translations[lang].pannaCotta;
//             document.getElementById('pannaCotta2').innerText = translations[lang].pannaCotta;
//             document.getElementById("waffle").innerHTML = translations[lang].waffle;
//             document.getElementById("waffle2").innerHTML = translations[lang].waffle2;
//             document.getElementById("Tiramisu").innerHTML = translations[lang].tiramisu;
//             document.getElementById("Tiramisu2").innerHTML = translations[lang].tiramisu;
//             document.getElementById("textEmtpy").innerHTML = translations[lang].yourAddedItems;
//             document.getElementById("ordertext").innerHTML = translations[lang].orderTotal;
//             document.getElementById("btncarbon").innerHTML = translations[lang].carbonNeutralOrder;
//             document.getElementById("checkout-button").innerHTML = translations[lang].payNow;
//             document.getElementById("about").innerHTML = translations[lang].aboutUs;
//             document.getElementById("help").innerHTML = translations[lang].getHelp;
//             document.getElementById("Language").innerHTML = translations[lang].Languages;
//             document.getElementById("follows").innerHTML = translations[lang].followUs;
//     if (lang === 'ar') {
//         document.body.classList.add('rtl');
//         document.body.classList.add('md:text-right');
//         document.body.classList.remove('md:text-left');
//     } else {
//         document.body.classList.remove('rtl');
//         document.body.classList.remove('md:text-right');
//         document.body.classList.add('md:text-left');
//     }
//     }
//     // return(

//     // )
// }