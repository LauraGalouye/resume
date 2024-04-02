import "./Contact.scss";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h1 className="contact__title">Contactez-moi</h1>
            <div className="contact__container">
                <div className="contact__box">
                    <img className="contact__box-logo" src={phone} alt="phone logo" />
                    <p className="contact__box-text">06.89.74.20.63</p>
                </div>
                <div className="contact__box">        
                    <img className="contact__box-logo" src={mail} alt="mail logo" />
                    <p className="contact__box-text">lauragalouye@yahoo.fr</p>
                </div>
                <div className="contact__box">
                    <p className="contact__box-text"> Je suis disponible pour un entretien sur Toulouse et ses environs</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;