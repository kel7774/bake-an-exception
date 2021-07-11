import styled from 'styled-components'

const BasicInfoStyles = styled.div`
  display: flex;
  flex-direction: row;
  .fieldLabel {
    margin: 0 0.7rem;
  }
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
