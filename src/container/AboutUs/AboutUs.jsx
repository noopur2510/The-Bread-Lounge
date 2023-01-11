import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () =>{

  const[knowabout, setKnowabout]=React.useState(false);
  const[knowHistory, setKnowHistory]=React.useState(false);
  let text= knowabout?'Less': 'More'
  let texth= knowHistory?'Less': 'More'

  let history= knowHistory? 
  'A staggering chronicle of six decades and still going strong, The Bread Lounge has emerged as a "True Icon of Baking" with a reputation that is unmatched to the core. Always a step ahead of competition, we focus on innovation, developing new products while improving our existing products to evolving consumer needs.':
  'A staggering chronicle of six decades and still going strong, The Bread Lounge has emerged as a "True Icon of Baking" with a reputation that is unmatched to the core. Always a step ahead of competition, we focus on innovation, developing new...'

  let para=knowabout?
  'A subtle combination of traditions and trends, our extensive collection of greatly appetizing baked goods and confections delights the senses of all age groups and people from different walks of life. The secret of our excellence lies in the meticulous care and detailed craft that goes into each and every one of our products. It is this sustained commitment to excellence backed by a world class production and distribution network and customer friendly service that has enabled us to carve a niche for ourselves across the globe.':
  'A subtle combination of traditions and trends, our extensive collection of greatly appetizing baked goods and confections delights the senses of all age groups and people from different walks of life. The secret of our excellence lies in the...'
  
  return(
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
         <img src={images.B} />
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='spoon' className='spoon__img' />
          <p className='p__opensans'>{para}</p>
          <button type='button' className='custom__button' onClick={()=>setKnowabout(!knowabout)}>Know {text}</button>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          {/* <img src={images.knife} alt='knife' /> */}
        </div>
        
        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='spoon' className='spoon__img' />
          <p className='p__opensans'>{history}</p>
          <button type='button' className='custom__button' onClick={()=>setKnowHistory(!knowHistory)}>Know {texth}</button>
        </div>
      </div>
    </div>
  )
  
} 
export default AboutUs;
