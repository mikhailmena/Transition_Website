import React from "react";
import RMC from "../components/RMC";
import  DBpay  from "../components/TLcalculator";

const Calculators = () => {
    return (
        <div>
            <DBpay/>
            <h1 style={{color: 'white'}}>External Calculator Links</h1>
            <RMC/>
        </div>
    )
}

export default Calculators;