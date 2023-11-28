import React from 'react'

export const Link = ({link, onDeleteLink}) => {

  const erase = () => {
    onDeleteLink(link.id);
  }

  return (
    <>
      <li className='link-card'>
        <a href={ link.link } rel="noreferrer" target="_blank">{ link.link }</a>
        {
          link.tags.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))
        }
        <button onClick={erase()}>Borrar</button>
      </li>
    </>
  )
}
