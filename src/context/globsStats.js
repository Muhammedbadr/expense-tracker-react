import React , {createContext , useReducer} from "react";

const initailState = {
    transactions:
    [
        { id: 1, text: 'Rent', amount: -1000 },
        { id: 2, text: 'Groceries', amount: -200 },
        { id: 3, text: 'Salary', amount: 5000 },
        { id: 4, text: 'Eating out', amount: -300 },
        { id: 5, text: 'Phone bill', amount: -500 }
    ]
}

export const GlobalContext = createContext(initailState)
export const GlobalProvider = ({childern})=>{
}