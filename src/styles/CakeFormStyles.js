import styled from 'styled-components'

const CakeFormStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem 1rem 0 0;
  .dropdown-container, .text-container {
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
  }
  .fieldLabel {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: 0 0.5rem;
    textarea {
      height: 4rem;
      width: 9rem;
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
