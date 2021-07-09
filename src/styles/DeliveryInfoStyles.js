import styled from 'styled-components'

const DeliveryInfoStyles = styled.div`
.row-container {
  display: flex;
  flex-direction: row;
}

.row-container div:nth-child(2) {
  margin-left: 1rem;
}

textarea {
  width: 100%;
  height: 5rem;
}

.delivery-field {
  display: flex;
  flex-direction: column;
  align-items: start;
}
`

export default DeliveryInfoStyles
