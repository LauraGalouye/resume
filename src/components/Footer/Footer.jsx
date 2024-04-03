import './Footer.scss'
import home from '../../assets/home.svg'

const Footer = () => { 

    return (
        <footer className="footer">
          <a href="#accueil"><img  className="footer__logo" src={home} alt="logo home" /> </a>   
        </footer>
    )
}   


export default Footer;