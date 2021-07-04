import styled from 'styled-components'

const FooterStyles = styled.footer`
  bottom: 0;
  position: fixed;
  height: 60px;
  width: 100%;
  color: black;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #eaeaea;
  .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0 0.5rem;
      .icon-container {
        display: flex;
        flex-direction: row;
        .svg-container {
          height: 30px;
          width: 30px;
          margin: 0.4rem;
        }
    }
}
`
export default FooterStyles
