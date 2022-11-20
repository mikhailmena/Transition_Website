import React from "react";
import image1 from "../assets/mpimage.jpg"
import { Row, Col } from "reactstrap";
import calcData from "../utils/calcs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





const RMCCalc = () => {
   return(
    <div className="next-steps my-5">
  
    
    <Row className="d-flex justify-content-between">
      {calcData.map((col, i) => (
        <Col key={i} md={5} className="mb-4">
          <h6 className="mb-3">
            <a href={col.link}>
              <FontAwesomeIcon icon="link" className="mr-2" />
              {col.title}
            </a>
          </h6>
        
          <p>{col.description}</p>
        </Col>
      ))}
    </Row>
  </div>

   )


    
}

export default RMCCalc;


// return (
//     <form  class="form-horizontal" data-v-715cc654="">
//     <div class="form-group">
//     <label class="control-label col-xs-12 col-sm-6">Grade</label>
//      <div class="col-xs-12 col-sm-6 input-container">
//       <select class="form-control input-sm">
//       <option value="O-10">O-10</option>
//       <option value="O-9">O-9</option>
//       <option value="O-8">O-8</option>
//       <option value="O-7">O-7</option>
//       <option value="O-6">O-6</option>
//       <option value="O-5">O-5</option>
//       <option value="O-4">O-4</option>
//       <option value="O-3">O-3</option>
//       <option value="O-2">O-2</option>
//       <option value="O-1">O-1</option>
//       <option value="O-3E">O-3E</option>
//       <option value="O-2E">O-2E</option>
//       <option value="O-1E">O-1E</option>
//       <option value="W-5">W-5</option>
//       <option value="W-4">W-4</option>
//       <option value="W-3">W-3</option>
//       <option value="W-2">W-2</option>
//       <option value="W-1">W-1</option>
//       <option value="E-9">E-9</option>
//       <option value="E-8">E-8</option>
//       <option value="E-7">E-7</option>
//       <option value="E-6">E-6</option>
//       <option value="E-5">E-5</option>
//       <option value="E-4">E-4</option>
//       <option value="E-3">E-3</option>
//       <option value="E-2">E-2</option>
//       <option value="E-1 > 4 Mon">E-1 &gt; 4 Mon</option>
//       <option value="E-1 < 4 Mon">E-1 &lt; 4 Mon</option>
//       </select>
//       </div>
//       </div>
//        <div class="form-group">
//         <label class="control-label col-xs-12 col-sm-6">Years of Service</label>
//          <div class="col-xs-12 col-sm-6 input-container"> 
//          <select class="form-control input-sm">
//             <option value="lessThanTwoYears">&lt; 2</option>
//             <option value="twoYears">2</option>
//             <option value="threeYears">3</option>
//             <option value="fourYears">4</option>
//             <option value="sixYears">6</option>
//             <option value="eightYears">8</option>
//             <option value="tenYears">10</option>
//             <option value="twelveYears">12</option>
//             <option value="fourteenYears">14</option>
//             <option value="sixteenYears">16</option>
//             <option value="eighteenYears">18</option>
//             <option value="twentyYears">20</option>
//             <option value="twentytwoYears">22</option>
//             <option value="twentyfourYears">24</option>
//             <option value="twentysixYears">26</option>
//             <option value="twentyeightYears">28</option>
//             <option value="thirtyYears">30</option>
//             <option value="thirtytwoYears">32</option>
//             <option value="thirtyfourYears">34</option>
//             <option value="thirtysixYears">36</option>
//             <option value="thirtyeightYears">38</option>
//             <option value="fortyYears">40</option>
//             </select>
//             </div>
//             </div>
//              <div class="form-group">
//             <label class="control-label col-xs-12 col-sm-6">Tax Filing Status</label>
//                 <div class="col-xs-12 col-sm-6 input-container"> 
//                 <select class="form-control input-sm">
//                     <option value="single">Single</option>
//                     <option value="filingJointly">Married Filing Jointly</option>
//                     <option value="filingSeparately">Married Filing Separately</option>
//                     <option value="headOfHousehold">Head of Household</option>
//                 </select>
//                 </div>
//                     </div>
//                 <div class="form-group">
//                 <label class="control-label col-xs-12 col-sm-6">Family Size, including Yourself</label>
//                     <div class="col-xs-12 col-sm-6 input-container">
//                         <input type="number" min="1" max="100" class="form-control input-sm"/>
//                 </div>
//                 </div>
//                 <div class="form-group">
//                 <label class="control-label col-xs-12 col-sm-6">Living OCONUS or Not Receiving BAH</label>
//                     <div class="col-xs-12 col-sm-6 input-container">
//                 <label class="radio-inline">
//                     <input type="radio" name="oconus" value="true"/>
//                                 Yes</label>
//                 <label class="radio-inline">
//                     <input type="radio" name="oconus" value=""/>
//                                 No
//                     </label>
//                     </div>
//                     </div>
//                 <div class="form-group">
//                 <label class="control-label col-xs-12 col-sm-6">ZIP Code of your Permanent Duty Station</label>
//                     <div class="col-xs-12 col-sm-6 input-container">
//                     <input type="text" class="form-control input-sm"/>
//                     </div>
//                     </div>
                                         
//     </form>