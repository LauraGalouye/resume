import "./Contact.scss";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import CallButton from "../CallButton/CallButton";
import EmailLink from "../EmailLink/EmailLink";

const Contact = () => {

    const phoneNumber = '+33 6 89 74 20 63'
    const email = 'lauragalouye@yahoo.fr'

    return (
        <section id="contact" className="contact">
            <h1 className="contact__title">Contactez-moi</h1>
            <div className="contact__container">
                <div className="contact__box">
                    <img className="contact__box-logo" src={phone} alt="phone logo" />
                    <CallButton className="contact__box-button" phoneNumber={phoneNumber}/>
                </div>
                <div className="contact__box">        
                    <img className="contact__box-logo" src={mail} alt="mail logo" />
                    <EmailLink className="contact__box-button" email={email}/>
                </div>
                <div className="contact__box">
                    <p className="contact__box-text"> Je suis disponible pour un entretien sur Toulouse & ses environs</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;