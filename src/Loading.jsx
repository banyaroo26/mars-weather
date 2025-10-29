import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Astronaut from './assets/img/astronaut.gif'

const Loading = () => {
    return (
        <div className="main" style={{"backgroundColor": "#181818" }}> 
            <div className="center-image">
                <img src={Astronaut} alt="Astronaut" style={{ width: "100px", height: "auto" }} />
                <p> Fetching data from NASA APIs. Please wait ... </p>
            </div>
        </div>
    )
}

export default Loading