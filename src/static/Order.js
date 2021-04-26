import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import OrderStyles from '../styles/OrderStyles';
import Cupcake from '../assets/photos/Cupcake.png';

function Order() {
  const { register } = useForm();
  const [options, setOptions] = useState(["Cake", "Cookie", "Scone", "Bread", "Cupcakes"]);
  const handleChange = (e) => {
    setOptions(e);
  }
      return (
        <OrderStyles>
            <img src={Cupcake} alt="Cupcake" />
              <form className="dropdown" onChange={handleChange}>
                <label for="productType">Choose an Item:</label>
                    <select {...register("type")}>
                        {options.map((e, i) => 
                          <option value={i} key={i}>{e}</option>
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