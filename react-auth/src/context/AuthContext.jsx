import { createContext, useEffect, useState } from "react";

const initialValue = {
  state: {
    user: null,
    loading: false,
    error: null,
  },

  login: (email, password) => {},
  isLoggedIn: () => false,
};

export const AuthContext = createContext(initialValue);

export default function AuthProvide(props) {
  const { children } = props;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const sessionUser = window.sessionStorage.getItem("user");
    if (sessionUser) {
      const bob = JSON.parse(sessionUser);
      setUser(bob);
      setLoading(false);
    }
  }, []);

  const handleLogin = (email, password, callback) => {
    setLoading(true);
    if (email === "bob@mail.com" && password === "bob123") {
      const bob = {
        name: "Bob",
      };
      setUser(bob);
      callback();

      window.sessionStorage.setItem("user", JSON.stringify(bob));
    } else {
      setError(new Error("forbidden"));
    }

    setLoading(false);
  };

  const value = {
    state: {
      user: user,
      loading: loading,
      error: error,
    },

    login: handleLogin,
    isLoggedIn: () => {
      if (user != null) {
        return true;
      }

      const sessionUser = window.sessionStorage.getItem("user");
      return sessionUser != null;
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
