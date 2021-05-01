import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendForm, init } from 'emailjs-com';
import OrderStyles from '../styles/OrderStyles';
import Cupcake from '../assets/photos/Cupcake.png';
import BasicInfo from '../components/forms/BasicInfo';
import CakeForm from '../components/forms/CakeForm';
import CookieForm from '../components/forms/CookieForm';
import CupcakeForm from '../components/forms/CupcakeForm';

function Order () {
  const user_name = init('user_h88MUUL2z7LyThRYixx88');
  const { register, handleSubmit, formState: { errors }  } = useForm();
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [options, setOptions] = useState([" ", "Cake", "Cookie", "Cupcake"]);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [selectedTiers, setSelectedTiers] = useState(undefined);
  const [selectedLayers, setSelectedLayers] = useState(undefined);
  const [formSubmitted, setFormSubmitted] = useState(false);

function sendEmail(e) {
  sendForm('service_d3eb9m9', 'template_mvxqgvp', '.dropdown', user_name)
  .then((result) => {
    console.log('result: ', result.text, result.status);
  }, (error) => {
    console.log('error: ',error.text);
  });
}
  function handleFirstName (e) {
    e.preventDefault();
    setFirstName(e.target.value);
  };

  function handleLastName (e) {
    e.preventDefault();
    setLastName(e.target.value);
  };

  function handleEmail (e) {
    e.preventDefault();
    setEmail(e.target.value);
  };

  function handlePhoneNumber (e) {
    e.preventDefault();
    setPhoneNumber(e.target.value);
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

  const BasicInfoForm = 
  <BasicInfo 
    register={register}
    errors={errors}
    firstName={firstName}
    lastName={lastName}
    email={email}
    phoneNumber={phoneNumber}
    handleFirstName={handleFirstName}
    handleLastName={handleLastName}
    handleEmail={handleEmail}
    handlePhoneNumber={handlePhoneNumber}
  />;

  const submitButton = <input type="submit" />

  return (
    <OrderStyles className="order-page-container">
      <div className="img-container">
        <img src={Cupcake} alt="Cupcake" />
      </div>
        <form className="dropdown" onSubmit={handleSubmit(sendEmail)}>
          <label htmlFor="productType">Choose An Item:</label>
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
                {BasicInfoForm}
                <CakeForm 
                  register={register} 
                  errors={errors}
                  handleTiers={handleTiers}
                  handleLayers={handleLayers}
                />
                {submitButton}
              </div>
            )}
            {selectedOption === "Cupcake" && (
              <div className="selected-form-container">
                {BasicInfoForm}
                <CupcakeForm 
                  register={register} 
                  errors={errors}
                />
                {submitButton}
              </div>
            )}
            {selectedOption === "Cookie" && (
              <div className="selected-form-container">
                {BasicInfoForm}
                <CookieForm 
                  register={register} 
                  errors={errors}
                />
                {submitButton}
              </div>
            )}
        </form>
    </OrderStyles>
  )
}

export default Order;