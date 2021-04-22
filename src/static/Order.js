import React, { useState } from 'react';
import Form from '../components/Form';

function Order() {
    const [submitted, setSubmitted] = useState(false);
      const showForm = <Form />;
      return (
        <div>
            {showForm}
        </div>
      )

}

export default Order;