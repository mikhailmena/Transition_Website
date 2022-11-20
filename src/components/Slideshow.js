import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import contentData from "../utils/contentData";
import "./Slideshow.css"

import Slide1 from '../Slides/Slide1';
import Slide2 from '../Slides/Slide2';
import Slide3 from '../Slides/Slide3';
import Slide4 from '../Slides/Slide4';
import Slide5 from '../Slides/Slide5';
import Slide6 from '../Slides/Slide6';
import Slide7 from '../Slides/Slide7';
import Slide8 from '../Slides/Slide8';
import Slide9 from '../Slides/Slide9';
import Slide10 from '../Slides/Slide10';
import Slide11 from '../Slides/Slide11';




//make .map function to render content data inside of slideshow
const Slideshow = () => {
    return (
      <div  className="slide-container">
        <Slide>
            <div className="each-slide" >
              <Slide1/>
            </div>
            
            <div className="each-slide" >
              <Slide2/>
            </div>

            <div className="each-slide" >
              <Slide3/>
            </div>
            
            <div className="each-slide" >
              <Slide4/>
            </div>
            
            <div className="each-slide" >
              <Slide5/>
            </div>
            <div className="each-slide" >
              <Slide6/>
            </div>
            <div className="each-slide" >
              <Slide7/>
            </div>
            <div className="each-slide" >
              <Slide8/>
            </div>
            <div className="each-slide" >
              <Slide9/>
            </div>
            <div className="each-slide" >
              <Slide10/>
            </div>
            <div className="each-slide" >
              <Slide11/>
            </div>

          
        </Slide>
      </div>
    )
}
export default Slideshow;