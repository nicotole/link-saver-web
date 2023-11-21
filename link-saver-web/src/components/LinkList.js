import React from 'react';
import { Link } from './Link';

export const LinkList = ({ currentList }) => {
  let links = currentList.links;
  console.log("Links " + links);
  return (
    <>
      <ul>
        {links && links.length > 0 ? (
          links.map((link) => (
            <Link key={link.id} link={link} />
          ))
        ) : (
          <p>No hay links</p>
        )}
      </ul>
    </>
  );
};

