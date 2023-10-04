import React from 'react'

export const Link = ({link}) => {
  return (
    <>
      <li className='link-card'>
        {console.log('holi soy un link uwu' + link)}
        <a href={ link } rel="noreferrer" target="_blank">{ link }</a>
      </li>
    </>
  )
}
