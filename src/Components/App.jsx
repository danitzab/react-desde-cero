import React from 'react';
import '../styles/styles.scss';
import AppRoutes from './AppRoutes';
// import useFetch from './CustomHooks/useFetch';
// import useCounter from './CustomHooks/useCounter';
// import { render } from '@testing-library/react';

// function App() {
//   const counterOne = useCounter();
//   const counterTwo = useCounter();

//   return (
//     <div className="data">
//       {counterOne.count}
//       <br />
//       <button onClick={counterOne.increase}>Agregar</button>
//       <button onClick={counterOne.decrease}>Disminuir</button>

//       <br />
//       {counterTwo.count}
//       <br />
//       <button onClick={counterTwo.increase}>Agregar</button>
//       <button onClick={counterTwo.decrease}>Disminuir</button>
//     </div>
//   );
// }

// const App = () => {
// const users = useFetch(
//   'http://my-json-server.typicode.com/Danitzab/db-json/cursos',
//   []
// );
// const posts = useFetch(
//   'http://my-json-server.typicode.com/Danitzab/db-json/cursos',
//   []
// );
// return (
//   <div className="data">
//     <ul>
//       {' '}
//       {users.loading && <p>Cargando</p>}
//       {users.data &&
//         users.data.map((user) => <li key={user.id}>{user.titulo}</li>)}
//     </ul>
//     <ul>
//       {' '}
//       {posts.loading && <p>Cargando</p>}
//       {posts.data &&
//         posts.data.map((posts) => <li key={posts.id}>{posts.titulo}</li>)}
//     </ul>
//   </div>
// );
// };

const App = () => <AppRoutes />;

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
