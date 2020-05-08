import React from 'react';
import CourseCard from '../Molecules/CourseCard';

const CourseGrid = ({ courses }) => (
  <div className="ed-grid m-grid-3">
    {courses.length === 0 ? (
      <div>
        <img
          src="https://www.infibague.gov.co/pagina/cargando.gif"
          alt="Cargando"
        />
        <h1 className="t3">Loading...</h1>
      </div>
    ) : (
      courses.map((c) => (
        <CourseCard
          key={c.id}
          id={c.id}
          title={c.titulo}
          image={c.image}
          price={c.price}
          professor={c.professor}
        />
      ))
    )}
  </div>
);

export default CourseGrid;
