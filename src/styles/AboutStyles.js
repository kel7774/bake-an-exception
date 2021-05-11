import styled, { css } from 'styled-components';

const spanBackground = css`
    color: var(--gold);
    background-color: var(--darkLavender);
`;

const AboutStyles=styled.div`
    .first-section, .second-section, .third-section {
        margin: 1rem 0;
        display: flex;
            .img-container {
                width: 30%;
                img {
                    border-radius: 120px 20px 120px 20px;
                    height: 20rem;
                    width: 25rem;
                }
                figcaption span {
                    ${spanBackground}
                }
            }
            .kristina-container, .derek-container, .kid-container {
                width: 70%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                    p, em {
                        margin: 0.4rem;
                        font-size: 1rem;
                    }
                    p span, em span {
                        ${spanBackground}
                    }
            }
            .kristina-container, .kid-container {
                text-align: left;
            }
            .derek-container {
                text-align: right;
            }
    }
`;

export default AboutStyles;