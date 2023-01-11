import React from 'react';
import { GiHamburgerMenu} from 'react-icons/gi';
import { MdRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

import './Navbar.css';



const Navbar = () => {

  const [toggleMenu, setToggleMenu]= React.useState(false);
  return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.brand2} alt='logo' />
    </div>
    <ul className='app__navbar-links'>
      <li className='p_opensans'><a href='#home'> Home</a> </li>
      <li className='p_opensans'><a href='#about'> About</a> </li>
      <li className='p_opensans'><a href='#menu'> Menu</a> </li>
      {/* <li className='p_opensans'><a href='#awards'> Awards</a> </li> */}
      <li className='p_opensans'><a href='#contact'> Contact</a> </li>
      {/* <li className='p_opensans'><a href='#home'> Home</a> </li> */}
    </ul>
    <div className='app__navbar-login'>
      <a href='#login' className='p_opensans'>Login / Register</a>
      <div className='app__navbar-login_line'>

      </div>
      <a href='/' className='p_opensans'>Book Table</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#D9B596' fontSize={27} onClick={()=>setToggleMenu(true)} />
 
       {toggleMenu && (
         <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)} />
        <ul className='app__navbar-smallscreen-links'>
          <li className='p_opensans'><a href='#home' onClick={()=>setToggleMenu(false)}> Home</a> </li>
          <li className='p_opensans'><a href='#about' onClick={()=>setToggleMenu(false)}> About</a> </li>
          <li className='p_opensans'><a href='#menu'  onClick={()=>setToggleMenu(false)}> Menu</a> </li>
          {/* <li className='p_opensans'><a href='#awards'> Awards</a> </li> */}
          <li className='p_opensans'><a href='#contact'  onClick={()=>setToggleMenu(false)}> Contact</a> </li>
        </ul>
      </div>)}
      
     
      
    </div>
    
  </nav>
)
}

export default Navbar;
