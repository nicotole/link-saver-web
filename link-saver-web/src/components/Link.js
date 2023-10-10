import React from 'react'

export const Link = ({link}) => {
  return (
    <>
      <li className='link-card'>
        <a href={ link.link } rel="noreferrer" target="_blank">{ link.link }</a>
      </li>
    </>
  )
}
