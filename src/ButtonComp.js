import React, { useContext } from "react";
import countContext from "./context";

const ButtonComp = () => {
    const context = useContext(countContext)
    const { handleCount, count } = context
    return(
        <button onClick={handleCount}>Increment: {count}</button>
    )
}

export default ButtonComp;
