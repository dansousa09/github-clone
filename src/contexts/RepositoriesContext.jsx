import { createContext, useContext, useReducer } from "react";
import INITIAL_DATA from "./initialData";

const RepoContext = createContext(undefined);

const repoReducer = (state, action) => {
  switch (action.type) {
    case setLogin:
      return { ...state, login: action.payload };
    default:
      return { ...state };
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(repoReducer, INITIAL_DATA);
  const value = { state, dispatch };

  return <RepoContext.Provider value={value}>{children}</RepoContext.Provider>;
};

export const useRepo = () => {
  const context = useContext(RepoContext);
  if (context === undefined) {
    throw new Error("O hook useRepo deve estar contido dentro do RepoContext");
  }
  return context;
};
