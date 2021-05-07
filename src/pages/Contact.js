import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import sendEmail from '../helpers/sendEmail';
import OreoCheesecake from '../assets/photos/OreoCheesecake.png';
import FruitLoopCake from '../assets/photos/FruitLoopCake.png';
import ContactForm from '../components/forms/ContactForm';
import ContactStyles from '../styles/ContactStyles';

function Contact() {
    const [firstName, setFirstName] = useState(undefined);
    const [lastName, setLastName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [phoneNumber, setPhoneNumber] = useState(undefined);
    const [comment, setComment] = useState(undefined);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleFirstName = (e) => {
        e.preventDefault();
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        e.preventDefault();
        setLastName(e.target.value);
    }
    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const handlePhoneNumber = (e) => {
        e.preventDefault();
        setPhoneNumber(e.target.value);
    }
    const handleComment = (e) => {
        e.preventDefault();
        setComment(e.target.value);
    }
    return (
        <ContactStyles className="contact-page-container">
            <h1>Contact Us</h1>
            <img src={OreoCheesecake} alt="Oreo Cheesecake" />
            <img src={FruitLoopCake} alt="Fruit Loop Cake" />
            <p>Want to drop us a line? Have a question about a product or order? Just want to tell us how awesome we are? Fill out the form, and we'll get back to you ASAP.</p>
            <p>Have a sweet day!</p>
            <ContactForm 
                className="contact-form" 
                register={register} 
                errors={errors} 
                firstName={firstName}
                lastName={lastName}
                email={email}
                phoneNumber={phoneNumber}
                comment={comment}
                handleFirstName={handleFirstName}
                handleLastName={handleLastName}
                handleEmail={handleEmail}
                handlePhoneNumber={handlePhoneNumber}
                handleComment={handleComment}
                handleSubmit={handleSubmit}
                sendEmail={sendEmail}
            />
        </ContactStyles>
    )
}

export default Contact;