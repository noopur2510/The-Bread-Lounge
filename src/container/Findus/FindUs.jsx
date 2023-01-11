import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className=" app__wrapper section__padding" id="contact" style={{backgroundColor:'var(--color-maroon)'}}>
    <div className="app__wrapper_info" style={{justifyContent: 'space-between'}}>
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content" style={{flex:1}}>
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p__cormorant" style={{ color: 'rgb(198, 152, 112)', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img" style={{flex:1}}>
      <img src={images.find} alt="finus_img" style={{width:'80%' ,height:'30%'}} />
    </div>
  </div>
);

export default FindUs;