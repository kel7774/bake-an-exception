import React from 'react'
import DeliveryInfoStyles from '../../styles/DeliveryInfoStyles'

function DeliveryInfo ({ register }) {
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
      </div>
      <div className='fieldLabel'>
        <label htmlFor='city'><span>City</span></label>
        <input
          {...register('city', { required: true })}
          autoComplete='address-level2'
          name='city'
          placeholder='City'
        />
      </div>
      <div className='fieldLabel'>
        <label htmlFor='state'><span>State</span></label>
        <input
          {...register('state', { required: true })}
          autoComplete='address-level1'
          name='state'
          placeholder='State'
        />
      </div>
      <div className='fieldLabel'>
        <label htmlFor='zip'><span>Zip Code</span></label>
        <input
          {...register('postalCode', { required: true })}
          autoComplete='postal-code'
          name='postalCode'
          placeholder='Zip Code'
        />
      </div>
      <div className='fieldLabel'>
        <label><span>Delivery Instructions:</span></label>
        <input
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
