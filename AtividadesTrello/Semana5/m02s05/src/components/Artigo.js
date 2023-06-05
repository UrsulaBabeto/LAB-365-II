import React from "react";

import Titulo from "./Titulo";

import '../styles/Artigo.css'

function Artigo() {
  return (
    <>
      <div className="artigo">
        <Titulo titulo = "Babadis Novis"/>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem
          dormir, sentado sem cochilar e fazendo pose. Paisis, filhis, espiritis
          santis. Nec orci ornare consequat. Praesent lacinia ultrices
          consectetur. Sed non ipsum felis. Praesent malesuada urna nisi, quis
          volutpat erat hendrerit non. Nam vulputate dapibus.
        </p>
      </div>
    </>
  );
}

export default Artigo;
