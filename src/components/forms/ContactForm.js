import React from 'react'
import ContactStyles from '../../styles/ContactStyles'

function ContactForm ({
  register,
  errors,
  handleSubmit,
  sendEmail
}) {
  return (
    <ContactStyles className='contact-form-container'>
      <form onSubmit={handleSubmit(sendEmail)}>
        <div className='fieldLabel'>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            {...register('firstName', { required: true })}
          />
          {errors.firstName && 'First name is required.'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            {...register('lastName', { required: true })}
          />
          {errors.lastName && 'Last name is required.'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            {...register('email', { required: true })}
          />
          {errors.email && 'An email is required.'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input
            type='tel'
            name='phoneNumber'
            placeholder='Phone Number'
            {...register('Phone Number', { required: true })}
          />
          {errors.phoneNumber && 'A phone number is required.'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='comment'>Leave us a note:</label>
          <textarea
            type='text'
            className='comment-textarea'
            name='comment'
            placeholder='Comment...'
            {...register('comment', { required: true })}
          />
        </div>
        <input type='submit' />
      </form>
    </ContactStyles>
  )
}

export default ContactForm
