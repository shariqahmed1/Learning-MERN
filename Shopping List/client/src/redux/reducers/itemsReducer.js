import {
  ADD_ITEM,
  GET_ITEMS,
  DELETE_ITEM,
  ITEMS_LOADING,
} from '../actions/types';
const INITIAL_STATE = {
  items: [],
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: [...action.payload, ...state.items],
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload),
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      }
    case ITEMS_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state;
  }
};