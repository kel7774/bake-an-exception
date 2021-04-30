import styled from 'styled-components';

const Styles = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    margin-top: 1rem;
        img {
            height: 30rem;
            width: 25rem;
            border-radius: 120px 20px 120px 20px;
            opacity: 3;
            transition: opacity 2s;
            -webkit-transition: opacity 2s;
        }
`;

export default Styles;