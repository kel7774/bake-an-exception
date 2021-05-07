import styled from 'styled-components';

const FooterStyles=styled.footer`
    width: 100%;
    height: 4rem;
    position: fixed;
    bottom: 0;
    color: #fff4e6;
    background-color: #3c2f2f;
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
            display: flex;
            flex-direction: row;
            justify-content: space-between;
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
`;

export default FooterStyles;