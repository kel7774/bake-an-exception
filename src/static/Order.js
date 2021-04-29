import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import OrderStyles from '../styles/OrderStyles';
import Cupcake from '../assets/photos/Cupcake.png';
import CakeForm from '../components/CakeForm';

function Order () {
  const { register, handleSubmit, formState: { errors }  } = useForm();
  const [options, setOptions] = useState([" ", "Cake", "Cookie", "Scone", "Bread", "Cupcake"]);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [selectedTiers, setSelectedTiers] = useState(undefined);
  const [selectedLayers, setSelectedLayers] = useState(undefined);
  function handleChange (e) {
    e.preventDefault();
    setSelectedOption(e.target.value);
  }
  function handleTiers (e) {
    e.preventDefault();
    setSelectedTiers(e.target.value);
  }
  function handleLayers (e) {
    e.preventDefault();
    setSelectedLayers(e.target.value);
  }
  return (
    <OrderStyles>
      <img src={Cupcake} alt="Cupcake" />
        <form className="dropdown">
          <label for="productType">Choose An Item:</label>
            <select 
              {...register("type")}
              onChange={e => handleChange(e)} 
              value={options.value} 
            >
              {options.map((option, i) => 
                  <option 
                    value={option.value} 
                    key={i}
                  >
                    {option}
                  </option>
              )}
            </select>
​
            {selectedOption === "Cake" && (
              <div className="selected-form-container">
                <CakeForm 
                  register={register} 
                  handleSubmit={handleSubmit} 
                  errors={errors}
                  handleTiers={handleTiers}
                  handleLayers={handleLayers}
                />
              </div>
            )}
            {selectedOption === "Cupcake" && (<div>cupcake</div>)}
            {selectedOption === "Bread" && (<div>bread</div>)}
            {selectedOption === "Scone" && (<div>scone</div>)}
            {selectedOption === "Cookie" && (<div>cookie</div>)}
​
        </form>
    </OrderStyles>
  )
}

export default Order;