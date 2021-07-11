import React from 'react'
import { useForm } from 'react-hook-form'
import sendEmail from '../helpers/sendEmail'
import Cupcake from '../assets/photos/Cupcake.png'
import { OrderCakeStyles } from '../styles/OrderCake'
import BasicInfo from '../components/forms/BasicInfo'
import CupcakeForm from '../components/forms/CupcakeForm'
import DeliveryInfo from '../components/forms/DeliveryInfo'

function OrderCupcakes () {
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
        <CupcakeForm
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

export default OrderCupcakes
