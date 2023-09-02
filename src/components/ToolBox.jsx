import React, { useState } from "react";
import "../styles/ToolBox.css";
let progressBar = [];

function ToolBox() {
    const [progress, setProgress] = useState(0);
    const updateProgress = () => {
        if (progress < 10) {
            setProgress(progress + 1);
            // setProgressBar(...progressBar, progress)
            progressBar.push(progress);
        }
        console.log(progressBar);
    };

    const hideTick = () => {
      document.getElementById("tick").style.opacity = 1;
    };
    
    const showTick = () => {
      document.getElementById("tick").style.opacity = 0;
    };
    return (
        <div className="tool-box">
            <div>
                <i className="fa fa-plus"></i>
            </div>
            <div onMouseOver={hideTick} onMouseLeave={showTick} >
                {progressBar.map((value, index) => (
                    <span key={index} ></span>
                ))}
                <i id="tick" className="fa fa-check" onClick={updateProgress}></i>
            </div>
            <div>
                <i className="fa fa-caret-down"></i>
            </div>
        </div>
    );
}

export default ToolBox;
