import './App.css';
import Search from './components/Search';
import Content from './components/Content';
import { useState } from 'react';


function App() {

  const[location, setLocation]= useState({})
  const[id, setId] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <div className='head-search'>
          <Search setLocation={setLocation} setId={setId} id={id}/>
        </div>
      </header>
      <main className='main'>
        <Content location={location} setLocation={setLocation}/>
      </main>
      {/* <footer>
        <Pagination/>
      </footer> */}
    </div>
  );
}

export default App;
