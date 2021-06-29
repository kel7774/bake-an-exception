import styled from 'styled-components'

const CakeFormStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 1rem 1rem 0 0;
    span {
        border-radius: 0.3rem;
        color: black;
    }
    .dropdown-container, .text-container {
        display: flex;
        flex-direction: row;
        margin: 1rem 0;
    }
    .dropdown-container {
        display: flex;
        flex-direction: row;
    }
    .fieldLabel {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        margin: 0 0.5rem;
        span {
            // background-color: var(--darkLavender);
            border-radius: 0.3rem;
            color: black;
        }
        .Mui-checked {
            color: black;
        }
        label {
            font-size: 0.8rem;
        }
        #size {
            width: 100%;
        }
    }
`

export default CakeFormStyles
