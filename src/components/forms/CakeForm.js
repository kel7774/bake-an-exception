import React from 'react';
import BasicInfo from './BasicInfo';
import CakeFormStyles from '../../styles/CakeFormStyles';

function CakeForm ({ 
    register, 
    errors, 
    handleTiers, 
    handleLayers, 
    firstName, 
    lastName, 
    email, 
    phoneNumber  
}) {
    return (
        <CakeFormStyles>
                <BasicInfo 
                    register={register} 
                    errors={errors} 
                    firstName={firstName} 
                    lastName={lastName} 
                    email={email} 
                    phoneNumber={phoneNumber} 
                />
                <div className="row-container">
                    <div className="fieldLabel">
                        <label for="tiers">How many tiers?</label>
                        <select 
                            name="tiers"
                            id="tiers"
                            {...register("tiers", { required: true })} 
                            onChange={(e) => handleTiers(e)}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        {errors.tiers && "Must select number of tiers"}
                    </div>
                    <div className="fieldLabel">
                        <label for="layers">How many layers?*</label>
                        <p>*Please note that the more layers added will result in thinner cakes. The maximum recommended number of layers on any one cake is 4.</p>
                        <select 
                            name="layers"
                            id="layers"
                            {...register("layers", { required: true })} 
                            onChange={(e) => handleLayers(e)}
                        >
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                        </select>
                        {errors.layers && "Must select number of layers"}
                    </div>
                </div>
                <input type="submit" />
        </CakeFormStyles>
    )
}

export default CakeForm;