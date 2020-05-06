import React from "react";
import "./styles/styles.scss";
import Curso from './curso';


 const cursos = [
   {
     "title": "Rie desde cero",
     "image": "https://scontent.feoh4-1.fna.fbcdn.net/v/t31.0-8/17358613_10208827512388540_517165678974236026_o.jpg?_nc_cat=100&_nc_sid=730e14&_nc_ohc=osiDRcgIau0AX8roGL5&_nc_ht=scontent.feoh4-1.fna&oh=223fbb2e50aca4d3e549bd5185a2c2b8&oe=5ED5AF0C",
     "price": "30",
     "profesor": "Keysi Luna"
   },
    {
    "title": "Leito cara de peito",
    "image": "https://scontent.feoh4-2.fna.fbcdn.net/v/t1.0-9/18555879_1312351922216393_3841913332460318548_n.jpg?_nc_cat=110&_nc_sid=ad2b24&_nc_ohc=4_YXJo6GjdMAX8fwVTE&_nc_ht=scontent.feoh4-2.fna&oh=4776442467a3c5c39cb31720186c6c97&oe=5ED90711",
    "price": "90",
    "profesor": " Lio Sol"

   }, {
    "title": "Disfrutar la vida",
    "image": "https://scontent.feoh4-2.fna.fbcdn.net/v/t1.0-9/71790706_10219113413881857_5774147435672633344_n.jpg?_nc_cat=111&_nc_sid=e3f864&_nc_ohc=5MDoGnarneUAX9rhK4H&_nc_ht=scontent.feoh4-2.fna&oh=1b51cf101c8af22dffa82ef679e84f94&oe=5ED8F789",
    "price": "35",
    "profesor": "Danitza Bonilla"
   }, {
    "title": "Nos ayudas a ver la vida",
    "image": "https://scontent.feoh4-2.fna.fbcdn.net/v/t1.0-9/95012467_1423526647830743_6663737438730452992_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=XkxlxDBgbvgAX80EyPG&_nc_ht=scontent.feoh4-2.fna&oh=ae86884a3cf16b66ccf0441780245351&oe=5ED94A12",
    "price": "50",
    "profesor": "Ada la negrita Bombi"
   }
 ]

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img
            className="main-banner__img"
            alt="banner"
            src="https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de EDteam</p>
            <p>Tu futuro te está esperando</p>
            <a href="https://ed.team" className="button">
              Suscribirse
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      {
        cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor} />)
      } 
    </div>
  </>
);

export default App;

// Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver un solo elemento padre
// 3: Apoyarse de los Fragment cuando necesito devolver dos elementos
// 4: Fragment => <> hijos </>
// 5: img siempre se cierra la etiqueta
// 6: class pasa a ser className porque es una palabra reservada de Js
// 7: For esta reservado y aca pasa ser for => htmlFor
// 8: No se puede utilisar en JSX WHILE, DO WHILE
