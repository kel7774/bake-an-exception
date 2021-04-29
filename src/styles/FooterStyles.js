import styled from 'styled-components';

const FooterStyles=styled.footer`
    width: 100%;
    height: 4rem;
    position: fixed;
    bottom: 0;
    background-color: #f6b9ad;
        .content {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0 0.5rem;
                .icon-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                        .svg-container {
                            height: 30px;
                            width: 30px;
                        }
                }
        }
`;

export default FooterStyles;