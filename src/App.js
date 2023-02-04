
import './App.css';
import React from 'react'

import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Routes,Route,} from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
    <div className="App">
     
      <header className="App-header">
      <NavBar/>
      </header>
    

    <Contact/>
      <Routes>
      {/* <Route  exact path='NavBar' element={<NavBar/>}/> */}
      {/* <Route path='About' element={<About/>}/> */}
      <Route path='Contact' element={<Contact/>}/>
    </Routes>
        </div>
        </Router>

    </>
   
  );
}

export default App;
