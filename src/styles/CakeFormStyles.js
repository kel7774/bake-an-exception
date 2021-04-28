import styled from 'styled-components';

const CakeFormStyles=styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0.5rem;
    .row-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        .fieldLabel {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            label {
                font-size: 0.8rem;
            }
            p { 
                font-size: 0.8rem;
            }
        }
    }
`;

export default CakeFormStyles;