import React, { useState } from "react";
import HamIcon from './HamIcon';

function Navbar() {

  const [state, setState] = useState({})

  const clickHandler = (e) => {
    const elem = document.getElementById('nav-ham-icon');
    console.log(elem)
    if (elem.children.length > 0) {
      elem.children.forEach(x => x.classList.toggle('change'))
    }
    // e.classList.toggle("change")
  }

  return (
    <div id="navbar-container">
      <div id="nav-content">
        <nav>
          <a id='home' href="/">Home</a>
          <a id='about' href="/about">About</a>
          <a id='contact' href="/contact">Contact</a>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;