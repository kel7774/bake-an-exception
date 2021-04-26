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
                  <select 
                    {...register("type")}
                    onChange={e => handleChange(e)} 
                    value={options.value} 
                  >
                      {options.map((option, i) => 
                        <div>
                          <option 
                            value={option.value} 
                            key={i}
                          >
                            {option}
                          </option>
                          {option === "Cake" && (<div>cake</div>)}
                          {option === "Cupcake" && (<div>cupcake</div>)}
                          {option === "Bread" && (<div>bread</div>)}
                          {option === "Scone" && (<div>scone</div>)}
                          {option === "Cookie" && (<div>cookie</div>)}
                        </div>
                      )}
                  </select>
            </form>
      </OrderStyles>
      )
}

export default Order;