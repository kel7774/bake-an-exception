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
                {errors.quantity && "Must select a quantity."}
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
                {errors.tiers && "Must select number of fillings."}
            </div>
            <div className="fieldLabel">
                <label htmlFor="fillings-first">Choose First Filling:</label>
                <select 
                   name="filling-1"
                    id="filling-1"
                    {...register("filling-1", { required: true })} 
                    onChange={(e) => handleFillings(e)}
                >
                    <option value="no-filling">No Filling</option>
                    <option value="lemon">Lemon</option>
                    <option value="coconut">Coconut</option>
                    <option value="bavarian-creme">Bavarian Creme</option>
                    <option value="choc-bavarian">Chocolate Bavarian Creme</option>
                    <option value="raspberry">Raspberry</option>
                    <option value="blueberry">Blueberry</option>
                    <option value="cream-cheese">Cream Cheese</option>
                </select>
                {errors.filling1 && "Must select a filling."}
            </div>
            <div className="fieldLabel">
                <label htmlFor="fillings-second">Choose Second Filling:</label>
                <select 
                   name="filling2"
                    id="filling2"
                    {...register("filling2", { required: true })} 
                    onChange={(e) => handleFillings(e)}
                >
                    <option value="no-filling">No Filling</option>
                    <option value="lemon">Lemon</option>
                    <option value="coconut">Coconut</option>
                    <option value="bavarian-creme">Bavarian Creme</option>
                    <option value="choc-bavarian">Chocolate Bavarian Creme</option>
                    <option value="raspberry">Raspberry</option>
                    <option value="blueberry">Blueberry</option>
                    <option value="cream-cheese">Cream Cheese</option>
                </select>
                {errors.filling2 && "Must select a filling."}
            </div>
            <div className="fieldLabel">
                <label htmlFor="icing">Choose Icing:</label>
                <select
                    name="icing"
                    id="icing"
                    {...register("icing", { required: true })}
                    onChange={(e) => {}}
                >
                    <option value="choc-buttercream">Chocolate Buttercream</option>
                    <option value="vanilla-buttercream">Vanilla Buttercream</option>
                    <option value="marshmallow">Marshmallow</option>
                </select>
                {errors.icing && "Must select an icing."}
            </div>
            <p>**Cupcakes must be ordered by the dozen at minimum.</p>
        </div>
    )
}

export default CupcakeForm;