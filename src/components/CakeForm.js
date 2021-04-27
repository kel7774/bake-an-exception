import React from 'react';
import CakeFormStyles from '../styles/CakeFormStyles';
import { useForm } from 'react-hook-form';

function CakeForm () {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <CakeFormStyles>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row-container">
                    <div className="fieldLabel">
                        <label for='firstName'>First Name</label>
                        <input 
                            placeholder="First Name" 
                            {...register("firstName", { required: true })}
                        />
                        {errors.firstName && "First name is required."}
                    </div>
                    <div className="fieldLabel">
                        <label for='lastName'>Last Name</label>
                        <input 
                            placeholder="Last Name"
                            {...register("lastName", { required: true })} 
                        />
                        {errors.lastName && "Last name is required."}
                    </div>
                </div>
                <div className="row-container">
                    <div className="fieldLabel">
                        <label for='email'>Email Address</label>
                        <input 
                            placeholder="Email Address"
                            {...register("email", { required: true })} 
                        />
                        {errors.email && "Email address is required."}
                    </div>
                    <div className="fieldLabel">
                        <label for='phoneNumber'>Phone Number</label>
                        <input 
                            placeholder="Phone Number"
                            {...register("phoneNumber", { required: true })} 
                        />
                        {errors.phoneNumber && "Phone number is required."}
                    </div>
                </div>
                <input type="submit" />
            </form>
        </CakeFormStyles>
    )
}

export default CakeForm;