import styled from 'styled-components';

const HeaderStyles=styled.nav`
    height: 3rem;
    background-color: #f6b9ad;
    color: #f6b9ad;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
        .content {
            margin: 0 0.5rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
`;

export default HeaderStyles;