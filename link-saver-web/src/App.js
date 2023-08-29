import './App.css';
import { AddBox } from './components/AddBox';
import { AddLink } from './components/AddLink';
import { LinkList } from './components/LinkList';
import { ListLists } from './components/ListLists';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
  <body>
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
        <AddLink />
        <LinkList />
      </section>
    </section>
  </body>
  );
}

export default App;
