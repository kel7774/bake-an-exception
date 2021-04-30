import styled from 'styled-components';

const BasicInfoStyles=styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0.5rem;
    .row-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .fieldLabel {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            margin: 0 1rem;
            label {
                font-size: 0.8rem;
            }
            p { 
                font-size: 0.8rem;
            }
        }
    }
`;

export default BasicInfoStyles;