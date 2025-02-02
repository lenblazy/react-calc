import React from "react";

const Calculator = props => {



    return (
      <div>
        <input className={"result"} type={"text"} value={props.value}/>
      </div>
    );
}

export default Calculator;