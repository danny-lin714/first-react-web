import React from "react";
import './Preview.css';
import { Button } from './Button';

function Preview({Name, img_path}) {
    return(
        <div className="container">
            <h2>{Name}</h2>
            <img src={img_path} alt="" />
            <div><button></button></div>
        </div>
    )
}
export default Preview;