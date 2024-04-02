import './Header.scss';
import { useState } from 'react';

const Header = () => {
const [showMenu, setMenu] = useState(true);

const handleMenu = () => {
  setMenu(!showMenu)
}

const closeMenu = () => {
  setMenu(true);
}

  return (
    <header className="header">
        <nav className="header__nav">
            <ul className={!showMenu? "header__nav-list-shown" : "header__nav-list-hidden"}>
              <li className="header__nav-item"><a className="header__nav-link" href="#accueil" onClick={closeMenu}>ACCUEIL</a></li>
              <li className="header__nav-item"><a className="header__nav-link" href="#about" onClick={closeMenu}>A PROPOS</a></li>
              <li className="header__nav-item"><a className="header__nav-link" href="#competences" onClick={closeMenu}>COMPETENCES</a></li>
              <li className="header__nav-item"><a className="header__nav-link" href="#parcours" onClick={closeMenu}>PARCOURS</a></li>
              <li className="header__nav-item"><a className="header__nav-link" href="#contact" onClick={closeMenu}>CONTACT</a></li>
            </ul>
            <a className={!showMenu? "header__nav-btn-close" : "header__nav-btn"} onClick={handleMenu}><span id="burger" className={showMenu? "" : "open"}></span></a>
        </nav>
    </header>
  );
}

export default Header;