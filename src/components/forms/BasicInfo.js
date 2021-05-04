import React from 'react';
import BasicInfoStyles from '../../styles/BasicInfoStyles';

function BasicInfo ({ 
    register, 
    errors, 
    firstName, 
    handleFirstName,
    lastName, 
    handleLastName,
    email, 
    handleEmail,
    phoneNumber, 
    handlePhoneNumber
}) {
    return(
        <BasicInfoStyles className="basic-info-container">
            <div className="row-container">
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
                    <div className="fieldLabel">
                        <label htmlFor='lastName'>Last Name</label>
                        <input 
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => handleLastName(e)}
                            {...register("lastName", { required: true })} 
                        />
                        {errors.lastName && "Last name is required."}
                    </div>
                </div>
                <div className="row-container">
                    <div className="fieldLabel">
                        <label htmlFor='email'>Email Address</label>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => handleEmail(e)}
                            {...register("email", {
                                required: "required",
                                pattern: {
                                    value: /\S+@\S+.\S+/,
                                    message: "Entered value does not match email format."
                                }
                            })}
                        />
                        {errors.email && "Email address is required."}
                    </div>
                    <div className="fieldLabel">
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <input 
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => handlePhoneNumber(e)}
                            {...register("phoneNumber", {
                                required: "required",
                                pattern: {
                                    value: /\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/
                                }
                            }
                            )}
                        />
                        {errors.phoneNumber && "Phone number is required."}
                    </div>
                </div>
        </BasicInfoStyles>
        
    )
}

export default BasicInfo;