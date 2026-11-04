

import { useForm } from "react-hook-form";
import { useState } from "react";
import Submitted from "./Submitted";

const RhfForm = () => {

    const [submitted, setSubmitted] = useState(null);
    const{
        register,
        handleSubmit,
        reset,
        formState: { errors,isSubmitting,isValid,isDirty }
    } = useForm({mode:"onTouched"});

    const onSubmit = async (data) => {
            await new Promise(r=>setTimeout(r,1000));
            setSubmitted(data);
            reset();
    };




    return (
        <div className="alert-alert-success card-wide">
            <h2>React Hook Form Example</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p>{errors.name.message}</p>}
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p>{errors.password.message}</p>}
                <button type="submit" disabled={isSubmitting || !isValid || !isDirty}>
                    Submit
                </button>
            </form>
            {submitted && <Submitted data={submitted} />}
        </div>
    );
};

export default RhfForm;