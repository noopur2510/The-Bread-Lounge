import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { AboutUs, Mainmenu, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';


const App = () => {
  return(
    <div className='app'>
  
    <Navbar />
    
  
    <Header />
    <AboutUs />
    <SpecialMenu />
    {/* <Mainmenu /> */}
    <Intro />

    <Gallery />
    <FindUs />
    <Footer />
  </div>
  )
}

export default App;
