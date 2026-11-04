import {useState} from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Submitted from "./Submitted";


function Field({label,error,children}) {
    return (
        <>
            <label>
                {label}
                 {children}
            </label>
           
            {error && <p className="error">{error}</p>}
        </>
    );
}

const isEmailTaken = email => {
    // Simulate an API call to check if the email is taken
    return new Promise((resolve) => {
        setTimeout(() => {
            const takenEmails = ["test@example.com", "admin@example.com"];
            resolve(takenEmails.includes(email));
        }, 500);
    });
};

const schema = z.object({
    name: z.string().trim().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Enater a valid email").refine(async (email) => {
        return !(await isEmailTaken(email));
    }, {
        message: "Email is already taken"
    }),
    password: z.string().min(6, "Password must be at least 6 characters long")
});

const ZodForm = () => {
    const [submitted, setSubmitted] = useState(null);
    const { register, handleSubmit, formState: { errors,isSubmitting} } = useForm({
        resolver: zodResolver(schema),
        mode: "onTouched"
    });

    const onSubmit = (data) => {
        const {confirm,...toSave} = data;
        console.log(toSave);
        setSubmitted(toSave);
    };



    return (
        <>
        <h2>Zod Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate >
            <Field label="Name" error={errors.name?.message}>
                <input {...register("name")} />
            </Field>
            <Field label="Email" error={errors.email?.message}>
                <input {...register("email")} />
            </Field>
            <Field label="Password" error={errors.password?.message}>
                <input type="password" {...register("password")} />
            </Field>
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Checking..." : "Submit"}
            </button>
        

        </form>
        
           {submitted && <Submitted data={submitted} />}
    </>

    );
};

export default ZodForm;
