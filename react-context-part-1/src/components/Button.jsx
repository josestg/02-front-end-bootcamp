import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Button = (props) => {
  const { theme, onToggle } = useContext(ThemeContext);

  return <button onClick={onToggle}>{theme}</button>;
};

export default Button;
