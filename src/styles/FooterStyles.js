import styled from 'styled-components';

const FooterStyles=styled.footer`
    width: 100%;
    height: 4rem;
    position: fixed;
    bottom: 0;
    background-color: #F6B5A9;
    display: flex;
    flex-direction: column;
    justify-content: center;
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