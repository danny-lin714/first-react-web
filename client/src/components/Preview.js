import React from "react";
import './Preview.css';
import { Button } from './Button';

function Preview({Name, content}) {
    return(
        <div className="container">
            <h2>{Name}</h2>
            <p>{content}</p>
            <div><button></button></div>
        </div>
    )
}
export default Preview;