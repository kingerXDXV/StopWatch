import { useState } from "react";
const StartStop= function(){
    const [start,setStart] = useState("Start");
    const clickHandler = ()=>{
        if(start==="Start")
        setStart("Stop");
        else
        setStart("Start");
    }
    return(
        <div>
            <button onClick={clickHandler}>{start}</button>
        </div>
    )
}

export default StartStop;