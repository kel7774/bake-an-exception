import styled from 'styled-components';

const FooterStyles=styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    color: var(--gold);
    background-color: var(--darkLavendar);
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
`;

export default FooterStyles;