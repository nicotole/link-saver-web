export const SaveInStorage = (key, element) =>{
    //get elements that already have in the localStorage
    let elements = JSON.parse(localStorage.getItem(key));
    
    //prove that its an array
    if(Array.isArray(elements)){
        //if its an array, then we have data already => add the new data
      elements.push(element);
    }else{
        //if its not an array, there is no data => init the array with the first value 
      elements = [element];
    }

    //save in the localStorage
    localStorage.setItem(key, JSON.stringify(elements));
    
    //return the saved object
    return element;
  }