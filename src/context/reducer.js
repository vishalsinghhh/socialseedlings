import {
  CHANGE_MODE,
  GET_RANDOM_PHOTO_BEGIN,
  GET_RANDOM_PHOTO_SUCCESS,
  GET_RANDOM_PHOTO_ERROR,
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
};

export default reducer;
