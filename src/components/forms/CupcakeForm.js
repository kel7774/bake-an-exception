import React from 'react';

function CupcakeForm ({ register, errors, handleFillings, handleQuantity }) {
    return (
        <div className="cupcake-form">
            <div className="fieldLabel">
                <label htmlFor="quantity">Choose Quantity:</label>
                <select 
                   name="quantity"
                    id="quantity"
                    {...register("quantity", { required: true })} 
                    onChange={(e) => handleQuantity(e)}
                >
                    <option value="1Dozen">1 Dozen - 12 Cupcakes</option>
                    <option value="2Dozen">2 Dozen - 24 Cupcakes</option>
                    <option value="3Dozen">3 Dozen - 36 Cupcakes</option>
                    <option value="3Dozen">4 Dozen - 48 Cupcakes</option>
                </select>
                {errors.tiers && "Must select number of fillings"}
            </div>
            <div className="fieldLabel">
                <label htmlFor="fillings">How many fillings?</label>
                <select 
                   name="fillings"
                    id="fillings"
                    {...register("fillings", { required: true })} 
                    onChange={(e) => handleFillings(e)}
                >
                    <option value="1">1 Filling</option>
                    <option value="2">2 Fillings(1/2 & 1/2)</option>
                </select>
                {errors.tiers && "Must select number of fillings"}
            </div>
            <p>**Cupcakes must be ordered by the dozen at minimum.</p>
        </div>
    )
}

export default CupcakeForm;