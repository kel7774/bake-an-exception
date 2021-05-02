import styled from 'styled-components';

const CakeFormStyles=styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0;
    .fieldLabel {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        margin: 0 0.5rem;
        label {
            font-size: 0.8rem;
        }
        p { 
            font-size: 0.8rem;
        }
    }
`;

export default CakeFormStyles;