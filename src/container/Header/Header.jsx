import React from 'react';

import {BrowserRouter as Link} from 'react-router-dom';
 import { images } from '../../constants';
import './Header.css';


import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper-info'>
     <SubHeading title='Live the sweet life!' />
     <h1 className='app__header-h1'>where Baking meets Bliss.</h1>
     <p className='p__opensans' style={{margin: '2rem 0'} }>“Cakes are special. Every birthday, every celebration ends with something sweet, a cake, and people remember. It’s all about the memories.” — Buddy Valastro</p>
    <a href='#menu'><button type='button' className='custom__button'>Explore Menu</button></a> 
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='cake' />
    </div>
  </div>
);

export default Header;
