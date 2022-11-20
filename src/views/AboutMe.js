import React from "react";
import image1 from '../assets/hikeselfie.jpg'
import Card from 'react-bootstrap/Card';
import './Sample.css'
import title from '../assets/AboutMetitle.png'



const AboutMe = () => {
   
    
   
      return (
       <div>
        <img id="title" src={title} style={{height: 220}}/>
        <Card style={{ width: '35rem' }}>
          <img id="selfie" src={image1} />
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              My name is Marc Menard and I am a 36 Year old father, husband, and Veteran. I was raised by loving parents and my Father served
              20 years in the Navy. I have two sisters, a 3 year old son, and have been married for 12 years.
              <br></br>
              I spent 8 years in the Army as an Apache Helicopter Avionics Electronics Armament System Repairer. Four of the years were served as an Non-Commissioned Officer. 
              During my time in the Army, I had wide range of experiences; both good and bad. The best parts of the my experience were the times when I made a positive impact on the lives of the people around me.
              I am grateful for my time and look forward to my future in the civilian sector.
              <br></br> 
              I left the Army to pursue my dream of being a Software Developer. I enjoy making things with my hands and Software Development 
              gives me that opportunity while being able to help people through technology.
             <br></br>
              <span> Feel free to contact me at my socials below </span>
              <br></br>
              <a href="https://github.com/mikhailmena/">Github</a>
              <br></br>
              <a href="mailto:marcmmenard@gmail.com">Email marcmmenard@gmail.com</a>
              <br></br>
              <a href="https://www.linkedin.com/in/marc-m-menard/">Linkedin</a>


            </Card.Text>
              
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        </div>  
      );
    }
    
    export default AboutMe;