import './Presentation.scss';
import photo1 from '../../assets/photo1.jpeg';
import office from '../../assets/office.jpg'
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';

const Presentation = () => {
  return (
    <section id="accueil" className="presentation" >
      
        <img className="presentation__background"  alt="" />
        
        <div className='presentation__container'>
          <div className="presentation__text">
            <p className="presentation__name">Laura Galouye</p>
            <p className="presentation__job">Développeur web</p>
            <p className="presentation__availability">Disponibilité Immédiate</p>
            <p className="presentation__city">Secteur : Toulouse et alentours</p>
            <a href={`/pdf/CV2024.pdf`} download >
              <p className="presentation__download">Télécharger mon CV</p>
            </a>
            <div className="presentation__logos">
              <a href="https://github.com/LauraGalouye" target="_blank"><img className="presentation__logo" src={github} alt="logo github" /></a>
              <a href="https://www.linkedin.com/in/laura-galouye-54322223b" target="_blank"><img className="presentation__logo" src={linkedin} alt="logo linkedin" /></a>
            </div>
          </div>
          <img className="presentation__image" src={photo1} alt="" />
        </div>

        

      
    </section>
  );
}

export default Presentation;