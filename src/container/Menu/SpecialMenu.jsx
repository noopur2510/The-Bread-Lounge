import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem  } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits your pallette' />
      <h1 className='headtext__cormorant'>Recommended</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_cake flex__center'>
        <p className='app__specialMenu_menu_heading'>Cakes & Pastries</p>
        <div className='app__specialMenu_menu_items'>
          {data.cakes.map((cake,index)=>(
            <MenuItem key={cake.title + index} title={cake.title} price={cake.price} tags={cake.tags} />
          ))}
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt='menu' />
      </div>
      <div className='app__specialMenu-menu_others flex__center'>
        <p className='app__specialMenu_menu_heading'>Others</p>
        <div className='app__specialMenu_menu_items'>
          {data.others.map((other,index)=>(
            <MenuItem key={other.title + index} title={other.title} price={other.price } tags={other.tags} />
          ))}
        </div>
      </div>
     
    </div>
  </div>
);

export default SpecialMenu;
