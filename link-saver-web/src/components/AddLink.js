import React from 'react'

export const AddLink = ({setCurrentList}) => {

  const getFormData = e => {
    e.preventDefault();// stops the default behavior in the submitform

    let target = e.target;
    let newLink = target.newLink.value;

    setCurrentList( elements => {
      return[newLink, ...elements];
    });
  }

  return (
    <> 
        <form onSubmit={ getFormData }>
          <div className="link-card link-input">
            <input required name="newLink" type="text" placeholder="Nuevo link..."></input>
            <button>Agregar</button>
          </div>
        </form>
    </>
  )
}
