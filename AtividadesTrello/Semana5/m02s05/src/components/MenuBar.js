import React from "react";

import Lista from "./Lista";

import '../styles/MenuBar.css'



function MenuBar() {
  let world = "🌎";
  return (
    <>
      <div className="content">
        <div className="img">
          <h1 className="h1-menuBar">{world}</h1>
        </div>
        <div className="nav-menuBar">
          <ul>
            <li className="li-menuBar"><Lista item="Home"/></li>
            <li className="li-menuBar"><Lista item="Main"/></li>
            <li className="li-menuBar"><Lista item="Contato"/></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
