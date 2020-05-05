import React from "react";

const mayorDeEdad = (edad) => edad > 18;

const persona = { nombre: "Danitza", apellido: "Bonilla", edad: "9" };

const Curso = () => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img
        src="https://edteam-media.s3.amazonaws.com/courses/original/565fa9ec-8f84-448a-b0d8-855d059f16dd.png"
        alt="Poster del curso"
      />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      {mayorDeEdad(persona.edad) ? (
        <h3 className="center">Hola, soy mayor</h3>
      ) : (
        <p>"Soy menor"</p>
      )}
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">
          $ 20USD
        </a>
      </div>
    </div>
  </article>
);

export default Curso;
