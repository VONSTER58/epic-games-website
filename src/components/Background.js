import React from 'react'

//CSS

import "../styles/components/Background.css";

//IMAGE

import first_panel from "../assets/images/Epic+Games+Node_ue-alt-1920x1080-e653a4a4dae65307fd2420076abe44bb71b22f06.jpg";

import second_panel from "../assets/images/Epic+Games+Node_fn-1920x1080-05e434e24b3170bc6cc6003c102270ee4cde3a75.jpg";

import third_panel from "../assets/images/rl-f2p-hero-epic-adjust-gradient-1920x1080-982990639.jpg";

import "../styles/components/Background.css";

const Background = () => {
  return ( <>
    <div className='image_container'>
        <img className="image_panel" src={first_panel} />
    </div>
    <div className='image2_container'>
      <img className="image_panel" src={second_panel} />
    </div>
    <div className='image3_container'>
      <img className="image_panel" src={third_panel} />
    </div>
    
  </>)
}

export default Background