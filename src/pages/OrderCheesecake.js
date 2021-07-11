import React from 'react'
import { useForm } from 'react-hook-form'
import sendEmail from '../helpers/sendEmail'
import Cupcake from '../assets/photos/Cupcake.png'
import { OrderCakeStyles } from '../styles/OrderCake'
import BasicInfo from '../components/forms/BasicInfo'
import CheesecakeForm from '../components/forms/CheesecakeForm'
import DeliveryInfo from '../components/forms/DeliveryInfo'

function OrderCheesecake () {
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
        <CheesecakeForm
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

export default OrderCheesecake
