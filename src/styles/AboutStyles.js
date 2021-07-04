import styled from 'styled-components'

const AboutStyles = styled.div`
    .first-section, .second-section, .third-section {
        margin: 1rem 0;
        display: flex;
        flex: 1;
            .img-container {
                width: 30%;
                img {
                    border-radius: 120px 20px 120px 20px;
                    height: 20rem;
                    width: 25rem;
                }
            }
            .kristina-container, .derek-container, .kid-container {
                width: 70%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                    p {
                        margin: 0.4rem;
                        font-size: 1rem;
                    }
            }
    }
`

export default AboutStyles
