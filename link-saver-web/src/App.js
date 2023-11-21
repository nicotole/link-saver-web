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
      {
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
      }
    ]
  );
  //superList its a list of lists, this lists save the whole data temporaly

  const persistOnSuperList = (linkObj) => {
    const nuevoSuperList = superList.map(item => {
      if (item.id === currentList.id) {
        // Si es la lista con id: 2, añade el nuevo objeto al array de links
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

    // Actualiza el estado con el nuevo superList
    setSuperList(nuevoSuperList);
  };

  useEffect(() => {
    console.log(superList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[superList]);

  

  const [ currentList , setCurrentList] =
    useState( 
      {
        id: 1,
        nombre: 'Youtube',
        links: [
          { id: 0, link: 'https://www.youtube.com/watch?v=OPf0YbXqDm0&ab_channel=MarkRonsonVEVO' },
          { id: 2, link: 'https://www.youtube.com/watch?v=GBRAnuT48qo' }
        ]
      }
    )
  ;
  //currentListId its the id of list that we are currently showing

  const addLinkToCurrentList = (newLink) =>{
    setCurrentList((prevState) => ({
      ...prevState, // copy all the properties of the current state
      links: [newLink, ...prevState.links], //we create the new copy of the array and add the new link
    }));
    console.log(currentList.id);
    persistOnSuperList(newLink);
  }

  //instead of useing an state to save the name and key of the sublist im gonna use a object, in fact i can use objects instead of arrays. At least for the sublist element items

  useEffect(() => {
    console.log('current list Id es: ' + currentList.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentList]); 

  const handleListClick = (clickedListId) =>{
    setCurrentList(superList.find(list => list.id === clickedListId));
  }


  return (
  <>
    {/* <body> */}
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
        <AddBox setSuperList={setSuperList}
          setCurrentList = {setCurrentList}
        />
        <ListLists 
          superList={superList}
          clickHandler = {handleListClick}
        />
      </aside>
      <section className='link-list'>
        <AddLink setToCurrentList={ addLinkToCurrentList }/>
        <LinkList currentList={ currentList }/>
      </section>
    </section>
  {/* </body> */}
  </>
  );
}

export default App;
