import React from 'react';
import { Link } from './Link';

export const LinkList = ({ currentList, onDeleteLink }) => {
  let links = currentList.links;
  console.log("Links " + links);
  return (
    <>
      <ul>
        {links && links.length > 0 ? (
          links.map((link) => (
            <Link key={link.id} link={link} onDeleteLink={onDeleteLink}/>
          ))
        ) : (
          <p></p>
        )}
      </ul>
    </>
  );
};

