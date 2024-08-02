 
import React from 'react';

import {Footer, Header, Solutions, Features,  } from './containers';
import {Navbar} from './components';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />

      </div>
       <Solutions />
       <Features />
       <Footer />
    </div>
  )
}

export default App
