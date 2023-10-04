import React from 'react'
import { Link } from './Link'

export const LinkList = ({currentList}) => {
  return (
    <>
      <ul>
        {currentList != null ? (
            currentList.map((link, index) => (
              <Link key={index} link={ link }/>
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


