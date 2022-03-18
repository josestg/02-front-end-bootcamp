import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Deeper = () => {
  const { theme } = useContext(ThemeContext);

  return <h1>Theme: {theme}</h1>;
};

export default Deeper;
