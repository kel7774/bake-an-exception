import styled from 'styled-components';

const BasicInfoStyles=styled.div`
    display: flex;
    justify-content: space-between;
        .fieldLabel {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            color: var(--gold);
            span {
                background-color: var(--darkLavender);
                border-radius: 0.3rem;
            }
            label {
                font-size: 0.8rem;
            }
            p { 
                font-size: 0.8rem;
            }
        }
`;

export default BasicInfoStyles;