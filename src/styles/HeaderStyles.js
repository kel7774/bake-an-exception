import styled from 'styled-components'

const HeaderStyles = styled.nav`
    height: 3rem;
    background-color: var(--darkLavender);
    color: var(--gold);
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    a {
        color: #fff4e6;
    }
    a:hover {
        text-decoration: underline;
    }
        .content {
            margin: 0 0.5rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
`

export default HeaderStyles
