import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import OrderStyles from '../styles/OrderStyles';
import Cupcake from '../assets/photos/Cupcake.png';

function Order() {
  const { register } = useForm();
  const [options, setOptions] = useState(["Cake", "Cookie", "Scone", "Bread", "Cupcakes"]);
  const handleChange = (e) => {
    e.preventDefault();
    setOptions(e.target.value);
  }

      return (
        <OrderStyles>
            <img src={Cupcake} alt="Cupcake" />
              <form className="dropdown">
                <label for="productType">Choose an Item:</label>
                    <select onChange={e => handleChange(e)} value={options.value} {...register("type")}>
                        {options.map((option, i) => 
                          <option value={option.value} key={i}>{option}</option>
                        )}
                    </select>
              </form>
              {
                options[0] ? <div>cake</div> : 
                options[1] ? <div>cookie</div> :
                options[2] ? <div>scone</div> :
                options[3] ? <div>bread</div> :
                options[4] ? <div>cupcakes</div> :
                null
              }
        </OrderStyles>
      )
}

export default Order;