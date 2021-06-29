import styled from 'styled-components'

const CupcakeFormStyles = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    align-items: center;
    .fieldLabel {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        margin: 0.5rem 1rem;
            select {
                width: 100%;
                padding: 0.5rem;
            }
            label {
                font-size: 0.8rem;
            }
    }
     .fillings-container {
        display: flex;
        flex-direction: row;
     }
`

export default CupcakeFormStyles
