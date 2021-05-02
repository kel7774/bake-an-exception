import React from 'react';
import CakeFormStyles from '../../styles/CakeFormStyles';

function CakeForm ({ 
    register, 
    errors, 
    size,
    handleSize,
    handleTiers, 
    handleLayers, 
    handleCakeFlavors,
    handleFillings,
}) {
    return (
        <CakeFormStyles className="cake-form">
                <div className="fieldLabel">
                    <label htmlFor="size">Choose a Size:</label>
                    <select 
                        name="size"
                        id="size"
                        {...register("size", { required: true })} 
                        onChange={e => handleSize(e)}
                        value={size.value}
                    >
                        <option>Round - 6in</option>
                        <option>Round - 8in</option>
                        <option>Round - 10in</option>
                        <option>Sheet - Serves 6</option>
                        <option>Sheet - Serves 8</option>
                        <option>Sheet - Serves 10</option>
                    </select>
                    {errors.tiers && "Must select a size"}
                </div>
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
                    {/* <p>*Please note that the more layers added will result in thinner cakes. The maximum recommendednumber of layers on any one cake is 4.</p> */}
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
                <div className="fieldLabel">
                    <label htmlFor="flavors">Cake Flavor Requests:</label>
                    <input 
                        type="text" 
                        name="flavors" 
                        placeholder="Enter in desired flavor(s)"
                        {...register("flavors", { required: true })}
                        onChange={(e) => handleCakeFlavors(e)}
                    />
                </div>
                <div className="fieldLabel">
                    <label htmlFor="fillings">Cake Filling Requests:</label>
                    <input 
                        type="text" 
                        name="fillings" 
                        placeholder="Enter in desired filling(s)"
                        {...register("fillings", { required: true })}
                        onChange={(e) => handleFillings(e)}
                    />
                </div>
        </CakeFormStyles>
    )
}

export default CakeForm;