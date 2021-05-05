import React from 'react';
import { Controller } from 'react-hook-form';
import { FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import CakeFormStyles from '../../styles/CakeFormStyles';

function CakeForm ({ 
    register, 
    errors, 
    control,
    progress,
    url,
    error,
    file,
    handleUpload,
    handleSize,
    handleTiers, 
    handleLayers, 
    handleCakeFlavors,
    handleFillings,
    handleColorTheme,
    DeliveryInfoForm
}) {
    return (
        <CakeFormStyles className="cake-form">
            <div className="dropdown-container">
                <div className="fieldLabel">
                        <label htmlFor="size">Choose a Size:</label>
                        <select 
                            name="size"
                            id="size"
                            {...register("size", { required: true })} 
                            onChange={e => handleSize(e)}
                        >
                            <option value="Round - 6in">Round - 6in</option>
                            <option value="Round - 8in">Round - 8in</option>
                            <option value="Round - 10in">Round - 10in</option>
                            <option value="Sheet - Serves 6">Sheet - Serves 6</option>
                            <option value="Sheet - Serves 8">Sheet - Serves 8</option>
                            <option value="Sheet - Serves 10">Sheet - Serves 10</option>
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
            <div className="text-container">
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
                    <div className="fieldLabel">
                        <label htmlFor="color-theme">Color Theme:</label>
                        <input 
                            type="text" 
                            name="color-theme" 
                            placeholder="What kind of color theme are you interested in?"
                            {...register("color-theme", { required: true })}
                            onChange={(e) => handleColorTheme(e)}
                        />
                    </div>
                </div>
                <div className="image-upload">
                    <input 
                        type="file"
                        name="picture"
                        {...register("picture")}
                        onChange={handleUpload}
                    />
                    {error && <p>{error}</p>}
                    {file && <p>{progress}% uploaded</p>}
                    {url && <img height="100px" width="100px" src={url} alt={url}></img>}
                </div>
                    <div className="delivery">
                        <div className="fieldLabel">
                            <label>Would you like this order delivered?**</label>
                            <Controller 
                                render={({ field }) => (
                                <RadioGroup aria-label="delivery" {...field}>
                                        <FormControlLabel 
                                            value="Yes"
                                            control={<Radio />}
                                            label="Yes"
                                        />
                                        <FormControlLabel 
                                            value="No"
                                            control={<Radio />}
                                            label="No"
                                        />
                                    </RadioGroup>
                                )}
                                name="Delivery"
                                control={control}
                                rules={{ required: true }}
                                defaultValue="No"
                            />
                            {DeliveryInfoForm}
                        </div>
                    </div>
            <p>*Please note that the more layers added will result in thinner cakes. The maximum recommended number of layers on any one cake is 4.</p>
            <p>**Any requests for delivery will be left strictly up to the owner's discretion. As a courtesy, we ask that you only request delivery for the following zip codes: 70501, 70503, 70508, 70505, ect. Any others will be subject for pre-approval.</p>
        </CakeFormStyles>
    )
}

export default CakeForm;