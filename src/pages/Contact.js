import React from 'react'
import { useForm } from 'react-hook-form'
import sendEmail from '../helpers/sendEmail'
import OreoCheesecake from '../assets/photos/OreoCheesecake.png'
import FruitLoopCake from '../assets/photos/FruitLoopCake.png'
import ContactForm from '../components/forms/ContactForm'
import ContactStyles from '../styles/ContactStyles'

function Contact () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  return (
    <ContactStyles className='contact-page-container'>
      <h1>Contact Us</h1>
      <img src={OreoCheesecake} alt='Oreo Cheesecake' />
      <img src={FruitLoopCake} alt='Fruit Loop Cake' />
      <p>Want to drop us a line? Have a question about a product or order? Just want to tell us how awesome we are? Fill out the form, and we'll get back to you ASAP.</p>
      <p>Have a sweet day!</p>
      <ContactForm
        className='contact-form'
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        sendEmail={sendEmail}
      />
    </ContactStyles>
  )
}

export default Contact
