import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route path="*" element={() => <h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
