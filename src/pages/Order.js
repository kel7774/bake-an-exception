import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import sendEmail from '../helpers/sendEmail';
import { useStorage } from '../hooks/useStorage';
import OrderStyles from '../styles/OrderStyles';
import Cupcake from '../assets/photos/Cupcake.png';
import BasicInfo from '../components/forms/BasicInfo';
import DeliveryInfo from '../components/forms/DeliveryInfo';
import CakeForm from '../components/forms/CakeForm';
import CookieForm from '../components/forms/CookieForm';
import CupcakeForm from '../components/forms/CupcakeForm';
import CheesecakeForm from '../components/forms/CheesecakeForm'
/// todo: shove user_name in env
function Order () {
  const { register, handleSubmit, formState: { errors }, control, watch } = useForm();
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [options, setOptions] = useState(["", "Cake", "Cookie", "Cupcake", "Cheesecake"]);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [quantity, setQuantity] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [selectedTiers, setSelectedTiers] = useState(undefined);
  const [selectedLayers, setSelectedLayers] = useState(undefined);
  const [cakeFlavors, setCakeFlavors] = useState(' ');
  const [fillings, setFillings] = useState(' ');
  const [colorTheme, setColorTheme] = useState(' ');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];

  function handleUpload (e) {
    let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (types.includes(selectedFile.type)) {
                setError(null);
                setFile(selectedFile);
            } else {
                setFile(null);
                setError("Please select an image file (png or jpg)");
            }
        }
  }

const { progress, url } = useStorage(file);

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

  function handleQuantity (e) {
    e.preventDefault();
    setQuantity(e.target.value);
  }

  function handleSize (e) {
    e.preventDefault();
    setSize(e.target.value);
  }

  function handleTiers (e) {
    e.preventDefault();
    setSelectedTiers(e.target.value);
  }

  function handleLayers (e) {
    e.preventDefault();
    setSelectedLayers(e.target.value);
  }

  function handleCakeFlavors (e) {
    e.preventDefault();
    setCakeFlavors(e.target.value);
  }

  function handleFillings(e) {
    e.preventDefault();
    setFillings(e.target.value);
  }

  function handleColorTheme (e) {
    e.preventDefault();
    setColorTheme(e.target.value);
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

  const DeliveryInfoForm = <DeliveryInfo register={register} errors={errors} />

  const submitButton = <input type="submit" />

  return (
    <OrderStyles className="order-page-container">
      <div className="img-container">
        <img src={Cupcake} alt="Cupcake" />
      </div>
        <form className="dropdown" onSubmit={handleSubmit(sendEmail)}>
          <label className="choose-label" htmlFor="productType">Choose An Item:</label>
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
                  error={error}
                  control={control}
                  watch={watch}
                  handleUpload={handleUpload}
                  progress={progress}
                  url={url}
                  file={file}
                  handleSize={handleSize}
                  handleTiers={handleTiers}
                  handleLayers={handleLayers}
                  handleCakeFlavors={handleCakeFlavors}
                  handleFillings={handleFillings}
                  handleColorTheme={handleColorTheme}
                  DeliveryInfoForm={DeliveryInfoForm}
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
                  handleQuantity={handleQuantity}
                  handleFillings={handleFillings}
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
            {selectedOption === "Cheesecake" && (
              <div className="selected-form-container">
                {BasicInfoForm}
                <CheesecakeForm 
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