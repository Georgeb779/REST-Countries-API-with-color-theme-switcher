import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [lightMode, setlightMode] = useState(getMode);

  //setting light mode
  useEffect(() => {
    localStorage.setItem("light", JSON.stringify(lightMode));
  }, [lightMode]);

  function getMode() {
    const savedmode = JSON.parse(localStorage.getItem("light"));
    return savedmode || false;
  }

  if (lightMode === false) {
    const body = document.body;
    body.classList.remove("light-mode");
  } else {
    const body = document.body;
    body.classList.add("light-mode");
  }

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
