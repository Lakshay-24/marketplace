import React from "react";
import "./Button.css";

function Button(props){

    return(
        <div className="toggle-button" onClick={props.onClick}>
            <p className="button-text">{props.title}</p>
        </div>
    )
}

export default Button