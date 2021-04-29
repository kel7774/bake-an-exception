import React from 'react';
import { useForm } from 'react-hook-form';
import ContactStyles from '../styles/ContactStyles';

function Contact() {
    const { register, handleSubmit } = useForm();
    return (
        <ContactStyles>
            <h1>Contact Us</h1>
            <p>Want to drop us a line? Have a question about a product or order? Just want to tell us how awesome we are? Fill out the form, and we'll get back to you ASAP. </p>
            <p>Have a sweet day!</p>
            <form>
                <input {...register('firstName', { required: true })} placeholder="First Name"/>
                <input {...register('lastName', { required: true })} placeholder="Last Name" />
                <input {...register('email', { required: true })} placeholder="Email" />
                <input {...register('phoneNumber', { required: true})} placeholder="Phone Number" />
                <input type="submit"/>
            </form>
        </ContactStyles>
    )
}

export default Contact;