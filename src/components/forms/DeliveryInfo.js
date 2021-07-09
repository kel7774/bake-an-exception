import React, { useState } from 'react'
import DeliveryInfoStyles from '../../styles/DeliveryInfoStyles'

function DeliveryInfo ({ register, errors }) {
  const [checked, setChecked] = useState('No')
  return (
    <DeliveryInfoStyles className='delivery-form-container'>
      <label>Would you like this order delivered?**</label>
      <input
        {...register('Yes', { required: true })}
        type='radio'
        value='yes'
        onClick={() => setChecked('Yes')}
        checked={checked === 'Yes'}
      />
      <input
        {...register('No', { required: true })}
        type='radio'
        value='no'
        onClick={() => setChecked('No')}
        checked={checked === 'No'}
      />
      {checked === 'Yes' && (
        <div>
          <div className='row-container'>
            <div className='delivery-field'>
              <label htmlFor='address'>Address</label>
              <input
                {...register('address', { required: true })}
                autoComplete='street-address'
                name='address'
                placeholder='Address'
              />
              {errors.address && 'Must enter in a street'}
            </div>
            <div className='delivery-field'>
              <label htmlFor='city'>City</label>
              <input
                {...register('city', { required: true })}
                autoComplete='address-level2'
                name='city'
                placeholder='City'
              />
              {errors.city && 'Must enter in a city'}
            </div>
          </div>
          <div className='row-container'>
            <div className='delivery-field'>
              <label htmlFor='state'>State</label>
              <input
                {...register('state', { required: true })}
                autoComplete='address-level1'
                name='state'
                placeholder='State'
              />
              {errors.state && 'Must enter in a state'}
            </div>
            <div className='delivery-field'>
              <label htmlFor='zip'>Zip Code</label>
              <input
                {...register('postalCode', { required: true })}
                autoComplete='postal-code'
                name='postalCode'
                placeholder='Zip Code'
              />
              {errors.postalCode && 'Must enter in a zip code'}
            </div>
          </div>
          <div className='delivery-field'>
            <label>Delivery Instructions (optional):</label>
            <textarea
              {...register('deliveryInstructions')}
              type='text'
              name='deliveryInstructions'
              placeholder='Delivery Instructions (optional)'
            />
          </div>
        </div>
      )}
      <p>
        **Any requests for delivery will be left strictly up to the owner's discretion. As a courtesy, we ask that you only request delivery for the following zip codes: 70501, 70503, 70508, 70505, ect. Any others will be subject for pre-approval.
      </p>
    </DeliveryInfoStyles>
  )
}

export default DeliveryInfo
