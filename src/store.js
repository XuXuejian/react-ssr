import { createStore, combineReducers } from "redux";

export const btnAction = (payload) => ({ payload, type: "btnAction" });

const initialState = {
  btn: {
    clicked: false,
    data: null,
  },
};
const btnReducer = (state = initialState, action) => {
  switch (action.type) {
    case "btnAction":
      return {
        ...state,
        btn: {
          clicked: true,
          data: action.payload,
        },
      };
    default:
      return state;
  }
};

export const reducer = combineReducers({
  test: btnReducer,
});
