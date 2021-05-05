import React from 'react';
import ContactStyles from '../../styles/ContactStyles';

function ContactForm({ 
    register, 
    errors, 
    firstName, 
    lastName, 
    email, 
    phoneNumber,
    comment,
    handleFirstName, 
    handleLastName, 
    handleEmail,
    handlePhoneNumber,
    handleComment,
    handleSubmit,
    sendEmail
}) {
    return (
        <ContactStyles className="contact-form">
            <form onSubmit={handleSubmit(sendEmail)}>
                <div className="fieldLabel">
                    <label htmlFor='firstName'>First Name</label>
                    <input 
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={e => handleFirstName(e.target.value)}
                        {...register("firstName", { required: true })}
                    />
                    {errors.firstName && "First name is required."}
                    </div>
                <div className="fieldLabel">
                    <label htmlFor="lastName">Last Name</label>   
                    <input 
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={e => handleLastName(e.target.value)}
                        {...register("lastName", { required: true })}
                    />
                    {errors.lastName && "Last name is required."}
                </div>
                <div className="fieldLabel">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => handleEmail(e.target.value)}
                        {...register("email", { required: true })}
                    />
                    {errors.email && "An email is required."}
                </div>
                <div className="fieldLabel">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={e => handlePhoneNumber(e.target.value)}
                        {...register("Phone Number", { required: true })}
                    />
                    {errors.phoneNumber && "A phone number is required."}
                </div>
                <div className="fieldLabel">
                    <label htmlFor="comment">Leave us a note:</label>
                    <textarea
                        type="text"
                        name="comment"
                        placeholder="Comment..."
                        value={comment}
                        onChange={e => handleComment(e.target.value)}
                        {...register('comment', { required: true })}
                    >
                    </textarea>
                </div>
                <input type="submit" />
            </form>
        </ContactStyles>
    )
}

export default ContactForm;