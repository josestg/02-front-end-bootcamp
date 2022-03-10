import { useState } from "react";
import Profile from "./components/profile/Profile";
import ProfileFC from "./components/profile/ProfileFC";

function App() {
  const [active, setActive] = useState(true);

  setTimeout(() => {
    if (active) {
      setActive(false);
    }
  }, 5 * 1000);

  return (
    <div>
      <h1>Component Lifecycle</h1>

      <button onClick={() => setActive(!active)}>
        {active ? "Unmount Profle" : "Mount Profile"}
      </button>

      {/* {active && <Profile />} */}
      {active && <ProfileFC />}
    </div>
  );
}

export default App;
