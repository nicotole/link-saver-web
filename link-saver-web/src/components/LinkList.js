import React from 'react'
import { Link } from './Link'

export const LinkList = ({currentList}) => {
  return (
    <>
      <ul>
        {currentList != null ? (
            currentList.map( link => (
              <Link key={ link.id } link={ link }/>
            ))
          )
          :(
            <p>No hay links</p>
          )
        }
      </ul>
    </>
  )
}


