import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
    const { register } = useForm();
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Want to drop us a line? Have a question about a product or order? Just want to tell us how awesome we are? Fill out a form, and we'll get back to you ASAP. Have a sweet day!</p>
            <form>
                <input {...register('firstName', { required: true })} placeholder="First Name"/>
                <input {...register('lastName', { required: true })} placeholder="Last Name" />
                <input {...register('email', { required: true })} placeholder="Email" />
                <input {...register('phoneNumber', { required: true})} placeholder="Phone Number" />
            </form>
        </div>
    )
}

export default Contact;