import React from 'react'
import images from '../../constants/images'

const Menucard = () => {
  return (
    <div className='app__menucard'>
    <div className='app__menucard-card'>
        <div className='app__menucard-card_img'>
            <img src={images.welcome} alt='menu' />
        </div>
        <div className='app__menucard-card_details'>
            <h3 className='heading'>Cakes</h3>
        </div>

    </div>
      
    </div>
  )
}

export default Menucard
