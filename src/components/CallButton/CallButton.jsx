import "../CallButton/CallButton.scss";


const CallButton = ({ phoneNumber }) => {
    return (
        <a  href={`tel:${phoneNumber}`} className="call-button">
            <button>
                06.89.74.20.63
            </button>
        </a>
    );
}

export default CallButton;