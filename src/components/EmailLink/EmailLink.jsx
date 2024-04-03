import "./EmailLink.scss";

const EmailLink = ({ email }) => {
    return (
        <a href={`mailto:${email}`} className="email-button">
            <button >
                lauragalouye@yahoo.fr
            </button>
        </a>
    );
}


export default EmailLink