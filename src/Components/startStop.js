import { useState } from "react";
import "../style/style.css"
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
            <button onClick={clickHandler} className="btn1">{start}</button>
        </div>
    )
}

export default StartStop;