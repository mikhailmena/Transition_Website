import React from "react";


const Slide7 = () => {
    return (
        <div className="container">
            
            <h1 style={{fontWeight: 'bold'}}> Get a head start on VA Disability Claim</h1>
            
            <p> You can start your VA claim for disability <span style={{fontSize: '25px',color: 'blue'}}>BEFORE
                </span> youget out of the military. This is called <h4 style={{color: 'green', fontWeight: 'bolder'}}>Benefits
                Delivery at Discharge</h4> program and it is so
                important to use this process. Most Veterans have
                a hard time getting the disability they deserve
                because they file their claim AFTER they separate
                from service. With BDD, you start your claim at <span style={{fontSize: '25px',color: 'blue'}}>180 </span>  
                days from ETS and the process is so much easier
                because it is the DOD and not the VA who is
                scheduling your claims. I went through this process
                and I was ahead of the game. I had no issues
                getting my appointments scheduled and the VSO I
                worked with pulled my medical records for me and <span style={{fontSize: '25px',color: 'green'}}> helped me with my VA claim.</span>
                <br></br>
               <a href="https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/" target="_blank">BDD Website</a> 
            </p>
            
             
             <a href="https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/" target="_blank"><img src={require('../assets/BDDimage.jpg')} alt="tap " style={{width: '420px', position: 'relative', right: '3%'}}/></a>
            
            
            

        </div>
    )
}
export default Slide7;