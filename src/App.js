import React from 'react';
import './styles/styles.scss';
import Curso from './curso';
import Banner from './Banner';
import Formulario from './Formulario';
import CourseGrid from './CourseGrid';

const App = () => (
  <>
    <Banner />
    <Formulario name="EDteam" />
    <CourseGrid />
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
