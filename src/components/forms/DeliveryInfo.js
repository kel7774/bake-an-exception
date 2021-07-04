import React from 'react'
import DeliveryInfoStyles from '../../styles/DeliveryInfoStyles'

function DeliveryInfo ({ register, errors }) {
  return (
    <DeliveryInfoStyles className='delivery-info-container'>
      <div className='fieldLabel'>
        <label htmlFor='address'><span>Address</span></label>
        <input
          {...register('address', { required: true })}
          autoComplete='street-address'
          name='address'
          placeholder='Address'
        />
        {errors.address && 'Must enter in a street'}
      </div>
      <div className='fieldLabel'>
        <label htmlFor='city'><span>City</span></label>
        <input
          {...register('city', { required: true })}
          autoComplete='address-level2'
          name='city'
          placeholder='City'
        />
        {errors.city && 'Must enter in a city'}
      </div>
      <div className='fieldLabel'>
        <label htmlFor='state'><span>State</span></label>
        <input
          {...register('state', { required: true })}
          autoComplete='address-level1'
          name='state'
          placeholder='State'
        />
        {errors.state && 'Must enter in a state'}
      </div>
      <div className='fieldLabel'>
        <label htmlFor='zip'><span>Zip Code</span></label>
        <input
          {...register('postalCode', { required: true })}
          autoComplete='postal-code'
          name='postalCode'
          placeholder='Zip Code'
        />
        {errors.postalCode && 'Must enter in a zip code'}
      </div>
      <div className='fieldLabel'>
        <label><span>Delivery Instructions:</span></label>
        <textarea
          {...register('deliveryInstructions')}
          type='text'
          name='deliveryInstructions'
          placeholder='Delivery Instructions (optional)'
        />
      </div>
    </DeliveryInfoStyles>
  )
}

export default DeliveryInfo
