import { createContext, useReducer, useEffect } from "react";

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  userNameState: localStorage.getItem("userNameState") || "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        userNameState: action.payload.userNameState,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        userNameState: "",
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
    localStorage.setItem("userNameState", state.userNameState);
  }, [state.isLoggedIn, state.userNameState]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
