"use client";

import React, { useReducer, useContext } from "react";

import reducer from "./reducer";
import axios from "axios";

import { CHANGE_MODE } from "./actions";

const initialState = {
  mode: "dark",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changeTheme = (value) => {
    dispatch({ type: CHANGE_MODE, payload: { value } });
  };

  return (
    <AppContext.Provider value={{ ...state, changeTheme }}>
      <div className={`theme ${state.mode}`}>{children}</div>
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
