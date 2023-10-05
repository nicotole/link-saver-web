import React from 'react'

export const AddLink = ({setCurrentList}) => {

  const getFormData = e => {
    e.preventDefault();// stops the default behavior in the submitform

    //getting the values from the DOM
    let target = e.target;
    let newLink = target.newLink.value;

    //creating link
    let newLinkObj = {
      'id' : new Date().getTime(), //we use this as a unique key until we have the backend
      'link' : newLink 
    }

    setCurrentList( elements => {
      return[newLinkObj, ...elements];
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
