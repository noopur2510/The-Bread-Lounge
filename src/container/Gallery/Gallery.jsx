import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Gallery.css';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const pictures=[images.ten, images.three, images.two, images.seven, images.six, images.four, images.eight,images.one,  images.nine]
const Gallery = () => {
  const scrollref=React.useRef(null);


  const scroll=(direction)=>{
    const { current }=scrollref;

    if(direction==='left'){
      current.scrollLeft-=300;
    }
    else{
      current.scrollLeft+=300;
    }
  }
  return(
    <div className='app__bg app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title='Instagram' />
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{color:'#D9B596', marginTop:'2rem'}}>“All you need is love. But a little chocolate now and then doesn't hurt.”
― Charles M. Schulz</p>
      <button type='button' className='custom__button'>View More</button>
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollref}>
        {pictures.map((image,index) =>(
          <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}    >
             <img src={image} alt='gallery' />
             <BsInstagram className='gallery__image-icon' />
          </div>
        ))
       }
      </div>
      <div className='app__gallery-images_arrows'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')} />
      </div>
    </div>
  </div>
  )
  
};

export default Gallery;
