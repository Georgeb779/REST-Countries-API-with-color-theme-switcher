import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Header({ lightMode, setlightMode }) {
  return (
    <header className="header">
      <h1>Where in the world ?</h1>
      <div>
        <button
          className="header-theme"
          aria-label="change to dark or light mode "
          onClick={() => setlightMode((prevMode) => !prevMode)}
        >
          <FontAwesomeIcon icon={lightMode === false ? faSun : faMoon} />
          <p>{lightMode === false ? "Light mode" : "Dark mode"} </p>
        </button>
      </div>
    </header>
  );
}

export default Header;
