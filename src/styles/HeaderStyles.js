import styled from 'styled-components'

const HeaderStyles = styled.nav`
    height: 3rem;
    background-color: white;
    color: black;
    text-transform: uppercase;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.5rem;
    .menu {
      display: flex;
      flex-direction: row;
      nav {
        margin: 0 0.7rem;
      }
    }
    a {
        color: black;
    }
    a:hover {
        text-decoration: underline;
    }
`

export default HeaderStyles
