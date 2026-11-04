import SingleInputValidation from "./SingleInputValidation";

import { useState, useEffect } from "react";




const Display = () => {
    const [clicked, setClicked] = useState("");

    const handleClick = () => {
        alert("Button clicked!");
        setClicked("Button was clicked!");
    };

    useEffect(() => {
        console.log("Display loaded");
    });


    return (
        <>
        <h2>{clicked}</h2>
        <button onClick={handleClick}>Click Me</button>
        <SingleInputValidation/>
          
        </>
    );
};

export default Display;