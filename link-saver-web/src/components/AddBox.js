import React from 'react'

export const AddBox = ({setSuperList}) => {

  const getFormData = e =>{
    e.preventDefault();

    let newListName = e.target.newList.value;

    let newListObj = {
      id: new Date().getTime(),
      nombre: newListName,
      enlaces: []
    }

    setSuperList( elements => {
      return[newListObj, ...elements];
    })

  }



  return (
    <>
      <div className="add-box">
        <p>Mis listas</p>
        <form onSubmit={ getFormData }>
          <input required name="newList" type="text" placeholder="Lista Nueva..."></input>
          {/* <button>+</button> */}
          <button>
            <span className="material-symbols-outlined circle">add_circle</span>
          </button>
        </form>
        
      </div>
    </>
  )
}
