import React from "react";
import { MdDarkMode } from "react-icons/md";

const NavigationBar = () => {
  return (
    <div>
      <nav>
        <p>Where in the World?</p>
        <div>
          <MdDarkMode className="MdDarkMode" />
          <p>Dark Mode</p>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
