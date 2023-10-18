import React from 'react'

export const ListLists = ({superList, clickHandler}) => {
  return (
    <>
      <ul className="lists">
      {superList != null ? (
          superList.map( list => (
            <li key={list.id} onClick={ () => clickHandler(list.id)}>
              <span className="material-symbols-outlined">list</span>
                {list.nombre}
            </li>
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
