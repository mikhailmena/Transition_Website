import React from "react";
import "./MainPage.css"

import header from "../assets/Header2.png";
import Slideshow from "./Slideshow";
import PdfVersion from "../views/PdfVersion";

const MainPage = () => (
  <div id="MainPageDiv" className="text-center hero my-5" >
    <img id="header2"
        alt="logo"
        src={header}
        style={{
          height: 300,
          
        }}/>
    
    
    <Slideshow/>
    

    
  </div>
);

export default MainPage;
