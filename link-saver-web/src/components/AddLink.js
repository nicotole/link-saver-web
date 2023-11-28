import React from 'react'
import { useState } from 'react';

export const AddLink = ({setToCurrentList}) => {
  
  const [tags, setTags] = useState([]);//state that represent the tags of a link
  const [newTag, setNewTag] = useState('');//state for the tag that we are creating

  const getFormData = (e) => {
    e.preventDefault();// stops the default behavior in the submitform
    //getting the values from the DOM
    let target = e.target;
    let newLink = target.newLink.value;
    
    let newLinkObj = {
      'id' : new Date().getTime(), //we use this as a unique key until we have the backend
      'link' : newLink,
      'tags' : tags 
    }
    setToCurrentList(newLinkObj);
    setTags([]); //reset for the next link
    setNewTag('');//reset fot the next link
  }

  const addTag = () =>{
    setTags([...tags, newTag]);//add new tag
    setNewTag('');//We clear the new label field after adding it
  }

  return (
    <> 
      <form onSubmit={ getFormData }>
        <div className="link-card link-input">
          <input required name="newLink" type="text" placeholder="Nuevo link..."></input>
          <button type="submit">Agregar</button>
        </div>
        {
          tags.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))
        }
        <input name="newTag" type="text" value={newTag} placeholder="#tag"
          onChange={ (e) => setNewTag(e.target.value)}
        ></input>
        <button type="button" onClick={addTag}>+</button>
      </form>
    </>
  )
}
