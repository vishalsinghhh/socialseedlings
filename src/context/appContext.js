"use client";

import React, { useReducer, useContext } from "react";

import reducer from "./reducer";
import axios from "axios";

import {
  CHANGE_MODE,
  GET_RANDOM_PHOTO_BEGIN,
  GET_RANDOM_PHOTO_SUCCESS,
  GET_RANDOM_PHOTO_ERROR,
  GET_USER_INFO_BEGIN,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  GET_USER_PHOTOS_BEGIN,
  GET_USER_PHOTOS_SUCCESS,
  GET_USER_PHOTOS_ERROR,
} from "./actions";

const initialState = {
  mode: "dark",
  randomPhotos: [],
  isLoading: false,
  isUserLoading: false,
  isUserPhotosLoading: false,
  userInfo: null,
  userPhotos: null,
  alertMsg: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changeTheme = (value) => {
    dispatch({ type: CHANGE_MODE, payload: { value } });
  };

  const getRandomPhoto = async () => {
    dispatch({ type: GET_RANDOM_PHOTO_BEGIN });
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      dispatch({
        type: GET_RANDOM_PHOTO_SUCCESS,
        payload: { data: response.data },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_RANDOM_PHOTO_ERROR,
        payload: {
          msg: "Too many requests or check your internet connection!!!",
        },
      });
    }
  };

  const getUserInfo = async (userName) => {
    if (!userName) {
      dispatch({
        type: GET_USER_INFO_ERROR,
        payload: {
          msg: "Too many requests or check your internet connection!!!",
        },
      });
      return;
    }
    dispatch({ type: GET_USER_INFO_BEGIN });
    try {
      const response = await axios.get(
        `https://api.unsplash.com/users/${userName}?client_id=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      dispatch({
        type: GET_USER_INFO_SUCCESS,
        payload: { data: response.data },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_USER_INFO_ERROR,
        payload: {
          msg: "Too many requests or check your internet connection!!!",
        },
      });
    }
  };

  const getUserPhotos = async (userName) => {
    dispatch({ type: GET_USER_PHOTOS_BEGIN });
    try {
      const response = await axios.get(
        `https://api.unsplash.com/users/${userName}/photos?client_id=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      dispatch({
        type: GET_USER_PHOTOS_SUCCESS,
        payload: { data: response.data },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_USER_PHOTOS_ERROR,
        payload: {
          msg: "Too many requests or check your internet connection!!!",
        },
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeTheme,
        getRandomPhoto,
        getUserInfo,
        getUserPhotos,
      }}
    >
      <div className={`theme ${state.mode}`}>{children}</div>
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
