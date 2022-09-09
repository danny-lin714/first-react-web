import React from "react";
import './TextField.css'

export const TextField = ({type, className, prefix, suffix, placeholder}) => {
    return(
        <>
            {prefix}
            <input type={type}
                   className={`ipt ${className}`}
                   placeholder={placeholder}/>
            {suffix}
        </>
    );
}