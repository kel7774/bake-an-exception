import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import OrderStyles from '../styles/OrderStyles';
import Cupcake from '../assets/photos/Cupcake.png';

function Order() {
  const { register } = useForm();
      return (
        <OrderStyles>
            <img src={Cupcake} alt="Cupcake" />
              <form className="dropdown">
                <label for="productType">Choose an Item:</label>
                    <select {...register} id="item">
                        <option selected value="cake">Cake</option>
                        <option value="bread">Bread</option>
                        <option value="cookie">Cookie</option>
                        <option value="scone">Scone</option>
                </select>
              </form>
        </OrderStyles>
      )

}

export default Order;