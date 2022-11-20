import React from "react";


const Slide6 = () => {
    return (
        <div className="container">
            
            <h1 style={{fontWeight: 'bold'}}> How to survive SFL TAP</h1>
            
            <p> SFL TAP <span style={{fontWeight: 'bolder', color: 'purple'}}>boring but it's userul.</span>
            Like most
                government programs, they find most dry method
                of teaching you about all of the things you need to
                know to exit Military Service.
                <br></br>
                <span style={{fontWeight: 'bolder',color: 'green'}}>THE TOPICS
                COVERED IN SFL TAP ARE IMPORTANT!!</span>
            </p>
            <p>
            But learning about them is death by PowerPoint
            and its a struggle to stay awake.
            Because it is mandatory, I would treat it as an
            opportunity to ask the instructors as many
            questions as possible. 
            
            </p>
            <h3 style={{fontWeight: 'bolder',color: 'blue'}}>YOU WANT TO FIND OUT:</h3>
            
            <ol style={{fontWeight: 'bolder', color: 'green'}}>
                <li>
                    What they did to be successful after the military?
                </li>
                <li>
                    Do they have any job opportunities lined up for you? 
                </li>
                <li>
                Are there YouTube videos that will explain      
                the material?
                </li>
                <li>
                Which local organizations will help with the
                transition process?
                </li>
            </ol>
            <p> Make sure you bring caffeine and dress
                professionally. Just dressing like a civilian helps  
                <span style={{color: 'blue',fontWeight: 'bolder'}}> change your mindset</span> and starts you down the
                right path.
            </p>
             
             <a href="https://www.dol.gov/agencies/vets/programs/tap" target="_blank"><img src={require('../assets/TAP.jpg')} alt="tap " style={{width: '420px', position: 'relative', right: '5%'}}/></a>
            
            
            

        </div>
    )
}
export default Slide6;