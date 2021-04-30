import styled from 'styled-components';

const OrderStyles=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    form {
        width: 70%;
    }
    .img-container {
        width: 30%;
        img {
            margin: 1rem 0;
            border-radius: 120px 20px 120px 20px;
        }
    }
        .dropdown {
            display: flex;
            flex-direction: column;
            margin: 0 1rem;
                label {
                    font-size: 2rem;
                }
        }
`;

export default OrderStyles;