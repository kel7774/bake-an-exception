import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as emailjs from 'emailjs-com';
import OrderStyles from '../styles/OrderStyles';
import Cupcake from '../assets/photos/Cupcake.png';
import CakeForm from '../components/forms/CakeForm';
import CookieForm from '../components/forms/CookieForm';
import CupcakeForm from '../components/forms/CupcakeForm';

function Order () {
  const { register, handleSubmit, formState: { errors }  } = useForm();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [options, setOptions] = useState([" ", "Cake", "Cookie", "Cupcake"]);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [selectedTiers, setSelectedTiers] = useState(undefined);
  const [selectedLayers, setSelectedLayers] = useState(undefined);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function submit(e) {
    e.preventDefault();
    let templateParams = {};
    emailjs.send(
      'gmail',
      'template',
      'templateParams',
      'user___'
    )
  }

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
        <form className="dropdown" onSubmit={handleSubmit(submit)}>
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
                  errors={errors}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  phoneNumber={phoneNumber}
                  handleTiers={handleTiers}
                  handleLayers={handleLayers}
                />
              </div>
            )}
            {selectedOption === "Cupcake" && (
              <div className="selected-form-container">
                <CupcakeForm 
                  register={register} 
                  errors={errors}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  phoneNumber={phoneNumber}
                />
              </div>
            )}
            {selectedOption === "Cookie" && (
              <div className="selected-form-container">
                <CookieForm 
                  register={register} 
                  errors={errors}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  phoneNumber={phoneNumber}
                />
              </div>
            )}
        </form>
    </OrderStyles>
  )
}

export default Order;