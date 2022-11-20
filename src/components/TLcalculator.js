import React, {useEffect, useState} from 'react'
import data from "../utils/PayTable.json"
import './TLcalculator.css'
import logo from '../assets/paytable.jpg'
import image from '../assets/TerminalCalc.png'

// const {TIS, setTIS} = useState("")
 
const DBpay = () => {
  const valueObject = {
    grade: 0,
    TIS: 0,
    monthlyPay: 0,
    dailybasicPay: 0,
    leaveDays: 0,
    pretaxValue: 0,
    aftertaxValue: 0,
    taxedAmount:0,
    taxrate: .25
  }
  const [grade, setGrade] = useState(0);
  const [TIS, setTIS] = useState(0);
  const [monthlyPay, setmonthlyPay] = useState(0);
  const [dailybasicpay, setdailybasicpay] = useState(0);
  const [leaveDays, setleaveDays] = useState(0);
  const [pretaxValue, setpretaxValue] = useState(0);
  const [aftertaxValue, setaftertaxValue] = useState(0);
  const [taxedAmount, settaxedAmount] = useState(0);
  const [annualPay, setannualPay] = useState(0);
 
   const CaclulateValues = () => {
    
    setpretaxValue(dailybasicpay * leaveDays)
    settaxedAmount(pretaxValue * .25)
   
    setaftertaxValue(pretaxValue - taxedAmount)
    console.log("monthlyPay: ", monthlyPay, " dailybasicpay: ", dailybasicpay, "leaveValue: ", leaveDays, "pretax value: ", pretaxValue, "taxed Amount: ", taxedAmount, "after taxValue: ", aftertaxValue)
    this.forceUpdate();
    CalculateDBP()
    CalculateDBP()
   }

 const CalculateDBP = () => {
   setmonthlyPay(data[grade][TIS])
   setannualPay(monthlyPay * 12)
    setdailybasicpay( annualPay/365)
    this.forceUpdate();
 //dailybasicpay * leave Days = pretax value     pretax value - 25% = after tax value
          }
  //my current issue is that the monthlypay and basicpay, grade and TIS only change after 4 events
  //its because setstate is asynchronous and react will batch update the dom for performance
  
  return (
    <div> 
      <img id='calchead' src={image} style={{height: 220}}/>
    <div id='calcdiv'>
      {/* <h1>Terminal Leave value Caluclator</h1> */}
     
      <form onFocus={CalculateDBP} onChange={CalculateDBP} >
        {/* <h3> Grade: {grade} <br></br>  Time in Service as ETS/Retirement: {TIS} <br></br> monthlyPay: {monthlyPay} <br></br> LeaveDays: {leaveDays} <br></br> Pre tax Leave Value ${pretaxValue} <br></br>
        aftertax Value: ${aftertaxValue}</h3>  */}
        <label>Pay Grade  </label>
        
        <select value={grade} onChange={e=> setGrade(e.target.value)}  >
          <option >E-1</option>
          <option >E-2</option>
          <option >E-3</option>
          <option defaultValue={'E-4'}>E-4</option>
          <option >E-5</option>
          <option >E-6</option>
          <option >E-7</option>
          <option >E-8</option>
          <option >E-9</option>
          <option >O-1</option>
          <option >O-2</option>
          <option >O-3</option>
          <option >O-4</option>
          <option >O-5</option>
          <option >O-6</option>
          <option >O-7</option>
          <option >O-8</option>
          <option >O-9</option>
          <option >O-10</option>
          <option >W-1</option>
          <option >W-2</option>
          <option >W-3</option>
          <option >W-4</option>
          <option >W-5</option>
        </select>
        
        <label>Time in Service</label>
        
        <select value={TIS} onChange={e=> setTIS(e.target.value)}>
          <option >2</option>
          <option defaultValue={'4'}>4</option>
          <option >6</option>
          <option >8</option>
          <option >10</option>
          <option >12</option>
          <option >14</option>
          <option >16</option>
          <option >18</option>
          <option >20</option>
          <option >22</option>
          <option >24</option>
        
        </select>
        
        <label>Number of Days of remaining leave at separation</label> <input value={leaveDays} onChange={e => setleaveDays(e.target.value)}  type={'number'}></input> 
        <br></br>
      </form>
      {/* <p>The monthly pay for a {grade} at {TIS} years is {monthlyPay} which is ${dailybasicpay.toFixed(2)} a day </p> */}
      <p>The formula to determine the value of your terminal leave is daily basic pay: ${dailybasicpay.toFixed(2)}  multiplied by leave days: 
        {leaveDays} minus the standard 25% **tax penatly ${taxedAmount.toFixed(2)}  of the pretax Value: ${pretaxValue.toFixed(2)} for a final total of ${aftertaxValue.toFixed(2)}</p>
          <div onFocus={CaclulateValues}>
          <button onClick={CaclulateValues} onFocus={CaclulateValues}> Caclulate Pre Tax Value</button>
          <button onClick={CaclulateValues} onFocus={CaclulateValues}> Calculate After Tax Value</button>
          </div>
      <table>
          <thead>
            <tr>
              <th>
                Pay Grade
              </th>
              <th>
                Time in Service
              </th>
              <th>
                Monthly Base pay
              </th>
              <th>
                Daily Base pay
              </th>
              <th>
                Leave Days
              </th>
              <th>
                Pre Tax Leave Value
              </th>
              <th>
                After Tax Leave Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              {grade}
              </td>
              <td>
              {TIS}
              </td>
              <td>
              {monthlyPay}
              </td>
              <td>
              ${dailybasicpay.toFixed(2)}
              </td>
              <td>
              {leaveDays}
              </td>
              <td>
              ${pretaxValue.toFixed(2)}
              </td>
              <td id='after'>
              ${aftertaxValue.toFixed(2)}
              </td>
            </tr>
            
          </tbody>
      </table>
      <a href='https://militarypay.defense.gov/Benefits/Leave-Benefits-During-Transition/'>Terminal Leave Reference</a>
      <br></br>
      <span>** There is an tax exemption for Leave earned during Combat deployments</span>
      
  </div>
  <a href='https://militarypay.defense.gov/Portals/3/Documents/2022%20Basic%20Pay%20Table%20-%201%20Drill%20Pay.pdf'><img src={logo} alt='paytable'/></a>  
  </div>
  )

}
export default DBpay;
//need a form with a Rank field a time in service field
//those two variables will determine the output of the daily basic pay
