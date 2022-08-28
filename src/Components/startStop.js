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
        setS(0);
        setM(0);
        setH(0);
        setFlag(false);
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
        <div className="div0">
            <div className="div1">
            <button onClick={clickHandler} className="btn1">{start}</button>
            <button onClick={resetHandler} className="btn2">Reset</button>
            </div>
            <div className="div2">
                <label className="l1">{h}</label>
                <label className="l2">:{m}</label>
                <label className="l3">:{s}</label>
            </div>
        </div>
    )
}

export default StartStop;