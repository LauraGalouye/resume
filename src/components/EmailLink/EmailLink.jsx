import "./EmailLink.scss";

const EmailLink = ({ email }) => {
    return (
        <a href={`mailto:${email}`} className="email-button">
            
                lauragalouye@yahoo.fr
            
        </a>
    );
}


export default EmailLink