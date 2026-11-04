

import { useState } from "react";

const SingleInputValidation = () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    
    const handleChange = (e) => {
        setValue(e.target.value);
      
    };

    return (
        <>
         <input
            type="text"
            value={value}
            onChange={handleChange}
            onBlur={() => {
                        if (!value) {
                            setError("This field is required");
                        } else {
                            setError("");
                        }
                    }}
            placeholder="Enter text"
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        </>);
       
};

export default SingleInputValidation;