import React from 'react'
import CupcakeFormStyles from '../../styles/CupcakeFormStyle'

function CupcakeForm ({ register, errors, handleFillings, handleQuantity, DeliveryInfoForm }) {
  return (
    <CupcakeFormStyles className='cupcake-form'>
      <div className='fieldLabel'>
        <label htmlFor='quantity'><span>Choose Quantity:*</span></label>
        <select
          name='quantity'
          id='quantity'
          {...register('quantity', { required: true })}
          onChange={(e) => handleQuantity(e)}
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
          <label htmlFor='fillings'><span>How many fillings?</span></label>
          <select
            name='fillings'
            id='fillings'
            className='quantity-fillings'
            {...register('fillings', { required: true })}
            onChange={(e) => handleFillings(e)}
          >
            <option value='1'>1 Filling</option>
            <option value='2'>2 Fillings(1/2 &amp; 1/2)</option>
          </select>
          {errors.tiers && 'Must select number of fillings.'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='fillings-first'><span>Choose First Filling:</span></label>
          <select
            name='filling-1'
            id='filling-1'
            {...register('filling-1', { required: true })}
            onChange={(e) => handleFillings(e)}
          >
            <option value='no-filling'>No Filling</option>
            <option value='lemon'>Lemon</option>
            <option value='coconut'>Coconut</option>
            <option value='bavarian-creme'>Bavarian Creme</option>
            <option value='choc-bavarian'>Chocolate Bavarian Creme</option>
            <option value='raspberry'>Raspberry</option>
            <option value='blueberry'>Blueberry</option>
            <option value='cream-cheese'>Cream Cheese</option>
          </select>
          {errors.filling1 && 'Must select a filling.'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='fillings-second'><span>Choose Second Filling:</span></label>
          <select
            name='filling2'
            id='filling2'
            {...register('filling2', { required: true })}
            onChange={(e) => handleFillings(e)}
          >
            <option value='no-filling'>No Filling</option>
            <option value='lemon'>Lemon</option>
            <option value='coconut'>Coconut</option>
            <option value='bavarian-creme'>Bavarian Creme</option>
            <option value='choc-bavarian'>Chocolate Bavarian Creme</option>
            <option value='raspberry'>Raspberry</option>
            <option value='blueberry'>Blueberry</option>
            <option value='cream-cheese'>Cream Cheese</option>
          </select>
          {errors.filling2 && 'Must select a filling.'}
        </div>
      </div>
      <div className='fieldLabel'>
        <label htmlFor='icing'><span>Choose Icing:</span></label>
        <select
          name='icing'
          id='icing'
          {...register('icing', { required: true })}
          onChange={(e) => {}}
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
