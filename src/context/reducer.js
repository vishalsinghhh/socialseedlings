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

const reducer = (state, action) => {
  if (action.type === CHANGE_MODE) {
    return {
      ...state,
      mode: action.payload.value,
    };
  }
  if (action.type === GET_RANDOM_PHOTO_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_RANDOM_PHOTO_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      randomPhotos:[...state.randomPhotos, action.payload.data]
    };
  }
  if (action.type === GET_RANDOM_PHOTO_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === GET_USER_INFO_BEGIN) {
    return {
      ...state,
      isUserLoading: true,
    };
  }
  if (action.type === GET_USER_INFO_SUCCESS) {
    return {
      ...state,
      isUserLoading: false,
      userInfo:action.payload.data
    };
  }
  if (action.type === GET_USER_INFO_ERROR) {
    return {
      ...state,
      isUserLoading: false,
    };
  }
  if (action.type === GET_USER_PHOTOS_BEGIN) {
    return {
      ...state,
      isUserPhotosLoading: true,
    };
  }
  if (action.type === GET_USER_PHOTOS_SUCCESS) {
    return {
      ...state,
      isUserPhotosLoading: false,
      userPhotos:action.payload.data
    };
  }
  if (action.type === GET_USER_PHOTOS_ERROR) {
    return {
      ...state,
      isUserPhotosLoading: false,
    };
  }
};

export default reducer;
