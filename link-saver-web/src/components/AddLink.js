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

    target.newLink.value = '';//clean the input
  }

  const addTag = () =>{
    if (newTag.trim() !== '') {//only adds the tag if contains anything other than whitespace
      setTags([...tags, newTag]);//add new tag
      setNewTag('');//We clear the new label field after adding it
    }   
  }

  const deleteTag = (tagToDelete) => {
    const updatedTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(updatedTags);
    console.log(tags);
  }

  return (
    <> 
      <form onSubmit={ getFormData }>
        <div className="link-card link-input">
          <input required  name="newLink" type="text" placeholder="Nuevo link..." autoComplete="off"></input>
          <button type="submit">Agregar</button>
        </div>
        <div className="tagger">
          {
            tags.map((tag, index) => (
              <div className="tag" key={index}>
                <p>#{tag}</p>
                <button type="button" onClick={ () => {deleteTag(tag)}}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            ))
          }
          <div className="input-tag-box">
            <input name="newTag" type="text" value={newTag} placeholder="#etiqueta"
              onChange={ (e) => setNewTag(e.target.value)}
            ></input> 
            <button className="plus-button" type="button" onClick={addTag}>
              <span className="material-symbols-outlined circle">add_circle</span>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}