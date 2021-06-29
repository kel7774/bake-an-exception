import styled from 'styled-components'

const ContactStyles = styled.div`
img {
    border-radius: 120px 20px 120px 20px;
    height: 20rem;
    width: 25rem;
    margin: 0 1.5rem;
}
.contact-form-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    form {
        display: flex;
        flex-direction: row;
        align-items: center;
            .fieldLabel {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin: 1rem 1.5rem;
                    input[type="text"], input[type="tel"], input[type="email"], textarea {
                        border-radius: 1rem;
                        padding: 0.5rem;
                    }
                    input[type="submit"] {
                        height: fit-content;
                    }
                .comment-textarea {
                    height: 40%;
                }
            }
    }
}
`

export default ContactStyles
