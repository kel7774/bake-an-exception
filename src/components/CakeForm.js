import React from 'react';
import CakeFormStyles from '../styles/CakeFormStyles';

function CakeForm ({ register, handleSubmit, errors, handleTiers, handleLayers  }) {
    const onSubmit = data => console.log(data);
    return (
        <CakeFormStyles>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row-container">
                    <div className="fieldLabel">
                        <label for='firstName'>First Name</label>
                        <input 
                            placeholder="First Name" 
                            {...register("firstName", { required: true })}
                        />
                        {errors.firstName && "First name is required."}
                    </div>
                    <div className="fieldLabel">
                        <label for='lastName'>Last Name</label>
                        <input 
                            placeholder="Last Name"
                            {...register("lastName", { required: true })} 
                        />
                        {errors.lastName && "Last name is required."}
                    </div>
                </div>
                <div className="row-container">
                    <div className="fieldLabel">
                        <label for='email'>Email Address</label>
                        <input 
                            placeholder="Email Address"
                            {...register("email", { required: true })} 
                        />
                        {errors.email && "Email address is required."}
                    </div>
                    <div className="fieldLabel">
                        <label for='phoneNumber'>Phone Number</label>
                        <input 
                            placeholder="Phone Number"
                            {...register("phoneNumber", { required: true })} 
                        />
                        {errors.phoneNumber && "Phone number is required."}
                    </div>
                </div>
                <div className="row-container">
                    <div className="fieldLabel">
                        <label for="tiers">How many tiers?</label>
                        <select 
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
            </form>
        </CakeFormStyles>
    )
}

export default CakeForm;