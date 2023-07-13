import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.mitG } alt="g letter" />
      </div>

      <div className='app__aboutus-content flex__center'>

        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'> About Us And Our History</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className='p__opensans'> <p>A banquet in Mitmita Restaurant (London) will let you experience the Ethiopian way of life, where dining is characterized by sharing food from a common plate, signifying the bonds of loyalty, family, love and friendship.</p>The staff is friendly and knowledgeable about the menu, and can provide recommendations for those who are new to Ethiopian cuisine.
          <p>We're in the business of Restaurant & Bar.

The dishes are prepared with a variety of unique spices, which lend an unforgettable outstanding aspect to it's out of the ordinary cuisine.</p>
</p>

<button type='button' className='custom__button'> Know More</button>
        </div>
        <div className='app__aboutus-content_knife flex__center'></div>
        
        
        </div>


        {/* <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'> Our History</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className='p__opensans'> We're in the business of Restaurant & Bar.

The dishes are prepared with a variety of unique spices, which lend an unforgettable outstanding aspect to it's out of the ordinary cuisine.
</p>
 
<button type='button' className='custom__button'> Know More</button>
        </div> */}

        
  </div>
);

export default AboutUs;
