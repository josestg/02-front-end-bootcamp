import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function RequireAuth(props) {
  const { children } = props;
  const location = useLocation();

  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn()) {
    return children;
  }

  return <Navigate to={"/"} state={{ from: location }} />;
}
