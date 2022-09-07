import React, {useState} from "react";
import './TextField.css'

export const TextField = ({className, prefix, suffix, placeholder}) => {
    const [inputValue, setInputValue] = useState('')
    return(
        <>
            {prefix}
            <input type="text"
                   className={`ipt ${className}`}
                   value={inputValue}
                   placeholder={placeholder}
                   onChange={(e) => setInputValue(e.target.value)}/>
            {suffix}
        </>
    );
}