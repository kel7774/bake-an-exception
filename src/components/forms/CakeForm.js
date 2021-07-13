import React from 'react'
import { sizes } from '../../helpers/options'
import CakeFormStyles from '../../styles/CakeFormStyles'

function CakeForm ({
  register,
  errors
}) {
  return (
    <CakeFormStyles className='cake-form'>
      <div className='dropdown-container'>
        <div className='fieldLabel'>
          <label htmlFor='size'>Size:</label>
          <select
            name='size'
            id='size'
            {...register('size', { required: true })}
          >
            {sizes.map((size, i) => (
              <option key={i} value={size}>{size}</option>
            ))}
          </select>
          {errors.tiers && 'Must select a size.'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='tiers'>Tier(s)</label>
          <select
            name='tiers'
            id='tiers'
            {...register('tiers', { required: true })}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          {errors.tiers && 'Must select number of tiers'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='layers'>Layers*</label>
          <select
            name='layers'
            id='layers'
            {...register('layers', { required: true })}
          >
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='6'>6</option>
          </select>
          {errors.layers && 'Must select number of layers'}
        </div>
      </div>
      <div className='text-container'>
        <div className='fieldLabel'>
          <label htmlFor='flavors'>Cake Flavor(s)</label>
          <textarea
            type='text'
            name='flavors'
            placeholder='Enter in desired flavor(s)'
            {...register('flavors', { required: true })}
          />
          {errors.flavors && 'Must enter in desired flavor(s)'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='fillings'>Filling(s)</label>
          <textarea
            type='text'
            name='fillings'
            placeholder='Enter in desired filling(s)'
            {...register('fillings', { required: true })}
          />
          {errors.fillings && 'Must enter in desired filling(s)'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='color-theme'>Theme</label>
          <textarea
            type='text'
            name='colorTheme'
            placeholder='Describe your desired theme'
            {...register('theme', { required: true })}
          />
          {errors.theme && 'Must enter in a desired theme'}
        </div>
      </div>
      <p>
        *Please note that the more layers added will result in thinner cakes. The maximum recommended number of layers on any one cake is 4.
      </p>
    </CakeFormStyles>
  )
}

export default CakeForm
