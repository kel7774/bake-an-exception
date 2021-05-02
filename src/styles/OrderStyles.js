import styled from 'styled-components';

const OrderStyles=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    .img-container {
        width: 50%;
        img {
            margin: 1rem 0;
            border-radius: 120px 20px 120px 20px;
        }
    }
    .dropdown {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        margin: 1rem 1rem;
        width: 50%;
            label {
                font-size: 2rem;
            }
            select, .selected-form-container  {
                width: 66%;
            }
            .selected-form-container {
                margin: 1rem 0;
            }
    }
`;

export default OrderStyles;