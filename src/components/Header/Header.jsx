import './Header.scss';
import { useState, useEffect } from 'react';

const Header = () => {
  const [showMenu, setMenu] = useState(false);


const handleMenu = () => {
  setMenu(!showMenu)
}

const closeMenu = () => {
if (window.innerWidth < 530) {
  setMenu(!showMenu);
}
else {
  setMenu(false);
}
}

useEffect(() => {
  // Fonction pour mettre à jour showMenu en fonction de la largeur de l'écran
  const updateMenu = () => {
    if (window.innerWidth >= 530) {
      setMenu(false);
    }
    if (window.innerWidth < 530) {
      setMenu(true);
    }
  };

  // Mettre à jour showMenu lors du chargement initial
  updateMenu();

  // Écouter les changements de taille de l'écran
  window.addEventListener('resize', updateMenu);

  // Nettoyer l'écouteur d'événements lors du démontage du composant
  return () => {
    window.removeEventListener('resize', updateMenu);
  };
}, []);



  return (
    <header className="header">
        <nav className="header__nav">
            <ul className={showMenu? "header__nav-list-hidden" : "header__nav-list-shown"}>
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