import React from 'react';
import DeliveryInfoStyles from '../../styles/DeliveryInfoStyles';

function DeliveryInfo ({ register }) {
    return (
        <DeliveryInfoStyles className="delivery-info-container">
            <div className="fieldLabel">
                <label htmlFor="address">Address</label>
                <input
                    {...register('address', { required: true })}
                    autoComplete="street-address"
                    name="address"
                    placeholder="Address"
                />
            </div>
            <div className="fieldLabel">
                <label htmlFor="city">City</label>
                <input 
                    {...register('city', { required: true })}
                    autoComplete="address-level2"
                    name="city"
                    placeholder="City"
                />
            </div>
            <div className="fieldLabel">
                <label htmlFor="zip">Zip Code</label>
                <input 
                    {...register('postalCode', { required: true })}
                    autoComplete="postal-code"
                    name="postalCode"
                    placeholder="Zip Code"
                />
            </div>
            <div className="fieldLabel">
                <label>Delivery Instructions:</label>
                <input 
                    {...register('deliveryInstructions')}
                    type="text"
                    name="deliveryInstructions"
                    placeholder="Delivery Instructions (optional)"
                />
            </div>
        </DeliveryInfoStyles>
    )
}

export default DeliveryInfo;