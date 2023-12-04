import React from 'react'

export const AddBox = ({setSuperList, setCurrentList}) => {

  const getFormData = e =>{
    e.preventDefault();

    let newListName = e.target.newList.value;

    let newListObj = {
      id: new Date().getTime(),
      nombre: newListName,
      links: [  ]
    }

    console.log("Nuevo objeto de lista:", newListObj); 

    setSuperList( elements => {
      console.log("Antes de actualizar superList:", elements);
      // setCurrentList(newListObj.enlaces);
      return[newListObj, ...elements];
    })

    console.log("Enlaces antes de setear: " + newListObj.links);
    setCurrentList(newListObj);
   
    e.target.newList.value = ''; //let the input "newList" ready for the new lists

  }



  return (
    <>
      <div className="add-box">
        <p>Mis listas</p>
        <form onSubmit={ getFormData }>
          <input required name="newList" type="text" placeholder="Lista Nueva..." autoComplete="off"></input>
          {/* <button>+</button> */}
          
          <button className="plus-button">
            <span className="material-symbols-outlined circle">add_circle</span>
          </button>
        </form>
        
      </div>
    </>
  )
}
