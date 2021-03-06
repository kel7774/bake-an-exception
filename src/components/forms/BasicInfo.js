import React from 'react'
import BasicInfoStyles from '../../styles/BasicInfoStyles'

function BasicInfo ({
  register,
  errors
}) {
  return (
    <BasicInfoStyles className='basic-info-container'>
      <div className='fieldLabel'>
        <label htmlFor='firstName'><span>First Name</span></label>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          {...register('firstName', { required: true })}
        />
        {errors.firstName && 'First name is required.'}
      </div>
      <div className='fieldLabel'>
        <label htmlFor='lastName'><span>Last Name</span></label>
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          {...register('lastName', { required: true })}
        />
        {errors.lastName && 'Last name is required.'}
      </div>
      <div className='fieldLabel'>
        <label htmlFor='email'><span>Email Address</span></label>
        <input
          type='email'
          name='email'
          placeholder='Email Address'
          {...register('email', {
            required: 'required',
            pattern: {
              value: /\S+@\S+.\S+/,
              message: 'Entered value does not match email format.'
            }
          })}
        />
        {errors.email && 'Email address is required.'}
      </div>
      <div className='fieldLabel'>
        <label htmlFor='phoneNumber'><span>Phone Number</span></label>
        <input
          type='tel'
          name='phoneNumber'
          placeholder='Phone Number'
          {...register('phoneNumber', {
            required: 'required',
            pattern: {
              value: /\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/
            }
          }
          )}
        />
        {errors.phoneNumber && 'Phone number is required.'}
      </div>
    </BasicInfoStyles>
  )
}

export default BasicInfo
