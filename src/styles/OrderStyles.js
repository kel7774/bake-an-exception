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
            span, p {
                background-color: var(--darkLavendar);
                border-radius: 0.3rem;
                color: var(--gold);
            }
            .productType {
                margin: 1rem 0;
            }
            label {
                font-size: 2rem;
                text-transform: uppercase;
                color: var(--gold);
                margin: 0.5rem 0;
            }
            select, .selected-form-container  {
                width: 71%;
                padding: 0.5rem;
            }
            .selected-form-container {
                margin: 1rem 0;
            }
    }
`;

export default OrderStyles;