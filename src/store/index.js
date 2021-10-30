import { createStore } from "redux";

const INITIAL_DATA = {
  userData: ["u", "s"],
  repos: ["r", "e"],
};

const getData = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case "GET_USERDATA":
      return { ...state, userData: action.payload };
    case "GET_REPOS":
      return { ...state, repos: action.payload };
    default:
      return state;
  }
};

const store = createStore(getData);

export default store;
