import React from 'react'
import { Controller } from 'react-hook-form'
import { FormControlLabel, RadioGroup, Radio } from '@material-ui/core'
import CakeFormStyles from '../../styles/CakeFormStyles'
import DeliveryInfo from '../forms/DeliveryInfo'

function CakeForm ({
  register,
  errors,
  control,
  watch,
  handleSize,
  handleTiers,
  handleLayers,
  handleCakeFlavors,
  handleFillings,
  handleColorTheme
}) {
  const watchRadio = watch('Yes', 'No')
  return (
    <CakeFormStyles className='cake-form'>
      <div className='dropdown-container'>
        <div className='fieldLabel'>
          <label htmlFor='size'><span>Choose Size:</span></label>
          <select
            name='size'
            id='size'
            {...register('size', { required: true })}
            onChange={e => handleSize(e)}
          >
            <option value='Round - 6in'>Round - 6in</option>
            <option value='Round - 8in'>Round - 8in</option>
            <option value='Round - 10in'>Round - 10in</option>
            <option value='Sheet - Serves 6'>Sheet - Serves 6</option>
            <option value='Sheet - Serves 8'>Sheet - Serves 8</option>
            <option value='Sheet - Serves 10'>Sheet - Serves 10</option>
          </select>
          {errors.tiers && 'Must select a size.'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='tiers'><span>Choose Tiers</span></label>
          <select
            name='tiers'
            id='tiers'
            {...register('tiers', { required: true })}
            onChange={(e) => handleTiers(e)}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          {errors.tiers && 'Must select number of tiers'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='layers'><span>Choose Layers*</span></label>
          <select
            name='layers'
            id='layers'
            {...register('layers', { required: true })}
            onChange={(e) => handleLayers(e)}
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
          <label htmlFor='flavors'><span>Cake Flavor Requests:</span></label>
          <textarea
            type='text'
            name='flavors'
            placeholder='Enter in desired flavor(s)'
            {...register('flavors', { required: true })}
            onChange={(e) => handleCakeFlavors(e)}
          />
          {errors.flavors && 'Must enter in desired flavor(s)'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='fillings'><span>Filling Requests:</span></label>
          <textarea
            type='text'
            name='fillings'
            placeholder='Enter in desired filling(s)'
            {...register('fillings', { required: true })}
            onChange={(e) => handleFillings(e)}
          />
          {errors.fillings && 'Must enter in desired filling(s)'}
        </div>
        <div className='fieldLabel'>
          <label htmlFor='color-theme'><span>Theme Request:</span></label>
          <textarea
            type='text'
            name='theme'
            placeholder='Describe your desired theme'
            {...register('theme', { required: true })}
            onChange={(e) => handleColorTheme(e)}
          />
          {errors.theme && 'Must enter in a desired theme'}
        </div>
      </div>
      <div className='delivery'>
        <div className='fieldLabel'>
          <label><span>Would you like this order delivered?**</span></label>
          <Controller
            name='Delivery'
            defaultValue='No'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup aria-label='delivery' {...field}>
                <FormControlLabel
                  {...register('Yes')}
                  value='Yes'
                  control={<Radio />}
                  label='Yes'
                />
                <FormControlLabel
                  {...register('No')}
                  value='No'
                  control={<Radio />}
                  label='No'
                />
              </RadioGroup>
            )}
          />
          {watchRadio === 'Yes' && <DeliveryInfo register={register} errors={errors} />}
        </div>
      </div>
      <p>
        *Please note that the more layers added will result in thinner cakes. The maximum recommended number of layers on any one cake is 4.
      </p>
      <p>
        **Any requests for delivery will be left strictly up to the owner's discretion. As a courtesy, we ask that you only request delivery for the following zip codes: 70501, 70503, 70508, 70505, ect. Any others will be subject for pre-approval.
      </p>
    </CakeFormStyles>
  )
}

export default CakeForm
