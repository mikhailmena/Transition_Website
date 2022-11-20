import React from "react";


const Slide5 = () => {
    return (
        <div className="container">
            <h1 style={{fontWeight: 'bold'}}> Build a network with LinkedIn Premium</h1>
            
            <p> <a href="https://www.linkedin.com/help/linkedin/answer/a518653/linkedin-for-veterans-free-premium-career-subscription-and-eligibility?lang=en" target="_blank" >LinkedIn</a> is one of the easiest way to build a
                professional network. It's social media for
                businesses and job seekers. I use LinkedIn to
                look into companies that I may want to
                work with and I also use it to participate in
                Veterans Events like webinars.
            </p>
            <p>
            As a veteran, you get one<span style={{color: 'green', fontWeight: 'bolder'}}> free year</span> of
            LinkedIn Premium. With Premium, you can
            see who looks at your profile, add extra tools to
            your profile, get connected with recruiters, and
            get free skills certificates
            </p>

            <h3 style={{color: 'blue'}}>To get your FREE Year:</h3>
            <ol style={{fontWeight: 'bolder'}}>
                <li>
                    Go to <a href="https://socialimpact.linkedin.com/programs/veterans/premiumform" target="_blank">LinkedIn Free Premium Form</a>
                </li>
                <li>
                    Fill out the form to verify your military status with SheerId
                </li>
            </ol>
            
            <a href="https://www.linkedin.com/help/linkedin/answer/a518653/linkedin-for-veterans-free-premium-career-subscription-and-eligibility?lang=en" target="_blank"> <img src={require('../assets/LinkedScreenshot.jpg')} alt="linkedScreenshot" style={{width: '420px', position: 'relative', right: '5%'}}/></a>
             
            
            
            

        </div>
    )
}
export default Slide5;