import React from "react";
import "./Heading.css";

function Heading(props){

    return(
        <div>
        <h1 className="main-heading">{props.title}</h1>
        

        </div>
      
    )
}

export default Heading