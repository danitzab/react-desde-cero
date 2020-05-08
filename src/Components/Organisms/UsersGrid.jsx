import React from 'react';
import UserCard from '../Molecules/UserCard'

const UsersGrid = ({users}) => (
    <div className="ed-grid">
        <h1>Usuarios</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
          { users.length === 0 ? (
            <div>
            <img
              src="https://www.infibague.gov.co/pagina/cargando.gif"
              alt="Cargando"
            />
            <h1 className="t3">Loading...</h1>
          </div>
        ) : ( users.map((u) => (
          <UserCard
            key={u.id}
            name={u.name}
            username={u.username}
            email={u.email}
          />
        ))
          )}
        </div>
      </div>
)



export default UsersGrid
