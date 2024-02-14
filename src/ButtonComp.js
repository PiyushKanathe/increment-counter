import React, { useContext } from "react";
import countContext from "./context";

const ButtonComp = (props) => {
    const context = useContext(countContext)
    const { decrementCount, incrementCount } = context
    let buttonLabel = props.children === "+"? "Increment": "Decrement"
    return(
        <button onClick={props.children === "+"? incrementCount :decrementCount}>{buttonLabel}</button>
    )
}

export default ButtonComp;
