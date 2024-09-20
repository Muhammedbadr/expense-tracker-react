import React,{useContext} from "react";
import {GlobalContext} from '../context/GlobalState'
// import translattoEn from'../Transltion/en/global'
// import translattoru from'../Transltion/ru/global'

export const Header = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts =transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc,item) => (acc+=item),0 ).toFixed(2)
  return (
    <>
      <div className="text-start mb-4">
        <h4 className="font-normal text-lg">Total Balance</h4>
        <h1 className="text-4xl font-normal  mt-1">${total}</h1>
      </div>
    </>
  );
};
