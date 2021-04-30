import React from 'react';
import BasicInfo from './BasicInfo';

function CookieForm ({ register, errors, firstName, lastName, email, phoneNumber }) {
    return (
        <div className="cookie-form">
            <BasicInfo 
                register={register} 
                errors={errors} 
                firstName={firstName} 
                lastName={lastName} 
                email={email} 
                phoneNumber={phoneNumber} 
            />
        </div>
    )
}

export default CookieForm;