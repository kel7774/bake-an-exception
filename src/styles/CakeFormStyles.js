import styled from 'styled-components';

const CakeFormStyles=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 1rem 0;
    .drop-down-container, .text-container {
        display: flex;
        flex-direction: row;
        margin: 1rem 0;
    }
    .drop-down-container {
        display: flex;
        flex-direction: row;
    }
    .fieldLabel {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        margin: 0 0.5rem;
        label {
            font-size: 0.8rem;
        }
        p { 
            font-size: 0.5rem;
        }
        #size {
            width: 100%;
        }
    }
`;

export default CakeFormStyles;