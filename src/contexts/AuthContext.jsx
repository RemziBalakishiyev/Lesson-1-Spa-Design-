import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuth: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };

    case "logout":
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    default:
      throw new Error("Unknown action");
  }
};

const AUTH_USER = {
  name: "Bruce Wayne",
  email: "bruce@batman.com",
  password: "bat123",
  img:
    "https://sites.rutgers.edu/acal51/wp-content/uploads/sites/291/2017/12/3859882-6269102771-Bruce.jpg",
};
function AuthProvider({ children }) {
  const [{ user, isAuth }, dispatch] = useReducer(reducer, initialState);

  const login = function (email, password) {
    if (email == AUTH_USER.email && password == AUTH_USER.password) {
      dispatch({ type: "login", payload: AUTH_USER });
      console.log(email, password);
    }
  };
  const logout = function () {
    dispatch({ type: "logout" });
  };
  return (
    <AuthContext.Provider value={{ login, logout, user, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
