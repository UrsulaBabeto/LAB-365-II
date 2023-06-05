import React from "react";

import Titulo from "./Titulo";

import "../styles/Header.css";

function Header() {
  return (
    <>
      <div className="newspaper-container">
        <p className="newspaper-title">
          Saiba tudo sobre <Titulo  className="title-newspaper" titulo="Doggos"></Titulo>
        </p>
      </div>
    </>
  );
}

export default Header;
