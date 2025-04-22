import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Step 1: Create a state variable to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Dynamically set the class based on the state
  const appClass = isDarkMode ? "App dark" : "App light";

  // Step 3: Toggle function for dark mode
  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
