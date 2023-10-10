import React from 'react'

export const ListLists = ({superList}) => {
  return (
    <>
      <ul className="lists">
      {superList != null ? (
          superList.map( link => (
            <li><span className="material-symbols-outlined">list</span>{link.nombre}</li>
          ))
        )
        :(
          <p>No Listas</p>
        )
      }
      </ul>
    </>
  )
}
