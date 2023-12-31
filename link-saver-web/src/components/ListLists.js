import React from 'react'

export const ListLists = ({superList, clickHandler, selectedListId}) => {
  return (
    <>
      <ul className="lists">
      {superList != null ? (
          superList.map( list => (
            <li key={list.id} 
                onClick={ () => clickHandler(list.id)}
                className={selectedListId === list.id ? 'selected' : ''}
            >
              <span className="material-symbols-outlined">list</span>
                <p className="truncate">{list.nombre}</p>
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
