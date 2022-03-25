import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, login, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(-1);
    }
  }, [navigate, isLoggedIn]);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password, () => {
      navigate("/profile");
    });
  };

  if (state.loading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="your email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="*****"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="login" />
    </form>
  );
}
