import React, { useContext } from "react";
import { Themectx } from "./ThemeContext/ThemeContext";
import '../App.css';

const ToggleDarkMode = () => {
  const { dark, toggleDark } = useContext(Themectx);

  const handleOnClick = (e) => {
    e.preventDefault();
    toggleDark();
  };

  return (
    <>
      <h1 style={{ padding: "20px" }} onClick={handleOnClick}>{dark ? "🌙" : "🌞"}</h1>
    </>
  )
}

export default ToggleDarkMode;