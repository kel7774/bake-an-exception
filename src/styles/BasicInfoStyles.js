import styled from 'styled-components'

const BasicInfoStyles = styled.div`
  display: flex;
  .fieldLabel {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    color: black;
    label {
      font-size: 0.8rem;
    }
    p { 
      font-size: 0.8rem;
    }
  }
`

export default BasicInfoStyles
