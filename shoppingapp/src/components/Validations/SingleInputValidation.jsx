

import { useState, useEffect,memo } from "react";



    const validateText = (value) => {
        const v = value.trim();
        if(v==="") return "This field is required";
        if(v.length < 3) return "Text must be at least 3 characters long";
        if(!/^[a-zA-Z]+$/.test(v)) return "Text must contain only letters";
        return "";
    };
const SingleInputValidation = memo(() => {
    const [value, setValue] = useState("");
    const [touched, setTouched] = useState(false);
    const error = validateText(value);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        console.log("Single input form loaded");
    });

    return (
        <>
         <input
            type="text"
            value={value}
            onChange={handleChange}
            onBlur={() => setTouched(true)}
            placeholder="Enter text"
        />
        {touched && error && <div style={{ color: "red" }}>{error}</div>}
         {touched && !error && <div style={{ color: "green" }}>Looks good!</div>}
        </>);
       
});

export default SingleInputValidation;