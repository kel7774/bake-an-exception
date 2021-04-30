import React from 'react';
import BasicInfoStyles from '../../styles/BasicInfoStyles';

function BasicInfo ({ register, errors }) {
    return(
        <BasicInfoStyles>
            <div className="row-container">
                    <div className="fieldLabel">
                        <label for='firstName'>First Name</label>
                        <input 
                            type="text"
                            name="firstName"
                            placeholder="First Name" 
                            {...register("firstName", { required: true })}
                        />
                        {errors.firstName && "First name is required."}
                    </div>
                    <div className="fieldLabel">
                        <label for='lastName'>Last Name</label>
                        <input 
                            type="text"
                            name="lastName"
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
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            {...register("email", {
                                required: "required",
                                pattern: {
                                    value: /\S+@\S+.\S+/,
                                    message: "Entered value does not match email format"
                                }
                            })}
                        />
                        {errors.email && "Email address is required."}
                    </div>
                    <div className="fieldLabel">
                        <label for='phoneNumber'>Phone Number</label>
                        <input 
                            type="phone"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            {...register("phoneNumber", { required: true })} 
                        />
                        {errors.phoneNumber && "Phone number is required."}
                    </div>
                </div>
        </BasicInfoStyles>
        
    )
}

export default BasicInfo;