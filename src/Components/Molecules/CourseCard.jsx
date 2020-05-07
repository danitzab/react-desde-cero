import React from "react";
import Proptypes from "prop-types"
import { Link } from "react-router-dom";

const CourseCard = ({id,title, image, price, professor}) => (  //componente de funcion, componente tonto, solo se limita a mostrar en la interfase pero no es logico
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
     <Link to={ `/Cursos/${id}` }>
     <img
        src={image}
        alt={title}
      />
     </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{title}</h3>
      <div className="s-main-center">
        {professor}
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://ed.team">
          { `$ ${price} USD` }
        </a>
      </div>      
    </div>
  </article>
);

CourseCard.prototypes = {
  title: Proptypes.string,
  image: Proptypes.string,
  price: Proptypes.number,
  professor: Proptypes.string
}

CourseCard.defaultProps = {
 title: "No se encontró titulo",
 image: "https://www.elperiodista.cl/wp-content/uploads/2020/04/coronavirus-2.jpg",
 price: "--",
 professor: ""

}

export default CourseCard;
