import React from "react";
import RMC from "../components/RMC";
import  DBpay  from "../components/TLcalculator";

const Calculators = () => {
    return (
        <div>
            <DBpay/>
            <RMC/>
        </div>
    )
}

export default Calculators;