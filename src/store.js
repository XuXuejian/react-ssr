import { createStore, combineReducers } from "redux";

export const btnAction = (payload) => ({ payload, type: "btnAction" });
export const jobAction = (payload) => ({ payload, type: "jobAction" });
export const asyncJobAction = (payload) => (dispatch) => {
  return fetch(
    "https://cnodejs.org/api/v1/topics?page=1&tab=job&limit=10&mdrender=false"
  )
    .then((res) => res.json())
    .then(({ data }) => {
      dispatch(jobAction(data));
    });
};
export const asyncAction = (payload) => (dispatch) => {
  console.log(dispatch);
  return new Promise((resolve, reject) => {
    if (payload > 0.5) {
      dispatch({ type: "shabi is found" });
      resolve("成功了");
    } else {
      dispatch({ type: "shabi is gone" });
      reject("失败了");
    }
  });
};

const initialState = {
  btn: {
    clicked: false,
    data: null,
  },
  jobList: [],
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
    case "jobAction":
      return {
        ...state,
        jobList: action.payload,
      };
    default:
      return state;
  }
};

export const reducer = combineReducers({
  test: btnReducer,
});
