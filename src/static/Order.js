import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import OrderStyles from '../styles/OrderStyles';
import Cupcake from '../assets/photos/Cupcake.png';

function Order() {
  const { register } = useForm();
  const [options, setOptions] = useState(["Cake", "Cookie", "Scone", "Bread", "Cupcakes"]);
  console.group("register", register);
  console.log("options: ", options);
      return (
        <OrderStyles>
            <img src={Cupcake} alt="Cupcake" />
              <form className="dropdown">
                <label for="productType">Choose an Item:</label>
                    <select {...register("type")}>
                        {options.map((e, i) => 
                          <option value={i} key={i}>{e}</option>
                        )}
                    </select>
              </form>
        </OrderStyles>
      )
}

export default Order;