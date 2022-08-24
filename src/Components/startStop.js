import { useEffect, useState } from "react";
import "../style/style.css"
const StartStop= function(){
    const [start,setStart] = useState("Start");
    const [s,setS] = useState(0);
    const [m,setM] = useState(0);
    const [h,setH] = useState(0);
    const [flag, setFlag] = useState(false);
    const clickHandler = ()=>{
        if(start==="Start"){
        setStart("Stop");
        setFlag(true);
        }
        else{
        setStart("Start");
        setFlag(false);
        }
    }

    const resetHandler = ()=>{
        setFlag(false);
        clickHandler();
        setS(0);
        setM(0);
        setH(0);
    }

    useEffect(()=>{
        if(flag){
            setTimeout(()=>{
                setS((s)=>s+1);
                    if(s===59){
                        setM((m)=>m+1);
                        setS(0);
                    }
                    if(m===59){
                        setH((h)=>h+1)
                        setM(0);
                    }
            },1000);
        }
    })
    return(
        <div>
            
            <button onClick={clickHandler} className="btn1">{start}</button>
            <button onClick={resetHandler}>Reset</button>
            <label>hello {h}:{m}:{s}</label>
        </div>
    )
}

export default StartStop;