import { useState } from "react";
import Listing from "./components/Listing";

import Login from "./components/Login";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {isLoggedIn ? (
        <Listing setLogin={(value) => setIsLoggedIn(value)} />
      ) : (
        <Login setLogin={(value) => setIsLoggedIn(value)} />
      )}
    </div>
  );
}
