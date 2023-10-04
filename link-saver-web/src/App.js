import './App.css';
import { AddBox } from './components/AddBox';
import { AddLink } from './components/AddLink';
import { LinkList } from './components/LinkList';
import { ListLists } from './components/ListLists';
import { SearchBar } from './components/SearchBar';
import { useEffect, useState } from 'react';
 
function App() {

  const [ superList , setSuperList ] = useState([]);
  const [ currentList , setCurrentList] = useState(['https://www.youtube.com/watch?v=OPf0YbXqDm0&ab_channel=MarkRonsonVEVO', 'https://www.youtube.com/watch?v=OPf0YbXqDm0&ab_channel=MarkRonsonVEVO', 'https://www.youtube.com/watch?v=OPf0YbXqDm0&ab_channel=MarkRonsonVEVO', 'https://www.youtube.com/watch?v=OPf0YbXqDm0&ab_channel=MarkRonsonVEVO' , 'https://www.youtube.com/watch?v=OPf0YbXqDm0&ab_channel=MarkRonsonVEVO', 'https://www.youtube.com/watch?v=OPf0YbXqDm0&ab_channel=MarkRonsonVEVO']);


  //instead of useing an state to save the name and key of the sublist im gonna use a object, in fact i can use objects instead of arrays. At least for the sublist element items

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
        <AddBox />
        <ListLists />
      </aside>
      <section className='link-list'>
        <AddLink setCurrentList={setCurrentList}/>
        <LinkList currentList={currentList}/>
      </section>
    </section>
  {/* </body> */}
  </>
  );
}

export default App;
