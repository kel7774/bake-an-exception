import React from 'react'
import { useForm } from 'react-hook-form'
import sendEmail from '../helpers/sendEmail'
import Cupcake from '../assets/photos/Cupcake.png'
import { OrderCakeStyles } from '../styles/OrderCake'
import BasicInfo from '../components/forms/BasicInfo'
import CakeForm from '../components/forms/CakeForm'
import DeliveryInfo from '../components/forms/DeliveryInfo'

function OrderCake () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  return (
    <OrderCakeStyles>
      <div className='img-container'>
        <img src={Cupcake} alt='Cupcake' />
      </div>
      <form className='custom-form-cake' onSubmit={handleSubmit(sendEmail)}>
        <BasicInfo
          register={register}
          errors={errors}
        />
        <CakeForm
          register={register}
          errors={errors}
        />
        <DeliveryInfo
          register={register}
          errors={errors}
        />
        <input type='submit' />
      </form>
    </OrderCakeStyles>
  )
}

export default OrderCake
