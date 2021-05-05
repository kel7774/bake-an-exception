import styled from 'styled-components';

const ContactStyles = styled.div`
.contact-form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .fieldLabel {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 1rem 1.5rem;
    }
        input, textarea {
            border-radius: 1rem;
            padding: 0.5rem;
            resize: none;
            width: 100%;
        }
}
`;

export default ContactStyles;