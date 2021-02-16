import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
        isLogin: false,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "LOGIN_SUKSES" :
                return {
                    ...state,
                    isLogin: true,
                };
            case "LOGOUT" :
                return {
                    ...state,
                    isLogin: false,
                };
            default:
                throw new Error();
        }
    }

export  const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>
    );
} 