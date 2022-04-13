import React, { useState } from "react";

const toggleDark = (dark) => !dark

export const Themectx = React.createContext({ dark: false, toggleDark })



const ThemeContext = ({ children }) => {

  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(toggleDark(dark));
  }

  return (
    <>
      <Themectx.Provider value={{ dark, toggleDark: toggleDarkMode }}>
        {children}
      </Themectx.Provider>
    </>
  )
}

export default ThemeContext;
