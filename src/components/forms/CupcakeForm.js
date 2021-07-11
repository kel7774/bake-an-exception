import React from 'react'
import { fillingOptions } from '../../helpers/options'
import CupcakeFormStyles from '../../styles/CupcakeFormStyle'

function CupcakeForm ({ register, errors }) {
  return (
    <CupcakeFormStyles className='cupcake-form'>
      <div className='fieldLabel'>
        <label htmlFor='quantity'>Quantity:*</label>
        <select
          name='quantity'
          id='quantity'
          {...register('quantity', { required: true })}
        >
          <option value='1Dozen'>1 Dozen - 12 Cupcakes</option>
          <option value='2Dozen'>2 Dozen - 24 Cupcakes</option>
          <option value='3Dozen'>3 Dozen - 36 Cupcakes</option>
          <option value='3Dozen'>4 Dozen - 48 Cupcakes</option>
        </select>
        {errors.quantity && 'Must select a quantity.'}
      </div>
      <div className='fillings-container'>
        <div className='fieldLabel'>
          <label htmlFor='fillings'>How many fillings?</label>
          <select
            name='fillings'
            id='fillings'
            className='quantity-fillings'
            {...register('fillings', { required: true })}
          >
            <option value='1'>1 Filling</option>
            <option value='2'>2 Fillings(1/2 &amp; 1/2)</option>
          </select>
          {errors.tiers && 'Must select number of fillings.'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='fillings-first'>First Filling:</label>
          <select
            name='filling-1'
            id='filling-1'
            {...register('filling-1', { required: true })}
          >
            {fillingOptions.map((option, i) => (
              <option key={i} value={option.value}>{option}</option>
            ))}
          </select>
          {errors.filling1 && 'Must select a filling.'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='fillings-second'>Second Filling:</label>
          <select
            name='filling2'
            id='filling2'
            {...register('filling2', { required: true })}
          >
            {fillingOptions.map((option, i) => (
              <option key={i} value={option.value}>{option}</option>
            ))}
          </select>
          {errors.filling2 && 'Must select a filling.'}
        </div>
      </div>
      <div className='fieldLabel'>
        <label htmlFor='icing'>Icing:</label>
        <select
          name='icing'
          id='icing'
          {...register('icing', { required: true })}
        >
          <option value='choc-buttercream'>Chocolate Buttercream</option>
          <option value='vanilla-buttercream'>Vanilla Buttercream</option>
          <option value='marshmallow'>Marshmallow</option>
        </select>
        {errors.icing && 'Must select an icing.'}
      </div>

      <p>*Cupcakes must be ordered by the dozen at minimum.</p>
    </CupcakeFormStyles>
  )
}

export default CupcakeForm
