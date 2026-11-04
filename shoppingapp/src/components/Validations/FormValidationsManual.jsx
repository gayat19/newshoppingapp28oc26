

import { useState } from "react";
import Submitted from "./Submitted";
import "./ValidateStyle.css";


const validators = {
    name: v=>(v.trim() === "" ? "This field is required" : ""),
    email: v=>((!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) ? "Invalid email address" : ""),
    password: v=>(v.length < 6 ? "Password must be at least 6 characters long " : "")
}

export default function FormValidationsManual() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [touched, setTouched] = useState({});
    const [submitted, setSubmitted] = useState(null);


    const errors = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [key, validators[key](value)])
    );

    const isValid = Object.values(errors).every(error => error === "");


    const handleChange = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));  
    };

    const handleBlur = (e) => {
        setTouched(prev => ({ ...prev, [e.target.name]: true }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({
            name: true,
            email: true,
            password: true
        });
        if (isValid) 
            setSubmitted(true);
    };
    return (
        <div className = "alert-alert-success card-wide">
           <h2>Form Validation</h2>
           <form onSubmit={handleSubmit}>
               <div>
                   <label>Name</label>
                   <input 
                       type="text" 
                       name="name" 
                       value={values.name} 
                       onChange={handleChange} 
                       onBlur={handleBlur} 
                   />
                   {touched.name && errors.name && <span>{errors.name}</span>}
               </div>
               <div>
                   <label>Email</label>
                   <input 
                       type="email" 
                       name="email" 
                       value={values.email} 
                       onChange={handleChange} 
                       onBlur={handleBlur} 
                   />
                   {touched.email && errors.email && <span>{errors.email}</span>}
               </div>
               <div>
                   <label>Password</label>
                   <input 
                       type="password" 
                       name="password" 
                       value={values.password} 
                       onChange={handleChange} 
                       onBlur={handleBlur} 
                   />
                   {touched.password && errors.password && <span>{errors.password}</span>}
               </div>
               <button type="submit">Submit</button>
           </form>
            {submitted && <Submitted data={values} />}
        </div>
       
    );
}