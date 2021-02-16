import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  isLogin: false,
  isAdmin: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUKSES":
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        isLogin: true,
        user: {
          email: action.payload.email,
          fullName: action.payload.fullName,
        },
      };
    case "ADMIN":
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        isAdmin: true,
        user: {
          emaill: action.payload.email,
          fullName: action.payload.fullName,
        },
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};
