import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Astronaut from './assets/img/astronaut.gif'

const Loading = () => {
    return (
        <div className="main" style={{"backgroundColor": "#181818" }}> 
            <img className="center-image" src={Astronaut} alt="Astronaut" style={{ width: "100px", height: "auto" }} />
        </div>
    )
}

export default Loading