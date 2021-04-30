import React from 'react';
import BasicInfo from './BasicInfo';

function CupcakeForm ({ register, errors }) {
    return (
        <div>
            <BasicInfo register={register} errors={errors} />
        </div>
    )
}

export default CupcakeForm;