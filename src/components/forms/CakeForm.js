import React from 'react';
import CakeFormStyles from '../../styles/CakeFormStyles';

function CakeForm ({ 
    register, 
    errors, 
    handleTiers, 
    handleLayers, 
}) {
    return (
        <CakeFormStyles>
                <div className="row-container">
                    <div className="fieldLabel">
                        <label htmlFor="tiers">How many tiers?</label>
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
                        <label htmlFor="layers">How many layers?*</label>
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
        </CakeFormStyles>
    )
}

export default CakeForm;