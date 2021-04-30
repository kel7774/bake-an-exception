import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import OrderStyles from '../styles/OrderStyles';
import Cupcake from '../assets/photos/Cupcake.png';
import CakeForm from '../components/forms/CakeForm';
import CookieForm from '../components/forms/CookieForm';
import CupcakeForm from '../components/forms/CupcakeForm';

function Order () {
  const { register, handleSubmit, formState: { errors }  } = useForm();
  const [options, setOptions] = useState([" ", "Cake", "Cookie", "Cupcake"]);
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
    <OrderStyles className="order-page-container">
      <div className="img-container">
        <img src={Cupcake} alt="Cupcake" />
      </div>
        <form className="dropdown">
          <label for="productType">Choose An Item:</label>
            <select 
              id="type"
              name="type"
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
            {selectedOption === "Cupcake" && (
              <div className="selected-form-container">
                <CupcakeForm 
                  register={register} 
                  handleSubmit={handleSubmit} 
                  errors={errors}
                />
              </div>
            )}
            {selectedOption === "Cookie" && (
              <div className="selected-form-container">
                <CookieForm 
                  register={register} 
                  handleSubmit={handleSubmit} 
                  errors={errors}
                />
              </div>
            )}
        </form>
    </OrderStyles>
  )
}

export default Order;