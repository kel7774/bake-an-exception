import React, { useState } from 'react';
import { sendForm } from 'emailjs-com';
import { useForm } from 'react-hook-form';
import BasicInfo from '../forms/BasicInfo';

function ContactForm() {
    const { register, formState: { errors } } = useForm();
    const {firstName, setFirstName} = useState(undefined);
    const handleFirstName = (e) => {
        e.preventDefault();
        setFirstName(e.target.value)
    }
    return (
        <div>
            <form>
                <div className="fieldLabel">
                <div className="fieldLabel">
                    <label htmlFor='firstName'>First Name</label>
                    <input 
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName} 
                        onChange={(e) => handleFirstName(e)}
                        {...register("firstName", { required: true })}
                    />
                    {errors.firstName && "First name is required."}
                    </div>
                </div>
                <div className="fieldLabel">
                    <label htmlFor="Last Name">Last Name</label>   
                    <input 
                        name="Last Name"
                        placeholder="Last Name"
                        type="text"
                        {...register("Last Name", { required: true })}
                    />
                    {errors.lastName && "Must enter in Last Name."}
                </div>
                <div className="fieldLabel">
                    <label htmlFor="Email">Email</label>
                    <input 
                        name="Email"
                        placeholder="Email"
                        type="email"
                        {...register("Email", { required: true })}
                    />
                </div>
                <div className="fieldLabel">
                    <label htmlFor="Phone Number">Phone Number</label>
                    <input 
                        name="Phone Number"
                        placeholder="Phone Number"
                        type="tel"
                        {...register("Phone Number", { required: true })}
                    />
                </div>
            </form>
        </div>
    )
}

export default ContactForm;