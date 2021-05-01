import React from 'react';
import { useForm } from 'react-hook-form';
import { sendForm } from 'emailjs-com';
import ContactForm from '../components/forms/ContactForm';
import ContactStyles from '../styles/ContactStyles';

function Contact() {
    const { register, errors } = useForm();
    return (
        <ContactStyles>
            <h1>Contact Us</h1>
            <p>Want to drop us a line? Have a question about a product or order? Just want to tell us how awesome we are? Fill out the form, and we'll get back to you ASAP.</p>
            <p>Have a sweet day!</p>
            <ContactForm register={register} errors={errors} />
        </ContactStyles>
    )
}

export default Contact;