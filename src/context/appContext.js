"use client";

import React, { useReducer, useContext } from "react";

import reducer from "./reducer";
import axios from "axios";

import {
  CHANGE_MODE,
  GET_RANDOM_PHOTO_BEGIN,
  GET_RANDOM_PHOTO_SUCCESS,
  GET_RANDOM_PHOTO_ERROR,
} from "./actions";

const initialState = {
  mode: "dark",
  randomPhotos: [],
  isLoading:false
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changeTheme = (value) => {
    dispatch({ type: CHANGE_MODE, payload: { value } });
  };

  const getRandomPhoto = async () => {
    dispatch({type:GET_RANDOM_PHOTO_BEGIN})
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=PqcxMW7xPwxnAHzrui4FRkUcZA4U6KFi8PCNTvsWawo`
      );
      dispatch({type:GET_RANDOM_PHOTO_SUCCESS, payload:{data:response.data}})
    } catch (error) {
      console.log(error);
      dispatch({
          type:GET_RANDOM_PHOTO_ERROR,
          payload:{msg:'Oops! Something went wrong'}
      })
    }
  };

  return (
    <AppContext.Provider value={{ ...state, changeTheme, getRandomPhoto }}>
      <div className={`theme ${state.mode}`}>{children}</div>
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
