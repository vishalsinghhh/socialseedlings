"use client"

import React, {useReducer, useContext} from "react"

import reducer from "./reducer"
import axios from "axios"

import {CHANGE_MODE} from "./actions"

const initialState = {
    mode:"dark"
}

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
};
  
export { AppProvider, initialState, useAppContext };
