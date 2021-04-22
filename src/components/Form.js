import React from 'react';
import FormStyles from '../styles/FormStyles';
import { useForm } from 'react-hook-form';

function Form () {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <FormStyles>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    placeholder="First Name" 
                    {...register("firstName", { required: true })}
                />
                {errors.firstName && "First name is required."}
                <input 
                    placeholder="Last Name"
                    {...register("lastName", { required: true })} 
                />
                {errors.lastName && "Last name is required."}
                <input 
                    placeholder="Email Address"
                    {...register("email", { required: true })} 
                />
                {errors.email && "Email address is required."}
                <input 
                    placeholder="Phone Number"
                    {...register("phoneNumber", { required: true })} 
                />
                {errors.phoneNumber && "Phone number is required."}
                <input type="submit" />
            </form>
        </FormStyles>
    )
}

export default Form;