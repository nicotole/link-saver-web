import './App.css';
import { AddBox } from './components/AddBox';
import { AddLink } from './components/AddLink';
import { LinkList } from './components/LinkList';
import { ListLists } from './components/ListLists';
import { SearchBar } from './components/SearchBar';
import { useEffect, useState } from 'react';

 
function App() {
  
  const [ superList , setSuperList ] = useState(
    [
      /*{
        id: 1,
        nombre: 'Youtube',
        links: [
          { id: 0, link: 'https://www.youtube.com/watch?v=OPf0YbXqDm0&ab_channel=MarkRonsonVEVO' },
          { id: 2, link: 'https://www.youtube.com/watch?v=GBRAnuT48qo' }
        ]
      },
      {
        id: 2,
        nombre: 'Lista 2',
        links: [
          { id: 3, link: 'https://example.com/link3' },
          { id: 4, link: 'https://example.com/link4' }
        ]
      }*/
    ]
  );
  //superList its a list of lists, this lists save the whole data temporaly

  const [ currentList , setCurrentList] = useState( 
    {
      /*
      id: 1,
      nombre: 'Youtube',
      links: [
        { id: 0, link: 'https://www.youtube.com/watch?v=OPf0YbXqDm0&ab_channel=MarkRonsonVEVO' },
        { id: 2, link: 'https://www.youtube.com/watch?v=GBRAnuT48qo' }
      ]
      */
    }
  );
  //currentListId its the id of list that we are currently showing

  const persistOnSuperList = (linkObj) => {
    const nuevoSuperList = superList.map(item => {
      if (item.id === currentList.id) {
        return {
          ...item,
          links: [
            linkObj,
            ...item.links,
          ]
        };
      }
      return item;
    });

    // update the state of the superlist
    setSuperList(nuevoSuperList);
  };
 
  const addLinkToCurrentList = (newLink) =>{
    setCurrentList((prevState) => ({
      ...prevState, // copy all the properties of the current state
      links: [newLink, ...prevState.links], //we create the new copy of the array and add the new link
    }));
    persistOnSuperList(newLink);
  }
  //instead of useing an state to save the name and key of the sublist im gonna use a object, in fact i can use objects instead of arrays. At least for the sublist element items

  const handleListClick = (clickedListId) =>{
    setCurrentList(superList.find(list => list.id === clickedListId));
  }

  const deleteLink = (linkId) =>{
    const updatedSuperlist = superList.map( list => ({
      ...list, //copy the element
      links: list.links.filter(link => link.id !== linkId), //filter the link from the superlist
    }));
    const updatedCurrentList = {
      ...currentList, //copy the prevstate
      links: currentList.links.filter((link) => link.id !== linkId),//filter the links
    };
    //update the states
    setSuperList(updatedSuperlist);
    setCurrentList(updatedCurrentList);
  }

  return (
  <>
    <nav className="navbar">
      <div className="logo">
        <span className="material-symbols-outlined">
            format_text_clip
        </span>
        <p>Linkeado</p>
      </div>
      <div className="search-user-wrapper">      
        <SearchBar/>
        <div className="user-logo">
          {/* <!-- <span className="material-symbols-outlined">
              account_circle
          </span> --> */}
        </div>
      </div>
    </nav>
    <section className='content'>
      <aside>
        <AddBox 
          setSuperList={setSuperList}
          setCurrentList = {setCurrentList}
        />
        <ListLists 
          superList={superList}
          clickHandler = {handleListClick}
          selectedListId={ currentList.id}
        />
      </aside>
      <section className='link-list'>
      {superList.length > 0 ? (
        <>
          <AddLink setToCurrentList={addLinkToCurrentList} />
          <LinkList currentList={currentList} onDeleteLink={deleteLink}/>
        </>
      ) : null}
      </section>
    </section>
  </>
  );
}

export default App;
