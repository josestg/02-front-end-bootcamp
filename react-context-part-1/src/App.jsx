import Toolbar from "./components/Toolbar";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Toolbar />
    </ThemeProvider>
  );
}

export default App;
